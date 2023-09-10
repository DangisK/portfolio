"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-4 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:dangiskazukauskas@gmail.com">
          dangiskazukauskas@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Thank you for reaching out. I'll respond as soon as possible. :)", {
            duration: 4000,
          });
        }}
      >
        <input
          type="email"
          required
          name="senderEmail"
          maxLength={500}
          className="h-14 px-4 rounded-lg borderBlack 
          dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your email"
        />
        <textarea
          required
          name="message"
          maxLength={500}
          className="h-52 my-3 rounded-lg borderBlack p-4
          dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your message"
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
