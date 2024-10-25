import React from 'react'
import { IoIosSearch } from "react-icons/io";

const Herosection = () => {
  return (
    <div className='sm:w-[60vw] h-[20vh] overflow-clip sm:rounded-3xl mx-auto flex justify-center items-center '>
        <form action="/" method='post' className='absolute flex justify-center items-center '>
        <input type="search" name='search' id='search ' placeholder='Search Your Asset Here' className='py-5 px-3 w-[80vw] text-xl sm:text-3xl mx-auto outline-none border-b-2 '/>
        <IoIosSearch className='text-3xl sm:text-5xl text-gray-400 -ml-14'/>
        </form>
    </div>
  )
}

export default Herosection;