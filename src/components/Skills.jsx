
import { skills } from "../constraints/constraint";
import Button from "./Button";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const Skills = () => {
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { type: "spring", stiffness: 260, damping: 20 }
    }
  };

  return (
    <div className="contain py-16" id="skills">
      <motion.div 
        className="flex flex-col items-center gap-2 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Button swit={true} className="px-4 mb-4 select-none flex items-center gap-2">
          <Terminal size={20} /> {skills.icon}
        </Button>
        <h1 className="head text-center">
          {skills.title}
        </h1>
        <p className="text-cyber-secondary text-lg text-center mt-2">
          {skills.subtitle}
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.skillset.map((skill, index) => (
          <motion.div 
            key={index} 
            className="flex flex-col items-center justify-center gap-2 group p-4 
                       border border-cyber-accent/30 rounded-lg bg-cyber-accent/10
                       hover:bg-cyber-accent/20 hover:-translate-y-1 transition-all duration-300"
            variants={itemVariant}
          >
            <p className="font-heading text-cyber-white text-md text-center">{skill.name}</p>
            <p className="text-cyber-primary text-xs font-mono">{skill.category}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
