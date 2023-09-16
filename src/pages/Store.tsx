import { Books } from "../data/Data"
import BookItem from "@/components/BookItem"

const Store = () => {
  return (

    <div className="mt-24 max-w-5xl mx-auto flex flex-col justify-center">

      <div className="hidden sm:block my-6 flex-row justify-start items-baseline ml-16">
        <input className="text-2xl md:w-96 h-10 border border-myGrey sm:rounded-lg sm:mx-4 shadow-lg" />
        <button className="sm:rounded-lg bg-myBlue px-10 pt-1 pb-3 shadow-lg hover:bg-myDarkBlue text-white text-xl cursor-pointer w-auto h-auto">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
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