import React from 'react'
import {NavLink} from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='text-slate-100 text-center '> 
    <ul className='bg-gray-900 w-full flex justify-center items-center'> 
    <li className='m-5 hover:text-slate-400 '>
    <NavLink to="/" exact>Home</NavLink>
    </li>
    <li className='m-5 hover:text-slate-400 '>
    <NavLink to="/about">About</NavLink>
    </li>
    <li className='m-5 hover:text-slate-400 '>  
    <NavLink to="/projects">Projects</NavLink>
    </li>
    </ul>
</div>
  )
}
