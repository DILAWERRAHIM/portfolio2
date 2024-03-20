import React from 'react'
import Subscribe from './Subscribe'

const Intro = () => {
  return (
    <div className='text-white md:col-span-4 p-4'>
      <div className='md:w-[60%] mx-auto mb-4'>
        <h1 style={{ fontFamily: "'Madimi One',sans-serif", fontWeight: 400, fontStyle: 'normal', fontSize:"40px"}}>
          I'm Dilawer Wonderful, </h1>
          <p> a <span className='font-bold'> full stack developer </span> based in Pakistan.</p>
          <p> I passionate about creating cutting edge, perfect, beautiful web applications of all types</p>
       
      
      </div>
      <Subscribe/>
      
    </div>
  )
}

export default Intro