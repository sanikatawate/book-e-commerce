import { useShoppingCart } from '@/context/ShoppingCartContext'
import CartItemCard from './CartItemCard'
import { formatCurrency } from '@/utilities/formatCurrency'
import { Books } from "../data/Data"

const Shoppingcart = () => {
    const {closeCart, cartItems} = useShoppingCart()
  return (
    <div>
        <div className='fixed right-0 bottom-0 h-full w-5/12 z-40 bg-white drop-shadow-xl overflow-scroll'>
            <div className='flex flex-col justify-end p-12'>
                <div className='flex flex-row justify-between pb-10 text-2xl'>
                <h1>Cart</h1>
                <button onClick={()=>closeCart()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                </div>
                <div className="text-2xl flex flex-col gap-10" aria-label="main">
                    {cartItems.map((item, key)=>{
                        return(<CartItemCard key={key} {...item} />)
                    })}
                    <div className='ms-auto font-bold 5xl'>Total: {formatCurrency(
                        cartItems.reduce((total, cartItem)=>{
                            const item = Books.find(i => i.id===cartItem.id)
                            return total+(item?.price || 0)*cartItem.quantity}, 0)
                        )}
                    </div>
                </div>
            </div>
            </div>
    </div>
  )
}

export default Shoppingcart