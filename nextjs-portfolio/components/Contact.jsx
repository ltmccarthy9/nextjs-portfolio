import React from 'react'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Contact = () => {
  return (
    <div className='w-full h-screen text-center'>
    <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
            <h1 className='py-4 text-gray-700'>
                Contact me at <span className='text-[#3fb88e]'>ltmccarthy9@gmail.com</span>
            </h1>

            <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                <div className='rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <FaLinkedinIn />
                </div>
                <div className='rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <FaGithub />
                </div>
                <div className='rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineMail/>
                </div>
                <div className='rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <BsFillPersonLinesFill />
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Contact

