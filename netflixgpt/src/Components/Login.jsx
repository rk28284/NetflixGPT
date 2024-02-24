import React, { useRef, useState } from 'react'
import { Hearder } from './Hearder'
import { checkValiadater } from '../Utilities/valiadater'

export const Login = () => {
  const [isSignIn,setIsSignIn]=useState(true)
  const [isError,setIsError]=useState(null)

const email=useRef(null)
const password=useRef(null)
const handleButtonclick=()=>{
  //validate the form
const message= checkValiadater(email.current.value,password.current.value)

  console.log(message);
setIsError(message)
}


  const toggleForm=()=>{
    setIsSignIn(!isSignIn)
  }
  return (
    <div>
        <Hearder/>
        <div className='absolute'>
            <img 
            srcset="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
            alt="banner" />
        </div>
        <form onSubmit={(e)=>(e.preventDefault())} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0
         text-white rounded-lg bg-opacity-80'>
         <h1 className='font-bold text-3xl'>{isSignIn?"Sign In":"Sign Out"}</h1>
{!isSignIn&&<input type="text"
           placeholder="Enter Your Full Name" className='p-4 my-4 w-full bg-gray-700' />}
          <input type="email" ref={email}
           placeholder="Enter Your Email" className='p-4 my-4 w-full bg-gray-700' />
        
          <input type="password"   ref={password} placeholder="Enter Your Password"
          className='p-4 my-4 w-full bg-gray-700' />
<p className='text-red-500 font-bold text-lg py-4'>{isError}</p>

          <button onClick={handleButtonclick} className='p-4 my-6 bg-red-700 w-full rounded-lg'>
          {isSignIn?"Sign In":"Sign Out"}
            </button>

<p onClick={toggleForm} className='py-4 cursor-pointer'>
{isSignIn?"New to Netflix? Sign up now.":"Allready registered? SignIn Now"}
  
  </p>
        </form>
    </div>
  )
}

