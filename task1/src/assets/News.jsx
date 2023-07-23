import React, { useState } from 'react'
import { useRef } from 'react';
import emailjs from "emailjs-com"
import {BsFillEmojiSmileFill,BsEmojiFrownFill} from "react-icons/bs"
function News() {
  const form=useRef();
  const [submit,setsubmit]=useState(false);
  const sendEmail=(e)=>{
    e.preventDefault()
  
    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_USER_ID
    )
    .then(
      result=>console.log(result.text),
      error=> console.error(error.text)
    );
    e.target.reset();
    e.target.reset();
    setsubmit(!submit);
    }
    
  return ( 
    <section className='bg-[#333333]'>
  <h1 className='ml-4 md:ml-28 text-4xl md:text-6xl font-sans p-4 md:p-8 font-extrabold text-orange-500'>Newsletter</h1>
  <section class="flex flex-col md:flex-row justify-around">
    <p class="font-mono text-lg md:text-2xl mt-4 font-semibold text-white text-center md:text-left">
      Stay up-to-date with the latest fitness trends, 
      <br/>tips, and exclusive offers by 
      subscribing to our newsletter. 
      <br/>Enter your email address in the signup form below
      <br/> to join our community. 
      <br/>and 
      receive regular updates delivered straight to your inbox.
      <br/>{submit?(<p class="font-mono text-lg md:text-2xl mt-4 font-semibold text-white text-center">Thanks for your response!</p>):("")}
    </p>
    <section class="flex flex-col items-center mt-8">
      <form ref={form} onSubmit={sendEmail} class="bg-white w-64 md:w-80 shadow-md rounded px-4 md:px-8 pt-6 pb-8 mb-4">
        <section class="mb-4">
          <label class="block text-gray-700 text-base md:text-lg font-bold mb-2" for="name">
            Name:
          </label>
          <input name="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm md:text-base" id="name" type="text" placeholder="Enter your name" required/>
        </section>
        <section class="mb-4">
          <label class="block text-gray-700 text-base md:text-lg font-bold mb-2" for="email">
            E-mail:
          </label>
          <input name="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm md:text-base" id="email" type="email" placeholder="Enter your email" required/>
        </section>
        <section class="mb-6">
          <label class="block text-gray-700 text-base md:text-lg font-bold mb-2" for="message">
            Message:
          </label>
          <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm md:text-base" id="message" rows="4" placeholder="Enter your message" name="message"></textarea>
        </section>
        <section class="flex items-center justify-center">
          <button onclick={sendEmail} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm md:text-base" type="submit">
            Submit
            <p>{submit?(<BsFillEmojiSmileFill/>):(<BsEmojiFrownFill/>)}</p>
          </button>
        </section>
      </form>
    </section>
  </section>
</section>

  )
}

export default News