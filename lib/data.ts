import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { SiSap } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import finanseerImg from "@/public/finanseer.png";
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
    title: "Technical Consultant",
    company: "Thomax Technology NZ Ltd",
    location: "Auckland, NZ",
    description:
      "Developed and implement technical specifications including setting up, configuration, testing and deployment of WMS and integrations. Understand functional specifications and contribute to project documentation such as Solutions Design, Standard Operating Procedures, test cases.",
    icon: React.createElement(SiDotnet),
    date: "03/2024 - 10/2024",
  },
  {
    title: "Technical Consultant/ Full-Stack Developer",
    company: "invenioLSI",
    location: "Suva, FJ",
    description:
      "I worked as a SAP Full Stack Developer with expertise in S/4 HANA, SAPUI5, ABAP, Webdynpro, OData, BRF+, SAP BTP, and Node.js as a versatile professional who bridges the gap between user interfaces and server-side logic. I design, develop, and maintain fully-fledged SAP systems, ensuring seamless functionality and robust applications.",
    icon: React.createElement(SiSap),
    date: "08/2021 - present",
  },
  {
    title: "Analyst Programmer",
    company: "Ministry of Lands",
    location: "Suva, FJ",
    description:
      "I worked as a full-stack developer crafting web applications using C#, .Net core, MVC, Web API, SQL Server and ReactJS.",
    icon: React.createElement(SiDotnet),
    date: "07/2021 - 08/2021",
  },
  {
    title: "Analyst Programmer/ IT Team Lead",
    company: "Ministry of Agriculture",
    location: "Suva, FJ",
    description:
      "I worked as a full-stack developer crafting web applications using C#, .Net core, MVC, Web API, SQL Server and ReactJS.",
    icon: React.createElement(SiDotnet),
    date: "01/2020 - 06/2021",
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
    title: "Finanseer",
    description:
      "I worked as a full-stack developer on this hobby project for 2 months. Users can search for publicly available financial data provided by https://site.financialmodelingprep.com, and add them to their portfolio.",
    tags: ["React", "Typescript", ".NET 8", "Rest API", "PostgreSQL", "Azure"],
    imageUrl: finanseerImg,
    projectUrl: "https://finanseer-react-app.vercel.app/"
  }
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
  "Agile",
  "SCRUM",
  "npm",
  "JQuery",
] as const;
