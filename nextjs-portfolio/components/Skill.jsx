import React from 'react'


const Skill = ({skill, icon}) => {
  return (
    <div className='bg-[#f8fafa] p-4 rounded-xl'>
        <div className='flex flex-col gap-1 justify-center'>
            <div className='m-auto'>
                {icon}
            </div>
            <h3 className='m-auto text-gray-800 font-semibold'>{skill}</h3>
        </div>
    </div>
  )
}

export default Skill
