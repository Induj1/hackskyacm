
import React from 'react';
import { Badge } from '@/components/ui/badge';

interface TimelineEventProps {
  time: string;
  title: string;
  description: string;
  speaker?: string;
  eventType: 'talk' | 'workshop' | 'break' | 'judging' | 'activity';
  location?: string;
}

const TimelineEvent: React.FC<TimelineEventProps> = ({
  time,
  title,
  description,
  speaker,
  eventType,
  location
}) => {
  const eventStyles = {
    talk: {
      borderColor: 'border-blue-500',
      bg: 'bg-blue-500/10',
      badge: 'bg-blue-500 hover:bg-blue-600',
      icon: '🎤'
    },
    workshop: {
      borderColor: 'border-green-500',
      bg: 'bg-green-500/10',
      badge: 'bg-green-500 hover:bg-green-600',
      icon: '💻'
    },
    break: {
      borderColor: 'border-gray-500',
      bg: 'bg-gray-500/10',
      badge: 'bg-gray-500 hover:bg-gray-600',
      icon: '☕'
    },
    judging: {
      borderColor: 'border-purple-500',
      bg: 'bg-purple-500/10',
      badge: 'bg-purple-500 hover:bg-purple-600',
      icon: '🏆'
    },
    activity: {
      borderColor: 'border-yellow-500',
      bg: 'bg-yellow-500/10',
      badge: 'bg-yellow-500 hover:bg-yellow-600',
      icon: '🎮'
    }
  };

  const style = eventStyles[eventType];

  return (
    <div className={`p-4 rounded-md border-l-4 ${style.borderColor} ${style.bg} mb-4 hover:translate-x-1 transition-transform`}>
      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
        <div className="flex items-center gap-2">
          <Badge className={style.badge}>{eventType.charAt(0).toUpperCase() + eventType.slice(1)}</Badge>
          <span className="text-gray-400 text-sm">{time}</span>
        </div>
        {location && (
          <span className="text-xs text-gray-400 px-2 py-1 bg-cyber-gray/50 rounded-full">
            {location}
          </span>
        )}
      </div>
      
      <h3 className="text-lg font-bold mb-1 flex items-center gap-2">
        <span>{style.icon}</span> {title}
      </h3>
      
      <p className="text-gray-300 text-sm">{description}</p>
      
      {speaker && (
        <p className="text-cyber-green text-sm mt-2">
          Speaker: {speaker}
        </p>
      )}
    </div>
  );
};

export default TimelineEvent;
