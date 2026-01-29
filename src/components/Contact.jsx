import { contact } from "../constraints/constraint";
import Button from "./Button";
import { useState } from "react";
import { Check, Copy, Mail, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
    const [copySuccess, setCopySuccess] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(contact.email.text);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
    };

    return (
        <div id="contact" className="contain flex flex-col justify-center items-center gap-6 py-16">
            <div className="mb-6 flex flex-col justify-center items-center text-center">
                <Button swit={true} className="px-6 py-2 mb-4 flex items-center gap-2">
                    <Mail size={20} /> {contact.icon}
                </Button>
                <motion.h1 
                    className="head select-none"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    {contact.title}
                </motion.h1>
            </div>
            
            <div className="flex flex-col gap-6 justify-center items-center sm:flex-row sm:gap-8 my-6">
                {/* WhatsApp button */}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                        as="a"
                        href="https://wa.me/+254111250188?text=Hello%20I%20would%20like%20to%20contact%20you"
                        target="_blank"
                        swit={true}
                        className="flex items-center justify-center gap-3 text-lg
                                   bg-cyber-accent/30 border border-cyber-accent
                                   hover:bg-cyber-accent/50 text-cyber-white
                                   px-6 py-3 rounded-lg shadow-lg shadow-cyber-accent/10"
                    >
                        <MessageCircle />
                        {contact.whatapp}
                    </Button>
                </motion.div>
                
                {/* Email container */}
                <div className="flex items-center gap-2 bg-cyber-accent/20 
                                border border-cyber-accent/50 rounded-lg p-3 group">
                    <Mail className="text-cyber-secondary w-6 h-6" />
                    <a
                        href={`mailto:${contact.email.text}`}
                        className="text-cyber-secondary hover:text-cyber-primary transition-colors"
                    >
                        {contact.email.text}
                    </a>
                    <motion.button
                        onClick={copyToClipboard}
                        className="ml-2 cursor-pointer p-2 rounded-full hover:bg-cyber-primary/10 relative"
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                        title="Copy email address"
                        aria-label="Copy email address"
                    >
                        <AnimatePresence mode="wait">
                            {copySuccess ? (
                                <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                                    <Check className="h-5 w-5 text-cyber-primary" />
                                </motion.div>
                            ) : (
                                <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                                    <Copy className="h-5 w-5 text-cyber-secondary group-hover:text-cyber-primary" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default Contact;