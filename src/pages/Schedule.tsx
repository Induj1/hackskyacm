
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
                Event schedule will be released soon for both days
              </p>
              
              <div className="bg-cyber-darker border border-cyber-green/20 rounded-md p-8">
                <p className="text-gray-300">
                  The detailed schedule for both days will be announced shortly. Stay tuned!
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
