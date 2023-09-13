import { Routes, Route} from 'react-router-dom'

import Navbar from "./components/Navbar"
import Home from './pages/Home'
import Store from './pages/Store'
import Orders from './pages/Orders'
import ContactUs from './pages/ContactUs'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Footer from './components/Footer'
import { ShoppingCartProvider } from './context/ShoppingCartContext'


function App() {
  return (
    <div className='app'>
      <ShoppingCartProvider>
        <Navbar />
          <Routes>
            <Route  path='/' element={<Home/>} />
            <Route  path='/store' element={<Store />} />
            <Route  path='/orders' element={<Orders />} />
            <Route  path='/contactus' element={<ContactUs />} />
            <Route  path='/signup' element={<SignUp/>} />
            <Route  path='/login' element={<Login/>} />
          </Routes>
        <Footer />
      </ShoppingCartProvider>
    </div>
  )
}

export default App
