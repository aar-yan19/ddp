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
        className="bg-fixed relative min-h-screen flex flex-col items-center justify-center overflow-y-scroll snap-y snap-mandatory"
      >

<Image
    className="bg-fixed absolute inset-0 object-cover opacity-25 pointer-events-none"
    src="/grainy.jpg" 
    alt="Background"
    layout="fill"
    priority
  />
     <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-100 pointer-events-none" />

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
          <Link href="/vision" className="font-bold text-lg hover:opacity-50" onClick={toggleOverlay}>
            What we do
          </Link>
          <Link href="#tech" className="font-bold text-lg pointer-events-none" onClick={toggleOverlay}>
            Ventures
          </Link>
          <Link href="#tech" className="ml-5 font-bold text-lg hover:opacity-50" onClick={toggleOverlay}>
            - Forthly
          </Link>
          <Link href="#entertainment" className="ml-5 font-bold text-lg hover:opacity-50" onClick={toggleOverlay}>
            - XPERIENCE
          </Link>
          <Link href="#noier" className="ml-5 font-bold text-lg hover:opacity-50" onClick={toggleOverlay}>
            - N'OIER
          </Link>
          <Link href="#event" className="ml-5 font-bold text-lg hover:opacity-50" onClick={toggleOverlay}>
            - suroor
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
            <Link href="#!" className="p-2.5 font-bold font-helv tracking-tighter rounded-3xl bg-transparent border border-white text-xs text-white hover:opacity-50">
              Explore
            </Link>
            <Link href="#!" className="p-2.5 font-bold font-helv tracking-tighter rounded-3xl bg-transparent border border-white  text-xs text-white hover:opacity-50">
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

 <div id="tech" className="relative bg-black p-10"  style={{ 
      
        backgroundImage: 'url(/forthlyphoto2.jpeg)',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center' , opacity:'45'
    }}>
        <div className="absolute inset-0 bg-black opacity-0 pointer-events-none"></div>

         <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-100 pointer-events-none" />

  {/* <Image
    className="absolute inset-0 object-cover opacity-45 pointer-events-none"
    src="/forthlyphoto2.jpeg" 
    alt="Background"
    layout="fill"
    priority
  /> */}
   {/* <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50 pointer-events-none" /> */}

  <div className="relative z-10 text-center">
  <h1 className="border-2 rounded inline p-1.5 pointer-events-none mx-auto text-center border-white font-bold text-white">  
     Technology
    </h1>
  </div>


  <div className="z-40 relative w-full pl-20 mt-10 space-y-10">
    <div id="wrapmain1" className="flex flex-col items-start">
      <Image
        className="block"
        src="/fl.png"
        width={50}
        height={50}
        alt="logo"
      />
    </div>
 

    <div className="relative text-left ">
      <h1 
        style={{
          // transform: `scale(${revscaleValue})`,
        }}
        className="decoration-pink-300 decoration-4 text-3xl mb-5 z-40 px-1 text-white font-black max-w-[600px]"
      >
        Efficient Project Management, Dynamic Portfolio
      </h1>
      <h2 
        style={{
          // filter: `blur(${revblurValue}px)`,
        }}
        className=" z-40 px-1 py-1 text-white text-base max-w-[600px]"
      >
    Forthly is an innovative platform that empowers users
     to showcase their projects through dynamic, layered portfolios. 
     It simplifies project documentation, highlights technical and
      creative insights, and offers recruiters a streamlined view of talent,
       fostering impactful connections.
      </h2>
    </div>

    <div className="">
      <Link href="#!" className="p-2.5 font-bold font-helv tracking-tighter rounded-3xl bg-transparent border border-white text-xs text-white hover:opacity-50">
        Learn More
      </Link>
    </div>
  </div>
  </div>







{/* 2 */}

<div
    id="entertainment"
    className="relative bg-black p-10"
>
    <video
        className="absolute inset-0 object-cover w-full h-full"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{}}
    >
        <source src="/xfootage2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>
    <div className="absolute inset-0 bg-black opacity-0 pointer-events-none"></div>

    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-100 pointer-events-none" />

       
    {/* <video
    autoPlay
    loop
    muted
    playsInline
    preload="auto"
    className="blur-x3s z-0 opacity-45 absolute inset-0 w-full h-full object-cover"
  >
    <source src="/interframevideocomp.mp4" type="video/mp4" />
   
  </video> */}

