"use client";
import { SparklesCore } from "./ui/sparkles";

export function Hero() {
  return (
    <div className="h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="p-4 relative z-10 w-full text-center">
        <h1
          className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
        >
          Hey, I&apos;m <span className="text-blue-300">Aman Pandey</span>
        </h1>
        <p
          className="mt-10 text-xl md:text-2xl font-bold bg-clip-text max-w-2xl mx-auto text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
        >
          A <span className="text-blue-300">Frontend Developer</span> who crafts sleek and responsive web experiences using React, Next.js, and Tailwind CSS
        </p>
      </div>
    </div>
  );
}
