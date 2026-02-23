import { useState, useEffect } from "react";
import Button from "./Button";
import ProjectModal from "./ProjectModal";
import { motion } from "framer-motion";
import { FileText, Shield, UserCheck, Trophy } from "lucide-react";
import { writeups as hardcodedData } from "../constraints/constraint";

const Writeups = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [projects, setProjects] = useState(hardcodedData.projects || []);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          // Merge hardcoded with backend data, prioritizing backend for duplicates
          const merged = [...data];
          hardcodedData.projects.forEach(hp => {
            if (!merged.find(p => p.title === hp.title)) {
              merged.push(hp);
            }
          });
          setProjects(merged);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching projects:', err);
        // We already have hardcoded data in state, so just stop loading
        setLoading(false);
      });
  }, []);

  const openProject = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const categories = [
    { id: "all", name: "All Projects", icon: <FileText size={18} /> },
    { id: "Defensive Thinking", name: "Defensive Thinking", icon: <Shield size={18} /> },
    { id: "Practitioner Mindset", name: "Practitioner Mindset", icon: <UserCheck size={18} /> },
    { id: "CTF Write-ups", name: "CTF Write-ups", icon: <Trophy size={18} /> },
  ];

  const filteredWriteups = projects.filter(p => {
    if (activeFilter === "all") return true;
    return p.category?.trim().toLowerCase() === activeFilter.trim().toLowerCase();
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyber-primary"></div>
      </div>
    );
  }

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
          <FileText size={20}/> Projects & Write-ups
        </Button>
        <h1 className="head text-center font-heading text-3xl text-cyber-white">Cyber Portfolio Projects</h1>
        <p className="text-cyber-secondary text-center max-w-2xl">
          Strategic projects designed to prove technical competence and analytical reasoning for security roles.
        </p>
      </motion.div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <motion.div
            key={cat.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => setActiveFilter(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border transition-all
                ${activeFilter === cat.id
                  ? "bg-cyber-primary text-cyber-bg border-cyber-primary shadow-[0_0_15px_rgba(100,255,218,0.4)]"
                  : "border-cyber-accent/30 text-cyber-secondary hover:border-cyber-primary/50 hover:bg-cyber-primary/5"
                }`}
            >
              {cat.icon}
              {cat.name}
            </button>
          </motion.div>
        ))}
      </div>

      {/* Write-ups Grid */}
      <motion.div 
        key={activeFilter} // Force re-mount on filter change to restart stagger animations
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1 }}
      >
        {filteredWriteups.length > 0 ? (
          filteredWriteups.map((project) => (
            <motion.div
              key={project.id || project.title}
              className="bg-cyber-accent/10 border-2 border-cyber-accent/20 rounded-lg p-5
                         flex flex-col justify-between hover:border-cyber-primary/50
                         transition-all duration-300 group relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(100, 255, 218, 0.1)' }}
            >
              {/* Scanline effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-primary/5 to-transparent -translate-y-full group-hover:animate-scanline pointer-events-none" />

              <div>
                {project.img && (
                  <div className="w-full h-40 mb-5 overflow-hidden rounded-md bg-cyber-bg/50 border border-cyber-accent/20">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[10px] uppercase tracking-widest text-cyber-primary px-2 py-0.5 border border-cyber-primary/30 rounded bg-cyber-primary/5">
                    {project.category}
                  </span>
                  {project.type && (
                    <span className="text-[10px] uppercase tracking-widest text-yellow-500 px-2 py-0.5 border border-yellow-500/30 rounded bg-yellow-500/5">
                      {project.type}
                    </span>
                  )}
                </div>
                <h2 className="font-heading text-cyber-white font-bold mb-3 text-xl group-hover:text-cyber-primary transition-colors">
                  {project.title}
                </h2>
                <p className="text-cyber-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex gap-2 flex-wrap mb-6">
                  {project.tags.map(tag => (
                      <span key={tag} className="bg-cyber-bg border border-cyber-accent/30 text-cyber-secondary text-[10px] font-mono py-1 px-2 rounded group-hover:border-cyber-primary/30 group-hover:text-cyber-primary/70 transition-colors">
                          #{tag}
                      </span>
                  ))}
                </div>
              </div>
              
              <div className="relative pt-2">
                  {project.url && !project.details ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center bg-cyber-accent/20 text-cyber-primary py-2.5 rounded border border-cyber-primary/20
                                 hover:bg-cyber-primary hover:text-cyber-bg transition-all duration-300 block font-bold text-sm"
                    >
                      READ_FULL_WRITEUP
                    </a>
                  ) : (
                    <button
                      onClick={() => openProject(project)}
                      className="w-full text-center bg-cyber-primary/20 text-cyber-primary py-2.5 rounded border border-cyber-primary/30
                                 hover:bg-cyber-primary hover:text-cyber-bg transition-all duration-300 block font-bold text-sm shadow-[0_0_10px_rgba(100,255,218,0.1)]"
                    >
                      VIEW_TECHNICAL_BREAKDOWN
                    </button>
                  )}
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center">
            <p className="text-cyber-secondary text-lg italic">No write-ups found matching this category.</p>
            <button 
              onClick={() => setActiveFilter('all')}
              className="mt-4 text-cyber-primary underline hover:text-white transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}
      </motion.div>
      
      <div className="flex justify-center mt-16">
        <Button 
          as="a" 
          href="https://tryhackme.com/p/vimrichy"
          target="_blank"
          swit={true}
          className="flex items-center gap-3 py-3 px-6 shadow-[0_0_20px_rgba(100,255,218,0.1)] hover:shadow-[0_0_30px_rgba(100,255,218,0.2)]"
        >
          <img src="/tryhackme_logo_full.svg" alt="TryHackMe" className="w-6 h-6"/>
          EXPLORE_TRYHACKME_ACTIVITY
        </Button>
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default Writeups;
