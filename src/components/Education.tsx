import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-gradient">Education & Certifications</span>
        </h2>
        
        <div className="space-y-8">
          {/* Education */}
          <Card className="card-gradient border-primary/20 glow-effect animate-fade-in">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/20 w-fit">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl text-primary mb-2">
                    B.TECH - CSE (AI ML)
                  </CardTitle>
                  <p className="text-xl font-semibold text-foreground mb-2">
                    Aditya College of Engineering & Technology
                  </p>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    2022 - Present
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge variant="outline" className="border-primary/50 text-primary">
                      CGPA: 8.44 / 10.0
                    </Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Certifications */}
          <Card className="card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-accent/20 w-fit">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-2xl text-accent">
                  Certifications
                </CardTitle>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-lg bg-muted/20 border border-primary/10">
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    Salesforce AI Associate
                  </h3>
                  <p className="text-muted-foreground">
                    Professional certification in Salesforce AI technologies and implementation
                  </p>
                </div>
                
                <div className="p-6 rounded-lg bg-muted/20 border border-primary/10">
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    Programming with Python
                  </h3>
                  <p className="text-muted-foreground">
                    Comprehensive certification in Python programming and development
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;