import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Demo = () => {
  const emotions = [
    { name: "Happy", emoji: "😊", confidence: 92, color: "bg-secondary" },
    { name: "Sad", emoji: "😢", confidence: 78, color: "bg-primary" },
    { name: "Angry", emoji: "😠", confidence: 85, color: "bg-destructive" },
    { name: "Surprised", emoji: "😮", confidence: 88, color: "bg-accent" },
    { name: "Fearful", emoji: "😨", confidence: 74, color: "bg-primary-dark" },
    { name: "Neutral", emoji: "😐", confidence: 90, color: "bg-muted-foreground" },
  ];

  return (
    <section id="demo" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Demo & Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See our system in action with real-time emotion predictions
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emotions.map((emotion, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-card border-border/50 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-5xl">{emotion.emoji}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-card-foreground mb-1">{emotion.name}</h3>
                    <p className="text-sm text-muted-foreground">Confidence: {emotion.confidence}%</p>
                  </div>
                </div>
                <Progress value={emotion.confidence} className="h-2" />
              </Card>
            ))}
          </div>

          <Card className="mt-12 p-8 bg-gradient-card border-border/50 animate-fade-in">
            <h3 className="text-2xl font-bold text-card-foreground mb-4">System Performance</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">94.5%</div>
                <p className="text-muted-foreground">Overall Accuracy</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">30ms</div>
                <p className="text-muted-foreground">Processing Time</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">7</div>
                <p className="text-muted-foreground">Emotion Classes</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Demo;
