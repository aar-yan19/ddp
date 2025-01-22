'use client';

import Link from 'next/link';
import Image from 'next/image';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useEffect, useState } from 'react';

export default function CreateProject() {


  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translateXValue = Math.min(scrollY / 5, 300); 

  const scaleValue = Math.min(1 + scrollY / 1000, 2);
  const revscaleValue = Math.max(2 - scrollY / 1000, 1);
  const blurValue = Math.min(scrollY / 100, 10); 
  const revblurValue = Math.max(10 - scrollY / 50, 0); 

  





  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayOpen((prev) => !prev);
  };


  
  return (
    <>
      <div
        id="home"
        className="bg-black bg-fixed relative min-h-screen flex flex-col items-center justify-center overflow-y-scroll snap-y snap-mandatory"
      >

<Image
    className="bg-fixed absolute inset-0 object-cover opacity-50 pointer-events-none"
    src="/officeddp.jpeg" 
    alt="Background"
    layout="fill"
    priority
  />

<Image
    className="bg-fixed absolute inset-0 object-cover opacity-25 pointer-events-none"
    src="/grainy.jpg" 
    alt="Background"
    layout="fill"
    priority
  />
     <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 pointer-events-none" />
     {/* <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70 pointer-events-none" /> */}

       {/* Hamburger Menu Icon */}
       {!isOverlayOpen && (
        <button
          onClick={toggleOverlay}
          className="fixed top-4 left-4 z-50 p-2 text-xl text-white hover:opacity-50"
        >
          <i className="fa-sharp fa-solid fa-bars"></i>
        </button>
      )}

      {/* Overlay Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[250px] bg-black text-white z-50 shadow-lg transition-opacity duration-200 ease-in-out ${
          isOverlayOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          onClick={toggleOverlay}
          className="fixed top-4 left-4 z-50 p-2 text-xl text-white hover:opacity-50"
        >
          <i className="fa-sharp fa-solid fa-times"></i>
        </button>
        <div className="flex flex-col items-start justify-center h-full p-8 space-y-2">
        <Link href="/" className="font-bold text-lg hover:opacity-50" onClick={toggleOverlay}>
            Home
          </Link>
          <Link href="" className="font-bold text-lg pointer-events-none border-2 border-white rounded-2xl pl-1.5 pr-1.5" onClick={toggleOverlay}>
            What we do
          </Link>
          
          <Link href="#entertainment" className="font-bold text-lg hover:opacity-50" onClick={toggleOverlay}>
           Team and Leadership
          </Link>
         
          <Link href="#contact" className="font-bold text-lg hover:opacity-50" onClick={toggleOverlay}>
            Contact
          </Link>
        </div>
      </div>
        




        {/* Logo Section */}
        <div id="wrapmain1" className="mb-0 top-0 absolute z-20 snap-start">
          <Image
            className=""
            src="/ddplogo.png"
            width={500}
            height={500}
            alt="logo"
          />
        </div>

        <div className="m-8"></div>

        {/* Links Section */}
        {/* <div className="z-40 fixed right-0 snap-start">

        <div className="m-3">
          <Link href="#home" className="hidden font-bold text-white hover:opacity-50">
              Home
            </Link>
          </div>
         
          <div className="m-3">
            <Link href="#entertainment" className=" underline font-bold text-white hover:opacity-50">
              Entertainment
            </Link>
          </div>
          <div className="m-3">
            <Link href="#event" className=" underline font-bold text-white hover:opacity-50">
              Event/Shows
            </Link>
          </div>
        </div> */}

        {/* Spacer */}
        <div className="my-8"></div>

        {/* Text Section */}
        <div className="relative text-center">
          <h1 className="mb-5 text-3xl z-40 px-1 py-1 text-white font-black inline-block max-w-[600px] mx-auto"
           style={{
            // transform: `scale(${scaleValue})`,
           
          }}
          >
            Driving Innovation, Empowering talent, Unleashing infinite potential.
          </h1>
          
        </div>

        <div className="relative text-center">
          <h2 

style={{

  // filter: `blur(${blurValue}px)`, 
}}
          
          className="decoration-pink-300 decoration-4 mb-5 text-base z-40 px-1 py-1 text-white inline-block max-w-[500px] mx-auto">
          At Dev Drishti, we’re driven by passion and the belief that talent deserves to be seen.
With state-of-the-art tech, engaging storytelling, and flawless execution, we breathe life into ideas, creating connections that resonate and inspire.          </h2>
          
        </div>


      <div className=' z-40 relative flex justify-between'>
          <div className="flex gap-2.5">
            <Link href="#!" className="p-2.5 font-bold font-helv tracking-tighter rounded bg-transparent border border-white text-xs text-white hover:opacity-50">
              Explore
            </Link>
            <Link href="#!" className="p-2.5 font-bold font-helv tracking-tighter rounded bg-transparent border border-white  text-xs text-white hover:opacity-50">
              Query?
            </Link>
            {/* <Link href="./another-link" className="font-light text-white">
              Another Link
            </Link> */}
          </div>
        </div>
{/* 
        Arrow Down Icon
        <div className="flex gap-4">
          <Link href="#tech" className="font-bold text-white text-titlexl">
            <i className="fa-sharp fa-solid fa-arrow-down-long"></i>
          </Link>
        </div> */}

        {/* Spacer */}
        <div className="my-8"></div>
      </div>

    {/* 1 */}



    

      {/* <div className="z-40 absolute bottom-0 flex justify-between p-4">
        <div className="flex gap-4">
          <h1 className="font-light text-white">
            Dev Drishti Production Pvt. Ltd.
          </h1>
        </div>
      </div> */}
    </>
  );
}
