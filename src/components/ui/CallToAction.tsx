
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

interface CallToActionProps {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  showCallButton?: boolean;
}

const CallToAction = ({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink,
  showCallButton = true
}: CallToActionProps) => {
  return (
    <section className="cta-section py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in">
            {title}
          </h2>
          
          <p className="text-white/90 text-lg mb-8 animate-fade-in" style={{ animationDelay: '100ms' }}>
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <Link
              to={primaryButtonLink}
              className="btn-white px-6 py-3 font-medium text-lg shadow-lg hover:shadow-xl transition-all"
            >
              {primaryButtonText}
            </Link>
            
            {showCallButton && (
              <a
                href="tel:+15551234567"
                className="inline-flex items-center justify-center bg-white/20 text-white hover:bg-white/30 px-6 py-3 font-medium text-lg rounded-md shadow-lg hover:shadow-xl transition-all"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
