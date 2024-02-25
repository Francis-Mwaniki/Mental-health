"use client"
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowUp, BotIcon, Check, Copy, HomeIcon, SendIcon, Trash2Icon, User, X} from "lucide-react"
import { Card, CardDescription, CardHeader } from '@/components/ui/card';
import { useChat } from 'ai/react';
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
  
interface Message {
  message: [] | string;
}

export default function Component({ handler }: { handler: any }) {
  const { messages, input, handleInputChange, handleSubmit,setMessages,setInput } = useChat({
    api: handler,
  });
  const messagesRef = useRef<HTMLDivElement | null>(null);
  const [UserisCopied, setUserIsCopied] = useState(false);
  const [AssistanceisCopied, setAssistanceIsCopied] = useState(false);
  const [stressed, setStressed] = useState("I am feeling stressed and anxious.");
  const [depressed, setDepressed] = useState("I am feeling depressed and lonely.");
  const handleInitiateChat = (message: string, e:any) => {
    e.preventDefault();
    setInput(message);
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e); // Include the event argument in the handleSubmit function call
    }
   
  };

  const handleKeyEnter = (e:any) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e); // Include the event argument in the handleSubmit function call
    }
  };



  useEffect(() => {
    // Scroll to the bottom of the chat when messages change
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages,
    input,
    messagesRef.current?.scrollHeight]);
  return (
    <section className="flex items-center justify-center min-h-screen flex-col bg-gray-50 dark:bg-gray-900" suppressHydrationWarning>
      {
        !messages.length && (
          <Card className="flex items-center justify-center px-2 py-4 flex-col gap-4">
            <CardDescription className="text-2xl font-bold text-gray-900 dark:text-gray-50">
              Chat with our AI advisor
            </CardDescription>
            <CardDescription>
              <CardDescription className="flex gap-2 justify-start items-center max-w-2xl text-gray-900 dark:text-gray-50">
                This is a mental health AI advisor that can help you with your mental health. It is not a replacement for professional help, but it can be a good starting point for you to get help. Please note that this is a demo and the responses are generated by an AI model. If you are in crisis, please call 911 or go to the nearest emergency room.
              </CardDescription>
              
            </CardDescription>
            <Card className='grid gap-2 grid-cols-2 p-2'>
               {/* two mental health issue sample */}
                <Card className="flex flex-col gap-2 p-2 border border-gray-200 rounded-md shadow-sm">
                  <CardDescription className="text-lg font-bold text-gray-900 dark:text-gray-50">
                    Feeling Stressed
                  </CardDescription>
                  <CardDescription className="text-gray-900 dark:text-gray-50">
                   {stressed}
                  </CardDescription>
                  <Button
                    onClick={(e) => { handleInitiateChat(stressed, e) }}
                    className="rounded-md border flex justify-center items-center gap-x-1 border-gray-200 py-7   bg-gray-900 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  >
                    <span>Try out</span>
                    <SendIcon className="w-5 h-5" />
                  </Button>


                  </Card>
                 {/*  I am feeling depressed and lonely. */}
                <Card className="flex flex-col gap-2 p-2 border border-gray-200 rounded-md shadow-sm">
                  <CardDescription className="text-lg font-bold text-gray-900 dark:text-gray-50">
                    Feeling Depressed
                  </CardDescription>
                  <CardDescription className="text-gray-900 dark:text-gray-50">
                    {depressed}
                  </CardDescription>
                  <Button
                    onClick={(e) => { handleInitiateChat(depressed, e) }}
                    className="rounded-md border flex justify-center items-center gap-x-1 border-gray-200 py-7   bg-gray-900 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  >
                    <span>Try out</span>
                    <SendIcon className="w-5 h-5" />
                  </Button>
                  </Card>
                   
              </Card>
             
          </Card>
        )
      }
     
    <Card className={`w-full max-w-2xl border overflow-hidden rounded-lg ${messages.length > 0 ? 'border-gray-200 dark:border-gray-800' : "h-0 border-none border-collapse  bg-transparent"}`}>
    {
        messages.length > 0 && (
          <Card className="flex items-center justify-center p-1 flex-col rounded-none shadow-none border-none gap-4">
           
              <CardDescription className="my-4">
               Remember: It Okay to not be okay. You are not alone.
              </CardDescription>
              
          
          </Card>
        )
      }
      <div  ref={(ref) => (messagesRef.current = ref as HTMLDivElement)} className={`flex flex-col max-h-96 sm:max-h-[600px] sm:mb-1 mb-16 overflow-y-auto ${messages.length > 0 ? 'overflow-y-auto mb-40' : 'h-0 border-none border-collapse  bg-transparent'}`}>
        <div className="p-4 flex-1 grid pb-16 sm:pb-24 gap-4 flex-col-reverse"   >
        {messages.map((m, index) => (
          <Card 
          className='p-4 border border-gray-100 flex flex-col  shadow shadow-transparent 
           ' 
         
           key={index}   >
            {m.role === 'user' ? (
              <div className="flex justify-end items-center" >
                <div className="flex flex-col bg-gray-100  rounded-md p-2 items-end shadow-sm">
                  <div className="p-2  text-gray-900 rounded-md "   >
                  <Markdown remarkPlugins={[remarkGfm]}  className="prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0">
                    {m.content}
                    </Markdown>


                  </div>
                  <div className='flex justify-end items-center gap-x-3 px-2  gap-1'>
                     {/* copy  */}
                     <div className=" bg-transparent shadow-transparent flex justify-end gap-x-1  ">
                      <button
                      
                        onClick={() => {
                          navigator.clipboard.writeText(m.content);
                          setUserIsCopied(true);
                          setTimeout(() => {
                            setUserIsCopied(false);
                          }, 1000);
                        }}
                        className=" bg-transparent text-black"
                      >
                        {
                          UserisCopied ? (
                          <span className="flex items-center ">
                              <Check className="w-4 h-4" />
                              
                            </span>
                          ) : (
                              <span className="flex items-center">
                              <Copy className="w-4 h-4" />
                             
                            </span>
                            
                          )
                        }
                      </button>
                  </div>
                  <div className="text-xs  text-black bg-white rounded-full p-1">
                     {
                        m.role === "user" && (<User className="w-4 h-4" />)

                     }
                    </div>  

                   
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex justify-start items-center" >
                <div className="flex bg-green-200 p-2 rounded-md flex-col items-start shadow-sm" >
                  <div className="p-2   text-gray-900 rounded-md "  >
                  <Markdown remarkPlugins={[remarkGfm]}  className="prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0">
                    {m.content}
                    </Markdown>
                  </div>
                  <div className='flex justify-start items-center gap-x-3 px-2 gap-1'>
                  <div className="text-xs  text-black rounded-full bg-white p-1">
                      {
                          m.role === "assistant" && (<BotIcon className="w-4 h-4" />)
  
                      }
                    </div>  
                  <div className=" bg-transparent shadow-transparent flex justify-end gap-x-1 ">
                      <button
                      
                        onClick={() => {
                          navigator.clipboard.writeText(m.content);
                          setAssistanceIsCopied(true);
                          setTimeout(() => {
                            setAssistanceIsCopied(false);
                          }, 1000);
                        }}
                        className=" bg-transparent text-black"
                      >
                        {
                          AssistanceisCopied ? (
                          <span className="flex items-center">
                              <Check className="w-4 h-4" />
                              
                            </span>
                          ) : (
                              <span className="flex items-center">
                              <Copy className="w-4 h-4" />
                             
                            </span>
                            
                          )
                        }
                      </button>
                  </div>
                    </div>
                     


                </div>
              </div>
            )}

            {/* users */}


          </Card>
          ))}

            {/* clear chats */}
        <Card className=" flex flex-row justify-center items-center   gap-4 border-none  gap-x-2 ring-0 shadow-none ">
          <Button
            onClick={() => {
              setMessages([]);
              setInput("");
            }}
            className=" bg-transparent border-none  text-black hover:bg-transparent hover:text-black"
          >
            <span>Clear</span>
            <Trash2Icon className="w-5 h-5" />
          </Button>
            {/* scroll to top */}
    <Button
      onClick={() => {
        messagesRef.current?.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }}
      className=" bg-transparent border-none
      flex justify-center items-center gap-x-1 text-black hover:bg-transparent hover:text-black"
        
    >
        <span>Scroll to top</span>
        <ArrowUp className="w-5 h-5" />
        
    </Button>
          </Card>
        </div>
      
        <div className="p-4 border-t bg-white fixed sm:inset-x-1/4 inset-x-0 sm:mt-1 mt-14 bottom-0 z-20  grid items-center gap-4">
          <form className=" flex justify-between items-center flex-row gap-1.5 "
           onSubmit={handleSubmit}
          >
            <label className="sr-only" htmlFor="message">
              Message
            </label>
            <Textarea
              value={input}
              onChange={handleInputChange}
              onKeyPress={(e: React.KeyboardEvent<HTMLTextAreaElement>) => handleKeyEnter(e)}
              className="w-full  min-h-[50px] max-h-max appearance-none resize-none rounded-md border-0 shadow-none peer
              dark:bg-gray-800 dark:text-gray-50 dark:border-gray-800 dark:focus-visible:ring-gray-300
              "
              id="message"
              placeholder="Type your message..."
            />
              <Button
            type="submit" 
            className=" rounded-md border flex justify-center items-center gap-x-1 border-gray-200 py-7   bg-gray-900 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
          >
           <span>
           <TooltipProvider>
  <Tooltip >
    <TooltipTrigger className=' rounded-full  p-2'>
       <span>
        send
       </span>
       <SendIcon className="w-5 h-5" />
    </TooltipTrigger>
    <TooltipContent>
      <p>
        send message
      </p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
           </span>
           
          </Button>
          </form>
        
        </div>
      </div>
    </Card>
  
    {/* go home */}
    <button
      onClick={() => {
        window.location.href = "/";
      }}
      className="fixed left-4  top-2  z-50  text-gray-50 "
    >
        
        <TooltipProvider>
  <Tooltip >
    <TooltipTrigger className=' rounded-full flex-col justify-center items-center m-auto bg-transparent shadow-md sm:text-white text-black sm:bg-gray-900 p-2'>
      <ArrowLeft className="w-5 h-5" />
    </TooltipTrigger>
    <TooltipContent>
      <p>
        Go Home
      </p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>

    </button>
  </section>
  );
}
