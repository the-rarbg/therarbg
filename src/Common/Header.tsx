import React from 'react';
import { usePathname, useRouter } from 'next/navigation';

const cRoutes = [
  {
    path: [""],
    route: "/",
    title: "Home",
  },
  {
    path: ["get-posts"],
    route: "/get-posts/category:Movies/",
    title: "Search",
  },
  {
    path: ["about-us"],
    route: "/about-us/",
    title: "About Us",
  }
];

const Header = () => {
  const router = usePathname();
  const route = useRouter();
  let cRouter = router?.split("/") ?? [];
  return (
    <header className="bg-background-header/25 text-sm font-medium flex sticky top-0 font-montserrat backdrop-blur-3xl px-8 md:px-16 justify-between">
      <span className='mx-6 cursor-pointer hover:text-green-400 text-xl font-semibold my-4' onClick={()=>route.push("/")}>theRARBG</span>

      <div className='hidden md:flex mx-auto font-normal items-center'> 
      {/* router.pathname */}
        {cRoutes.map((obj, i) => (
          <div className={`px-6 uppercase cursor-pointer font-normal ${obj.path.includes(cRouter[1]) ? "border-b-2 border-primary" : ""} h-full flex items-center`} onClick={()=>route.push(`${obj.route}`)} key={i}>
            <p className={`${obj.path.includes(cRouter[1]) ? "text-primary" : ""} hover:text-green-400 h-fit`}>{obj.title}</p>
          </div>
        ))}
      </div>
    <button className='px-5 bg-primary/10 text-primary border-primary my-4 text-xs hover:bg-primary/30' style={{border:"solid 0.5px",fontWeight:"400"}} onClick={()=>route.push("/login")}  >Login</button>
    </header>
  );
};

export default Header
