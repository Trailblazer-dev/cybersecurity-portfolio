
import { footer } from "../constraints/constraint";
import { motion } from "framer-motion";
import { Github, Linkedin, Terminal } from "lucide-react";

const Footer = () => {
  const getIconComponent = (name) => {
    switch (name.toLowerCase()) {
      case 'linkedin':
        return <Linkedin size={20} className="text-cyber-secondary hover:text-cyber-primary transition-colors" />;
      case 'github':
        return <Github size={20} className="text-cyber-secondary hover:text-cyber-primary transition-colors" />;
      default:
        return null;
    }
  };

  return (
    <motion.footer 
      className="w-full border-t border-cyber-accent/30 py-8 mt-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
        {/* Left side - Copyright and tagline */}
        <motion.div
          className="flex flex-col items-center sm:items-start"
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-cyber-secondary select-none text-sm sm:text-base flex items-center">
            {footer.copyright}
            <Terminal size={14} className="text-cyber-primary ml-2" />
          </p>
          <p className="text-cyber-accent text-xs sm:text-sm mt-1">
            Aspiring Cybersecurity Analyst
          </p>
        </motion.div>
        
        {/* Right side - Social links */}
        <div className="flex items-center gap-4">
          {footer.socials.map((social) => (
            <motion.a 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              key={social.id}
              className="p-2 bg-cyber-accent/20 hover:bg-cyber-accent/50 rounded-full transition-colors"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.alt}
              title={social.alt}
            >
              {getIconComponent(social.alt)}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
