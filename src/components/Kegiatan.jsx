import React from 'react'
import kalilinux from '../assets/kalilinux.jpg'

 const Kegiatan = () => {
  return (

    <div className='w-full py-[60px] bg-zinc-400'>
    <h1 className='flex justify-center text-center font-bold text-4xl mb-20'>Galeri kegiatan</h1>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 grap-8'>
      <div className='w-full shadow-xl flex flex-col p-4 my-4 py-[60px] rounded-lg hover:scale-105 duration-300'>
        <img className='w-25 mx-auto mt-[-4rem] bg-white' src={kalilinux} alt="/" />
      <h2 className='text-2xl font-bold text-center py-8'>Kepengurusan</h2>
      <p className='text-center text-4xl font-bold'>Ketua senat</p>
      </div>

      <div className='w-full shadow-xl flex flex-col p-4 my-4 py-[60px] rounded-lg hover:scale-105 duration-300'>
        <img className='w-25 mx-auto mt-[-4rem] bg-white' src={kalilinux} alt="/" />
      <h2 className='text-2xl font-bold text-center py-8'>Kepengurusan</h2>
      <p className='text-center text-4xl font-bold'>Ketua senat</p>
      </div>

      <div className='w-full shadow-xl flex flex-col p-4 my-4 py-[60px] rounded-lg hover:scale-105 duration-300 '>
        <img className='w-25 mx-auto mt-[-4rem] bg-white' src={kalilinux} alt="/" />
      <h2 className='text-2xl font-bold text-center py-8'>Kepengurusan</h2>
      <p className='text-center text-4xl font-bold'>Ketua senat</p>
      </div>

      <div className='w-full shadow-xl flex flex-col p-4 my-4 py-[60px] rounded-lg hover:scale-105 duration-300'>
        <img className='w-25 mx-auto mt-[-4rem] bg-white' src={kalilinux} alt="/" />
      <h2 className='text-2xl font-bold text-center py-8'>Kepengurusan</h2>
      <p className='text-center text-4xl font-bold'>Ketua senat</p>
      </div>

      <div className='w-full shadow-xl flex flex-col p-4 my-4 py-[60px] rounded-lg hover:scale-105 duration-300'>
        <img className='w-25 mx-auto mt-[-4rem] bg-white' src={kalilinux} alt="/" />
      <h2 className='text-2xl font-bold text-center py-8'>Kepengurusan</h2>
      <p className='text-center text-4xl font-bold'>Ketua senat</p>
      </div>

      <div className='w-full shadow-xl flex flex-col p-4 my-4 py-[60px] rounded-lg hover:scale-105 duration-300'>
        <img className='w-25 mx-auto mt-[-4rem] bg-white' src={kalilinux} alt="/" />
      <h2 className='text-2xl font-bold text-center py-8'>Kepengurusan</h2>
      <p className='text-center text-4xl font-bold'>Ketua senat</p>
      </div>
     
    
    </div>
  </div>
  )
}

export default Kegiatan