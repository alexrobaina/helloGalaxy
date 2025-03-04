'use client';
import { useRef, useState, useEffect } from 'react';

interface HistoryItem {
  prompt: string;
  command: string;
  isTyping?: boolean;
}

export const VintageTerminal = () => {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [hasShownWelcome, setHasShownWelcome] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const promptLabel = 'alex@my-machine:~$';

  // Auto scroll to bottom when history changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const welcomeMessage = [
    ' _____ _____ __    __    _____    _____ _____ __    _____ _____ _____ ',
    '|  |  |   __|  |  |  |  |     |  |   __|   __|  |  |  _  |   __|   __|',
    '|     |   __|  |__|  |__|  |  |  |   __|   __|  |__|     |__   |   __|',
    '|__|__|_____|_____|_____|_____|  |__|  |_____|_____|__|__|_____|_____|',
    '',
    '/_/_/_/_/ /_/_/_/_/ /_/_/ /_/_/',
    '',
    `Type 'help' for available commands...`,
  ];

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const command = currentInput.trim();

      // Add the current command with prompt to history
      setHistory(prev => [...prev, { prompt: promptLabel, command, isTyping: true }]);

      // Process command here if needed
      if (command === 'help') {
        setTimeout(() => {
          setHistory(prev => [
            ...prev,
            { prompt: '', command: 'Available commands:', isTyping: true },
            { prompt: '', command: '  help - Show this help message', isTyping: true },
          ]);
        }, 500);
      }

      setCurrentInput('');
    }
  };

  const handleTerminalClick = () => {
    textareaRef.current?.focus();

    if (!hasShownWelcome) {
      const showWelcomeMessage = async () => {
        for (const line of welcomeMessage) {
          await new Promise(resolve => setTimeout(resolve, 100));
          setHistory(prev => [...prev, { prompt: '', command: line, isTyping: true }]);
        }
      };
      showWelcomeMessage();
      setHasShownWelcome(true);
    }
  };

  return (
    <div
      ref={terminalRef}
      onClick={handleTerminalClick}
      className="mx-[10%] h-[500px] my-2 sm:my-8 bg-black text-green-500 font-mono p-2 sm:p-4 border-2 border-green-700 rounded-2xl shadow-[0_0_15px_rgba(0,255,0,0.7)] cursor-text overflow-y-auto scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-900"
    >
      <div className="flex flex-col gap-1 whitespace-pre text-left">
        {history.map((line, idx) => (
          <div
            key={idx}
            className={`flex transition-opacity duration-300 ${
              line.isTyping ? 'animate-typewriter' : ''
            }`}
          >
            {line.prompt && <span className="text-green-500">{line.prompt}&nbsp;</span>}
            <span className="text-gray-50">{line.command}</span>
          </div>
        ))}

        {/* Current input line */}
        <div className="flex items-center">
          <span className="text-green-500">{promptLabel}&nbsp;</span>
          <textarea
            rows={1}
            ref={textareaRef}
            value={currentInput}
            onKeyDown={handleKeyDown}
            onChange={e => setCurrentInput(e.target.value)}
            className="bg-black text-gray-50 font-mono border-none outline-none resize-none w-full p-0"
          />
        </div>
      </div>
    </div>
  );
};
