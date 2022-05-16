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
                <h1 className="title-about">Olá,</h1>
              <span className="span-tag content">{'</h1>'}</span>
              <br/>
              <span className="span-tag content">{'<p>'}</span>
                <p className="text-about">
                  Meu nome é <span className="span-highlight">Thiago Nóbrega</span> e adoro solucionar problemas através dos códigos. Sou formado em Engenharia Civil, mas estou em transição de carreira, atualmente estudando Desenvolvimento <span className="span-highlight">Web Full Stack.</span>
                </p>
                <p className="text-about">
                  Meu foco é poder ajudar a melhorar a vida das pessoas, desenvolvendo aplicações que sejam <span className="span-highlight">acessíveis e funcionais</span>. A experiência inclui a solução de problemas e testes, trabalhando em equipes com prazos rigorosos, para projetos desenvolvidos no curso da Trybe.
                </p>
                <p className="text-about last">
                  AS habilidades relevantes incluem: <span className="span-highlight">Html, CSS, JavaScript, React, Redux, ContextAPI, Hooks, Jest/RTL, Git/Github.</span>
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