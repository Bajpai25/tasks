import React from 'react'
import {Link} from "react-router-dom"
function Services() {
  return (
    <>
    <section className='mb-12 ml-8'>
    <h1 className='pt-10 pr-2 text-5xl text-center mb-12
     font-bold text-white
        md:text-6xl font-sans'>OUR SERVICES</h1>
        <section className='flex flex-col md:flex-row justify-around md:w-full'>
        <section className='flex-column pr-3'>
            <img src="./comedy.png" className=' rounded-lg shadow-lg
             shadow-white w:80 h:80 md:h-96 w-80 object-cover'/>
            <h1 className='text-white font-bold text-4xl
             pt-4 pb-6'>Treasure</h1>
            <p className='text-white text-xl font-semibold font-mono mb-4'>Our team of writers 
            <br/>and creators create and pick the best 
            <br/>ones out for you on your demand.  
            <br/>Expect nothing but the best.</p>
            <Link to="./treasure"><button className='text-lg p-2 mb-8
             bg-blue-600 text-white rounded-lg md:w-32'>More info
            </button></Link>
            </section>
            <section className='flex-column pr-3'>
            <img src="./good.png" className='  rounded-lg shadow-lg
             shadow-white w-80 h-80 md:h-96 md:w-80 object-cover'/>
            <h1 className='text-white font-bold text-4xl
             pt-4 pb-6'>CHUCKLE UP</h1>
            <p className='text-white text-xl font-semibold font-mono mb-4'>We have got a special surprise 
            <br/>where you can custom create your own jokes.
            <br/>Via keywords.</p>
            <Link to="./treasure"><button className='text-lg p-2 mb-8
             bg-blue-600 text-white rounded-lg md:w-32'>More info</button></Link>
            </section>
            <section className='flex-column pr-3'>
            <img src="./smily.png" className=' rounded-lg shadow-lg
             shadow-white w-80 h-80 md:h-96 md:w-80 object-cover'/>
            <h1 className='text-white font-bold text-4xl
             pt-4 pb-6'>Share the Happiness</h1>
            <p className='text-white text-xl font-semibold font-mono mb-4'>Now you can share Happiness
            <br/>and bring smile on others faces too. 
            </p>
            <Link to="./contact"><button className='text-lg p-2
             bg-blue-600 text-white rounded-lg md:w-32'>More info</button>
            </Link>
            </section>
        </section>
    </section>
    <section className='bg-blue-600  text-2xl md:text-4xl pb-20 pt-16 pl-4 text-black leading-xl font-sans font-semibold'>
    I absolutely love Chuckle Factory! Their random joke generator
always brings a smile to my face. The salon is cozy and the staff
is friendly. Thank you for brightening my day with laughter!
<br/>-Emma
    </section>
    </>
  )
}

export default Services