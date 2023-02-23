import React from 'react'
import {
FaFacebookSquare,
FaInstagram, 
FaTwitter, 
FaWhatsapp,
} from 'react-icons/fa'

 const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 grap-8 text-gray-300'>
<div>
<h1 className='w-full text-3xl font-bold text-[#00df9a]'>SenatTeknik.</h1>
<p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quam ad minus sed corrupti perspiciatis deserunt distinctio architecto.</p>
<div className='flex justify-between md:w-[75%] my-6'>
<FaFacebookSquare size={30} />
<FaInstagram size={30}/>
<FaWhatsapp size={30}/>
<FaTwitter size={30}/>
</div>
</div>
<div className='lg:col-span-2 flex justify-between mt-10'>
    <div>
        <h6 className='font-medium text-gray-500'>Menu</h6>
        <ul>
            <li className='py-2 text-sm'>Home</li>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Galeri</li>
            <li className='py-2 text-sm'>Kepengurusan</li>
            
            
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-500'>Contack</h6>
        <ul>
            <li className='py-2 text-sm'>0888888</li>
            <li className='py-2 text-sm'>@ftekununus@gmail.com</li>
            <li className='py-2 text-sm'></li>  
            
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-500'>Contack</h6>
        <ul>
            <li className='py-2 text-sm'>0888888</li>
            <li className='py-2 text-sm'>@ftekununus@gmail.com</li>
            <li className='py-2 text-sm'></li>  
            
        </ul>
    </div>
   
    
</div>

    <div className='mt-[20px] max-w-[1240px] mx-auto'>
    <h1 className='text-2xl flex absolute right-[100px]'>@DaniRamdani.Dev.2022</h1>
</div>
</div>

  );
}
export default Footer
