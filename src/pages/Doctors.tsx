import { Navbar } from "@/components/Navbar";
import { DoctorCard, Doctor } from "@/components/DoctorCard";

const Doctors = () => {
  const doctors: Doctor[] = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop",
      availability: "Mon, Wed, Fri",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Pediatrician",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop",
      availability: "Tue, Thu, Sat",
    },
    {
      id: 3,
      name: "Dr. Emily Williams",
      specialty: "Dermatologist",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2070&auto=format&fit=crop",
      availability: "Mon, Tue, Thu",
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialty: "Neurologist",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop",
      availability: "Wed, Fri, Sat",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container py-8">
        <h1 className="text-3xl font-bold mb-8">Our Doctors</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Doctors;