
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer id="footer" className="bg-myDarkBlue text-white text-xl bottom-0">
      <section
        className="max-w-4xl mx-auto p-4 flex flex-col"
      >
      <div className='flex flex-col sm:flex-row sm:justify-between'>
        <address>
          <div className='flex flex-wrap w-64'>
          <p className='text-xl mb-1'>Looking for Pottermore? Wizarding World is the new official home of Harry Potter</p>
          <p className='text-xl mb-1'>Join the Fan Club and bring your traits with you.</p>
          </div>
        </address>
        <nav className="hidden md:flex flex-col gap-2" aria-label="footer">
          <h1 className='font-bold'>Routes</h1>
          <Link to="/" className="hover:opacity-90">Home</Link>
          <Link to="/store" className="hover:opacity-90">Store</Link>
          <Link to="/orders" className="hover:opacity-90">orders</Link>
          <Link to="/contactus" className="hover:opacity-90">Contact Us</Link>
        </nav>
        <div className="flex flex-col sm:gap-2">
        <h1 className='font-bold'>Contact Info</h1>
          Email:
          <a href="mailto:inquiries@harryporter.com">Inquires@harryporter.com</a>
          Phone: <a href="tel:+199999999">(1111)1111-1111</a>
        </div>
      </div>
      <hr className="mx-auto bg-black dark:bg-myGrey w-1/2 my-6" />
      <div>
        <p className="text-center">Copyright &copy; <span id="year">2022</span> | All Rights Reserved</p>
      </div>

      </section>
      
    </footer>
    
  )
}

export default Footer