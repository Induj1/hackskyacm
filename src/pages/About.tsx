import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CircleCheck, Medal, LucideWand2, Users, CalendarDays, Clock } from 'lucide-react';

const About = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen binary-bg pt-20">
        {/* Hero Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center glow-text">About HackSky</h1>
              <p className="text-xl text-gray-300 text-center mb-12">
                Learn more about HackSky, 
                its mission, and what makes it unique.
              </p>
              
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-gray-300">
                  HackSky, organized by MITB ACM Student Chapter, 
                  is a premier event for students, professionals, and cybersecurity enthusiasts 
                  to collaborate and develop innovative solutions to real-world security challenges.
                </p>
                
                <p className="text-gray-300 mt-4">
                  This year's theme, "Secure the Future: AI in Cybersecurity," focuses on 
                  leveraging artificial intelligence and machine learning to address emerging 
                  cybersecurity threats and vulnerabilities. Participants will work in teams 
                  to create cutting-edge solutions across various tracks.
                </p>
                
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-cyber-green/10 rounded-md text-cyber-green mt-1">
                      <CalendarDays size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">When</h3>
                      <p className="text-gray-400">July 29-30, 2025</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-cyber-green/10 rounded-md text-cyber-green mt-1">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Duration</h3>
                      <p className="text-gray-400">48 hours of non-stop hacking</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-cyber-green/10 rounded-md text-cyber-green mt-1">
                      <Users size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Team Size</h3>
                      <p className="text-gray-400">1-3 members per team</p>
                    </div>
                  </div>
                
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Eligibility Section */}
        <section className="py-16 bg-cyber-gray/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center glow-text">Who Can Participate?</h2>
              <div className="bg-cyber-darker p-6 rounded-lg border border-cyber-green/20">
                <h3 className="text-xl font-bold mb-4 text-white">Registration Open</h3>
                <p className="text-gray-300">
                  The hackathon is open to everyone passionate about cybersecurity and innovation, including:
                </p>
                <ul className="mt-4 space-y-2 text-gray-300">
                  <li>• Computer Science and IT students</li>
                  <li>• Cybersecurity professionals and enthusiasts</li>
                  <li>• Software developers with security interest</li>
                  <li>• Anyone passionate about security and innovation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Participate Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center glow-text">Why Participate?</h2>
              <p className="text-center text-gray-300 mb-10">
                HackSky offers numerous benefits to participants.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex gap-4">
                  <div className="p-2 bg-cyber-green/10 rounded-md text-cyber-green h-fit">
                    <Medal size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Prizes</h3>
                    <p className="text-gray-300">
                      Win exciting goodies and recognition from industry leaders.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="p-2 bg-cyber-green/10 rounded-md text-cyber-green h-fit">
                    <Users size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Networking</h3>
                    <p className="text-gray-300">
                      Connect with cybersecurity professionals and like-minded peers.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="p-2 bg-cyber-green/10 rounded-md text-cyber-green h-fit">
                    <LucideWand2 size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Skill Development</h3>
                    <p className="text-gray-300">
                      Learn cutting-edge cybersecurity techniques and tools.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Organizers Section */}
        <section className="py-16 bg-cyber-gray/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center glow-text">Organizers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="text-center">
                  <div className="h-24 bg-cyber-darker rounded-md flex items-center justify-center border border-cyber-green/20 mb-4">
                    <img 
                      src="/lovable-uploads/5a7ed1a5-1689-4027-ac9b-e3c11850900a.png" 
                      alt="Kaspersky" 
                      className="max-h-20 max-w-full p-2" 
                    />
                  </div>
                  <p className="text-gray-400">
                    Kaspersky, a global cybersecurity leader with over 25 years of experience, 
                    protects over 400 million users worldwide. Known for innovative security 
                    solutions and groundbreaking research in threat detection, Kaspersky 
                    is committed to fostering the next generation of cybersecurity experts 
                    through educational initiatives and industry partnerships.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="h-24 bg-cyber-darker rounded-md flex items-center justify-center border border-cyber-green/20 mb-4">
                    <img 
                      src="/lovable-uploads/19569e89-acb1-4e1c-b3fa-f038f9ad8783.png" 
                      alt="MITB ACM Student Chapter" 
                      className="max-h-20 max-w-full p-2" 
                    />
                  </div>
                  <p className="text-gray-400">
                    MITB ACM Student Chapter, part of the world's largest computing society, 
                    is a vibrant community at Manipal Institute of Technology, Bengaluru. 
                    Focused on advancing computing as a science and profession, the chapter 
                    regularly organizes technical workshops, hackathons, and industry 
                    collaborations to bridge the gap between academic learning and 
                    industry requirements.
                  </p>
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

export default About;
