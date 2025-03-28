import Image from "next/image";
import Social, { socialObject } from "./Social";

import gmail from "@/assets/gmail.webp";
import house from "@/assets/house.webp";
import telephone from "@/assets/telephone.webp";
import { MovingBorderContainer } from "./ui/moving-border";

function Address() {
  return (
    <MovingBorderContainer
      duration={5000}
      className="w-full flex flex-col gap-4 bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.2)] lg:flex-row lg:p-8"
      containerClassName="w-full"
    >
      <address className="flex justify-center items-center w-full text-gray-100 not-italic">
        <div className="flex flex-col w-full gap-4 px-4 py-6 rounded-3xl lg:gap-8">
          <div className="flex items-center justify-start gap-2 text-lg">
            <Image
              src={house.src}
              alt="house image"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <p>San Manuel, Pangasinan, Philippines</p>
          </div>

          <div className="flex items-center justify-start gap-2 text-lg">
            <Image
              src={telephone.src}
              alt="phone image"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <a href="tel:+919051872565">+639762640347</a>
          </div>

          <div className="flex items-center justify-start gap-2 text-lg">
            <Image
              src={gmail.src}
              alt="gmail logo"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <a href="mailto:darwinrguillermo11@gmail.com">
              darwinrguillermo11@gmail.com
            </a>
          </div>

          <div className="w-[80%] mx-auto mt-4 flex justify-between items-center lg:w-full">
            {socialObject.map((item) => (
              <Social
                key={item.src}
                src={item.src}
                alt={item.alt}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </address>
    </MovingBorderContainer>
  );
}

export default Address;
