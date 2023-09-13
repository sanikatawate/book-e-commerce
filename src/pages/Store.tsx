import { Books } from "../data/Data"
import BookItem from "@/components/BookItem"

const Store = () => {
  return (
    <div className="mt-24 max-w-5xl mx-auto flex flex-col items-center justify-center">
      <div className="my-6">
        <input className="text-2xl w-96 h-10 border border-myGrey rounded-full mx-4" />
        <button className="rounded-full bg-myBlue px-10 py-2 hover:bg-myDarkBlue text-white text-xl cursor-pointer w-auto h-auto">
          Search
        </button>
      </div>
    <div className="mb-12 mt-4 flex flex-row items-center justify-center gap-16 flex-wrap ">
      {Books.map((item, key)=>{
        return(<BookItem {...item} key={key} />)
      })}
    </div>
    </div>
  )
}

export default Store