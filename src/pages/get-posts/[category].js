import { SearchSVG } from '@/SVG/search'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { moviesListApi } from '../../service/service';
import ToastMsg from '../../Common/ToastMsg';
import { Loader } from '../../Common/Loader';
import { useRouter } from 'next/router';
import CardExpanded from '../../Common/CardExpanded';
import { CompactList, ExpandedList } from '../../SVG/listing';



const Latest = () => {
const router = useRouter()
const {category,time} = router.query;
const categoryId = category ? category.split(':')[1] : "Movies";

  let data = ["Torrents", "Movie", "TV-Show", "Games", "Music", "Anime", "Books", "Other"]

  const [movieList, setMovieList] = useState([])
  const [ListType, setListType] = useState('expanded');
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
      <div className='flex mx-16 justify-between mb-8'>
        <div></div>
        <div className="flex bg-off-white/10 rounded-xl">
          <div className={`px-4 py-2 ${ListType === 'compact' ? 'text-primary bg-primary/30' : ''} rounded-xl`}><CompactList/></div>
          <div className={`px-4 py-2 ${ListType === 'expanded' ? 'text-primary bg-primary/30' : ''} rounded-xl`}><ExpandedList/></div>
        </div>
      </div>
      <div className='w-auto mx-16 px-6 py-8 bg-off-white/10  text-center flex flex-wrap gap-4 justify-center'>

        {movieList?.map((item, index) => {

          return (
            <CardExpanded item={item} categoryId={categoryId}/>
          )
        })}
      </div>
    </div>
  )
}

export default Latest
