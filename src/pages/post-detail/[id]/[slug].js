import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { Loader } from '../../../Common/Loader';
import { movieDetailsPost } from '../../../service/service';
import Image from 'next/image'

const Details = () => {
  const router = useRouter();
  const { id, slug } = router.query;
  const[loader,setLoader]=useState(false)
  const[data,setData]=useState()
  useEffect(()=>{
    getDetails()
  },[])
  const getDetails =()=>{
    setLoader(true)
    movieDetailsPost(id,slug).then((res)=>{
      setLoader(false)
      setData(res?.data)
      console.log("resdetails",res)
    }).catch((err)=>{
      setLoader(false)
      console.log(err)
    })
  }
 
  return (
    <div>
      {loader?<Loader/>:null}
      <h1>{data?.name}</h1>
      <div>
      
      <div className="overflow-hidden cursor-pointer w-[90%] h-[275px] pt-[3rem] pb-5 bg-gray-200 bg-opacity-10 rounded-lg border-gray-200 border-opacity-30 flex-col justify-center items-center gap-3.5 inline-flex hover:bg-primary/10 hover:border-[1px] hover:border-primary/50">
      
                <div className="w-[60%] h-[50%]  m-[5px] justify-center items-center inline-flex pb-2 pt-2">  <Image className='mt-[15px]' src={data?.thumbnail ? data?.thumbnail: "https://i.therarbg.com/np.jpg"} width={1500} height={1000} alt='movie' layout="responsive" /></div>
                <br />
                  <div className="text-gray-200 text-opacity-80 text-[11px] pt-1 h-auto w-[175px] long-and-truncated">
                
                </div>
              </div>
      </div>
    </div>
  )
}

export default Details
