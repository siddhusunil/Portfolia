import React from 'react'
import { SiCss3, SiHtml5, SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiShadcnui, SiTailwindcss, SiTypescript } from 'react-icons/si'
import Title from './Title'
import Link from 'next/link'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'
import { cn } from '@/lib/utils'

export default function Projects() {
    const projects = [
        {
            title:"Educational Content (Penbyt)",
            tech: [SiTypescript,SiTailwindcss,SiMongodb,SiNodedotjs],
            link: "https:www.penbyt.com",
            cover: "/penbyt.png",
            background: "bg-green-500",
        },
        {
            title:"E- Learning Platform (B2A)",
            tech: [SiReact,SiNodedotjs,SiMongodb,SiHtml5,SiCss3],
            link: "https://b2-a-frontend.vercel.app/.com",
            cover: "/elearning.png",
            background: "bg-indigo-500",
        },
        {
            title:"Portfolia",
            tech: [SiTypescript,SiTailwindcss,SiNextdotjs],
            link: "https://b2-a-frontend.vercel.app/.com",
            cover: "/portfolia.png",
            background: "bg-yellow-500",
        },
    ]
  return (
    <div className='py-10 p-5 sm:p-0'>
      <div className='max-w-4xl mx-auto px-3'>
      <Title text="Projects 🚀" className='flex flex-col items-center justify-center rotate-6'/>
      <div className='grid grid-cols-1 sm:grid-cols-2 pt-10 gap-5'>
        {projects.map((project, index)=>{
            return <Link href={project.link} key={index}>
                <div className={cn("p-2 rounded-md",project.background)}>
                    <DirectionAwareHover imageUrl={project.cover} className='w-full space-y-5 cursor-pointer'>
                        <div className='space-y-5'>
                        <h1 className='text-2xl font-bold'>{project.title}</h1>
                        <div className='flex items-center gap-5'>
                            {project.tech.map((Icon,index)=>{
                            return <Icon className='w-5 h-5' key={index}/>
                        })}
                        </div>
                        </div>
                    </DirectionAwareHover>
                </div>
            </Link>
        })}
      </div>
    </div>
    </div>
  )
}
