import Image from 'next/image';
import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai';
import {FaLinkedinIn, FaGithub, FaHome} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {useRouter} from 'next/router';

const Nav = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navB, setNavB] = useState('#ecf0f3');
    const [linkColor, setLinkColor] = useState('#1f2937');
    const router = useRouter()

    useEffect(() => {
        if (
            router.asPath === '/appointment' ||
            router.asPath === '/ecommerce' ||
            router.asPath === '/friends'
            ) {
            setNavB('transparent')
            setLinkColor('#ecf0f3')
        } else {
            setNavB('#f0f3f5')
            setLinkColor('#1f2937')
        }
    }, [router]);

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 100) {
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
        <div style={{backgroundColor: `${navB}`}} className={shadow ? 'fixed px-3 w-full h-20 shadow-xl z-[100]' : 'fixed px-3 w-full h-20 z-[100]'}>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <Link href='/'>
                <FaHome size={40} color='#c99c53' className='cursor-pointer'/>
            </Link>
            
            <div>
                <ul style={{color: `${linkColor}`}} className='hidden md:flex'>
                    <Link href='/'>
                        <li className='ml-10 text-sm text-gray-700 font-bold hover:border-b ease-in duration-150 hover:border-gray-500'>Home</li>
                    </Link>

                    <a href='/#about' className='ml-10 text-sm text-gray-700 font-bold hover:border-b ease-in duration-150 hover:border-gray-500'>About</a>
                    <a href='/#skills' className='ml-10 text-sm text-gray-700 font-bold hover:border-b ease-in duration-150 hover:border-gray-500'>Skills</a>
                    <a href='/#projects' className='ml-10 text-sm text-gray-700 font-bold hover:border-b ease-in duration-150 hover:border-gray-500'>Projects</a>
                    <a href='/#contact' className='ml-10 text-sm text-gray-700 font-bold hover:border-b ease-in duration-150 hover:border-gray-500'>Contact</a>
                </ul>
                <div onClick={handleNav} className='md:hidden'>
                    <AiOutlineMenu size={25} className='cursor-pointer' />
                </div>
            </div>
            </div>

            {/* mobile nav */}
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={nav 
                    ? 'fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-200' 
                    : 'fixed right-[-100%] top-0 p-10 ease-in duration-200 h-screen'}>
                    <div>
                        <div className='flex w-full items-center justify-end'>
                            <div onClick={handleNav} className='rounded-full p-3 cursor-pointer hover:bg-[#d6dcdf] ease-linear duration-100'>
                                <AiOutlineClose />
                            </div>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col mt-10'>
                        <ul className='w-full flex flex-col gap-2'>
                            <Link href='/'>
                                <FaHome onClick={()=> setNav(false)} className='mx-auto mb-6 hover:scale-105 ease-linear duration-100' color='#c99c53' size={40} />
                            </Link>
                            <Link href='/'>
                            <li onClick={()=> setNav(false)} className='py-4 text-center text-sm rounded-lg w-full text-gray-700 font-bold hover:bg-[#d6dcdf] ease-linear duration-100'>Home</li>
                            </Link>
                            <Link href='#about'>
                            <li onClick={()=> setNav(false)} className='py-4 text-center text-sm rounded-lg w-full text-gray-700 font-bold hover:bg-[#d6dcdf] ease-linear duration-100'>About</li>
                            </Link>
                            <Link href='/#skills'>
                            <li onClick={()=> setNav(false)} className='py-4 text-center text-sm rounded-lg w-full text-gray-700 font-bold hover:bg-[#d6dcdf] ease-linear duration-100'>Skills</li>
                            </Link>
                            <Link href='/#projects'>
                            <li onClick={()=> setNav(false)} className='py-4 text-center text-sm rounded-lg w-full text-gray-700 font-bold hover:bg-[#d6dcdf] ease-linear duration-100'>Project</li>
                            </Link>
                            <Link href='/#contact'>
                            <li onClick={()=> setNav(false)} className='py-4 text-center text-sm rounded-lg w-full text-gray-700 font-bold hover:bg-[#d6dcdf] ease-linear duration-100'>Contact</li>
                            </Link>
                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase tracking-widest text-[#c99c53]'>Let's Connect</p>
                            <div className='flex gap-8 items-center my-4 w-full sm:w-[80%]'>
                                <div className='rounded-lg bg-[#f5f8f8] shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100'>
                                    <FaLinkedinIn color='0077B5' onClick={goLinkedIn}  size={25}/>
                                </div>
                                <div className='rounded-lg bg-[#f5f8f8] shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100'>
                                    <FaGithub onClick={goGithub}  size={25}/>
                                </div>
                                <div className='rounded-lg bg-[#f5f8f8]  shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100'>
                                    <AiOutlineMail color='#c99c53' size={25} />
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