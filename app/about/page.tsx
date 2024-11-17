'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import { FaPage4 } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/main-bg.webp')" }}
    >
      <div className="flex flex-col items-start justify-start text-gray-100 p-6 bg-black bg-opacity-60 min-h-screen py-40">
        {/* About Me Section */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-purple-400 mb-8 p-4 rounded-md relative"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <span className="relative z-10">A Journey Through Creativity & Code</span>
          <span className="absolute inset-0 blur-lg opacity-60 bg-slate-700 rounded-full animate-pulse"></span>
        </motion.h1>

        <motion.p
          className="max-w-3xl text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
        >
          I'm Muskan Nisar, a passionate front-end developer and UX/UI designer. My goal is to create beautiful and intuitive web experiences. I combine technical skills with creative design to build engaging applications that are not only functional but also delightful to use.
        </motion.p>

        {/* My Journey Section */}
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-purple-400 mb-8 p-4 rounded-md relative"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <span className="relative z-10">The Tech Journey</span>
          <span className="absolute inset-0 blur-lg opacity-60 bg-slate-700 rounded-full animate-pulse"></span>
        </motion.h2>

        <motion.p
          className="max-w-3xl text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
        >
          From learning Python to embracing UI/UX design, my journey in tech is fueled by a love for creating and problem-solving. I am always looking for new challenges to push my boundaries and expand my skills.
        </motion.p>

        {/* Hobbies Section */}
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-purple-400 mb-8 p-4 rounded-md relative"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <span className="relative z-10">Hobbies & Passions</span>
          <span className="absolute inset-0 blur-lg opacity-60 bg-slate-700 rounded-full animate-pulse"></span>
        </motion.h2>

        <motion.p
          className="max-w-3xl text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
        >
          When I'm not coding, I'm on the badminton court, experimenting in the kitchen, or finding new ways to stay creative and energized.
        </motion.p>

        {/* Education Section */}
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-purple-400 mb-8 p-4 rounded-md relative"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <span className="relative z-10">Education & Certifications</span>
          <span className="absolute inset-0 blur-lg opacity-60 bg-slate-700 rounded-full animate-pulse"></span>
        </motion.h2>

        <motion.p
          className="max-w-3xl text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
        >
          I'm currently pursuing my Intermediate studies and have certifications in IT Automation with Python and UI/UX Design.
        </motion.p>

      
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
