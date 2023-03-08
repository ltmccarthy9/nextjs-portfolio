import React from 'react'
import Image from 'next/image';
import profileImg from '../public/assets/img/liamportfolio.png';

const About = () => {
  return (
    <div id='about' className='w-full h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 p-4'>
        <div className='col-span-2 mb-4'>
            <h2 className='text-3xl tracking-tight mb-2 text-gray-700 w-fit p-2 '>About Me</h2>
            <p className=' text-gray-600 px-1'>
            Web developer with a year of experience developing full-stack applications.  
            Skilled in JavaScript/TypeScript, HTML, CSS, Node.js, React, SQL/noSQL databases, 
            and many other frameworks and technologies. Passionate about creating applications that solve real problems, and of 
            course, some bits and goofs.
             I am excited to bring my strengths to a forward thinking and collaborative team.
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
