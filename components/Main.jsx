import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'

const Main =() => {
    return (
    <div className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
            <p className='uppercase text-sm tracking-widest text-black-600'>Teamwork makes the dreamwork!</p>
            <h1 className='py-4 text-red-700'>
                Hi, I am <span className='text-[#d9e13d]'> Matt </span>
             </h1>
             <h1 className='py-2 text-gray-700'>
                A Full-Stack Web Developer 
             </h1>
             <p className='py-4 text-gray-500 max-w-[70%] m-auto'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur laudantium tempora hic animi? Doloribus quisquam fuga alias fugit. Alias architecto sequi eligendi blanditiis voluptatibus nisi.
             </p>
             <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <FaLinkedinIn />
            </div>
             </div>
            </div>
        </div>
    </div>
  )
}


export default Main