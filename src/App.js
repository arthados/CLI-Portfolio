// src/App.js
import React, { useState } from "react";
import Terminal from "./components/Terminal";
import Intro from "./components/Intro";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./styles/Global.css"; 

function App() {
  const [isCLI, setIsCLI] = useState(true);

  if (isCLI) {
    return (
      <div className="App">
        <Terminal exitCLI={() => setIsCLI(false)} />
      </div>
    );
  }

  return (
    <div className="App">
      <div style={{ position: "fixed", top: "20px", right: "20px", zIndex: 100 }}>
        <button 
          onClick={() => setIsCLI(true)}
          style={{ background: "var(--code-bg)", color: "var(--code-text)", border: "1px solid var(--accent-color)", padding: "8px 16px", borderRadius: "4px", cursor: "pointer", fontFamily: "var(--font-mono)" }}>
          &gt;_ Open CLI
        </button>
      </div>
      
      <div id="content">
        <Intro />
        <About />
        <Experience />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;