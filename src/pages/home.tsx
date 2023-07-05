import React from 'react'


const Home = () => {
  return (
    <div className="bg-green-800 text-white py-3 font-medium  bg-gradient-to-r from-green-950 from-20 via-emerald-950 via-30% to-green-950 to-90% ... h-screen justify-center text-center font-sans">   
    <div>
      <div className='text-7xl' style={{fontWeight:"700" }}> This World.</div> 
        <div className='text-7xl' style={{fontWeight:"700",lineHeight:"82px"}}>At Your Fingertips.</div> 
        <div>
        <div className='relative'>
        <input className='bg-transparent my-10 w-4/12 py-4 font-thin text-lg tracking-widest border-b-[1.5px] border-green-600 outline-none'  placeholder='Start typing what you want ?'  style={{backgroundImage: `url('/searchnormal1.png')`, backgroundRepeat: 'no-repeat', backgroundPosition: '500px center', backgroundSize: '23px 22px'}}/> 
     
    </div>
    <div className='flex text-center justify-center'>
    <div className='font-thin flex w-5/12 justify-evenly'>
     
      <div className='flex mx-2'><input className='mx-[6px] accent-green-400'  type="checkbox" /><label>Movie </label></div>
      <div className='flex mx-2'><input className='mx-[6px]' type="checkbox" /><label>Tv Show </label></div>
      <div className='flex mx-2'><input className='mx-[6px]' type="checkbox" /><label>Game </label></div>
      <div className='flex mx-2'><input className='mx-[6px]' type="checkbox" /><label>Music </label></div>
      <div className='flex mx-2'><input className='mx-[6px]' type="checkbox" /><label>Anime </label></div>
      <div className='flex mx-2'><input className='mx-[6px]' type="checkbox" /><label>Apps </label></div>
      <div className='flex mx-2'><input className='mx-[6px]' type="checkbox" /><label>Other </label></div>
    </div>
    </div>

        </div>
     
       
      </div>
    </div>
  )
}

export default Home
