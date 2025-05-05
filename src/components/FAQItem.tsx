import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQItemProps {
  question: string;
  answer: string;
  value: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, value }) => {
  // Function to highlight keywords in the answer
  const formatAnswer = (text: string) => {
    // Check if the answer contains the registration deadline
    if (text.includes('July 5, 2025')) {
      return <span>{text.replace('July 5, 2025', '<span class="text-amber-400 font-semibold">July 5, 2025</span>')
        .split('<span').map((part, i) => {
          if (i === 0) return <React.Fragment key={i}>{part}</React.Fragment>;
          const [highlight, rest] = part.split('</span>');
          return (
            <React.Fragment key={i}>
              <span className="text-amber-400 font-semibold">{highlight.substring(highlight.indexOf('>') + 1)}</span>
              {rest}
            </React.Fragment>
          );
        })}</span>;
    }
    
    return text;
  };

  return (
    <AccordionItem value={value} className="border-cyber-green/20">
      <AccordionTrigger className="text-left hover:text-cyber-green">
        {question}
      </AccordionTrigger>
      <AccordionContent className="text-gray-400">
        {formatAnswer(answer)}
      </AccordionContent>
    </AccordionItem>
  );
};

export default FAQItem;
