"use client";

import { useState } from "react";
import { profileData } from "@/data/profile";
import SectionHeading from "./SectionHeading";
import MotionWrapper from "./MotionWrapper";
import { Mail, Phone, Copy, Check, Send } from "lucide-react";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    if (cooldown > 0) {
      const timer = setTimeout(() => setCooldown(c => c - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [cooldown]);

  const checkSpam = () => {
    const historyStr = localStorage.getItem("msgHistory");
    let history: number[] = historyStr ? JSON.parse(historyStr) : [];
    
    const now = Date.now();
    // Filter messages in the last 60 seconds
    history = history.filter(time => now - time < 60000);
    
    if (history.length >= 3) {
      alert("Spam protection: Limit of 3 messages per minute reached. Please wait.");
      return false;
    }
    
    const lastSent = history.length > 0 ? history[history.length - 1] : 0;
    if (now - lastSent < 30000) {
       alert("Please wait before sending again.");
       return false;
    }

    return true;
  };

  const recordSend = () => {
    const historyStr = localStorage.getItem("msgHistory");
    let history: number[] = historyStr ? JSON.parse(historyStr) : [];
    const now = Date.now();
    history = history.filter(time => now - time < 60000);
    history.push(now);
    localStorage.setItem("msgHistory", JSON.stringify(history));
    setCooldown(30);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!checkSpam()) return;
    
    setStatus("sending");
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        recordSend();
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        alert("Failed to send. Please try again.");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      alert("Error sending message. Please check your connection.");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-luxury-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrapper>
          <SectionHeading title="LET'S CONNECT" />
        </MotionWrapper>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          
          <MotionWrapper>
            <div className="space-y-10">
              <p className="text-luxury-muted text-xl leading-relaxed font-medium">
                Interested in AI, cybersecurity, intelligent systems or collaborative projects? Let&apos;s connect.
              </p>
              
              <div className="flex flex-col space-y-6">
                <div className="flex items-center space-x-6 bg-white border border-luxury-border p-6 rounded-2xl shadow-lg">
                  <div className="p-4 bg-luxury-cream rounded-full border border-luxury-border">
                    <Mail className="text-luxury-text" size={24} />
                  </div>
                  <div className="flex-grow overflow-hidden">
                    <p className="text-[10px] text-luxury-muted font-bold uppercase tracking-widest mb-1">Email</p>
                    <p className="text-base sm:text-lg font-black text-luxury-text truncate">{profileData.email}</p>
                  </div>
                  <button 
                    onClick={copyToClipboard}
                    className="p-3 text-luxury-muted hover:text-luxury-text transition-colors rounded-xl hover:bg-luxury-gray"
                    title="Copy email"
                  >
                    {copiedEmail ? <Check className="text-green-600" size={20} /> : <Copy size={20} />}
                  </button>
                </div>
                
                <div className="flex items-center space-x-6 bg-white border border-luxury-border p-6 rounded-2xl shadow-lg">
                  <div className="p-4 bg-luxury-cream rounded-full border border-luxury-border">
                    <Phone className="text-luxury-text" size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] text-luxury-muted font-bold uppercase tracking-widest mb-1">Phone</p>
                    <p className="text-base sm:text-lg font-black text-luxury-text">{profileData.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </MotionWrapper>
          
          <MotionWrapper delay={0.2}>
            <form onSubmit={handleSubmit} className="bg-white border border-luxury-border p-10 rounded-3xl space-y-8 shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-[10px] font-bold text-luxury-muted uppercase tracking-widest">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-luxury-cream border border-luxury-border rounded-xl px-5 py-4 text-luxury-text focus:outline-none focus:border-cyber-cyan focus:bg-white transition-all font-medium shadow-inner"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="text-[10px] font-bold text-luxury-muted uppercase tracking-widest">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-luxury-cream border border-luxury-border rounded-xl px-5 py-4 text-luxury-text focus:outline-none focus:border-cyber-cyan focus:bg-white transition-all font-medium shadow-inner"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label htmlFor="subject" className="text-[10px] font-bold text-luxury-muted uppercase tracking-widest">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-luxury-cream border border-luxury-border rounded-xl px-5 py-4 text-luxury-text focus:outline-none focus:border-cyber-cyan focus:bg-white transition-all font-medium shadow-inner"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div className="space-y-3">
                <label htmlFor="message" className="text-[10px] font-bold text-luxury-muted uppercase tracking-widest">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-luxury-cream border border-luxury-border rounded-xl px-5 py-4 text-luxury-text focus:outline-none focus:border-cyber-cyan focus:bg-white transition-all font-medium shadow-inner resize-none"
                  placeholder="How can we work together?"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={status === "sending" || cooldown > 0}
                className="w-full bg-luxury-text text-white font-bold py-4 rounded-xl hover:bg-black transition-all flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-xl hover:-translate-y-1"
              >
                {status === "sending" ? (
                  <span className="font-mono text-sm flex items-center"><span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></span> PROCESSING...</span>
                ) : status === "success" ? (
                  <span className="text-green-400 flex items-center font-bold tracking-widest"><Check size={20} className="mr-3" /> MESSAGE SENT</span>
                ) : cooldown > 0 ? (
                  <span className="tracking-widest uppercase">WAIT {cooldown}s</span>
                ) : (
                  <>
                    <span className="tracking-widest uppercase">Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
