import React from 'react';
import friendsImg from '../public/assets/img/friendsfirst.png';
import Image from 'next/image';

const friends = () => {

    const goRepo = () => {
        window.open('https://github.com/ltmccarthy9/friends-first')
    }
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={friendsImg} alt='/' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
            <h2 className='py-2'>Friend's First</h2>
            <h3>React / MongoDB / Express / Nodejs</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
            <p className='text-xl tracking-widest uppercase text-[#3fb88e] py-3'>Project Overview</p>
            <p>My personal take on a dating application.
            </p>
            <button onClick={goRepo} className='px-8 py-2 mt-4 hover:scale-110 ease-in duration-200'>Code Repo</button>
        </div>
      </div>
    </div>
  )
}

export default friends