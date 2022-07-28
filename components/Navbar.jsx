import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose, AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import navImage from '../public/assets/projects/03e3aa07-4c87-4920-8e33-bb768cf58c53.jpg'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)

    const handleNav = () => {
            setNav(!nav)
    };

    useEffect(()=> {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        }
        window.addEventListener('scroll', handleShadow);
    }, [] );

    return (
    <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]':'fixed w-full h-20  z-[100]' } >
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
        <Image className='rounded-lg'
         src={navImage} alt="/"  width='70' height='80' />
         </Link>
         <div>
            <ul className='hidden md:flex'>
                <Link href='/'>
                    <li className=' ml-10 text-lg uppercase hover:border-b'>Home</li>
                </Link>
                <Link href='/#about'>
                    <li className=' ml-10 text-lg uppercase hover:border-b'>About</li>
                </Link>
                <Link href='/#skills'>
                    <li className=' ml-10 text-lg uppercase hover:border-b'>Skills</li>
                </Link>
                <Link href='/#projects'>
                    <li className=' ml-10 text-lg uppercase hover:border-b'>Projects</li>
                </Link>
                <Link href='/#contact'>
                    <li className=' ml-10 text-lg uppercase hover:border-b'>Contact</li>
                </Link>
            </ul>
            <div onClick={handleNav} className='md:hidden'> 
                 <AiOutlineMenu size={25}/>       
            </div>
         </div>
      </div>

        
    </div>
    

    )
}


    export default Navbar