import React from 'react'


const Skill = ({skill, icon}) => {
  return (
    <div className='bg-[#f5f8f8] p-6 shadow-md rounded-xl'>
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
