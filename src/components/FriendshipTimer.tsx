import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Clock, Heart } from "lucide-react";

interface TimeElapsed {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const FriendshipTimer = () => {
  // Set your friendship start date here (year, month-1, day)
  const friendshipStartDate = new Date(2020, 0, 1); // January 1, 2020
  
  const [timeElapsed, setTimeElapsed] = useState<TimeElapsed>({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeElapsed = () => {
      const now = new Date();
      const diff = now.getTime() - friendshipStartDate.getTime();
      
      const seconds = Math.floor(diff / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      
      // Calculate years, months, days more accurately
      let years = now.getFullYear() - friendshipStartDate.getFullYear();
      let months = now.getMonth() - friendshipStartDate.getMonth();
      let remainingDays = now.getDate() - friendshipStartDate.getDate();
      
      if (remainingDays < 0) {
        months--;
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        remainingDays += prevMonth.getDate();
      }
      
      if (months < 0) {
        years--;
        months += 12;
      }
      
      setTimeElapsed({
        years,
        months,
        days: remainingDays,
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
      });
    };

    calculateTimeElapsed();
    const interval = setInterval(calculateTimeElapsed, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center px-4 py-3 bg-primary/10 rounded-xl backdrop-blur-sm border border-primary/20 hover:scale-105 transition-transform">
      <div className="text-3xl md:text-4xl font-bold text-primary tabular-nums">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-xs md:text-sm text-muted-foreground mt-1 font-medium">
        {label}
      </div>
    </div>
  );

  return (
    <Card className="p-6 md:p-8 bg-card/80 backdrop-blur-sm border-2 border-primary/20 shadow-glow animate-fadeInUp">
      <div className="text-center space-y-6">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Clock className="w-8 h-8 text-primary animate-pulse" />
          <Heart className="w-6 h-6 text-accent fill-accent" />
        </div>
        
        <h3 className="text-2xl md:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Our Friendship Journey
        </h3>
        
        <p className="text-sm text-muted-foreground">
          Time we've been best friends
        </p>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4 mt-6">
          <TimeUnit value={timeElapsed.years} label="Years" />
          <TimeUnit value={timeElapsed.months} label="Months" />
          <TimeUnit value={timeElapsed.days} label="Days" />
          <TimeUnit value={timeElapsed.hours} label="Hours" />
          <TimeUnit value={timeElapsed.minutes} label="Minutes" />
          <TimeUnit value={timeElapsed.seconds} label="Seconds" />
        </div>

        <p className="text-lg font-semibold text-primary mt-6">
          Every second with you is precious! 💝
        </p>
      </div>
    </Card>
  );
};

export default FriendshipTimer;
