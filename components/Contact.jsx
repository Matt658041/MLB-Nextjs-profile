import Image from 'next/image'
import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Contact = () => {
  return (
    <div className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
    <p className='text-xl tracking-widest uppercase text-[#222737]'>Contact</p>
    <h2 className='py-4'>Get in Touch</h2>
      <div className='grid lg-grid-col-5 gap-8'>
{/* left */}
<div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
    <div className='lg:p-4 h-full '>
      <div>
        <Image  className="rounded-xl"src="/../public/assets/projects/online-reputation-management.jpg" alt="/" width="320" height="300"/>
      </div>
      <div>
        <h2 className='py-2'>Matthew Boisse</h2>
        <p>Full Stack Developer</p>
        <p className='py-4'>I am available for freelance or full-time positions. Contact me with any questions.</p>
      </div>
    <div>
      <p className='uppercase pt-8'>Connect With Me</p>
      <div className='flex space-x-4 items-center justify-between  py-4'>
      <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <div className=' rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail/>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
            </div>
          </div>
      </div>
    </div>
    </div>
  </div>
{/* right */}
        </div>
      </div>
    </div>
  )
}
export default Contact
