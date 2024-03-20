import React from 'react'
import Name from "./Name"
import Navbar from './Navbar'

const header = () => {
  return (
    <div className='w-screen h-1/6 bg-[#A51C30] text-center relative'>
        <div className='flex justify-between mx-auto w-[90%]  '>
        <Name/>
       <Navbar/>
        </div>
     

    </div>
  )
}

export default header