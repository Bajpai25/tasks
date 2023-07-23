import React from 'react'

function About() {
  return (
    <section className='bg-[#333333]'>
  <h1 className='ml-6 md:ml-28 text-4xl md:text-6xl font-sans p-4 font-extrabold text-orange-500'>About</h1>
  <p className='ml-6 md:ml-28 pb-4 md:pb-8 text-lg md:text-2xl text-white font-semibold m-3'>
    Our fitness tracker is a cutting-edge wearable device that seamlessly integrates into your daily life.
    <br/>It tracks your steps, distance, calories burned, heart rate, sleep patterns, and much more.
    <br/>With its sleek design and advanced technology, our fitness tracker is your ultimate companion on your fitness journey.
  </p>
  <section className='container mx-auto flex flex-col md:flex-row justify-around'>
    <img src="./athelete1.jpeg" className='shadow-lg shadow-white h-64 w-64 md:h-64 md:w-64 ml-4 mb-4' alt="athlete"></img>
    <img src="./ghadi.png" className='h-64 w-64 md:h-64 md:w-64 ml-4 mb-4 shadow-lg shadow-white' alt="ghadi"></img>
    <img src="./girl2.jpeg" className='h-64 w-64 md:h-64 md:w-64 ml-4 mb-4 shadow-lg shadow-white' alt="girl"></img>
  </section>
  <section className='flex flex-col md:flex-row justify-around mt-4 md:mt-8 text-lg md:text-2xl pb-8 md:pb-20 font-mono font-bold text-white'>
    <p><marquee width="80%">Companion on your Fitness journey!</marquee></p>
    <p><marquee width="80%">Sleek Design!</marquee></p>
    <p><marquee width="80%">Integrates into your daily life!</marquee></p>
  </section>
</section>

  )
}

export default About