
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Gamepad } from 'lucide-react';

const Gamethon = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen binary-bg pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 glow-text">Gamethon</h1>
            <p className="text-xl text-gray-300 mb-8">
              An exciting offline gaming competition
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-cyber-darker border border-cyber-green/20 rounded-md p-8">
            <div className="flex items-start gap-4 mb-6">
              <Gamepad className="text-cyber-green shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-semibold mb-4">KIPS Platform Competition</h2>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    Join us for an exciting offline gamethon conducted on the KIPS platform.
                  </p>
                  <div>
                    <h3 className="text-lg font-semibold text-cyber-green mb-2">Details:</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>Date: July 31st, 2025</li>
                      <li>Platform: KIPS</li>
                      <li>Format: Offline Competition</li>
                      <li>Prizes: Exciting Goodies for Winners</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-gray-400 mb-4">
                Registration details will be shared soon. Stay tuned!
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Gamethon;
