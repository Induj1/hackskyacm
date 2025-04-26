
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Speakers;
