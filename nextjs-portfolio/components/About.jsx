import React from 'react'
import Image from 'next/image';
import profileImg from '../public/assets/img/liamportfolio.png';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
            <p className='text-2xl tracking-widest uppercase text-[#c99c53]'>About</p>
            <p className='py-2 text-gray-600'>
            Web developer with over 2000 hours of experience developing full-stack applications.  
            Skilled in JavaScript/TypeScript, HTML, CSS, Node.js, React, SQL/noSQL databases, 
            and many other frameworks and technologies.  Intuitive problem solver with a close 
            attention to detail.  Deeply passionate about creating applications that solve real problems.
             I am excited to bring my 
            strengths to a forward thinking, thoughtful, and collaborative team.
            </p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center'>
            <Image src={profileImg} className='rounded-xl' alt='profile picture'/>
        </div>
      </div>
    </div>
  );
}

export default About;
