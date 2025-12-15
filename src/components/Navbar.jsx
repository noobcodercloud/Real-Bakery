import React, { useState, useEffect } from 'react';
import LOGO from '../images/cookie_icon.png';


const Navbar = () => {
  
  const [Open, setOpen] = useState(false);
  // const [LoginOpen, setLoginOpen] = useState(false);
  // const [Address, setAddress] = useState("Login and enter address.")

  return (
    <div>
      <button
        className='fixed top-2 right-2 w-fit backdrop-blur-lg bg-amber-700/30 hover:bg-amber-700/60 rounded-full sm:hidden z-51 cursor-pointer transition-all duration-200'
        onClick={() => setOpen(!Open)}
      >
        <div className='space-y-1 background-blur-lg p-5 h-fit w-fit rounded-full flex items-center justify-center flex-col'>
          <span className='block w-4 h-0.5 bg-white'></span>
          <span className='block w-4 h-0.5 bg-white'></span>
          <span className='block w-4 h-0.5 bg-white'></span>
        </div>
      </button>
      <div>
        <nav className="hidden sm:flex fixed w-full top-0 z-50 bg-amber-700/30 hover:bg-amber-700/40 backdrop-blur-lg border-b border-white/10 transition-all">
          <div className="max-w-5xl mx-auto px-4 py-3 w-full">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full">
              <div className='flex gap-2 sm:gap-7 items-center justify-center w-full'>
                <img src={LOGO} alt="LOGO" className='h-10 sm:h-15' />
                <span className="text-2xl text-gray-900 font-semibold transition-all duration-300 hover:text-amber-500 hover:drop-shadow-[0_0_9px_rgba(245,158,11,0.8)]">
                  Real Bakery
                </span>
              </div>
              <div className="flex space-x-6 text-gray-900 font-medium justify-evenly w-full">
                <a href="#" className='transition-all duration-300 hover:text-amber-500 hover:drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]'>Online Menu</a>
                <a href="#" className='transition-all duration-300 hover:text-amber-500 hover:drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]'>About</a>
                <a href="#" className='transition-all duration-300 hover:text-amber-500 hover:drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]'>Restaurants</a>
                <a href="#" className='transition-all duration-300 hover:text-amber-500 hover:drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]'>Contact</a>
                <a href="#" 
                className='transition-all duration-300 hover:text-amber-500 hover:drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]'
                // onClick={() => {
                //   const temp = prompt("Enter your address:");
                //   setAddress(temp)
                // }
                // }
                >Login</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {Open && (
        <nav className="z-50 bg-amber-700/30 hover:bg-amber-700/40 backdrop-blur-lg border-b border-white/10 transition-all w-[70%] h-screen fixed left-0 top-0 duration-1000">
          <div className="max-w-5xl p-3 transition-all">
            <div className="flex flex-col items-center h-screen py-6">
              <div className='flex gap-2 sm:gap-7 items-center justify-center h-10'>
                <img src={LOGO} alt="LOGO" className='h-10 sm:h-15' />
                <span className="text-3xl text-gray-900 font-semibold">
                  Real Bakery
                </span>
              </div>
              <div className="flex text-gray-900 font-medium justify-evenly items-center w-full flex-col h-[50%] my-10 gap-5">
                <a href="#" 
                className='hover:bg-amber-600/20 p-4 rounded-2xl w-[70%] text-center transition-all duration-500 border border-transparent hover:border hover:border-amber-800'
                onClick={() => setOpen(!Open)}
                >Online Menu</a>
                <a href="#" 
                className='hover:bg-amber-600/20 p-4 rounded-2xl w-[70%] text-center transition-all border duration-500 border-transparent hover:border hover:border-amber-800'
                onClick={() => setOpen(!Open)}
                >About</a>
                <a href="#" 
                className='hover:bg-amber-600/20 p-4 rounded-2xl w-[70%] text-center transition-all duration-500 border-transparent border hover:border hover:border-amber-800'
                onClick={() => setOpen(!Open)}
                >Restaurants</a>
                <a href="#" 
                className='hover:bg-amber-600/20 p-4 rounded-2xl w-[70%] text-center transition-all duration-500 border-transparent border hover:border hover:border-amber-800'
                onClick={() => setOpen(!Open)}
                >Contact</a>
                <a href="#" 
                className='hover:bg-amber-600/20 p-4 rounded-2xl w-[70%] text-center transition-all duration-500 border-transparent border hover:border hover:border-amber-800'
                onClick={() => {
                  setOpen(!Open);
                  // const temp = prompt("Enter your address:");
                  // setAddress(temp)
                }
                }
                >Login</a>
              </div>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default { Navbar, Address };