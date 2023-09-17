import { Books } from '@/data/Data'
import { useShoppingCart } from '@/context/ShoppingCartContext'
import { formatCurrency } from '@/utilities/formatCurrency'

type Props = {
    id:number 
    quantity:number
}

const CartItemCard = ({id, quantity}: Props) => {
    const { removeItemFromCart } =useShoppingCart()
    const item = Books.find(item => item.id===id)
    // const item = Books.filter(item => item.id===id)
    type item = {
        id: number;
        name: string;
        price: number;
        imgUrl: string;
        }
    if (item===undefined) return null
  return (
    <div>
    <div className='flex flex-row items-start gap-2 p-4'>
        <img className='md:h-48 md:w-27 h-32 object-cover' src={item.imgUrl} alt="" />
        <div className='me-auto flex flex-col my-2'>
            <div className='text-xl'>
                {item.name}
                {quantity>1 && (<span className='text-myGrey text-xs'> {quantity}x</span>)}
            </div>
            <div className='text-myGrey hidden md:block text-sm'>{formatCurrency(item.price)}</div>
        </div>
        <div className='hidden sm:block my-2 text-xl'>{formatCurrency(quantity*item.price)}</div>
        <button onClick={()=>removeItemFromCart(item.id)}>&times;</button>
    </div>
    <div className='sm:hidden my-2 text-xl text-right shadow-sm'><span className='mx-4'>Price: {formatCurrency(quantity*item.price)}</span></div>
    </div>
  )
}

export default CartItemCard