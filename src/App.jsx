import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Writeups from "./components/Writeups";
import Skills from "./components/Skills";
import { Analytics } from "@vercel/analytics/react";

// Import the new global styles
import './index.css';

function App() {
  // The entire app will be dark-themed by default, so no theme provider is needed.
  return (
    <div className="bg-cyber-bg">
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