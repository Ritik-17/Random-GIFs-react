import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Random = () => {

 const {gif, fetchData, loading} = useGif();

  function clickHandler(){
    fetchData();
  }
  return (
    <div className='w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] '>
      <h1 className='text-2xl font-bold underline uppercase mt-[15px]'> 
        Random Gif
      </h1>
      {
        loading ? (<Spinner/>) : (<img src={gif} width='450px' />)
      }
      <button className='w-10/12 bg-green-200 rounded-lg text-lg py-2 uppercase font-bold border border-black mb-[20px]'
        onClick={clickHandler}>
        Generate
      </button>
    </div>
  )
}

export default Random