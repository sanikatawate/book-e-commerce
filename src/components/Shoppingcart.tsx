import { useShoppingCart } from '@/context/ShoppingCartContext'
import CartItemCard from './CartItemCard'
import { formatCurrency } from '@/utilities/formatCurrency'
import { Books } from "../data/Data"
import emptyCartPic from "../assets/emptyCart.jpg"
import { useNavigate } from "react-router-dom"

const Shoppingcart = () => {
    const {closeCart, cartItems} = useShoppingCart()
    let navigate = useNavigate()
  return (
    <div>
        <div className='fixed right-0 bottom-0 h-full w-3/4 md:w-5/12 z-40 bg-white drop-shadow-xl overflow-scroll'>
            <div className='flex flex-col justify-end mt-6 md:p-12'>
                <div className='flex flex-row justify-between shadow-sm p-4 mb-6 text-2xl'>
                <h1 className='text text-myDarkBlue font-bold'>Cart</h1>
                <button onClick={()=>closeCart()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-myDarkBlue hover:text-myBlue">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                </div>
                {cartItems.length>0 && <div className="text-2xl flex flex-col gap-6 md:gap-10">
                    {cartItems.map((item, key)=>{
                        return(<CartItemCard key={key} {...item} />)
                    })}
                    <div className='flex flex-col'>
                        <div className='md:ms-auto text-center font-bold 5xl mb-4'>
                            Total: {formatCurrency(
                            cartItems.reduce((total, cartItem)=>{
                                const item = Books.find(i => i.id===cartItem.id)
                                return total+(item?.price || 0)*cartItem.quantity}, 0)
                            )}
                        </div>
                        <button className='rounded-full mx-auto bg-myBlue px-10 py-2 hover:bg-myDarkBlue text-white text-xl cursor-pointer relative w-auto h-auto'>
                            Place Order
                        </button>
                    </div>
                </div>}
                {cartItems.length==0 && <div className='flex flex-col items-center'>
                    <h1 className='text-center text-4xl text-black font-semibold'>Your Cart is Empty</h1>
                    <img src={emptyCartPic} alt="Empthycart" />
                    <button onClick={()=>{navigate('/store');closeCart()}} className='text-2xl my-4 mx-auto text-white py-2 px-10 rounded-full bg-myBlue'>Continue Shopping</button>    
                </div>}
            </div>
            </div>
    </div>
  )
}

export default Shoppingcart