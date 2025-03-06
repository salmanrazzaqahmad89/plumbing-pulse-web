import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Droplet, WrenchIcon, ShowerHead, Plug, RotateCcw, Flame, Thermometer, Waves, PhoneCall } from 'lucide-react';
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

  const faqs = [
    {
      question: "How quickly can you respond to emergency plumbing issues?",
      answer: "We offer 24/7 emergency plumbing services with a target response time of 60 minutes or less in most service areas."
    },
    {
      question: "Are your plumbers licensed and insured?",
      answer: "Yes, all our plumbers are fully licensed, bonded, and insured. We maintain strict professional standards and ongoing training."
    },
    {
      question: "Do you offer warranties on your plumbing services?",
      answer: "Absolutely. We provide a 100% satisfaction guarantee and up to a 2-year warranty on parts and labor for most services."
    },
    {
      question: "How do I know if I need to replace my water heater?",
      answer: "Signs include age (over 10 years), rusty water, unusual noises, leaks around the base, or inconsistent heating. We offer free water heater inspections to help you decide."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <HeroSection 
        title="Quality Plumbing Services for Your Home" 
        subtitle="Professional plumbers delivering exceptional service with a commitment to quality and reliability. Available 24/7 for all your plumbing needs."
        backgroundImage="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />

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

      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="section-title-center">What Our Customers Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers about their experiences with our services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md animate-on-scroll">
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4 flex-grow">"The plumber arrived within an hour of my call and fixed our clogged drain quickly. Professional, clean, and reasonably priced. Highly recommend!"</p>
                <div className="mt-auto">
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">Homeowner</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md animate-on-scroll" style={{ animationDelay: '100ms' }}>
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4 flex-grow">"We had our tankless water heater installed by PlumbingPulse and couldn't be happier. The team explained everything, worked efficiently, and left our home spotless."</p>
                <div className="mt-auto">
                  <p className="font-semibold">Michael Rodriguez</p>
                  <p className="text-sm text-muted-foreground">Property Manager</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md animate-on-scroll" style={{ animationDelay: '200ms' }}>
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4 flex-grow">"When our water heater failed on a Sunday evening, I thought we'd be without hot water for days. PlumbingPulse responded within 30 minutes and had us up and running that night!"</p>
                <div className="mt-auto">
                  <p className="font-semibold">Emily Chen</p>
                  <p className="text-sm text-muted-foreground">Homeowner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="section-title-center">Our Simple Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We make solving your plumbing problems straightforward and stress-free with our efficient service process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center animate-on-scroll">
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <PhoneCall className="h-8 w-8 text-primary" />
              </div>
              <div className="relative mb-6 after:content-[''] after:absolute after:hidden md:after:block after:w-full after:h-0.5 after:bg-primary/30 after:top-10 after:-right-1/2">
                <h3 className="text-xl font-semibold mb-2">1. Contact Us</h3>
              </div>
              <p className="text-muted-foreground">Call our 24/7 hotline or book online to schedule your service appointment.</p>
            </div>
            
            <div className="text-center animate-on-scroll" style={{ animationDelay: '100ms' }}>
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <WrenchIcon className="h-8 w-8 text-primary" />
              </div>
              <div className="relative mb-6 after:content-[''] after:absolute after:hidden md:after:block after:w-full after:h-0.5 after:bg-primary/30 after:top-10 after:-right-1/2">
                <h3 className="text-xl font-semibold mb-2">2. Diagnosis</h3>
              </div>
              <p className="text-muted-foreground">Our experts will thoroughly assess your plumbing issue and provide upfront pricing.</p>
            </div>
            
            <div className="text-center animate-on-scroll" style={{ animationDelay: '200ms' }}>
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Droplet className="h-8 w-8 text-primary" />
              </div>
              <div className="relative mb-6 after:content-[''] after:absolute after:hidden md:after:block after:w-full after:h-0.5 after:bg-primary/30 after:top-10 after:-right-1/2">
                <h3 className="text-xl font-semibold mb-2">3. Solution</h3>
              </div>
              <p className="text-muted-foreground">We complete the repair or installation with quality parts and expert craftsmanship.</p>
            </div>
            
            <div className="text-center animate-on-scroll" style={{ animationDelay: '300ms' }}>
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Thermometer className="h-8 w-8 text-primary" />
              </div>
              <div className="relative mb-6">
                <h3 className="text-xl font-semibold mb-2">4. Satisfaction</h3>
              </div>
              <p className="text-muted-foreground">Enjoy your properly functioning plumbing system backed by our service guarantee.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="section-title-center">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get answers to common questions about our plumbing services and processes.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-6 animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
                      <span className="text-lg font-semibold">{faq.question}</span>
                      <span className="transition group-open:rotate-180">
                        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <div className="text-muted-foreground px-4 pb-4">
                      {faq.answer}
                    </div>
                  </details>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10 animate-on-scroll">
            <p className="text-muted-foreground mb-4">Still have questions about our services?</p>
            <Link 
              to="/contact" 
              className="btn-primary inline-block px-6 py-3 font-medium"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

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
