import React from 'react';
import Link from 'next/link';
import { JetBrains_Mono } from 'next/font/google';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { motion } from 'framer-motion';

const techFont = JetBrains_Mono({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`min-h-screen bg-[#030303] text-white ${techFont.className} relative overflow-hidden`}>
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-[800px] h-[800px] bg-gradient-to-tr from-cyan-600/10 via-blue-600/10 to-purple-600/20 rounded-full blur-[120px]"
        />
      </div>
      
      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center px-6 py-8 md:px-12 max-w-[1400px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold tracking-tighter"
        >
          SGF.
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-x-8 flex items-center"
        >
          <Link href="/my-work" className="text-sm font-medium text-gray-400 hover:text-white transition">Experience</Link>
          <Link href="/skills" className="text-sm font-medium text-gray-400 hover:text-white transition">Pipelines & AI</Link>
          <Link href="https://github.com/sergiofruto" target="_blank"><BsGithub className="text-gray-400 hover:text-white transition text-lg" /></Link>
          <Link href="https://www.linkedin.com/in/sergio-gabriel-fruto-41084645/" target="_blank"><BsLinkedin className="text-gray-400 hover:text-white transition text-lg" /></Link>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[75vh] px-4 text-center max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 mb-10 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-300">Available for Opportunities</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] mb-8"
        >
          <span className="text-white">
            Sergio Gabriel Fruto
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
            Product Engineer
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            AI Powered.
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-[18px] text-gray-400 max-w-4xl font-light mb-12 leading-relaxed text-center"
        >
          Building at the intersection of stable systems and LLM orchestration.<br className="hidden md:block" />
          Leveraging 12+ years of full-stack experience at Scale AI & Auth0 to architect<br className="hidden md:block" />
          autonomous Agentic Workflows and transition cutting-edge<br className="hidden md:block" />
          AI experimental capabilities into production-ready, scalable products.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <Link href="/my-work" className="px-8 py-4 bg-white text-black font-semibold rounded-xl hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
            Explore Experience
          </Link>
          <Link href="/skills" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
            View AI Pipelines
          </Link>
        </motion.div>
      </section>

      {/* Decorative Grid Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-blue-900/10 to-transparent opacity-50 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to top, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'linear-gradient(to top, black, transparent)'}}></div>
    </main>
  );
}
