
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { ArrowRight } from "lucide-react";
import crypto from "crypto";



interface Counsellors {
    id: number;
    counselor: string;
    specialization: string;
    image: string;
    organization: string;
  }
export default function Component() {
    const token = crypto.randomBytes(20).toString('hex');
  const [counselors, setcounselors] = useState<Counsellors[]>  ([
        {
          id: 1,
          counselor: "John Doe",
          specialization: "Specializes in residential construction and renovation.",
          image: "https://images.pexels.com/photos/5302897/pexels-photo-5302897.jpeg?auto=compress&cs=tinysrgb&w=600",
          organization: "Organization 1",
        },
        {
          id: 2,
          counselor: "Jane Smith",
          specialization: "Expert in commercial construction and large-scale projects.",
          image: "https://images.pexels.com/photos/6544376/pexels-photo-6544376.jpeg?auto=compress&cs=tinysrgb&w=600",
          organization: "Organization 2",
        },
        {
          id: 3,
          counselor: "Robert Johnson",
          specialization: "Specializes in interior design and remodeling.",
          image: "https://images.pexels.com/photos/897817/pexels-photo-897817.jpeg?auto=compress&cs=tinysrgb&w=600",
          organization: "Organization 3",
        },
        {
          id: 4,
          counselor: "Emily Davis",
          specialization: "Expert in landscape architecture and outdoor projects.",
          image: "https://images.pexels.com/photos/6740823/pexels-photo-6740823.jpeg?auto=compress&cs=tinysrgb&w=600",
          organization: "Organization 4",
        },
    ]);;
  
//     useEffect(() => {
//       const fetchcounselors = async () => {
//         const response = await fetch("https://api.example.com/counselors");
//         const data = await response.json();
//         setcounselors(data);
//       };
//       fetchcounselors();
// }, []);
  return (
    <div className=" dark:bg-neutral-950 dark:text-white">
     <h1 className="text-4xl text-center  font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            C O U N S E L O R S
        </h1>
        <p className="text-center">
            Meet our team of professional counselors
        </p>
          <div className="grid hover:backdrop:blur-lg gap-6 md:grid-cols-2 space-x-2 space-y-2 m-2 xl:grid-cols-4">
       

                {counselors.map((counselor) => (
                    <Card key={counselor.id} className="flex flex-col justify-between
                    hover:shadow-lg transition-all shadow-md shadow-neutral-900 duration-300 ease-in-out
                    hover:scale-105 transform-gpu
                    
                    hover:z-20
                    -translate-y-1
                    -translate-x-1
                    hover:-translate-y-0
                    hover:-translate-x-0
                    ">
                    <CardHeader>
                       <img 
                       className="rounded-full h-20 w-20
                       hover:backdrop:blur-lg
                       hover:scale-150 transform-gpu
                          hover:z-20
                          cursor-pointer
                            -translate-y-1
                            -translate-x-1
                            rotate-0
                            hover:-translate-y-0
                            hover:-translate-x-0
                            hover:rotate-6
                            transition-all duration-500 ease-in-out
                       "
                       style={{objectFit: "cover"}}
                       src={`https://ui-avatars.com/api/?background=random&name=${counselor.counselor}`}
                       alt={counselor.counselor} />
                        <CardTitle>{counselor.counselor}</CardTitle>
                        <CardDescription>{counselor.specialization}</CardDescription>
                        <CardDescription>{counselor.organization}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <a href={`/counselor/${counselor.id}?token=${token}`}>
                        <Button className="w-full group
                        flex items-center justify-center
                        " type="submit">
                        <span>Book Appointment</span>
                        <ArrowRight className="h-6 w-6 ml-2 group-hover:animate-bounce" />
                        </Button>
                        </a>
                    </CardContent>
                    </Card>
                ))}

        
     

    </div>
    </div>
  
  )
}

