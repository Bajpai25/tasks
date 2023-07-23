import React from 'react'
import { useState } from 'react'
function Header() {
    const [joke,setjoke]=useState('');
    const[selectedcategory,setselectedcategory]=useState('');
  
    const handlecategory=(event)=>{
      setselectedcategory(event.target.value);
    }
    const joke_fetch=async()=>{
      if(selectedcategory){
        await fetch(`https://v2.jokeapi.dev/joke/${selectedcategory}`)
        .then((response)=> response.json())
        .then((data)=>{
          if(data.type==="single"){
            setjoke(data.joke);
            console.log(data);
          }
          else if(data.type==="twopart"){
            setjoke(`${data.setup} 
            ${data.delivery}`);
            console.log(data);
          }
          else{
            setjoke(`Category doesn't exist.`);
          }
        })
        .catch((error)=>{
            setjoke(`${error.message}`);
        })
      }
      else{
        setjoke(`Please select a category!`);
      }
    }

return (
    <section className='flex flex-col md:flex-row justify-around mt-8 mr-4'>
  <img src="./download.png" className=' border-2 rounded-lg shadow-lg 
  justify-center shadow-white ml-10 max-h-1/2 mr-12
  md:h-max-screen md:w-1/2 md:object-cover ' alt="Background"></img>
    <section className='ml-10 flex-column'>
      <h1 className='pb-8 text-white font-bold text-4xl md:text-6xl font-sans'>
        Laugh On demand
      </h1>
      <h1 className='pb-4 text-white font-thin text-xl md:text-2xl font-serif'>
        Get Your daily Dose of humour with our random joke Generator.
      </h1>
      <h1 className='pb-6 text-white font-thin text-xl md:text-2xl font-serif'>
        Never miss a Chuckle again.
      </h1>
      <section className='flex justify-between'>
      <button onClick={joke_fetch}  className='mb-4 p-3 mr-2 
       text-lg md:text-xl text-white bg-red-600 border-2 
      rounded-full w-36 md:w-40 shadow-md shadow-white'>
        Generate
      </button>
      <select onChange={handlecategory} value={selectedcategory} className='p-2 text-lg w-26
      md:w-30 mr-4 mb-4 
      shadow-lg shadow-white font-medium bg-red-600 text-white rounded-lg '>
        <optgroup>
          <option value="">Categories</option>
          <option value="Dark">Dark</option>
          <option value="Misc">Misc</option>
          <option value="Programming">Programming</option>
          <option value="Pun">Pun</option>
          <option value="Spooky">Spooky</option>
          <option value="Christmas">Christmas</option>
        </optgroup>
      </select>
      </section>
      <section  className='  border-2 rounded-lg 
      mr-2 mb-4 md:w-full h-40 bg-blend-saturation text-left p-2 bg-white text-black md:text-xl 
      font-semibold'>
      {joke}
    </section>
  </section>
</section>
  )
}

export default Header