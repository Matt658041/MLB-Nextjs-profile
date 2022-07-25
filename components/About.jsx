import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
            <p className='uppercase text-xl tracking-widest text-[#12113a]'>About</p>
            <h2 className='py-4'>Who I Am</h2>

            <p className='py-2 text-gray-800'>Recent Vanderbilt Bootcamp Graduate</p>

            <p className='py-2 text-gray-800' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis consectetur sunt sit. Unde quod quos, consectetur id, perspiciatis consequatur eius illo tempora est accusamus quo recusandae, itaque ut corrupti qui quasi corporis accusantium impedit nostrum?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ad quas eligendi quasi fugiat fugit.</p>
            <p className='py-2 text-gray-800 underline cursor-pointer'>Check out some of my latest projects.</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shawow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image className='rounded-xl' src= '/../public/assets/projects/github-profile.jpg' alt= '/' width= '380' height='380'/>
            </div>
        </div>
    </div>
  )
}

export default About