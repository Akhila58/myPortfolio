import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Himitsu Lab",
      position: "AI Intern",
      duration: "April 2025 - Present",
      location: "Remote",
      description: "Hands-on experience working with real-time AI projects focused on data preparation and model training workflows. Worked on dataset creation and synthetic data generation using LLMs to support training of AI models for diverse use cases. Collaborated with tools like FastAPI, Python, and vector databases to manage and serve data dynamically.",
      skills: ["AI/ML", "FastAPI","Nodejs", "Python", "Vector Databases", "Data Preparation", "LLM Integration"]
    },
    {
      company: "APSSDC",
      position: "ML Intern",
      duration: "Previous Experience",
      location: "Andhra Pradesh",
      description: "Worked on sentiment analysis project to analyze text data, resulting in 90% accuracy in classifying customer feedback as positive, negative, or neutral. Gained hands-on experience in NLP, machine learning, and data visualization through a sentiment analysis project, enhancing skills in text processing, feature extraction, and real-world applications like customer feedback and social media monitoring.",
      skills: ["Machine Learning", "NLP", "Sentiment Analysis", "Data Visualization", "Text Processing", "Feature Extraction"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-gradient">Experience</span>
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 glow-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-primary mb-2">
                      {exp.position}
                    </CardTitle>
                    <p className="text-xl font-semibold text-foreground">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline"
                      className="border-primary/50 text-primary hover:bg-primary/10"
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

export default Experience;