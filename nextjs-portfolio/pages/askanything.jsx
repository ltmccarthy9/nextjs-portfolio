import React from 'react';
import askanythingPic from '../public/assets/img/askanything.png';
import Image from 'next/image';

const askanything = () => {

  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
        <Image className='absolute object-cover z-1' fill  src={askanythingPic} alt='ask anything picture' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
            <h2 className='py-2'>Ask Anything</h2>
            <h3>Next.js 13 / PostgreSQL / TypeScript / Prisma / Railway / React Query</h3>
        </div>
      </div>

      <div className='max-w-[1240px] flex flex-col mx-auto p-2 pt-8 z-20'>
        <div className='w-full'>
            <p className='text-xl tracking-widest uppercase text-red-400 py-3'>Project Overview</p>
            <p>A place to ask any question you want.  Receive answers to your question by other users, and post your own comments on other
                user's questions.
            </p>
            <ul className='flex mt-6'>
              <li>
                <a href='https://github.com/ltmccarthy9/askanything' target="_blank" className='px-8 py-2 m-2 text-white rounded-lg bg-gray-600 hover:bg-gray-500 duration-100'>Code Repo</a>
              </li>
              <li>
                <a href='https://askanything-t4xy.vercel.app/' target="_blank" className='px-8 m-2 py-2 text-white rounded-lg bg-gray-600 hover:bg-gray-500 ease-in duration-100'>Deployed Link</a>
              </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default askanything