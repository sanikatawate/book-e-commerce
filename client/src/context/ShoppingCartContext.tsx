import { useContext, createContext, ReactNode, useState} from 'react'
import Shoppingcart from '@/components/Shoppingcart'
// import axios from "axios";

type ShoppingCartProviderProps = {
    children: ReactNode;
}

type ShoppingCartContext = {
    openCart: ()=> void
    closeCart: ()=> void
    getItemQuantity : (id: number)=> number
    increaseItemQuantity : (id: number)=> void
    decreaseItemQuantity : (id:number)=> void
    removeItemFromCart : (id:number)=> void
    cartQuantity: number
    cartItems: CartItem[]
}

type CartItem = {
    id: number
    quantity: number
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }:ShoppingCartProviderProps){
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    const [isOpen, setIsOpen] = useState(false)
    const cartQuantity = cartItems.reduce((quantity, item)=>item.quantity+quantity,0)

    const openCart = ()=> setIsOpen(true)
    const closeCart = ()=> {setIsOpen(false); console.log("closed")}

    function getItemQuantity(id:number){
        return(cartItems.find(item => item.id===id)?.quantity || 0)
    }
    function increaseItemQuantity(id:number){
        setCartItems(prev=>{
            if(prev.find(item=>item.id===id)==null){
                return([...prev, {id, quantity:1}])
            }
            else{
                return(prev.map((item)=>{
                    return(item.id===id? {...item, quantity:item.quantity+1} : item )
                }))
            }
        })
    }
    function decreaseItemQuantity(id:number){
        setCartItems(prev=>{
            if(prev.find(item=>item.id===id)?.quantity===1){
                return(prev.filter(item => item.id!=id))
            }
            else{
                return(prev.map((item)=>{
                    return(item.id===id? {...item, quantity:item.quantity-1} : item )
                }))
            }
        })
    }
    function removeItemFromCart(id:number){
        setCartItems(prev=>prev.filter(item=>item.id !==id))
    }

    return(
        <ShoppingCartContext.Provider value={{ openCart, closeCart, getItemQuantity, increaseItemQuantity, decreaseItemQuantity, removeItemFromCart, cartQuantity, cartItems }}>
            {children}
            {isOpen && <Shoppingcart />}
        </ShoppingCartContext.Provider>
    )
}