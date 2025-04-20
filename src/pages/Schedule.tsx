
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Schedule = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen binary-bg pt-20">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 glow-text">Event Schedule</h1>
              <p className="text-xl text-gray-300 mb-8">
                Join us from July 22-25, 2025
              </p>
              
              <div className="bg-cyber-darker border border-cyber-green/20 rounded-md p-8">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold text-cyber-green mb-4">Hackathon</h2>
                    <p className="text-gray-300">July 22-24, 2025</p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-cyber-green mb-4">Gamethon</h2>
                    <p className="text-gray-300">July 25, 2025</p>
                  </div>
                </div>
                <p className="text-gray-300 mt-6 italic">
                  Detailed day-by-day schedule will be released soon. Stay tuned for more updates!
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

export default Schedule;
