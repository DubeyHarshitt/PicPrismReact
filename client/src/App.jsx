import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import SellerDashbord from "./Pages/SellerDashbord";
import BuyerDashord from "./Pages/BuyerDashord";

// Components
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/seller/profile" element={<SellerDashbord/>} />
          <Route path="/buyer/profile" element={<BuyerDashord/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
