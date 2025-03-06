
import React, { useEffect } from 'react';
import HeroSection from '@/components/ui/HeroSection';
import BlogCard from '@/components/ui/BlogCard';
import CallToAction from '@/components/ui/CallToAction';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      title: 'How to Maintain Your Garbage Disposal',
      excerpt: 'Learn essential maintenance tips to extend the life of your garbage disposal and avoid common issues that lead to costly repairs or replacements.',
      date: 'June 15, 2023',
      image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      slug: 'maintain-garbage-disposal'
    },
    {
      title: 'Signs You Need Clogged Drain Repair',
      excerpt: 'Recognize the early warning signs of a clogged drain before it becomes a major plumbing emergency that could damage your home and cost thousands.',
      date: 'July 22, 2023',
      image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      slug: 'signs-clogged-drain-repair'
    },
    {
      title: 'Benefits of Installing a Tankless Water Heater',
      excerpt: 'Discover how a tankless water heater can provide endless hot water, save space, reduce energy costs, and last longer than traditional models.',
      date: 'August 10, 2023',
      image: 'https://images.unsplash.com/photo-1585751119414-ef2636f8aede?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80',
      slug: 'benefits-tankless-water-heater'
    },
    {
      title: 'Why Choose Tankless Water Heaters Over Traditional Ones',
      excerpt: 'A comprehensive comparison of tankless vs. traditional water heaters to help you make an informed decision for your home\'s hot water needs.',
      date: 'September 5, 2023',
      image: 'https://images.unsplash.com/photo-1531489956451-20640feeb699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80',
      slug: 'tankless-vs-traditional-water-heaters'
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
        title="Plumbing Tips & Insights" 
        subtitle="Stay informed with practical plumbing advice, maintenance tips, and professional insights to keep your systems running smoothly."
        backgroundImage="https://images.unsplash.com/photo-1454988501794-2992f706932e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80"
        showCallButton={false}
      />

      {/* Blog Posts Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="section-title-center">Our Latest Articles</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Expert advice, practical tips, and industry insights to help you understand and maintain your plumbing systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
                <BlogCard {...post} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground mb-6">
              Stay up-to-date with the latest plumbing tips, seasonal maintenance advice, and exclusive offers.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-3 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              />
              <button 
                type="submit"
                className="btn-primary px-6 py-3 font-medium"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-sm text-muted-foreground mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction 
        title="Need Professional Plumbing Help?" 
        subtitle="Our team of expert plumbers is ready to assist with all your plumbing needs."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
      />

      <Footer />
    </div>
  );
};

export default Blog;
