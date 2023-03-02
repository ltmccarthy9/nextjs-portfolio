import React from 'react'
import Projitem from './Projitem';
import appointmentManager from '../public/assets/img/appointment.png'
import ecommerce from '../public/assets/img/ecommerce.png'
import friendsImg from '../public/assets/img/ff.png';
import askanythingIMG from '../public/assets/img/askanything.png'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-2xl tracking-widest uppercase text-[#c99c53] mb-2'>Projects</p>
            <div className='grid md:grid-cols-2 gap-8'>
            <Projitem 
            title='Friends First' 
            backgroundImg={friendsImg} 
            projectUrl='/friends' 
            />
            <Projitem 
            title='Ask Anything' 
            backgroundImg={askanythingIMG} 
            projectUrl='/askanything' 
            />
            <Projitem 
            title='Appointment Manager (group)' 
            backgroundImg={appointmentManager} 
            projectUrl='/appointment' 
            />
            <Projitem 
            title='Ecommerce Backend' 
            backgroundImg={ecommerce} 
            projectUrl='/ecommerce' 
            />
            </div>
        </div>
    </div>
  )
}

export default Projects;
