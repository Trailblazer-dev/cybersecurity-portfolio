import { AlignJustify, X, Shield } from "lucide-react";
import { header } from "../constraints/constraint";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = header.map(item => document.getElementById(item.id));
      let currentSectionId = 'home';
      for (const section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSectionId = section.id;
            break;
          }
        }
      }
      setActiveSection(currentSectionId);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClose = useCallback(() => setShowMenu(false), []);

  useEffect(() => {
    if (!showMenu) return;
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        handleClose();
      }
    };
    const handleEscape = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [showMenu, handleClose]);

  const mobileMenuVariants = {
    closed: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeInOut" } },
    open: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut", staggerChildren: 0.1 } }
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${scrolled ? "bg-cyber-bg/80 backdrop-blur-lg shadow-lg shadow-cyber-accent/10" : "bg-transparent"}`}>
      <motion.div 
        initial={{ y: -25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex w-[90%] max-w-7xl px-3 justify-between items-center py-3"
      >
        <div className="md:w-1/5">
          <a href="#home" className="flex items-center gap-2 group" aria-label="Logo - Back to top">
            <Shield className="text-cyber-primary transition-all duration-300 group-hover:animate-pulse" size={32}/>
            <span className="text-cyber-white font-heading font-bold text-lg opacity-0 md:opacity-100 group-hover:text-cyber-primary transition-all duration-300">R.K. Security</span>
          </a>
        </div>
        
        <AnimatePresence>
          {showMenu && <motion.div className="fixed inset-0 bg-black/50 md:hidden z-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={handleClose} />}
        </AnimatePresence>
        
        <AnimatePresence>
          {(showMenu || window.innerWidth >= 768) && (
            <motion.div
              ref={menuRef}
              className="md:w-4/5 fixed top-20 inset-x-4 bg-cyber-accent/90 border border-cyber-primary/20 rounded-xl z-40 shadow-xl py-5 md:static md:flex md:py-0 md:bg-transparent md:border-0 md:shadow-none"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <ul className="flex flex-col md:flex-row items-center md:justify-end md:w-full gap-4 md:gap-8 font-heading">
                {header.map((item) => (
                  <motion.li key={item.id} variants={menuItemVariants}>
                    <a
                      href={`#${item.id}`}
                      className={`block px-6 py-3 md:px-0 md:py-0 transition-colors duration-300 relative group
                        ${activeSection === item.id ? "text-cyber-primary" : "text-cyber-white hover:text-cyber-primary"} text-lg md:text-base`}
                      onClick={handleClose}
                      aria-current={activeSection === item.id ? "page" : undefined}
                    >
                      {item.title}
                      {activeSection === item.id && (
                        <motion.span
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyber-primary rounded-full" 
                          layoutId="activeSection"
                          transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        />
                      )}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="flex items-center gap-4 z-30">
          <motion.button
            className="text-cyber-white hover:text-cyber-primary md:hidden p-2"
            onClick={() => setShowMenu(!showMenu)}
            aria-expanded={showMenu}
            aria-label={showMenu ? "Close menu" : "Open menu"}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {showMenu ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.3 }}>
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.3 }}>
                  <AlignJustify className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;