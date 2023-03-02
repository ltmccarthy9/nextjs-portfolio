import React from 'react';
import friendsImg from '../public/assets/img/ff.png';
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
            <h2 className='py-2'>Friends First</h2>
            <h3>Reactjs / MongoDB / Mongoose/ Expressjs / Nodejs / Firebase</h3>
        </div>
      </div>

      <div className='max-w-[1240px] flex flex-col mx-auto p-2 pt-8'>
        <div className='w-full'>
            <p className='text-xl tracking-widest uppercase text-[#c99c53] py-3'>Project Overview</p>
            <p>Friends First is the dating/friend-making app that I wished existed, so I made it.  It follows an event-based
              structure that would partner with businesses to create events.  Find nearby events that you might like to attend,
              meet new people, and match to stay in contact.
            </p>
            <ul className='flex mt-6'>
              <li>
                <a href='https://github.com/ltmccarthy9/friends-first' target="_blank" className='px-8 py-2 m-2 text-white rounded-lg bg-gray-600 hover:bg-gray-500 duration-100'>Code Repo</a>
              </li>
            </ul>
            <div className='my-12'>
              <iframe className='m-auto' width="1280" height="720" src="https://www.youtube.com/embed/AgHvGWZngOA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
      </div>
    </div>
  )
}

export default friends