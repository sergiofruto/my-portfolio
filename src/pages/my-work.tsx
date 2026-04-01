import React from 'react';
import Link from 'next/link';
import { JetBrains_Mono } from 'next/font/google';
import { BsArrowLeft } from 'react-icons/bs';
import { motion } from 'framer-motion';

const techFont = JetBrains_Mono({ subsets: ['latin'] });

const myWorks = [
  {
    title: "Cresteo",
    subtitle: "Full Stack Engineer | Next.js, AWS",
    description: "Migrated legacy platform to robust Next.js App Router and Server Components architecture. Streamlined automated CI/CD pipelines via GitHub Actions & AWS, emphasizing rapid full-cycle shipping and production performance optimization."
  },
  {
    title: "Deviget",
    subtitle: "Full Stack Engineer | React, Node.js, GCP",
    description: "Led development of multi-client platforms, building reusable UI libraries and scalable backend services using Node.js & AWS Lambda. Drove end-to-end delivery of advanced web interfaces with a focus on accessibility and performance."
  },
  {
    title: "Mercado Libre",
    subtitle: "Frontend Developer | React, SEO, Performance",
    description: "Engineered high-performance components for the Search & Conversion team at LatAm's largest e-commerce platform. Specialized in crucial SEO enhancements and Core Web Vitals optimization, directly impacting business revenue."
  },
  {
    title: "Scale AI",
    subtitle: "UI Developer | Next.js, Design Systems",
    description: "Built the primary marketing landing pages and unified the design system for the industry-leading AI infrastructure company. Integrated Contentful headless CMS to empower the marketing team to launch product features exponentially faster."
  },
  {
    title: "Auth0",
    subtitle: "UI Engineer | React, Styled Components",
    description: "Migrated the legacy marketing website to a modern React stack. Designed, implemented, and maintained the global frontend design system serving millions of developers worldwide."
  }
];

export default function MyWork() {
  return (
    <div className={`min-h-screen bg-[#030303] text-white ${techFont.className} relative overflow-hidden`}>
      {/* Subtle Background */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 py-12 md:py-24 relative z-10">
        <Link href="/" className="inline-flex items-center space-x-2 text-gray-500 hover:text-white transition-colors mb-16">
          <BsArrowLeft size="1.2rem" />
          <span className="tracking-wide">Back to Home</span>
        </Link>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-20 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
        >
          Engineering Experience.
        </motion.h1>

        <div className="space-y-6">
          {myWorks.map((work, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              key={work.title} 
              className="p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
                <h2 className="text-3xl font-bold tracking-tight text-white">{work.title}</h2>
                <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mt-2 md:mt-0">{work.subtitle}</h3>
              </div>
              
              <p className="text-gray-400 text-lg leading-relaxed max-w-3xl font-light">
                {work.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
