import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
         </div>
        </div>
    </div>
    

    )
}


    export default Navbar