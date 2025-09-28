import paciflix from "@/assets/paciflix.png";
import sunday from "@/assets/sunday.jpg";
import tutor from "@/assets/tutor.png";
import student from "@/assets/student.png";
import wbms from "@/assets/wbms.jpeg";
import libraryAttendance from "@/assets/library-attendance.jpeg";
import appointment from "@/assets/appointment.jpeg";

const projects = [
  {
    title: "Library Attendance System",
    tech: "A comprehensive library management system designed to track student attendance and manage library resources efficiently. Features include user authentication, attendance tracking, and resource management.",
    href: "https://github.com/DarwinRG/Library-Attendance-System",
    github: "https://github.com/DarwinRG/Library-Attendance-System",
    image: libraryAttendance.src,
  },
  {
    title: "Appointment System",
    tech: "A modern appointment scheduling system built with full-stack technologies. Enables users to book, manage, and track appointments with real-time notifications and calendar integration.",
    href: "https://github.com/DarwinRG/Appointment-System",
    github: "https://github.com/DarwinRG/Appointment-System",
    image: appointment.src,
  },
  {
    title: "Web-based Monitoring System for Maritime Students",
    tech: "A specialized monitoring system designed for maritime students to track their academic progress, attendance, and performance. Features real-time data visualization and comprehensive reporting.",
    href: "https://github.com/DarwinRG/Maritime-Monitoring-System",
    github: "https://github.com/DarwinRG/Maritime-Monitoring-System",
    image: wbms.src,
  },
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
    title: "Student Lists App",
    tech: "Student Lists is an Android application designed to manage and organize student information efficiently. It allows users to add, and delete student details. With portrait and landscape layouts, and light/dark color themes.",
    href: "https://github.com/DarwinRG/StudentLists/releases/tag/v1.7",
    github: "https://github.com/DarwinRG/StudentLists",
    image: student.src,
  },
];

export { projects };
