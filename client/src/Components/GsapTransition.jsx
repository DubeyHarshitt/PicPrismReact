import React, { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import gsap from "gsap";
import toast, { Toaster } from "react-hot-toast";

// Pages
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import SellerDashbord from "../Pages/SellerDashbord";
import BuyerDashord from "../Pages/BuyerDashord";
import Error from "../Pages/Error";


const GsapTransition = () => {
    const nodeRef = useRef(null);
    const location = useLocation();
    // console.log("The Location is : "+location.pathname);

    // Jab bhi location change hoga tab ye use effect run hoga, because ye UseEffect ko ham dependent banane wale hai location k uppar
    // when a page renders UseEffect runs first
    useEffect(()=>{
        if(nodeRef.current){
            gsap.fromTo(nodeRef.current, { opacity: 0 }, { opacity: 1, duration: 1 })
            toast.success("Page Changed to : "+location.pathname + " Route")
        }
    }, [location]);
    // dependency array contains location means : jsb bhi location update hoga tab ye call hoga
    // when we keep dependency array empty it means : ye page call hoga jab bhi ham refresh karenge

    // FOR GSAP
    // 1. Argument or Target
    // 2. Logic

  return (
    // <div ref={nodeRef}>
    <div>
        <Toaster/>
        <Routes location={location}>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/seller/profile" element={<SellerDashbord/>} />
          <Route path="/buyer/profile" element={<BuyerDashord/>} />
          {/* Catch-all route for undefined paths */}
        <Route path="*" element={<Error />} />
        </Routes>
    </div>
  )
}

export default GsapTransition