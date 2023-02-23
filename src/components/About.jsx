import React from 'react'
import Gambar from '../assets/2.jpg'

const About = () => {
  return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[300px] mx-auto my-4' src={Gambar} alt="/"></img>
            <div className='flex flex-col justify-center'>
            <p className='text-[#4c1d95] font-bold'>About</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analitik cetraliy</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aliquam, molestias fuga repudiandae ullam exercitationem et reiciendis. Suscipit, beatae facere magnam molestiae dignissimos nam pariatur molestias eos quis vel quas?</p>
            <button className='bg-[#00df9a] w-[150px] rounded-md font-medium my-2 mx-auto md:mx-0 px-5 py-3 text-black'>Get started</button>
            </div>
            </div>
            </div>
  
  )
}

export default About
