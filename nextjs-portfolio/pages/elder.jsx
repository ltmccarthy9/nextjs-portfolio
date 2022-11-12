import React from 'react';
import elderImg from '../public/assets/img/elderImg.png';
import Image from 'next/image';

const elder = () => {

    const goRepo = () => {
        window.open('https://github.com/lilyannekot/elder-warfare-kart-simulator')
    }

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

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
            <p className='text-xl tracking-widest uppercase text-[#3fb88e] py-3'>Project Overview</p>
            <p>This was a group project filled with adversity. We started out with four members, 
                with the goal to create a fun turn based video game. One of our members stopped 
                responding halfway through the project, then quit altogether with no given reason. 
                This set us back quite a bit. We then had to re-evaluate our goals and do the best 
                we could to create a finished product. Although the end result was not what we originally
                 set out to do, the experience taught me a lot about leadership, agile development, and the
                  technologies we utilized. I was responsible for the battle page logic as well as a lot of
                   refactoring for the entire application.
            </p>
            <button onClick={goRepo} className='px-8 py-2 mt-4 hover:scale-110 ease-in duration-200'>Code Repo</button>
        </div>
      </div>
    </div>
  )
}

export default elder