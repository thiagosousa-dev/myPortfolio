import React from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";

function Home() {
  return ( 
    <div>
      <TitleBar />
      <div className="wrapper">
        <main className="main-container">
          <Header />
          <h1>Home</h1>
        </main>
        <SideBar />
      </div>
      <Footer />
    </div>
  );
}

export default Home;