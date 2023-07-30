import React from 'react'
import { Loader } from '../Common/Loader'
import { moviesTopListApi } from '../service/service';

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Card from '../Common/Card';
import CardGrid from '../Common/CardGrid';
import CardExpanded from '../Common/CardExpanded';
import ToastMsg from '../Common/ToastMsg';
import { CompactList, ExpandedList } from '../SVG/listing';


const LandingPage = () => {

  const router = useRouter()
  const { category, time } = router.query;
  const categoryId = category ? category.split(':')[1] : "Movies";

  let data = ["Torrents", "Movie", "TV-Show", "Games", "Music", "Anime", "Books", "Other"]

  const [movieList, setMovieList] = useState([])
  const [ListType, setListType] = useState('expanded');
  const [Filter, setFilter] = useState(false);
  const [page, setPage] = useState(1)
  const [loader, setLoader] = useState(false)

  useEffect(() => {

    fetchMovieList(categoryId);

  }, [page])


  const fetchMovieList = (categoryId) => {
    let latest = time ? time : "10D"
    setLoader(true)
    moviesTopListApi(page, categoryId, latest).then((res) => {
      console.log("page", res?.data?.top_posts_by_category)
      setLoader(false)
      setMovieList(res?.data?.top_posts_by_category)
    }).catch((err) => {
      console.log("error", err)
      ToastMsg("Some thing went wrong ", "error")
      setLoader(false)
    })

  }
  return (
    <div className='text-center font-montserrat'>
      {loader ? <Loader /> : null}
      <br />

      <span className='text-[30px]  font-bold mt-3 pt-3'>Top 10 of All Categories</span>
      <div className='flex mx-4 md:mx-16 justify-between mb-8'>


      </div>
      <div className='flex justify-center m-2 w-[89%] relative'>
        <div className=" bg-off-white/10 w-[54%] rounded-xl  justify-center align-middle p-2">
          <span>Top 10 Movies</span>
        </div>

        <div className='flex justify-end absolute right-0'>
          <div className={`px-4 py-[0.35rem] ${ListType === 'compact' ? 'text-primary bg-primary/30' : ''} rounded-xl cursor-pointer transition-all duration-200`} onClick={() => {
            setListType('compact')
          }} ><CompactList /></div>
          <div className={`px-4 py-[0.35rem] ${ListType === 'expanded' ? 'text-primary bg-primary/30' : ''} rounded-xl cursor-pointer transition-all duration-200`} onClick={() => {
            setListType('expanded')

          }} ><ExpandedList /></div>
        </div>


      </div>

      <div className='w-auto mb-[3rem] mx-4 md:mx-[9rem] bg-off-white/10 relative text-center flex rounded-xl overflow-hidden'>

        <div className={`flex-1 px-4 flex-wrap py-8 justify-center`}>
          {movieList?.Movies?.map((item, index) => {
            if (ListType === 'compact') {
              return (
                <Card item={item} categoryId={categoryId} />
              )
            } else {
              return (
                <CardGrid item={item} categoryId={categoryId} />
              )
            }
          })}
        </div>
      </div>




      <div className='flex m-5 justify-center'>
        <div className="flex bg-off-white/10 w-[50%] rounded-xl  justify-center align-middle p-2">
          <span>Top 10 Anime Torrents</span>




        </div>
      </div>
      <div className='w-auto mb-[3rem] mx-4 md:mx-[9rem] bg-off-white/10 relative text-center flex rounded-xl overflow-hidden'>

        <div className={`flex-1 flex-wrap py-8 justify-center`}>
          {movieList?.Anime?.map((item, index) => {
            if (ListType === 'compact') {
              return (
                <Card item={item} categoryId={categoryId} />
              )
            } else {
              return (
                <CardGrid item={item} categoryId={categoryId} />
              )
            }
          })}
        </div>
      </div>


      <div className='flex m-5 justify-center'>
        <div className="flex bg-off-white/10 w-[50%] rounded-xl  justify-center align-middle p-2">
          <span>Top 10 XXX</span>
          {/* <div className={`px-4 py-2 ${ListType === 'compact' ? 'text-primary bg-primary/30' : ''} rounded-xl cursor-pointer transition-all duration-200`} onClick={()=>{
    setListType('compact')
  }} ><CompactList/></div>
          <div className={`px-4 py-2 ${ListType === 'expanded' ? 'text-primary bg-primary/30' : ''} rounded-xl cursor-pointer transition-all duration-200`} onClick={()=>{
    setListType('expanded')
  }} ><ExpandedList/></div> */}



        </div>
      </div>
      <div className='w-auto mb-[3rem] mx-4 md:mx-[9rem] bg-off-white/10 relative text-center flex rounded-xl overflow-hidden'>

        <div className={`flex-1 flex-wrap py-8 justify-center`}>
          {movieList?.XXX?.map((item, index) => {
            if (ListType === 'compact') {
              return (
                <Card item={item} categoryId={categoryId} />
              )
            } else {
              return (
                <CardGrid item={item} categoryId={categoryId} />
              )
            }
          })}
        </div>
      </div>

      <div className='flex m-5 justify-center'>
        <div className="flex bg-off-white/10 w-[50%] rounded-xl  justify-center align-middle p-2">
          <span>Top 10 TV Shows</span>
          {/* <div className={`px-4 py-2 ${ListType === 'compact' ? 'text-primary bg-primary/30' : ''} rounded-xl cursor-pointer transition-all duration-200`} onClick={()=>{
    setListType('compact')
  }} ><CompactList/></div>
          <div className={`px-4 py-2 ${ListType === 'expanded' ? 'text-primary bg-primary/30' : ''} rounded-xl cursor-pointer transition-all duration-200`} onClick={()=>{
    setListType('expanded')
  }} ><ExpandedList/></div> */}



        </div>
      </div>
      <div className='w-auto mb-[3rem] mx-4 md:mx-[9rem] bg-off-white/10 relative text-center flex rounded-xl overflow-hidden'>

        <div className={`flex-1 flex-wrap py-8 justify-center`}>
          {movieList?.TV?.map((item, index) => {
            if (ListType === 'compact') {
              return (
                <Card item={item} categoryId={categoryId} />
              )
            } else {
              return (
                <CardGrid item={item} categoryId={categoryId} />
              )
            }
          })}
        </div>
      </div>



      <div className='flex m-5 justify-center'>
        <div className="flex bg-off-white/10 w-[50%] rounded-xl  justify-center align-middle p-2">
          <span>Top 10 Music Torrents</span>
          {/* <div className={`px-4 py-2 ${ListType === 'compact' ? 'text-primary bg-primary/30' : ''} rounded-xl cursor-pointer transition-all duration-200`} onClick={()=>{
    setListType('compact')
  }} ><CompactList/></div>
          <div className={`px-4 py-2 ${ListType === 'expanded' ? 'text-primary bg-primary/30' : ''} rounded-xl cursor-pointer transition-all duration-200`} onClick={()=>{
    setListType('expanded')
  }} ><ExpandedList/></div> */}



        </div>
      </div>
      <div className='w-auto mb-[3rem] mx-4 md:mx-[9rem] bg-off-white/10 relative text-center flex rounded-xl overflow-hidden'>

        <div className={`flex-1 flex-wrap py-8 justify-center`}>
          {movieList?.Music?.map((item, index) => {
            if (ListType === 'compact') {
              return (
                <Card item={item} categoryId={categoryId} />
              )
            } else {
              return (
                <CardGrid item={item} categoryId={categoryId} />
              )
            }
          })}
        </div>
      </div>


      <div className='flex m-5 justify-center'>
        <div className="flex bg-off-white/10 w-[50%] rounded-xl  justify-center align-middle p-2">
          <span>Top 10 Books Torrents</span>
          {/* <div className={`px-4 py-2 ${ListType === 'compact' ? 'text-primary bg-primary/30' : ''} rounded-xl cursor-pointer transition-all duration-200`} onClick={()=>{
    setListType('compact')
  }} ><CompactList/></div>
          <div className={`px-4 py-2 ${ListType === 'expanded' ? 'text-primary bg-primary/30' : ''} rounded-xl cursor-pointer transition-all duration-200`} onClick={()=>{
    setListType('expanded')
  }} ><ExpandedList/></div> */}



        </div>
      </div>
      <div className='w-auto mb-[3rem] mx-4 md:mx-[9rem] bg-off-white/10 relative text-center flex rounded-xl overflow-hidden'>

        <div className={`flex-1 flex-wrap py-8 justify-center`}>
          {movieList?.Books?.map((item, index) => {
            if (ListType === 'compact') {
              return (
                <Card item={item} categoryId={categoryId} />
              )
            } else {
              return (
                <CardGrid item={item} categoryId={categoryId} />
              )
            }
          })}
        </div>
      </div>



      <div className='flex m-5 justify-center'>
        <div className="flex bg-off-white/10 w-[50%] rounded-xl  justify-center align-middle p-2">
          <span>Top 10 Games Torrents</span>
          {/* <div className={`px-4 py-2 ${ListType === 'compact' ? 'text-primary bg-primary/30' : ''} rounded-xl cursor-pointer transition-all duration-200`} onClick={()=>{
    setListType('compact')
  }} ><CompactList/></div>
          <div className={`px-4 py-2 ${ListType === 'expanded' ? 'text-primary bg-primary/30' : ''} rounded-xl cursor-pointer transition-all duration-200`} onClick={()=>{
    setListType('expanded')
  }} ><ExpandedList/></div> */}



        </div>
      </div>
      <div className='w-auto mb-[3rem] mx-4 md:mx-[9rem] bg-off-white/10 relative text-center flex rounded-xl overflow-hidden'>

        <div className={`flex-1 flex-wrap py-8 justify-center`}>
          {movieList?.Games?.map((item, index) => {
            if (ListType === 'compact') {
              return (
                <Card item={item} categoryId={categoryId} />
              )
            } else {
              return (
                <CardGrid item={item} categoryId={categoryId} />
              )
            }
          })}
        </div>
      </div>


      <div className='flex m-5 justify-center'>
        <div className="flex bg-off-white/10 w-[50%] rounded-xl  justify-center align-middle p-2">
          <span>Top 10 Documentaries Torrents</span>
          {/* <div className={`px-4 py-2 ${ListType === 'compact' ? 'text-primary bg-primary/30' : ''} rounded-xl cursor-pointer transition-all duration-200`} onClick={()=>{
    setListType('compact')
  }} ><CompactList/></div>
          <div className={`px-4 py-2 ${ListType === 'expanded' ? 'text-primary bg-primary/30' : ''} rounded-xl cursor-pointer transition-all duration-200`} onClick={()=>{
    setListType('expanded')
  }} ><ExpandedList/></div> */}



        </div>
      </div>
      <div className='w-auto mb-[3rem] mx-4 md:mx-[9rem] bg-off-white/10 relative text-center flex rounded-xl overflow-hidden'>

        <div className={`flex-1 flex-wrap py-8 justify-center`}>
          {movieList?.Documentaries?.map((item, index) => {
            if (ListType === 'compact') {
              return (
                <Card item={item} categoryId={categoryId} />
              )
            } else {
              return (
                <CardGrid item={item} categoryId={categoryId} />
              )
            }
          })}
        </div>
      </div>
      <div className='flex m-5 justify-center'>
        <div className="flex bg-off-white/10 w-[50%] rounded-xl  justify-center align-middle p-2">
          <span>Top 10 Apps Torrents</span>
          {/* <div className={`px-4 py-2 ${ListType === 'compact' ? 'text-primary bg-primary/30' : ''} rounded-xl cursor-pointer transition-all duration-200`} onClick={()=>{
    setListType('compact')
  }} ><CompactList/></div>
          <div className={`px-4 py-2 ${ListType === 'expanded' ? 'text-primary bg-primary/30' : ''} rounded-xl cursor-pointer transition-all duration-200`} onClick={()=>{
    setListType('expanded')
  }} ><ExpandedList/></div> */}



        </div>
      </div>
      <div className='w-auto mb-[3rem] mx-4 md:mx-[9rem] bg-off-white/10 relative text-center flex rounded-xl overflow-hidden'>

        <div className={`flex-1 flex-wrap py-8 justify-center`}>
          {movieList?.Apps?.map((item, index) => {
            if (ListType === 'compact') {
              return (
                <Card item={item} categoryId={categoryId} />
              )
            } else {
              return (
                <CardGrid item={item} categoryId={categoryId} />
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default LandingPage
