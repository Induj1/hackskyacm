import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQItem from '@/components/FAQItem';
import { HackathonRulesDialog } from '@/components/HackathonRulesDialog';
import { Accordion } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isRulesOpen, setIsRulesOpen] = useState(false);

  const generalFaqs = [
    {
      question: "What is HackSky?",
      answer: "HackSky is a 2-day competition organized by Kaspersky in collaboration with MITB ACM Student Chapter. Participants work in teams to develop innovative solutions to real-world cybersecurity challenges.",
      value: "general-1"
    },
    {
      question: "When and where will the hackathon take place?",
      answer: "The hackathon will take place on July 29-30, 2025 at Manipal Institute of Technology, Bengaluru.",
      value: "general-2"
    },
    {
      question: "Who can participate in the hackathon?",
      answer: "The hackathon is open to all residents of India aged 16-25 years who are enrolled at academic institutions in India. Note that employees of the Organisers or their affiliated companies, and their immediate families are not eligible to participate.",
      value: "general-3"
    },
    {
      question: "Is there a registration fee?",
      answer: "No, participation in the hackathon is completely free, thanks to our hosts Department of IT, MIT Bengaluru, Manipal Academy Of Higher Education, MITB ACM Student Chapter.",
      value: "general-4"
    },
    {
      question: "Do these rules apply to both the Hackathon and the KIPS competition?",
      answer: "No, these Rules and Regulations apply to the Hackathon only, and not to the KIPS competition scheduled on July 31st, 2025.",
      value: "general-5"
    }
  ];

  const teamFaqs = [
    {
      question: "How many members can be in a team?",
      answer: "Each team should have 1-3 members. We encourage diverse teams with complementary skills.",
      value: "team-1"
    },
    {
      question: "Can I participate individually?",
      answer: "Yes, you can register as an individual. The competition is open to individual or team submissions.",
      value: "team-2"
    },
    {
      question: "What is the registration deadline?",
      answer: "The registration deadline is July 5, 2025. Make sure to complete your registration before this date.",
      value: "team-3"
    },
    {
      question: "Can team members be from different institutions?",
      answer: "Yes, team members can be from different institutions, as long as all members are enrolled at academic institutions in India and meet the eligibility criteria.",
      value: "team-4"
    }
  ];

  const technicalFaqs = [
    {
      question: "What technologies can we use for our solution?",
      answer: "You can use any programming language, framework, or tool of your choice. However, your solution should be built during the hackathon (except for open-source libraries and frameworks).",
      value: "tech-1"
    },
    {
      question: "Do we need to have cybersecurity knowledge to participate?",
      answer: "While basic knowledge of cybersecurity concepts is helpful, it's not mandatory. Teams with diverse skills (development, design, business) often create the most innovative solutions.",
      value: "tech-3"
    },
    {
      question: "Will there be technical support during the hackathon?",
      answer: "Yes, mentors and technical experts from Kaspersky will be available throughout the hackathon to help with technical issues and provide guidance.",
      value: "tech-4"
    }
  ];

  const submissionFaqs = [
    {
      question: "What are the evaluation criteria?",
      answer: "Projects will be evaluated based on: 1) Accordance with the track, 2) Unique selling proposition (USP), 3) Technical feasibility, 4) Proof of concept (PoC), 5) Level of security and patentability, and 6) Scalability and deployment readiness.",
      value: "submission-1"
    },
    {
      question: "What should be included in the final submission?",
      answer: "Your final submission should include the source code, a brief presentation, and all documentation explaining your solution. Submissions must be in English and should not contain any third-party intellectual property without proper authorization.",
      value: "submission-2"
    },
    {
      question: "Do we retain the intellectual property rights to our project?",
      answer: "By participating, you grant the Organisers the right to use your portraits, written statements, photos, audio and visual recordings for commercial, marketing and promotional purposes related to the Competition. Please review the full Terms & Conditions for complete details on intellectual property rights.",
      value: "submission-3"
    }
  ];

  const prizeFaqs = [
    {
      question: "What are the prizes for winning teams?",
      answer: "The First Prize winner will receive 1 lakh rupees (approximately $1,200 USD) and access to a select X-training course offered by Kaspersky. Note that only one team/individual will be selected as the First Prize winner.",
      value: "prize-1"
    },
    {
      question: "Will all participants receive certificates?",
      answer: "Yes, all participants who submit a project will receive a digital certificate of participation. Winners will receive special certificates acknowledging their achievement.",
      value: "prize-3"
    }
  ];

  const rulesFaqs = [
    {
      question: "What are the official rules for the hackathon?",
      answer: "The official rules for HackSky cover eligibility, competition format, registration, submission requirements, selection criteria, and more. You can read the complete hackathon rules by clicking here: [RULES_LINK]",
      value: "rules-1",
      hasRulesLink: true
    },
    {
      question: "Do these rules apply to both the Hackathon and the KIPS competition?",
      answer: "No, these Rules and Regulations apply to the Hackathon only (July 29-30, 2025), and not to the KIPS competition scheduled on July 31st, 2025.",
      value: "rules-2"
    },
    {
      question: "Who is eligible to participate?",
      answer: "This competition is open to all residents of India aged 16-25 years who are enrolled at academic institutions in India. Employees of the Organisers or their affiliated companies, and their immediate families are not eligible to participate.",
      value: "rules-3"
    },
    {
      question: "What are the submission requirements?",
      answer: "Entries must be original, in English, created during the hackathon, and must address one of the specified hackathon tracks. They must not contain any inappropriate, offensive, or third-party content. For complete details, please refer to the hackathon rules.",
      value: "rules-4"
    },
    {
      question: "What are the judging criteria?",
      answer: "Projects will be evaluated based on six criteria: 1) Accordance with the track, 2) Unique selling proposition (USP), 3) Technical feasibility, 4) Proof of concept (PoC), 5) Level of security and patentability, and 6) Scalability and deployment readiness.",
      value: "rules-5"
    }
  ];

  const filterFaqs = (faqs) => {
    if (!searchQuery) return faqs;
    return faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const filteredGeneralFaqs = filterFaqs(generalFaqs);
  const filteredTeamFaqs = filterFaqs(teamFaqs);
  const filteredTechnicalFaqs = filterFaqs(technicalFaqs);
  const filteredSubmissionFaqs = filterFaqs(submissionFaqs);
  const filteredPrizeFaqs = filterFaqs(prizeFaqs);
  const filteredRulesFaqs = filterFaqs(rulesFaqs);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const hasResults = 
    filteredGeneralFaqs.length > 0 || 
    filteredTeamFaqs.length > 0 || 
    filteredTechnicalFaqs.length > 0 || 
    filteredSubmissionFaqs.length > 0 || 
    filteredPrizeFaqs.length > 0 ||
    filteredRulesFaqs.length > 0;

  return (
    <>
      <Navbar />
      <main className="min-h-screen binary-bg pt-20">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center glow-text">Frequently Asked Questions</h1>
              <p className="text-xl text-gray-300 text-center mb-8">
                Find answers to common questions about HackSky.
              </p>
              
              <div className="relative mb-12">
                <Input 
                  type="text" 
                  placeholder="Search for answers..." 
                  className="pl-10"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              </div>
              
              {!hasResults && searchQuery && (
                <div className="text-center mb-8 p-4 border border-cyber-green/20 rounded-md">
                  <p className="text-gray-300">No results found for "{searchQuery}"</p>
                  <Button 
                    variant="link" 
                    className="text-cyber-green mt-2"
                    onClick={() => setSearchQuery('')}
                  >
                    Clear search
                  </Button>
                </div>
              )}
              
              <div className="space-y-8">
                {filteredGeneralFaqs.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-cyber-green">General Questions</h2>
                    <Accordion type="single" collapsible className="border border-cyber-green/20 rounded-md overflow-hidden">
                      {filteredGeneralFaqs.map((faq) => (
                        <FAQItem 
                          key={faq.value}
                          question={faq.question}
                          answer={faq.answer}
                          value={faq.value}
                        />
                      ))}
                    </Accordion>
                  </div>
                )}
                
                {filteredRulesFaqs.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-cyber-green">Rules & Regulations</h2>
                    <Accordion type="single" collapsible className="border border-cyber-green/20 rounded-md overflow-hidden">
                      {filteredRulesFaqs.map((faq) => (
                        <FAQItem 
                          key={faq.value}
                          question={faq.question}
                          answer={faq.answer}
                          value={faq.value}
                          hasRulesLink={faq.hasRulesLink}
                        />
                      ))}
                    </Accordion>
                  </div>
                )}
                
                {filteredTeamFaqs.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-cyber-green">Team & Registration</h2>
                    <Accordion type="single" collapsible className="border border-cyber-green/20 rounded-md overflow-hidden">
                      {filteredTeamFaqs.map((faq) => (
                        <FAQItem 
                          key={faq.value}
                          question={faq.question}
                          answer={faq.answer}
                          value={faq.value}
                        />
                      ))}
                    </Accordion>
                  </div>
                )}
                
                {filteredTechnicalFaqs.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-cyber-green">Technical Questions</h2>
                    <Accordion type="single" collapsible className="border border-cyber-green/20 rounded-md overflow-hidden">
                      {filteredTechnicalFaqs.map((faq) => (
                        <FAQItem 
                          key={faq.value}
                          question={faq.question}
                          answer={faq.answer}
                          value={faq.value}
                        />
                      ))}
                    </Accordion>
                  </div>
                )}
                
                {filteredSubmissionFaqs.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-cyber-green">Submission & Judging</h2>
                    <Accordion type="single" collapsible className="border border-cyber-green/20 rounded-md overflow-hidden">
                      {filteredSubmissionFaqs.map((faq) => (
                        <FAQItem 
                          key={faq.value}
                          question={faq.question}
                          answer={faq.answer}
                          value={faq.value}
                        />
                      ))}
                    </Accordion>
                  </div>
                )}
                
                {filteredPrizeFaqs.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-cyber-green">Prizes & Recognition</h2>
                    <Accordion type="single" collapsible className="border border-cyber-green/20 rounded-md overflow-hidden">
                      {filteredPrizeFaqs.map((faq) => (
                        <FAQItem 
                          key={faq.value}
                          question={faq.question}
                          answer={faq.answer}
                          value={faq.value}
                        />
                      ))}
                    </Accordion>
                  </div>
                )}
              </div>
              
              <div className="mt-16 p-6 bg-cyber-darker rounded-md border border-cyber-green/20 text-center">
                <h3 className="text-xl font-bold mb-4">Still Have Questions?</h3>
                <p className="text-gray-300 mb-6">
                  If you couldn't find the information you're looking for, please don't hesitate to contact us.
                </p>
                <Button asChild>
                  <a href="mailto:academy@kaspersky.com,acm.mitblr@manipal.edu">Contact Us</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FAQ;
