import React from 'react'

const Random = () => {
  return (
    <div className='w-1/2 h-[450px] bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] '>
      <h1 className='text-2xl font-bold underline uppercase'> 
        Random Gif
      </h1>
      <img/>
      <button className='w-10/12 bg-green-200 rounded-lg text-lg py-2 uppercase font-bold border border-black'>
        Generate
      </button>
    </div>
  )
}

export default Random