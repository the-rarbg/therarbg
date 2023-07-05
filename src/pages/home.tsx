import React from 'react'

import SearchSVG from '../SVG/search'


const Home = () => {
  return (
    <div className="container mx-auto py-3 font-medium bg-transparent h-screen justify-center text-center font-montserrat">   
      <div>
          <p className='text-[6rem] font-bold leading-[7rem] pt-16'> This World.<br/>At Your Fingertips.</p> 
          <div>
            <div className='w-1/2 mx-auto flex my-10 items-center border-b-[1.5px] border-primary px-1'>
              <input className='bg-transparent w-full py-4 font-light text-lg outline-none placeholder:font-montserrat font-montserrat'  placeholder='Start typing what you want ?'/>
              <SearchSVG/>
            </div>
            <div className='flex text-center justify-center'>
              <div className='font-thin flex justify-evenly'>
              
                <div className='flex mx-2'><input className='mx-[6px] accent-primary checked:bg-primary'  type="checkbox" /><label>Movie </label></div>
                <div className='flex mx-2'><input className='mx-[6px] accent-primary checked:bg-primary' type="checkbox" /><label>TV-Show </label></div>
                <div className='flex mx-2'><input className='mx-[6px] accent-primary checked:bg-primary' type="checkbox" /><label>Game </label></div>
                <div className='flex mx-2'><input className='mx-[6px] accent-primary checked:bg-primary' type="checkbox" /><label>Music </label></div>
                <div className='flex mx-2'><input className='mx-[6px] accent-primary checked:bg-primary' type="checkbox" /><label>Anime </label></div>
                <div className='flex mx-2'><input className='mx-[6px] accent-primary checked:bg-primary' type="checkbox" /><label>Apps </label></div>
                <div className='flex mx-2'><input className='mx-[6px] accent-primary checked:bg-primary' type="checkbox" /><label>Other </label></div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home
