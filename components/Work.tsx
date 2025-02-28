import Image from "next/image";

import map from "@/assets/map.webp";
import calendar from "@/assets/calendar.webp";
import { MovingBorderContainer } from "./ui/moving-border";

type WorkProps = {
  from: string;
  to: string;
  company: string;
  title: string;
  description: string[];
  location: string;
};

const workArray: WorkProps[] = [
  {
    from: "JANUARY 2024",
    to: "APRIL 2024",
    company: "Panpacific University",
    title: "Intern",
    description: [
      "Assisted the KINS Department of Panpacific University in technical tasks.",
      "Gained hands-on experience in technical tasks and document handling.",
    ],
    location: "Urdaneta City, Pangasinan",
  },
  {
    from: "JANUARY 2021",
    to: "FEBRUARY 2021",
    company: "San Manuel LGU",
    title: "Intern",
    description: [
      "Assisted the Local Government Unit (LGU) in processing and managing business permits.",
      "Gained hands-on experience in administrative tasks and document verification.",
    ],
    location: "San Manuel, Pangasinan",
  },
];

function Work() {
  return (
    <div className="w-full">
      <h2 className="text-center text-3xl text-white my-6 font-bold lg:text-left">
        Experience
      </h2>
      <div className="flex flex-col gap-6 lg:flex-row">
        {workArray.map((item) => (
          <div className="lg:basis-[50%] lg:flex" key={item.company}>
            <MovingBorderContainer
              duration={5000}
              className="bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.2)]"
              containerClassName="w-full"
            >
              <div className="w-full rounded-3xl p-4 text-gray-50 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <div>
                    <Image
                      src={calendar.src}
                      width={24}
                      height={24}
                      alt="calendar"
                    />
                    <p>{item.from}</p>
                  </div>
                  <div className="flex flex-col">
                    <Image
                      src={calendar.src}
                      width={24}
                      height={24}
                      alt="calendar"
                      className="self-end"
                    />
                    <p>{item.to}</p>
                  </div>
                </div>
                <h1 className="text-2xl font-semibold">{item.company}</h1>
                <h1 className="text-lg">{item.title}</h1>
                <ul className="list-disc pl-5">
                  {item.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
                <div className="flex items-center gap-3">
                  <Image src={map.src} alt="address" width={24} height={24} />
                  <h2 className="text-lg">{item.location}</h2>
                </div>
              </div>
            </MovingBorderContainer>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
