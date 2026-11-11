
import { Github, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#080b14]/90 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-violet-400">
          AS<span className="text-white">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map(([name, href]) => (
            <a
              key={name}
              href={href}
              className="text-gray-300 hover:text-violet-400 transition"
            >
              {name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex gap-4">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <Github className="hover:text-violet-400 transition" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            <Linkedin className="hover:text-violet-400 transition" />
          </a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col gap-5 px-6 pb-6">
          {links.map(([name, href]) => (
            <a
              key={name}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-300"
            >
              {name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
