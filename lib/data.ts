import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import alleraid from "@/public/alleraid.png";
import blunt from "@/public/blunt.png";
import diamond_allegiance from "@/public/diamond_allegiance.png";
import coffee_shop from "@/public/coffee_shop.png";
import supa_social_app from "@/public/supa_social_app.png";

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
    title: "Msc Software Systems",
    location: "Tamil Nadu, India",
    description:
      "I graduated after 5 years of studying. I immediately found a job as a mobile-app developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2017 to 2022",
  },
  {
    title: "Associate Software Developer @Heptagon Technologies",
    location: "Tamil Nadu, India",
    description:
      "I worked as a junior Mobile-App and Web developer for 1.8 years. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec-2021 to Aug 2023",
  },
  {
    title: "Software Engineer @Quess Crp Ltd",
    location: "Bangalore, India",
    description:
      "I'm now  currently working as a  Mobile App developer. My stack includes React-Native(Mobile App), React, Next.js, JavaScript, TypeScript, Tailwind. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "Sep-2023 to present",
  },
] as const;

export const projectsData = [
  {
    title: "Blunt-Social",
    description:
      "I worked as a junior mobile app developer on this startup project for 1.5 years. It is a Social-Media application, combination of Facebook and WhatsApp.",
    tags: ["React Native", "JavaScript", "AWS", "Firebase", "Adobe XD"],
    imageUrl: blunt,
  },
  {
    title: "Diamond Allegiance",
    description:
      "Developed Diamond Allegiance, a React Native app for baseball players, coaches, and teams. It streamlines team management, scheduling, and player engagement.",
    tags: ["React Native", "JavaScript", "AWS", "Firebase", "Native Modules", "Figma", "in-app Subscriptions"],
    imageUrl: diamond_allegiance,
  },
  {
    title: "AllerAid",
    description:
      "I developed AllerAid, an allergy tracking app using React Native. It helps users monitor symptoms, track triggers, and manage their allergies effectively.",
    tags: ["React-Native", "TypeScript", "Tailwind", "Figma", "Firebase-Notiifications", "O-Auth", "redux-toolkit"],
    imageUrl: alleraid,
  },
  {
    title: "Supa Social App",
    description:
      "A social media app I developed using React Native and Supabase, enabling seamless content sharing, real-time interactions, and media uploads.",
    tags: [
      "React-Native", "JavaScript", "redux", "Supabase", "Firebase-Notiifications", "O-Auth"],
    imageUrl: supa_social_app,
  },
  {
    title: "Coffee Shop",
    description:
      "A beautifully designed React Native app showcasing an elegant coffee shop UI with smooth navigation and an intuitive user experience.", tags: ["React-Native", "TypeScript", "zustand", "Figma"],
    imageUrl: coffee_shop,
  },

] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React Native",
  "Android Studio",
  "XCode",
  "React",
  "HTML",
  "CSS",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;