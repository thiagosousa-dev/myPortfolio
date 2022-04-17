import React from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";

function About() {
  return ( 
    <body>
      <TitleBar />
      <section className="flex-container">
        <section className="main-container">
          <Header />
          <main className="main-wrapper">
            <h1>About</h1>
          </main>
        </section>
        <SideBar />
      </section>
      <Footer />
    </body>
  );
}

export default About;