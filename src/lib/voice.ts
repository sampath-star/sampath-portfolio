export const VOICE_SCRIPT = `
  Hello, I am Sampath S Hebbar. AI and Data Science Engineer, and Certified Cybersecurity Specialist.

  I am certified at EyeQ Dot Net, India's leading Cyber Security Company. From December twenty twenty four to April twenty twenty five. Credential ID: twelve slash EYEQ I three sixty five slash twenty four twenty five.

  My core focus is offensive security, vulnerability assessment, and intelligent systems architecture. Skilled in OWASP Top Ten, Kali Linux, VAPT, Bug Hunting, and Ethical Hacking.

  I work where AI, Data Science, and Cybersecurity meet. I analyze complex systems, find critical security gaps, and build resilient, data driven solutions.

  My approach is systematic. Understand the architecture, test its limits, secure its foundation. I build systems that are intelligent by design, and secure by default.
`.replace(/\s+/g, ' ').trim();

export const speakText = (text: string, onStart?: () => void, onEnd?: () => void) => {
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  
  const getIndianBoyVoice = () => {
    const voices = window.speechSynthesis.getVoices();
    if (!voices.length) return null;

    // INDIAN BOY VOICE PRIORITY
    const indianVoices = voices.filter(v =>
      v.lang === "en-IN" ||
      v.name.toLowerCase().includes("india") ||
      v.name.includes("India")
    );

    // Prefer Indian Male
    let best = indianVoices.find(v =>
      v.name.toLowerCase().includes("male") ||
      v.name.includes("Ravi") ||
      v.name.includes("Google") && v.lang === "en-IN"
    );

    if (best) return best;
    if (indianVoices.length > 0) return indianVoices[0];

    // Fallback to natural male English
    return voices.find(v => v.name.includes("Guy") || v.name.includes("Male")) || voices[0];
  };

  const bestVoice = getIndianBoyVoice();
  if (bestVoice) {
    utterance.voice = bestVoice;
  }

  // INDIAN BOY NATURAL SETTINGS
  utterance.rate = 0.93; // Natural Indian speaking pace
  utterance.pitch = 0.95; // Natural boy pitch - not too deep
  utterance.volume = 1;
  utterance.lang = "en-IN"; // Force Indian accent

  if (onStart) utterance.onstart = onStart;
  if (onEnd) {
    utterance.onend = onEnd;
    utterance.onerror = onEnd;
  }

  window.speechSynthesis.speak(utterance);
};

export const stopSpeech = () => {
  window.speechSynthesis.cancel();
};
