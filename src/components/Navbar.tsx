import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Doctors", path: "/doctors" },
    { name: "Appointments", path: "/appointments" },
    { name: "Health Assistant", path: "/assistant" },
  ];

  return (
    <nav className="border-b">
      <div className="flex items-center justify-between p-4 container">
        <div className="flex items-center gap-6">
          <h1 
            onClick={() => navigate("/")} 
            className="text-2xl font-bold text-primary cursor-pointer"
          >
            HealthCare
          </h1>
          
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => navigate(item.path)}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 mt-8">
                {menuItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => navigate(item.path)}
                    className="text-left text-lg font-medium text-gray-600 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};