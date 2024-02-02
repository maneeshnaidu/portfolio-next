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
        After graduating with a Bachelors degree in{" "}
        <span className="font-medium">Computer Science and Information Systems</span>, I decided to pursue my
        passion for programming. Soon after I got involved in the art of{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          C#, .NET, .NET Core, React.js and SQL Server or 
          SAP S/4 HANA, ABAP, SAPUI5, OData, CDS, Node.js, SAP BTP and cloud technologies AWS or AZURE
        </span>
        . I am also familiar with TypeScript, Python, Django, FastAPI, Postgres and MySQL. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing football. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">3D game development</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
