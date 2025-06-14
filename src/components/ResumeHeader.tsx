import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Github, Linkedin } from "lucide-react";

const ResumeHeader = () => {
  return (
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
  );
};

export default ResumeHeader;