import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import courses from "@/public/courses.png";
import workoutsprogress from "@/public/workoutsprogress.png";
import blogsite from "@/public/blogsite.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Courier",
    location: "Kaunas, Lithuania",
    description:
      "I worked as a courier for a pizzeria, where I delivered food and assisted in the kitchen.",
    icon: React.createElement(CgWorkAlt),
    date: "2019/11 - 2020/07",
  },
  {
    title: "C# Intern",
    location: "Vilnius, Remote",
    description:
      "I worked as a backend developer for 3 months, during which I deepened my knowledge of C# and .NET technologies.",
    icon: React.createElement(CgWorkAlt),
    date: "2023/02 - 2023/05",
  },
  {
    title: "Graduated from Kaunas University of Technology",
    location: "Kaunas, Lithuania",
    description: "I graduated after 4 years of studying with a degree in Software Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Maths Tutor",
    location: "Lithuania",
    description:
      "Responsible for teaching students of various ages mathematics and preparing them for upcoming tests and exams.",
    icon: React.createElement(FaReact),
    date: "2023/08 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Workouts Progress Tracking",
    description:
      "A fitness application, that can be used for creating workouts and tracking progress of their friends and their own. \nSample username: Useris1, password: Useris1!",
    tags: ["React", ".NET", "MSSQL", "Material UI", "C#", "i18next"],
    imageUrl: workoutsprogress,
    websiteUrl: "https://dangis-workouts.vercel.app",
  },
  {
    title: "BlogIt",
    description:
      "A vlog-style website resembling Facebook and other post-sharing platforms. Users can create, like, and comment on posts. \nSample username: Useris1, password: Useris1!",
    tags: ["React", ".NET", "MSSQL", "Material UI", "C#"],
    imageUrl: blogsite,
    websiteUrl: "https://blogit-e6ho.onrender.com/",
  },
  {
    title: "Course platform",
    description: "A course platform where people can enroll in courses and create them.",
    tags: ["React", "TypeScript", "Prisma", "shadcn/ui", "TailwindCSS"],
    imageUrl: courses,
    websiteUrl: "https://dangis-courses.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Redux",
  "Framer Motion",
  "MSSQL",
  "C#",
  ".NET",
] as const;
