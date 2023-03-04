import React from 'react'


const Skill = ({skill, icon}) => {
  return (
    <div className='bg-[#f5f8f8] p-6 border border-gray-200 rounded-xl'>
        <div className='flex flex-col gap-1 justify-center'>
            <div className='m-auto'>
                {icon}
            </div>
            <h3 className='m-auto'>{skill}</h3>
        </div>
    </div>
  )
}

export default Skill
