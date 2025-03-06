
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Droplet, WrenchIcon, ShowerHead, Plug, RotateCcw, Flame, Thermometer, Waves, Tap, PhoneCall } from 'lucide-react';
import HeroSection from '@/components/ui/HeroSection';
import ServiceCard from '@/components/ui/ServiceCard';
import BlogCard from '@/components/ui/BlogCard';
import CallToAction from '@/components/ui/CallToAction';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: 'Clogged Drain Repair',
      description: 'Fast, effective solutions for clogged drains using advanced techniques to eliminate blockages and restore proper flow.',
      icon: <Droplet className="h-10 w-10" />,
      link: '/services/clogged-drain-repair'
    },
    {
      title: 'Garbage Disposal Repair',
      description: 'Expert repair and maintenance of garbage disposal systems to keep your kitchen functioning properly.',
      icon: <RotateCcw className="h-10 w-10" />,
      link: '/services/garbage-disposal-repair'
    },
    {
      title: 'Shower Repair & Installation',
      description: 'Complete shower repair and installation services to ensure optimal water flow and temperature control.',
      icon: <ShowerHead className="h-10 w-10" />,
      link: '/services/shower-repair'
    },
    {
      title: 'Tankless Water Heater Services',
      description: 'Energy-efficient tankless water heater installation and repair for continuous hot water on demand.',
      icon: <Flame className="h-10 w-10" />,
      link: '/services/tankless-water-heater'
    }
  ];

  const blogPosts = [
    {
      title: 'How to Maintain Your Garbage Disposal',
      excerpt: 'Learn essential maintenance tips to extend the life of your garbage disposal and avoid common issues.',
      date: 'June 15, 2023',
      image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      slug: 'maintain-garbage-disposal'
    },
    {
      title: 'Signs You Need Clogged Drain Repair',
      excerpt: 'Recognize the early warning signs of a clogged drain before it becomes a major plumbing emergency.',
      date: 'July 22, 2023',
      image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      slug: 'signs-clogged-drain-repair'
    }
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
        title="Quality Plumbing Services for Your Home" 
        subtitle="Professional plumbers delivering exceptional service with a commitment to quality and reliability. Available 24/7 for all your plumbing needs."
        backgroundImage="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />

      {/* Services Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="section-title-center">Our Premium Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From urgent repairs to complete installations, our expert team provides comprehensive plumbing solutions for your home or business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-on-scroll">
            <Link 
              to="/services" 
              className="btn-primary inline-block px-6 py-3 font-medium"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1580811459922-fa5f2af2248f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                  alt="Professional plumbing service" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="animate-on-scroll" style={{ animationDelay: '200ms' }}>
              <h2 className="section-title">Why Choose PlumbingPulse</h2>
              <p className="text-muted-foreground mb-8">
                With years of experience and a commitment to excellence, we deliver reliable plumbing solutions that stand the test of time.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <WrenchIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Expert Technicians</h3>
                    <p className="text-muted-foreground">Licensed, insured professionals with years of experience.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <PhoneCall className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">24/7 Emergency Service</h3>
                    <p className="text-muted-foreground">Available around the clock for urgent plumbing issues.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Plug className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Quality Guaranteed</h3>
                    <p className="text-muted-foreground">Premium materials and workmanship with satisfaction guarantee.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="section-title-center">Latest from Our Blog</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay informed with practical plumbing tips, maintenance advice, and industry insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
                <BlogCard {...post} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-on-scroll">
            <Link 
              to="/blog" 
              className="btn-primary inline-block px-6 py-3 font-medium"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction 
        title="Need Professional Plumbing Services?" 
        subtitle="Our team of expert plumbers is ready to help you with any plumbing issue, big or small."
        primaryButtonText="Book a Service"
        primaryButtonLink="/contact"
      />

      <Footer />
    </div>
  );
};

export default Index;
