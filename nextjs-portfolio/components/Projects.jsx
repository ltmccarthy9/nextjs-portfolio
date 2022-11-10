import React from 'react'
import Projitem from './Projitem';
import appointmentManager from '../public/assets/appointment.png'
import ecommerce from '../public/assets/ecommerce.png'

const Projects = () => {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
            <Projitem 
            title='Appointment Manager (group)' 
            backgroundImg={appointmentManager} 
            projectUrl='https://github.com/laurasierra17/appointment-manager' 
            />
            <Projitem 
            title='Ecommerce Backend' 
            backgroundImg={ecommerce} 
            projectUrl='https://github.com/laurasierra17/appointment-manager' 
            />
            <Projitem 
            title='Friends First' 
            backgroundImg={ecommerce} 
            projectUrl='https://github.com/laurasierra17/appointment-manager' 
            />
            <Projitem 
            title='Elder Warfare (group)' 
            backgroundImg={ecommerce} 
            projectUrl='https://github.com/laurasierra17/appointment-manager' 
            />
            </div>
        </div>
    </div>
  )
}

export default Projects;
