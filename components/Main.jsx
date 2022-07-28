import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import Link from 'next/link'

const Main =() => {
    return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
            <p className='uppercase text-md tracking-widest text-black-600'>Teamwork makes the dreamwork!</p>
            <h1 className='py-4 text-red-700'>
                Hi, <span className='text-[#ffffff]'>I am </span><span className='text-[#3d6be1]'> Matt </span>
             </h1>
             <h1 className='py-2 text-gray-700'>
                A Full-Stack Web Developer 
             </h1>
             <p className='py-4 text-lg text-gray-800 max-w-[70%] m-auto'> Full-Stack web developer with a bachelor’s degree in communications. Recent graduate of Vanderbilt University with a certificate in Web development.  Self-starter able to think both creatively and analytically, with a mind for patterns, spatial awareness, data crunching and puzzle solving. Known for being both a leader and a team player, with a love of collaboration and idea generation.
             </p>
             <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
            <Link  href='https://www.linkedin.com/in/matthew-boisse-b3a296224/'>
                <FaLinkedinIn />
                </Link>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
            <Link  href='https://github.com/Matt658041'>
                <FaGithub />
                </Link>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
            <Link  href='mailto:matthewboisse@gmail.com'>
                <AiOutlineMail/>
                </Link>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
            <Link  href='mailto:matthewboisse@gmail.com'>
                <BsFillPersonLinesFill />
                </Link>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}


export default Main
