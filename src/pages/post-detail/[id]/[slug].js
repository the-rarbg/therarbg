import { useRouter } from 'next/router';
import React, { useEffect, useState, useSyncExternalStore } from 'react'
import { Loader } from '../../../Common/Loader';
import { getListComment, movieDetailsPost, postComment } from '../../../service/service';
import Image from 'next/image'
import moment from 'moment';
import { formatBytes } from '../../../Common/CardExpanded';
import YouTube from "react-youtube";
const Details = () => {

  let trackers = [
    "udp://tracker.therarbg.com:6969/announce",
    "udp://tracker.t-rb.org:6969/announce",
    "udp://tracker.opentrackr.org:1337/announce",
    "udp://opentracker.i2p.rocks:6969/announce",
    "udp://tracker.openbittorrent.com:6969/announce",
    "udp://open.demonii.com:1337/announce",
    "udp://exodus.desync.com:6969/announce",
    "udp://open.stealth.si:80/announce",
    "udp://tracker.torrent.eu.org:451/announce",
    "udp://tracker.moeking.me:6969/announce",
    "udp://tracker1.bt.moack.co.kr:80/announce",
    "udp://tracker.bitsearch.to:1337/announce",
    "udp://explodie.org:6969/announce",
    "udp://tracker.tiny-vps.com:6969/announce",
    "udp://tracker.theoks.net:6969/announce",
    "udp://p4p.arenabg.com:1337/announce",
    "udp://movies.zsw.ca:6969/announce",

  ]



  let temp = "&tr="
  let tracker = ""
  trackers.map((item) => {
    tracker = tracker + temp + item
  })

  const router = useRouter();
  let id;
  let slug;
  const [loader, setLoader] = useState(false)
  const [data, setData] = useState()
  const [comment, setComment] = useState("")
  const [eid, setEid] = useState("")
  const [commentList, setCommentList] = useState([])
  const [magnateDownload, setMagnateDownload] = useState("")
  const [torrentDownload, setTorrentDownload] = useState("")
  const[highligth,setHighLight]=useState("Trackers")

  useEffect(() => {
    if (router.isReady) {
      id = router.query.id;
      slug = router.query.slug;
      if (!id) return null;
      getDetails()
    }

  }, [router.isReady]);

  const getDetails = () => {
    setLoader(true)
    movieDetailsPost(id, slug).then((res) => {
      setLoader(false)

      let url = `magnet:?xt=urn:btih:${res?.data?.info_hash}&dn=${res?.data?.name}${trackers}`
      let url_t = `https://m2t.mirrorbay.org/info-hash/${res?.data?.info_hash}/${res?.data?.name}/?apikey=therarbg`
      setMagnateDownload(url)
      setTorrentDownload(url_t)



      setData(res?.data)
      setEid(res?.data?.eid)
      getCommentInfo(res?.data?.eid)

    }).catch((err) => {
      setLoader(false)
      console.log(err)
    })
  }

  const getCommentInfo = (value) => {
    setLoader(true)
    let token = localStorage.getItem("access_token")
    getListComment(value, token).then((res) => {
      console.log("response", res)
      setLoader(false)
      setCommentList(res?.data?.results)
    }).catch((err) => {
      setLoader(false)
      console.log("error  :", err)
    })
  }
  const postCommentInfo = () => {
    setLoader(true)
    let token = localStorage.getItem("access_token")
    if (!token) {
      router.push("/login")
    }
    let data = {
      trb_post: eid,
      comment: comment
    }
    postComment(data, token).then((res) => {
      console.log("response", res)
      getCommentInfo(eid)
    }).catch((err) => {
      setLoader(false)
      if (err?.res?.status === 401) {
        window.location.hre = "/"
      }
      console.log("error  :", err)
    })
  }


  const opts = {
    height: "300px",
    width: "100%",
    border: "8px",
    playerVars: {
      autoplay: 1,
    },
  };
  const _onReady = (event) => {
    event.target.pauseVideo();
  }

  return (
    <div>
      {loader ? <Loader /> : null}

      <div className='w-[86%] pt-5 pb-5 m-auto'>
        <div className="mt-[5rem] pb-5 bg-gray-200 bg-opacity-10 rounded-lg border-gray-200 border-opacity-30 justify-start flex relative">
          <div className="w-[15%]  m-3 relative max-w-[15%] ">
            <img src={data?.thumbnail ? data?.thumbnail : "https://i.therarbg.com/np.jpg"} width={800} height={100} alt='movie' layout="responsive" />
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
                <button className='px-[5rem] py-2 bg-primary/10 text-gray-100 border-primary my-4 text-[15px] rounded bg-gradient-to-r from-green-400 via-purple-500  to-purple-600  hover:text-primary' onClick={() => {
                  window.open(torrentDownload, '_blank')
                }} >Torrent Download</button>
                <button className='px-[5rem] py-2 bg-primary/10  border-primary  text-[15px] text-gray-100 rounded bg-gradient-to-r from-green-400 via-blue-500 to-blue-600 hover:text-primary' onClick={() => {
                  window.open(magnateDownload, '_blank')
                }}  >&#129522; Magnet Download</button>
              </div>
              <div className='align-bottom flex absolute  bottom-2'>
                <button className='px-[1.4rem] w-[135px] py-2 bg-primary/10 text-primary rounded border-primary mr-[0.4rem]  text-[13px] hover:bg-primary/30' style={{ border: "none", fontWeight: "400" }} > &#8634; Refresh</button>
                <button className='px-[1.4rem] w-[135px] py-2 bg-primary/10 text-primary rounded border-primary ml-[0.4rem] text-[13px] hover:bg-primary/30' style={{ border: "none", fontWeight: "400" }} > !&#x20DD; Report</button>

              </div>
            </div>
          </div>
        </div>
        <br />
        <div className={`grid gap-2 mb-6 ${data?.imdb_data?.video_list[0]?.key?"md:grid-cols-3":"md:grid-cols-2"}`}>
          <div>
            <div className='flex space-x-4 text-gray-500 text-[13px] '>
              <span className={`cursor-pointer mb-[5px]  px-[0.5rem] rounded  ${highligth==="Files"? "bg-primary/10":""}`} onClick={()=>setHighLight("Files")} >Files</span>
              <span className={`cursor-pointer mb-[5px]  px-[0.5rem] rounded  ${highligth==="Trackers"? "bg-primary/10":""}`} onClick={()=>setHighLight("Trackers")} >Trackers</span>
              <span className={`cursor-pointer mb-[5px]  px-[0.5rem] rounded  ${highligth==="More"? "bg-primary/10":""}`} onClick={()=>setHighLight("More")} >More Info</span>
            </div>
            <div className='p-5 text-gray-300 overflow-y-scroll bg-gray-200 bg-opacity-10 h-[300px] rounded-lg border-gray-200 border-opacity-30'>
              {
                trackers.map((item, index) => {
                  return (
                    <p className='p-1' key={index}>
                      {item}
                    </p>
                  )
                })
              }
            </div>
          </div>



        {data?.imdb_data?.video_list[0]?.key? <div className='text-gray-300'>
            <span className='pl-5'>Trailer</span>

            <YouTube videoId={data?.imdb_data?.video_list[0]?.key} style={{borderRadius:"8px"}}      
              opts={opts} onReady={_onReady} />


          </div>
:null}




          <div className='text-gray-300'>
            <span className='pl-5'>Similar Torrents</span>
            <div className='p-5 bg-gray-200 bg-opacity-10 overflow-y-scroll rounded-lg  h-[300px] border-gray-200 border-opacity-30'>
              {
                data?.recomendations?.map((item, index) => {

                  return (
                    <div key={index} onClick={() => {
                      let slug = item[`n`].toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
                      window.location.href = `/post-detail/${item?.pk}/${slug}/`;
                    }} className='cursor-pointer text-gray-300'>

                      <p>
                        {item[`n`]}
                      </p>
                      <div className='text-off-white text-[12px]'>
                        <span className='px-2 bg-primary/10 text-primary mr-3 py-[1.5px] rounded border-primary my-4 text-xs hover:bg-primary/30' style={{ border: "none", fontWeight: "400" }}>{item['c']}</span>
                        <span>
                          <i className="fa fa-database text-primary"></i>  {formatBytes(item[`s`])}
                        </span>
                      </div>

                    </div>

                  )
                })
              }


            </div>

          </div>

        </div>

        <div className="w-[100%] mt-[2rem] p-10 bg-gray-200 bg-opacity-10 rounded-lg border-gray-200 border-opacity-30 justify-start inline-grid relative">
          <div className='mb-2 inline-grid'>
            {
              commentList?.map((item, index) => {
                return (
                  <div className='p-3 bg-gray-200 bg-opacity-10 rounded-lg border-gray-200 border-opacity-30'>
                    <h1>{item?.info?.user}:</h1><span>
                      {item?.comment || "This sddjksd kjhsdkj"}
                    </span>
                  </div>
                )
              })
            }
          </div>
          <div className='mb-2 inline-grid'>
            <input type="text" className='border-gray-200 w-[880px] rounded border-opacity-30 text-[12px] bg-gray-200 bg-opacity-10 p-2 px-3 text-gray-500' onChange={(e) => setComment(e.target.value)} placeholder="Write your comments here" />
            <button onClick={postCommentInfo} className='px-2 py-[2.5px] rounded w-[100px] bg-primary/10 text-primary border-primary my-4 text-xs hover:bg-primary/30' style={{ border: "solid 0.5px", fontWeight: "400" }} >POST</button>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Details
