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
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8 animate-fadeInUp">
            <div className="inline-block">
              <Sparkles className="w-16 h-16 text-accent mx-auto mb-6 animate-sparkle" />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight">
              Happy Birthday
            </h1>
            
            <p className="text-4xl md:text-5xl font-semibold text-primary">
              Best Friend Forever! 💕
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto mt-12">
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

      {/* Friendship Timer Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <FriendshipTimer />
        </div>
      </section>

      {/* Message Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8 md:p-12 bg-card/80 backdrop-blur-sm border-2 border-primary/20 shadow-glow animate-fadeInUp">
            <div className="space-y-6 text-center">
              <Heart className="w-12 h-12 text-primary mx-auto fill-primary" />
              
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                To My Amazing Best Friend
              </h2>
              
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Today is YOUR day, and I couldn't be more excited to celebrate the incredible person you are!
                </p>
                <p>
                  Thank you for being the sunshine in my life, for all the laughs, the late-night talks, 
                  the endless support, and for making every moment more special just by being you.
                </p>
                <p className="text-xl font-semibold text-primary">
                  Here's to another year of amazing adventures together! 🎉
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 pt-6">
                <div className="flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full">
                  <Cake className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-primary">Make a Wish</span>
                </div>
                <div className="flex items-center gap-2 px-6 py-3 bg-secondary/20 rounded-full">
                  <Gift className="w-5 h-5 text-secondary" />
                  <span className="font-semibold text-secondary">Celebrate Big</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Photo Collage Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-block">
              <Camera className="w-12 h-12 text-accent mx-auto mb-4 animate-bounce" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Our Memories Together 📸
            </h2>
            <p className="text-muted-foreground text-lg">
              A collection of our favorite moments
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {/* Large featured photo - spans 2 columns */}
            <div className="col-span-2 row-span-2">
              <div className="relative w-full h-full min-h-[400px] bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl border-2 border-dashed border-primary/40 flex items-center justify-center hover:border-primary/80 hover:scale-[1.02] transition-all group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-center text-muted-foreground relative z-10">
                  <Sparkles className="w-14 h-14 mx-auto mb-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                  <p className="text-base font-medium">Featured Memory</p>
                  <p className="text-xs mt-2 opacity-70">1200 x 800px</p>
                </div>
              </div>
            </div>
            
            {/* Small photos column */}
            <div className="aspect-square">
              <div className="relative w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl border-2 border-dashed border-primary/40 flex items-center justify-center hover:border-primary/80 hover:scale-105 transition-all group">
                <div className="text-center text-muted-foreground">
                  <Heart className="w-10 h-10 mx-auto mb-2 opacity-60 group-hover:opacity-100 group-hover:fill-primary transition-all" />
                  <p className="text-xs opacity-70">800 x 800px</p>
                </div>
              </div>
            </div>
            
            <div className="aspect-square">
              <div className="relative w-full h-full bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl border-2 border-dashed border-primary/40 flex items-center justify-center hover:border-primary/80 hover:scale-105 transition-all group">
                <div className="text-center text-muted-foreground">
                  <Gift className="w-10 h-10 mx-auto mb-2 opacity-60 group-hover:opacity-100 transition-all" />
                  <p className="text-xs opacity-70">800 x 800px</p>
                </div>
              </div>
            </div>
            
            <div className="aspect-square">
              <div className="relative w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl border-2 border-dashed border-primary/40 flex items-center justify-center hover:border-primary/80 hover:scale-105 transition-all group">
                <div className="text-center text-muted-foreground">
                  <Cake className="w-10 h-10 mx-auto mb-2 opacity-60 group-hover:opacity-100 transition-all" />
                  <p className="text-xs opacity-70">800 x 800px</p>
                </div>
              </div>
            </div>
            
            <div className="aspect-square">
              <div className="relative w-full h-full bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl border-2 border-dashed border-primary/40 flex items-center justify-center hover:border-primary/80 hover:scale-105 transition-all group">
                <div className="text-center text-muted-foreground">
                  <Camera className="w-10 h-10 mx-auto mb-2 opacity-60 group-hover:opacity-100 transition-all" />
                  <p className="text-xs opacity-70">800 x 800px</p>
                </div>
              </div>
            </div>
          </div>

          {/* Second row with more photos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square">
              <div className="relative w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl border-2 border-dashed border-primary/40 flex items-center justify-center hover:border-primary/80 hover:scale-105 transition-all group">
                <div className="text-center text-muted-foreground">
                  <Sparkles className="w-10 h-10 mx-auto mb-2 opacity-60 group-hover:opacity-100 transition-all" />
                  <p className="text-xs opacity-70">800 x 800px</p>
                </div>
              </div>
            </div>

            <div className="col-span-2 aspect-video">
              <div className="relative w-full h-full bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl border-2 border-dashed border-primary/40 flex items-center justify-center hover:border-primary/80 hover:scale-[1.02] transition-all group">
                <div className="text-center text-muted-foreground">
                  <Heart className="w-12 h-12 mx-auto mb-2 opacity-60 group-hover:opacity-100 group-hover:fill-primary transition-all" />
                  <p className="text-sm font-medium">Wide Memory</p>
                  <p className="text-xs mt-2 opacity-70">1200 x 600px</p>
                </div>
              </div>
            </div>
            
            <div className="aspect-square">
              <div className="relative w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl border-2 border-dashed border-primary/40 flex items-center justify-center hover:border-primary/80 hover:scale-105 transition-all group">
                <div className="text-center text-muted-foreground">
                  <Gift className="w-10 h-10 mx-auto mb-2 opacity-60 group-hover:opacity-100 transition-all" />
                  <p className="text-xs opacity-70">800 x 800px</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-16 px-4 text-center">
        <div className="space-y-4 animate-fadeInUp">
          <p className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Wishing you the most magical year ahead! ✨
          </p>
          <p className="text-muted-foreground">
            Love you to the moon and back! 💖
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
