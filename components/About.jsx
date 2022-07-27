import React from 'react'
import Image from 'next/image'
import nyImage from '../public/assets/projects/github-profile.jpg'

const About = () => {
  return (
    <div id='about'className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
            <p className='uppercase text-xl tracking-widest text-[#12113a]'>About</p>
            <h2 className='py-4'>Who I Am</h2>

            <p className='py-2 text-gray-800'>Recent Vanderbilt Bootcamp Graduate</p>

            <p className='py-2 text-lg text-gray-800' > I enjoy a good challenge and that is why I enjoy web development so much. I have recently earned a certificate in full stack web development from Vanderbilt University, and it has given me a good foundation in which I can expand and improve upon my skills in an everchanging internet landscape. 
            </p>
            <p className='py-2 text-lg text-gray-800'>I am a team player, but can also work independently. With each project, my aim is to best engage my audience for an impactful user experience and make an excellent product.</p>
            <p className='py-2 text-gray-800 underline cursor-pointer'>Check out some of my latest projects.</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shawow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image className='rounded-xl' src={nyImage}  alt= '/' width= '380' height='380'/>
            </div>
        </div>
    </div>
  )
}

export default About