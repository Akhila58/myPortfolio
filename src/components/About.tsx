import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-gradient">About Me</span>
        </h2>
        
        <Card className="card-gradient border-primary/20 glow-effect">
          <CardContent className="p-8 md:p-12">
            <p className="text-lg leading-relaxed text-muted-foreground">
              A passionate Computer Science student with hands-on experience in AI-driven projects 
              and full-stack development. My journey focuses on creating innovative solutions through 
              automation, data workflows, and user-centric applications.
            </p>
            <br />
            <p className="text-lg leading-relaxed text-muted-foreground">
              With internships focused on automation, data workflows, and user-centric solutions, 
              I have proven ability to deliver impactful projects and work effectively in 
              collaborative environments. I'm constantly exploring new technologies and 
              methodologies to push the boundaries of what's possible in AI and software development.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Current Focus</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• AI/ML Model Development</li>
                  <li>• Full-Stack Web Applications</li>
                  <li>• Data Automation & Workflows</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Interests</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Machine Learning Research</li>
                  <li>• API Development & Integration</li>
                  <li>• Database Design & Optimization</li>
                  <li>• User Experience Design</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;