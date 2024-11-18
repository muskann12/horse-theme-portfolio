'use client';
import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaEnvelope, FaGithub } from 'react-icons/fa';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-3 bg-transparent backdrop-blur-md">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/images/logo.png" alt="Logo" className="h-8 w-auto" />
        </Link>

        {/* Hamburger Icon */}
        <motion.div
          className="text-white text-2xl md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? '✕' : '☰'}
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Link href="/" className="text-white hover:text-cyan-500 text-base">Home</Link>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <Link href="/skills" className="text-white hover:text-cyan-500 text-base">Capabilities</Link>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <Link href="/projects" className="text-white hover:text-cyan-500 text-base">Projects</Link>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
            <Link href="/contact" className="text-white hover:text-cyan-500 text-base">Contact</Link>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
            <Link href="/about" className="text-white hover:text-cyan-500 text-base">About</Link>
          </motion.div>
          {/* Social Icons */}
          <div className="flex items-center gap-3 ml-4">
            <Link href="https://www.linkedin.com/in/muskan-nisar-3135a42b3" target="_blank" aria-label="LinkedIn" className="text-blue-500 hover:text-cyan-500 text-xl">
              <FaLinkedin />
            </Link>
            <Link href="https://www.instagram.com" target="_blank" aria-label="Instagram" className="text-pink-500 hover:text-pink-400 text-xl">
              <FaInstagram />
            </Link>
            <Link href="mailto:nisarmuskan14@gmail.com" aria-label="Email" className="text-purple-500 hover:text-purple-400 text-xl">
              <FaEnvelope />
            </Link>
            <Link href="https://github.com/muskann12" target="_blank" aria-label="GitHub" className="text-gray-500 hover:text-gray-400 text-xl">
              <FaGithub />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div className={`${isOpen ? 'flex' : 'hidden'} flex-col items-center gap-4 mt-4 md:hidden`}>
        <Link href="/" className="text-white hover:text-cyan-500 text-lg">Home</Link>
        <Link href="/skills" className="text-white hover:text-cyan-500 text-lg">Capabilities</Link>
        <Link href="/projects" className="text-white hover:text-cyan-500 text-lg">Projects</Link>
        <Link href="/contact" className="text-white hover:text-cyan-500 text-lg">Contact</Link>
        <Link href="/about" className="text-white hover:text-cyan-500 text-lg">About</Link>

        {/* Mobile Icons */}
        <div className="flex items-center gap-4 mt-2">
          <Link href="https://www.linkedin.com/in/muskan-nisar-3135a42b3" target="_blank" aria-label="LinkedIn" className="text-blue-500 hover:text-cyan-500 text-2xl">
            <FaLinkedin />
          </Link>
          <Link href="https://www.instagram.com" target="_blank" aria-label="Instagram" className="text-pink-500 hover:text-pink-400 text-2xl">
            <FaInstagram />
          </Link>
          <Link href="mailto:nisarmuskan14@gmail.com" aria-label="Email" className="text-purple-500 hover:text-purple-400 text-2xl">
            <FaEnvelope />
          </Link>
          <Link href="https://github.com/muskann12" target="_blank" aria-label="GitHub" className="text-gray-500 hover:text-gray-400 text-2xl">
            <FaGithub />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
