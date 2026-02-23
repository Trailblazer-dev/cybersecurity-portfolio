import { useState } from 'react';
import { Shield, Search, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { motion } from 'framer-motion';

const LogAnalyzer = () => {
  const [log, setLog] = useState('');
  const [results, setResults] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);

  const analyzeLog = async () => {
    if (!log.trim()) return;
    setAnalyzing(true);
    try {
      const response = await fetch('http://localhost:5000/api/analyze-log', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ log }),
      });
      const data = await response.json();
      setResults(data.results);
    } catch (error) {
      console.error('Error analyzing log:', error);
    } finally {
      setAnalyzing(false);
    }
  };

  const sampleLogs = [
    "Feb 18 12:34:56 server1 sshd[1234]: Failed password for root from 192.168.1.100 port 54321 ssh2",
    "SELECT * FROM users WHERE username = 'admin' AND password = '' OR '1'='1' --';",
    '127.0.0.1 - - [18/Feb/2026:10:00:00 +0000] "GET /admin HTTP/1.1" 404 153',
  ];

  return (
    <section id="analyzer" className="contain py-20">
      <div className="flex flex-col items-center mb-12">
        <div className="bg-cyber-primary/10 p-3 rounded-full mb-4">
          <Shield className="text-cyber-primary" size={32} />
        </div>
        <h2 className="head text-center">Defensive Thinking: Log Analyzer</h2>
        <p className="text-cyber-secondary text-center max-w-2xl mt-4">
          Test my defensive reasoning. Paste a server log or query below to see how a detection rule might interpret it.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div className="bg-cyber-bg border border-cyber-accent/30 rounded-lg p-6 shadow-xl">
            <label className="block text-cyber-white font-mono mb-4 flex items-center gap-2">
              <Search size={18} className="text-cyber-primary" />
              INPUT_LOG_STREAM
            </label>
            <textarea
              className="w-full h-48 bg-black/50 border border-cyber-accent/20 rounded p-4 text-green-400 font-mono text-sm focus:border-cyber-primary outline-none transition-colors"
              placeholder="Paste logs here (e.g., auth.log, access.log, SQL queries)..."
              value={log}
              onChange={(e) => setLog(e.target.value)}
            ></textarea>
            <div className="flex flex-wrap gap-2 mt-4">
              {sampleLogs.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setLog(s)}
                  className="text-[10px] bg-cyber-accent/10 hover:bg-cyber-accent/30 text-cyber-secondary px-2 py-1 rounded border border-cyber-accent/20 transition-colors"
                >
                  Sample {i + 1}
                </button>
              ))}
            </div>
            <button
              onClick={analyzeLog}
              disabled={analyzing || !log.trim()}
              className={`w-full mt-6 py-3 rounded font-bold flex items-center justify-center gap-2 transition-all
                ${analyzing || !log.trim() 
                  ? 'bg-cyber-accent/20 text-cyber-secondary cursor-not-allowed' 
                  : 'bg-cyber-primary text-cyber-bg hover:scale-[1.02] shadow-[0_0_15px_rgba(100,255,218,0.3)]'}`}
            >
              {analyzing ? 'ANALYZING...' : 'RUN DETECTION RULES'}
            </button>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="bg-black/40 border border-cyber-accent/30 rounded-lg p-6 flex-grow flex flex-col min-h-[300px]">
            <h3 className="text-cyber-white font-mono mb-6 flex items-center gap-2">
              <Info size={18} className="text-cyber-primary" />
              ANALYSIS_RESULTS
            </h3>
            
            {!results && !analyzing && (
              <div className="flex-grow flex flex-col items-center justify-center opacity-40 text-cyber-secondary italic">
                <Search size={48} className="mb-4" />
                <p>Waiting for input...</p>
              </div>
            )}

            {analyzing && (
              <div className="flex-grow flex flex-col items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyber-primary"></div>
                <p className="mt-4 text-cyber-primary font-mono animate-pulse">Scanning for threats...</p>
              </div>
            )}

            {results && !analyzing && (
              <div className="space-y-4">
                {results.map((res, i) => (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={i}
                    className={`p-4 rounded border-l-4 flex gap-4 ${
                      res.severity === 'Critical' ? 'bg-red-500/10 border-red-500' :
                      res.severity === 'High' ? 'bg-orange-500/10 border-orange-500' :
                      res.severity === 'Low' ? 'bg-yellow-500/10 border-yellow-500' :
                      'bg-blue-500/10 border-blue-500'
                    }`}
                  >
                    <div className="mt-1">
                      {res.severity === 'Critical' || res.severity === 'High' ? (
                        <AlertTriangle className={res.severity === 'Critical' ? 'text-red-500' : 'text-orange-500'} />
                      ) : (
                        <CheckCircle className="text-blue-500" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${
                          res.severity === 'Critical' ? 'bg-red-500 text-white' :
                          res.severity === 'High' ? 'bg-orange-500 text-white' :
                          'bg-blue-500 text-white'
                        }`}>
                          {res.severity}
                        </span>
                        <h4 className="text-cyber-white font-semibold">{res.message}</h4>
                      </div>
                      <p className="text-cyber-secondary text-sm">{res.recommendation}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogAnalyzer;
