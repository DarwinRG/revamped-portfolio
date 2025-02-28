import Image from "next/image";

import fb from "@/assets/fb.webp";
import insta from "@/assets/insta.webp";
import github from "@/assets/github.webp";

type SocialProps = {
  src: string;
  alt: string;
  link: string;
};

export const socialObject: SocialProps[] = [
  {
    link: "https://github.com/DarwinRG",
    alt: "github logo",
    src: github.src,
  },

  {
    link: "https://www.facebook.com/YourCosmicGuy",
    alt: "facebook logo",
    src: fb.src,
  },
  {
    link: "https://www.instagram.com/your.cosmic_guy/",
    alt: "instagram logo",
    src: insta.src,
  },
];

function Social({ src, alt, link }: SocialProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-8 h-8 lg:w-10 lg:h-10 hover:brightness-50"
    >
      <Image src={src} alt={alt} fill priority />
    </a>
  );
}

export default Social;
