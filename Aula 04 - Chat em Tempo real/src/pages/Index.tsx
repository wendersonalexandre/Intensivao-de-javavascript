import { useState, useRef, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { OPENAI_API_KEY } from "@/config/api";
import ChatHeader from "@/components/ChatHeader";
import ChatMessage from "@/components/ChatMessage";
import ChatInput from "@/components/ChatInput";
import TypingIndicator from "@/components/TypingIndicator";

const Index = () => {
  const [messages, setMessages] = useState([
    { text: "Oie, tudo bem?", isUser: false },
    { text: "Meu nome é Maria. Como posso te ajudar hoje?", isUser: false },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const sendMessage = async (text) => {
    const userMessage = { text, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      if (!OPENAI_API_KEY || OPENAI_API_KEY === "fake-key-placeholder") {
        throw new Error(
          "Chave da API não configurada. Adicione sua chave no arquivo src/config/api.ts"
        );
      }

      const conversationHistory = messages.map((msg) => ({
        role: msg.isUser ? "user" : "assistant",
        content: msg.text,
      }));

      conversationHistory.push({
        role: "user",
        content: text,
      });

      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [
              {
                role: "system",
                content:
                  "Você é Maria, uma assistente virtual prestativa e amigável. Responda sempre em português de forma clara e objetiva.",
              },
              ...conversationHistory,
            ],
            temperature: 0.7,
            max_tokens: 500,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || "Erro ao enviar mensagem");
      }

      const data = await response.json();
      const reply = data.choices[0].message.content;
      const botMessage = { text: reply, isUser: false };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Erro:", error);
      toast({
        title: "Erro",
        description:
          error.message ||
          "Não foi possível enviar sua mensagem. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      <ChatHeader />

      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-4xl mx-auto">
          {messages.map((msg, index) => (
            <ChatMessage key={index} message={msg.text} isUser={msg.isUser} />
          ))}
          {isLoading && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <ChatInput onSend={sendMessage} disabled={isLoading} />
    </div>
  );
};

export default Index;
