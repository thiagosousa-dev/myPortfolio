import React from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import '../styles/Home.css';
import image from '../images/image.png';
import { FiDownload } from 'react-icons/fi';
import MenuMobile from "../components/MenuMobile";
import Typical from 'react-typical';

function Home() {
  return ( 
    <body>
      <TitleBar />
      <section className="flex-container">
        <section className="main-container">
          <Header />
          <MenuMobile />
          <main className="main-wrapper home">
            <div className="home-content">
              <p><span className="span">{'<'}</span>Hi there 👋 I'm</p>
              <h1>Thiago Nóbrega <span className="span">{'/>'}</span> </h1>
              <Typical 
                steps={['Front-End Developer', 1000, 'Full Stack Web Development Student', 1000]}
                loop={Infinity}
                wrapper="h2"
              />
              <button type="button" className="btn-download">
                Download CV
                <FiDownload />
              </button>
            </div>
            <img src={image} alt="imag" className="image"/>
          </main>
        </section>
        <SideBar />
      </section>
      <Footer />
    </body>
  );
}

export default Home;