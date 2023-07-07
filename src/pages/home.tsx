import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

import { SearchSVG, MovieSVG } from '../SVG/search'

let data = ["Torrents", "Movie", "TV-Show", "Games", "Music", "Anime", "Books", "Other"]




const Home = () => {
  const router = useRouter()

  useEffect(() => {

  }, [])
  return (
    <div className="container  mx-auto py-3 font-medium bg-transparent h-screen  justify-center text-center font-montserrat">
      <div>
        <p className='text-[6rem] font-bold leading-[7rem] pt-16'> This World.<br />At Your Fingertips.</p>
        <div>
          <div className='w-1/2 mx-auto flex my-10 items-center border-b-[1.5px] border-primary px-1'>
            <input className='bg-transparent w-full py-4 font-light text-lg outline-none placeholder:font-montserrat font-montserrat' placeholder='Start typing what you want ?' />
            <SearchSVG />
          </div>
          <div className='flex text-center justify-center'>
            <div className='font-thin flex justify-evenly'>
              {
                data.map((item, index) => {
                  return (
                    <label key={index} className="checkbox">
                      <input type="checkbox" />
                      <span>{item}</span>
                    </label>

                  )
                })
              }
            </div>
          </div>
          <br />
          <br />

          <div className='w-8/12 mx-auto  text-center grid grid-cols-4 gap-4'>

            {data.map((item, index) => {
              return (
                <div key={index} onClick={() => router.push("/top-ten-post/latest/")} className="cursor-pointer w-[195px] h-[115px] pl-[26px] pr-[161px] pt-7 pb-16 bg-gray-200 bg-opacity-10 rounded-lg border-gray-200 border-opacity-30 flex-col justify-start items-start gap-3.5 inline-flex hover:bg-primary/10 hover:border-[1px] hover:border-primary/50">
                  <div className="w-[30px] h-[30px] p-[2.50px] justify-center items-center inline-flex">  <MovieSVG /></div>
                  <div className="text-gray-200 text-opacity-80 text-[13px] w-20 text-start leading-[0px] ">{item}</div>
                </div>
              )
            })}


          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
