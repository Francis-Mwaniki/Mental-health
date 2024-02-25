"use client";
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import React, { use, useEffect, useState } from "react"
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import toast from "react-hot-toast";
interface Request {
  id: number;
  name: string;
  email: string;
  message: string;
  hour: number;
  counselorEmail: string;
  counselorName: string;
  shareMeetingLink: string;
  isAccepted: boolean;
  conselorId: number;
}
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
 const [selectedHour, setSelectedHour] = useState<number | null>(null);
 const [isCheckingHour, setIsCheckingHour] = useState(false);
 const [isUpdating, setIsUpdating] = useState(false);
 const [bookingMessage, setBookingMessage] = useState('');
 const [isBooking, setIsBooking] = useState(false);
 const [isBookingSuccess, setIsBookingSuccess] = useState('');
 const [isBookingError, setIsBookingError] = useState('');
 const [isBookingInfo, setIsBookingInfo] = useState(false);
 const [bookingEmail, setBookingEmail] = useState('');
 const [bookingName, setBookingName] = useState('');
 const [requests, setRequests] = useState<Request[]>([]);
 const [isFetchingRequests, setIsFetchingRequests] = useState(false);
 const availableHours = Array.from({ length: 10 }, (_, index) => index + 8)
  const [user, setUser] = useState<Counselor>({
    id: '',
    name: '',
    bio: '',
    specialization: [],
    organization: '',
    availability: [],
    location: '',
    contact: {
        email: '',
        phone: '',
    }
});


   //fetching all requests booked by user
   const fetchRequests = async () => {
    setIsFetchingRequests(true)
    const res = await fetch(`/api/admin/counselors/requests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })
    });

    const data = await res.json();
    console.log("request",data);

    if (data.status === 200) {
      const requests: Request[] = data.data;
      setRequests(requests);
      console.log(requests);
      setIsFetchingRequests(false);
    }

    if (
      data.status === 400 ||
      data.status === 500 ||
      data.status === 404 ||
      data.status === 401 ||
      data.status === 405
    ) {
      setIsFetchingRequests(false);
      console.log(data.message);
      toast.error(data.message,{
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
        },
        iconTheme: {
          primary: '#713200',
          secondary: '#FFFAEE',
        },
      });
    }
  };
  const getMeetingLink = () => {
    const randomString = Math.random().toString(36).substring(7);
    return `https://construction-ruby.vercel.app/meeting/${randomString}`;
  }


  const handleBooking = async (e: any) => {
    e.preventDefault();
    if(!bookingName || !bookingEmail){
      setIsBooking(false);
      toast.error('Please fill in all fields',{
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
        },
        iconTheme: {
          primary: '#713200',
          secondary: '#FFFAEE',
        },
      });
      return;
    }
    // /api/auth/counselor/booking
    setIsBooking(true);
    const res = await fetch(`/api/auth/counselor/booking`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        id: id,
        name: bookingName,
        email: bookingEmail,
        message: bookingMessage,
        hour: selectedHour,
        counselorId: id,
        counselorEmail: user.contact.email,
        counselorName: user.name,
        shareMeetingLink: getMeetingLink()
       })
    });

    const data = await res.json();
    console.log(data);

    if (data.status === 200) {
      setIsBooking(false);
      console.log(data.message);
      setTimeout(() => {
        toast.success(`${data.message}`, {
          style: {
            border: '1px solid #713200',
            padding: '16px',
            color: '#713200',
          },
          duration: 4000,
          iconTheme: {
            primary: '#713200',
            secondary: '#FFFAEE',
          },
          
        });
      }, 4000);
    }

    if (
      data.status === 400 ||
      data.status === 500 ||
      data.status === 404 ||
      data.status === 401 ||
      data.status === 405
    ) {
      setIsBooking(false);
      console.log(data.message);
      toast.error(`${data.message}`, {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
        },
        duration: 4000,
        iconTheme: {
          primary: '#713200',
          secondary: '#FFFAEE',
        },
        
      });
    }
  }
  const handleHourClick = (hour: number ) => {
    if (selectedHour !== hour) {
      setSelectedHour(hour);
       
    } else {
      // If the same hour is clicked again, unselect it
      setSelectedHour(null);
    }
  }

  
  
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
    <Card className="w-full sm:max-w-5xl p-4 md:p-8
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
          <Card className="space-y-2 p-2 ">
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
          <Card  className="space-y-2 p-2 ">
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
   

       {/* book meeting */}
    <Card className=" my-2">
                <Card className="p-2 border border-blue-400">
                  <CardHeader>
                <CardTitle>Book Meeting</CardTitle>
                <CardDescription>Book a meeting with your counselor.</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {/*  */}
                  <div>
                  <h2>Select an Hour:</h2>
                  <div className="flex space-x-4">
                    {availableHours.map((hour) => (
                      <button
                        key={hour}
                        className={`${
                          selectedHour === hour ? 'bg-black text-white' : 'bg-gray-200'
                        } px-4 py-2 my-2 rounded focus:outline-none`}
                        onClick={() => handleHourClick(hour)}
                        disabled={selectedHour !== null && selectedHour !== hour}
                      >
                        from {hour}:00 to {hour + 1}:00
                      </button>
                    ))}
                  </div>
                  <p>Selected Hour: {selectedHour !== null ? `${selectedHour}:00` : 'None'}</p>
                  <Card className="p-2 flex items-center justify-center gap-x-3">
                    {/* deselect  */}
                    {/* TODO */}
                 {
                    selectedHour !== null && (
                      <button
                      className="bg-red-500 text-white px-4 py-2 rounded focus:outline-none"
                      onClick={() => setSelectedHour(null)}
                      disabled={selectedHour === null}
                    >
                      Deselect
                    </button>
                    )
                 }
                 {
                  selectedHour === null && !isCheckingHour && (
                    <p className="text-red-500">Select an hour to book a meeting</p>

                  )
                 }
                 {
                  isBookingSuccess !== '' && (
                    <p className="text-green-500">{
                      isBookingSuccess 
                    }</p>
                  )
                 }
                 {
                  isBookingError !== '' && (
                    <p className="text-red-500">{isBookingError}</p>
                  )
                 }
                 {/* checking hour availability  */}
                  {
                    isCheckingHour && (
                      <div className="flex items-center justify-center w-full h-10 bg-gray-300 dark:bg-gray-800 animate-pulse">
                        <span className="text-gray-500">
                          {
                            isCheckingHour ? 'Checking availabilty...' : 'Checked'
                          }
                        </span>
                      </div>
                    )
                  }

                    
                 </Card>
                </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="full_name">Full Name</Label>
                  <Input
                    id="full_name"
                    value={bookingName}
                    onChange={(e) => setBookingName(e.target.value)}
                    type="text"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    value={bookingEmail}
                    onChange={(e) => setBookingEmail(e.target.value)}
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                  value={bookingMessage}
                  onChange={(e) => setBookingMessage(e.target.value)}
                    id="message"
                    placeholder="Enter your message"
                  />
                </div>
                <div className="space-y-2">
                  <Button 
                  onClick={handleBooking}
                  disabled={isCheckingHour || selectedHour === null || isBooking}
                  className="justify-self-center flex justify-center items-center mx-auto w-full">Book 
                    Meeting
                  </Button>
                </div>

              </CardContent>
                </Card>
              
              </Card>
    </Card>

   
    </div>)
   }
    
  </section>
  )
}

