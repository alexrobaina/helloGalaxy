import { FC } from 'react';
import { Bounce, toast } from 'react-toastify';

interface CodeCommandsProps {
  text: string;
}

export const CodeCommands: FC<CodeCommandsProps> = ({ text }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    toast("🦄 Let's build something amazing!", {
      position: 'bottom-right',
      autoClose: 5000,
      style: {
        background: '#8E51FF',
        color: '#fff',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'monospace',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80px',
        padding: '6px',
        width: '420px',
        borderRadius: '2px',
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
      },
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      transition: Bounce,
    });
  };

  return (
    <div
      className="cursor-pointer flex ring-1 ring-cyan-700 items-center bg-slate-800 text-white font-mono px-4 py-2 rounded-lg p-4 h-12 mt-4"
      onClick={handleCopy}
    >
      <span style={{ marginRight: '8px', color: '#999' }}>$</span>
      <span className="text-white text-sm font-mono md:text-base">{text}</span>
      <button
        style={{
          color: '#999',
          border: 'none',
          padding: '0 4px',
          cursor: 'pointer',
          marginLeft: 'auto',
          background: 'transparent',
        }}
        aria-label="Copy to clipboard"
      >
        {/* Clipboard icon (SVG) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="16"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M19 21H9c-1.1 0-2-.9-2-2V7h2v12h10v2zm3-15H14c-1.1 0-2-.9-2-2V2H8c-1.1 
         0-2 .9-2 2v10h2V4h5v4h6v10c0 1.1-.9 2-2 2h-5v2h5c2.21 
         0 4-1.79 4-4V6z"
          />
        </svg>
      </button>
    </div>
  );
};
