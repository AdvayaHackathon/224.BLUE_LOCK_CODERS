
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <nav className="w-full py-4 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-wellness-500 to-sleep-500 w-8 h-8 rounded-full"></div>
            <span className="font-bold text-xl">ThriveWell</span>
          </Link>
          
          {isMobile ? (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          ) : (
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-wellness-600 transition-colors">Home</Link>
              <Link to="/#features" className="text-gray-700 hover:text-wellness-600 transition-colors">Features</Link>
              <Link to="/#testimonials" className="text-gray-700 hover:text-wellness-600 transition-colors">Testimonials</Link>
              <Link to="/#pricing" className="text-gray-700 hover:text-wellness-600 transition-colors">Pricing</Link>
              <div className="flex items-center space-x-2">
                <Link to="/login">
                  <Button variant="outline">Log In</Button>
                </Link>
                <Link to="/register">
                  <Button>Get Started</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
        
        {/* Mobile Menu */}
        {isMobile && mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg animate-fade-in">
            <div className="flex flex-col p-4 space-y-4">
              <Link to="/" className="text-gray-700 hover:text-wellness-600 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link to="/#features" className="text-gray-700 hover:text-wellness-600 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Features</Link>
              <Link to="/#testimonials" className="text-gray-700 hover:text-wellness-600 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Testimonials</Link>
              <Link to="/#pricing" className="text-gray-700 hover:text-wellness-600 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
              <div className="flex flex-col space-y-2 pt-2">
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full">Log In</Button>
                </Link>
                <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full">Get Started</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
