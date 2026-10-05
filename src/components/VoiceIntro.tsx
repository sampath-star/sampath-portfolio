"use client";
import { useEffect, useState } from "react";

export default function VoiceIntro() {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const shortAlphaScript = `I am Sam path S Hebbar. A I and Data Science Engineer. Certified Cybersecurity Specialist at I Q. I break systems to build stronger ones.`;

  const speakAlpha = () => {
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(shortAlphaScript);

    // Get best natural male voice - NOT AI robotic
    const voices = window.speechSynthesis.getVoices();
    const maleVoices = voices.filter(v =>
      v.name.includes("Guy") ||
      v.name.includes("David") ||
      v.name.includes("Daniel") ||
      v.name.includes("Male") ||
      v.name.includes("Google UK English Male") ||
      v.name.toLowerCase().includes("guy") ||
      (v.lang === "en-US" && v.name.includes("Natural"))
    );

    // Prefer first male natural voice, fallback to best English
    if (maleVoices.length > 0) {
      utterance.voice = maleVoices[0];
    } else {
      const englishVoices = voices.filter(v => v.lang.startsWith("en"));
      if (englishVoices.length > 0) utterance.voice = englishVoices[0];
    }

    // ALPHA BOY SETTINGS - Deep, confident, natural
    utterance.rate = 0.92; // Slightly slow - confident
    utterance.pitch = 0.82; // Deep boy voice
    utterance.volume = 1;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    // Load voices
    const loadVoices = () => {
      window.speechSynthesis.getVoices();
    };
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    // Auto speak after 1.2s on About page
    const timer = setTimeout(() => {
      if (window.location.pathname.includes("about")) {
        speakAlpha();
      }
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <button
      onClick={speakAlpha}
      className={`px-6 py-3 rounded-xl bg-luxury-text text-white font-bold transition-all shadow-xl hover:-translate-y-1 ${isSpeaking? 'scale-105 bg-cyber-cyan' : ''}`}
    >
      {isSpeaking? '● Speaking...' : '▶ Hear My Intro'}
    </button>
  );
}
