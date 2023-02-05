import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Projitem = ({title, backgroundImg, projectUrl}) => {
  return (
    <div className='transition-all duration-300 relative flex items-center 
    justify-center h-auto w-full shadow-md shadow-gray-500 
    rounded-xl p-4 group hover:bg-gradient-to-r from-[#3fb88e] to-[#a0dac5]'
    >
        <Image className='transition-all duration-300 rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/'/>
            <div className='transition-all duration-300 hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='py-3 text-2xl text-white tracking-wider text-center'>{title}</h3>
                    <Link href={projectUrl}>
                        <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer  hover:scale-105 ease-in duration-100'>More Info</p>
                    </Link>
            </div>

    </div>

  )
}

export default Projitem
