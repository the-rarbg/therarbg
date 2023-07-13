import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { Loader } from '../../../Common/Loader';
import { movieDetailsPost } from '../../../service/service';
import Image from 'next/image'
import moment from 'moment';

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
    
      <div className='w-[86%] pt-5 pb-5 m-auto'>
          
            <div className="mt-[5rem] pb-5 bg-gray-200 bg-opacity-10 rounded-lg border-gray-200 border-opacity-30 justify-start flex relative">
            
           
             <div className="w-[15%]  m-3 relative max-w-[15%] ">
                <Image src={data?.thumbnail ? data?.thumbnail: "https://i.therarbg.com/np.jpg"} width={800} height={100} alt='movie' layout="responsive" />
              </div>
              
                  <div className="w-[10rem] justify-start text-gray-200 text-opacity-80 text-[16px] pt-2 h-auto  long-and-truncated relative">
                   <h1 >{data?.name}</h1>
                   <div className='flex space-x-4 bor'> 
                   <span className='px-2 bg-primary/10 text-primary border-primary my-4 text-xs hover:bg-primary/30' style={{border:"none",fontWeight:"400"}}>Other/Video</span>
                   <span className='px-2 bg-primary/10 text-primary border-primary my-4 text-xs hover:bg-primary/30' style={{border:"none",fontWeight:"400"}}> &#128077; {data?.imdb_data?.rating}</span>
                   <span className='px-2 bg-primary/10 text-primary border-primary my-4 text-xs hover:bg-primary/30' style={{border:"none",fontWeight:"400"}}> &#x1F44D; 0</span>
                   </div>
                  
                   
                   <div className='flex w-[50%] justify-between text-primary/70 text-[13px] absolute bottom-[0.7rem]'>
                     <div>
                     <span>Seeders</span>
                     <span>Leechers</span>
                     <span>File Size</span>
                     <span>Downloads</span>
                     <span>Uploaded</span>
                     </div>
                     <div>
                     <span>{data?.seeders}</span>
                     <span>{data?.leechers}</span>
                     <span>{data?.size_char}</span>
                     <span>{data?.downloads}</span>
                     <span>{moment(data?.timestamp).format("MMMM Do YYYY, h:mm:ss a")}</span>
                     </div>
                   </div>
                </div>
                 <div  className="w-[10%] text-gray-200 text-opacity-80 text-[16px] pt-1 h-auto  long-and-truncated relative" >
               <div className='block float-right w-[10x]'>
                 <div className='inline-grid'>
                  <button className='px-[5rem] py-2 bg-primary/10 text-gray-100 border-primary my-4 text-[15px] rounded bg-gradient-to-r from-green-400 via-purple-500  to-purple-600  hover:text-primary'  >Torrent Download</button>
                  <button className='px-[5rem] py-2 bg-primary/10  border-primary  text-[15px] text-gray-100 rounded bg-gradient-to-r from-green-400 via-blue-500 to-blue-600 hover:text-primary'  >Magnet Download</button>
                  </div>
                  <div className='align-bottom flex absolute  bottom-2'>
                  <button className='px-[1.4rem] w-[135px] py-2 bg-primary/10 text-primary rounded border-primary mr-[0.4rem]  text-[13px] hover:bg-primary/30' style={{border:"none",fontWeight:"400"}} > &#8634; Refresh</button>
                  <button className='px-[1.4rem] w-[135px] py-2 bg-primary/10 text-primary rounded border-primary ml-[0.4rem] text-[13px] hover:bg-primary/30' style={{border:"none",fontWeight:"400"}} > !&#x20DD; Report</button>

                  </div>
                 </div>
               </div>
              </div>
      </div>
    </div>
  )
}

export default Details
