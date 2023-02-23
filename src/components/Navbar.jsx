import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import logo from '../assets/logo.png'

 const Navbar = () => {
      const [nav, setNav] = useState(false)

      const handleNav = () => {
        setNav(!nav)
      }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
    <img className='h-20' src={logo} alt='/'/>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Logo</h1>
     <ul className='hidden md:flex'>
      <li className='p-4'>Home</li>
      <li className='p-4'>About</li>
      <li className='p-4'>Galeri</li>
      <li className='p-4'>Kepengurusan</li>
      <li className='p-4'>Contak</li>

     </ul>
     <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        
     </div>
     <div className={nav ? 'fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-[#000300] ealse-in-out duration-500' : 'fixed left-[-100%]'}>
     <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>SenatTeknik</h1>
      <ul className='appercase'>
      <li className='p-4 border-b border-gray-600'>Home</li>
      <li className='p-4 border-b border-gray-600'>About</li>
      <li className='p-4 border-b border-gray-600'>Galeri</li>
      <li className='p-4 border-b border-gray-600'>Kepengurusan</li>
      <li className='p-4'>Contack</li>
      </ul>
     </div>
    </div>
  )
}

export default Navbar