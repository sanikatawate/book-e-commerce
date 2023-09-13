import Background from "../assets/lalala.webp"
import { testimonials } from "../data/Data"
import { useNavigate } from "react-router-dom"

const Home = () => {
  let navigate = useNavigate();
  return (
    <div>

      <section id='home' className='max-w-full mx-auto gap-16 bg-gray-50 pt-10 mb-0 md:h-full md:pb-0'>
        <div className='max-w-5xl mx-auto flex flex-col justify-center md:flex-row p-6 items-center gap-8 my-12 mb-0'>
          <div className='sm:w-1/2 mt-5'>
            <h4 className='text-2xl font-bold md:text-left text-black py-2'>LIVE THE UNWRITTEN</h4>
            <h1 className='text-6xl text-black py-2'>Experience the enchanting world of <span className="text-myYellow">Wizardry</span> in <span className="text-myDarkBlue font-bold font-serif">HOGWARDS</span></h1>
            <p className='text-xl py-2'>Watch Harry Potter for a magical journey that explores friendship, courage, and the power of imagination.</p>
            <button onClick={()=>navigate('/store')} className='text-2xl my-4 text-white py-2 px-10 rounded-full bg-myBlue'>Get Your Collection...</button>    
            <div className='flex flex-row justify-start items-start gap-10 py-4'>
              <div>
                <h1 className='text-4xl'>4.47/5</h1>
                <h5>Ratings from GoodReads</h5>
              </div>
              <div>
                <h1 className='text-4xl'>6,324,442+</h1>
                <h5>happy Customers</h5>
              </div>

            </div>
          </div>
          <div>
            <img src={Background} className="object-cover" alt="" width="500px" height="1000px" />
            <h1>NEW BACKGROUND PIC REMAINING</h1>
          </div>
        </div>
      </section>



      <section id="testimonials" className="p-6 scroll-mt-20 bg-myDarkBlue">
        <div className="max-w-5xl mx-auto flex flex-col items-start justify-center">
          <h2 className="text-4xl font-bold text-left sm:text-5xl py-2 text-white">
            Reviews
          </h2>

          <p>Lorem Ipsum has been the industry's standard dummy text.</p>

          <ul className="list-none mx-auto h-96 flex flex-col sm:flex-row items-center jus gap-8">
            {testimonials.map((item)=>{
              return(
                <li className="w-2/3 sm:w-5/6 flex flex-col items-center dark:border-gray-100 py-6 px-2 rounded-3xl shadow-xl">
                  <figure className="my-4">
                  <blockquote
                    className=" dark:bg-black bg-myBlue pl-14 pr-8 py-12 rounded-3xl relative"
                  >
                    <div></div>
                    <p className="text-2xl overflow-hidden h-56 sm:text-3xl text-left mt-2 text-myDarkBlue dark:text-slate-400 before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2 after:content-['\201D'] after:font-serif after:absolute after:-bottom-20 after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-2">
                      {item.review}
                    </p>
                  </blockquote>
                  <figcaption
                    className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400"
                  >
                    &#8212; {item.user}
                  </figcaption>
                </figure>
                </li>
              )
            })}
            {/* {testimonials.map(({profileImg, review, user}: string)=>{
              <li className="w-2/3 sm:w-5/6 flex flex-col items-center dark:border-gray-100 py-6 px-2 rounded-3xl shadow-xl">
              <figure className="my-4">
              <blockquote
                className=" dark:bg-black bg-myBlue pl-14 pr-8 py-12 rounded-3xl relative"
              >
                <p
                  className="text-2xl sm:text-3xl text-left mt-2 text-myDarkBlue dark:text-slate-400 before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2 after:content-['\201D'] after:font-serif after:absolute after:-bottom-20 after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-2"
                >
                  {review}
                </p>
              </blockquote>
              <figcaption
                className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400"
              >
                &#8212; {user}
              </figcaption>
            </figure>
            </li>
            })} */}
          </ul>

        </div>
      </section>
    </div>
  )
}

export default Home