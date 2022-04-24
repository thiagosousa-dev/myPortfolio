import React from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import MenuMobile from "../components/MenuMobile";

function Contact() {
  return ( 
    <body>
      <TitleBar />
      <section className="flex-container">
        <section className="main-container">
          <Header />
          <MenuMobile />
          <main className="main-wrapper">
            <h1>Contact</h1>
          </main>
        </section>
        <SideBar />
      </section>
      <Footer />
    </body>
  );
}

export default Contact;