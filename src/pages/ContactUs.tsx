import background from "../assets/ContactUsBackgroundPic.jpeg"
import RandomPic from "../assets/contactUsPic.png"
const ContactUs = () => {
  return (
    <div>
      <div className="mt-[90px]">
        <img className="bg-black" src={background} alt="" />
      </div>
      <section
        id="contactus"
        className="max-w-5xl my-10 mb-36 mx-auto"
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
            <label htmlFor="subject">Subject: </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Your Subject"
              className="w-full text-black text-2xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"
            />
            <label htmlFor="message">Message: </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message:"
              required
              className="w-full text-black text-2xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"
            ></textarea>
            <button
              className="bg-myBlue hoverbg-teal-600 active:bg-myDarkBlue text-white p-3 w-48 rounded-xl border border-solid border-slate-900 dark:border-none"
            >
              Submit
            </button>
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