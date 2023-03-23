import React from 'react'
import Projitem from './Projitem';
import appointmentManager from '../public/assets/img/appointment.png'
import ecommerce from '../public/assets/img/ecommerce.png'
import friendsImg from '../public/assets/img/ff.png';
import askanythingIMG from '../public/assets/img/askanything.png'
import wtfdPic from '../public/assets/img/wtfd.png'

const Projects = () => {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto p-4 py-16'>
        <h2 id='projects'  className='text-3xl tracking-tight mb-2 text-gray-700 w-fit p-2 '>My Projects</h2>
            <div className='grid md:grid-cols-2 gap-8'>
            <Projitem 
            title='Friends First' 
            backgroundImg={friendsImg} 
            projectUrl='/friends' 
            />
             <Projitem 
            title='What The Fam Doing?' 
            backgroundImg={wtfdPic} 
            projectUrl='/wtfd' 
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
