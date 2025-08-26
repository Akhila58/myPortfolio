import { Button } from "@/components/ui/button";
import { Github, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-primary/20">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center space-y-6">
          <div className="text-center">
            <a 
              href="mailto:akhilanakka58@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              akhilanakka58@gmail.com
            </a>
          </div>
          <div className="flex space-x-6">
            <Button 
              variant="ghost" 
              size="icon" 
              className="glow-hover"
              onClick={() => window.open('https://github.com/Akhila58', '_blank')}
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="glow-hover"
              onClick={() => window.open('https://www.linkedin.com/in/akhila-nakka-8594332a7/', '_blank')}
            >
              <Linkedin className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              Made using React & TypeScript
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              © 2025 AI/ML & FullStack Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
