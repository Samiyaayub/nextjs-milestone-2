import Image from 'next/image';
import React from 'react';

const page = () => {
  return (
    <div className='flex justify-center'>
      <div className="bg-[url('/bg.avif')] bg-cover bg-fixed px-40 py-40 w-full">

        <div className='flex shadow-2xl w-[80%] justify-between items-center mx-auto bg-blue-200 rounded-3xl p-10'>
          
          <div className='w-[60%]'>
            <h1 className='text-blue-800 text-5xl font-bold border-l-[6px] border-l-pink-500 pl-3 underline'>
              Personal Info
            </h1>
            <p className='text-pink-600 text-2xl pt-3'>Name: Samiya Ayub</p>
            <p className='text-pink-600 text-2xl'>Date of birth: October 21, 2001</p>
            <p className='text-pink-600 text-2xl'>Nationality: Pakistani</p>
            <p className='text-pink-600 text-2xl'>Lives in: Karachi, Pakistan</p>
          </div>

          <div className='w-[30%] flex justify-center'>
            <Image className='rounded-full' src={'/mypic.jpeg'} alt='Profile Picture' width={250} height={250} />
          </div>
        </div>
        <div className='flex justify-center mt-10'>
          <h1 className='text-blue-800 text-5xl font-normal pl-3'>About Us</h1>
        </div>
        <div className='flex justify-center'>
          <p className='text-pink-600 text-2xl'>Coded by Samiya Ayub using Next.js</p>
        </div>
        
      </div>
    </div>
  );
}

export default page;