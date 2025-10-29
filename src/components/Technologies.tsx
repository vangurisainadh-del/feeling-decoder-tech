import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Technologies = () => {
  const techCategories = [
    {
      category: "Machine Learning Frameworks",
      items: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn"],
      color: "bg-primary/10 text-primary",
    },
    {
      category: "Computer Vision",
      items: ["OpenCV", "Dlib", "MediaPipe", "Face++"],
      color: "bg-secondary/10 text-secondary",
    },
    {
      category: "Deep Learning Models",
      items: ["CNN", "ResNet", "VGG", "LSTM", "Transformer"],
      color: "bg-accent/10 text-accent",
    },
    {
      category: "Audio Processing",
      items: ["Librosa", "PyAudio", "Speech Recognition", "Mel Spectrograms"],
      color: "bg-primary/10 text-primary",
    },
    {
      category: "Data & Sensors",
      items: ["FER-2013 Dataset", "AffectNet", "EEG Sensors", "Heart Rate Monitors"],
      color: "bg-secondary/10 text-secondary",
    },
    {
      category: "Development Tools",
      items: ["Python", "Jupyter", "Docker", "Git", "AWS/Azure"],
      color: "bg-accent/10 text-accent",
    },
  ];

  return (
    <section id="technologies" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technologies Used
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powered by cutting-edge AI tools and frameworks
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((tech, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-card border-border/50 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-4 text-card-foreground">{tech.category}</h3>
              <div className="flex flex-wrap gap-2">
                {tech.items.map((item, i) => (
                  <Badge 
                    key={i} 
                    variant="secondary" 
                    className={`${tech.color} hover:scale-110 transition-transform duration-200 px-3 py-1`}
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
