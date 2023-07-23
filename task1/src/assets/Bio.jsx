import React from 'react'

function Bio() {
  return (
  <section className='flex flex-col md:flex-row justify-around  bg-[#333333]'>
  <img src="./pulse.png" className=' mx-12 h-24 md:h-1/4 w-24 md:w-1/4 p-2 border-1 mt-4 mb-4 bg-white rounded-full '></img>
  <section className='flex flex-col'>
    <p className='text-center text-4xl md:text-6xl font-sans mt-4 font-extrabold text-white border-1 rounded-lg'>
      <marquee width="80%" scrolldelay="2">FITPULSE</marquee>
    </p>
    <h2>
      <p className='font-mono text-3xl md:text-4xl mt-4 text-center font-semibold text-white'>
        "Unlock your true Potential"
      </p>
    </h2>
    <p className='font-sans mt-2 mb-4 text-lg md:text-2xl font-medium text-white text-center'>
      "Welcome to Our Fitness Tracker Brand!
      <br/>We are dedicated to helping you
      <br/>achieve your fitness goals and live a
      <br/>healthier, more active lifestyle.
      <br/>Our state-of-the-art fitness tracker
      <br/>is designed to provide you with accurate
      <br/>data, insights to optimize your workouts,
      <br/>and monitor your progress."
    </p>
  </section>
  <section className='ml-4 md:ml-8 xs:ml-12 pt-6'>
    <img className="border-2 rounded-lg shadow-lg shadow-white mb-4" src="track.jpeg" alt="track-1"></img>
    <img className="border-2 rounded-lg shadow-lg shadow-white mb-4" src="track2.jpeg" alt="track-2"></img>
    <img className="border-2 rounded-lg shadow-lg shadow-white mb-4" src='track3.jpeg' alt="track-3"></img>
    <img className="border-2 rounded-lg shadow-lg shadow-white" src='track4.jpeg' alt="track-4"></img>
  </section>
</section>

  )
}

export default Bio