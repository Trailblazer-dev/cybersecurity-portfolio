
import { about } from "../constraints/constraint";
import Button from "./Button";
import { useMediaQuery } from '@mui/material';
import { motion } from "framer-motion";
import { User } from "lucide-react";

const About = () => {
    const isDesktop = useMediaQuery('(min-width: 768px)');
    
    return (
        <div id="about" className="contain flex flex-col justify-center items-center gap-8 py-16 md:flex-row lg:gap-12">
            {/* Profile Image */}
            <motion.div 
                className="flex justify-center items-center md:w-1/2"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="relative"
                >
                    <div className="absolute -inset-2 bg-gradient-to-tr from-cyber-primary/20 to-cyber-accent/20 rounded-full blur-lg opacity-70" />
                    
                    <img 
                        src={about.img} 
                        alt="Rich Kariuki profile" 
                        className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-full 
                        border-2 border-cyber-primary/30 shadow-lg shadow-cyber-primary/10 
                        relative z-10 object-cover bg-cyber-accent"
                    />
                </motion.div>
            </motion.div>
            
            {/* About Text Content */}
            <motion.div 
                className="flex flex-col gap-5 md:w-1/2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div>
                    <Button swit={true} className="px-5 py-2.5 font-bold select-none mb-4 flex items-center gap-2">
                        <User size={20} /> About Me
                    </Button>
                    <motion.h1 
                        className="head select-none mb-6"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                        {about.name}
                    </motion.h1>
                </div>
                
                <div className="flex flex-col gap-4 text-cyber-secondary text-[17px] md:text-lg select-none">
                    {(isDesktop ? about.desktop : about.mobile).map((item, index) => (
                        <motion.p 
                            key={index} 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * index, duration: 0.5 }}
                        >
                            {item.desc || item.text}
                        </motion.p>
                    ))}
                </div>
                
                {/* Skill badges */}
                <div className="flex flex-wrap gap-2 mt-4">
                    {['Ethical Hacking', 'Penetration Testing', 'TryHackMe', 'Scripting'].map((skill, index) => (
                        <motion.span
                            key={index}
                            className="bg-cyber-primary/10 text-cyber-primary/80 text-sm py-1 px-3 rounded-full border border-cyber-primary/20"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7 + (0.1 * index), duration: 0.3 }}
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(100, 255, 218, 0.2)' }}
                        >
                            {skill}
                        </motion.span>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default About;
