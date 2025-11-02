import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) => {
  return (
    <div 
      className="group relative bg-card border border-border rounded-xl p-6 transition-all duration-500 hover:bg-card-hover hover:shadow-card hover:-translate-y-2 hover:border-border-bright animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-4 group-hover:shadow-glow transition-all duration-300">
          <Icon className="w-6 h-6 text-primary-foreground" />
        </div>
        
        <h3 className="font-outfit font-semibold text-lg mb-3 text-foreground group-hover:text-cyan transition-colors duration-300">
          {title}
        </h3>
        
        <p className="font-outfit text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* Decorative cube corner */}
      <div className="absolute top-4 right-4 w-3 h-3 bg-cyan opacity-0 group-hover:opacity-60 rounded-sm transition-all duration-300 transform group-hover:rotate-45" />
    </div>
  );
};

export default ServiceCard;