import React from "react";
import ImageCard from "./ImageCard";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosHeart } from "react-icons/io";

const PhotoGallery = () => {
  return (
    <div className="my-20  bg-white flex flex-col items-center justify-center pb-10">
      <h1 className="text-3xl font-semibold my-14">PhotoGallery</h1>
      {/* All my Photos listed inside this div */}
      <div className="sm:ml-5 grid grid-cols-1 sm:grid-cols-4 gap-5 bg-20">
        {/* Image Card */}
        <ImageCard
          id={"1"}
          title={"Raa Taaa Taaaaa its Supra"}
          price={1299}
          author={"harshit20"}
          img={
            "https://images.pexels.com/photos/831475/pexels-photo-831475.jpeg"
          }
          icon1={
            <FaCartShopping className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
          icon2={
            <IoIosHeart className="text-2xl text-red-500 hover:text-red-700 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
        />

        <ImageCard
          id={"2"}
          title={"Laborghini"}
          price={1499}
          author={"harshit20"}
          img={
            "https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg"
          }
          icon1={
            <FaCartShopping className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
          icon2={
            <IoIosHeart className="text-2xl text-red-500 hover:text-red-700 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
        />

        <ImageCard
          id={"3"}
          title={"Audi"}
          price={1399}
          author={"harshit20"}
          img={
            "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          icon1={
            <FaCartShopping className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
          icon2={
            <IoIosHeart className="text-2xl text-red-500 hover:text-red-700 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
        />
      </div>
    </div>
  );
};

export default PhotoGallery;
