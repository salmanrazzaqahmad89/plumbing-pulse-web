
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  { name: 'Clogged Drain Repair and Installation', path: '/services/clogged-drain-repair' },
  { name: 'Garbage Disposal Repair Services', path: '/services/garbage-disposal-repair' },
  { name: 'Shower Repair and Installation', path: '/services/shower-repair' },
  { name: 'Tankless Water Heater Repair and Installation', path: '/services/tankless-water-heater' },
  { name: 'Toilet Repair & Installation', path: '/services/toilet-repair' },
  { name: 'Water Softener Repair and Installation', path: '/services/water-softener-repair' },
  { name: 'Water Heater Repair & Installation', path: '/services/water-heater-repair' },
  { name: 'Tubs and Shower Drain Repair and Installation', path: '/services/tubs-shower-drain-repair' },
  { name: 'Faucet Installation and Repair', path: '/services/faucet-repair' },
  { name: 'Emergency Plumbing Services', path: '/services/emergency-plumbing' },
];

const blogPosts = [
  { name: 'How to Maintain Your Garbage Disposal', path: '/blog/maintain-garbage-disposal' },
  { name: 'Signs You Need Clogged Drain Repair', path: '/blog/signs-clogged-drain-repair' },
  { name: 'Benefits of Installing a Tankless Water Heater', path: '/blog/benefits-tankless-water-heater' },
  { name: 'Why Choose Tankless Water Heaters Over Traditional Ones', path: '/blog/tankless-vs-traditional-water-heaters' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when clicking a link
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-smooth px-4 md:px-6 py-4',
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-xl md:text-2xl font-bold text-primary animate-fade-in"
          >
            <span className="text-2xl md:text-3xl">
              PlumbingPulse
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={cn("navbar-link text-sm font-medium", 
                isActive('/') && "active"
              )}
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="dropdown relative">
              <Link 
                to="/services" 
                className={cn("navbar-link flex items-center text-sm font-medium", 
                  isActive('/services') && "active"
                )}
              >
                <span>Services</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <div className="dropdown-menu">
                <div className="py-2 px-1">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className="block px-4 py-2 text-sm hover:bg-primary/5 rounded-md transition-colors"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Blog Dropdown */}
            <div className="dropdown relative">
              <Link 
                to="/blog" 
                className={cn("navbar-link flex items-center text-sm font-medium", 
                  isActive('/blog') && "active"
                )}
              >
                <span>Blog Posts</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <div className="dropdown-menu">
                <div className="py-2 px-1">
                  {blogPosts.map((post, index) => (
                    <Link
                      key={index}
                      to={post.path}
                      className="block px-4 py-2 text-sm hover:bg-primary/5 rounded-md transition-colors"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {post.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Contact Button */}
            <Link 
              to="/contact" 
              className="btn-primary px-4 py-2 text-sm font-medium animate-pulse-light"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-primary focus:outline-none transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-40 bg-white transform transition-all duration-300 ease-smooth pt-16",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="container mx-auto px-4 py-6 h-full overflow-y-auto">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-lg font-medium px-2 py-2 hover:bg-secondary rounded-md"
            >
              Home
            </Link>
            
            {/* Services */}
            <div className="space-y-2">
              <Link 
                to="/services" 
                className="text-lg font-medium px-2 py-2 hover:bg-secondary rounded-md"
              >
                Services
              </Link>
              <div className="pl-4 space-y-2 border-l-2 border-primary/20">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className="block text-sm px-2 py-1.5 hover:bg-secondary rounded-md"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Blog Posts */}
            <div className="space-y-2">
              <Link 
                to="/blog" 
                className="text-lg font-medium px-2 py-2 hover:bg-secondary rounded-md"
              >
                Blog Posts
              </Link>
              <div className="pl-4 space-y-2 border-l-2 border-primary/20">
                {blogPosts.map((post, index) => (
                  <Link
                    key={index}
                    to={post.path}
                    className="block text-sm px-2 py-1.5 hover:bg-secondary rounded-md"
                  >
                    {post.name}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Contact Button */}
            <Link 
              to="/contact" 
              className="btn-primary px-4 py-2 mt-4 text-center font-medium"
            >
              Contact Us
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
