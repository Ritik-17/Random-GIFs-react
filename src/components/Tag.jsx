
import React, { useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Tag = () => {

  const [tag, setTag] = useState('');

  const {gif, loading, fetchData } =  useGif(tag);

  function clickHandler(){
    fetchData(tag);
  }
  return (
    <div className='w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] '>
      <h1 className='text-2xl font-bold underline uppercase mt-[15px]'> 
        Random Gif
      </h1>
      {
        loading ? (<Spinner/>) : (<img src={gif} width='450px' />)
      }
      <input className='w-10/12 bg-blue-100 rounded-lg text-lg py-2 border border-black mb-[5px] text-center'
        value={tag}
        onChange={(event) => setTag(event.target.value)}
      />
      <button className='w-10/12 bg-blue-200 rounded-lg text-lg py-2 uppercase font-bold border border-black mb-[20px]'
        onClick={clickHandler}>
        Generate
      </button>
    </div>
  )
}

export default Tag