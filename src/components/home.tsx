import Image from 'next/image'
import React from 'react'

const home = () => {
  return (
    <>
     <div className="bg-[url('/bg.avif')] bg-cover bg-fixed text-center px-44 py-40">                    
      <h1 className='text-blue-900 text-5xl text-center font-extrabold'>SAMIYA AYUB</h1>
      <p className='text-xl mt-4 px-[80px] text-pink-500'>Senior Student at GIAIC | Persuing Certified Cloud Applied Generative AI Engineering. Passionate about cutting-edge technologies, currently pursuing a Certified Cloud Applied Generative AI Engineering course to specialize in AI and cloud computing. Eager to leverage these skills to drive innovation and make a meaningful impact in the tech industry.🚀</p>
      <div>    
           <button className='bg-blue-600 px-5 py-3 rounded-lg text-white font-semibold mt-4  hover:bg-purple-800 hover:animate-bounce'><a href="https://www.linkedin.com/in/samiya-ayub-6b74102b3/">More Info</a></button>
      </div>
    </div>
      

        
    </>
  )
}

export default home

