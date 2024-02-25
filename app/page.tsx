"use client"
import Link from "next/link"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { JSX, SVGProps } from "react"
import { ArrowUp, ExternalLink, HeartPulse } from "lucide-react"
import  Resources  from "@/components/addsResources"
import Image from "next/image"
import  Counsellors  from "@/components/Counsellors"
export default function Component() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleClickSection = (section:string,e: { preventDefault: () => void; } | undefined) => {
    e?.preventDefault();
        if(section === 'home'){
         scrollToSection('home')
       }
        if(section === 'resources'){
          scrollToSection('resources')
        }
        if(section === 'contact'){
          scrollToSection('contact')
        }
        if(section === 'counselor'){
          scrollToSection('counselor')
        }
        if(section === 'getStarted'){
          scrollToSection('getStarted')
        }
        return

   }
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between bg-transparent
       opacity-90  px-4 py-4 border-b fixed z-50 top-0 inset-x-0
        backdrop-filter backdrop-blur-lg
        dark:bg-neutral-900 dark:border-neutral-800 dark:text-[#f5f5f5]
        border-neutral-100/10 dark:border-neutral-900/10
       ">
        <Link className="flex items-center justify-center" href="#">
         <HeartPulse className="h-8 w-8 mr-2" />
          <span className="sr-only">
            Mental Health
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a onClick={handleClickSection.bind(null,'home')} className="text-sm cursor-pointer sm:text-lg font-medium hover:transition-all bg-neutral-900 text-white rotate-0 hover:rotate-6 rounded-md  px-3 py-2 hover:underline transition-all duration-500 " href="#">
            Home
          </a>
          <a onClick={handleClickSection.bind(null,'resources')} className="text-sm cursor-pointer sm:text-lg font-medium hover:transition-all bg-neutral-900 text-white rotate-0 hover:rotate-6 rounded-md  px-3 py-2 hover:underline transition-all duration-500 " href="#">
            Resources
          </a>
          <a onClick={handleClickSection.bind(null,'contact')} className="text-sm cursor-pointer sm:text-lg font-medium hover:transition-all bg-neutral-900 text-white rotate-0 hover:rotate-6 rounded-md  px-3 py-2 hover:underline transition-all duration-500 " href="#">
            Contact
          </a>
          <a onClick={handleClickSection.bind(null,'counselor')} className="text-sm cursor-pointer sm:text-lg font-medium hover:transition-all bg-neutral-900 text-white rotate-0 hover:rotate-6 rounded-md  px-3 py-2 hover:underline transition-all duration-500 " href="#">
            Counselors
          </a>
          {/* getStarted */}
          <a 
          onClick={handleClickSection.bind(null,'getStarted')}
          className="text-sm cursor-pointer sm:text-lg font-medium hover:transition-all bg-neutral-900 text-white rotate-0 hover:rotate-6 rounded-md  px-3 py-2 hover:underline transition-all duration-500 " >
           
              Get Started
            
          </a>
        </nav>
      </header>
      <main className="flex-1 relative">
        <section className="w-full pt-24 dark:bg-neutral-900 
        dark:text-[#f5f5f5] bg-gradient-to-b from-neutral-900 to-neutral-800/none
        bg-opacity-40 dark:bg-opacity-50
        inset-0 
        transition-all duration-300 ease-in-out
        backdrop-filter backdrop-blur-lg
       
         "
         style={
            {
              backgroundImage: "url('https://res-console.cloudinary.com/dzvtkbjhc/media_explorer_thumbnails/218a3b2a8f398342070bb86d3de053f7/detailed')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              zIndex: -10,
              paddingTop: "0px",
              top: "-3px",


            }
         }
         >
          <div 
          id="home"
          className="container  
          opacity-90  bg-transparent
          backdrop-filter backdrop-blur-lg
          h-[600px] flex items-center justify-center
            dark:text-[#f5f5f5]
             sm:pt-28
       px-4 md:px-6 flex-row">
            <div className="flex flex-col justify-center space-y-4">
              {/* mental health */}
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              M E N T A L &nbsp; H E A L T H.
              </h1>
              <p className="max-w-[600px] text-gray-900 md:text-xl dark:text-gray-600">
                Our team of experienced and compassionate counselors are here to help you navigate life's
                challenges and find the support you need to live a happy and fulfilling life.
              </p>
            </div>
           
          </div>
        </section>
        {/* get started buttons*/}
        <section
        id="getStarted"
         className="w-full py-12 relative md:py-16 lg:py-20 dark:bg-neutral-900 dark:text-[#f5f5f5]">
          <div className="container bg-grid  flex flex-col gap-y-7 justify-center items-center px-4 md:px-6">
         <Image
          src="grid.svg"
          alt="background"
          width={1572}
          height={1572}
          style={{objectFit: "cover", objectPosition: "center", zIndex: -10, paddingTop: "0px"}}
          className="absolute  top-0 -z-10 text-transparent"
          
        />
       
    
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none">
              G E T &nbsp; S T A R T E D
            </h2>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
              href={'/chat/ai'}
               className="w-full sm:w-auto">
                <span className="w-full sm:w-auto flex items-center justify-center  bg-neutral-900 shadow-2xl rounded-md px-6 py-3 text-white font-medium text-lg/none hover:shadow-lg transition-all duration-300 ease-in-out">
                <span> Chat with our Ai Counselor</span>
                <span><ExternalLink className="w-6 h-6 ml-2" /></span>
                </span>
              </Link>
              <a
              onClick={handleClickSection.bind(null,'counselor')}
               className="w-full sm:w-auto cursor-pointer" >
                <span className="w-full sm:w-auto flex items-center justify-center  bg-neutral-900 shadow-2xl rounded-md px-6 py-3 text-white font-medium text-lg/none hover:shadow-lg transition-all duration-300 ease-in-out">
                  <span>
                  Book an Appointment
                  </span>
                  <span>
                    <ExternalLink className="w-6 h-6 ml-2" />
                  </span>
                </span>
                
              </a>
            </div>
          </div>
        </section>
         
        <section 
        id="counselor"
        className="w-full py-12 md:py-16 lg:py-24">
         <Counsellors />

        </section>
        <section 
        id="resources"
        className="w-full  py-12 md:py-16 lg:py-24 dark:bg-neutral-900 dark:text-[#f5f5f5]">
          <Resources />
          </section>
        <section
        id="contact"
         className="w-full py-12 md:py-16 lg:py-24 dark:bg-neutral-900 dark:text-[#f5f5f5]">
          <div className="container flex  sm:flex-row flex-col justify-evenly mx-auto gap-x-3  space-x-16 items-center px-4 md:px-6">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none">
                A B O U T &nbsp; U S
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Our priority is to provide the best mental health services to our clients. We are committed to
                helping you navigate life's challenges and find the support you need to live a happy and
                fulfilling life.
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl xl:text-4xl/none">
                C O N T A C T &nbsp; I N F O
              </h3>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                <span className="font-bold">Phone:</span> +1 (555) 555-5555
              </p>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                <span className="font-bold">Email:</span>
                <a className="hover:underline underline-offset-2" href="mailto:example@gmail.com">
                  {" "}
                    <span>
                      Mental Health Support
                    </span>
                </a>
              </p>
            </div>
          </div>
          {/* contact */}
          
        </section>
      </main>
      {/* scrolltotop */}
      <a
        onClick={handleClickSection.bind(null,'home')}
        className="fixed bottom-10
        bg-gradient-to-r from-neutral-400 to-neutral-500
        hover:from-neutral-500 hover:to-neutral-400
         shadow-2xl right-4 z-20 flex items-center justify-center w-12 h-12 rounded-full shadow-neutral-700 cursor-pointer dark:bg-neutral-950 dark:text-white hover:shadow-lg transition-all duration-300 ease-in-out"
      >
        <ArrowUp className="w-6 h-6" />
      </a>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 
        M E N T A L &nbsp; H E A L T H. All rights reserved.</p>

        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Contact Us
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Facebook
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Twitter
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Instagram
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function Health(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="m12 8v4l2 2" />
    </svg>
  )
}