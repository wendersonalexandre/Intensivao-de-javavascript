import { Bot, User } from "lucide-react";

const ChatMessage = ({ message, isUser }) => {
  return (
    <div 
      className={`flex gap-3 mb-4 animate-fade-in ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      {!isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md">
          <Bot className="w-5 h-5 text-primary-foreground" />
        </div>
      )}
      
      <div 
        className={`max-w-[70%] rounded-2xl px-4 py-3 shadow-sm transition-all duration-300 hover:shadow-md ${
          isUser 
            ? 'bg-[hsl(var(--chat-user-bg))] text-[hsl(var(--chat-user-fg))] rounded-tr-sm' 
            : 'bg-[hsl(var(--chat-bot-bg))] text-[hsl(var(--chat-bot-fg))] border border-border rounded-tl-sm'
        }`}
      >
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message}</p>
      </div>
      
      {isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center shadow-sm">
          <User className="w-5 h-5 text-secondary-foreground" />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;