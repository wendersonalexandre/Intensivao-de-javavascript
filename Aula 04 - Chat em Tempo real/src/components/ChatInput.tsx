import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ChatInput = ({ onSend, disabled }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSend(message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t border-border bg-card">
      <div className="flex gap-2 max-w-4xl mx-auto">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Digite sua mensagem..."
          disabled={disabled}
          className="flex-1 rounded-full border-input focus-visible:ring-primary"
        />
        <Button 
          type="submit" 
          disabled={disabled || !message.trim()}
          size="icon"
          className="rounded-full bg-gradient-to-br from-primary to-accent hover:opacity-90 transition-opacity shadow-md"
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </form>
  );
};

export default ChatInput;