
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Linkedin, Twitter } from 'lucide-react';

interface SpeakerCardProps {
  name: string;
  role: string;
  company: string;
  bio: string;
  image: string;
  twitter?: string;
  linkedin?: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({
  name,
  role,
  company,
  bio,
  image,
  twitter,
  linkedin
}) => {
  return (
    <div className="cyber-card h-full flex flex-col">
      <div className="flex items-center gap-4 mb-4">
        <Avatar className="h-16 w-16 border-2 border-cyber-green/40 p-0.5">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback className="bg-cyber-gray text-cyber-green">
            {name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-gray-400 text-sm">{role}</p>
          <p className="text-cyber-green text-sm">{company}</p>
        </div>
      </div>
      
      <p className="text-gray-300 text-sm mb-4 flex-grow">{bio}</p>
      
      <div className="flex gap-2">
        {twitter && (
          <a 
            href={twitter} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-cyber-gray/50 hover:bg-cyber-gray text-gray-400 hover:text-cyber-blue transition-colors"
          >
            <Twitter size={16} />
          </a>
        )}
        {linkedin && (
          <a 
            href={linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-cyber-gray/50 hover:bg-cyber-gray text-gray-400 hover:text-cyber-blue transition-colors"
          >
            <Linkedin size={16} />
          </a>
        )}
      </div>
    </div>
  );
};

export default SpeakerCard;
