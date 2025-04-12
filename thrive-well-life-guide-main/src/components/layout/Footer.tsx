
import { Link } from 'react-router-dom';
import { Heart, Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-wellness-500 to-sleep-500 w-8 h-8 rounded-full"></div>
              <span className="font-bold text-xl">ThriveWell</span>
            </Link>
            <p className="text-gray-600 mb-4">
              Your personalized journey to better health and wellness.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-wellness-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-wellness-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-wellness-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-wellness-600 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4">Features</h5>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-600 hover:text-wellness-600 transition-colors">Health Plans</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-wellness-600 transition-colors">Diet Recommendations</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-wellness-600 transition-colors">Sleep Tracking</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-wellness-600 transition-colors">Mental Wellness</Link></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4">Resources</h5>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-600 hover:text-wellness-600 transition-colors">Blog</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-wellness-600 transition-colors">Guides</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-wellness-600 transition-colors">Wellness Tips</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-wellness-600 transition-colors">Research</Link></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4">Company</h5>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-600 hover:text-wellness-600 transition-colors">About Us</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-wellness-600 transition-colors">Careers</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-wellness-600 transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-wellness-600 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 flex items-center justify-center">
            Made with <Heart size={16} className="mx-1 text-mental-500" /> for a healthier world
          </p>
          <p className="mt-1 text-gray-400 text-sm">
            © 2025 ThriveWell. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
