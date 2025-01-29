import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  image: string;
  availability: string;
}

interface DoctorCardProps {
  doctor: Doctor;
}

export const DoctorCard = ({ doctor }: DoctorCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-48 object-cover"
        />
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold">{doctor.name}</h3>
        <p className="text-gray-600 mb-4">{doctor.specialty}</p>
        <div className="flex items-center gap-2 text-gray-500 mb-4">
          <Calendar className="h-4 w-4" />
          <span className="text-sm">{doctor.availability}</span>
        </div>
        <Button 
          className="w-full"
          onClick={() => navigate(`/book/${doctor.id}`)}
        >
          Book Appointment
        </Button>
      </CardContent>
    </Card>
  );
};