
import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: Date;
  initialDays?: number; // Add optional prop to override calculated days
}

const CountdownTimer: React.FC<CountdownProps> = ({ targetDate, initialDays }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: initialDays || 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference <= 0) {
        setIsExpired(true);
        return;
      }
      
      // Calculate time units
      const days = initialDays !== undefined ? initialDays : Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    };
    
    calculateTimeLeft();
    const timerId = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timerId);
  }, [targetDate, initialDays]);
  
  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];
  
  if (isExpired) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold text-cyber-green">HackSky is Live!</h2>
        <p className="text-gray-400">The event has started</p>
      </div>
    );
  }
  
  return (
    <div className="flex flex-wrap justify-center gap-4 my-8">
      {timeUnits.map((unit) => (
        <div key={unit.label} className="cyber-border bg-cyber-darker p-4 rounded-md w-20 h-20 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-cyber-green animate-pulse-glow">
            {unit.value.toString().padStart(2, '0')}
          </span>
          <span className="text-xs text-gray-400">{unit.label}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
