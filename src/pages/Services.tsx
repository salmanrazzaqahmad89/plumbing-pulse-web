
import React, { useEffect } from 'react';
import { Droplet, WrenchIcon, ShowerHead, Plug, RotateCcw, Flame, Thermometer, Waves, Faucet, PhoneCall } from 'lucide-react';
import HeroSection from '@/components/ui/HeroSection';
import ServiceCard from '@/components/ui/ServiceCard';
import CallToAction from '@/components/ui/CallToAction';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: 'Clogged Drain Repair and Installation',
      description: 'Fast, effective solutions for clogged drains using advanced techniques to eliminate blockages and restore proper flow in sinks, tubs, and floor drains.',
      icon: <Droplet className="h-10 w-10" />,
      link: '/services/clogged-drain-repair'
    },
    {
      title: 'Garbage Disposal Repair Services',
      description: 'Expert repair and maintenance of garbage disposal systems to keep your kitchen functioning properly and prevent food waste backups.',
      icon: <RotateCcw className="h-10 w-10" />,
      link: '/services/garbage-disposal-repair'
    },
    {
      title: 'Shower Repair and Installation',
      description: 'Complete shower repair and installation services to ensure optimal water flow, temperature control, and leak prevention in your bathroom.',
      icon: <ShowerHead className="h-10 w-10" />,
      link: '/services/shower-repair'
    },
    {
      title: 'Tankless Water Heater Repair and Installation',
      description: 'Energy-efficient tankless water heater installation and repair for continuous hot water on demand without the space requirements of traditional units.',
      icon: <Flame className="h-10 w-10" />,
      link: '/services/tankless-water-heater'
    },
    {
      title: 'Toilet Repair & Installation',
      description: 'Professional toilet repair and installation services to address leaks, clogs, and inefficient flushing, plus upgrades to water-saving models.',
      icon: <WrenchIcon className="h-10 w-10" />,
      link: '/services/toilet-repair'
    },
    {
      title: 'Water Softener Repair and Installation',
      description: 'Expert installation and repair of water softener systems to reduce hard water issues and extend the life of your appliances and plumbing fixtures.',
      icon: <Thermometer className="h-10 w-10" />,
      link: '/services/water-softener-repair'
    },
    {
      title: 'Water Heater Repair & Installation',
      description: 'Comprehensive water heater services including repairs, maintenance, and installation of traditional tank and modern tankless systems.',
      icon: <Flame className="h-10 w-10" />,
      link: '/services/water-heater-repair'
    },
    {
      title: 'Tubs and Shower Drain Repair and Installation',
      description: 'Specialized repair and installation services for bathroom drains, addressing slow drainage, leaks, and proper fixture alignment.',
      icon: <Waves className="h-10 w-10" />,
      link: '/services/tubs-shower-drain-repair'
    },
    {
      title: 'Faucet Installation and Repair',
      description: 'Expert faucet services including leak repair, cartridge replacement, and installation of new, water-efficient models for kitchen and bathroom.',
      icon: <Faucet className="h-10 w-10" />,
      link: '/services/faucet-repair'
    },
    {
      title: 'Emergency Plumbing Services',
      description: '24/7 emergency plumbing response for urgent issues like burst pipes, major leaks, sewer backups, and other critical plumbing failures.',
      icon: <PhoneCall className="h-10 w-10" />,
      link: '/services/emergency-plumbing'
    },
  ];

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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection 
        title="Our Professional Plumbing Services" 
        subtitle="Comprehensive plumbing solutions delivered by certified professionals with a focus on quality and customer satisfaction."
        backgroundImage="https://images.unsplash.com/photo-1631646109206-4c986f548012?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
      />

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="section-title-center">Complete Plumbing Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From small repairs to complete system installations, our expert team provides comprehensive plumbing services for residential and commercial properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="section-title-center">Our Service Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We follow a structured approach to ensure efficient service delivery and complete customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center relative animate-on-scroll">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white w-10 h-10 flex items-center justify-center rounded-full text-xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-4 mt-4">Diagnosis</h3>
              <p className="text-muted-foreground">Our technicians carefully assess the issue, identifying the root cause before proposing solutions.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center relative animate-on-scroll" style={{ animationDelay: '200ms' }}>
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white w-10 h-10 flex items-center justify-center rounded-full text-xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-4 mt-4">Transparent Quote</h3>
              <p className="text-muted-foreground">We provide clear, upfront pricing with no hidden fees, ensuring you understand the full scope of work.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center relative animate-on-scroll" style={{ animationDelay: '400ms' }}>
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white w-10 h-10 flex items-center justify-center rounded-full text-xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-4 mt-4">Expert Execution</h3>
              <p className="text-muted-foreground">Our skilled technicians complete the work efficiently using quality materials and proven techniques.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction 
        title="Ready to Solve Your Plumbing Issues?" 
        subtitle="Our team of professional plumbers is available 24/7 to address your plumbing needs with prompt, reliable service."
        primaryButtonText="Schedule Service"
        primaryButtonLink="/contact"
      />

      <Footer />
    </div>
  );
};

export default Services;
