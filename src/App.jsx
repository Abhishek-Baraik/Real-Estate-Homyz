import { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div className="App relative overflow-hidden">
      <div className="bg-[color:var(--black)] relative">
        <div className="white-gradient absolute w-[20rem] h-[20rem] z-10 bg-gradient-to-r from-zinc-400 rounded-[100px] blur-[100px]"/>
        <Header />
        <Hero />
      </div>
      <Companies/>
      <Residencies/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
