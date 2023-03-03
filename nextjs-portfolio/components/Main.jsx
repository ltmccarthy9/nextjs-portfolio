import React from 'react'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Main = () => {

    const goLinkedIn = () => {
        window.open('https://www.linkedin.com/in/liam-mccarthy-b06b9a218/')
    };

    const goGithub = () => {
        window.open('https://github.com/ltmccarthy9')
    };

    const copyMail = () => {
        navigator.clipboard.writeText('ltmccarthy9@gmail.com')
        window.alert('email address copied to clipboard')
    };


  return (
    <div id='home' className='w-full h-screen pb-56 text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <h1 className='py-4 text-gray-700'>
                    Hi, I'm <span className='text-[#f4af61]'>Liam.</span>
                </h1>
                <h1 className='py-2 text-gray-700'>
                    A Full-Stack Web Developer
                </h1>
                <div className='flex items-center justify-center max-w-[330px] m-auto py-4'>
                    <div onClick={goLinkedIn} className='bg-[#f5f8f8] rounded-xl shadow-sm shadow-gray-400 mx-3 p-4 cursor-pointer hover:scale-105 ease-in duration-200'>
                        <FaLinkedinIn color='0077B5' size={25}/>
                    </div>
                    <div onClick={goGithub} className='bg-[#f5f8f8] rounded-xl shadow-sm shadow-gray-400 mx-3 p-4 cursor-pointer hover:scale-105 ease-in duration-200'>
                        <FaGithub  size={25}/>
                    </div>
                    <div onClick={copyMail} className='bg-[#f5f8f8] rounded-xl shadow-sm shadow-gray-400 mx-3 p-4 cursor-pointer hover:scale-105 ease-in duration-200'>
                        <AiOutlineMail color='#f4af61' size={25}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main;
