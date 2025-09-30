import { useEffect, useState } from "react";

interface FloatingBalloonProps {
  delay?: number;
  color: string;
}

const FloatingBalloon = ({ delay = 0, color }: FloatingBalloonProps) => {
  const [style, setStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    setStyle({
      left: `${Math.random() * 90}%`,
      animationDelay: `${delay}s`,
    });
  }, [delay]);

  return (
    <div
      className="absolute bottom-0 animate-float opacity-60"
      style={style}
    >
      <div
        className="w-12 h-16 rounded-full relative"
        style={{ backgroundColor: color }}
      >
        <div className="absolute bottom-0 left-1/2 w-0.5 h-16 bg-foreground/20 transform -translate-x-1/2 translate-y-full" />
      </div>
    </div>
  );
};

export default FloatingBalloon;
