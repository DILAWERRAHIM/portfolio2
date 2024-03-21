import React from 'react'

const Projects = () => {
  return (
    <div className='w-screen    flex h-5/6  overflow-auto items-center justify-center'>
    <div className=' p-6  mt-12 
     md:w-[90%]'>
      <h3 className='text-[#313178]' style={{ fontFamily: "'Madimi One',sans-serif", fontWeight: 400, fontStyle: 'normal', fontSize:"40px"}}> Projects</h3>
     
       <div>
        <h2 className='mb-4 font-bold' > Task Management Application</h2>
        <p>
        &nbsp;&nbsp;&nbsp;&nbsp; Design a task manager, with an
           intuitive interface for users to efficiently organize and prioritize their tasks
        </p>
       </div>
       <div className='w-[80%] text-center ml-5  mt-4 h-[2px] bg-red-700'></div>

       <div>
        <h2 className='my-4 font-bold' > Shopping store</h2>
        <p>
        &nbsp;&nbsp;&nbsp;&nbsp; Design a store , fully dynamic and fully responsive with cart and authentications 
        </p>
       </div>
       <div className='w-[80%] text-center ml-5 mt-4 h-[2px] bg-red-700'></div>
       <div>
        <h2 className='my-4 font-bold' >Real-time Chat Application</h2>
        <p>
         &nbsp;&nbsp;&nbsp;&nbsp; Experience seamless real-time communication with our
         chat application, offering instant messaging, group chats, and multimedia sharing.
        </p>
       </div>
       <div className='w-[80%] text-center ml-5 mt-4 h-[2px] bg-red-700'></div>
       <div>
        <h2 className='mb-4 font-bold' > Social Media Dashboard</h2>
        <p>
        &nbsp;&nbsp;&nbsp;&nbsp; Effortlessly manage all your social media
         accounts with our streamlined Social 
        Media Dashboard. Stay organized, save time
        </p>
       </div>
       <div className='w-[80%] text-center ml-5  mt-4 h-[2px] bg-red-700'></div>
    
    </div>
    
    
  </div>
  )
}

export default Projects