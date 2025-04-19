
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail } from 'lucide-react';

const Speakers = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen binary-bg pt-20">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center glow-text">Speakers & Judges</h1>
              <p className="text-xl text-gray-300 text-center mb-12">
                Meet the industry experts who will be sharing their knowledge.
              </p>
              
              <div className="bg-cyber-darker border border-cyber-green/20 rounded-md p-8 mb-12 text-center">
                <p className="text-xl text-cyber-green mb-4">Coming Soon</p>
                <p className="text-gray-300">
                  Speakers and judges will be revealed soon. Stay tuned for updates!
                </p>
              </div>
              
              <div className="bg-cyber-darker border border-cyber-green/20 rounded-md p-8">
                <h3 className="text-xl font-bold mb-4">Become a Speaker or Judge</h3>
                <p className="text-gray-300 mb-4">
                  Are you an expert in cybersecurity or related fields? We're always looking 
                  for knowledgeable professionals to join our speaker lineup or judging panel.
                </p>
                <div className="flex items-center gap-2 text-gray-300">
                  <Mail className="text-cyber-green" size={20} />
                  <a href="mailto:acm.mitblr@manipal.edu" className="text-cyber-green hover:underline">
                    acm.mitblr@manipal.edu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Speakers;
