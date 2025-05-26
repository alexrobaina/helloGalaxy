

interface CommandResponse {
  [key: string]: string[];
}

export const welcomeMessageSpanish =  [
  "🤖 Asistente de Terminal impulsado por IA",
  "----------------------------------------",
  "¡Bienvenido! Este terminal está integrado con ChatGPT para ayudarte a conocernos mejor.",
  "",
  "Pregunta lo que necesites sobre nuestros servicios",
  "También puedes comunicarte con nosotros por whatsapp. +5491138997032"
]

export const welcomeMessageEnglish = [
  "🤖 AI-Powered Terminal Assistant",
  "----------------------------------------",
  "Welcome! This terminal is integrated with ChatGPT to help you get to know us better.",
  "",
  "Ask anything you need about our services",
  "You can also contact us via WhatsApp: +5491138997032"
];

export const commandResponsesEnglish: CommandResponse = {
  clear: []
};

export function getTerminalContentByLanguage(language: string) {
  switch (language) {
    case "es-ES":
      return {
        welcomeMessage: welcomeMessageSpanish,
      };
    case "en-US":
    default:
      return {
        welcomeMessage: welcomeMessageEnglish,
      };
  }
}