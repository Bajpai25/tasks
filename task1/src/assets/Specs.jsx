import React from 'react'

function Specs() {
  return (
    <section className='bg-[#333333]'>
  <h1 className='ml-4 md:ml-28 text-4xl md:text-6xl font-sans p-4 font-extrabold text-orange-500'>Specifications</h1>
  <section className='flex flex-col md:flex-row'>
    <ul className='ml-4 md:ml-28 mr-4 md:mr-20 text-base md:text-2xl text-white font-semibold font-mono w-full md:w-1/2'>
      <li className='pt-4 pb-4'><span className='bg-[#FF6F40]'>Step Tracking</span>: Count your steps and monitor your daily activity levels.</li>
      <li className='pt-4 pb-4'><span className='bg-[#FF6F40]'>Heart Rate Monitoring</span>: Measure your heart rate during workouts, rest periods.</li>
      <li className='pt-4 pb-4'><span className='bg-[#FF6F40]'>Sleep Tracking</span>:Analyze your sleep patterns and get insights for better sleep quality.</li>
      <li className='pt-4 pb-4'><span className='bg-[#FF6F40]'>Calorie Burn Tracking</span>: Track the number of calories you burn throughout the day.</li>
      <li className='pt-4 pb-4'><span className='bg-[#FF6F40]'>Distance Measurement</span>: Measure the distance covered during your workouts or daily activities.</li>
      <li className='pt-4 pb-4'><span className='bg-[#FF6F40]'>Water Resistance</span>: Our fitness tracker is water-resistant,allowing you to wear it during water-based activities.</li>
      <li className='pt-4 pb-4'><span className='bg-[#FF6F40]'>Long Battery Life</span>: Enjoy extended usage without frequent recharging.</li>
    </ul>
    <img src="./specs.png" className='h-32 md:h-1/4 w-32 md:w-1/4 border-2 rounded-md shadow-lg shadow-white mx-auto'></img>
  </section>
  <section className='flex flex-col md:flex-row justify-center items-center mt-10 md:mt-20 pb-20 md:pb-32'>
    <img src="./heart.png" className='shadow-lg shadow-white h-56 md:h-80 w-56 md:w-80 border-2 border-white rounded-lg mb-4 md:mb-0'></img>
    <img src="./mobile.png" className='shadow-lg shadow-white h-56 md:h-80 w-56 md:w-80 border-2 border-white rounded-lg mb-4 md:mb-0'></img>
    <img src="./modes.png" className='shadow-lg shadow-white h-56 md:h-80 w-56 md:w-80 border-2 border-white rounded-lg'></img>
  </section>
</section>

  )
}

export default Specs