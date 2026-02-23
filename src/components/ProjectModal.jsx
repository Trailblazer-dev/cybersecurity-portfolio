import { motion, AnimatePresence } from 'framer-motion';
import { X, Activity, Target, AlertCircle, CheckCircle, Info, ChevronRight, Zap } from 'lucide-react';
import Button from './Button';
import PropTypes from 'prop-types';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  const renderDetails = () => {
    const { type, details } = project;
    if (!details) return null;

    switch (type) {
      case 'Incident Report':
        return (
          <div className="space-y-6">
            <DetailSection icon={<Activity className="text-blue-400" size={20} />} title="SCENARIO" content={details.scenario} />
            <DetailSection icon={<Target className="text-orange-400" size={20} />} title="ANALYSIS" content={details.analysis} />
            <DetailSection icon={<AlertCircle className="text-red-400" size={20} />} title="ACTION TAKEN" content={details.action} />
            <DetailSection icon={<CheckCircle className="text-green-400" size={20} />} title="OUTCOME" content={details.outcome} />
          </div>
        );
      case 'Use Case':
        return (
          <div className="space-y-6">
            <DetailSection icon={<Info className="text-blue-400" size={20} />} title="RATIONALE" content={details.rationale} />
            <div className="bg-black/60 p-4 rounded-lg border border-cyber-accent/20">
              <h4 className="text-cyber-primary font-mono text-sm mb-2 flex items-center gap-2">
                DETECTION_RULE
              </h4>
              <pre className="text-green-400 font-mono text-xs overflow-x-auto p-2">
                {details.rule}
              </pre>
            </div>
            <DetailSection icon={<Zap className="text-yellow-400" size={20} />} title="IMPLEMENTATION" content={details.implementation} />
          </div>
        );
      case 'Threat Breakdown':
        return (
          <div className="space-y-6">
            <DetailSection icon={<Info className="text-blue-400" size={20} />} title="SUMMARY" content={details.summary} />
            <div className="space-y-3">
              <h4 className="text-cyber-primary font-mono text-sm uppercase tracking-wider">Actionable Steps</h4>
              {details.actions?.map((action, i) => (
                <div key={i} className="flex gap-3 items-start bg-cyber-accent/5 p-3 rounded border border-cyber-accent/10">
                  <ChevronRight size={18} className="text-cyber-primary shrink-0 mt-0.5" />
                  <p className="text-cyber-secondary text-sm">{action}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'Attack Path Walkthrough':
        return (
          <div className="space-y-6">
            <h4 className="text-cyber-primary font-mono text-sm uppercase tracking-wider mb-4">Step-by-Step Walkthrough</h4>
            <div className="space-y-4">
               {['step_1', 'step_2', 'step_3'].map((step, i) => details[step] && (
                 <div key={step} className="relative pl-8 pb-4 border-l-2 border-cyber-primary/20 last:border-0 last:pb-0">
                   <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-cyber-bg border-2 border-cyber-primary flex items-center justify-center text-[10px] text-cyber-primary font-bold">
                     {i + 1}
                   </div>
                   <p className="text-cyber-secondary text-sm">{details[step]}</p>
                 </div>
               ))}
            </div>
          </div>
        );
      case 'Cloud Investigation':
        return (
          <div className="space-y-6">
            <DetailSection icon={<SearchIcon size={20} className="text-blue-400" />} title="DISCOVERY" content={details.discovery} />
            <DetailSection icon={<AlertCircle className="text-red-400" size={20} />} title="SECURITY IMPACT" content={details.impact} />
            <DetailSection icon={<CheckCircle className="text-green-400" size={20} />} title="RESOLUTION" content={details.resolution} />
          </div>
        );
      case 'Improvement Proposal':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-red-500/5 border border-red-500/20 p-4 rounded-lg">
                <h4 className="text-red-400 font-mono text-xs mb-2 uppercase">Current State</h4>
                <p className="text-cyber-secondary text-sm">{details.current_state}</p>
              </div>
              <div className="bg-green-500/5 border border-green-500/20 p-4 rounded-lg">
                <h4 className="text-green-400 font-mono text-xs mb-2 uppercase">Proposed State</h4>
                <p className="text-cyber-secondary text-sm">{details.proposed_state}</p>
              </div>
            </div>
            <DetailSection icon={<Zap className="text-cyber-primary" size={20} />} title="KEY BENEFITS" content={details.benefit} />
          </div>
        );
      default:
        return (
          <div className="bg-cyber-accent/5 p-4 rounded-lg border border-cyber-accent/10">
            <pre className="text-cyber-secondary text-sm whitespace-pre-wrap font-mono">
              {JSON.stringify(details, null, 2)}
            </pre>
          </div>
        );
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-cyber-bg border border-cyber-primary/30 rounded-xl shadow-[0_0_50px_rgba(100,255,218,0.15)] flex flex-col"
          >
            <div className="sticky top-0 bg-cyber-bg/95 backdrop-blur-sm border-b border-cyber-accent/20 p-6 z-10 flex justify-between items-start">
              <div>
                <div className="flex gap-2 mb-2">
                  <span className="text-[10px] uppercase tracking-widest text-cyber-primary px-2 py-0.5 border border-cyber-primary/30 rounded bg-cyber-primary/5">
                    {project.category}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-yellow-500 px-2 py-0.5 border border-yellow-500/30 rounded bg-yellow-500/5">
                    {project.type}
                  </span>
                </div>
                <h2 className="text-2xl font-heading font-bold text-cyber-white">{project.title}</h2>
              </div>
              <button 
                onClick={onClose}
                className="p-2 text-cyber-secondary hover:text-cyber-primary transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-8">
              <p className="text-cyber-secondary mb-8 text-lg border-l-4 border-cyber-primary pl-4 py-1 italic bg-cyber-primary/5">
                &ldquo;{project.description}&rdquo;
              </p>

              {renderDetails()}
            </div>

            <div className="p-6 border-t border-cyber-accent/20 flex justify-end">
              <Button onClick={onClose} swit={true}>
                CLOSE_SESSION
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

ProjectModal.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    category: PropTypes.string,
    type: PropTypes.string,
    description: PropTypes.string,
    details: PropTypes.object
  }),
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

const DetailSection = ({ icon, title, content }) => (
  <div className="space-y-2">
    <div className="flex items-center gap-2">
      {icon}
      <h4 className="text-cyber-primary font-mono text-sm uppercase tracking-wider">{title}</h4>
    </div>
    <p className="text-cyber-secondary leading-relaxed pl-7">{content}</p>
  </div>
);

DetailSection.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string.isRequired,
  content: PropTypes.string
};

const SearchIcon = ({ size, className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.3-4.3"></path>
  </svg>
);

SearchIcon.propTypes = {
  size: PropTypes.number,
  className: PropTypes.string
};

export default ProjectModal;
