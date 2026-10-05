"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Internship", href: "/internship" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-luxury-cream/80 backdrop-blur-lg border-b border-luxury-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-mono text-xl font-bold tracking-tighter shrink-0 text-luxury-text">
            SH<span className="text-cyber-cyan">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8 mx-auto">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-cyber-cyan",
                  pathname === link.href ? "text-cyber-cyan" : "text-luxury-muted"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-luxury-muted hover:text-luxury-text"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-luxury-white border-b border-luxury-border shadow-xl"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  pathname === link.href
                    ? "bg-luxury-gray text-cyber-cyan"
                    : "text-luxury-muted hover:bg-luxury-gray hover:text-luxury-text"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}
