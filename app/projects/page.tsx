'use client'; 

import Footer from '@/components/Footer';
import Link from 'next/link';
import React from 'react';

const ProjectsSection: React.FC = () => {
  const projects = [
    { 
      name: 'Pizza Landing Page Rotating Animation', 
      description: 'Figma Design', 
      link: 'https://www.figma.com/proto/suOQT3rnaZKyHBz5GhwEkr/Untitled?node-id=8-40&node-type=canvas&t=k3BbPBh2Fi2ed6c9-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1', 
      image: '/images/piza.png' 
    },
    { 
      name: 'Shoe Landing Page', 
      description: 'Figma Design', 
      link: 'https://www.figma.com/proto/Sy1YQYf2IdNHAucIntTPVz/Untitled?node-id=1-2&node-type=canvas&t=4xziBamw7fG8HhMY-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1', 
      image: '/images/shoe.png' 
    },
    { 
      name: 'Body Shop E-commerce Design', 
      description: 'Figma Design', 
      link: 'https://www.figma.com/proto/cD1F7uVOY13HGoV2oCpGcT/Untitled?page-id=0%3A1&node-id=2-2&node-type=canvas&viewport=414%2C-79%2C0.21&t=loY1d8uJxE7rnOVF-1&scaling=scale-down&content-scaling=fixed', 
      image: '/images/bodyshop2.png' 
    },

    
    { 
      name: 'Resume Builder', 
      description: 'TypeScript, HTML, CSS', 
      link: 'https://dynamic-resume-builder-dusky.vercel.app/', 
      image: '/images/resume.png' 
    },


    { 
      name: 'Restaurant Website', 
      description: 'HTML, CSS', 
      link: 'https://burger-website-eight-ochre.vercel.app/', 
      image: '/images/burger.png' 
    },
    { 
      name: 'SuperSpace Portfolio', 
      description: 'Next.js, Tailwind CSS', 
      link: 'https://space-portfolio-red.vercel.app/', 
      image: '/images/ss.png' 
    },

    { 
      name: 'Horror Blog website', 
      description: 'Nextjs, Tailwand CSS Framer motion', 
      link: 'https://horror-blog-seven.vercel.app/', 
      image: '/images/horror.png' 
    },
    { 
      name: 'ATM Machine', 
      description: 'TypeScript', 
      link: 'https://github.com/muskann12/ATM_Machine.git', 
      image: '/images/ts.png' 
    },
    { 
      name: 'Static Resume', 
      description: 'TypeScript, HTML', 
      link: 'https://static-resume-milestone1-five.vercel.app/', 
      image: '/images/static.png' 
    },
  ];

  return (
    <div
      className="flex flex-col items-center justify-center p-10 min-h-screen py-40 bg-cover bg-center relative"
      style={{
        backgroundImage: `url('/images/main-bg.webp'), linear-gradient(to right, rgba(63, 43, 150, 0.8), rgba(121, 30, 150, 0.8))`,
        backgroundBlendMode: 'overlay',
      }}
    >
      {/* My Projects Heading with Glow Effect */}
      <h1 className="text-4xl font-extrabold text-center text-purple-300 glow-text mb-10">
        PROJECTS
      </h1>

      {/* Projects Cards Container */}
      <div className="flex flex-wrap justify-center gap-8 px-5 py-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative block w-72 h-96 p-6 rounded-lg bg-transparent text-white text-center shadow-lg transition-all transform hover:scale-105 hover:drop-shadow-2xl hover:ring-2 hover:ring-purple-600 cursor-pointer shadow-black"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="mt-2 text-gray-400 text-sm">{project.description}</p>
            <Link href={project.link}>
              <div className="mt-4 py-2 px-4 bg-purple-500 text-white rounded-full hover:bg-purple-800">
                View
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsSection;
