import React from 'react';

const Hero = () => {
  return (
    <div className='w-full h-screen'>
      <img
        className='top-0 left-0 w-full h-screen object-cover'
        src='https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg'
        alt='/'
      />
      <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
          <p>All Inclusive</p>
          <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>
            Private Beaches & Getaways
          </h1>
          <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ut quis
            est, id consequuntur sequi ipsum vitae sit non exercitationem.
          </p>
          <button className='bg-white relative border-2 text-black font-medium border-gray-400 py-2.5 px-5 text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-gray-800 before:transition-transform before:duration-100 before:content-[``] hover:text-gray-600  active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-700 before:hover:scale-x-100 '>Reserve Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;