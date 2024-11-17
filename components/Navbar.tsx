'use client'
import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaEnvelope, FaGithub } from 'react-icons/fa';
import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Importing framer-motion

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-4 bg-transparent backdrop-blur-md">
      {/* Navbar container with flexbox layout */}
      <div className="flex items-center justify-between">
        {/* Logo - Replace with your logo image */}
        <Link href="/" className="flex items-center">
          <img src="/images/logo.png" alt="Logo" className="h-12 w-auto" />
        </Link>

        {/* Hamburger Menu Icon for Small Screens */}
        <motion.div
          className="text-white text-3xl md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Display 'X' icon when open, and a hamburger icon when closed */}
          {isOpen ? '✕' : '☰'}
        </motion.div>

        {/* Navigation Links Section - Shown on Medium Screens and Larger */}
        <div className="hidden md:flex items-center gap-6 mr-6 py-3">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-white hover:text-cyan-500 text-lg">Home</Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link href="/skills" className="text-white hover:text-cyan-500 text-lg">Capabilities</Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/projects" className="text-white hover:text-cyan-500 text-lg">Projects</Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="/contact" className="text-white hover:text-cyan-500 text-lg">Contact</Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/about" className="text-white hover:text-cyan-500 text-lg">About </Link>
          </motion.div>

          {/* Icons Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn" className="text-blue-600 hover:text-cyan-500 text-4xl">
              <FaLinkedin />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link href="https://www.linkedin.com/in/muskan-nisar-3135a42b3" target="_blank" aria-label="Instagram" className="text-pink-600 hover:text-pink-400 text-4xl">
              <FaInstagram />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Link href="mailto:nisarmuskan14@gmail.com" aria-label="Email" className="text-purple-600 hover:text-purple-400 text-4xl">
              <FaEnvelope />
            </Link>
          </motion.div>
          {/* GitHub Icon */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Link href="https://github.com/yourusername" target="_blank" aria-label="GitHub" className="text-gray-600 hover:text-gray-400 text-4xl">
              <FaGithub />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <div
        className={`${
          isOpen ? 'flex' : 'hidden'
        } flex-col items-center gap-4 mt-4 md:hidden transition-transform duration-300 ease-in-out`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="text-white hover:text-cyan-500 text-3xl">Home</Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link href="/skills" className="text-white hover:text-cyan-500 text-3xl">Capabilities</Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href="/projects" className="text-white hover:text-cyan-500 text-3xl">Projects</Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/contact" className="text-white hover:text-cyan-500 text-3xl">Contact</Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/about" className="text-white hover:text-cyan-500 text-3xl">About</Link>
        </motion.div>

        {/* Icons Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link href="https://www.linkedin.com/in/muskan-nisar-3135a42b3" target="_blank" aria-label="LinkedIn" className="text-blue-600 hover:text-cyan-500 text-3xl">
            <FaLinkedin />
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link href="https://www.instagram.com" target="_blank" aria-label="Instagram" className="text-pink-600 hover:text-pink-400 text-3xl">
            <FaInstagram />
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Link href="mailto:nisarmuskan14@gmail.com" aria-label="Email" className="text-purple-600 hover:text-purple-400 text-3xl">
            <FaEnvelope />
          </Link>
        </motion.div>
        {/* GitHub Icon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link href="https://github.com/muskann12" target="_blank" aria-label="GitHub" className="text-gray-600 hover:text-gray-400 text-3xl">
            <FaGithub />
          </Link>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
