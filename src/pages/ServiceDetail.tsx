
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Droplet, WrenchIcon, ShowerHead, Plug, RotateCcw, Flame, Thermometer, Waves, PhoneCall } from 'lucide-react';
import HeroSection from '@/components/ui/HeroSection';
import CallToAction from '@/components/ui/CallToAction';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

interface ServiceInfo {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  fullDescription: string[];
  benefits: { title: string; description: string }[];
  imageUrl: string;
  faqs: { question: string; answer: string }[];
}

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Initialize scroll animation observation
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  // Service data mapping
  const servicesData: Record<string, ServiceInfo> = {
    'clogged-drain-repair': {
      id: 'clogged-drain-repair',
      title: 'Clogged Drain Repair',
      description: 'Fast, effective solutions for clogged drains using advanced techniques to eliminate blockages and restore proper flow.',
      icon: <Droplet className="h-10 w-10" />,
      imageUrl: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      fullDescription: [
        'Our clogged drain repair service addresses all types of drain blockages in sinks, showers, tubs, and toilet drains quickly and effectively.',
        'We use state-of-the-art diagnostic tools including video camera inspection to identify the exact location and cause of the clog, allowing for targeted solutions.',
        'Our technicians employ a variety of techniques including hydro jetting, drain snaking, and enzyme treatments to clear blockages completely without damaging your pipes.',
        'For recurring clogs, we can identify and address underlying issues such as tree root intrusion, pipe bellying, or improper pipe slope that may be causing repeated problems.'
      ],
      benefits: [
        {
          title: 'Advanced Techniques',
          description: 'We use the latest drain clearing technology that removes even the toughest blockages without damaging your pipes.'
        },
        {
          title: 'Complete Solutions',
          description: 'We don't just clear the immediate clog – we identify and address the root cause to prevent future issues.'
        },
        {
          title: 'Safe for All Plumbing',
          description: 'Our methods are safe for all types of pipes, including older homes with galvanized or cast iron pipes.'
        },
        {
          title: '24/7 Emergency Service',
          description: 'Drain clogs don't wait for business hours, and neither do we. Emergency service available day or night.'
        }
      ],
      faqs: [
        {
          question: 'How quickly can you respond to a clogged drain emergency?',
          answer: 'For emergency situations, we can typically dispatch a technician within 60-90 minutes in most service areas.'
        },
        {
          question: 'Will you need to cut into my walls or floors to fix the clog?',
          answer: 'In most cases, no. Our advanced techniques allow us to clear most clogs without invasive measures. In rare cases of severe pipe damage, some access may be required, but we'll discuss this thoroughly before proceeding.'
        },
        {
          question: 'How can I prevent future clogs in my drains?',
          answer: 'We recommend regular maintenance including being careful about what goes down drains (no grease, coffee grounds, or fibrous foods in kitchen drains; no hair or soap scum in bathroom drains), using drain screens, and scheduling annual drain cleaning for preventive care.'
        }
      ]
    },
    'garbage-disposal-repair': {
      id: 'garbage-disposal-repair',
      title: 'Garbage Disposal Repair',
      description: 'Expert repair and maintenance of garbage disposal systems to keep your kitchen functioning properly.',
      icon: <RotateCcw className="h-10 w-10" />,
      imageUrl: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      fullDescription: [
        'Our garbage disposal repair service covers all major brands and models, addressing common issues like jams, leaks, strange noises, and complete failures.',
        'Our expert technicians can quickly diagnose whether your unit requires a simple repair or a complete replacement, providing honest recommendations based on cost-effectiveness.',
        'We carry a wide range of replacement parts and new disposal units on our service vehicles, allowing for same-day repairs in most cases.',
        'Beyond repairs, we provide maintenance services and education on proper use to maximize the lifespan of your garbage disposal unit.'
      ],
      benefits: [
        {
          title: 'Same-Day Service',
          description: 'Most garbage disposal repairs can be completed on the same day, getting your kitchen back to normal quickly.'
        },
        {
          title: 'All Major Brands',
          description: 'Our technicians are trained to work on all major garbage disposal brands including InSinkErator, Waste King, Moen, and more.'
        },
        {
          title: 'Quiet Operation',
          description: 'If noise is an issue, we can recommend and install quieter models that won't disrupt your household.'
        },
        {
          title: 'Eco-Friendly Options',
          description: 'We offer energy-efficient models that use less electricity and water while providing excellent performance.'
        }
      ],
      faqs: [
        {
          question: 'Why is my garbage disposal humming but not working?',
          answer: 'A humming disposal typically indicates that the motor is receiving power but the grinding disc is stuck. This is often caused by a jammed object. We can safely remove the obstruction without damaging your unit.'
        },
        {
          question: 'How long should a garbage disposal last?',
          answer: 'With proper use and maintenance, a quality garbage disposal should last 8-15 years. However, frequency of use, what you put down it, and water quality can all affect lifespan.'
        },
        {
          question: 'Can all food waste go down a garbage disposal?',
          answer: 'No. While disposals can handle many food scraps, you should avoid putting fibrous foods (celery, corn husks), hard items (bones, fruit pits), expandable foods (pasta, rice), and FOG (fats, oils, grease) down your disposal as these can cause damage or clogs.'
        }
      ]
    },
    // Add additional service data as needed
  };

  const service = servicesData[serviceId || ''] || {
    id: '',
    title: 'Service Not Found',
    description: 'The requested service information is not available.',
    icon: <Droplet className="h-10 w-10" />,
    imageUrl: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1',
    fullDescription: ['Please navigate back to our services page to find available services.'],
    benefits: [],
    faqs: []
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <HeroSection 
        title={service.title} 
        subtitle={service.description}
        backgroundImage={service.imageUrl}
      />

      {/* Service Details Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose max-w-none">
                <h2 className="section-title mb-8">Service Overview</h2>
                {service.fullDescription.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground mb-4 animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
                    {paragraph}
                  </p>
                ))}
              </div>
              
              {/* Benefits Section */}
              <div className="mt-12">
                <h3 className="text-2xl font-semibold mb-6">Benefits of Our {service.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-border animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
                      <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* FAQs Section */}
              {service.faqs.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    {service.faqs.map((faq, index) => (
                      <div key={index} className="border border-border rounded-lg overflow-hidden animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
                        <details className="group">
                          <summary className="flex justify-between items-center font-medium cursor-pointer list-none bg-secondary/20 p-4">
                            <span>{faq.question}</span>
                            <span className="transition group-open:rotate-180">
                              <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                <path d="M6 9l6 6 6-6"></path>
                              </svg>
                            </span>
                          </summary>
                          <div className="p-4 text-muted-foreground">
                            {faq.answer}
                          </div>
                        </details>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-20">
                <div className="bg-secondary/20 p-6 rounded-lg animate-on-scroll">
                  <h3 className="text-xl font-semibold mb-4">Request This Service</h3>
                  <p className="text-muted-foreground mb-6">Need our professional {service.title.toLowerCase()}? Contact us now for fast service and free estimates.</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <PhoneCall className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Call us now</p>
                        <a href="tel:+15551234567" className="font-semibold hover:text-primary transition-colors">(555) 123-4567</a>
                      </div>
                    </div>
                    
                    <Link 
                      to="/contact" 
                      className="btn-primary block text-center py-3 font-medium"
                    >
                      Request Service Online
                    </Link>
                  </div>
                </div>
                
                <div className="mt-6 bg-white p-6 rounded-lg border border-border animate-on-scroll" style={{ animationDelay: '100ms' }}>
                  <h3 className="text-xl font-semibold mb-4">Other Services</h3>
                  <ul className="space-y-3">
                    {Object.values(servicesData)
                      .filter(s => s.id !== service.id)
                      .slice(0, 5)
                      .map((otherService, index) => (
                        <li key={index}>
                          <Link 
                            to={`/services/${otherService.id}`} 
                            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
                          >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                            {otherService.title}
                          </Link>
                        </li>
                      ))}
                  </ul>
                  <div className="mt-4">
                    <Link 
                      to="/services" 
                      className="text-primary font-medium inline-flex items-center"
                    >
                      View All Services
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction 
        title={`Ready for Professional ${service.title}?`} 
        subtitle="Our expert team is ready to solve your plumbing issues with prompt, reliable service."
        primaryButtonText="Book a Service"
        primaryButtonLink="/contact"
      />

      <Footer />
    </div>
  );
};

export default ServiceDetail;
