import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { href: "#about", label: "About" },
    { href: "#work", label: "Work" },
    { href: "#resume", label: "Resume" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-black/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="font-semibold tracking-tight text-black">LiveEvents • Portfolio</a>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-black/80 hover:text-black transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 inline-flex items-center rounded-full bg-[#0891b2] text-white px-4 py-2 text-sm font-medium hover:opacity-90 transition"
          >
            Let’s talk
          </a>
        </nav>
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-black/10 text-black"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <Menu size={20} />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/10 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-4 grid gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm text-black/80 hover:text-black"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-[#0891b2] text-white px-4 py-2 text-sm font-medium"
            >
              Let’s talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
