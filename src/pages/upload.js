import React, { useEffect, useState } from 'react'
import { useStyleRegistry } from 'styled-jsx';
import { createTorrent } from '../service/service';
import { Loader } from '../Common/Loader'

const upload = () => {
const[token,setToken]=useState("")
const[loader,setLoader]=useState(false)
const[formInput,setFormInput]=useState()
const[fileInput,setFileInput]=useState([{ name: "" }])

useEffect(()=>{
  return setToken(localStorage.getItem("access_token"));
},[])

const handleUpload =(e)=>{
  e.preventDefault()
  setLoader(true)
 let data ={
  name:formInput?.name ,
  short_name: formInput?.short_name,
  descr: formInput?.description,
  category_str: formInput?.category,
  type: formInput?.type,
  genre: ["Fantasy","Thriller","Romance"],
  language: formInput?.langauge,
  size: formInput?.size,
  size_char: formInput?.size,
  thumbnail: "",
  images: ["https://freeimage.host/i/HZcK4OG"],
  username: formInput?.tag,
  imdb:formInput?.imdb,
  downloads: 1,
  seeders: 1,
  leechers:1,
  info_hash: formInput?.hash,
}
setLoader(true)
  createTorrent(data,token).then((res)=>{
    setLoader(false)

    console.log(res)
  }).catch((err)=>{
    setLoader(false)
    console.log(err)
  })
}

const handleChange =(e)=>{
  const {name,value} = e.target;
   setFormInput({...formInput,[name]:value})
}

let addCreditFormFields = () => {
  setFileInput([...fileInput, { name: "" }]);
};
let removeCreditFormFields = (i) => {
  let newCreditFormValues = [...fileInput];
  newCreditFormValues.splice(i, 1);
  setFileInput(newCreditFormValues);
};

const cateArray = ['Anime', 'Games', 'Books', 'XXX', 'Documentaries', 'Other', 'Apps', 'Music', 'TV', 'Movies'];
 
const languageArray = [ "english", "russian", "other","german","hindi"]
  return (
    <div>
      {loader?<Loader/>:null}
      <div className='w-[50%] pb-5 m-auto'>
        
        <div className='text-center justify-center mt-2'> <span className='text-[16px]  font-bold mt-3 pt-3'>You can get Image URL from : <a href="https://freeimage.host/" target="_blank">https://freeimage.host/</a></span>  </div>
        <div className="mt-[3rem] justify-center pt-5 pb-2 bg-gray-200 bg-opacity-10 rounded-lg border-gray-200 border-opacity-30 flex relative">

          <form onSubmit={handleUpload} className='w-[85%]'>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title name</label>
                <input type="text" id="first_name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Movie Name" value={formInput?.name} onChange={handleChange} required />
              </div>
              
              <div>
                <label htmlFor="file" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Short Name</label>
                <input type="text" id="id" name="short_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-[7px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Short Name" value={formInput?.short_name} onChange={handleChange} required />
              </div>

             
              <div>
                <label htmlFor="language" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Language</label>
                <select name="language" id="language" className="bg-gray-50 cursor-pointer border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={formInput?.language} onChange={handleChange} placeholder="Flowbite" >
                  <option>
                    Select
                  </option>
                  {languageArray.map((item,index)=>{
                  return(
                    <option key={index} value={item}>
                    {item}
                  </option>
                  )
                })}
                </select>
              </div>
              <div>
                <label htmlFor="language" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                <select id="language" name="category_str" className="bg-gray-50 cursor-pointer border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={formInput?.category_str} onChange={handleChange} placeholder="Flowbite" >
                  <option>
                    Select
                  </option>
                  {cateArray.map((item,index)=>{
                  return(
                    <option key={index} value={item}>
                    {item}
                  </option>
                  )
                })}
                </select>
              </div>
              <div>
                <label htmlFor="language" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
                <select name="type" id="language" className="bg-gray-50 border cursor-pointer border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={formInput?.type} onChange={handleChange} placeholder="Flowbite" >
                  <option>
                    Select
                  </option>
                {languageArray.map((item,index)=>{
                  return(
                    <option key={index} value={item}>
                    {item}
                  </option>
                  )
                })}
                </select>
              </div>

            </div>

            <div className="mb-6">
              <label htmlFor="hash" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add Images Urls</label>
            {
               fileInput.map((item,index)=>{
                 return(
                   <div className='flex relative'>
                   <input type="text" name={"image"+index} id="hash" className="bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Image url" value={formInput?.hash} onChange={handleChange} required />
                  {index===0? <span className='flex ml-2 cursor-pointer center text-[25px] font-bold' onClick={()=>addCreditFormFields()}>+</span>
                  :<span className='flex ml-2 cursor-pointer center text-[25px] font-bold' onClick={()=>removeCreditFormFields()}>-</span>
               }
               </div>
                 )

               })
             }

            
            </div>
            <div className="mb-6">
              <label htmlFor="hash" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Torrent Hash</label>
              <input type="text" name="hash" id="hash" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="309626C8000F9C006782B097E7B6EAADD7F7C3E7" value={formInput?.hash} onChange={handleChange} required />
            </div>
            <div className="mb-6">
              <label htmlFor="tag" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tags</label>
              <input name="tag" type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="john.doe@company.com" value={formInput?.tag} onChange={handleChange} required />
            </div>
            <div className="mb-6">
              <label htmlFor="tag" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Torrent Descriptions</label>
              <textarea name="description" rows={6} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={formInput?.description} onChange={handleChange} placeholder="" >
              </textarea>
            </div>

            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
              </div>
              <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-primary-600 hover:underline dark:text-primary-500">terms and conditions</a>.</label>
            </div>
            <button type="submit" className="bg-primary/10 text-primary border-primary my-3 hover:bg-primary/30 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-1.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700" style={{ border: "solid 0.5px" }} >Submit</button>
          </form>

        </div>
      </div>
    </div>

  )
}

export default upload
