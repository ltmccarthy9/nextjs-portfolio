import React from 'react'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Contact = () => {


  return (
    <div id='contact' className='w-full h-screen pb-40 text-center'>
    <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
            <h2 className='py-4 text-gray-700'>
                Contact me at <span className='text-amber-500'>ltmccarthy9@gmail.com</span>
            </h2>

            <div className='flex items-center justify-center max-w-[330px] m-auto py-4'>
                <a href='https://www.linkedin.com/in/liam-mccarthy-b06b9a218' target='_blank' className='bg-[#f5f8f8] border rounded-xl  mx-3 p-6 cursor-pointer hover:bg-[#d1d2d2] ease-in duration-200'>
                    <FaLinkedinIn  color='0077B5' size={25} />
                </a>
                <a href='https://github.com/ltmccarthy9' target='_blank' className='bg-[#f5f8f8] border rounded-xl  mx-3 p-6 cursor-pointer hover:bg-[#d1d2d2] ease-in duration-200'>
                    <FaGithub  size={25} />
                </a>
            </div>
        </div>
    </div>
</div>
  )
}

export default Contact

