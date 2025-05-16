'use client';
import { useRef, useState, useEffect } from 'react';
import { useChatGPT } from '@/hooks/useChatGPT';

interface HistoryItem {
  prompt: string;
  command: string;
  isTyping?: boolean;
}

interface CommandResponse {
  [key: string]: string[];
}

export const VintageTerminal = () => {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [hasShownWelcome, setHasShownWelcome] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const promptLabel = 'alex@my-machine:~$';

  const welcomeMessage = [
    ' _____ _____ __    __    _____    _____ _____ __    _____ _____ _____ ',
    '|  |  |   __|  |  |  |  |     |  |   __|   __|  |  |  _  |   __|   __|',
    '|     |   __|  |__|  |__|  |  |  |   __|   __|  |__|     |__   |   __|',
    '|__|__|_____|_____|_____|_____|  |__|  |_____|_____|__|__|_____|_____|',
    '',
    '/_/_/_/_/ /_/_/_/_/ /_/_/ /_/_/',
    '',
    '🤖 AI-Powered Terminal Assistant',
    '----------------------------------------',
    'Welcome! This terminal is integrated with ChatGPT to help you learn more about us.',
    '',
    'Available commands:',
    '  help     - Show all available commands',
    '  about    - Learn about our company',
    '  services - Explore our services',
    '  contact  - Get contact information',
    '  clear    - Clear terminal screen',
    '',
    'Type a command and press Enter to begin...',
  ];

  const commandResponses: CommandResponse = {
    about: [
      '🚀 About Hello Galaxi',
      '----------------------------------------',
      'We are a cutting-edge software development company specializing in:',
      '',
      '• Full-stack Web Development',
      '• Blockchain Solutions & Web3',
      '• Mobile App Development',
      '• AI Integration & Custom Solutions',
      '',
      'Our team brings experience from companies like Composable Finance,',
      'Scanworks, and major fintech projects.',
    ],
    services: [
      '💻 Our Services',
      '----------------------------------------',
      '1. Web Development',
      '   - Next.js & React Applications',
      '   - GraphQL API Integration',
      '   - Responsive UI/UX Design',
      '',
      '2. Blockchain Development',
      '   - Solana IBC Explorer',
      '   - Smart Contract Development',
      '   - Web3 Integration',
      '',
      '3. Mobile Development',
      '   - React Native Applications',
      '   - Cross-platform Solutions',
      '   - Fintech & Payment Systems',
      '',
      '4. Technical Consulting',
      '   - Architecture Design',
      '   - Performance Optimization',
      '   - Code Review & Auditing',
    ],
    contact: [
      '📬 Contact Information',
      '----------------------------------------',
      'Email: hello@galaxi.dev',
      'LinkedIn: linkedin.com/company/hello-galaxi',
      'GitHub: github.com/hello-galaxi',
      '',
      'Feel free to reach out for:',
      '• Project Inquiries',
      '• Partnership Opportunities',
      '• Technical Consultations',
    ],
    clear: [],
  };

  const { generateResponse } = useChatGPT();

  // Auto scroll to bottom when history changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = async (command: string) => {
    const normalizedCommand = command.toLowerCase().trim();

    if (normalizedCommand === 'clear') {
      setHistory([]);
      return;
    }

    // First check for static responses
    const staticResponse = commandResponses[normalizedCommand];
    if (staticResponse) {
      setTimeout(() => {
        setHistory(prev => [
          ...prev,
          ...staticResponse.map(line => ({
            prompt: '',
            command: line,
            isTyping: true,
          })),
        ]);
      }, 500);
      return;
    }

    // If no static response, use ChatGPT
    try {
      // Show loading state
      setHistory(prev => [...prev, { prompt: '', command: '🤔 Thinking...', isTyping: true }]);

      // Generate response from ChatGPT
      const response = await generateResponse(command);

      // Remove loading message and add AI response
      setHistory(prev => [
        ...prev.filter(item => item.command !== '🤔 Thinking...'),
        { prompt: '🤖', command: response, isTyping: true },
      ]);
    } catch (error) {
      console.log(error)
      setHistory(prev => [
        ...prev,
        {
          prompt: '',
          command: 'Sorry, I encountered an error. Please try again.',
          isTyping: true,
        },
      ]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const command = currentInput.trim();

      // Add the current command with prompt to history
      setHistory(prev => [...prev, { prompt: promptLabel, command, isTyping: true }]);

      // Process the command
      handleCommand(command);

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
    <div className="flex flex-col items-center justify-center w-full">
      <div
        ref={terminalRef}
        onClick={handleTerminalClick}
        className="w-full max-w-4xl h-[500px] my-2 sm:my-8 bg-black text-violet-500  p-2 sm:p-4 border-2 border-violet-800 rounded-2xl shadow-[0_0_15px_rgba(147,51,234,0.3)] cursor-text overflow-y-auto scrollbar-thin scrollbar-thumb-violet-500 scrollbar-track-gray-900"
      >
        <div className="flex flex-col gap-1 text-left">
          {history.map((line, idx) => (
            <div
              key={idx}
              className={`flex transition-opacity duration-300 ${
                line.isTyping ? 'animate-typewriter' : ''
              }`}
            >
              {line.prompt && <span className="text-violet-500 shrink-0">{line.prompt}&nbsp;</span>}
              <span className="text-gray-50 whitespace-pre-wrap break-words">{line.command}</span>
            </div>
          ))}

          {/* Current input line */}
          <div className="flex items-start">
            <span className="text-violet-500 shrink-0">{promptLabel}&nbsp;</span>
            <textarea
              rows={1}
              ref={textareaRef}
              value={currentInput}
              onKeyDown={handleKeyDown}
              onChange={e => setCurrentInput(e.target.value)}
              className="bg-black text-gray-50  border-none outline-none resize-none w-full p-0 overflow-hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
