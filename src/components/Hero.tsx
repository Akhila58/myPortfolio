import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">AKHILA NAKKA</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
            Computer Science Student, AI/ML & Full-Stack Developer
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Passionate about AI-driven projects and full-stack development. 
            Focused on automation, data workflows, and user-centric solutions 
            with proven ability to deliver impactful projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="glow-hover px-8 py-3 text-lg"
              onClick={() => window.open('mailto:your.email@example.com', '_blank')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-3 text-lg border-primary/50 hover:border-primary"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <FileText className="mr-2 h-5 w-5" />
              View Resume
            </Button>
          </div>
          
          <div className="text-center mb-4">
            <a 
              href="mailto:akhilanakka58@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              akhilanakka58@gmail.com
            </a>
          </div>
          <div className="flex justify-center gap-6">
            <Button 
              variant="ghost" 
              size="icon" 
              className="glow-hover"
              onClick={() => window.open('https://github.com/Akhila58', '_blank')}
            >
              <Github className="h-6 w-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="glow-hover"
              onClick={() => window.open('https://linkedin.com/in/yourprofile', '_blank')}
            >
              <Linkedin className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-glow-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-glow-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;
