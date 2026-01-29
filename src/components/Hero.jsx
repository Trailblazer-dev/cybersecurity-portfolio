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
    <div className="contain mt-[6rem] flex flex-col md:flex-row items-center justify-center md:gap-4 md:justify-between" id="home">
      {/* Left section - Text & social icons */}
      <motion.div 
        className="flex flex-col flex-wrap mb-4 md:w-3/5 md:justify-start z-10"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Button className="mb-4 md:text-lg select-none text-cyber-primary border-cyber-primary/50" swit={true}>
          {heroSection.caption}
        </Button>
        
        <motion.h1 
          className="text-cyber-white font-bold font-heading text-4xl md:text-6xl md:mb-4 select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {heroSection.title}
        </motion.h1>
        
        <motion.div 
          className="text-cyber-secondary flex mb-4 md:text-lg select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {heroSection.subtitle}
        </motion.div>
        
        <motion.div 
          className="flex items-center gap-4 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {heroSection.icons.map((icon) => (
            <motion.div 
              key={icon.id}
              whileHover={{ scale: 1.2, y: -2 }}
            >
              <a 
                href={icon.url} 
                className="p-2 rounded-full hover:bg-cyber-primary/10 transition-all flex items-center justify-center"
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
        className="relative flex items-center justify-center mb-6 md:w-2/5 md:mt-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.div 
          className="bg-cyber-primary/10 absolute w-[200px] h-[200px] rounded-full blur-2xl -top-3 
            shadow-lg shadow-cyber-primary/10
            md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]"
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        
        <div className="mx-auto z-10 md:mx-0 relative">
          <Terminal className="w-[180px] h-[180px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] text-cyber-primary/50"/>
        </div>
        
        {/* Floating icons */}
        <motion.div 
          className="absolute z-10 -left-6 bottom-24 bg-cyber-bg border border-cyber-accent/50 rounded-full flex justify-center items-center p-2"
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <Shield className="text-cyber-primary w-[24px] h-[24px] md:w-[30px] md:h-[30px]" strokeWidth={1.5} />
        </motion.div>
        
        <motion.div 
          className="absolute z-10 right-0 top-8 bg-cyber-bg border border-cyber-accent/50 rounded-full flex justify-center items-center p-2"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
        >
          <Key className="text-cyber-primary w-[24px] h-[24px] md:w-[30px] md:h-[30px]" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;