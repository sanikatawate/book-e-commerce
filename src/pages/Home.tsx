import Background from "../assets/lalala.webp"
import { testimonials } from "../data/Data"
import { useNavigate } from "react-router-dom"
import aboutUsPic from "@/assets/AboutUs.jpeg"

const Home = () => {
  let navigate = useNavigate();
  return (
    <div>

      <section id='home' className='max-w-full mx-auto bg-gray-50 mt-24'>
        <div className='max-w-5xl mx-auto flex flex-col-reverse justify-center md:flex-row p-6 items-center gap-8 mb-0'>
          <div className='sm:w-1/2 text-center md:text-left'>
            <h4 className='md:text-2xl text-xl font-bold md:text-left text-black md:py-2'>LIVE THE UNWRITTEN</h4>
            <h1 className='md:text-6xl text-4xl text-black md:py-2'>Experience the enchanting world of <span className="text-myYellow">Wizardry</span> in <span className="text-myDarkBlue font-bold font-serif">HOGWARDS</span></h1>
            <p className='text-xl py-2'>Watch Harry Potter for a magical journey that explores friendship, courage, and the power of imagination.</p>
            <button onClick={()=>navigate('/store')} className='text-2xl my-4 text-white py-2 px-10 rounded-full bg-myBlue'>Get Your Collection...</button>    
            <div className='flex flex-row justify-start items-start gap-10 py-4'>
              <div>
                <h1 className='md:text-4xl text-3xl'>4.47/5</h1>
                <h5>Ratings from GoodReads</h5>
              </div>
              <div>
                <h1 className='md:text-4xl text-3xl'>6,324,442+</h1>
                <h5>happy Readers</h5>
              </div>
            </div>
          </div>
          <div>
            <img src={Background} className="object-cover" alt="" width="500px" height="1000px" />
            <h1>NEW BACKGROUND PIC REMAINING</h1>
          </div>
        </div>
      </section>

      <section id="aboutus" className="my-16 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start justify-start">
          <div><img className="h-[240px] w-[360px] max-w-6xl" src={aboutUsPic} alt="" /></div>

          <div className="p-10 pt-0">
            <h1 className="text-3xl text-black font-montserrat pb-4">About Us</h1>
            <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
            </p>
            <button className='text-2xl my-4 text-white py-2 px-10 rounded-full bg-myBlue'>Learn More</button>    
          </div>
        </div>
      </section>


      <section id="testimonials" className="p-6 bg-myDarkBlue">
        <div className="max-w-5xl mx-auto flex flex-col items-start justify-center">
          <h2 className="text-4xl font-bold text-left sm:text-5xl md:py-2 text-white">
            Reviews
          </h2>
          <p>Lorem Ipsum has been the industry's standard dummy text.</p>
          <ul className="list-none mx-auto flex flex-col sm:flex-row items-center gap-8">
            {testimonials.map((item)=>{
              return(
                <li className="w-11/12 sm:w-5/6 flex flex-col items-center md:py-6 px-2 rounded-3xl shadow-xl shadow-slate-900">
                  <figure className="my-4">
                  <blockquote
                    className=" dark:bg-black bg-myBlue pl-14 pr-8 py-12 rounded-3xl relative"
                  >
                    <div></div>
                    <p className="text-2xl overflow-scroll hide-scrollbar h-56 sm:text-3xl text-left mt-2 text-myDarkBlue dark:text-slate-400 before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2 after:content-['\201D'] after:font-serif after:absolute after:-bottom-20 after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-2">
                      {item.review}
                    </p>
                  </blockquote>
                  <figcaption
                    className="italic text-xl sm:text-2xl text-right mt-2 text-white dark:text-slate-400"
                  >
                    &#8212; {item.user}
                  </figcaption>
                </figure>
                </li>
              )
            })}
          </ul>

        </div>
      </section>
    </div>
  )
}

export default Home