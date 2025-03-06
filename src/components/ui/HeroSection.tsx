
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  showCallButton?: boolean;
}

const HeroSection = ({
  title,
  subtitle,
  backgroundImage = 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  showCallButton = true
}: HeroSectionProps) => {
  return (
    <div 
      className="hero-section relative min-h-[85vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 67, 156, 0.75), rgba(0, 122, 204, 0.5)), url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-slide-down"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
          >
            {title}
          </h1>
          
          <p 
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up"
            style={{ animationDelay: '200ms', textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}
          >
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-scale-in" style={{ animationDelay: '400ms' }}>
            <Link
              to="/services"
              className="btn-white px-6 py-3 font-medium text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Explore Services
            </Link>
            
            {showCallButton && (
              <a
                href="tel:+15551234567"
                className="btn-primary inline-flex items-center justify-center px-6 py-3 font-medium text-lg shadow-lg hover:shadow-xl transition-all"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default HeroSection;
