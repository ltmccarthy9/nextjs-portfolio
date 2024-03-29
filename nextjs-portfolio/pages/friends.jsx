import React from 'react';
import friendsImg from '../public/assets/img/ff.png';
import Image from 'next/image';

const friends = () => {

  
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10'/>
        <Image className='absolute object-cover z-1' fill src={friendsImg} alt='/' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
            <h2 className='py-2'>Friends First</h2>
            <div className='flex flex-wrap text-gray-700  gap-1'>
            <h3 className='bg-red-300 p-1 rounded-lg font-medium w-fit text-xs'>React</h3>
            <h3 className='bg-red-300 p-1 rounded-lg font-medium  w-fit text-xs '>MongoDB</h3>
            <h3 className='bg-red-300 p-1 rounded-lg  font-medium w-fit text-xs '>Mongoose</h3>
            <h3 className='bg-red-300 p-1 rounded-lg font-medium w-fit text-xs '>Express.js</h3>
            <h3 className='bg-red-300 p-1 rounded-lg font-medium w-fit text-xs '>Node.js</h3>
            <h3 className='bg-red-300 p-1 rounded-lg font-medium w-fit text-xs'>Firebase</h3>
            </div>
        </div>
      </div>

      <div className='max-w-[1240px] flex flex-col mx-auto p-2 pt-8'>
        <div className='w-full'>
            <p className='text-xl tracking-widest uppercase text-red-400 py-3'>Project Overview</p>
            <p>Friends First is the dating/friend-making app that I wished existed, so I made it.  It follows an event-based
              structure that would partner with businesses to create events.  Find nearby events that you might like to attend,
              meet new people, and match to stay in contact.
        <br></br><br></br>
              Deployment: Friends First is structured around the existence of events created by a partnership between Friends First, ie: me at the moment, and the business that wants to host the 
              event. Until that becomes a working reality, I'm not going to deploy. Events are the integral part of the application; 
              I do not want people showing up to the site with no events and/or mock events.
            </p>
            <ul className='flex mt-6'>
              <li>
                <a href='https://github.com/ltmccarthy9/friends-first' target="_blank" className='px-8 py-2 m-2 text-white rounded-lg bg-gray-600 hover:bg-gray-500 duration-100'>Code Repo</a>
              </li>
            </ul>
            
            <h2 className='text-gray-700 text-2xl mt-6 mb-2'>Code Breakdown & Demo</h2>
            <iframe width="350" height="315" src="https://www.youtube.com/embed/qda-5_52cLw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            
        </div>
      </div>
    </div>
  )
}

export default friends