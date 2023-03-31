import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Projitem = ({title, backgroundImg, projectUrl}) => {
  return (
    <div className='card h-80 w-full'>
        <Image className='backImage' src={backgroundImg} alt='/'/>
        <div className='info'>
          <h3>{title}</h3>
          <Link href={projectUrl}>
            <p>More Info</p>
          </Link>
        </div>
    </div>
  )
}

export default Projitem
