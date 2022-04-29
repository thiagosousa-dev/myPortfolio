import React from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import MenuMobile from "../components/MenuMobile";
import '../styles/About.css';
import IconCloud from '../components/IconCloud';

function About() {
  return ( 
    <body>
      <TitleBar />
      <section className="flex-container">
        <section className="main-container">
          <Header />
          <MenuMobile />
          <main className="main-wrapper about">
            <div className="about-container">
              <span className="span-tag html">{'<html>'}</span>
              <br/>
              <span className="span-tag body">{'<body>'}</span>
              <br/>
              <span className="span-tag content">{'<h1>'}</span>
                <h1 className="title-about">About me</h1>
              <span className="span-tag content">{'</h1>'}</span>
              <br/>
              <span className="span-tag content">{'<p>'}</span>
                <p className="text-about">
                  Olá! Meu nome é Thiago e adoro solucionar problemas através dos códigos. Sou formado em Engenharia Civil, mas atualmente estudo Desenvolvimento Web.
                </p>
                <p className="text-about">
                  Sou um profissional em transição de carreira, que encontrou na programação um propósito de vida. Meu foco é poder ajudar a melhorar a vida das pessoas, desenvolvendo aplicações que sejam acessíveis e funcionais. 
                </p>
                <p className="text-about last">
                  Atualmente procuro uma oportunidade como desenvolvedor Front-End, mas também estou estudando para me tornar um desenvolvedor FullStack. As tecnologias que utilizo são: Html, CSS, JavaScript, React, Redux, ContextAPI, Hooks, Jest/RTL, Git/Github.
                </p>
              <span className="span-tag content">{'</p>'}</span>
              <br/>
              <span className="span-tag body">{'</body>'}</span>
              <br/>
              <span className="span-tag html">{'</html>'}</span>
            </div>
            <IconCloud />
          </main>
        </section>
        <SideBar />
      </section>
      <Footer />
    </body>
  );
}

export default About;