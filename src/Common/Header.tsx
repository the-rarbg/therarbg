import React from 'react';
const Header = () => {
  return (
    <header className="bg-green-800 from-green-800 text-white py-2 text-lg font-medium flex ">




      <span className='mx-6'>theRARBG</span>

      <div className='flex mx-auto justify-around'> 
        <h1 className='mx-4'>HOME</h1>
         <h1 className='mx-4'>SEARCH</h1>
         <h1 className='mx-4'>SPONSERS</h1>
      </div>
    <button className='mx-6 px-3 bg-green-600 text-base'>LOGIN</button>
    </header>
  );
};

export default Header
