import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ResumeSkills = () => {
  return (
    <Card className="p-6 mb-6">
      <h3 className="text-xl font-semibold text-foreground mb-4">Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-medium text-foreground mb-2">Programming</h4>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Java (8, 11, 17)</Badge>
            <Badge variant="secondary">Python 3</Badge>
          </div>
        </div>
        <div>
          <h4 className="font-medium text-foreground mb-2">Frameworks</h4>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Spring Boot</Badge>
            <Badge variant="secondary">Hibernate</Badge>
            <Badge variant="secondary">Spring Security</Badge>
            <Badge variant="secondary">PrimeFaces</Badge>
            <Badge variant="secondary">Flowable</Badge>
          </div>
        </div>
        <div>
          <h4 className="font-medium text-foreground mb-2">DevOps</h4>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Docker</Badge>
            <Badge variant="secondary">Kubernetes</Badge>
          </div>
        </div>
        <div>
          <h4 className="font-medium text-foreground mb-2">Data Engineering</h4>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">ELK Stack</Badge>
            <Badge variant="secondary">Apache Spark</Badge>
            <Badge variant="secondary">Elasticsearch</Badge>
            <Badge variant="secondary">Kibana</Badge>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ResumeSkills;