import React, { useEffect } from "react";
import DashboardHeader from "../DashboardHeader";
import ImageAdd from "../ImageAdd";
import ImageCard from "../ImageCard";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../Store/slices/authSlice";
import { setMyPosts } from "../../../Store/slices/postSlice";
import toast from "react-hot-toast";
import axios from "axios";
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

export const PhotoManagement = () => {
  const posts = useSelector((state) => state.posts.myPosts);
  console.log("my posts", posts);
  
  const dispatch = useDispatch();

  const getMyPosts = async () => {
    try {
      if (post.length > 0) return;
      const res = await axios.get(
        import.meta.env.VITE_API_URL + "/post/myPosts",
        {
          headers: {
            Authorization: "Bearer" + localStorage.getItem("accessToken"),
          },
        }
      );

      const { data }  = await res.data;
      console.log(data);
      dispatch(setMyPosts(data));
      
    } catch (error) {
      toast.error(
        error.response.data.message || "Posts not found at photosManagement"
      );
      dispatch(logout);
    }
  };

  useEffect(() => {
    getMyPosts();
  }, []);

  return (
    <div className="flex flex-col sm:flex-row">
      <div>
        {/* Dashboard Header */}
        <DashboardHeader />
        {/* Image add component will be here */}
        <ImageAdd />
      </div>

      {/* Section where all the images will get displayed */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-5 bg-transparent sm:bg-white p-5 w-[90vw] sm:w-[55vw] sm:h-[95vh] sm:overflow-y-scroll rounded-lg mx-auto sm:mx-0">
        { posts.length &&
        posts?.map(({ _id, title, image, author, price }) => {
          return (
            <ImageCard
              key={_id}
              id={_id}
              title={title}
              price={price}
              img={image}
              author={author}
              icon1={<BiSolidMessageSquareEdit title="Edit" 
                className="text-3xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300 " />}
              icon2={<MdDelete title="Delete"
                className="text-3xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300 " />}
            />
          );
        })}
      </div>
    </div>
  );
};
