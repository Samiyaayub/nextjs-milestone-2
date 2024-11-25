import Link from 'next/link'
import React from 'react'

const footer = () => {
  return (
    <div className='flex justify-between px-[60px] py-[10px] bg-blue-200'>
      <p className='font-bold text-blue-700'>All Rights Reserved ©| <Link className='text-pink-600 font-mano' href= 'https://github.com/Samiyaayub' target='_blank'> Samiya Ayub </Link></p>
      <div>
        <Link className='hover:text-pink-600 pt-[8px] text-blue-800'href={'/'}>Legals </Link>|
        <Link className='hover:text-pink-600 pt-[8px] text-blue-800'href={'/'}> services </Link>|
        <Link className='hover:text-pink-600 pt-[8px] text-blue-800'href={'/'}> Privacy Policy</Link>
      </div>
    </div>
  )
}

export default footer
