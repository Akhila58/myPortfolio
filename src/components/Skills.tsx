import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Wrench, Lightbulb } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["Python", "Java", "HTML", "CSS", "JavaScript", "TypeScript"]
    },
    {
      title: "Frameworks",
      icon: <Lightbulb className="h-6 w-6" />,
      skills: ["LangChain", "LangGraph", "n8n", "ReactJS", "Nodejs", "FastAPI"]
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      skills: ["MySQL", "SQLite", "Firebase", "Qdrant", "Vector Databases"]
    },
    {
      title: "Tools & Other",
      icon: <Wrench className="h-6 w-6" />,
      skills: ["GitHub Copilot", "Cursor", "Git/GitHub", "Pandoc", "API Integration", "Automation", "Problem-Solving"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-gradient">Technical Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 animate-slide-in-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-2 p-3 rounded-full bg-primary/20 w-fit">
                  {category.icon}
                </div>
                <CardTitle className="text-xl text-primary">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="bg-muted/50 hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;