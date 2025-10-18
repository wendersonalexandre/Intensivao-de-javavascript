import { Bot } from "lucide-react";

const TypingIndicator = () => {
  return (
    <div className="flex gap-3 mb-4 animate-fade-in">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md">
        <Bot className="w-5 h-5 text-primary-foreground" />
      </div>
      <div className="bg-[hsl(var(--chat-bot-bg))] border border-border rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;