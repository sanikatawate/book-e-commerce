import { Books } from "../data/Data"
import BookItem from "@/components/BookItem"

const Store = () => {
  return (

    <div className="sm:mt-28 mt-24 max-w-5xl mx-auto flex flex-col justify-center">

      <div className="border border-myGrey rounded-lg sm:border-none my-6 mx-auto sm:ml-12 flex flex-row justify-start items-start shadow-lg sm:shadow-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 m-2 sm:hidden">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        <input className="text-2xl md:w-96 h-10 sm:border sm:border-myGrey rounded-lg sm:mx-4 sm:shadow-lg" />
        <button className="hidden sm:block sm:rounded-lg bg-myBlue px-10 pt-1 pb-3 shadow-lg hover:bg-myDarkBlue text-white text-xl cursor-pointer w-auto h-auto">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
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