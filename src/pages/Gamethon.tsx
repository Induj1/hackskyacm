import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Gamepad, User } from 'lucide-react';

const Gamethon = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen binary-bg pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 glow-text">Kaspersky Interactive Protection Simulation (KIPS)</h1>
            <p className="text-xl text-gray-300 mb-2">
              An exciting hybrid gaming competition
            </p>
            <p className="text-lg text-cyber-green">
              Powered by: Kaspersky Academy
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-cyber-darker border border-cyber-green/20 rounded-md p-8">
            <div className="flex items-start gap-4 mb-6">
              <Gamepad className="text-cyber-green shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-semibold mb-4">Kaspersky Interactive Protection Simulation (KIPS)</h2>
                
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-cyber-green mb-2">Details:</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Date: July 25th, 2025</li>
                    <li>Platform: KIPS</li>
                    <li>Format: Hybrid Competition</li>
                    <li>Prizes: Exciting Goodies for Winners</li>
                  </ul>
                  <p className="text-gray-400 mt-6">
                    Registration details will be shared soon. Stay tuned!
                  </p>
                </div>

               
                  
                  <p className="text-gray-300">
                    KIPS is a strategic business simulation, a team game that demonstrates the connection between business efficiency and cybersecurity. 
                    Game-based learning helps to engage decision-makers in cybersecurity and motivate them to take further steps in building 
                    a cybersafe corporate environment.
                  </p>
                  
                  <p className="text-gray-300">
                    KIPS is an exercise that places business decision makers as members of IT security teams into a simulated business environment 
                    facing a series of unexpected cyberthreats where their main goal is to keep company working and get revenue. The idea is to 
                    build a cyber defense strategy by making choices from amongst the best pro-active and re-active controls available.
                  </p>
                  
                  <p className="text-gray-300">
                    Every reaction made by the teams to the unfolding events changes the way the scenario plays out, and ultimately how much 
                    profit the company makes or fails to make.
                  </p>
                  
                  <p className="text-gray-300">
                    Balancing engineering, business, and security priorities against the cost of a realistic cyberattack, the teams analyze 
                    data and make strategic decisions based on uncertain information and limited resources. If that sounds realistic, it should do, 
                    because each of the scenarios is based on real-life events.
                  </p>

                  <div className="space-y-6 mt-10 pt-6 border-t border-cyber-green/10">
                  <div className="flex items-center gap-3 border-l-2 border-cyber-green/50 pl-4">
                    <User className="text-cyber-green" size={18} />
                    <p className="text-gray-300">
                      <span className="font-semibold text-cyber-blue">Lead Trainer:</span> Trishia Octaviano, Cybersecurity Education Manager for Asia-Pacific, Kaspersky
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Gamethon;
