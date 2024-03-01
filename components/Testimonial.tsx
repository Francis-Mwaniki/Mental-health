import React from 'react';
const testimonialsData = [
    {
      name: 'Alice Johnson',
      avatar: 'https://ui-avatars.com/api/?background=random&name=Alice+Johnson',
      text: "Our team has been a lifesaver. I feel more in control of my emotions and anxiety. The daily exercises are simple yet effective.",
      rating: 4,
    },
    {
      name: 'Mark Thompson',
      avatar: 'https://ui-avatars.com/api/?background=random&name=Mark+Thompson',
      text: "Our team&apos;s meditation sessions have been a game-changer. They&apos;ve helped me sleep better and reduce stress. I recommend it to anyone looking to improve their mental well-being.",
      rating: 5,
    },
    {
      name: 'Sophia Lee',
      avatar: 'https://ui-avatars.com/api/?background=random&name=Sophia+Lee',
      text: "Our team&apos;s journaling feature has been incredibly helpful. It&apos;s like having a personal therapist in my pocket. I appreciate our team&apos;s gentle nudges and reminders to take care of my mental health.",
      rating: 5,
    },
    {
      name: 'David Garcia',
      avatar: 'https://ui-avatars.com/api/?background=random&name=Dylan+Smith',
      text: `Our team&apos;s breathing exercises have been a game-changer. They&apos;ve helped me manage my stress and anxiety, especially during busy workdays. I love our team&apos;s calming interface and soothing music.`,
      rating: 4,
    },
  ];

export default function Component() {
  return (
    <section className="w-full py-12 lg:py-24">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Real Stories from Our Users</h2>
          <p className="mx-auto max-w-2xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Our team has made a difference in people&apos;s lives. Here&apos;s what they have to say.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 lg:gap-10 md:grid-cols-2">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="flex flex-col gap-2">
              <img
                alt="User"
                className="rounded-full object-cover"
                height="96"
                src={testimonial.avatar}
                style={{
                  aspectRatio: "96/96",
                  objectFit: "cover",
                }}
                width="96"
              />
              <div className="grid gap-1.5">
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.text}</p>
                <div className="flex items-center gap-1">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <div key={i} className="grid w-4 h-4 rounded-full bg-primary" />
                  ))}
                  {Array.from({ length: 5 - testimonial.rating }, (_, i) => (
                    <div key={i} className="grid w-4 h-4 rounded-full bg-gray-200 dark:bg-gray-800" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
