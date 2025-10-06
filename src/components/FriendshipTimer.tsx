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
  // Set the birthday date here (year, month-1, day)
  const birthdayDate = new Date(2000, 0, 1); // January 1, 2000 - Change this to actual birthday
  
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
      const diff = now.getTime() - birthdayDate.getTime();
      
      const totalSeconds = Math.floor(diff / 1000);
      const totalMinutes = Math.floor(totalSeconds / 60);
      const totalHours = Math.floor(totalMinutes / 60);
      const totalDays = Math.floor(totalHours / 24);
      
      // Calculate years, months, days more accurately
      let years = now.getFullYear() - birthdayDate.getFullYear();
      let months = now.getMonth() - birthdayDate.getMonth();
      let remainingDays = now.getDate() - birthdayDate.getDate();
      
      if (remainingDays < 0) {
        months--;
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        remainingDays += prevMonth.getDate();
      }
      
      if (months < 0) {
        years--;
        months += 12;
      }
      
      // Calculate remaining hours, minutes, seconds
      const remainingHours = totalHours % 24;
      const remainingMinutes = totalMinutes % 60;
      const remainingSeconds = totalSeconds % 60;
      
      setTimeElapsed({
        years,
        months,
        days: remainingDays,
        hours: remainingHours,
        minutes: remainingMinutes,
        seconds: remainingSeconds,
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
          You've Been Alive For...
        </h3>
        
        <p className="text-sm text-muted-foreground">
          Counting every precious moment
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
          And the clock keeps ticking... Happy Birthday! 🎂
        </p>
      </div>
    </Card>
  );
};

export default FriendshipTimer;
