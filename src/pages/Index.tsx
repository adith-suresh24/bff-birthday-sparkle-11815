import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import FloatingBalloon from "@/components/FloatingBalloon";
import Sparkle from "@/components/Sparkle";
import FriendshipTimer from "@/components/FriendshipTimer";
import heroImage from "@/assets/birthday-hero.jpg";
import { Heart, Sparkles, Gift, Cake, Camera } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-soft overflow-hidden relative">
      {/* Floating Balloons */}
      <FloatingBalloon color="hsl(330, 81%, 60%)" delay={0} />
      <FloatingBalloon color="hsl(280, 70%, 75%)" delay={1} />
      <FloatingBalloon color="hsl(45, 100%, 70%)" delay={2} />
      <FloatingBalloon color="hsl(330, 81%, 70%)" delay={1.5} />
      <FloatingBalloon color="hsl(280, 70%, 65%)" delay={0.5} />

      {/* Sparkles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <Sparkle key={i} delay={i * 0.3} />
      ))}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 sm:space-y-8 animate-fadeInUp">
            <div className="inline-block">
              <Sparkles className="w-12 h-12 sm:w-16 sm:h-16 text-accent mx-auto mb-4 sm:mb-6 animate-sparkle" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight px-4">
              Happy Birthday
            </h1>
            
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary px-4">
              Best Friend Forever! 💕
            </p>

            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto mt-8 sm:mt-12">
              <img 
                src={heroImage} 
                alt="Birthday celebration with balloons and confetti" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Age Timer Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <FriendshipTimer />
        </div>
      </section>

      {/* Message Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-6 sm:p-8 md:p-12 bg-card/80 backdrop-blur-sm border-2 border-primary/20 shadow-glow animate-fadeInUp">
            <div className="space-y-4 sm:space-y-6 text-center">
              <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-primary mx-auto fill-primary" />
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground px-4">
                To My Amazing Best Friend
              </h2>
              
              <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed px-4">
                <p>
                  Today is YOUR day, and I couldn't be more excited to celebrate the incredible person you are!
                </p>
                <p>
                  Thank you for being the sunshine in my life, for all the laughs, the late-night talks, 
                  the endless support, and for making every moment more special just by being you.
                </p>
                <p className="text-lg sm:text-xl font-semibold text-primary">
                  Here's to another year of amazing adventures together! 🎉
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 pt-4 sm:pt-6">
                <div className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary/10 rounded-full">
                  <Cake className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  <span className="text-sm sm:text-base font-semibold text-primary">Make a Wish</span>
                </div>
                <div className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-secondary/20 rounded-full">
                  <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                  <span className="text-sm sm:text-base font-semibold text-secondary">Celebrate Big</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Photo Collage Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 space-y-3 sm:space-y-4">
            <div className="inline-block">
              <Camera className="w-10 h-10 sm:w-12 sm:h-12 text-accent mx-auto mb-3 sm:mb-4 animate-bounce" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent px-4">
              Our Memories Together 📸
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg px-4">
              A collection of our favorite moments
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-3 sm:mb-4">
            {/* Large featured photo - spans 2 columns */}
            <div className="col-span-2 row-span-2">
              <div className="relative w-full h-full min-h-[250px] sm:min-h-[350px] md:min-h-[400px] bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl sm:rounded-3xl border-2 border-dashed border-primary/40 flex items-center justify-center hover:border-primary/80 hover:scale-[1.02] transition-all group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-center text-muted-foreground relative z-10 px-4">
                  <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto mb-2 sm:mb-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                  <p className="text-sm sm:text-base font-medium">Featured Memory</p>
                  <p className="text-[10px] sm:text-xs mt-1 sm:mt-2 opacity-70">1200 x 800px</p>
                </div>
              </div>
            </div>
            
            {/* Small photos column */}
            <div className="aspect-square">
              <div className="relative w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl sm:rounded-2xl border-2 border-dashed border-primary/40 flex items-center justify-center hover:border-primary/80 hover:scale-105 transition-all group">
                <div className="text-center text-muted-foreground">
                  <Heart className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-1 sm:mb-2 opacity-60 group-hover:opacity-100 group-hover:fill-primary transition-all" />
                  <p className="text-[10px] sm:text-xs opacity-70">800 x 800px</p>
                </div>
              </div>
            </div>
            
            <div className="aspect-square">
              <div className="relative w-full h-full bg-gradient-to-br from-secondary/20 to-accent/20 rounded-xl sm:rounded-2xl border-2 border-dashed border-primary/40 flex items-center justify-center hover:border-primary/80 hover:scale-105 transition-all group">
                <div className="text-center text-muted-foreground">
                  <Gift className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-1 sm:mb-2 opacity-60 group-hover:opacity-100 transition-all" />
                  <p className="text-[10px] sm:text-xs opacity-70">800 x 800px</p>
                </div>
              </div>
            </div>
            
            <div className="aspect-square">
              <div className="relative w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl sm:rounded-2xl border-2 border-dashed border-primary/40 flex items-center justify-center hover:border-primary/80 hover:scale-105 transition-all group">
                <div className="text-center text-muted-foreground">
                  <Cake className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-1 sm:mb-2 opacity-60 group-hover:opacity-100 transition-all" />
                  <p className="text-[10px] sm:text-xs opacity-70">800 x 800px</p>
                </div>
              </div>
            </div>
            
            <div className="aspect-square">
              <div className="relative w-full h-full bg-gradient-to-br from-accent/20 to-secondary/20 rounded-xl sm:rounded-2xl border-2 border-dashed border-primary/40 flex items-center justify-center hover:border-primary/80 hover:scale-105 transition-all group">
                <div className="text-center text-muted-foreground">
                  <Camera className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-1 sm:mb-2 opacity-60 group-hover:opacity-100 transition-all" />
                  <p className="text-[10px] sm:text-xs opacity-70">800 x 800px</p>
                </div>
              </div>
            </div>
          </div>

          {/* Second row with more photos */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="aspect-square">
              <div className="relative w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl sm:rounded-2xl border-2 border-dashed border-primary/40 flex items-center justify-center hover:border-primary/80 hover:scale-105 transition-all group">
                <div className="text-center text-muted-foreground">
                  <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-1 sm:mb-2 opacity-60 group-hover:opacity-100 transition-all" />
                  <p className="text-[10px] sm:text-xs opacity-70">800 x 800px</p>
                </div>
              </div>
            </div>

            <div className="col-span-2 aspect-video">
              <div className="relative w-full h-full bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl sm:rounded-3xl border-2 border-dashed border-primary/40 flex items-center justify-center hover:border-primary/80 hover:scale-[1.02] transition-all group">
                <div className="text-center text-muted-foreground px-4">
                  <Heart className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-1 sm:mb-2 opacity-60 group-hover:opacity-100 group-hover:fill-primary transition-all" />
                  <p className="text-xs sm:text-sm font-medium">Wide Memory</p>
                  <p className="text-[10px] sm:text-xs mt-1 sm:mt-2 opacity-70">1200 x 600px</p>
                </div>
              </div>
            </div>
            
            <div className="aspect-square">
              <div className="relative w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl sm:rounded-2xl border-2 border-dashed border-primary/40 flex items-center justify-center hover:border-primary/80 hover:scale-105 transition-all group">
                <div className="text-center text-muted-foreground">
                  <Gift className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-1 sm:mb-2 opacity-60 group-hover:opacity-100 transition-all" />
                  <p className="text-[10px] sm:text-xs opacity-70">800 x 800px</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 text-center">
        <div className="space-y-3 sm:space-y-4 animate-fadeInUp">
          <p className="text-xl sm:text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent px-4">
            Wishing you the most magical year ahead! ✨
          </p>
          <p className="text-sm sm:text-base text-muted-foreground px-4">
            Love you to the moon and back! 💖
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
