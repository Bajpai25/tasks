import React, { useState } from 'react'
import {BsFacebook,BsYoutube,BsFillArrowRightCircleFill} from "react-icons/bs"
import {ImInstagram} from "react-icons/im"
import {AiFillTwitterCircle} from "react-icons/ai"
function Contact() {
  const [submit,setsubmit]=useState(false);
  const handlesubmit=(e)=>setsubmit(!submit);
  return (
    <section className='bg-[#333333]'>
  <h1 className="text-center pb-6 text-4xl md:text-6xl font-sans font-extrabold text-orange-500">Contact Us</h1>
  <section className='container mx-auto flex flex-col md:flex-row justify-around text-lg md:text-2xl font-bold text-white'>
    <p className="text-center md:text-left">
      We would love to hear from you!
      <br/>If you have any questions, feedback,
      <br/>or inquiries, please don't hesitate to
      <br/>reach out to our friendly customer
      <br/>support team. You can contact us via
      <br/>email, phone, or by filling
      <br/>out the contact form on our website.
    </p>
    <section className="flex flex-row md:flex-col justify-center">
      <a href="https://www.facebook.com/fitbit"><BsFacebook className='h-12 w-12 md:h-20 md:w-20 mb-4 md:mb-8 md:ml-3 mr-3 mt-3 hover:text-blue-500'/></a>
      <a href="https://www.instagram.com/fitbit/"><ImInstagram className='h-12 w-12 md:h-20 md:w-20 mb-4 md:mb-8 md:ml-3 mr-3 mt-3 hover:text-purple-700'/></a>
      <a href="https://twitter.com/fitbit"><AiFillTwitterCircle className='h-12 w-12 md:h-20 md:w-20 mb-4 md:mb-8 md:ml-3 mr-3 mt-3 hover:text-blue-500'/></a>
      <a href="https://www.youtube.com/user/FitbitOfficialSite"><BsYoutube className='h-12 w-12 md:h-20 md:w-20 mb-4 md:mb-8 md:ml-3 mr-3 mt-3 hover:text-red-700'/></a>
    </section>
  </section>
  <section className='flex flex-col md:flex-row justify-center items-center pb-4 md:pb-12'>
    <p className='text-xl md:text-3xl font-sans mr-2 md:mr-8 font-extrabold text-orange-500'>Enter email</p>
    <BsFillArrowRightCircleFill className="text-xl md:text-3xl text-orange-500" />
    <form onSubmit={handlesubmit}>
      <input className='text-base md:text-lg w-48 md:w-80 text-black p-2 md:p-3 border-2 rounded-lg shadow-lg shadow-white mt-2 md:mt-0' type="email" placeholder='Enter email address' />
    </form>
    <button onClick={handlesubmit} className='text-base md:text-xl ml-2 md:ml-10 text-white w-20 md:w-28 font-semibold bg-orange-500 rounded-lg shadow-lg shadow-white md:mt-8 mb-4'>Submit</button>
  </section>
</section>

  )
}

export default Contact