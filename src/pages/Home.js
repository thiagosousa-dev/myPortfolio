import React from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";

function Home() {
  return ( 
    <div>
      <TitleBar />
      <Header />
      <h1>Home</h1>
      <Footer />
    </div>
  );
}

export default Home;