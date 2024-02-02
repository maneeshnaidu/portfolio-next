import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { SiSap } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
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
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
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
    title: "Technical Consultant/ Full-Stack Developer",
    company: "invenioLSI",
    location: "Suva, FJ",
    description:
      "I work as a SAP Full Stack Developer with expertise in S/4 HANA, SAPUI5, ABAP, Webdynpro, OData, BRF+, SAP BTP, and Node.js as a versatile professional who bridges the gap between user interfaces and server-side logic. I design, develop, and maintain fully-fledged SAP systems, ensuring seamless functionality and robust applications.",
    icon: React.createElement(SiSap),
    date: "08/2021 - present",
  },
  {
    title: "Systems Analyst Programmer",
    company: "Ministry of Lands",
    location: "Suva, FJ",
    description:
      "I worked as a full-stack developer crafting web applications using C#, .Net core, MVC, Web API, SQL Server and ReactJS.",
    icon: React.createElement(SiDotnet),
    date: "07/2021 - 08/2021",
  },
  {
    title: "Assistant Programmer/ IT Team Lead",
    company: "Ministry of Agriculture",
    location: "Suva, FJ",
    description:
      "I worked as a full-stack developer crafting web applications using C#, .Net core, MVC, Web API, SQL Server and ReactJS.",
    icon: React.createElement(SiDotnet),
    date: "04/2020 - 06/2021",
  },
  {
    title: "Software Developer",
    company: "SAAS (Fiji) Ltd",
    location: "Suva, FJ",
    description:
      "I worked as a full-stack developer crafting web applications using C#, .Net core, MVC, Web API, SQL Server and ReactJS hosted on AWS cloud.",
    icon: React.createElement(SiDotnet),
    date: "01/2020 - 03/2020",
  },
  {
    title: "Software Developer",
    company: "QIT Pacific Pte Ltd",
    location: "Suva, FJ",
    description:
      "I worked as a full-stack developer crafting web applications using C#, .Net Framework, MVC, Web API, SQL Server and Backbone.js hosted on AWS cloud.",
    icon: React.createElement(SiDotnet),
    date: "04/2020 - 06/2021",
  },
  {
    title: "Software Developer",
    company: "QIT Pacific Pte Ltd",
    location: "Suva, FJ",
    description:
      "I worked as a full-stack developer crafting web applications using C#, .Net Framework, MVC, Web API, SQL Server, Backbone.js hosted on AWS cloud.",
    icon: React.createElement(SiDotnet),
    date: "10/2019 - 12/2019",
  },
  {
    title: "Software Engineer",
    company: "Crimsonlogic Pte Ltd",
    location: "Suva, FJ",
    description:
      "I worked on backend development for web applications using C#, .Net Framework, MVC, SQL Server hosted on Azure cloud. I also picked up automation testing skills writing test scripts using Selenium and Maven.",
    icon: React.createElement(SiDotnet),
    date: "04/2019 - 10/2019",
  },
  {
    title: "IT Intern",
    company: "Fijian Competition & Consumer Commission",
    location: "Suva, FJ",
    description:
      "I provided ongoing IT support, configuration of emails, troubleshooting of Windows PC's and Windows server administration. I also worked on developing and maintaining the company website which was built on Wordpress.",
    icon: React.createElement(CgWorkAlt),
    date: "01/2019 - 03/2019",
  },
  {
    title: "Graduated",
    company: "Fiji National University",
    location: "Suva, FJ",
    description:
      "I graduated with a Bachelor of Science with double majoring in Computer Science and Information Systems. I also was Runner Up of Smart City Challenge Suva Hackathon 2018 - as a member of the Fiji National University Team ",
    icon: React.createElement(LuGraduationCap),
    date: "03/2020",
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
  "C#",
  ".NET",
  ".NET Core",
  "REST",
  "SOAP",
  "Web API",
  "MVC",
  "SQL Server",
  "SAP",
  "SAP BTP",
  "S/4 HANA",
  "SAPUI5",
  "ABAP",
  "VB.NET",
  "XML",
  "Json",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Backbone.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "MongoDB",
  "PostgreSQL",
  "Python",
  "Django",
  "AWS",
  "Azure",
  "SCRUM",
  "npm",
  "JQuery",
] as const;
