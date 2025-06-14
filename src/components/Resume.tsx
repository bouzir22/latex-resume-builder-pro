import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import ResumeHeader from "./ResumeHeader";
import ResumeAbout from "./ResumeAbout";
import ResumeSkills from "./ResumeSkills";
import ResumeExperience from "./ResumeExperience";
import ResumeEducation from "./ResumeEducation";

const Resume = () => {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: "Ahmed_Bouzir_Resume",
  });

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Export Button */}
        <div className="mb-6 text-center">
          <Button onClick={handlePrint} className="gap-2">
            <Download className="w-4 h-4" />
            Export as PDF
          </Button>
        </div>
        
        {/* Resume Content */}
        <div ref={resumeRef}>
          <ResumeHeader />
          <ResumeAbout />
          <ResumeSkills />
          <ResumeExperience />
          <ResumeEducation />
        </div>
      </div>
    </div>
  );
};

export default Resume;