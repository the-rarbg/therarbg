import { SearchSVG } from '@/SVG/search'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { moviesListApi } from '../../service/service';
import ToastMsg from '../../Common/ToastMsg';
import { Loader } from '../../Common/Loader';
import { useRouter } from 'next/router';


function formatBytes(bytes, decimals = 1) {
  if (!+bytes) return '0 Bytes'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}


const Latest = () => {
const router = useRouter()
const {category,time} = router.query;
const categoryId = category ? category.split(':')[1] : "Movies";

  let data = ["Torrents", "Movie", "TV-Show", "Games", "Music", "Anime", "Books", "Other"]

  const [movieList, setMovieList] = useState([])
  const [page, setPage] = useState(1)
  const[loader,setLoader]=useState(false)

  useEffect(() => {
   
    fetchMovieList(categoryId);
  
  }, [page])
  

  const fetchMovieList = (categoryId) => {
    let latest = time?time:"10D"
    setLoader(true)
    moviesListApi(page,categoryId,latest).then((res) => { 
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
    <div className='text-center font-montserrat'>
      {loader?<Loader/>:null}
      <br /> <br /> <br />
      <p className='text-[6rem] font-bold leading-[6rem] pt-16'> Search</p>
      <p className='mt-4 leading-[0rem] font-light'> Browse through thousands of torrents files</p>
      <br /><br />
      <div className='w-10/12 md:w-1/2 mx-auto flex my-3 items-center border-b-[1px] border-primary px-1'>
        <input className='bg-transparent w-full py-4 font-light text-lg outline-none  placeholder:font-montserrat font-montserrat' placeholder='Start typing what you want ?' />
        <SearchSVG />
      </div>
      <div className='mx-8 flex flex-wrap text-center justify-center'>
        {
          data.map((item, index) => {
            return (
              <div key={index} className='flex text-off-white text-[12px] rounded-sm font-extralight lowercase my-1 mx-2 px-2 py-0.5 bg-off-white/10'><label>#{item} </label></div>
            )
          })
        }
      </div>
      <div>
      </div>
      <br /><br /><br /><br />
      <div className='w-auto mx-16 px-6 py-8 bg-off-white/10  text-center flex flex-wrap gap-4 place-items-center'>

        {movieList?.map((item, index) => {
          let name = item[`n`];
          let time = new Date(item[`a`]*1000);
          console.log(item);

          return (
            <>
              {<div onClick={()=>{
                let slug =  name.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
                 router.push(`/post-detail/${item?.pk}/${slug}/`)
              }} key={index} className="my-1 mx-2 overflow-hidden w-[190px] cursor-pointer py-2 bg-off-white/10 rounded-md flex-col justify-center inline-flex hover:bg-primary/10 border border-off-white/10 hover:border-primary/50">
                <div className="w-[166px] h-[185px] bg-cover rounded mx-auto justify-center items-center inline-flex" style={{'background-image':`url("${item[`t`] ? item[`t`] : categoryId==="XXX"?"https://i.therarbg.com/xnp.jpg": "https://i.therarbg.com/np.jpg"}")`}}>
                </div>
                <br />
                  <div className="text-off-white text-[12px] h-auto pt-1.5 long-and-truncated font-medium w-fit break-all">
                  <span>
                    {name}
                  </span>
                </div>
                <div className="flex text-off-white text-[10px] h-auto pt-1.5 long-and-truncated font-light justify-between">
                  <span >
                    {item['c'] || categoryId}
                  </span>
                  <span>・</span>
                  <span >
                    {time.getDate()}-{time.getMonth()+1}-{time.getFullYear()}
                  </span>
                  <span>・</span>
                  <span >
                    {formatBytes(item['s'])}
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
