import React from 'react';
import appointmentManager from '../public/assets/img/appointment.png';
import Image from 'next/image';

const appointment = () => {

  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
        <Image className='absolute object-cover z-1' fill src={appointmentManager} alt='/' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
            <h2 className='py-2'>Appointment Manager</h2>
            <h3>JavaScript / Handlebars / MySQL / Express / Bulma</h3>
        </div>
      </div>

      <div className='max-w-[1240px] flex flex-col mx-auto p-2 pt-8'>
        <div className='w-full'>
            <p className='text-xl tracking-widest uppercase text-amber-500 py-3'>Project Overview</p>
            <p>Full stack application of a mock hospital. The user can sign up
                 and login to create, view, and delete appointments at their department
                  of need and their doctor of choice at a specific time. I was responsible 
                  for the login/sign up as well as the appointment creation after selection
                   of a department.
            </p>
            <ul className='flex mt-6'>
              <li>
                <a href='https://github.com/laurasierra17/appointment-manager' target="_blank" className='px-8 py-2 m-2 text-white rounded-lg bg-gray-600 hover:bg-gray-500 duration-100'>Code Repo</a>
              </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default appointment

