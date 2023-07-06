import {  SearchSVG } from '@/SVG/search'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
const Latest = () => {

  let data = ["Torrents", "Movie", "TV-Show", "Games", "Music", "Anime", "Books","Other"]

   const[movieList,setMovieList]=useState([])
   const[page,setPage]=useState(1)

  useEffect(()=>{
    fetchMovieList();
  },[page])

  const fetchMovieList =()=>{
  let url =  `https://therarbg.com/get-posts/keywords:lara%20croft:format:json/?page=${page}`;
  axios.get(url).then((res)=>{
  console.log("response",res.data.results)
     setMovieList(res.data.results)
  }).catch((err)=>{
       console.log("error",err)
  })

  }


  useEffect(() => {
    function handleScroll () {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight 
       
      ) {
        setPage(page+1);
      }
    };
   
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

 
  return (
    <div className='text-center'>
      <br/> <br/> <br/>
      <p className='text-[6rem] font-bold leading-[7rem] pt-16'> Search</p>
      <p className='leading-[0rem] font-extralight'> Browse through thousands of torrents files</p>
      <br/><br/>
            <div className='w-1/2 mx-auto flex my-3 items-center border-b-[1px] border-primary px-1'>
            <input className='bg-transparent w-full py-4 font-light text-lg outline-none  placeholder:font-montserrat font-montserrat' placeholder='Start typing what you want ?' />
            <SearchSVG />
          </div>
            <div className='flex text-center justify-center'>
              {
                data.map((item,index)=>{
                  return(
                    <div key={index} className='flex text-gray-200 text-[12px] rounded-sm font-extralight  mx-2 px-2 bg-primary/10'><label>#{item} </label></div>
                  )
                })
              }
             </div>
            <div>
            </div>
         <br/><br/><br/><br/>
            <div className='w-8/12 mx-auto  text-center grid grid-cols-4 gap-4'>

            {movieList?.map((item, index) => {
              let name = item[`n`];
               let imagesrc = item[`t`];
              return (
                <>
                {imagesrc ? <div key={index} className="overflow-y-auto cursor-pointer w-[225px] h-[275px] pl-[10px] pr-[10px] pt-[3rem] pb-5 bg-gray-200 bg-opacity-10 rounded-lg border-gray-200 border-opacity-30 flex-col justify-center items-center gap-3.5 inline-flex hover:bg-primary/10 hover:border-[1px] hover:border-primary/50">
                  <div className="w-[120px] h-[120px] m-[5px] justify-center items-center inline-flex">  <Image className='mt-[15px]' src={item[`t`]} width={150} height={150} alt='movie' layout="responsive" /></div>
                  <br/>
                   <div className="text-gray-200 text-opacity-80 text-[11px] h-auto w-[175px] long-and-truncated">
                   <span >
                   {name}
                   </span> 
                     </div>
                </div>:null}
                </>
              )
            })}
            </div>
    </div>
  )
}

export default Latest
