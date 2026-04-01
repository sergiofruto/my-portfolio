import React from "react";
import Link from 'next/link';
import { JetBrains_Mono } from 'next/font/google';
import { BsArrowLeft, BsStars, BsLightningCharge, BsCodeSlash } from 'react-icons/bs';
import { motion } from 'framer-motion';

const techFont = JetBrains_Mono({ subsets: ['latin'] });

export default function Skills() {
  return (
    <div className={`min-h-screen bg-[#030303] text-white ${techFont.className} relative overflow-hidden`}>
      {/* Dynamic Backgrounds */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 py-12 md:py-24 relative z-10">
        <Link href="/" className="inline-flex items-center space-x-2 text-gray-500 hover:text-white transition-colors mb-16">
          <BsArrowLeft size="1.2rem" />
          <span className="tracking-wide text-sm font-medium uppercase">Back to Home</span>
        </Link>
        
        <header className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
          >
            Pipelines <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">& AI.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl leading-relaxed"
          >
            Shipping scalable products requires an ecosystem designed for speed, reliability, and intelligence. 
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden group hover:bg-white/10 transition-colors"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-cyan-500/10 rounded-2xl text-cyan-400">
                <BsStars size="1.5rem" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">AI-Assisted Dev</h2>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8 text-lg font-light">
              Integrating LLMs directly into the SDLC to 10x output. I write, refactor, and debug orders of magnitude faster.
            </p>
            <ul className="space-y-4 text-base text-gray-300 font-medium tracking-wide">
              <li className="flex items-center space-x-3"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span><span>Cursor & GitHub Copilot workflows</span></li>
              <li className="flex items-center space-x-3"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span><span>Automated Code Reviews via Agentic AI</span></li>
              <li className="flex items-center space-x-3"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span><span>ChatGPT for architectural planning</span></li>
            </ul>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden group hover:bg-white/10 transition-colors"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-purple-500/10 rounded-2xl text-purple-400">
                <BsLightningCharge size="1.5rem" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Automated Pipelines</h2>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8 text-lg font-light">
              Treating infrastructure as code and deployments as zero-click processes. Less time waiting, more time shipping.
            </p>
            <ul className="space-y-4 text-base text-gray-300 font-medium tracking-wide">
              <li className="flex items-center space-x-3"><span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.8)]"></span><span>GitHub Actions for robust CI/CD</span></li>
              <li className="flex items-center space-x-3"><span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.8)]"></span><span>AWS & GCP cloud architectures</span></li>
              <li className="flex items-center space-x-3"><span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.8)]"></span><span>Vercel / Edge Network deployments</span></li>
            </ul>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 shadow-xl md:col-span-2 relative overflow-hidden group hover:bg-white/10 transition-colors"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-400">
                <BsCodeSlash size="1.5rem" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Core Engineering Stack</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
              <div>
                <h3 className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-4">Frontend</h3>
                <ul className="space-y-3 text-base text-gray-300 font-medium">
                  <li>React / Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Framer Motion</li>
                </ul>
              </div>
              <div>
                <h3 className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-4">Backend</h3>
                <ul className="space-y-3 text-base text-gray-300 font-medium">
                  <li>Node.js</li>
                  <li>C# / .NET</li>
                  <li>Python</li>
                  <li>GraphQL</li>
                </ul>
              </div>
              <div>
                <h3 className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-4">Cloud & CMS</h3>
                <ul className="space-y-3 text-base text-gray-300 font-medium">
                  <li>AWS Lambda</li>
                  <li>Google Cloud</li>
                  <li>Contentful CMS</li>
                  <li>Azure</li>
                </ul>
              </div>
               <div>
                <h3 className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-4">Specialties</h3>
                <ul className="space-y-3 text-base text-gray-300 font-medium">
                  <li>Design Systems</li>
                  <li>SEO & Vitals</li>
                  <li>Accessibility</li>
                  <li>UX Polishing</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
