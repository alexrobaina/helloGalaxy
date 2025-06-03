// /Users/alexrobaina/projects/hello-galaxy/src/components/VintageTerminal/index.tsx
'use client';

import { useRef, useState, useLayoutEffect, useCallback, KeyboardEvent, ChangeEvent } from 'react';
import { useChatGPT, contentPrompt } from '@/hooks/useChatGPT';
import { useTranslations } from 'next-intl';
import { getTerminalContentByLanguage } from './contants';
import { useParams } from 'next/navigation';

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
  const promptLabel = 'hg@my-machine:~$';
  const params = useParams();
  const [isLoading, setLoading] = useState(false)
  const t = useTranslations("TerminalAI")
  const language = params?.locale === 'es-ES' ? 'es-ES' : 'en-US';

  const { welcomeMessage } = getTerminalContentByLanguage(language);

  // Maintain a chat messages array
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    { role: "system", content: contentPrompt(language) },
  ]);

  const { generateResponse } = useChatGPT(language);

  useLayoutEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);
  

  const handleCommand = async (command: string, language: string) => {
    const normalizedCommand = command.trim();
    if (!normalizedCommand) {
      setLoading(false);
      return;
    }
  
    setLoading(true);
  
    if (normalizedCommand.toLowerCase() === 'clear') {
      setHistory([]);
      setMessages([{ role: "system", content: contentPrompt(language) }]);
      setLoading(false);
      return;
    }
  
    // Update messages with the new user command
    const newMessages = [...messages, { role: "user", content: command }];
    setMessages(newMessages);
  
    // Show loading in the UI
    setHistory(prev => [
      ...prev,
      { prompt: '', command: `🤔 ${t("thinking")}`, isTyping: true }
    ]);
  
    try {
      const response = await generateResponse(newMessages);
      // Remove the loading message and add the assistant's response
      setHistory(prev =>
        [
          ...prev.filter(item => item.command !== `🤔 ${t("thinking")}`),
          { prompt: '🤖', command: response, isTyping: true }
        ]
      );
      // Add assistant message to context
      setMessages(prev => [...prev, { role: "assistant", content: response }]);
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
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = useCallback((e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const command = currentInput.trim();
      if (!command || isLoading) return; // Prevent empty or loading

      setHistory(prev => [...prev, { prompt: promptLabel, command, isTyping: true }]);
      handleCommand(command, language);
      setCurrentInput('');
    }
  }, [currentInput, language, isLoading, handleCommand]);

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

  const handleChangeChat = (e: ChangeEvent) => {
    if (isLoading) return; // Prevent input changes while loading
    const target = e.target as HTMLTextAreaElement;
    const value: string = target.value;
    if (value === undefined || value === null) return;
    if (value.length > 100) {
      setCurrentInput(value.slice(0, 100));
      return;
    }
    if (value.includes('\n')) {
      setCurrentInput(value.replace(/\n/g, ''));
    }
    if (value.length === 0) {
      setCurrentInput('');
      return;
    }
    setCurrentInput(value);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div
        ref={terminalRef}
        onClick={handleTerminalClick}
        className={`w-full max-w-4xl h-[500px] my-2 sm:my-8 bg-black 
          text-violet-500 p-2 sm:p-4 border-2 border-violet-800 rounded-2xl 
          shadow-[0_0_15px_rgba(147,51,234,0.3)] cursor-text overflow-y-auto 
          scrollbar-thin scrollbar-thumb-violet-500 scrollbar-track-gray-900`}
      >
        <div className="flex flex-col gap-1 text-left">
          {history.map((line, idx) => (
            <div
              key={idx}
              className={`flex transition-opacity duration-300 ${line.isTyping ? 'animate-typewriter' : ''}`}
            >
              {line.prompt && (
                <span className="text-violet-500 shrink-0 text-xs md:text-sm">{line.prompt}&nbsp;</span>
              )}
              <span className="text-gray-50 whitespace-pre-wrap break-words text-xs md:text-sm">{line.command}</span>
            </div>
          ))}

          {/* Current input line */}
          <div className="flex items-start">
            {!isLoading && (
              <span className="text-violet-500 shrink-0 text-xs md:text-sm">{promptLabel}&nbsp;</span>
            )}
            <textarea
              rows={1}
              ref={textareaRef}
              value={currentInput}
              onKeyDown={handleKeyDown}
              onChange={handleChangeChat}
              className="bg-black text-gray-50 border-none outline-none resize-none w-full p-0 overflow-hidden text-xs md:text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};