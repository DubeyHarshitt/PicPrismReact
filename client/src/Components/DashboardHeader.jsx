import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiMenu3Fill } from "react-icons/ri";
import { toggleSidebar } from "../../Store/slices/navSlice";
import { IoClose } from "react-icons/io5";

const DashboardHeader = () => {
  const author = useSelector((state) => state.auth.author);
  const role = useSelector((state) => state.auth.role);
  const sidebar = useSelector((state) => state.nav.sidebar);

  const dispatch = useDispatch();

  return (
    <>
      <div className="my-5 mx-8">
        <h1 className="text-3xl font-bold">
          Hello {author.charAt(0).toUpperCase() + author.slice(1) + "!"}
        </h1>
        <p>
          Welcome to your {role.charAt(0).toUpperCase() + role.slice(1)}{" "}
          Dashboard
        </p>
      </div>

      {/* Hamburger Menu icon just for phone */}
      <RiMenu3Fill
      onClick={()=> dispatch(toggleSidebar())}
        className={`${
          sidebar === true ? "hidden" : "block sm:hidden "
        } text-3xl absolute top-5 right-5`}
      />
      <IoClose
        onClick={()=> dispatch(toggleSidebar())}
        className={`${
          sidebar === true ? "block sm:hidden " : "hidden"
        } text-3xl absolute top-5 right-5`}
      />
    </>
  );
};

export default DashboardHeader;