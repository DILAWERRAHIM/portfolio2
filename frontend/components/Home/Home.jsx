import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../header/header'



const Home= () => {
  return (
    <div>
      <section>
 
      <Header/>
       
      </section>
       <section>
        <Outlet/>
       </section>

    </div>
   
  
  )
}

export default Home
