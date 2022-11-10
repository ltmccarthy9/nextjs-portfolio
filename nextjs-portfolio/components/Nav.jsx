import Image from 'next/image';
import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai';
import {FaLinkedinIn, FaGithub, FaHome} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Nav = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        };
        window.addEventListener('scroll', handleShadow)
    },[])

    const goLinkedIn = () => {
        window.open('https://www.linkedin.com/in/liam-mccarthy-b06b9a218/')
    };

    const goGithub = () => {
        window.open('https://github.com/ltmccarthy9')
    };



    return (
        // large screen nav
        <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <Link href='/'>
                <FaHome size={30} className='cursor-pointer'/>
            </Link>
            
            <div>
                <ul className='hidden md:flex'>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b border-gray-800'>Home</li>
                    </Link>

                    <a href='#about' className='ml-10 text-sm uppercase hover:border-b border-gray-800'>About</a>
                    <a href='#skills' className='ml-10 text-sm uppercase hover:border-b border-gray-800'>Skills</a>
                    <a href='#projects' className='ml-10 text-sm uppercase hover:border-b border-gray-800'>Projects</a>
                    <a href='#contact' className='ml-10 text-sm uppercase hover:border-b border-gray-800'>Contact</a>
                </ul>
                <div onClick={handleNav} className='md:hidden'>
                    <AiOutlineMenu size={25} className='cursor-pointer' />
                </div>
            </div>
            </div>

            {/* mobile nav */}
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={nav 
                    ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' 
                    : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Link href='/'>
                                <FaHome size={30} />
                            </Link>
                            <div onClick={handleNav} className='rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4'>Let's build something</p>
                        </div>
                    </div>
                    <div className='py-4 flex-col'>
                        <ul className='uppercase'>
                            <Link href='/'>
                            <li onClick={()=> setNav(false)} className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href='#about'>
                            <li onClick={()=> setNav(false)} className='py-4 text-sm'>About</li>
                            </Link>
                            <Link href='/#skills'>
                            <li onClick={()=> setNav(false)} className='py-4 text-sm'>Skills</li>
                            </Link>
                            <Link href='/#projects'>
                            <li onClick={()=> setNav(false)} className='py-4 text-sm'>Project</li>
                            </Link>
                            <Link href='/#contacts'>
                            <li onClick={()=> setNav(false)} className='py-4 text-sm'>Contact</li>
                            </Link>
                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase tracking-widest text-[#3fb88e]'>Let's Connect</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaLinkedinIn onClick={goLinkedIn}  size={25}/>
                                </div>
                                <div className='rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaGithub onClick={goGithub}  size={25}/>
                                </div>
                                <div className='rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <AiOutlineMail  size={25} />
                                </div>
                                <div className='rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <BsFillPersonLinesFill  size={25}/>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;