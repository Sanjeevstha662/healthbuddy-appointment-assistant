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
    
    // Simulate bot response based on keywords
    setTimeout(() => {
      const lowercaseInput = input.toLowerCase();
      let botResponse = "";

      if (lowercaseInput.includes("headache")) {
        botResponse = "If you're experiencing a headache, here are some initial steps: 1) Rest in a quiet, dark room 2) Stay hydrated 3) Try over-the-counter pain relievers. If the headache is severe or persistent, please schedule an appointment with one of our doctors.";
      } else if (lowercaseInput.includes("fever")) {
        botResponse = "For fever management: 1) Stay hydrated 2) Rest 3) Take acetaminophen or ibuprofen if needed. If your fever is high (above 103°F/39.4°C) or lasts more than three days, please seek immediate medical attention.";
      } else if (lowercaseInput.includes("appointment") || lowercaseInput.includes("book")) {
        botResponse = "I can help you book an appointment. Please visit our Doctors page to select a healthcare provider and schedule a convenient time. Would you like me to guide you there?";
      } else if (lowercaseInput.includes("emergency")) {
        botResponse = "If you're experiencing a medical emergency, please call emergency services immediately (911). For non-life-threatening situations, we can help you schedule an urgent care appointment.";
      } else if (lowercaseInput.includes("covid") || lowercaseInput.includes("coronavirus")) {
        botResponse = "If you're experiencing COVID-19 symptoms, please: 1) Self-isolate 2) Get tested 3) Monitor your symptoms. We offer telehealth consultations for COVID-19 concerns. Would you like to schedule one?";
      } else if (lowercaseInput.includes("thank")) {
        botResponse = "You're welcome! Is there anything else I can help you with?";
      } else {
        botResponse = "I understand your concern. To provide the best care, I recommend scheduling an appointment with one of our healthcare providers. They can give you a proper evaluation and personalized treatment plan. Would you like help booking an appointment?";
      }

      setMessages((prev) => [...prev, { text: botResponse, isBot: true }]);
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