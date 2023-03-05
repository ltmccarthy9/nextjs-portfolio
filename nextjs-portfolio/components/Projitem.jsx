import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Projitem = ({title, backgroundImg, projectUrl}) => {
  return (
    <div className=' bg-[#f5f8f8] relative flex items-center 
    justify-center h-auto w-full shadow-sm shadow-gray-300 
    rounded-xl group transition-all ease-in duration-300 hover:bg-gradient-to-r from-[#f4ac9f] to-[#d35d3f]'
    >
        <Image className='rounded-xl transition-all ease-in duration-300 group-hover:opacity-10' src={backgroundImg} alt='/'/>
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='py-3 text-xl text-white text-center'>{title}</h3>
                    <Link href={projectUrl}>
                        <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-semibold cursor-pointer hover:bg-gray-700 hover:text-white ease-in duration-150'>More Info</p>
                    </Link>
            </div>

    </div>

  )
}

export default Projitem
