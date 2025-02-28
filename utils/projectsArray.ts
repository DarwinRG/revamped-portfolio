import paciflix from "@/assets/paciflix.png";
import sunday from "@/assets/sunday.jpg";
import scs from "@/assets/scs.jpg";
import tutor from "@/assets/tutor.png";
import student from "@/assets/student.png";
import journey from "@/assets/blog.png";

const projects = [
  {
    title: "Paciflix Web Streaming App",
    tech: "Paciflix is a streaming site that offers a wide variety of movies and TV shows. Enjoy seamless streaming with our user-friendly interface and high-quality content.",
    href: "https://paciflix.darwinrg.me/",
    github: "https://github.com/DarwinRG/Paciflix-public",
    image: paciflix.src,
  },
  {
    title: "Sunday AI Assistant",
    tech: "Sunday is an innovative AI-driven bot designed to enhance user interactions on Discord. Leveraging Google's generative AI, it provides intelligent text responses and processes images to create engaging conversations.",
    href: "https://github.com/DarwinRG/Sunday",
    github: "https://github.com/DarwinRG/Sunday",
    image: sunday.src,
  },
  {
    title: "School Cafeteria Simulation",
    tech: "Simulates the operations of a school cafeteria using the SimPy library. It models the behavior of students arriving at the cafeteria, waiting in line, and being served by cashiers and servers.",
    href: "https://github.com/DarwinRG/School-Cafeteria-Simulation",
    github: "https://github.com/DarwinRG/School-Cafeteria-Simulation",
    image: scs.src,
  },
  {
    title: "Tutor Appointment System",
    tech: "Laravel-based tutor appointment system. It includes various features such as user authentication, appointment scheduling, and management of tutors and subjects.",
    href: "https://github.com/DarwinRG/tutor-appointment-system",
    github: "https://github.com/DarwinRG/tutor-appointment-system",
    image: tutor.src,
  },
  {
    title: "Student Lists App",
    tech: "Student Lists is an Android application designed to manage and organize student information efficiently. It allows users to add, and delete student details. With portrait and landscape layouts, and light/dark color themes.",
    href: "https://github.com/DarwinRG/StudentLists/releases/tag/v1.7",
    github: "https://github.com/DarwinRG/StudentLists",
    image: student.src,
  },
    {
        title: "My Academic Journey",
        tech: "A simple website showing photos from my academic journey.",
        href: "https://student.darwinrg.tech/",
        github: "https://github.com/DarwinRG/academic-student-journey",
        image: journey.src,
    },
];

export { projects };
