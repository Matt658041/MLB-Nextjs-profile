import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
            <p>About</p>
            <h2>Who I Am</h2>
            <p>Recent Vanderbilt Bootcamp Graduate</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis consectetur sunt sit. Unde quod quos, consectetur id, perspiciatis consequatur eius illo tempora est accusamus quo recusandae, itaque ut corrupti qui quasi corporis accusantium impedit nostrum?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ad quas eligendi quasi fugiat fugit.</p>
            <p>Check out some of my latest projects.</p>
            </div>
            <div>
                <Image src= '/../public/assets/projects/github-profile.jpg' alt= '/' width= '390' height='390'/>
            </div>
        </div>
    </div>
  )
}

export default About