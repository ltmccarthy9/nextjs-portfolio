import React from 'react'
import Image from 'next/image';
import Skill from './Skill';
const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#3fb88e]'>Skills</p>
            <h2 className='py-4'>What I Can Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
               <Skill skill='Javascript' />
               <Skill skill='HTML5' />
               <Skill skill='CSS' />
               <Skill skill='React' />
               <Skill skill='MySQL' />
               <Skill skill='MongoDB' />
               <Skill skill='Bootstrap' />
               <Skill skill='Tailwind' />
               <Skill skill='ORMs/ORDs' />
               <Skill skill='Nodejs' />
               <Skill skill='Typescript' />
            </div>
        </div>
    </div>
  )
}

export default Skills;