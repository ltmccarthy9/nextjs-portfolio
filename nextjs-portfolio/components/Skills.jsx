import React from 'react'
import Image from 'next/image';

const Skills = () => {
  return (
    <div className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#3fb88e]'>Skills</p>
            <h2 className='py-4'>What I Can Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                
                <div className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-200'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='' alt='/' width='64px' height='64px' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Javascript</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-200'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='' alt='/' width='64px' height='64px' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>HTML5</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-200'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='' alt='/' width='64px' height='64px' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>CSS</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-200'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='' alt='/' width='64px' height='64px' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>React</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-200'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='' alt='/' width='64px' height='64px' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>MySQL</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-200'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='' alt='/' width='64px' height='64px' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>MongoDB</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-200'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='' alt='/' width='64px' height='64px' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Bootstrap</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-200'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='' alt='/' width='64px' height='64px' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Tailwind</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-200'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='' alt='/' width='64px' height='64px' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>ORMs/ORDs</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-200'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='' alt='/' width='64px' height='64px' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Nodejs</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-200'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='' alt='/' width='64px' height='64px' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Typescript</h3>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Skills;