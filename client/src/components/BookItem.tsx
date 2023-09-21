import { useShoppingCart } from "@/context/ShoppingCartContext"
import { formatCurrency } from "@/utilities/formatCurrency"
import { Link } from "react-router-dom"
type Props = {
    id: number,
    name: string, 
    price: number,
    imgUrl: string,
}

const BookItem = (props: any) => {
    const { _id, name, price, imageUrl} = props.book
    const { increaseItemQuantity } = useShoppingCart()
  return (
    <div>
        <div className='flex flex-col w-64'>
                <div className='text-xl w-60 flex justify-center flex-row items-center bg-gray-100'>
                    <img className='m-10 object-cover' src={imageUrl} alt="" width="135px" height="240px"/>
                </div>
                <div className='flex flex-wrap flex-col justify-between items-baseline m-2'>
                    <Link to={`/products/${name}`} className="hover:text-myDarkBlue">{name}</Link>
                    <p>{formatCurrency(price)}</p>
                </div>
                <div className="mt-2 h-10">
                    <button onClick={()=>increaseItemQuantity(_id)} className="rounded-full bg-myBlue px-10 py-2 hover:bg-myDarkBlue text-white text-xl cursor-pointer relative w-auto h-auto my-4">
                        Add To Cart   
                    </button>
                </div>
                
            </div>
        </div>

  )
}

export default BookItem