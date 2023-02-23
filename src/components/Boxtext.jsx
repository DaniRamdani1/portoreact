import React from 'react'

const Boxtext = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
      <div className='lg:col-span-2'>
        <h1 className='md:text=5xl sm:text-4xl text-2xl font-bold py-2'>Lorem ipsum dolor sit amet consectetur </h1>
        <p>Sing up to our newsletter and stay up to date</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input className='p-3 flwx w-full rounded-md text-black' type="email" placeholder='Enter Email' />
            <button className='bg-[#00df9a] w-[150px] rounded-md font-medium ml-4 my-4 px-6 py-3 text-black'>Notify</button>
        </div>
        <p> We Carw about the protection of your data. Read our <span className='text-[#00df9a]'>Privacy policy</span></p>
        </div>
    </div>
    </div>
  )
}

export default Boxtext
