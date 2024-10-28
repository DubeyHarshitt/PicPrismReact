import React from "react";

const ImageCard = ({ id, img, title, price, author, icon1, icon2 }) => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-lg ">
      <div className="w-full h-[200px] overflow-hidden rounded-2xl">
        <img
          src={img}
          alt={title}
          className="hover:scale-105 transition-all ease-linear duration-300 transform cursor-pointer w-full h-full "
        />
      </div>
      <p className="font-semibold text-white bg-black w-fit px-5 py-2 rounded-full text-sm my-3">
        {"@" + author.charAt(0).toUpperCase() + author.slice(1)}
      </p>
      <div className="flex justify-between items-center mt-2">
        <div>
          <h3 className="text-large font-semibold">{title}</h3>
          <p className="text-gray-500">Price : {price}₹</p>
        </div>
        <div className="flex items-center justify-center gap-5">
          {icon1}
          {icon2}
        </div>
      </div>
      {/* <p className='py-2'>Paragraph Text</p>  */}
    </div>
  );
};

export default ImageCard;
