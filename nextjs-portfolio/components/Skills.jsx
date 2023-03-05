import React from 'react'
import Image from 'next/image';
import Skill from './Skill';
import {FaLinkedinIn, FaGithub, FaReact, FaNodeJs} from 'react-icons/fa';
import {SiJavascript, SiExpress, SiCss3, SiMongodb, SiRedux, SiFirebase, SiBootstrap, SiTailwindcss, SiTypescript, SiPostgresql} from 'react-icons/si';
import {AiFillHtml5} from 'react-icons/ai';
import {GrMysql} from 'react-icons/gr';
import {BiTable} from 'react-icons/bi';
import {TbBrandNextjs} from 'react-icons/tb';


const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen px-2 py-2 pb-72'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full p-4'>
            <p className='text-2xl tracking-tight mb-4 text-red-300 w-fit rounded-lg p-2 bg-gray-700'>My Skills</p>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2'>
               <Skill skill='Javascript' icon={<SiJavascript className='bg-[#323330]' color='#F0DB4F' size={35}/>} />
               <Skill skill='Typescript' icon={<SiTypescript className='bg-[#ffffff]' color='#007acc' size={35} />} />
               <Skill skill='HTML' icon={<AiFillHtml5 color='#f06529' size={35}/>}/>
               <Skill skill='CSS' icon={<SiCss3 color='#2965f1' size={35} />}/>
               <Skill skill='React' icon={<FaReact color='#61DBFB' size={35}/>}/>
               <Skill skill='Redux' icon={<SiRedux color='#764abc' size={35} />} />
               <Skill skill='NextJS' icon={<TbBrandNextjs size={35} />} />
               <Skill skill='Nodejs' icon={<FaNodeJs color='#3c873a' size={35} />}/>
               <Skill skill='express.js' icon={<SiExpress size={35} />}/>
               <Skill skill='PostreSQL' icon={<SiPostgresql color='#336791' size={35} />} />
               <Skill skill='MySQL' icon={<GrMysql color='#00758f' size={35} />}/>
               <Skill skill='MongoDB' icon={<SiMongodb color='#4DB33D' size={35} />} />
               <Skill skill='Firebase' icon={<SiFirebase color='#F5820D' size={35}/>} />
               <Skill skill='Bootstrap' icon={<SiBootstrap color='#563d7c' size={35} />} />
               <Skill skill='TailwindCSS' icon={<SiTailwindcss color='#4dc0b5' size={35} />}/>
               <Skill skill='ORMs/ORDs' icon={<BiTable size={35} />}/>
            </div>
        </div>
    </div>
  )
}

export default Skills;