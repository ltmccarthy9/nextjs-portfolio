import React from 'react'
import Image from 'next/image'
const Skill = ({skill, icon}) => {
  return (
    <div className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-200'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                {icon}
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <h3>{skill}</h3>
            </div>
        </div>
    </div>
  )
}

export default Skill
