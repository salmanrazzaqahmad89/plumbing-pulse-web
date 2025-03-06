import React from 'react';
import { Link } from 'react-router-dom';
import { Droplet, WrenchIcon, ShowerHead, Plug, RotateCcw, Flame, Thermometer, Waves } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/ui/HeroSection';
import ServiceCard from '@/components/ui/ServiceCard';
import CallToAction from '@/components/ui/CallToAction';

const Services = () => {
  // Service data
  const services = [
    {
      id: 'clogged-drain-repair',
      title: 'Clogged Drain Repair',
      description: 'Fast, effective solutions for clogged drains using advanced techniques to eliminate blockages and restore proper flow.',
      icon: <Droplet className="h-10 w-10" />
    },
    {
      id: 'garbage-disposal-repair',
      title: 'Garbage Disposal Repair',
      description: 'Expert repair and maintenance of garbage disposal systems to keep your kitchen functioning properly.',
      icon: <RotateCcw className="h-10 w-10" />
    },
    {
      id: 'water-heater-installation',
      title: 'Water Heater Installation',
      description: 'Professional installation of traditional and tankless water heaters for reliable hot water in your home.',
      icon: <Flame className="h-10 w-10" />
    },
    {
      id: 'leak-detection-repair',
      title: 'Leak Detection & Repair',
      description: 'Advanced techniques to find and fix hidden leaks before they cause extensive damage to your home.',
      icon: <Droplet className="h-10 w-10" />
    },
    {
      id: 'bathroom-remodeling',
      title: 'Bathroom Remodeling',
      description: 'Transform your bathroom with modern fixtures, efficient layouts, and quality craftsmanship.',
      icon: <ShowerHead className="h-10 w-10" />
    },
    {
      id: 'plumbing-installation',
      title: 'Plumbing Installation',
      description: 'Expert installation of all plumbing fixtures including sinks, toilets, showers, and specialized systems.',
      icon: <WrenchIcon className="h-10 w-10" />
    },
    {
      id: 'water-treatment',
      title: 'Water Treatment Solutions',
      description: 'Improve your water quality with filtration, softening, and purification systems tailored to your needs.',
      icon: <Waves className="h-10 w-10" />
    },
    {
      id: 'electrical-services',
      title: 'Electrical Services',
      description: 'Comprehensive electrical repairs, installations, and upgrades performed by licensed professionals.',
      icon: <Plug className="h-10 w-10" />
    },
    {
      id: 'hvac-services',
      title: 'HVAC Services',
      description: 'Complete heating, ventilation, and air conditioning solutions for optimal indoor comfort year-round.',
      icon: <Thermometer className="h-10 w-10" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <HeroSection 
        title="Our Professional Services" 
        subtitle="Comprehensive plumbing, electrical, and HVAC solutions delivered with expertise and reliability for your home or business."
        backgroundImage="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
      />
      
      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Expert Solutions for Every Need</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive range of services is designed to address all your plumbing, electrical, and HVAC needs with professional expertise and customer-focused care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className="animate-on-scroll" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  link={`/services/${service.id}`}
                  className="bg-white border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Service Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We follow a streamlined, transparent process to ensure you receive efficient, high-quality service every time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Contact & Consultation',
                description: 'Reach out via phone or online form. We'll discuss your needs and schedule a convenient appointment time.'
              },
              {
                step: '02',
                title: 'Diagnosis & Quote',
                description: 'Our technician will thoroughly assess the issue and provide a clear, upfront quote before any work begins.'
              },
              {
                step: '03',
                title: 'Professional Service',
                description: 'Our expert technicians complete the work efficiently using quality parts and industry best practices.'
              },
              {
                step: '04',
                title: 'Satisfaction Follow-up',
                description: 'We ensure you're completely satisfied with our work and provide guidance for future maintenance.'
              }
            ].map((process, index) => (
              <div 
                key={index} 
                className="text-center p-6 animate-on-scroll" 
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-xl font-bold">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about our services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The technician was professional, knowledgeable, and fixed our clogged drain quickly. Fair pricing and excellent service!",
                author: "Sarah Johnson",
                location: "Austin, TX"
              },
              {
                quote: "I've used their services for both plumbing and electrical work. Always reliable, on time, and the work is top-notch. Highly recommend!",
                author: "Michael Rodriguez",
                location: "San Antonio, TX"
              },
              {
                quote: "Their water heater installation was flawless. The technician explained everything, cleaned up afterward, and the new system works perfectly.",
                author: "Jennifer Williams",
                location: "Houston, TX"
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg border border-border shadow-sm animate-on-scroll" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 text-primary">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.9999 2C6.47691 2 1.99991 6.477 1.99991 12C1.99991 17.523 6.47691 22 11.9999 22C17.5229 22 21.9999 17.523 21.9999 12C21.9999 6.477 17.5229 2 11.9999 2Z" fill="currentColor" fillOpacity="0.2"/>
                    <path d="M8.79986 11.9C8.39986 11.9 8.09986 11.6 8.09986 11.2C8.09986 10.8 8.39986 10.5 8.79986 10.5H8.89986C9.29986 10.5 9.59986 10.8 9.59986 11.2C9.59986 11.6 9.29986 11.9 8.89986 11.9H8.79986ZM15.0999 11.9C14.6999 11.9 14.3999 11.6 14.3999 11.2C14.3999 10.8 14.6999 10.5 15.0999 10.5H15.1999C15.5999 10.5 15.8999 10.8 15.8999 11.2C15.8999 11.6 15.5999 11.9 15.1999 11.9H15.0999ZM12.0999 17.9C9.59986 17.9 7.49986 15.8 7.49986 13.3C7.49986 12.9 7.79986 12.6 8.19986 12.6C8.59986 12.6 8.89986 12.9 8.89986 13.3C8.89986 15 10.2999 16.4 11.9999 16.4C13.6999 16.4 15.0999 15 15.0999 13.3C15.0999 12.9 15.3999 12.6 15.7999 12.6C16.1999 12.6 16.4999 12.9 16.4999 13.3C16.4999 15.8 14.4999 17.9 11.9999 17.9H12.0999Z" fill="currentColor"/>
                  </svg>
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our services, pricing, and processes.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  question: "Do you offer emergency services?",
                  answer: "Yes, we provide 24/7 emergency services for urgent plumbing, electrical, and HVAC issues. Our technicians are available even on weekends and holidays to address critical problems that can't wait."
                },
                {
                  question: "How do you determine pricing for your services?",
                  answer: "We provide upfront, transparent pricing based on the specific requirements of each job. After diagnosing the issue, we'll provide a clear quote before beginning any work. We don't believe in hidden fees or surprise charges."
                },
                {
                  question: "Are your technicians licensed and insured?",
                  answer: "Absolutely. All our technicians are fully licensed, insured, and undergo rigorous training and background checks. We maintain all required certifications and stay updated on the latest industry standards and technologies."
                },
                {
                  question: "Do you offer warranties on your work?",
                  answer: "Yes, we stand behind our work with solid warranties. We offer a 1-year warranty on labor for most services, and many parts and fixtures come with manufacturer warranties that we honor and help process if needed."
                },
                {
                  question: "How quickly can you respond to service requests?",
                  answer: "For emergency situations, we typically respond within 1-2 hours. For standard service requests, we can usually schedule appointments within 24-48 hours, often with same-day service available depending on our current schedule and your location."
                }
              ].map((faq, index) => (
                <div 
                  key={index} 
                  className="border border-border rounded-lg overflow-hidden animate-on-scroll" 
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none bg-white p-4">
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
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction 
        title="Ready to Get Started?" 
        subtitle="Contact our team today for expert service and free estimates on all your home service needs."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="View Service Areas"
        secondaryButtonLink="/service-areas"
      />

      <Footer />
    </div>
  );
};

export default Services;
