// Modern Personal Portfolio @jdomingu19
// Taught by @pedrotech
// src/layout/Footer.jsx

import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/jdomingu19", label: "GitHub" },

  { icon: FaXTwitter, href: "https://x.com/jdomingu19", label: "X" },
  {
    icon: FaInstagram,
    href: "https://instagram.com/jdomingu19",
    label: "Instagram",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/jesus-dominguez-charris",
    label: "LinkedIn",
  },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              JD<span>.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Jesús Domínguez. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
