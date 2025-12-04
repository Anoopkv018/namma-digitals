import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Gradient glow background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-10 h-48 w-48 rounded-full bg-amber-500/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="text-3xl font-semibold bg-gradient-to-r from-yellow-400 via-orange-500 to-rose-500 bg-clip-text text-transparent">
                NammaDigitals
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Elevating brands through strategic digital innovation and creative excellence.
              Your success story starts with our expertise.
            </p>
            <div className="flex space-x-3 pt-2">
              <a
                href="https://www.facebook.com/profile.php?id=61579048598208"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 text-slate-300 hover:text-blue-500 hover:border-blue-400 hover:bg-slate-900 transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/nammadigitals/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 text-slate-300 hover:text-pink-500 hover:border-pink-400 hover:bg-slate-900 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-[0.18em] uppercase text-slate-200">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-300 transition-colors"
              >
                <span className="h-px w-3 bg-slate-600 group-hover:bg-amber-300 hidden sm:inline-block" />
                <span>Home</span>
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-300 transition-colors"
              >
                <span className="h-px w-3 bg-slate-600 hidden sm:inline-block" />
                <span>About Us</span>
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-300 transition-colors"
              >
                <span className="h-px w-3 bg-slate-600 hidden sm:inline-block" />
                <span>Services</span>
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-300 transition-colors"
              >
                <span className="h-px w-3 bg-slate-600 hidden sm:inline-block" />
                <span>Pricing</span>
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-[0.18em] uppercase text-slate-200">
              Our Services
            </h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <span className="text-slate-400 hover:text-amber-300 transition-colors cursor-default">
                SEO Optimization
              </span>
              <span className="text-slate-400 hover:text-amber-300 transition-colors cursor-default">
                Social Media Marketing
              </span>
              <span className="text-slate-400 hover:text-amber-300 transition-colors cursor-default">
                Content Marketing
              </span>
              <span className="text-slate-400 hover:text-amber-300 transition-colors cursor-default">
                PPC Advertising
              </span>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-[0.18em] uppercase text-slate-200">
              Contact Info
            </h3>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:info@nammadigitals.com"
                className="flex items-center space-x-3 text-slate-400 hover:text-amber-300 transition-colors"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 border border-slate-700">
                  <Mail className="h-4 w-4 text-amber-300" />
                </span>
                <span>info@nammadigitals.com</span>
              </a>
              <a
                href="tel:9663090897"
                className="flex items-center space-x-3 text-slate-400 hover:text-amber-300 transition-colors"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 border border-slate-700">
                  <Phone className="h-4 w-4 text-amber-300" />
                </span>
                <span>96630 90897</span>
              </a>
              <div className="flex items-center space-x-3 text-slate-400">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 border border-slate-700">
                  <MapPin className="h-4 w-4 text-amber-300" />
                </span>
                <span>Mysore, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            © 2025 <span className="text-slate-200">NammaDigitals</span>. All rights reserved.
          </p>
          <p>
            Powered by{' '}
            <span className="text-slate-200 font-medium">Dreambuzz Solutions</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
