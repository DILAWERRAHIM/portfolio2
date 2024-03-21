import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shared_layout from '../components/Home/shared_layout';
import Home from '../components/Home/Home'
import Projects from '../components/Projects/Projects'
import Skills from '../components/skills/Skills'
import Recommendation from '../components/recommendations/recommendation'
import About from '../components/About/about';
import Add_recommendations from '../components/recommendations/add-recommendations/Add-recommendations';
import Hire_me from '../components/Hireme/Hireme';

const App = () => {
  
  return (
    <div className='h-screen flex flex-col' >
     
    
      <BrowserRouter>
       
      
     
      <Routes>
     
        <Route path='/' element={<Home/>}>
         
          <Route index element={<Shared_layout />} />
          
        
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/recommendations' element={<Recommendation />} />
          <Route path='/add-recommendations' element={<Add_recommendations />} />
          <Route path='/hire-me' element={<Hire_me/>} />


           
        </Route>
      </Routes>
    </BrowserRouter>
     
    
     
    </div>
  )
}

export default App