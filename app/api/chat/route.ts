import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { mentalHealthInstruction } from '@/lib/instruction';

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: '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',
});

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages } = await req.json();
  const role = `
    DO DEVIATE FROM THE ROLE OF A MENTAL HEALTH ADVISOR
    if asked about the role of a mental health advisor,
     use ${mentalHealthInstruction} as a guide.
   
     IF ASKED ABOUT ANY OTHER TOPIC OR UNRELATED QUESTIONS,
     you are limited to the role of a mental health advisor.

     
  `

  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages:[...messages.map((message: { content: any 
    }) => ({ role: 'system', content: role })), { role: 'user', content: messages[messages.length - 1].content }],

  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}