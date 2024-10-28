import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    // sm:flex-row (jab small devices pe na ho to flex row ho jaye (eg laptop view pe))
    <nav className='flex flex-col sm:flex-row justify-between items-start sm:items-center px-5 py-5 fixed top-0 left-0 right-0 shadow-md gap-1 sm:gap-0 z-30 bg-white'> 
      {/* Logo and Name */}
      <div className='flex justify-start items-center'>
        {/* I will add image later TODO: */}
        <img src="/public/logo.png" alt="image" className='w-[50px]' />
        <Link to={"/"} className='text-3xl font-bold text-blue-500'>InitPics</Link>
      </div>
      {/* List of other tabs */}
      <ul className=' flex gap-3 text-lg font-semibold text-gray-400 ml-12 '>
        <Link to={"/"} className='hover:text-black cursor-pointer sm:p-2'>About</Link>
        <Link to={"/"} className='hover:text-black cursor-pointer sm:p-2'>Contact</Link>
        <Link to={"/login"} className='hover:text-black cursor-pointer sm:p-2'>LogIn</Link>
        <Link to={"/signup"} className='hover:text-black cursor-pointer sm:p-2'>SignUp</Link>
      </ul>
    </nav>
  )
}

export default Navbar