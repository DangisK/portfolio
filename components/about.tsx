"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in <span className="font-medium">Software Engineering</span>,
        I decided to pursue my passion for full-stack development. To achieve my goal, I enrolled in
        a coding bootcamp and learned <span className="font-medium">front-end technologies</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the problem-solving
        aspect. I <span className="underline">love</span> the feeling of finally figuring out a
        solution to a problem. My core stack is <span className="font-medium">React and .NET</span>.
        I am also familiar with TypeScript. I am always looking to learn new technologies, and
        currently looking for a <span className="font-medium">full-time position</span> as a
        software developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing video games, watching
        movies or binging psychology videos. I also enjoy{" "}
        <span className="font-medium">going to the gym</span> as it helps me stay active and
        maintain a healthy lifestyle.
      </p>
    </motion.section>
  );
}
