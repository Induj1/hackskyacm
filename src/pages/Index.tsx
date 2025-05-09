import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Code, BookLock, Cpu, ChevronRight, CalendarDays, MapPin, Instagram, Mail, Phone, ExternalLink } from 'lucide-react';
import CountdownTimer from '@/components/CountdownTimer';
import TrackCard from '@/components/TrackCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const Index = () => {
  const targetDate = new Date('July 29, 2025');

  const tracks = [
    {
      title: "The Transformation of ICS and Cyber Threats",
      description: "Explore the security challenges in Industrial Control Systems (ICS) as they transition from standalone to interconnected components of critical infrastructure.",
      prize: "Goodies",
      difficulty: "Advanced" as const,
      icon: <Shield size={24} />
    },
    {
      title: "AI vs AI – Detecting Deepfake & Misinformation",
      description: "Combat AI-generated misinformation and deepfakes used for political manipulation, social engineering, financial scams, and cyber warfare.",
      prize: "Goodies",
      difficulty: "Intermediate" as const,
      icon: <BookLock size={24} />
    },
    {
      title: "Trapping the Honey Trapper",
      description: "Develop solutions to counter social media honey traps targeting military personnel, government officials, and corporate executives.",
      prize: "Goodies",
      difficulty: "Intermediate" as const,
      icon: <Code size={24} />
    }
  ];

  const organizers = [
  
    {
      name: "Dr. Gururaj H L",
      role: "Faculty Sponsor, MITB ACM Student Chapter",
      position: "middle"
    },
    {
      name: "Dr. Shreyas J",
      role: "Faculty Sponsor, MITB ACM Student Chapter",
      position: "middle"
    },
    {
      name: "Prof. (Dr.) Dayananda P",
      role: "Dean, School of Computer Science & Engineering MIT Bengaluru",
      position: "middle"
    },
    {
      name: "Mr. Karthikeya Chowdary",
      role: "Chair, MITB ACM",
      position: "left"
    },
    {
      name: "Mr. Nishanth Shet",
      role: "Vice Chair, MITB ACM",
      position: "right"
    }
  ];
  

  const patrons = [
    {
      name: "Dr. Ramdas M Pai",
      designation: "Chancellor, MAHE"
    },
    {
      name: "Dr. Ranjan R Pai",
      designation: "President, MAHE"
    },
    {
      name: "Dr. H.S. Ballal",
      designation: "Pro Chancellor, MAHE"
    },
    {
      name: "Lt. Gen. (Dr.) M.D. Venkatesh",
      designation: "Vice Chancellor, MAHE"
    },
    {
      name: "Prof. (Dr.) M. Veeraraghavan",
      designation: "Pro Vice Chancellor, MAHE Bengaluru"
    },
    {
      name: "Prof. (Dr.)Raghavendra Prabhu",
      designation: "Deputy Registrar, MAHE Bengaluru"
    },
    {
      name: "Prof. (Dr.)Narayana Sabhahit",
      designation: "Pro Vice Chancellor,Technology & Sciences, MAHE"
    },
    {
      name: "Prof. (Dr.) Iven Jose",
      designation: "Director, MIT, MAHE Bengaluru"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen binary-bg">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16">
          <div className="container mx-auto px-4 pt-10 sm:pt-16 lg:pt-20">
            <div className="text-center">
              <div className="flex justify-center items-center gap-6 mb-8">
                <div className="flex items-center flex-wrap justify-center gap-4">
                  <img 
                    src="/lovable-uploads/manipal.png" 
                    alt="MAHE Logo" 
                    className="h-12 md:h-16"
                  />
                  <span className="text-2xl mx-1 text-cyber-green">×</span>
                  <img 
                    src="/lovable-uploads/19569e89-acb1-4e1c-b3fa-f038f9ad8783.png" 
                    alt="ACM MIT Bengaluru Logo" 
                    className="h-12 md:h-16"
                  />
                  <span className="text-2xl mx-1 text-cyber-green">×</span>
                  <div className="h-12 md:h-16 flex items-center">
                    <img 
                      src="/lovable-uploads/5a7ed1a5-1689-4027-ac9b-e3c11850900a.png" 
                      alt="Kaspersky Logo" 
                      className="h-10 md:h-14"
                    />
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-cyber-green font-medium">Organized by: MITB ACM Student Chapter</p>
              </div>
              
              <div className="inline-block mx-auto">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight glow-text animate-pulse-glow">
                  HackSky: Pan India Hackathon
                </h1>
              </div>
              <p className="text-xl text-gray-300 mb-2 max-w-2xl mx-auto">
                July 29-30, 2025 • Manipal Institute of Technology, Bengaluru
              </p>
              <p className="text-xl text-cyber-green font-medium mb-6 max-w-2xl mx-auto italic">
                "Outsmart cyber adversaries. Disrupt the disruptors."
              </p>

              <CountdownTimer targetDate={targetDate} />

              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <Button size="lg" asChild>
                  <Link to="/register">Register Now</Link>
                </Button>
                <Button variant="outline" size="lg" className="cyber-border" asChild>
                  <Link to="/problem-statement">View Problem Statement</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-cyber-gray/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 glow-text">About The Hackathon</h2>
              
              {/* Welcome Text */}
              <div className="mb-8 text-left">
                <h3 className="text-xl font-semibold mb-4 text-cyber-green">Welcome to HackSky</h3>
                <p className="text-gray-300 mb-4">
                  The digital world is evolving at lightning speed—but so are the threats that lurk in the
                  shadows. From emerging cyber threats to disinformation and deepfakes, the
                  battleground of cybersecurity is more intense than ever.
                </p>
                <p className="text-gray-300 mb-4">
                  This is where <span className="text-cyber-green font-bold">YOU</span> step in.
                </p>
                <p className="text-gray-300 mb-4">
                  Over the next few months, the brightest student minds in tech will unite to tackle real
                  world security challenges, push the boundaries of innovation, and showcase their
                  prowess in cybersecurity. Whether you're an aspiring cyber defender, a coder with a
                  cause, or a tech enthusiast ready to disrupt the disruptors, this is your moment to
                  shine.
                </p>
                <p className="text-gray-300 mb-4">
                  Are you ready to outsmart cyber adversaries, expose digital deception, and build the
                  future of security? Join this hackathon!
                </p>
              </div>
              
              <Collapsible className="w-full border border-cyber-green/20 rounded-md p-4 mb-6">
                <CollapsibleTrigger className="flex w-full justify-between items-center text-left">
                  <span className="text-xl font-semibold text-cyber-green">About The Organizers</span>
                  <ChevronRight className="h-5 w-5 transform transition-all duration-300 group-data-[state=open]:rotate-90" />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4 space-y-4 text-left">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Kaspersky Academy</h3>
                    <p className="text-gray-300">
                      Kaspersky Academy is a global initiative dedicated to advancing cybersecurity
                      education through partnerships with universities worldwide. By integrating Kaspersky's
                      cutting-edge expertise and technologies into academic programs, the Academy
                      enhances students' learning experiences and prepares them for real-world
                      cybersecurity challenges. In India, Kaspersky has collaborated with esteemed
                      institutions such as IIT Delhi and Manipal Institute of Technology to foster local
                      cybersecurity talent development. These partnerships aim to equip students with the
                      necessary skills and knowledge to excel in the rapidly evolving field of cybersecurity.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">MAHE Bengaluru & MIT Bengaluru</h3>
                    <p className="text-gray-300 mb-4">
                      Manipal Academy of Higher Education, Bengaluru is a premier academic institution
                      committed to fostering innovation, excellence, and holistic development. A proud
                      extension of MAHE, ranked among India's top private universities, the Bengaluru
                      campus blends world-class infrastructure, cutting-edge programs, and a
                      multidisciplinary approach to empower students for future challenges.
                    </p>
                    <p className="text-gray-300 mb-4">
                      The Garden City of India, Bengaluru, is now home to a new engineering institution, "MIT
                      Bengaluru", the latest constituent unit of Manipal Academy of Higher Education
                      (MAHE).
                    </p>
                    <p className="text-gray-300">
                      Manipal Institute of Technology Bengaluru, is a premier engineering institute offering
                      cutting-edge programs in fields like CSE, IT, ECE, AI, Robotics, Cybersecurity, and
                      Quantum Computing. With world-class infrastructure, industry collaborations, and a
                      focus on innovation and research, MIT Bengaluru empowers students to become
                      leaders in technology-driven industries, fostering excellence and global competence.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">School of Engineering</h3>
                    <p className="text-gray-300 mb-4">
                      The School of Engineering at MIT Bengaluru is dedicated to fostering
                      innovation and excellence in computing, cybersecurity, and emerging technologies.
                      With cutting-edge labs and industry collaborations, the department empowers students
                      to solve real-world challenges. The curriculum is designed to be dynamic and industry-
                      relevant, integrating the latest advancements in artificial intelligence, data science,
                      cloud computing, and blockchain technology.
                    </p>
                    <p className="text-gray-300">
                      With experienced faculty, state-of-the-art infrastructure, and strong industry
                      partnerships, the Department of Information Technology aims to nurture the next
                      generation of tech leaders and problem-solvers who can make a meaningful impact on
                      society.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">MITB ACM Student Chapter</h3>
                    <p className="text-gray-300 mb-4">
                      The MITB ACM Student Chapter is a vibrant community of students who share a deep
                      passion for computer science, technology, and innovation. Our mission is to cultivate a
                      collaborative and inclusive environment where students can explore the latest
                      advancements in computing, enhance their technical skills, and contribute to solving
                      real-world challenges.
                    </p>
                    <p className="text-gray-300 mb-4">
                      Affiliated with the prestigious Association for Computing Machinery (ACM), the world's
                      largest educational and scientific computing society, our chapter provides members
                      with unparalleled opportunities for professional growth, networking, and skill
                      development.
                    </p>
                    <p className="text-gray-300">
                      By being a part of the MITB ACM Student Chapter, students not only gain exposure to
                      the latest trends in computing but also develop leadership skills, build professional
                      networks, and contribute to impactful projects that make a difference in the world.
                      Whether you are a beginner or an experienced coder, our chapter welcomes all
                      students eager to explore, innovate, and grow in the field of technology.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-cyber-green/10 rounded-md text-cyber-green">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">World-Class Experts</h3>
                    <p className="text-gray-400">
                      Learn from Kaspersky's cybersecurity professionals and industry leaders
                      through workshops, talks, and mentoring sessions.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-cyber-green/10 rounded-md text-cyber-green">
                    <Cpu size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Exciting Goodies</h3>
                    <p className="text-gray-400">
                      Win exciting goodies and prizes for your innovative solutions.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <p className="text-gray-300 mb-4">
                    Winners will receive Kaspersky x Training courses up to $2,500, cash prizes up to 1 lakh rupees, and exciting goodies. Specific prize amounts will be shared soon.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-video bg-cyber-darker border border-cyber-green/20 rounded-md overflow-hidden cyber-border">
                  <div className="absolute inset-0 grid-bg"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-cyber-green font-mono opacity-80">
                      Promo Video Coming Soon
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 glow-text">Hackathon Tracks</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Choose from three exciting tracks, each focused on a critical area of cybersecurity.
                Teams can participate in any one track.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tracks.map((track) => (
                <TrackCard 
                  key={track.title}
                  title={track.title}
                  description={track.description}
                  prize={track.prize}
                  difficulty={track.difficulty}
                  icon={track.icon}
                />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button variant="outline" className="cyber-border" asChild>
                <Link to="/register">
                  Register for a Track
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 glow-text">Event Schedule</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Schedule will be released soon
              </p>
            </div>

            <div className="max-w-3xl mx-auto bg-cyber-darker border border-cyber-green/20 rounded-md p-6">
              <div className="flex items-start gap-4 mb-6">
                <CalendarDays className="text-cyber-green shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">July 29-30, 2025</h3>
                  <p className="text-gray-300">Two days of intense innovation and learning</p>
                </div>
              </div>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="hackathon">
                  <AccordionTrigger className="text-left font-medium">Hackathon</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-300">
                      A 48-hour coding marathon where teams will tackle challenging cybersecurity problems across three tracks. 
                      Team size: 1-3 members.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="gamethon">
                  <AccordionTrigger className="text-left font-medium">Gamethon</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-300">
                      An exciting offline gamethon conducted on KIPS with goodies as prizes.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="workshops">
                  <AccordionTrigger className="text-left font-medium">Workshops</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-300">
                      Three engaging workshops will be conducted:
                      <br />- Advanced Thread Detection
                      <br />- Soft Skills Workshop
                      <br />- Third workshop to be announced soon
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

      

        {/* Registration Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 glow-text">Registration</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Last date to register: July 1st, 2025
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto bg-cyber-darker border border-cyber-green/20 rounded-md p-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-4">Important Notes</h3>
                <p className="text-gray-300">• Team size: 1-3 members</p>
                <p className="text-gray-300">• Registration is completely free</p>
                <p className="text-gray-300">• Data will be shared with Kaspersky and its partners</p>
              </div>
              
              <div className="text-center">
                <Button size="lg" asChild>
                  <Link to="/register">Register Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-16 bg-cyber-gray/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 glow-text">Location</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Join us at MIT, MAHE Bengaluru
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="text-cyber-green shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Academic Block 5, MIT, MAHE Bengaluru</h3>
                  <p className="text-gray-300">Yelahanka – 560064</p>
                </div>
              </div>
              
             {/* Campus Map */}
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.0520155733923!2d77.59284386954802!3d13.139309324147658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1946483a7c9b%3A0x80cb33d6d88e9aa1!2sManipal%20Academy%20of%20Higher%20Education%2C%20Bangalore%20Campus!5e0!3m2!1sen!2sin!4v1713524860051!5m2!1sen!2sin"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen={true}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="rounded-md border border-cyber-green/20"
/>

            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 glow-text">Contact Us</h2>
            </div>
            
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="flex items-center gap-4">
                <Mail className="text-cyber-green shrink-0" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href="mailto:acm.mitblr@manipal.edu" className="text-gray-300 hover:text-cyber-green transition-colors">acm.mitblr@manipal.edu</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Phone className="text-cyber-green shrink-0" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <a href="tel:+916360151894" className="text-gray-300 hover:text-cyber-green transition-colors">+91 6360151894</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Instagram className="text-cyber-green shrink-0" />
                <div>
                  <h3 className="font-semibold">Instagram</h3>
                  <a href="https://instagram.com/acm.mitb" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyber-green transition-colors">@acm.mitb</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <ExternalLink className="text-cyber-green shrink-0" />
                <div>
                  <h3 className="font-semibold">Website</h3>
                  <a href="https://hacksky.vercel.app" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyber-green transition-colors">hacksky.vercel.app</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Organizers Section */}
        <section className="py-16 bg-cyber-gray/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 glow-text">Organizers</h2>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-center">Organizer Credits</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {organizers.sort((a, b) => {
                    if (a.position === "middle") return -1;
                    if (b.position === "middle") return 1;
                    if (a.position === "left") return -1;
                    return 1;
                  }).map((organizer) => (
                    <div key={organizer.name} className="bg-cyber-darker border border-cyber-green/20 rounded-md p-4 text-center">
                      <h4 className="font-semibold mb-1">{organizer.name}</h4>
                      <p className="text-gray-400 text-sm">{organizer.role}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-center">Patrons & Leadership</h3>
                <div className="bg-cyber-darker border border-cyber-green/20 rounded-md p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {patrons.map((patron) => (
                      <div key={patron.name} className="text-gray-300">
                        <div className="font-semibold">{patron.name}</div>
                        <div className="text-sm text-gray-400">{patron.designation}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="py-8 bg-cyber-darker">
        <div className="mt-4 md:mt-0 flex justify-center items-center">
  <img 
    src="/lovable-uploads/mahe2025.png" 
    alt="MAHE 2025 Logo" 
    className="h-24 w-auto object-contain" // Increased height from h-10 to h-24
  />
</div>

        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
