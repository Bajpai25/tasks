import React from 'react'

function About() {
  return (
    <section className=' pb-8 bg-[#333333]'>
        <h1 className='pt-10 text-center mb-12 font-bold text-white
        text-6xl font-sans'>ABOUT US</h1>
        <section className=' flex flex-col md:flex-row justify-around '>
            <p className=' text-lg md:text-2xl whitespace:pre-line leading-lg
             text-white pb-12 md:pl-8 pl-4 pr-4 font-semibold'>Welcome to Chuckle Factory, the leading random joke generator.
             <br/>We are dedicated to spreading laughter and brightening up
             <br/>your day with our collection of hilarious jokes. With
             <br/>our innovative technology and vast database of jokes, we 
             <br/>guarantee endless entertainment for all ages.Whether you are
             <br/>looking for a quick chuckle or a belly laugh,
             <br/>Chuckle Factory is here to deliver the perfect dose
             <br/>of humor. Join us and let the laughter begin!</p>
<img src="./egg.png" className='pb-30 md:h-1/2 md:w-1/2 object:cover
md:rounded-full ml-4 mr-4 rounded-xl md:ml-8 md:object-cover'/>
        </section>
    </section>
  )
}

export default About