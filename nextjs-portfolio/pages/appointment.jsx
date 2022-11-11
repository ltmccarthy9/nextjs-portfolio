import React from 'react';
import appointmentManager from '../public/assets/img/appointment.png';
import Image from 'next/image';

const appointment = () => {

    const goSite = () => {
        window.open('http://ham-app-manager.herokuapp.com/')
    }

    const goRepo = () => {
        window.open('https://github.com/laurasierra17/appointment-manager')
    }
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={appointmentManager} alt='/' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
            <h2 className='py-2'>Appointment Manager</h2>
            <h3>JavaScript / Handlebars / MySQL / Express / Bulma</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
            <p className='text-xl tracking-widest uppercase text-[#3fb88e] py-3'>Project Overview</p>
            <p>Full stack application of a mock hospital. The user can sign up
                 and login to create, view, and delete appointments at their department
                  of need and their doctor of choice at a specific time. I was responsible 
                  for the login/sign up as well as the appointment creation after selection
                   of a department.
            </p>
            <button onClick={goSite} className='px-8 py-2 mt-4 mr-8 hover:scale-105 ease-in duration-200'>Deployed Site</button>
            <button onClick={goRepo} className='px-8 py-2 mt-4 hover:scale-110 ease-in duration-200'>Code Repo</button>
        </div>
      </div>
    </div>
  )
}

export default appointment

