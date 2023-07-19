import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { Loader } from '../../../Common/Loader';
import { getListComment, movieDetailsPost, postComment } from '../../../service/service';
import Image from 'next/image'
import moment from 'moment';
import { formatBytes } from '../../../Common/CardExpanded';

const Details = () => {

  const router = useRouter();
  let id;
  let slug;
  const [loader, setLoader] = useState(false)
  const [data, setData] = useState()
  const[comment,setComment]=useState("")

  useEffect(() => {
    if (router.isReady) {
      id = router.query.id;
      slug = router.query.slug;
      if (!id) return null;
      getDetails()
    }
    getCommentInfo()
  }, [router.isReady]);

  const getDetails = () => {
    setLoader(true)
    movieDetailsPost(id, slug).then((res) => {
      setLoader(false)
      setData(res?.data)
      console.log("re",res.data)
    }).catch((err) => {
      setLoader(false)
      console.log(err)
    })
  }

  const getCommentInfo =()=>{
    let token = localStorage.getItem("access_token")
    getListComment(token).then((res)=>{
    console.log("response",res)
    }).catch((err)=>{
      console.log("error  :",err)
    })
  }
  const postCommentInfo =()=>{
    let token = localStorage.getItem("access_token")
    let data ={
      trb_post: "pramod",
      comment:comment
    }
    postComment(data,token).then((res)=>{
    console.log("response",res)
    }).catch((err)=>{
      console.log("error  :",err)
    })
  }

  return (
    <div>
      {loader ? <Loader /> : null}
      <div className='w-[86%] pt-5 pb-5 m-auto'>
        <div className="mt-[5rem] pb-5 bg-gray-200 bg-opacity-10 rounded-lg border-gray-200 border-opacity-30 justify-start flex relative">
          <div className="w-[15%]  m-3 relative max-w-[15%] ">
            <Image src={data?.thumbnail ? data?.thumbnail : "https://i.therarbg.com/np.jpg"} width={800} height={100} alt='movie' layout="responsive" />
          </div>

          <div className="w-[10rem] justify-start text-gray-200 text-opacity-80 text-[16px] pt-2 h-auto  long-and-truncated relative">
            <h1 >{data?.name}</h1>
            <div className='flex space-x-4 '>
              <span className='px-2 bg-primary/10 text-primary border-primary my-4 text-xs hover:bg-primary/30' style={{ border: "none", fontWeight: "400" }}>Other/Video</span>
              <span className='px-2 bg-primary/10 text-primary border-primary my-4 text-xs hover:bg-primary/30' style={{ border: "none", fontWeight: "400" }}> &#128077; {data?.imdb_data?.rating}</span>
              <span className='px-2 bg-primary/10 text-primary border-primary my-4 text-xs hover:bg-primary/30' style={{ border: "none", fontWeight: "400" }}> &#x1F44D; 0</span>
            </div>


            <div className='flex w-[50%] justify-between text-gray-200 text-[13px] absolute bottom-[0.7rem]'>
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
                <span>{formatBytes(data?.size)}</span>
                <span>{data?.downloads}</span>
                <span>{moment(data?.timestamp).format("MMMM Do YYYY")}</span>
              </div>
            </div>
          </div>

          <div className="w-[10%] text-gray-200 text-opacity-80 text-[16px] pt-1 h-auto  long-and-truncated relative" >
            <div className='block float-right w-[10x]'>
              <div className='inline-grid'>
                <button className='px-[5rem] py-2 bg-primary/10 text-gray-100 border-primary my-4 text-[15px] rounded bg-gradient-to-r from-green-400 via-purple-500  to-purple-600  hover:text-primary'  >Torrent Download</button>
                <button className='px-[5rem] py-2 bg-primary/10  border-primary  text-[15px] text-gray-100 rounded bg-gradient-to-r from-green-400 via-blue-500 to-blue-600 hover:text-primary'  >&#129522; Magnet Download</button>
              </div>
              <div className='align-bottom flex absolute  bottom-2'>
                <button className='px-[1.4rem] w-[135px] py-2 bg-primary/10 text-primary rounded border-primary mr-[0.4rem]  text-[13px] hover:bg-primary/30' style={{ border: "none", fontWeight: "400" }} > &#8634; Refresh</button>
                <button className='px-[1.4rem] w-[135px] py-2 bg-primary/10 text-primary rounded border-primary ml-[0.4rem] text-[13px] hover:bg-primary/30' style={{ border: "none", fontWeight: "400" }} > !&#x20DD; Report</button>

              </div>
            </div>
          </div>
        </div>
        <br />
        <div className='flex'>
          <div>
            <div className='flex space-x-4 text-gray-500 '>
              <span>Files</span>
              <span>Trackers</span>
              <span>More Info</span>
            </div>
            <div className='p-5 bg-gray-200 bg-opacity-10 rounded-lg border-gray-200 border-opacity-30'>

              <p>
                1 This ksjhd kjsdhkjh khsjd khdkhskjd kshjk This ksjhd kjsdhkjh khsjd khdkhskjd kshjk
              </p>
              <p>
                2 This ksjhd kjsdhkjh khsjd khdkhskjd kshjk  This ksjhd kjsdhkjh khsjd khdkhskjd kshjk
              </p>
              <p>
                3 This ksjhd kjsdhkjh khsjd khdkhskjd kshjk This ksjhd kjsdhkjh khsjd khdkhskjd kshjk
              </p>
            </div>
          </div>
          <div>
            <div className='space-x-4 text-gray-300 ml-[2rem]'>
              <span className='pl-5'>Similar Torrents</span>
              <div className='p-5 bg-gray-200 bg-opacity-10 rounded-lg border-gray-200 border-opacity-30'>
                {
                  data?.recomendations?.map((item, index) => {
                  
                    return (
                      <div key={index} onClick={() => {
                        let slug = item[`n`].toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
                       window.location.href = `/post-detail/${item?.pk}/${slug}/`;
                      }} className='cursor-pointer'>

                        <h1>
                          {item[`n`]}
                        </h1>
                        <div className='text-off-white text-[12px]'>
                          <span className='px-2 bg-primary/10 text-primary mr-3 py-[1.5px] rounded border-primary my-4 text-xs hover:bg-primary/30' style={{ border: "none", fontWeight: "400" }}>{item['c']}</span>
                          <span>
                            <i className="fa fa-database"></i>  {formatBytes(item[`s`])}
                          </span>
                        </div>

                      </div>

                    )
                  })
                }


              </div>

            </div>

          </div>
        </div>



        <div className="w-[100%] mt-[5rem] p-10 bg-gray-200 bg-opacity-10 rounded-lg border-gray-200 border-opacity-30 justify-start flex relative">
          <div>

          </div>
          <div className='mb-2 inline-grid'>
            <input type="text" className='border-gray-200 w-[880px] rounded border-opacity-30 text-[12px] bg-gray-200 bg-opacity-10 p-2 px-3 text-gray-500' onChange={(e)=> setComment(e.target.value)} placeholder="Write your comments here" />
            <button onClick={postCommentInfo} className='px-2 py-[2.5px] rounded w-[100px] bg-primary/10 text-primary border-primary my-4 text-xs hover:bg-primary/30' style={{border:"solid 0.5px",fontWeight:"400"}} >POST</button>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Details
