import React from 'react';
import {useRouter } from 'next/navigation';

function formatBytes(bytes: number, decimals:number = 1) {
  if (!+bytes) return '0 Bytes'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}

interface CardProps {
  // @ts-ignore the any type is used here because the data is not typed
  item: Record<string, any>;
  index: number;
  categoryId: string;
  page:string;
  blur:Boolean;
}

const Card = (props: CardProps) => {
  const router = useRouter();
  let name = props.item[`name`];
  let time = new Date(props.item[`timestamp`]);
  return (
  <div onClick={()=>{
    if(props?.page ==="dashboard" || props?.blur){
      return;
    }
    let slug =  name.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
     router.push(`/post-detail/${props.item?.eid}/${slug}/`)
  }} key={props.index} className={`my-2 overflow-hidden w-full  ${props?.page ==="dashboard"?"":"cursor-pointer"} py-2 bg-off-white/10 rounded-md flex justify-center hover:bg-primary/10 border border-off-white/10 hover:border-primary/50`}>
    <div className="w-[30px] h-[30px] bg-cover rounded mx-auto justify-center items-center inline-flex ml-2" style={{'backgroundImage':`url("${props.item[`thumbnail`] ? props.item[`thumbnail`] : props.categoryId==="XXX"?"https://i.therarbg.com/xnp.jpg": "https://i.therarbg.com/np.jpg"}")`}}>
    </div>
    <br />
      <div className="text-off-white text-[14px] text-left h-auto pt-1.5 text-ellipsis overflow-hidden pl-4 font-medium break-all">
      <span>
        {props?.item?.name}
      </span>
    </div>
   
    <div className="flex text-off-white text-[14px] h-auto pt-1.5 justify-end long-and-truncated font-light gap-4">
      <span className='w-14'>
        {props.item['c'] || props.categoryId}
      </span>
      <span>{" "}</span>
      <span className='w-14'>
        {time.getDate()||""}-{time.getMonth()+1||""}-{time.getFullYear()||""}
      </span>
      <span>{" "}</span>
      <span className='w-14'>
        {formatBytes(props.item['size'])}
      </span>
     {props?.page ==="dashboard"?  <span onClick={()=>{router.push(`/upload?data=${JSON.stringify(props?.item)}`)}} className='font-medium cursor-pointer text-primary' >Edit</span>:null}
    </div>
  </div>);
};

export default Card;
