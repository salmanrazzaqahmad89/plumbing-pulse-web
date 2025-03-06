
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  className?: string;
}

const ServiceCard = ({ title, description, icon, link, className }: ServiceCardProps) => {
  return (
    <div className={cn("service-card relative p-6 h-full flex flex-col", className)}>
      <div className="flex flex-col h-full">
        <div className="mb-4 text-primary">
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold mb-3 text-foreground">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-4 flex-grow">
          {description}
        </p>
        
        <Link 
          to={link} 
          className="inline-flex items-center text-primary font-medium mt-auto group"
        >
          Learn More 
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
