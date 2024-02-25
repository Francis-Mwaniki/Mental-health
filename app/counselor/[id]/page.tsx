"use client";
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import React, { use, useEffect } from "react"
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {
    params: {
        id: string;
    }
}

interface Counselor{
    id: string;
    name: string;
    bio: string;
    specialization: string[];
    organization: string;
    availability: string[];
    location: string;
    contact: {
        email: string;
        phone: string;
    };
};

export default function Component({params}: Props) {
  const router = useRouter();
    const { id } = params;
 const [isLoading, setIsLoading] = React.useState<boolean>(true)

useEffect(() => {
  setIsLoading(true)
  setTimeout(() => {
    setIsLoading(false)
  }, 3000);
}
, [id,router,params])



  return (
    <section className="dark:bg-neutral-950 dark:text-white py-7 sm:py-12 items-center m-auto flex justify-center">
   {
        isLoading && (
          <div className="min-h-screen flex items-center justify-center">
            <Loader2 className="w-12 h-12 text-blue-800 animate-spin" />
          </div>
        )
   }
   {
    !isLoading && (<div className={` ${isLoading ? 'hidden rotate-45' : 'block transform rotate-0'}`}>
    <Card className="w-full max-w-3xl p-4 md:p-8
    transition-all duration-500 ease-in-out transform 
    
    "
    
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="space-y-4 lg:pr-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 overflow-hidden rounded-full">
              <img
                alt="Image"
                className="bg-gray-200 dark:bg-gray-800"
                height="64"
                src={`https://ui-avatars.com/api/?background=random&name=Dr.JaneDoe`}
                style={{
                  aspectRatio: "64/64",
                  objectFit: "cover",
                }}
                width="64"
              />
            </div>
            <div className="space-y-1">
              <h1 className="text-2xl font-bold">Dr. Jane Doe</h1>
              <Button size="sm" variant="outline">
                id-{id}
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Bio</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Dr. Jane Doe is a licensed counselor with over 10 years of experience helping individuals and families
              overcome challenges. She provides a safe and supportive environment for her clients to explore their
              feelings and develop coping strategies. Dr. Doe uses a person-centered approach and integrates cognitive
              behavioral therapy (CBT) and mindfulness techniques into her sessions.
            </p>
          </div>
          <Card className="space-y-2 p-2 shadow-lg shadow-gray-300">
            <h2 className="text-lg font-semibold">Specialization</h2>
            <ul className="grid gap-2 list-disc list-inside">
              <li>Anxiety and stress management</li>
              <li>Relationship issues</li>
              <li>Self-esteem and confidence building</li>
              <li>Grief and loss</li>
              <li>Life transitions</li>
            </ul>
          </Card>
        </div>
        <div className="space-y-4 lg:pl-4">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Organization</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Acme Counseling Center</p>
          </div>
          <Card  className="space-y-2 p-2 shadow-lg shadow-gray-300">
            <h2 className="text-lg font-semibold">Availability</h2>
            <div className="grid gap-2 text-sm">
              <div>Monday: 9:00 AM - 5:00 PM</div>
              <div>Tuesday: 9:00 AM - 5:00 PM</div>
              <div>Wednesday: 9:00 AM - 5:00 PM</div>
              <div>Thursday: 9:00 AM - 5:00 PM</div>
              <div>Friday: 9:00 AM - 5:00 PM</div>
            </div>
          </Card>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Location</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">123 Main Street, Anytown, USA</p>
          </div>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Contact</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Email: info@example.com</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Phone: +1 123-456-7890</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-4">
        <Link className="w-full" href="#">
          <Button>Book Meeting</Button>
        </Link>
      </div>
    </Card>
    </div>)
   }
    
  </section>
  )
}

