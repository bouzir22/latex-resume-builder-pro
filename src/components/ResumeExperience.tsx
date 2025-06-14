import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ResumeExperience = () => {
  return (
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
            <li>Integrated with Active Directory</li>
            <li>Built async report export module</li>
            <li>Developed APIs for task history and complex customer search</li>
            <li>Created advanced statistical queries</li>
            <li>Implemented agent notifications for customer file revisions</li>
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
  );
};

export default ResumeExperience;