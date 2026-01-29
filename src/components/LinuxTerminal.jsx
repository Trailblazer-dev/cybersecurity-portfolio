import { useState, useEffect, useRef } from 'react';
import { header, heroSection, about, skills, writeups, contact, footer } from '../constraints/constraint';
import { motion } from 'framer-motion';

const LinuxTerminal = ({ onSwitchMode }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([
    { type: 'info', content: `Welcome to ${heroSection.title}'s Terminal v1.0.0` },
    { type: 'info', content: 'Type "help" to see available commands.' },
    { type: 'info', content: 'Type "gui" to switch to Window UI mode.' },
  ]);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [output]);

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const newOutput = [...output, { type: 'command', content: `visitor@portfolio:~$ ${cmd}` }];

    switch (trimmedCmd) {
      case 'help':
        newOutput.push({
          type: 'response',
          content: [
            'Available commands:',
            '  about     - Display information about me',
            '  skills    - List technical skills',
            '  writeups  - Show CTF write-ups and projects',
            '  contact   - Display contact information',
            '  gui       - Switch to Window (GUI) mode',
            '  clear     - Clear the terminal screen',
            '  help      - Show this help message'
          ]
        });
        break;
      case 'about':
        newOutput.push({
          type: 'response',
          content: [
            `NAME: ${about.name}`,
            '',
            ...about.desktop.map(item => `> ${item.desc}`),
            '',
            `[Avatar]: ${about.img}`
          ]
        });
        break;
      case 'skills':
        newOutput.push({
          type: 'response',
          content: [
            `--- ${skills.title} ---`,
            skills.subtitle,
            '',
            ...skills.skillset.map(s => `[${s.category}] ${s.name}`)
          ]
        });
        break;
      case 'writeups':
        newOutput.push({
          type: 'response',
          content: [
            `--- ${writeups.title} ---`,
            '',
            ...writeups.projects.map(p => `* ${p.title}\n  ${p.description}\n  Tags: ${p.tags.join(', ')}\n  Link: ${p.url}\n`)
          ]
        });
        break;
      case 'contact':
        newOutput.push({
          type: 'response',
          content: [
            `--- ${contact.title} ---`,
            `Email: ${contact.email.text}`,
            `WhatsApp: ${contact.whatapp}`,
            '',
            'Socials:',
            ...footer.socials.map(s => `  ${s.alt}: ${s.url}`)
          ]
        });
        break;
      case 'gui':
        newOutput.push({ type: 'success', content: 'Switching to Window UI...' });
        setTimeout(onSwitchMode, 800);
        break;
      case 'clear':
        setOutput([]);
        return; 
      case '':
        break;
      default:
        newOutput.push({ type: 'error', content: `Command not found: ${trimmedCmd}. Type "help" for a list of commands.` });
    }

    setOutput(newOutput);
    setHistory([...history, cmd]);
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      if (history.length > 0) {
        const newIndex = historyIndex + 1;
        if (newIndex < history.length) {
          setHistoryIndex(newIndex);
          setInput(history[history.length - 1 - newIndex]);
        }
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-2 md:p-10 overflow-hidden text-sm md:text-base lg:text-lg" onClick={() => inputRef.current?.focus()}>
      <div className="max-w-4xl mx-auto border border-green-800 rounded-lg p-2 md:p-6 shadow-[0_0_20px_rgba(0,255,0,0.1)] min-h-[85vh] bg-black/90 flex flex-col">
        <div className="flex justify-between items-center border-b border-green-800 pb-2 mb-2 md:mb-4 opacity-70 flex-shrink-0">
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500"></div>
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-xs md:text-sm">root@portfolio:~</div>
        </div>

        <div className="space-y-1 md:space-y-2 flex-grow overflow-y-auto max-h-[75vh] md:max-h-[80vh] scrollbar-hide">
          {output.map((line, i) => (
            <div key={i} className={`${line.type === 'error' ? 'text-red-500' : line.type === 'command' ? 'text-white mt-2 md:mt-4' : line.type === 'success' ? 'text-blue-400' : 'text-green-500'} break-words leading-relaxed`}>
              {Array.isArray(line.content) ? (
                line.content.map((l, idx) => <div key={idx} className="pl-2 md:pl-4">{l}</div>)
              ) : (
                line.content
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        <div className="flex items-center mt-2 md:mt-4 text-white flex-shrink-0">
          <span className="text-green-500 mr-2 flex-shrink-0 text-xs md:text-base">visitor@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="bg-transparent border-none outline-none flex-1 text-white placeholder-gray-600 min-w-0"
            autoFocus
            autoComplete="off"
            spellCheck="false"
          />
        </div>
      </div>
      
      {/* Matrix background effect hints */}
      <div className="fixed inset-0 pointer-events-none -z-10 opacity-10 bg-[url('https://media.giphy.com/media/U3qYN8S0j3bpK/giphy.gif')] bg-cover"></div>
    </div>
  );

};

export default LinuxTerminal;
