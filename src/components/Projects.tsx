import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Resume Builder",
      description: "An AI-powered resume builder application using ReactJS and FastAPI, integrating LangChain, Pandoc, and LLMs to tailor resumes based on job descriptions for improved relevance and targeting.",
      technologies: ["ReactJS", "FastAPI", "LangChain", "Pandoc", "LLMs", "AI Integration"],
      githubUrl: "https://github.com/Akhila58/Resume-Builder",
      liveUrl: null
    },
    {
      title: "Word Generator",
      description: " A daily word generator developed using TypeScript, Firebase, Nodejs and LLM (via LangChain) to generate 5 new words per day based on selected domain with persistence history.",
      technologies: ["TypeScript", "Firebase", "Nodejs", "LangChain", "LLM Integration"],
      githubUrl: "https://github.com/Akhila58/word_gen",
      liveUrl: "https://word-gen-frontend.onrender.com"
    },
    {
      title: "Text-to-SQL Query Generator",
      description: "An AI application using LangChain and SQLite to convert natural language queries into SQL, leveraging Groq's LLaMA model for accurate query generation and user-friendly response conversion.",
      technologies: ["LangChain", "SQLite", "Groq LLaMA", "Natural Language Processing", "SQL Generation"],
      githubUrl: "https://github.com/Akhila58/Text_To_Sql",
      liveUrl: null
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-gradient">Featured Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 glow-hover group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary"
                      className="bg-muted/30 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-primary/50 hover:border-primary"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Source Code
                  </Button>
                  {project.liveUrl && (
                    <Button 
                      size="sm" 
                      className="flex-1 glow-hover"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
