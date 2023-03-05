import React from 'react';
import ecommerceImg from '../public/assets/img/ecommerce.png';
import Image from 'next/image';

const ecommerce = () => {

  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
        <Image className='absolute object-cover z-1' fill src={ecommerceImg} alt='/' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
            <h2 className='py-2'>Ecommerce Backend</h2>
            <div className='flex flex-wrap text-gray-700  gap-1'>
            <h3 className='bg-red-300 p-1 rounded-lg font-medium w-fit text-xs'>JavaScript</h3>
            <h3 className='bg-red-300 p-1 rounded-lg font-medium  w-fit text-xs '>MySQL</h3>
            <h3 className='bg-red-300 p-1 rounded-lg font-medium w-fit text-xs '>Node.js</h3>
            <h3 className='bg-red-300 p-1 rounded-lg font-medium w-fit text-xs '>Express.js</h3>
            <h3 className='bg-red-300 p-1 rounded-lg font-medium w-fit text-xs '>Sequelize</h3>
            </div>
        </div>
      </div>

      <div className='max-w-[1240px] flex flex-col mx-auto p-2 pt-8'>
        <div className='w-full'>
            <p className='text-xl tracking-widest uppercase text-red-400 py-3'>Project Overview</p>
            <p>Backend, command line application of a mock Ecommerce database. Create, update, and delete items in the database.
            </p>
            <ul className='flex mt-6'>
              <li>
                <a href='https://github.com/ltmccarthy9/e-commerce-backend' target="_blank" className='px-8 py-2 m-2 text-white rounded-lg bg-gray-600 hover:bg-gray-500 duration-100'>Code Repo</a>
              </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default ecommerce