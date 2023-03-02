import React from 'react'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Contact = () => {

    const goLinkedIn = () => {
        window.open('https://www.linkedin.com/in/liam-mccarthy-b06b9a218/')
    };

    const goGithub = () => {
        window.open('https://github.com/ltmccarthy9')
    };

  return (
    <div id='contact' className='w-full h-screen pb-40 text-center'>
    <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
            <h2 className='py-4 text-gray-700'>
                Contact me at <span className='text-[#c99c53]'>ltmccarthy9@gmail.com</span>
            </h2>

            <div className='flex items-center justify-center max-w-[330px] m-auto py-4'>
                <div className='bg-[#f5f8f8] rounded-full shadow-sm mx-3 shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <FaLinkedinIn  color='0077B5' onClick={goLinkedIn}  size={25} />
                </div>
                <div className='bg-[#f5f8f8] rounded-full shadow-sm mx-3 shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <FaGithub onClick={goGithub}  size={25} />
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Contact

