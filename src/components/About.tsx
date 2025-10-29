import { Card } from "@/components/ui/card";
import { Target, Lightbulb, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About the Project
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bridging the gap between human emotions and artificial intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-card border-border/50 animate-scale-in">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-card-foreground">What is Emotion Recognition?</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our system uses advanced AI algorithms to detect and classify human emotions from facial expressions, voice tone, and physiological signals in real-time.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-card border-border/50 animate-scale-in" style={{ animationDelay: "0.1s" }}>
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
              <Lightbulb className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-card-foreground">System Goals</h3>
            <p className="text-muted-foreground leading-relaxed">
              To create an accurate, real-time emotion detection system that can be applied in healthcare, education, customer service, and human-computer interaction.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-card border-border/50 animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Motivation</h3>
            <p className="text-muted-foreground leading-relaxed">
              Understanding emotions is key to empathy and better human interaction. AI can help us recognize emotional states to improve mental health support and communication.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
