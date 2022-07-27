import Image from 'next/image'
import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Link from 'next/link'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
    <p className='text-xl tracking-widest uppercase text-[#222737]'>Contact</p>
    
      <div className='grid lg-grid-col-5 gap-8'>
{/* left */}
<div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
    <div className='lg:p-4 h-full '>
     
      <div>
        <h2 className='py-2'>Matthew Boisse</h2>
        <p>Full Stack Developer</p>
        <p className='py-4'>I am available for freelance or full-time positions. Contact me with any questions.</p>
      </div>
      <div>
      <form>
     <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
      <div className='flex flex-col'>
      <label className='uppercase text-sm py-2'>Name</label>
      <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
      </div>
      <div className='flex flex-col'>
      <label className='uppercase text-sm py-2'>Phone Number</label>
      <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
      </div>
      </div> 
      <div className='flex flex-col py-2'>
        <label className='uppercase text-sm py-2'>Email</label>
        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" />
      </div> 
      <div className='flex flex-col py-2'>
        <label className='uppercase text-sm py-2'>Subject</label>
        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
      </div> 
      <div className='flex flex-col py-2'>
        <label className='uppercase text-sm py-2'>Message</label>
        <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10'></textarea>
      </div> 
      <button className='w-full p-4 text-gray-200 mt-4'>Send Message</button>
     </form>
    </div>
    <div>
      
      <div className='flex space-x-4 items-center justify-between  py-4'>
      <div className='flex gap-x-5 items-center justify-between max-w-[330px] m-auto py-4'>
            <div className=' rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn  a href="www.linkedin.com/in/matthew-boisse-b3a296224" />
               
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
  </div>
  <div className='flex justify-center py-12'>
    <Link href='/'>
      <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
        <HiOutlineChevronDoubleUp className='m-auto text-[#131a48]' size={30}/>
      </div>
    </Link>
  </div>
 </div>
</div>
  )
}
export default Contact
