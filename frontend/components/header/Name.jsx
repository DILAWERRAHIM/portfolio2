import React from 'react'
import {Phone} from "../Icons/icons"
import { Email } from '../Icons/icons'
const Name = () => {
  return (
    <div className='m-4 text-left text-white'>
       
        <h1 className='text-2xl'> Dilawer Ali</h1>

        <div className='flex text-sm'>
            <Phone/>
            <div className='text-sm mx-1' > 03090812627</div>
        </div>
        <div className='flex'>
        <Email/>
           <div className='text-sm mx-1'> aliwebdeveloper04@gmail.com</div>
        </div>


    </div>
  )
}

export default Name