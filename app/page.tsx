
'use client'
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const Page = () => {
  return (
    <main className="w-screen h-screen mx-auto relative flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/images/main-bg.webp)" }}
    >
      <div className="flex flex-col items-center text-center gap-5 z-[10] max-w-[90%] sm:max-w-[750px] mt-10 px-4 sm:px-8">
        <motion.h1
          className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[50px] text-white font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Empowering Brands Through
        </motion.h1>

        <motion.span
          className="text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Design and Development
        </motion.span>

        <motion.p
          className="text-gray-200 text-sm sm:text-base md:text-lg max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
        >
          "With a unique blend of UX/UI design and web development, I build digital experiences that leave an impression. Discover my skills and projects crafted with creativity and functionality."
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1, ease: 'easeOut' }}
        >
          <Link href="/skills" className="rounded-[20px] bg-gradient-to-r from-purple-500 to-cyan-500 hover:bg-cyan-300 py-3 px-6 text-base sm:text-lg text-white">
            Capabilities
          </Link>
          <Link href="/about" className="rounded-[20px] border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-300 hover:text-white py-3 px-6 text-base sm:text-lg">
            About me
          </Link>
          <Link href="/about" className="rounded-[20px] border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white py-3 px-6 text-base sm:text-lg">
            Contact
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-0 right-0 z-[10]">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <Image
            src="/images/horse.png"
            alt="horse"
            height={250}
            width={250}
            className="right-2 md:right-10 md:bottom-10 bottom-2"
          />
        </motion.div>
      </div>

      <div className="absolute bottom-0 z-[5] w-full h-full">
        <Image 
          src="/images/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="h-full w-full"
        />
      </div>

      {/* Footer Component */}
      <Footer />
    </main>
  );
};

export default Page;
