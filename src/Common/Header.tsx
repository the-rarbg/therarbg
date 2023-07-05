import React from 'react';
const Header = () => {
  return (
    <header className="bg-green-800 text-white py-3 text-lg font-medium flex bg-gradient-to-r from-green-950 from-5% via-emerald-800 via-30% to-emerald-950 to-80% ... shadow-md">




      <span className='mx-6 cursor-pointer hover:text-green-400'>theRARBG</span>

      <div className='flex mx-auto justify-around font-normal'> 
        <h1 className='mx-4 cursor-pointer font-normal hover:text-green-400'>HOME</h1>
         <h1 className='mx-4 cursor-pointer font-normal hover:text-green-400'>SEARCH</h1>
         <h1 className='mx-4 cursor-pointer font-normal hover:text-green-400'>SPONSERS</h1>
      </div>
    <button className='mx-6 px-3 bg-green-950 text-green-400  border-green-400 text-base ' style={{border:"solid 0.5px",fontWeight:"400"}}>LOGIN</button>
    </header>
  );
};

export default Header
