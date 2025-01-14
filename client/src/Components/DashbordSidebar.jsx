import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoLogOut } from "react-icons/io5";
import { useLocation } from 'react-router-dom';
import { IoMdPhotos } from "react-icons/io";
import { SiGoogleanalytics } from "react-icons/si";
import { AiFillHome } from "react-icons/ai";
import { IoIosHeart } from "react-icons/io";
import { FaListUl } from "react-icons/fa";
import { setTab } from '../../Store/slices/navSlice';
import { logout } from '../../Store/slices/authSlice';

const DashbordSidebar = () => {

    const { pathname } = useLocation()
    const dispatch = useDispatch()

    const author = useSelector((state)=> state.auth.author);
    const sidebar = useSelector((state)=> state.nav.sidebar);
    const tab = useSelector((state)=> state.nav.tab);

    const authorInitial = author ? author.charAt(0).toUpperCase() : '';
    
  return (
    <nav className={`fixed z-10 
        ${!sidebar == true ? "-translate-x-[500px] sm:translate-x-0":""
    } ease-in-out duration-300 sm:static flex flex-col text-lg shadow-lg min-h-screen font-semibold bg-white gap-2 w-fit p-3 justify-between items-center list-none`}>
        <div>

            {/* Circle with name first letter */}
            <div className='bg-black text-white my-5 w-fit rounded-full py-4 px-6'>{authorInitial}</div>

            {/* List Items */}
            <div className='flex flex-col gap-2'>
                {pathname === "/seller/profile" ? ( 
                    <li className={`w-full rounded-lg px-2 hover:bg-black hover:text-white cursor-pointer transition-all ease-linear duration-300 hover:scale-105 flex gap-2 justify-start items-center 
                    ${tab === "photos-management" && "text-white bg-black"}    
                    `}
                    onClick={()=> dispatch(setTab("photos-management"))}
                    > <IoMdPhotos /> Photo Management</li> ) : ( 
                    <li className={`w-full rounded-lg px-2 hover:bg-black hover:text-white cursor-pointer transition-all ease-linear duration-300 hover:scale-105 flex gap-2 justify-start items-center 
                        ${tab === "photos-purchased" && "text-white bg-black"}    
                        `}
                        onClick={()=> dispatch(setTab("photos-purchased"))}> <IoMdPhotos /> Photo Purchased</li> 
                )}
                <li className={`w-full rounded-lg px-2 hover:bg-black hover:text-white cursor-pointer transition-all ease-linear duration-300 hover:scale-105 flex gap-2 justify-start items-center ${tab === "analytics" && "text-white bg-black"} `}
                onClick={()=> dispatch(setTab("analytics"))}
                > <SiGoogleanalytics /> Analytics</li>

                <li className={`w-full rounded-lg px-2 hover:bg-black hover:text-white cursor-pointer transition-all ease-linear duration-300 hover:scale-105 flex gap-2 justify-start items-center ${tab === "orders" && "text-white bg-black"}`}
                onClick={()=> dispatch(setTab("orders"))}
                > <FaListUl /> Orders</li>
                <li className={`w-full rounded-lg px-2 hover:bg-black hover:text-white cursor-pointer transition-all ease-linear duration-300 hover:scale-105 flex gap-2 justify-start items-center ${tab === "favourites" && "text-white bg-black"}`}
                onClick={()=> dispatch(setTab("favourites"))}> <IoIosHeart /> Favourite</li>
                <Link to="/" className='w-full rounded-lg px-2 hover:bg-black hover:text-white cursor-pointer transition-all ease-linear duration-300 hover:scale-105 flex gap-2 justify-start items-center'> <AiFillHome /> Home</Link>
            </div>
        </div>

        {/* Logout Button */}
        <li className='w-full rounded-lg px-2 hover:bg-black hover:text-white cursor-pointer transition-all ease-linear duration-300 hover:scale-105 flex gap-2 justify-start items-center'
        onClick={()=> dispatch(logout())}
        > 
            <IoLogOut /> Logout
        </li>
    </nav>
  )
}

export default DashbordSidebar