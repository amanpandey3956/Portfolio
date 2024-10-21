"use client";
import { SparklesCore } from "./ui/sparkles";

export function Hero2() {
  return (
    <div className="min-h-screen relative w-full bg-gradient-to-b from-gray-1000 to-gray-1100 flex items-center justify-center overflow-hidden border-neutral-600">  
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlesfullpage2"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF" 
        />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center lg:items-start justify-between p-4">
  
        <div className="w-full lg:w-2/3 h-full flex flex-col items-center lg:items-start justify-start mb-8 lg:mb-0">
          <h1 className="mt-16 lg:mt-0 text-5xl font-bold bg-clip-text text-transparent text-white text-center lg:text-left lg:ml-48">
            Let Me <span className="text-purple-300">Introduce</span> Myself
          </h1>
          <p className="mt-16 lg:mt-14 text-lg lg:text-justify font-semibold bg-clip-text text-transparent text-white text-justify lg:ml-24">
            I&apos;m a Frontend Focused Web Developer Driven by a passion for digital transformation, I am a versatile frontend developer specializing in creating seamless and engaging user experiences.
            <br /><br />
            As a dedicated frontend developer, I am committed to driving digital transformation through innovative web solutions. My approach combines technical proficiency with a strategic mindset, enabling me to translate complex challenges into effective, user-centric designs. My experience spans building dynamic applications with React.js, Next.js, TypeScript, and integrating libraries like Framer Motion for enhanced interactivity. I embrace emerging technologies and innovative frameworks to push the boundaries of what is possible in web development.
            <br/><br/>
            I&apos;m open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don &apos;t hesitate to contact me.
          </p>
        </div>

        <div className="w-full mt-14 lg:w-1/3 h-full flex items-center justify-center">
          <img
            src="/projects/myimg.jpg"
            alt="Your Image"
            className="rounded-full w-[250px] h-[250px] md:w-[350px] md:h-[350px] object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
