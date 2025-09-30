import { useEffect, useState } from "react";

interface SparkleProps {
  delay?: number;
}

const Sparkle = ({ delay = 0 }: SparkleProps) => {
  const [style, setStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    setStyle({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${delay}s`,
    });
  }, [delay]);

  return (
    <div
      className="absolute w-2 h-2 animate-sparkle"
      style={style}
    >
      <div className="w-full h-full bg-accent rounded-full shadow-glow" />
    </div>
  );
};

export default Sparkle;
