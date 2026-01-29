import { useState } from "react";
import { writeups } from "../constraints/constraint";
import Button from "./Button";
import { motion } from "framer-motion";
import { FileText, Github } from "lucide-react";

const Writeups = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const allTags = ["all", ...Array.from(new Set(writeups.projects.flatMap(p => p.tags)))];

  const filteredWriteups = activeFilter === "all"
    ? writeups.projects
    : writeups.projects.filter(p => p.tags.includes(activeFilter));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <div id="writeups" className="contain pt-16 mb-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-2 mb-8"
      >
        <Button swit={true} className="px-4 mb-4 flex items-center gap-2">
          <FileText size={20}/> {writeups.icon}
        </Button>
        <h1 className="head text-center">{writeups.title}</h1>
      </motion.div>

      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {allTags.map((tag, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              as="button"
              onClick={() => setActiveFilter(tag)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium border
                ${activeFilter === tag
                  ? "bg-cyber-primary text-cyber-bg border-cyber-primary"
                  : "border-cyber-accent text-cyber-secondary hover:bg-cyber-accent/30 hover:text-cyber-white"
                }`}
            >
              {tag}
            </Button>
          </motion.div>
        ))}
      </div>

      {/* Write-ups Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {filteredWriteups.map((project) => (
          <motion.div
            key={project.id}
            className="bg-cyber-accent/10 border-2 border-cyber-accent/20 rounded-lg p-4
                       flex flex-col justify-between hover:border-cyber-primary/50
                       transition-all duration-300 group"
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(100, 255, 218, 0.1)' }}
          >
            <div>
              {project.img && (
                <div className="w-full h-40 mb-4 overflow-hidden rounded-md bg-cyber-bg/50">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-contain p-2"
                  />
                </div>
              )}
              <h2 className="font-heading text-cyber-white font-semibold mb-2 text-lg truncate">
                {project.title}
              </h2>
              <p className="text-cyber-secondary text-sm line-clamp-3 mb-3">
                {project.description}
              </p>
              <div className="flex gap-2 flex-wrap mb-4">
                {project.tags.map(tag => (
                    <span key={tag} className="bg-cyber-secondary/10 text-cyber-secondary text-xs font-mono py-1 px-2 rounded">
                        {tag}
                    </span>
                ))}
              </div>
            </div>
            <div className="relative rounded-md mt-4">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-cyber-accent/50 text-cyber-primary py-2 rounded
                             hover:bg-cyber-accent transition-colors duration-300 block"
                >
                  Read More
                </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="flex justify-center mt-12">
        <Button 
          as="a" 
          href={writeups.moreUrl}
          target="_blank"
          swit={true}
          className="flex items-center gap-2 py-2 px-4"
        >
          <img src="/tryhackme_logo_full.svg" alt="TryHackMe" className="w-5 h-5"/>
          {writeups.more}
        </Button>
      </div>
    </div>
  );
};

export default Writeups;