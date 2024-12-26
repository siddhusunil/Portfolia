"use client";
import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { SiGit, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiPostman, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'

export default function Skills() {
  const skills = [
  {
    text: "React",
    Icon: SiReact,
  },
  {
    text: "Next.js",
    Icon: SiNextdotjs,
  },
  {
    text: "Tailwind CSS",
    Icon: SiTailwindcss,
  },
  {
    text: "TypeScript",
    Icon: SiTypescript,
  },
  {
    text: "JavaScript",
    Icon: SiJavascript,
  },
  {
    text: "Node.js",
    Icon: SiNodedotjs,
  },{
    text: "Git",
    Icon: SiGit,
  },
  {
    text: "MongoDB",
    Icon: SiMongodb,
  },
  {
    text: "Postman",
    Icon: SiPostman,
  },
]

  return (
    <div className='max-w-5xl mx-auto px-3'>
      <Title text="Skills 💡" className='flex flex-col items-center justify-center -rotate-6'/>
      <HoverEffect items={skills}/>
    </div>
  )
}
