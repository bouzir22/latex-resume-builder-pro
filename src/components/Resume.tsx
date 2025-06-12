import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Github, Linkedin, Download } from "lucide-react";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

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
        {/* Header Section */}
        <Card className="p-8 mb-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center">
              <div className="w-28 h-28 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">AB</span>
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold text-foreground mb-2">Ahmed Bouzir</h1>
              <h2 className="text-xl text-muted-foreground mb-4">Backend Developer</h2>
              
              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>(+216) 95 651 173</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Github className="w-4 h-4 text-primary" />
                  <span>bouzir22</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>ahmedbouzir1995@gmail.com</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Linkedin className="w-4 h-4 text-primary" />
                  <span>Ahmed Bouzir</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Tunisia</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* About Section */}
        <Card className="p-6 mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-4">About</h3>
          <p className="text-muted-foreground leading-relaxed">
            Experienced software engineer specializing in backend development with notable experience in data engineering and application deployment. Proficient in designing and implementing scalable backend systems, developing and maintaining ETL pipelines, and providing problem-solving support and team collaboration.
          </p>
        </Card>

        {/* Skills Section */}
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

        {/* Professional Experience */}
        <Card className="p-6 mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-6">Professional Experience</h3>
          
          <div className="space-y-8">
            {/* Proxym Group Header */}
            <div>
              <h4 className="text-lg font-semibold text-foreground">Proxym Group</h4>
              <p className="text-muted-foreground">Sousse, Tunisia</p>
            </div>

            {/* Experience Items */}
            <div className="relative pl-6 border-l-2 border-border">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-2 top-0"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h5 className="font-semibold text-foreground">Fabmisr micro-finance (Backend Developer)</h5>
                <span className="text-sm text-muted-foreground">Mar 2024 - Present</span>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-3">
                <li>Implemented APIs for mobile, backoffice, merchant portal applications</li>
                <li>Designed standardized processes for handling i-requests requiring Initiator and Validators</li>
                <li>Managed merchant configurations and onboarding process</li>
                <li>Implemented payment processes including payment allocation and repayment APIs</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Java 17</Badge>
                <Badge variant="outline">Spring Boot</Badge>
                <Badge variant="outline">PrimeFaces</Badge>
                <Badge variant="outline">PostgreSQL</Badge>
                <Badge variant="outline">Flowable</Badge>
              </div>
            </div>

            <div className="relative pl-6 border-l-2 border-border">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-2 top-0"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h5 className="font-semibold text-foreground">Star Assurance (Backend Developer)</h5>
                <span className="text-sm text-muted-foreground">Dec 2023 - Feb 2024</span>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-3">
                <li>Created APIs for user registration and profile updates</li>
                <li>Developed life insurance processes (Quotation and Subscription)</li>
                <li>Integrated retry mechanisms for payment failures</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Java 8</Badge>
                <Badge variant="outline">Spring Boot</Badge>
                <Badge variant="outline">PrimeFaces</Badge>
                <Badge variant="outline">PostgreSQL</Badge>
                <Badge variant="outline">Flowable</Badge>
              </div>
            </div>

            <div className="relative pl-6 border-l-2 border-border">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-2 top-0"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h5 className="font-semibold text-foreground">Dukhan Bank (Backend Developer)</h5>
                <span className="text-sm text-muted-foreground">Sep 2023 - Nov 2023</span>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-3">
                <li>Designed and developed a generic process BPMN for updating expired or newly required client data</li>
                <li>Implemented APIs for client access and forms management based on eligibility</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Java 17</Badge>
                <Badge variant="outline">Spring Boot</Badge>
                <Badge variant="outline">Oracle Database</Badge>
                <Badge variant="outline">Flowable</Badge>
              </div>
            </div>

            <div className="relative pl-6 border-l-2 border-border">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-2 top-0"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h5 className="font-semibold text-foreground">Support Team</h5>
                <span className="text-sm text-muted-foreground">Apr 2023 - Feb 2024</span>
              </div>
              <p className="text-sm font-medium text-foreground mb-2">Data Engineering and Backend Development</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Optimized BPMN Flowable data queries to resolve timeout problems during report generation in ADIB Takka project</li>
                <li>Supported local IT team in Kubernetes monitoring: set up ingestion pipelines and dashboards in Kibana</li>
                <li>Managed data migration and anonymization for BICICI Bank, processing Flowable and application databases, as well as client documents stored in AWS S3</li>
              </ul>
            </div>

            <div className="relative pl-6 border-l-2 border-border">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-2 top-0"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h5 className="font-semibold text-foreground">Albaraka Bank (Backend Developer and Data Engineer)</h5>
                <span className="text-sm text-muted-foreground">Aug 2022 - Oct 2023</span>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-3">
                <li>Working on backoffice analytics management module</li>
                <li>Taking responsibility of backend ETL module by implementing Spark jobs for logs data correlation and processing</li>
                <li>Developed dashboards using Kibana to enable bank management to monitor KPIs and gain insights</li>
                <li>Integrated Keycloak with ELK stack for security management</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Java 8</Badge>
                <Badge variant="outline">Spring Boot</Badge>
                <Badge variant="outline">Apache Spark</Badge>
                <Badge variant="outline">ELK Stack 7.12</Badge>
                <Badge variant="outline">PostgreSQL</Badge>
                <Badge variant="outline">Flowable</Badge>
                <Badge variant="outline">Keycloak</Badge>
              </div>
            </div>
          </div>
        </Card>

        {/* Education */}
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
        </div>
      </div>
    </div>
  );
};

export default Resume;