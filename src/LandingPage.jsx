import "./App.css";
import React from "react";
import Secao from "./components/Section/Section";
import Section2 from "./components/Section 2/Section2";
import Section4 from "./components/Section 4/Section4";
import Footer from "./components/footer/Footer";
import NavBarResponsiva from "./components/NavBarResponsiva/NavBarResponsiva";
import Carrossel from "./components/LandingPage/Section 3 Rework/Section3";
import Section4Rework from "./components/LandingPage/Section 4 Rework/Section4";


function LandingPage() {
  // const handleFileUpload = (files) => {
  //   console.log('Arquivos carregados:', files);
  // }; utilizado para o componet fotos
  return (
    <main id="landing-page">
      <NavBarResponsiva />
      <Secao />
      <Section2 />
      <Carrossel />
      <Section4Rework />
      <Footer stroke="#eaeaea"/>
    </main>
  );
}

export default LandingPage;
