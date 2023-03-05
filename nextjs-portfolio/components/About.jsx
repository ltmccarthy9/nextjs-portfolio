import React from 'react'
import Image from 'next/image';
import profileImg from '../public/assets/img/liamportfolio.png';

const About = () => {
  return (
    <div id='about' className='w-full h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 p-4'>
        <div className='col-span-2 mb-4'>
            <p className='text-2xl tracking-tight mb-2 text-red-300 bg-gray-700 w-fit p-2 rounded-lg'>About Me</p>
            <p className=' text-gray-600 px-1'>
            Web developer with over 2000 hours of experience developing full-stack applications.  
            Skilled in JavaScript/TypeScript, HTML, CSS, Node.js, React, SQL/noSQL databases, 
            and many other frameworks and technologies.  Intuitive problem solver with a close 
            attention to detail.  Deeply passionate about creating applications that solve real problems.
             I am excited to bring my 
            strengths to a forward thinking, thoughtful, and collaborative team.
            </p>
        </div>
        <div className='w-fit h-fit m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center'>
            <Image src={profileImg} className='rounded-xl' alt='profile picture'/>
        </div>
      </div>
    </div>
  );
}

export default About;
