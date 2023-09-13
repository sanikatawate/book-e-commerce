import { useState } from 'react'

const Login = () => {
  const [data, setData] = useState({email:''})

  const handleChange = (e: React.FormEvent<HTMLInputElement>)=>{
    setData((prev)=>{
      return({...prev, [e.currentTarget.id]: e.currentTarget.value});
    });
  }

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>)=>{
    e.preventDefault()
    console.log(data)
  }
  return (
    <section className='mt-32 max-w-3xl mx-auto flex flex-col justify-center p-6 items-center gap-8'>
          <div className=''>
            <p className='text-5xl font-semibold text-black'>Welcome Back</p>
            <p className='text-3xl font-light my-2 text-black'>Enter you email to sign into your account</p>
            <form>
              <input 
                className='border border-myGrey w-full rounded-full h-10 p-4'
                type="text"
                placeholder="name@provider.com"
                id="email"
                onChange={handleChange}
                value={data.email}/>
              <button className='rounded-full my-4 bg-myBlue px-10 py-2 hover:bg-myDarkBlue text-white text-xl cursor-pointer w-auto h-auto'
               onSubmit={handleSubmit}>
                Sign in with Email
              </button>
            </form>
            <p> Or Continue With</p>
            <div>
              <button className='rounded-md my-4 mx-2 border border-myGrey px-10 py-2 hover:bg-myDarkBlue hover:text-white text-black text-xl cursor-pointer w-auto h-auto'>
                Google
              </button>
              <button className='rounded-lg my-4 mx-2 border border-myGrey px-10 py-2 hover:bg-myDarkBlue hover:text-white text-black text-xl cursor-pointer w-auto h-auto'>
                Github
              </button>
            </div>
          </div>
    </section>
  )
}

export default Login
