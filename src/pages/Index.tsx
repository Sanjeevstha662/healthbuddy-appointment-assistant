import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { useNavigate } from "react-router-dom";
import { Calendar, MessageCircle, Stethoscope, Clock } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Easy Booking",
      description: "Book appointments with top doctors in just a few clicks",
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-primary" />,
      title: "24/7 Support",
      description: "Get instant help from our AI health assistant anytime",
    },
    {
      icon: <Stethoscope className="h-8 w-8 text-primary" />,
      title: "Expert Doctors",
      description: "Access to qualified healthcare professionals",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Quick Response",
      description: "Immediate attention to your health concerns",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Health, Our Priority
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get instant access to healthcare professionals and 24/7 medical assistance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => navigate("/doctors")}>
                Find a Doctor
              </Button>
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => navigate("/assistant")}
              >
                Chat with Assistant
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Us
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow"
                >
                  <div className="mb-4 inline-block">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;