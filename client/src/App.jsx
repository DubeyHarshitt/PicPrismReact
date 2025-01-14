import { BrowserRouter, } from "react-router-dom";

// REDUX Toolkit
import { Provider } from "react-redux"
import { store } from "../Store/Store"

// Components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import GsapTransition from "./Components/GsapTransition";

export default function App() {
  return (
    <>
    <Provider store={store} >
      <BrowserRouter>
        <Navbar/> 
        <GsapTransition/>
        <Footer/>
      </BrowserRouter>
    </Provider>
    </>
  );
}
