// import background from "../assets/ContactUsBackgroundPic.jpeg"
// import RandomPic from "../assets/contactUsPic.png"

import { Helmet } from "react-helmet-async"

const background = new URL('../assets/ContactUsBackgroundPic.jpeg', import.meta.url).href
const RandomPic = new URL('../assets/contactUsPic.png', import.meta.url).href
const ContactUs = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <div className="sm:mt-20 mt-[90px] bg-myDarkBlue">
        <img className="bg-black mx-auto" src={background} alt="" />
      </div>
      <section
        id="contactus"
        className="max-w-5xl sm:mt-6 mb-20 mx-auto"
      >
        <div className="flex flex-col-reverse justify-center sm:flex-row items-center gap-8 mb-0">
          <div className="flex flex-col justify-center items-center w-full">
          <h2
            className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white"
          >
            Contact Us
          </h2>
          <form
            className="text-2xl w-2/3 flex flex-col items-left gap-4"
          >
            <label className="px-2 text-xl sm:text-2xl text-black" htmlFor="subject">Subject: </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Your Subject"
              className="w-full text-black text-xl sm:text-2xl p-3 rounded-xl border border-solid border-myGrey"
            />
            <label className="px-2 text-xl sm:text-2xl text-black" htmlFor="message">Message: </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message:"
              required
              className="w-full text-black text-xl sm:text-2xl p-3 rounded-xl border border-solid border-myGrey"
            ></textarea>
            <button className='text-2xl my-4 text-white py-2 px-10 rounded-lg bg-myBlue'>Submit</button>    
          </form>
          </div>
          <div>
            <img className="hidden sm:block" src={RandomPic} alt="" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs