import React from 'react';
import image from "../Ritik.jpg"

export default function About() {
  return (
    <div className=' bg-gray-900'>
    <div className="text-center  pt-20 ml-5">
    <h1 className='text-teal-500 font-extrabold text-7xl hover:text-green-300 mr-4 mt-1 mb-2'>About Me</h1>
    <div>
      <img src={image} className="h-64 w-30 mt-5 mb-2 inline-block rounded-lg"></img>
    </div>
    <div>
      <h1 className='text-white font-serif italic pt-2 '>Hi, I'm <span className='text-cyan-500 font-semibold'>Ravindra</span></h1>
      <div className='text-4xl font-semibold font-serif pt-7 text-blue-500'>
        <h1>Education</h1>
          </div> 
        <div className='text-white pt-10 font-serif '>
<ul className='list-disc list-inside'>
<li className='ml-8'>Class 10+12th from <span className='font-semibold text-cyan-500'>"S.P.U Senior Secondary School"</span> [2018 & 2020]</li>
<li>BTech in IT from<span className='font-semibold text-cyan-500'> "Arya College of Engineering & IT"</span> [2020-24]</li>
    </ul>
</div>
<div className='text-4xl font-semibold font-serif pt-7 text-blue-500'>
      <h1>Certificates</h1>
</div>
<div className='text-white pt-10 font-serif' >
<ul className='list-disc list-inside'>
<li className='hover:text-cyan-500 ml-2.5'><a href='https://www.udemy.com/certificate/UC-d72848a4-9775-44d4-a5d8-b0e14bbc617a/?utm_source=sendgrid.com&utm_medium=email&utm_campaign=email' target='_blank'>React.JS: The Complete Course for Beginners</a></li>
<li className='hover:text-cyan-500 mr-20'><a href='https://www.udemy.com/certificate/UC-49c88695-0b7c-4dae-8086-bb101cef8580/'  target='_blank'>C++ Programming for Beginners</a></li>
<li className='hover:text-cyan-500 mr-20'><a href='https://www.udemy.com/certificate/UC-49c88695-0b7c-4dae-8086-bb101cef8580/'target='_blank' >Git Command Line for Beginners </a></li>
<li className='hover:text-cyan-500 mr-16'><a href='https://www.udemy.com/certificate/UC-b6a7fe8d-781b-4d29-a8b7-f9434f25ce20/' target='_blank'>Backbone JS Tutorial for Beginners </a></li>
    </ul>
    </div>
  
    <div className='text-4xl font-semibold font-serif pt-7 text-blue-500'>
      <h1>Achievements</h1>
</div>
<div className='text-white pt-10 font-serif' >
<ul className='list-disc list-inside'>
<li>Selected in "Smart India Hackathon" [2022]</li>
<li>Selected in "State Level Cricket Team" [2017]</li>
    </ul>
    </div>
    <div className='text-4xl font-semibold font-serif pt-7 text-blue-500'>
      <h1>Tech Stack</h1>
</div>
<div>
</div>
    </div>

  </div>
  </div>
  )
}
