
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cyber-darker py-10 border-t border-cyber-green/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <h3 className="text-xl font-bold glow-text">HackSky</h3>
            <p className="text-gray-400">
              Organized by MITB ACM Student Chapter. Join us for an exciting event focused on the future of cybersecurity.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/acm" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyber-green">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com/company/acm" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyber-green">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/acm" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyber-green">
                <Github size={20} />
              </a>
              <a href="mailto:acm.mitblr@manipal.edu" className="text-gray-400 hover:text-cyber-green">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyber-green">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2">
              <li><Link to="/" className="text-gray-400 hover:text-cyber-blue">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-cyber-blue">About</Link></li>
              <li><Link to="/schedule" className="text-gray-400 hover:text-cyber-blue">Schedule</Link></li>
              <li><Link to="/speakers" className="text-gray-400 hover:text-cyber-blue">Speakers</Link></li>
              <li><Link to="/gamethon" className="text-gray-400 hover:text-cyber-blue">Gamethon</Link></li>
              <li><Link to="/register" className="text-gray-400 hover:text-cyber-blue">Register</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-cyber-blue">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyber-green">Contact</h3>
            <div className="flex flex-wrap gap-4 text-gray-400">
              <a href="mailto:acm.mitblr@manipal.edu" className="hover:text-cyber-green">
                <Mail className="inline-block mr-2" size={16} />
                acm.mitblr@manipal.edu
              </a>
              <a href="tel:+916360151894" className="hover:text-cyber-green">
                +91 6360151894
              </a>
              <span>MITB ACM Student Chapter, Karnataka, India</span>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-cyber-green/10 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} MITB ACM Student Chapter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
