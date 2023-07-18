import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

import { SearchSVG, MovieSVG } from '../SVG/search'

let data1 = [{name:"Torrents",cat:"",time:"2D"}, {name:"Movie",cat:"Movies",time:"10D"}, {name:"TV-Show",cat:"TV",time:"10D"},{name:"Games",cat:"Games",time:"10D"}, {name:"Music",cat:"Music",time:"10D"}, {name:"Anime",cat:"Anime",time:"10D"}, {name:"Books",cat:"Books",time:"10D"},{name: "Other",cat:"Other",time:"10D"}]

let array: (string | number)[] = []

const Index = () => {
  const router = useRouter()
  const [data, setData] = useState(data1);


  return (
    <div className="container  mx-auto py-3 font-medium bg-transparent min-h-screen  justify-center text-center font-montserrat">
      <div>
        <p className='text-[3rem] md:text-[6rem] font-bold leading-[3.5rem] md:leading-[7rem] pt-16'> This World.<br />At Your Fingertips.</p>
        <div>
          <div className='w-10/12 md:w-1/2 mx-auto flex my-10 items-center border-b-[1.5px] border-primary px-1'>
            <input className='bg-transparent w-full py-4 font-light text-lg outline-none placeholder:font-montserrat font-montserrat' placeholder='Start typing what you want ?' />
            <SearchSVG />
          </div>
          <div className='mx-8 flex text-center justify-center'>
            <div className='font-thin flex flex-wrap justify-evenly'>
              {
                data1.map((item, index) => {
                  return (
                    <label key={index} className="checkbox">
                      <input type="checkbox" className='w-4 h-4 rounded checked:bg-primary checked:border-primary border border-primary' onClick={() => {
                        if (array.includes(index)) {
                          array = array.filter(i => i !== index);
                        }
                        else {
                          array.splice(index, 0, index);
                        }
                        console.log("array", array)
                        const filteredArray = data1.filter((_item: any, index) => array.length === 0 ? true : array.includes(index));
                        setData(filteredArray)

                      }} />
                      <span>{item?.name}</span>
                    </label>

                  )
                })
              }
            </div>
          </div>
          <br />
          <br />

          <div className='px-8 md:px-0 w-full md:w-8/12 mx-auto text-center flex flex-wrap gap-4 justify-center'>
            {
              data.map((item, index) => {
                return (
                  <div key={index} onClick={() => router.push(`/get-posts/category:${item?.cat?item?.cat:false}?time=${item?.time}`)} className="cursor-pointer w-[150px] md:w-[195px] h-[115px] md:pl-[26px] md:pr-[161px] pt-7 pb-16 bg-off-white/10 rounded-lg border-off-white/30 flex-col justify-start items-center md:items-start gap-3.5 inline-flex hover:bg-primary/10 border-[1px] hover:border-primary/50 group">
                    <div className="w-[30px] h-[30px] p-[2.50px] justify-center items-center inline-flex text-off-white group-hover:text-primary">  <MovieSVG /></div>
                    <div className="text-off-white group-hover:text-primary text-opacity-80 text-[13px] w-20 text-center md:text-start leading-[0px] ">{item?.name}</div>
                  </div>
                )
              })}


          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
