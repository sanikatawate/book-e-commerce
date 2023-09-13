import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer id="footer" className="bg-myDarkBlue text-white text-xl bottom-0">
      <section
        className="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between"
      >
        <address>
          <p className='text-sm mb-1'>Looking for Pottermore?</p>
          <p className='text-sm mb-1'> Wizarding World is the new official home of Harry Potter</p>
          <p className='text-sm mb-1'>Join the Fan Club and bring your traits with you.</p>
          Email:
          <a href="mailto:inquiries@harryporter.com">Inquires@harryporter.com</a><br />
          Phone: <a href="tel:+199999999">(1111)1111-1111</a>
        </address>
        <nav className="hidden md:flex flex-col gap-2" aria-label="footer">
          <h1 className='font-bold'>Routes</h1>
          <Link to="/" className="hover:opacity-90">Home</Link>
          <Link to="/store" className="hover:opacity-90">Store</Link>
          <Link to="/orders" className="hover:opacity-90">orders</Link>
          <Link to="/contactus" className="hover:opacity-90">Contact Us</Link>
        </nav>
        <div className="flex flex-col sm:gap-2">
          <p className="text-right">Copyright &copy; <span id="year">2022</span></p>
          <p className="text-right">All Rights Reserved</p>
        </div>
      </section>
    </footer>
  )
}

export default Footer