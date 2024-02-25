
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react";
import { Download } from "lucide-react";
import Image from "next/image";


interface Resource {
    id: number;
    title: string;
    description: string;
    image: string;
    url: string;
  }
export default function Component() {
    const [resources, setResources] = useState<Resource[]>  ([
        {
          id: 1,
          title: "Yoga for Beginners",
          description: "Learn simple yoga poses",
          image: "https://images.pexels.com/photos/5302897/pexels-photo-5302897.jpeg?auto=compress&cs=tinysrgb&w=600",
          url: "https://example.com/yoga-for-beginners.pdf",
        },
        {
          id: 2,
          title: "Healthy Recipes",
          description: "Tasty and nutritious meals",
          image: "https://images.pexels.com/photos/6544376/pexels-photo-6544376.jpeg?auto=compress&cs=tinysrgb&w=600",
          url: "https://example.com/healthy-recipes.pdf",
        },
        {
          id: 3,
          title: "Stress Relief",
          description: "Effective relaxation techniques",
          image: "https://images.pexels.com/photos/897817/pexels-photo-897817.jpeg?auto=compress&cs=tinysrgb&w=600",
          url: "https://example.com/stress-relief.pdf",
        },
        {
          id: 4,
          title: "Workout Plan",
          description: "Custom fitness schedule",
          image: "https://images.pexels.com/photos/6740823/pexels-photo-6740823.jpeg?auto=compress&cs=tinysrgb&w=600",
          url: "https://example.com/workout-plan.pdf",
        },
    ]);;
  
//     useEffect(() => {
//       const fetchResources = async () => {
//         const response = await fetch("https://api.example.com/resources");
//         const data = await response.json();
//         setResources(data);
//       };
//       fetchResources();
// }, []);
  return (
    <div className=" dark:bg-neutral-950 dark:text-white bg-grid relative">
      <Image
          src="grid.svg"
          alt="background"
          width={1572}
          height={1572}
          style={{objectFit: "cover", objectPosition: "center", zIndex: -10, paddingTop: "0px"}}
          className="absolute  -top-10 -z-10 text-transparent"
          
        />
     <h1 className="text-4xl text-center  font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            R E S O U R C E S
        </h1>
        <p className="text-center">
            Download and explore the following resources
        </p>
          <div className="grid gap-6 md:grid-cols-2 space-x-2 space-y-2 m-2 xl:grid-cols-4">
       
        {resources.map((resource) => (
            <Card 
            className="hover:shadow-lg transition-all shadow-md shadow-neutral-900 duration-300 ease-in-out
            hover:scale-105 transform-gpu
            
            hover:z-20
            -translate-y-1
            -translate-x-1
            hover:-translate-y-0
            hover:-translate-x-0"
            key={resource.id}>
                  <img
                 className="w-full h-48 object-cover rounded-t-lg
                  
                 "
                src={resource.image} alt={resource.title} />
                <CardHeader>
                <CardTitle>{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>{resource.description}</CardContent>
                <CardFooter>
                 <a href={resource.url} target="_blank">
                <Button className="w-full
                flex items-center justify-center
                " type="submit">
                    <span>
                        Download
                    </span>
                    <Download className="w-6 h-6 ml-2" />
                </Button>
                </a>
                </CardFooter>
            </Card>
            ))}

    </div>
    </div>
  
  )
}

