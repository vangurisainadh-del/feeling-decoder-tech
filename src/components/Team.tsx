import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Linkedin } from "lucide-react";

const Team = () => {
  const members = [
    {
      name: "Dr. Sarah Chen",
      role: "Project Lead & AI Researcher",
      initials: "SC",
      color: "bg-primary",
    },
    {
      name: "Alex Kumar",
      role: "Machine Learning Engineer",
      initials: "AK",
      color: "bg-secondary",
    },
    {
      name: "Emily Rodriguez",
      role: "Computer Vision Specialist",
      initials: "ER",
      color: "bg-accent",
    },
    {
      name: "Michael Zhang",
      role: "Data Scientist",
      initials: "MZ",
      color: "bg-primary-dark",
    },
  ];

  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the minds behind the emotion recognition system
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {members.map((member, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-card border-border/50 text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Avatar className={`w-24 h-24 mx-auto mb-4 ${member.color}`}>
                <AvatarFallback className="text-white text-2xl font-bold">{member.initials}</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-bold text-card-foreground mb-2">{member.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
              <div className="flex justify-center gap-3">
                <button className="w-8 h-8 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </button>
                <button className="w-8 h-8 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                  <Linkedin className="w-4 h-4 text-primary" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
