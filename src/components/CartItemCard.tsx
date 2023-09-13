import React from 'react'
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
    type item = {
        id: number;
        name: string;
        price: number;
        imgUrl: string;
        }
    if (item===null) return null
  return (
    <div className='flex flex-row justify-center items-start gap-2'>
        <img className='h-48 w-27 object-cover' src={item.imgUrl} alt="" />
        <div className='me-auto flex flex-col my-2'>
            <div>
                {item.name}
                {quantity>1 && (<span className='text-myGrey text-xs'> {quantity}x</span>)}
            </div>
            <div className='text-myGrey text-sm'>{formatCurrency(item.price)}</div>
        </div>
        <div className='my-2'>{formatCurrency(quantity*item.price)}</div>
        <button onClick={()=>removeItemFromCart(item.id)}>&times;</button>
    </div>
  )
}

export default CartItemCard