import React from 'react'
import Image from 'next/image';
import Skill from './Skill';
import {FaLinkedinIn, FaGithub, FaReact, FaNodeJs} from 'react-icons/fa';
import {SiJavascript, SiCss3, SiMongodb, SiBootstrap, SiTailwindcss, SiTypescript} from 'react-icons/si';
import {AiFillHtml5} from 'react-icons/ai';
import {GrMysql} from 'react-icons/gr';
import {BiTable} from 'react-icons/bi';
import {TbBrandNextjs} from 'react-icons/tb';

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#3fb88e]'>Skills</p>
            <h2 className='py-4'>What I Can Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
               <Skill skill='Javascript' icon={<SiJavascript size={35}/>} />
               <Skill skill='HTML5' icon={<AiFillHtml5 size={35}/>}/>
               <Skill skill='CSS' icon={<SiCss3 size={35} />}/>
               <Skill skill='React' icon={<FaReact size={35}/>}/>
               <Skill skill='MySQL' icon={<GrMysql size={35} />}/>
               <Skill skill='MongoDB' icon={<SiMongodb size={35} />} />
               <Skill skill='Bootstrap' icon={<SiBootstrap size={35} />} />
               <Skill skill='Tailwind' icon={<SiTailwindcss size={35} />}/>
               <Skill skill='ORMs/ORDs' icon={<BiTable size={35} />}/>
               <Skill skill='Nodejs' icon={<FaNodeJs size={35} />}/>
               <Skill skill='Typescript' icon={<SiTypescript size={35} />} />
               <Skill skill='NextJS' icon={<TbBrandNextjs size={35} />} />
            </div>
        </div>
    </div>
  )
}

export default Skills;