
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
  return (
    <AccordionItem value={value} className="border-cyber-green/20">
      <AccordionTrigger className="text-left hover:text-cyber-green">
        {question}
      </AccordionTrigger>
      <AccordionContent className="text-gray-400">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
};

export default FAQItem;
