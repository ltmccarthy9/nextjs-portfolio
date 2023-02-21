import React from 'react';
import askanythingPic from '../public/assets/img/askanything.png';
import Image from 'next/image';

const askanything = () => {

    const goRepo = () => {
        window.open('https://github.com/ltmccarthy9/askanything')
    }
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={askanythingPic} alt='/' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
            <h2 className='py-2'>Friends First</h2>
            <h3>Next.js 13 / PostgreSQL / TypeScript / Prisma / Railway / React Query</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
            <p className='text-xl tracking-widest uppercase text-[#3fb88e] py-3'>Project Overview</p>
            <p>A place to ask any question you want.  Reciever answers to your question by other users, and post your own comments on other
                user's questions.
            </p>
            <button onClick={goRepo} className='px-8 py-2 mt-4 hover:scale-110 ease-in duration-200'>Code Repo</button>
        </div>
      </div>
    </div>
  )
}

export default friends