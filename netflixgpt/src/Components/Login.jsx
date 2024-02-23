import React from 'react'
import { Hearder } from './Hearder'

export const Login = () => {
  return (
    <div>
        <Hearder/>
        <div className='absolute'>
            <img 
            srcset="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
            alt="banner" />
        </div>
        <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white'>
         <h1 className='font-bold text-3xl'>Sign In</h1>
          <input type="email"
           placeholder="Enter Your Email" className='p-2 my-2 w-full' />
          <input type="password" placeholder="Enter Your Password" 
          className='p-2 my-2 w-full' />
          <button className='p-4 my-4 bg-red-700 w-full'>Sign In</button>

        </form>
    </div>
  )
}

