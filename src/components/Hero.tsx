"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Square } from "lucide-react";
import { VOICE_SCRIPT, speakText, stopSpeech } from "@/lib/voice";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.getVoices();
    }
    return () => stopSpeech();
  }, []);

  const handlePlay = () => {
    if (isPlaying) {
      stopSpeech();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      speakText(
        VOICE_SCRIPT, 
        () => setIsPlaying(true), 
        () => setIsPlaying(false)
      );
    }
  };

  return (
    <section className="min-h-screen pt-24 pb-12 flex items-center overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-8"
          >
            {/* Eyebrow */}
            <div className="flex flex-col space-y-2">
              <span className="text-sm font-mono text-cyber-cyan font-bold tracking-widest uppercase">AI & DATA SCIENCE</span>
              <span className="text-[10px] font-mono text-luxury-muted font-bold tracking-widest uppercase">CYBERSECURITY • AI • DATA ANALYTICS</span>
            </div>
            
            {/* Headlines */}
            <div className="flex flex-col space-y-6">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-luxury-text">
                SAMPATH<br />
                S HEBBAR
              </h1>
              
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-luxury-muted leading-tight">
                Building Intelligent Systems.<br />
                Securing Digital Experiences.
              </h2>
            </div>
            
            {/* Description */}
            <p className="text-base sm:text-lg text-luxury-muted max-w-xl leading-relaxed">
              I am an Artificial Intelligence and Data Science student with a strong
              interest in cybersecurity, ethical hacking, data analytics, prompt
              engineering and practical AI systems.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col space-y-4 pt-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/projects" 
                  className="bg-luxury-text text-white shadow-xl shadow-luxury-text/10 px-6 py-4 rounded-xl font-bold hover:bg-black transition-all flex items-center justify-center text-sm w-full sm:w-auto hover:-translate-y-1"
                >
                  EXPLORE MY WORK
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                
                <button 
                  onClick={handlePlay}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#E6F7FF] border border-[#B3E5FC] text-[#0091D5] font-mono text-sm font-bold tracking-wide hover:bg-[#D0EFFF] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm w-full sm:w-auto"
                >
                  <span className={`text-base ${isPlaying ? "animate-pulse" : ""}`}>
                    {isPlaying ? "⏸" : "▶"}
                  </span>
                  {isPlaying ? "SPEAKING..." : "LISTEN TO MY INTRO"}
                </button>
              </div>
              
              <Link 
                href="/contact" 
                className="bg-white border border-luxury-border text-luxury-text px-6 py-4 rounded-xl font-bold hover:shadow-lg transition-all w-full sm:w-48 text-center text-sm hover:-translate-y-1"
              >
                CONTACT ME
              </Link>
            </div>
          </motion.div>
          
          {/* Right Content - Portrait & HUD */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-md mx-auto mt-16 lg:mt-0 aspect-[3/4]"
          >
            {/* Main Portrait Box */}
            <div className="absolute inset-0 bg-white rounded-2xl shadow-2xl overflow-hidden border border-luxury-border p-2">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image 
                  src="/profile.png" 
                  alt="Sampath S Hebbar"
                  fill
                  className="object-cover object-top opacity-95"
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              
                {/* Voice Waveform Overlay on Mouth */}
                {isPlaying && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute top-[35%] left-[55%] -translate-x-1/2 -translate-y-1/2 z-30 bg-white/80 backdrop-blur-sm border border-cyber-cyan/30 p-2 rounded-full shadow-xl"
                  >
                    <div className="flex items-center space-x-1 h-4">
                      <span className="w-1 bg-cyber-cyan animate-[pulse_0.4s_ease-in-out_infinite_alternate] h-2"></span>
                      <span className="w-1 bg-cyber-cyan animate-[pulse_0.6s_ease-in-out_infinite_alternate] h-4"></span>
                      <span className="w-1 bg-cyber-cyan animate-[pulse_0.5s_ease-in-out_infinite_alternate] h-3"></span>
                      <span className="w-1 bg-cyber-cyan animate-[pulse_0.7s_ease-in-out_infinite_alternate] h-4"></span>
                      <span className="w-1 bg-cyber-cyan animate-[pulse_0.45s_ease-in-out_infinite_alternate] h-2"></span>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Floating Technical Labels */}
            <div className="absolute top-1/4 -right-4 sm:-right-8 flex flex-col space-y-3 z-30">
              {["AI & DATA SCIENCE", "CYBERSECURITY", "ETHICAL HACKING"].map((label) => (
                <div key={label} className="bg-white/80 backdrop-blur-md border border-luxury-border px-4 py-2 rounded-xl text-[10px] sm:text-xs font-bold text-luxury-text shadow-xl text-right">
                  {label}
                </div>
              ))}
            </div>
            
            <div className="absolute bottom-[30%] -left-4 sm:-left-8 flex flex-col space-y-3 z-30">
              {["VAPT", "AI + GPT", "DATA ANALYTICS"].map((label) => (
                <div key={label} className="bg-white/80 backdrop-blur-md border border-luxury-border px-4 py-2 rounded-xl text-[10px] sm:text-xs font-bold text-luxury-text shadow-xl">
                  {label}
                </div>
              ))}
            </div>

            {/* Bottom Status Card */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white border border-luxury-border p-4 rounded-xl shadow-2xl z-30 flex items-center space-x-4 min-w-[220px]">
              <div className="w-10 h-10 rounded-full bg-cyber-cyan/10 flex items-center justify-center">
                <div className="w-3 h-3 bg-cyber-cyan rounded-full animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-luxury-muted uppercase tracking-widest">SYSTEM PROFILE</span>
                <span className="text-luxury-text font-black text-sm tracking-widest">SAMPATH S HEBBAR</span>
                <span className="text-cyber-cyan text-[10px] font-bold tracking-widest uppercase">Active Status</span>
              </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
