import { useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Writeups from "./components/Writeups";
import Skills from "./components/Skills";
import LinuxTerminal from "./components/LinuxTerminal";
import { Analytics } from "@vercel/analytics/react";
import { Terminal } from "lucide-react";

// Import the new global styles
import './index.css';

function App() {
  const [uiMode, setUiMode] = useState('linux');

  // Effect to toggle body scroll based on mode if needed, 
  // but simpler just to switch components.
  
  const switchMode = () => {
    setUiMode(prev => prev === 'linux' ? 'window' : 'linux');
  };

  if (uiMode === 'linux') {
    return <LinuxTerminal onSwitchMode={switchMode} />;
  }

  // The entire app will be dark-themed by default, so no theme provider is needed.
  return (
    <div className="bg-cyber-bg relative">
       {/* Floating toggle for Window UI to go back to Linux */}
      <div className="fixed bottom-6 left-6 z-50">
        <button 
          onClick={switchMode}
          className="bg-black/80 text-green-500 border border-green-500 p-3 rounded-full hover:bg-black hover:scale-110 transition-all shadow-[0_0_10px_rgba(0,255,0,0.5)] group"
          title="Switch to Terminal Mode"
        >
          <Terminal size={24} />
          <span className="absolute left-14 top-1/2 -translate-y-1/2 bg-black text-green-500 text-xs px-2 py-1 rounded border border-green-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Back to Terminal
          </span>
        </button>
      </div>

      <Header />
      <main id="main-content">
          <Hero />
          <About />
          <Writeups />
          <Skills />
          <Contact />
      </main>
      <Footer />
      <Analytics />
    </div>
  )
}

export default App