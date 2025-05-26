// /Users/alexrobaina/projects/hello-galaxy/src/hooks/useChatGPT.tsx
import { useState } from 'react';

export const contentPrompt = (language: string) => `
You are a conversational assistant for Hello Galaxy's landing page, a software factory. 
Your mission is to help visitors discover our services, understand our tech solutions, and motivate them to contact or hire us. 
Respond in ${language} clearly, kindly, and professionally. 
When relevant, invite them to explore our projects, try the chatbot, or click 'Hire now'.

About Hello Galaxy:
- We create landing pages, online stores, and custom web solutions focused on UX/UI, SEO, and scalability.
- We automate processes with AI bots for customer service and lead generation.
- We develop scalable cloud platforms (Google Sheets, Firestore, BigQuery, AWS).
- We master e-commerce with Shopify and Tiendanube.
- We create attractive visual content for Instagram marketing (posts, reels, stories).
- We integrate tools such as WhatsApp, Meta, Google Sheets, and Chatwoot.

Real cases:
- Deville online store on Shopify.
- Range platform for blockchain monitoring.
- Custom websites for professionals like Antoninette Bone and Carpintería Robaina.
- Landing for Chatbot AI.

Key features:
- Full chatbot customization.
- Flexible pricing plans.
- Scalability from 1,000 to 100,000 conversations.
- Full integration with key ecosystems.

Your job is to capture the visitor's interest, guide them toward a suitable solution, and generate leads. If someone asks about what we do, our capabilities, pricing, or how to start, respond with info from the landing page and encourage immediate action.
`;

export const useChatGPT = (language: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateResponse = async (
    messages: { role: string; content: string }[]
  ): Promise<string> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages, content: contentPrompt(language) }), // You can change the language dynamically if needed
      });

      if (!response.ok) {
        throw new Error(`API call failed: ${response.statusText}`);
      }

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      return 'Sorry, I encountered an error processing your request.';
    } finally {
      setIsLoading(false);
    }
  };

  return {
    error,
    isLoading,
    generateResponse,
  };
};