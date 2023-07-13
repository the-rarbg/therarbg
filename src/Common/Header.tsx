import React from 'react';
import { usePathname, useRouter } from 'next/navigation';

const cRoutes = [
  {
    path: ["/","/home/"],
    title: "Home",
  },
  {
    path: ["/get-posts/category:Movies/"],
    title: "Search",
  },
  {
    path: ["/about-us/"],
    title: "About Us",
  }
];

const Header = () => {
  const router = usePathname();
  const route = useRouter()
  console.log(router)
  return (
    <header className="bg-background-header/25 text-sm font-medium flex sticky top-0 font-montserrat backdrop-blur-3xl px-16">




      <span className='mx-6 cursor-pointer hover:text-green-400 text-xl font-semibold my-4' onClick={()=>route.push("/")}>theRARBG</span>

      <div className='flex mx-auto justify-around font-normal items-center'> 
      {/* router.pathname */}
        {cRoutes.map((obj, i) => (
          <div className={`px-6 uppercase cursor-pointer font-normal ${obj.path.includes(router) ? "border-b-2 border-primary" : ""} h-full flex items-center`} onClick={()=>route.push(`${obj.path[0]}`)} key={i}>
            <p className={`${obj.path.includes(router) ? "text-primary" : ""} hover:text-green-400 h-fit`}>{obj.title}</p>
          </div>
        ))}
      </div>
    <button className='px-5 bg-primary/10 text-primary border-primary my-4 text-xs hover:bg-primary/30' style={{border:"solid 0.5px",fontWeight:"400"}} onClick={()=>route.push("/login")}  >Login</button>
    </header>
  );
};

export default Header
