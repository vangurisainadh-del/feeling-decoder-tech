import { Heart } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-hero text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AI Emotion Recognition</h3>
            <p className="text-white/80 leading-relaxed">
              Using artificial intelligence to understand and classify human emotions for a better tomorrow.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection("about")} className="text-white/80 hover:text-white transition-colors">
                  About Project
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("system")} className="text-white/80 hover:text-white transition-colors">
                  System Design
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("technologies")} className="text-white/80 hover:text-white transition-colors">
                  Technologies
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("demo")} className="text-white/80 hover:text-white transition-colors">
                  Demo
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <p className="text-white/80 leading-relaxed">
              Interested in our research? Reach out to explore collaboration opportunities.
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/80 flex items-center justify-center gap-2">
            Designed with <Heart className="w-4 h-4 text-red-400 fill-red-400" /> using{" "}
            <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="text-white hover:underline font-semibold">
              Lovable.dev
            </a>
          </p>
          <p className="text-white/60 text-sm mt-2">
            © {new Date().getFullYear()} AI Emotion Recognition System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
