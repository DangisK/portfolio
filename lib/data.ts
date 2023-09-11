import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
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
