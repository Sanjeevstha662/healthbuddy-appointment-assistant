import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Send } from "lucide-react";

interface Message {
  text: string;
  isBot: boolean;
}

export const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm your health assistant. How can I help you today?",
      isBot: true,
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { text: input, isBot: false }]);
    
    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "I understand your concern. Based on your symptoms, I recommend scheduling an appointment with one of our doctors for a proper evaluation.",
          isBot: true,
        },
      ]);
    }, 1000);

    setInput("");
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <MessageCircle className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold">Health Assistant</h2>
        </div>
        
        <ScrollArea className="h-[400px] pr-4">
          <div className="flex flex-col gap-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.isBot ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isBot
                      ? "bg-gray-100"
                      : "bg-primary text-white"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="flex gap-2 mt-4">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
          />
          <Button onClick={handleSend}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};