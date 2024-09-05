import React from "react";
import Header from "../components/header";
import Explore from "../components/explore";
import Features from "../components/features";
import Footer from "../components/footer";

function Homepage() {
  return (
    <div>
      <Header /> 
      <Explore />
      <Features/>
      <Footer/>
    </div>
  );
}

export default Homepage;
