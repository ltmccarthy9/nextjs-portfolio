import React from 'react'
import Image from 'next/image';
import profileImg from '../public/assets/img/liamportfolio.png';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
            <p className='uppercase text-xl tracking-widest text-[#3fb88e]'>About</p>
            <h2 className='py-4'>Who I Am</h2>
            <p className='py-2 text-gray-600'>
            Full stack web developer with over 2000 hours of full stack web development experience. 
            Earned a certificate in full stack web development from a boot camp by the University of California - Berkeley last year. 
            Beyond Javascript and HTML5/CSS, I am experienced in React, Redux, mySQL. postgreSQL, mongoDB, 
            REST APIs, ORMs, git workflow, and more. I am a quick learner with strong 
            analytical skills as well as a deeply creative side. I am excited to bring my 
            strengths to a forward thinking and collaborative team.
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
