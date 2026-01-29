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
    <header className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${scrolled ? "bg-cyber-bg/90 backdrop-blur-md shadow-lg shadow-cyber-accent/10" : "bg-transparent"}`}>
      <motion.div 
        initial={{ y: -25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex w-[92%] max-w-7xl justify-between items-center py-4"
      >
        <div className="flex-shrink-0">
          <a href="#home" className="flex items-center gap-2 group" aria-label="Logo - Back to top">
            <Shield className="text-cyber-primary transition-all duration-300 group-hover:animate-pulse" size={28}/>
            <span className="text-cyber-white font-heading font-bold text-base sm:text-lg group-hover:text-cyber-primary transition-all duration-300">R.K. Security</span>
          </a>
        </div>
        
        <AnimatePresence>
          {showMenu && (
            <motion.div 
              className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden z-20" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={handleClose} 
            />
          )}
        </AnimatePresence>
        
        <nav className="md:block hidden">
          <ul className="flex items-center gap-8 font-heading">
            {header.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`transition-colors duration-300 relative group py-2
                    ${activeSection === item.id ? "text-cyber-primary" : "text-cyber-white hover:text-cyber-primary"} text-base`}
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
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Content */}
        <AnimatePresence>
          {showMenu && (
            <motion.div
              ref={menuRef}
              className="md:hidden fixed top-0 right-0 h-screen w-[70%] max-w-[300px] bg-cyber-bg border-l border-cyber-accent/30 z-40 shadow-2xl p-10 flex flex-col"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="flex justify-end mb-8">
                <button onClick={handleClose} className="text-cyber-white p-2">
                  <X size={28} />
                </button>
              </div>
              <ul className="flex flex-col gap-6 font-heading">
                {header.map((item) => (
                  <motion.li key={item.id} variants={menuItemVariants}>
                    <a
                      href={`#${item.id}`}
                      className={`block text-xl transition-colors duration-300 
                        ${activeSection === item.id ? "text-cyber-primary" : "text-cyber-white hover:text-cyber-primary"}`}
                      onClick={handleClose}
                    >
                      {item.title}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="md:hidden flex items-center gap-4 z-30">
          <motion.button
            className="text-cyber-white hover:text-cyber-primary p-2 bg-cyber-accent/20 rounded-md border border-cyber-accent/30"
            onClick={() => setShowMenu(!showMenu)}
            aria-expanded={showMenu}
            aria-label={showMenu ? "Close menu" : "Open menu"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AlignJustify className="h-6 w-6" />
          </motion.button>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;