{/* 
<Image
    className="absolute inset-0 object-cover opacity-45 pointer-events-none"
    src="/dune.jpg" 
    alt="Background"
    layout="fill"
    priority
  /> */}
   {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-100 pointer-events-none" /> */}


   <div className="relative z-10 text-center">
   <h1 className="border-2 rounded inline p-1.5 pointer-events-none mx-auto text-center border-white font-bold text-white">  
      Entertainment
    </h1>
  </div>

  <div className="z-40 relative w-full pr-20 mt-10 space-y-10">


    <div id="wrapmain1" className="flex flex-col items-end">
      <Image
        className="block"
        src="/xlogo.png"
        width={120}
        height={120}
        alt="logo"
      />
    </div>

    <div className="  flex flex-col items-end text-right ">

  <h1 
    style={{
      // Example: transform: `scale(${revscaleValue})`,
    }}
    className="decoration-pink-300 decoration-4 text-3xl mb-5 z-40 px-1 text-white font-black max-w-[600px]"
  >
   Independent &
  Original,<br />
  Interactive entertainment
  </h1>     
  <h2 
    style={{
      // Example: filter: `blur(${revblurValue}px)`,
    }}
    className=" z-40 px-1 py-1 text-white text-base max-w-[600px]"
    >

    XPERIENCE brings stories to life through an
     interactive original streaming platform and 
     a visionary production company. It redefines
      entertainment by blending innovative storytelling ideas 
      with compelling narratives, allowing audiences to 
      connect, engage, and immerse themselves like never before.
  </h2>

</div>


    <div className="flex flex-col items-end">
      <Link href="#!" className="p-2.5 font-bold font-helv tracking-tighter rounded-3xl bg-transparent border border-white text-xs text-white hover:opacity-50">
        Learn More
      </Link>
    </div>
  </div>
</div>



{/* 3 */}



<div id="noier" className="relative bg-black p-10" style={{ 
      
      backgroundImage: 'url(/noier1.jpeg)',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center' , opacity:'45'
  }}>
      <div className="absolute inset-0 bg-black opacity-10 pointer-events-none"></div>
  
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-100 pointer-events-none" />
  
  
{/* 
  <Image
    className="absolute inset-0 object-cover opacity-45 pointer-events-none"
    src="/noier1.jpeg" 
    alt="Background"
    layout="fill"
    priority
  /> */}
   {/* <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50 pointer-events-none" /> */}

  <div className="relative z-10 text-center">
  <h1 className="border-2 rounded inline p-1.5 pointer-events-none mx-auto text-center border-white font-bold text-white">  
      Fashion
    </h1>
  </div>

  <div className="z-40 relative w-full pl-20 mt-10 space-y-10">
    <div id="wrapmain1" className="flex flex-col items-start">
      <Image
        className="block"
        src="/noiernew.png"
        width={100}
        height={100}
        alt="logo"
      />
    </div>
 

    <div className="relative text-left ">
      <h1 
        style={{
          // transform: `scale(${revscaleValue})`,
        }}
        className="decoration-pink-300 decoration-4 text-3xl mb-5 z-40 px-1 text-white font-black max-w-[600px]"
      >
        A secret stitched in every seam
      </h1>
      <h2 
        style={{
          // filter: `blur(${revblurValue}px)`,
        }}
        className=" z-40 px-1 py-1 text-white text-base max-w-[600px]"
      >
N’Oier weaves secrets into every seam, 
crafting garments that are more than just fashion—they 
are narratives of elegance and mystery. Blending 
rich storytelling with exquisite craftsmanship,
 each piece embodies luxurious detail and a sense 
 of exclusivity. The result is an enigmatic allure 
 that captivates and leaves a lasting impression, redefining what it means to wear a story.      </h2>
    </div>

    <div className="">
      <Link href="#!" className="p-2.5 font-bold font-helv tracking-tighter rounded-3xl bg-transparent border border-white text-xs text-white hover:opacity-50">
        Learn More
      </Link>
    </div>
  </div>
</div>




{/* 4 */}


<div
  id="event"
  className="relative bg-black p-10" style={{ 
      
    backgroundImage: 'url(/event2.jpeg)',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center' 
}}>
    <div className="absolute inset-0 bg-black opacity-20 pointer-events-none"></div>

  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-100 pointer-events-none" /> 

{/* 
<Image
    className="absolute inset-0 object-cover opacity-45 pointer-events-none"
    src="/event1.jpeg" 
    alt="Background"
    layout="fill"
    priority
  />
   <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-100 pointer-events-none" /> */}

  
   <div className="relative z-10 text-center">
   <h1 className="border-2 rounded inline p-1.5 pointer-events-none mx-auto text-center border-white font-bold text-white">  
    events
    </h1>
  </div>

  <div className="z-40 relative w-full pr-20 mt-10 space-y-10">


    <div id="wrapmain1" className="flex flex-col items-end">
      <Image
        className="block"
        src="/suroor.png"
        width={100}
        height={100}
        alt="logo"
      />
    </div>

    <div className="  flex flex-col items-end text-right ">

  <h1 
    style={{
      // Example: transform: `scale(${revscaleValue})`,
    }}
    className="decoration-pink-300 decoration-4 text-3xl mb-5 z-40 px-1 text-white font-black max-w-[600px]"
  >
  Timeless, Premium & Artistic, <br /> Memorable Events
  </h1>     
  <h2 
    style={{
      // Example: filter: `blur(${revblurValue}px)`,
    }}
    className=" z-40 px-1 py-1 text-white text-base max-w-[600px]"
    >
Suroor crafts one-of-a-kind experiential
 events that seamlessly blend creativity, elegance,
  and luxury. Each event is designed to deliver 
  unforgettable moments that captivate the senses 
   leave a lasting impression. From concept to 
   execution, Suroor elevates experiences into works
    of art, ensuring every detail is meticulously 
    curated for an atmosphere of sophistication and wonder.  </h2>

</div>


    <div className="flex flex-col items-end">
      <Link href="#!" className="p-2.5 font-bold font-helv tracking-tighter rounded-3xl bg-transparent border border-white text-xs text-white hover:opacity-50">
        Learn More
      </Link>
    </div>
  </div>
</div>




    

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
