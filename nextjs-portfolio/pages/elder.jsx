import React from 'react';
import elderImg from '../public/assets/img/elderImg.png';
import Image from 'next/image';

const elder = () => {

  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={elderImg} alt='/' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
            <h2 className='py-2'>Elder Warfare Kart Simulator</h2>
            <h3>React / Express / MongoDB / GraphQL</h3>
        </div>
      </div>

      <div className='max-w-[1240px] flex flex-col mx-auto p-2 pt-8'>
        <div className='w-full'>
            <p className='text-xl tracking-widest uppercase text-[#c99c53] py-3'>Project Overview</p>
            <p>This was a group project filled with adversity. We started out with four members, 
                with the goal to create a fun turn based video game. One of our members stopped 
                responding halfway through the project, then quit altogether with no given reason. 
                This set us back quite a bit. We then had to re-evaluate our goals and do the best 
                we could to create a finished product. Although the end result was not what we originally
                 set out to do, the experience taught me a lot about leadership, agile development, and the
                  technologies we utilized. I was responsible for the battle page logic as well as a lot of
                   refactoring for the entire application.
            </p>
            <ul className='flex mt-6'>
              <li>
                <a href='https://github.com/lilyannekot/elder-warfare-kart-simulator' target="_blank" className='px-8 py-2 m-2 text-white rounded-lg bg-gray-600 hover:bg-gray-500 duration-100'>Code Repo</a>
              </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default elder