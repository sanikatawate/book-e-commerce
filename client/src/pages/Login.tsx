import { useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom'

const Login = () => {
  let navigate = useNavigate();
  const [data, setData] = useState({email:'', password:''})

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e)=>{
    setData({...data, [e.currentTarget.name]: e.currentTarget.value});
  }

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    console.log("-----------------------")
    console.log(data)
    const response = await fetch("http://localhost:5000/auth/login", {
      method:"POST",
      mode:"cors",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify(data)
    })
    let temp = await response.json()
    console.log(temp.sucess)
    if(temp.sucess){
      navigate('/');
    }
  }
  return (
    <div>
      <Helmet>
        <title>Login Page</title>
      </Helmet>
      <section className='mt-40 mb-28 mt- max-w-3xl mx-auto flex flex-col justify-center p-6 items-center gap-8'>
            <div className=''>
              <p className='text-5xl font-semibold text-black'>Welcome Back</p>
              <p className='text-3xl font-light my-2 text-black'>Enter you email to sign into your account</p>
              <form onSubmit={handleSubmit}>
                {/* <label className='m-4 h-auto my-10'>Email</label><br/> */}
                <input 
                  className='border border-myGrey w-2/3 rounded-lg h-10 p-4 m-1'
                  type="text"
                  placeholder="Email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  value={data.email}
                /><br/>
                {/* <label className='m-4 h-auto'>Password</label><br/> */}
                <input 
                  className='border border-myGrey w-2/3 rounded-lg h-10 p-4 m-1'
                  type="password"
                  placeholder="Password"
                  id="password"
                  name="password"
                  onChange={handleChange}
                  value={data.password}
                />
                <button className='rounded-full my-4 bg-myBlue px-10 py-2 hover:bg-myDarkBlue text-white text-xl cursor-pointer w-auto h-auto'
                type='submit'>
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
    </div>
  )
}

export default Login
