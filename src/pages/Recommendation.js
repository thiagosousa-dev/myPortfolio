import React from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import MenuMobile from "../components/MenuMobile";
import recommendation from "../data/recommendation"
import "../styles/Recommendation.css"


function Projects() {
  return ( 
    <body>
    <TitleBar />
    <section className="flex-container">
      <section className="main-container">
        <Header />
        <MenuMobile />
        <main className="main-wrapper recommendation">
          <h1 className="title-recommendation">O que dizem devs que colaboraram comigo</h1>
          <div className="recommendation-container">
            {recommendation.map(({name, message, social}, index) => (
              <div className={`recommendation-card ${index === 1 && 'border'}`} key={name}>
                <p>{message}</p>
                <a href={social} target="_blank" rel="noreferrer"><h2>{name}</h2></a>
              </div>
            ))}
          </div>
        </main>
      </section>
      <SideBar />
    </section>
    <Footer />
  </body>
  );
}

export default Projects;