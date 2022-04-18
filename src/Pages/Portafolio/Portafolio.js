import React from "react";
import About from "../../Components/about";
import Header from "../../Components/header";
import Skills from "../../Components/skills";
import Footer from "../../Components/Footer";
import Portada from "../../Components/Portada";
import Professional from "../../Components/Professional";
import LenguageProvider from "../../Components/LenguageProvider";

const Portafolio = () => {
  return (
    <LenguageProvider>
      <Header />
      <Portada />
      <About />
      <Skills />
      <Professional />  
      <Footer />
    </LenguageProvider>
  );
};

export default Portafolio;
