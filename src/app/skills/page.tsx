import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
         <div className="bg-[url('/bg.avif')] bg-cover bg-fixed px-44 py-40 rounded-b-[30%]">
         <h1 className='text-center text-pink-500 text-5xl font-bold border-l-[6px] border-l-blue-800 pl-3 '>HTML5 - CSS3 - Tailwind CSS - JavaScript - TypeScript - React - Next JS</h1>
         </div>

<div>
         <div className='flex shadow-2xl w-[70%] justify-around py-[65px] m-auto -mt-[80px] bg-blue-100 rounded-3xl'>

           <div> <Image src={'/nextjs.jpg'} alt='' width={250} height={250} />
           <button className=' text-[20px] font-semibold mt-6 mx-[80px] bg-yellow-300 text-pink-600 h-8 w-[40%] rounded-md'>
            <a href="https://github.com/Samiyaayub/next.js">Nextjs</a></button> </div>

           <div> <Image src={'/htmlcss.jpg'} alt='' width={250} height={250} />
           <button className=' text-[20px] font-semibold mt-6 mx-[80px] bg-yellow-300 text-pink-600 h-8 w-[40%] rounded-md'>
            <a href="https://github.com/Samiyaayub/HTML">HTML</a></button> </div>                 
           

            <div> <Image src={'/jsts.jpg'} alt='' width={250} height={250} />
            <button className=' text-[20px] font-semibold mt-6 mx-[80px] bg-yellow-300 text-pink-600 h-8 w-[50%] rounded-md'>
            <a href="https://github.com/Samiyaayub/projects">Typescript</a></button> </div>  

        </div>

</div>
    </div>
  )
}

export default page

