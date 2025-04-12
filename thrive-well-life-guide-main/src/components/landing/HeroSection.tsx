
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="hero-gradient py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h1 className="mb-6">
              Your Personal <span className="gradient-text">Wellness Journey</span> Starts Here
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Get personalized health plans based on your unique needs. 
              Optimize your fitness, nutrition, sleep, and mental wellbeing with 
              data-driven insights.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/register">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="#features">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-r from-wellness-400/20 via-transparent to-sleep-400/20 rounded-2xl"></div>
            <div className="relative bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold mb-1">Your Health Status</h3>
                  <p className="text-sm text-gray-500">Updated today</p>
                </div>
                <span className="h-10 w-10 rounded-full bg-wellness-100 flex items-center justify-center text-wellness-600 font-medium">85%</span>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Nutrition</span>
                    <span className="text-sm text-gray-500">Good</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full">
                    <div className="bg-nutrition-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Sleep</span>
                    <span className="text-sm text-gray-500">Excellent</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full">
                    <div className="bg-sleep-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Fitness</span>
                    <span className="text-sm text-gray-500">Good</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full">
                    <div className="bg-wellness-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Mental Wellness</span>
                    <span className="text-sm text-gray-500">Great</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full">
                    <div className="bg-mental-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
