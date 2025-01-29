import { Navbar } from "@/components/Navbar";
import { ChatBot } from "@/components/ChatBot";

const Assistant = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">
          24/7 Health Assistant
        </h1>
        <ChatBot />
      </main>
    </div>
  );
};

export default Assistant;