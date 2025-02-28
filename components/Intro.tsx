"use client";

import Image from "next/image";

import profile from "@/assets/profile.png";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const words = [
  {
    text: "A ",
    className: "text-2xl text-cyan-200 md:text-3xl lg:text-4xl",
  },
  {
    text: "WEB ",
    className: "text-2xl text-cyan-200 md:text-3xl lg:text-4xl",
  },
  {
    text: "DEVELOPER",
    className: "text-cyan-200 text-2xl md:text-3xl lg:text-4xl",
  },
];

const name = "DarwinRG";

export default function Intro() {
  return (
    <div className="w-full flex flex-col items-center justify-center px-2 py-24 lg:flex-row lg:w-[80%] lg:max-w-[1000px] lg:py-2 lg:pt-16">
      <div className="basis-6/12 flex flex-col items-center justify-center">
        <h2 className="text-4xl text-white font-bold md:text-5xl">
          Welcome, I'm
        </h2>
        <h1 className="text-[3.5rem] text-transparent bg-gradient-to-l from-cyan-500 to-blue-700 bg-clip-text font-bold m-0 mt-2 md:text-6xl md:mt-4 lg:text-7xl">
          {name}
        </h1>
        <TypewriterEffectSmooth words={words} cursorClassName="hidden" />
        <a
          href="/about"
          className="mt-4 bg-gradient-to-r from-cyan-500 to-blue-700 text-white font-bold py-2 px-4 rounded-lg text-xl"
        >
          Get to know me!
        </a>
      </div>

      <div className="basis-6/12 flex items-center justify-center aspect-square">
        <Image
          src={profile}
          alt="coding image"
          priority
          className="w-[90%] md:w-full lg:w-[70%]"
        />
      </div>
    </div>
  );
}