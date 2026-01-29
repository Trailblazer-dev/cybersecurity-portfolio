import Button from "./Button";
import { heroSection } from "../constraints/constraint";
import {  Github, Linkedin, Mail, Shield, Key, Terminal } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const getIconComponent = (name) => {
    switch (name.toLowerCase()) {
      case 'linkedin':
        return <Linkedin size={28} className="text-cyber-secondary hover:text-cyber-primary transition-colors" />;
      case 'github':
        return <Github size={28} className="text-cyber-secondary hover:text-cyber-primary transition-colors" />;
      case 'email':
        return <Mail size={28} className="text-cyber-secondary hover:text-cyber-primary transition-colors" />;
      default:
        return null;
    }
  };

  return (
    <div className="contain mt-[6rem] md:mt-[8rem] flex flex-col md:flex-row items-center justify-center md:gap-8 md:justify-between min-h-[70vh]" id="home">
      {/* Left section - Text & social icons */}
      <motion.div 
        className="flex flex-col items-center md:items-start text-center md:text-left mb-10 md:mb-0 md:w-3/5 z-10"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Button className="mb-6 text-sm md:text-lg select-none text-cyber-primary border-cyber-primary/50 pointer-events-none" swit={true}>
          {heroSection.caption}
        </Button>
        
        <motion.h1 
          className="text-cyber-white font-bold font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 select-none leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {heroSection.title}
        </motion.h1>
        
        <motion.div 
          className="text-cyber-secondary flex mb-8 text-lg sm:text-xl md:text-2xl select-none max-w-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {heroSection.subtitle}
        </motion.div>
        
        <motion.div 
          className="flex items-center gap-6 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {heroSection.icons.map((icon) => (
            <motion.div 
              key={icon.id}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <a 
                href={icon.url} 
                className="p-2.5 rounded-full bg-cyber-accent/10 border border-cyber-accent/20 hover:border-cyber-primary/50 hover:bg-cyber-primary/5 transition-all flex items-center justify-center"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={icon.alt}
              >
                {getIconComponent(icon.alt)}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Right section - Hero visual */}
      <motion.div 
        className="relative flex items-center justify-center md:w-2/5"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.div 
          className="bg-cyber-primary/10 absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] rounded-full blur-3xl -top-3 
            shadow-lg shadow-cyber-primary/10
            md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        
        <div className="mx-auto z-10 md:mx-0 relative">
          <Terminal className="w-[200px] h-[180px] sm:w-[250px] sm:h-[250px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] text-cyber-primary/40"/>
        </div>
        
        {/* Floating icons */}
        <motion.div 
          className="absolute z-10 -left-4 sm:-left-8 bottom-24 bg-cyber-bg border border-cyber-accent/50 rounded-full flex justify-center items-center p-2.5 shadow-lg shadow-cyber-bg"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <Shield className="text-cyber-primary w-[28px] h-[28px] sm:w-[32px] sm:h-[32px]" strokeWidth={1.5} />
        </motion.div>
        
        <motion.div 
          className="absolute z-10 right-0 sm:-right-4 top-12 bg-cyber-bg border border-cyber-accent/50 rounded-full flex justify-center items-center p-2.5 shadow-lg shadow-cyber-bg"
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
        >
          <Key className="text-cyber-primary w-[28px] h-[28px] sm:w-[32px] sm:h-[32px]" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;