import React from 'react'
import Typed from 'react-typed';

 const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
      <p className='text-[#00df9a] font-bold p-2'>Hallo Selamat Datang Sahabat di Website Senat Teknik</p>
      <h1 className='md:text-5xl sm:text-6xl text-3xl font-bold md:py-6'>Universitas Islam Nusantara</h1>
      <div className='flex justify-center'>
      <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'></p>
      <Typed className='md:text-5xl sm:text-4xl text-xl font-bold pl-2'
      strings={['Teknik!!!','BRAVO']} typeSpeed={130} backSpeed={140} loop />
      </div>
      <p className='md:text-xl text-xl font-bold  text-gray-500 p-2'>Selamat bergabung menjadi bagian dari keluarga besar teknik</p>
      <button className='bg-[#00df9a] w-[150px] rounded-md font-medium my-2 mx-auto px-4 py-3 text-black'>Get started</button>
      </div>
      </div>

  )
}

export default Hero