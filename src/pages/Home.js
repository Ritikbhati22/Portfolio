import React from 'react'
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedinIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
export default function Home() {
  return (
    <div>
    <div className=" text-center  pt-24 ml-5">
    <h1 className='text-teal-300 font-extrabold text-7xl hover:text-orange-300 mr-4'>Ritik Bhati</h1></div>
    
    <div><p className='text-white text-center pt-10 mr-2'>Those are my Social media Handles</p></div>
    <div className='flex flex-row text-white justify-center pt-10 pb-10 text-center'>
    <a href='https://www.instagram.com/ritik_bhati_25/' target='_blank'>
    <svg className='h-10 w-10 mr-5 hover:text-pink-400'>
     <InstagramIcon />
     </svg></a>
     <a href='https://www.facebook.com/' target='_blank'>
     <svg className='h-10 w-10 mr-5 hover:text-blue-600'>
      <FacebookIcon />
      </svg>
      </a>
     <a href='https://twitter.com/RavindraBhati22' target="_blank">
      <svg className='h-10 w-10 mr-5 hover:text-blue-400'>
      <TwitterIcon />
      </svg>
      </a>
     <a href='https://github.com/Ritikbhati22' target='_blank'>
      <svg className='h-10 w-10 mr-5 hover:text-gray-600'>
      <GithubIcon />
      </svg>
      </a>
     <a href='https://www.linkedin.com/in/ravindra-bhati-b71aa5213/' target="_blank">
      <svg className='h-10 mr-5 w-10 hover:text-blue-800 '>
        <LinkedinIcon />
      </svg>
      </a>
      </div>
       </div>
);
}
