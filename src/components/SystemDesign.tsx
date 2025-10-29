import { Card } from "@/components/ui/card";
import { Camera, Cpu, Brain, BarChart3 } from "lucide-react";

const SystemDesign = () => {
  const steps = [
    {
      icon: Camera,
      title: "Input Collection",
      description: "Capture facial expressions, voice samples, and physiological data",
      color: "text-primary",
    },
    {
      icon: Cpu,
      title: "Data Processing",
      description: "Preprocess and extract relevant features using computer vision and signal processing",
      color: "text-secondary",
    },
    {
      icon: Brain,
      title: "AI Analysis",
      description: "Deep learning models (CNN, RNN) classify emotional states",
      color: "text-accent",
    },
    {
      icon: BarChart3,
      title: "Emotion Output",
      description: "Display recognized emotions with confidence scores in real-time",
      color: "text-primary",
    },
  ];

  return (
    <section id="system" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            System Architecture
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive pipeline from data collection to emotion recognition
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card border-border/50">
                <div className={`w-14 h-14 bg-gradient-accent rounded-full flex items-center justify-center mb-4 ${step.color}`}>
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-sm font-semibold text-muted-foreground mb-2">Step {index + 1}</div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </Card>
              
              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-accent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemDesign;
