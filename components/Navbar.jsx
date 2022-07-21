import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { FalinkedinIn} from 'react-icons/fa'

const Navbar = () => {
    return (
    <div className='fixed w-full h-20 shadow-xl z-[100]' >
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Image
         src="/../public/assets/projects/03e3aa07-4c87-4920-8e33-bb768cf58c53.jpg" alt="/"  width='70' height='80' />
         <div>
            <ul className='hidden md:flex'>
                <Link href='/'>
                    <li className=' ml-10 text-lg uppercase hover:border-b'>Home</li>
                </Link>
                <Link href='/'>
                    <li className=' ml-10 text-lg uppercase hover:border-b'>About</li>
                </Link>
                <Link href='/'>
                    <li className=' ml-10 text-lg uppercase hover:border-b'>Skills</li>
                </Link>
                <Link href='/'>
                    <li className=' ml-10 text-lg uppercase hover:border-b'>Projects</li>
                </Link>
                <Link href='/'>
                    <li className=' ml-10 text-lg uppercase hover:border-b'>Contact</li>
                </Link>
            </ul>
            <div className='md:hidden'> 
                 <AiOutlineMenu size={25}/>       
            </div>
         </div>
      </div>
        <div className='fixed left-0 top-0 w-full h-screen bg-black/60 '>
            <div className='fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#86a2b8] p-10 ease-in duration-500'>
                <div>
                <div className= 'flex w-full items-center justify-between'>
                    <Image scr='/../public/assets/projects/03e3aa07-4c87-4920-8e33-bb768cf58c53.jpg' width='87' height='35' alt='/'/>
                    <div className='rounded-full shadow-lg shadow-gray-400 cursor-pointer'>
                        <AiOutlineClose/>
                    </div>
               </div>
               <div className='border-b border-gray-300 my-4'>
                    <p className='w-[85%] md:w-[90%] py-4'>Teamwork makes the dreamwork!</p>
               </div>
            </div>
        <div className='py-4 flex flex-col'>   
            <ul className='uppercase'>
                <Link href='/'>
                <li className='py-4 text-sm'>Home</li>
                </Link>
                <Link href='/'>
                <li className='py-4 text-sm'>About</li>
                </Link>
                <Link href='/'>
                <li className='py-4 text-sm'>Skills</li>
                </Link>
                <Link href='/'>
                <li className='py-4 text-sm'>Projects</li>
                </Link>
                <Link href='/'>
                <li className='py-4 text-sm'>Contact</li>
                </Link>
            </ul>
            <div className='pt-40 '>
            <p className='uppercase tracking-widest text-cyan-200'>Connect</p>
            <div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <FalinkedinIn/>
                </div>
            </div>
            </div>
        </div>
       </div>
     </div>
    </div>
    

    )
}


    export default Navbar