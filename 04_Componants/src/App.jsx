import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
const App = () => {
  return (
    // it's called fragment
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Footer></Footer>
    </>
  );
};

export default App;
