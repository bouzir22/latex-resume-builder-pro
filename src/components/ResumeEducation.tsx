import { Card } from "@/components/ui/card";

const ResumeEducation = () => {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold text-foreground mb-4">Education</h3>
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <h4 className="font-semibold text-foreground">National Diploma in Computer Engineering</h4>
          <p className="text-muted-foreground">International Multidisciplinary School</p>
        </div>
        <span className="text-sm text-muted-foreground mt-2 md:mt-0">August 2022</span>
      </div>
    </Card>
  );
};

export default ResumeEducation;