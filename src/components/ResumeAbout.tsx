import { Card } from "@/components/ui/card";

const ResumeAbout = () => {
  return (
    <Card className="p-6 mb-6">
      <h3 className="text-xl font-semibold text-foreground mb-4">About</h3>
      <p className="text-muted-foreground leading-relaxed">
        Experienced software engineer specializing in backend development with notable experience in data engineering and application deployment. Proficient in designing and implementing scalable backend systems, developing and maintaining ETL pipelines, and providing problem-solving support and team collaboration.
      </p>
    </Card>
  );
};

export default ResumeAbout;