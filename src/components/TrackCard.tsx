
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Trophy } from 'lucide-react';

interface TrackCardProps {
  title: string;
  description: string;
  prize: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  icon: React.ReactNode;
}

const TrackCard: React.FC<TrackCardProps> = ({ title, description, prize, difficulty, icon }) => {
  const difficultyColor = {
    Beginner: "bg-green-500",
    Intermediate: "bg-yellow-500",
    Advanced: "bg-red-500"
  };

  return (
    <div className="cyber-card group">
      <div className="flex items-center mb-4">
        <div className="p-3 rounded-full mr-4 bg-cyber-gray/80 border border-cyber-green/20 text-cyber-green group-hover:animate-cyber-glitch">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <Badge className={`${difficultyColor[difficulty]} text-xs mt-1`}>
            {difficulty}
          </Badge>
        </div>
      </div>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex items-center text-cyber-green">
        <Trophy size={16} className="mr-2" />
        <span className="font-semibold">{prize}</span>
      </div>
    </div>
  );
};

export default TrackCard;
