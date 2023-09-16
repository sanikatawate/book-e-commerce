// import { Bars3Icon, XMarkIcon, ShoppingCartIcon, BellAlertIcon } from "@heroicons/react/24/solid";
import { useState } from "react"
import Logo from "../assets/Logo.png"
import { Link, useNavigate } from 'react-router-dom'
import { useShoppingCart } from "@/context/ShoppingCartContext"

const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart()
  const [isMenuToggled, setIsMenuToggled] = useState(false)
  const [isNotifToggled, setIsNotifToggled] = useState(false)
  let navigate = useNavigate();
  return (

    <header className='bg-white text-black fixed top-0 z-30 w-full py-3 shadow-sm'>
        <nav className='max-w-5xl mx-auto flex items-center justify-between'>
          <Link to="/" className='flex items-center justify-between text-2xl font-bold font-roboto' >
            <img src={Logo} alt="MythicInk" width="75px" height="75px" />
            <h1>LOGO</h1>
            {/* <img src={HarryPotter} alt="Harry Potter" height="2px" width="200px" /> */}
          </Link>
          <section className="hidden md:block space-x-8 text-xl" aria-label="main">
            <Link className="hover:text-myBlue" to='/'>Home</Link> 
            <Link className="hover:text-myBlue" to='/store'>Store</Link> 
            <Link className="hover:text-myBlue" to='/orders'>Orders</Link> 
            <Link className="hover:text-myBlue" to='/contactus'>Contact Us</Link> 
          </section>
          <div className='flex items-center justify-between gap-3'>
            <button className="rounded-full bg-myBlue px-10 py-2 hover:bg-myDarkBlue text-white text-xl hidden sm:block cursor-pointer relative w-auto h-auto"
            onClick={()=>{navigate('/login')}}>
              login
            </button>
            <button onClick={()=>setIsNotifToggled(!isNotifToggled)} className="text-xl px-2 hidden sm:block cursor-pointer relative w-8 h-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
              </svg>
            </button>
            <button onClick={openCart} className="text-xl px-2 cursor-pointer relative w-8 h-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
              {cartQuantity>0 && <div className="rounded-full bg-myYellow flex justify-center item-center text-white w-5 h-5 absolute bottom-0 right-0 translate-x-2 text-[15px]">{cartQuantity}</div>}
            </button>
            <button onClick={()=>setIsMenuToggled(!isMenuToggled)} className="text-3xl sm:hidden cursor-pointer relative w-8 h-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>

          {isMenuToggled && (
              <div className='fixed right-0 bottom-0 h-full w-64 z-40 sm:hidden bg-white drop-shadow-xl'>
                <div className='flex flex-col justify-end p-12'>
                  <div className='flex flex-row justify-between pb-10 text-2xl'>
                    <h1>Menu</h1>
                    <button onClick={()=>setIsMenuToggled(!isMenuToggled)}>
                      {/* <XMarkIcon className='h-6 w-6 text' /> */}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="text-2xl flex flex-col gap-10" aria-label="main">
                  <Link to='/'>Home</Link> 
                  <Link to='/store'>Store</Link> 
                  <Link to='/orders'>Orders</Link> 
                  <Link to='/contactus'>Contact Us</Link>
                  </div>
                </div>
              </div>
          )}
          {isNotifToggled && (
              <div className='fixed right-0 bottom-0 h-full w-1/3 z-40 bg-white drop-shadow-xl'>
                <div className='flex flex-col justify-end p-12'>
                  <div className='flex flex-row justify-between pb-10 text-2xl'>
                    <h1>To Do List</h1>
                    <button onClick={()=>setIsNotifToggled(!isNotifToggled)}>
                      {/* <XMarkIcon className='h-6 w-6 text' /> */}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="text-2xl flex flex-col gap-10" aria-label="main">
                    <ol>
                      <li className="my-4 text-3xl">First Task</li>
                      <li className="my-4 text-3xl">Second Task</li>
                      <li className="my-4 text-3xl">Third Task</li>
                      <li className="my-4 text-3xl">Fourth Task</li>
                    </ol>
                  </div>
                </div>
              </div>
          )}
        </nav>
    </header>
  )
}

export default Navbar