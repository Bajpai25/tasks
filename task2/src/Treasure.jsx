import React, { useEffect, useState } from 'react';

function Treasure() {
  const [jokedata, setjokedata] = useState([]);
  const [category, setcategory] = useState('');
  const [joketype, setjoketype] = useState('');

  const handlecategory = (e) => {
    setcategory(e.target.value);
  };
  const handletype=(e)=>{
    setjoketype(e.target.value);
  }

  const joke_fetch = async () => {
    if (category && joketype) {
      try {
        const response = await fetch(`https://v2.jokeapi.dev/joke/${category}?amount=10&type=${joketype}`);
        const data = await response.json();
        console.log(data.jokes);

        if (response.ok) {
          if (joketype === 'single') {
            setjokedata(data.jokes.map((joke) => joke.joke));
          } else if (joketype === 'twopart') {
            setjokedata(data.jokes.map((joke) => `${joke.setup}${joke.delivery}`));
          }
        } else {
          throw new Error(data.error || 'Failed to fetch jokes');
        }
      } catch (error) {
        setjokedata([error.message]);
      }
    } else {
      setjokedata(['Please select a category and type!']);
    }
  };

  useEffect(() => {
    joke_fetch();
  }, []);

  return (
    <section className='pl-4 pr-4 md:pl-8 md:pr-8'>
      <h1 className='pb-8 text-white font-bold pt-4 text-4xl md:text-6xl 
      font-sans text-center'>Treasure VAULT</h1>
      <p className='text-white md:text-3xl text-2xl pr-2 font-semibold font-sans mb-12 text-center '>Our team of writers
        <br />and creators create and pick the best
        <br />ones out for you on your demand.
        <br />Expect nothing but the best.
      </p>
      <section className=' flex flex-col ml-6 md:flex-row md:justify-around'>
        <h1 className='text-black md:text-3xl text-2xl pb-4 font-bold 
        font-sans'>Set Your filter!</h1>
        <select onChange={handlecategory} value={category} className='p-2 
        text-md w-36 md:w-30 md:mr-4 mb-4 shadow-lg
         shadow-white font-medium bg-red-600 text-white rounded-lg '>
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
        <select onChange={handletype} value={joketype} className='p-2 
        text-lg w-36 md:w-30 md:mr-4 mb-4 shadow-lg shadow-white font-medium bg-red-600 text-white rounded-lg '>
          <optgroup>
            <option value="">Type</option>
            <option value="single">Single</option>
            <option value="twopart">Twopart</option>
          </optgroup>
        </select>
        <button onClick={joke_fetch} className='mb-4 p-2 
        text-xl text-white bg-red-600 border-2 
        w-36 rounded-full 
        md:w-40 shadow-md shadow-white'>
          Generate
        </button>
      </section>
      {jokedata.map((element, index) => (
        <section key={index} className='border-2 mb-2 rounded-lg
        w-full h-40 md:mr-3
         md:w-full md:h-40  text-left p-2 bg-white text-black
         text-xl md:text-2xl font-semibold'>
          <p>{element}</p>
        </section>
      ))}
    </section>
  );
}

export default Treasure;
