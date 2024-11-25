import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BiAlignRight } from "react-icons/bi"

function header() {
  return (
    <div className='flex justify-between items-center md:px-[60px] px-[20px] py-2 w-full absolute'>
        <div>
            <h1 className='font-extrabold text-pink-400 font-sans'> SAMIYA </h1>
        </div>
        <div>

            <ul className='hidden md:flex text-blue-800 space-x-[60px] text-lg font-bold font-serif'>
                <li className='hover:text-pink-500 pt-[8px]' >
                    <Link href='/'>Home</Link>
                </li>

                <li className='hover:text-pink-500 pt-[8px]'>
                    <Link href={'/about'}>About</Link>
                </li>

                <li className='hover:text-pink-500 pt-[8px]'>
                    <Link href='/skills'>Skills</Link>
                </li>

                
        <div>
            <button className='bg-yellow-200 px-6 py-2 text-pink-500 rounded-xl text-xl font-semibold hover:bg-purple-300 hover:animate-bounce' >Hire me</button>
        </div>
        </ul>
        </div>
    <div className='static md:hidden text-3xl'> < BiAlignRight/></div>
    </div>
  ) 
}
export default header
