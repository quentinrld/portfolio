import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer"
import About from "./components/About/About";

import "./App.css";
import Portfolio from "./components/Portfolio/Portfolio";

const App = () => {
  return (
    <>
      <NavBar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Footer/>
    </>
  )
}

export default App;
