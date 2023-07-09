import { SearchSVG } from '@/SVG/search'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { moviesListApi } from '../../service/service';
import ToastMsg from '../../Common/ToastMsg';
import { Loader } from '../../Common/Loader';
import { useRouter } from 'next/router';



const Latest = () => {
const router = useRouter()
const {category,time} = router.query;
const categoryId = category ? category.split(':')[1] : null;
  let data = ["Torrents", "Movie", "TV-Show", "Games", "Music", "Anime", "Books", "Other"]

  const [movieList, setMovieList] = useState([])
  const [page, setPage] = useState(1)
  const[loader,setLoader]=useState(false)

  useEffect(() => {
    fetchMovieList(categoryId);
  
  }, [page])

  const fetchMovieList = (categoryId) => {
    setLoader(true)
    moviesListApi(page,categoryId,time).then((res) => { 
       console.log("page",res?.data?.results)
       setLoader(false)
        setMovieList([...movieList, ...res.data.results])
    }).catch((err) => {
      console.log("error", err)
      ToastMsg("Some thing went wrong ","error")
      setLoader(false)
    })

  }
  console.log("pramod",movieList)

  useEffect(() => {
   
    function handleScroll() {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight
      ) {
        setPage(page + 1);
       
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [page]);


  return (
    <div className='text-center'>
      {loader?<Loader/>:null}
      <br /> <br /> <br />
      <p className='text-[6rem] font-bold leading-[7rem] pt-16'> Search</p>
      <p className='leading-[0rem] font-extralight'> Browse through thousands of torrents files</p>
      <br /><br />
      <div className='w-1/2 mx-auto flex my-3 items-center border-b-[1px] border-primary px-1'>
        <input className='bg-transparent w-full py-4 font-light text-lg outline-none  placeholder:font-montserrat font-montserrat' placeholder='Start typing what you want ?' />
        <SearchSVG />
      </div>
      <div className='flex text-center justify-center'>
        {
          data.map((item, index) => {
            return (
              <div key={index} className='flex text-gray-200 text-[12px] rounded-sm font-extralight  mx-2 px-2 bg-primary/10'><label>#{item} </label></div>
            )
          })
        }
      </div>
      <div>
      </div>
      <br /><br /><br /><br />
      <div className='w-[95%] mx-auto  text-center grid grid-cols-5 gap-4 place-items-center'>

        {movieList?.map((item, index) => {
          let name = item[`n`];

          return (
            <>
              {<div key={index} className="overflow-hidden cursor-pointer w-[225px] h-[275px] pl-[10px] pr-[10px] pt-[3rem] pb-5 bg-gray-200 bg-opacity-10 rounded-lg border-gray-200 border-opacity-30 flex-col justify-center items-center gap-3.5 inline-flex hover:bg-primary/10 hover:border-[1px] hover:border-primary/50">
                <div className="w-[120px] h-[120px] m-[5px] justify-center items-center inline-flex">  <Image className='mt-[15px]' src={item[`t`] ? item[`t`] : "https://i.therarbg.com/np.jpg"} width={150} height={150} alt='movie' layout="responsive" /></div>
                <br />
                <div className="text-gray-200 text-opacity-80 text-[11px] h-auto w-[175px] long-and-truncated">
                  <span >
                    {name}
                  </span>
                </div>
              </div>}
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Latest
