import Image from "next/image";

import dp from "@/assets/profile-white.jpg";

import { MovingBorderContainer } from "./ui/moving-border";

function Bio() {
  return (
    <MovingBorderContainer
      duration={5000}
      className="w-full flex flex-col gap-4 p-4 bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.2)] lg:flex-row lg:p-8"
    >
      <div className="lg:basis-[30%]">
        <Image
          src={dp.src}
          alt="profile picture"
          width={500}
          height={500}
          className="w-20 h-20 rounded-full border-2 lg:w-40 lg:h-40"
        />
      </div>
      <div className="flex flex-col gap-4 lg:basis-[70%]">
        <h1 className="text-2xl font-bold text-gray-100">
          Darwin R. Guillermo
        </h1>
        <p className="text-lg text-gray-100 text-justify">
          I am a third-year Bachelor of Science in Information Technology (BSIT)
          student eager to apply the knowledge and skills I have gained in the
          classroom to real world experiences through an internship. My goal is
          to learn from professionals, enhance my technical abilities, and
          contribute to meaningful projects. I am passionate about technology,
          problem-solving, and continuous learning, and I am excited to grow
          both personally and professionally in a hands-on work environment.
        </p>
        <a
          download
          href="/Guillermo_Darwin.pdf"
          className="self-end bg-gradient-to-r from-[#3e4e6e] to-[#212e41] rounded-xl px-4 py-2 font-semibold text-xl my-2 active:scale-95 duration-200"
        >
          Download My Resume
        </a>
      </div>
    </MovingBorderContainer>
  );
}

export default Bio;
