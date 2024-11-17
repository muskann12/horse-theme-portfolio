'use client'
import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaGithub, FaFigma, FaPython } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiUikit, SiTailwindcss } from 'react-icons/si';
import { TbUserCircle } from 'react-icons/tb';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

const SkillsSection = () => {
  const skills = [
    { icon: <FaHtml5 />, color: '#E34F26', name: 'HTML', description: 'The backbone of web structure, enabling content organization and accessibility.' },
    { icon: <FaCss3Alt />, color: '#1572B6', name: 'CSS', description: 'Brings visual appeal, layout, and responsiveness to websites.' },
    { icon: <FaJs />, color: '#F7DF1E', name: 'JavaScript', description: 'Adds interactivity, making sites dynamic and user-friendly.' },
    { icon: <SiNextdotjs />, color: '#FFFFFF', name: 'Next.js', description: 'A powerful React framework for fast, scalable web applications.' },
    { icon: <SiTypescript />, color: '#3178C6', name: 'TypeScript', description: 'Adds static typing to JavaScript, improving code quality and maintainability.' },
    { icon: <FaFigma />, color: '#F24E1E', name: 'Figma', description: 'Essential for UI design, enabling collaboration and prototyping.' },
    { icon: <TbUserCircle />, color: '#FF5722', name: 'User Research', description: 'Ensures designs meet user needs through data-driven insights.' },
    { icon: <SiUikit />, color: '#3DDC84', name: 'UX/UI', description: 'Enhances user satisfaction by improving usability and accessibility.' },
    { icon: <FaGithub />, color: '#FFFFFF', name: 'GitHub', description: 'Essential for version control, collaboration, and project management.' },
    { icon: <FaPython />, color: '#3776AB', name: 'Python', description: 'Ideal for backend development, data analysis, and scripting.' },
    { icon: <SiTailwindcss />, color: '#06B6D4', name: 'Tailwind CSS', description: 'A utility-first CSS framework for faster, responsive design.' },
  ];

  return (
    <div
      className="flex flex-col items-center justify-center p-10 min-h-screen py-40 bg-cover bg-center relative"
      style={{
        backgroundImage: `url('/images/main-bg.webp'), linear-gradient(to right, rgba(63, 43, 150, 0.8), rgba(121, 30, 150, 0.8))`,
        backgroundBlendMode: 'overlay',
      }}
    >
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-purple-200 glow-text">SKILLS</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center text-center p-6 w-80 rounded-lg shadow-lg bg-transparent transition-transform transform hover:scale-105 bg-opacity-80"
          >
            <div
              className="text-6xl md:text-7xl"
              style={{ color: skill.color }}
            >
              {skill.icon}
            </div>
            <p className="mt-2 text-xl font-semibold text-gray-300">{skill.name}</p>
            <p className="mt-2 text-gray-400 text-sm">{skill.description}</p>
          </motion.div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default SkillsSection;
