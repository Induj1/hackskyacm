import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HackathonRulesDialog } from '@/components/HackathonRulesDialog';

interface FAQItemProps {
  question: string;
  answer: string;
  value: string;
  hasRulesLink?: boolean;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, value, hasRulesLink = false }) => {
  // Function to highlight keywords in the answer
  const formatAnswer = (text: string) => {
    // Check if this item needs a rules link
    if (hasRulesLink) {
      return (
        <span>
          {text.replace('[RULES_LINK]', '')}
          <HackathonRulesDialog />
        </span>
      );
    }
    
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
