import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import { SiGithub, SiInstagram, SiLinkedin, SiWhatsapp, SiX } from "react-icons/si";


export default function Navbar({className}:{className?:string}) {

    const socials = [
        {
            link:"https://in.linkedin.com/in/bayikati-sunil-3b6759280",
            label: "Linkedin",
            Icon: SiLinkedin,
        },
        {
            link:"https:www.github.com/siddhusunil/",
            label: "Github",
            Icon: SiGithub,
        },
        {
            link:"https:www.instagram.com/wise_men_siddhu",
            label: "Instagram",
            Icon: SiInstagram,
        },
        {
            link:"https:www.x.com/bayikati-sunil",
            label: "X",
            Icon: SiX,
        },
        {
          link:"https:wa.me/919000404079",
          label: "Whatsapp",
          Icon: SiWhatsapp,
        }
    ]

  return (
  
    <nav className={cn('py-10 flex justify-between items-center animate-move-down',className)}>
      <h1 className='text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2'> BAYIKATI SUNIL 👨🏼‍💻</h1>
      <div className='flex items-center gap-4'>
        {socials.map((social,index)=>{

          const Icon = social.Icon;

          return <Link href={social.link} key={index} aria-label={social.label}>
            <Icon className='w-5 h-5 hover:scale-125 transition-all' />
          </Link>
        })}
      </div>
    </nav>
  );
}
