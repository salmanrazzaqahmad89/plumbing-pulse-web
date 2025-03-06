
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
  className?: string;
}

const BlogCard = ({ title, excerpt, date, image, slug, className }: BlogCardProps) => {
  return (
    <div className={cn("blog-card flex flex-col h-full group", className)}>
      <div className="overflow-hidden relative h-52">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-sm text-muted-foreground mb-3">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{date}</span>
        </div>
        
        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
          <Link to={`/blog/${slug}`}>{title}</Link>
        </h3>
        
        <p className="text-muted-foreground mb-4 flex-grow">
          {excerpt}
        </p>
        
        <Link 
          to={`/blog/${slug}`} 
          className="inline-flex items-center text-primary font-medium mt-auto group/link"
        >
          Read More 
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
