"use client";
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps, useState } from "react"

export default function Component() {
    const [token, setToken] = useState("");
    const [Password, setPassword] = useState("");
    const [email, setEmail] = useState("");
  
    const handleSubmit = (e: { preventDefault: () => void }) => {
      e.preventDefault();
  
      // Basic validation
      if (!token || !Password || !email) {
        // Handle validation errors
        console.error("Validation failed");
        return;
      }
  
      // Perform password update logic here
      console.log("Password update logic");
    };
  return (
    <section className="w-full sm:w-1/2 mx-auto py-12 md:py-24 lg:py-32">
    <Card className="mx-auto max-w-md">
      <CardHeader className="space-y-1">
        <div className="flex items-center">
          <KeyIcon className="h-6 w-6 mr-2" />
          <CardTitle className="text-2xl font-bold">Login Counselor</CardTitle>
        </div>
        
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="new-password"> Password</Label>
            <Input id="new-password" placeholder="Enter password" required type="password" onChange={e => setPassword(e.target.value)} value={Password} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">
                Email
            </Label>
            <Input id="email" placeholder="Email..." required type="email" onChange={e => setEmail(e.target.value)} value={email} />
          </div>
          <Button className="w-full" type="submit">
            Login Counselor
          </Button>
        </form>
        <div className="flex justify-center space-x-2 py-2">
            <a href="/auth/reset-password" className="text-blue-600 hover:underline">Forgot Password?</a>
            <a href="/auth/register" className="text-blue-600 hover:underline">Register</a>
        </div>


      </CardContent>
    </Card>
    </section>
  )
}

function KeyIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="7.5" cy="15.5" r="5.5" />
      <path d="m21 2-9.6 9.6" />
      <path d="m15.5 7.5 3 3L22 7l-3-3" />
    </svg>
  )
}
