
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      role: "Fitness Enthusiast",
      content: "ThriveWell completely transformed my approach to health. The personalized diet plan based on my blood work helped me address my iron deficiency in just 3 months!",
      avatar: "https://i.pravatar.cc/150?img=1",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Tech Professional",
      content: "As someone with a busy schedule, I needed a solution that could adapt to my lifestyle. The sleep improvement techniques have been a game-changer for my energy levels.",
      avatar: "https://i.pravatar.cc/150?img=3",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Working Parent",
      content: "The mental wellness resources helped me manage stress effectively. I love how the platform integrates all aspects of health into one cohesive plan.",
      avatar: "https://i.pravatar.cc/150?img=5",
      rating: 4
    },
    {
      name: "David Thompson",
      role: "Recovering Patient",
      content: "After my surgery, I needed guidance on safe exercise. The tailored fitness routines were exactly what I needed to rebuild strength without risking injury.",
      avatar: "https://i.pravatar.cc/150?img=8",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mb-4">What Our <span className="gradient-text">Users Say</span></h2>
          <p className="text-lg text-gray-600">
            Read about the real experiences and transformations from our community members.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 relative">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-wellness-100 text-wellness-600 py-1 px-3 rounded-full text-sm font-medium">
              {currentIndex + 1} of {testimonials.length}
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/3 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                  <img src={currentTestimonial.avatar} alt={currentTestimonial.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-xl font-medium">{currentTestimonial.name}</h4>
                <p className="text-gray-500 mb-3">{currentTestimonial.role}</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className={i < currentTestimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                    />
                  ))}
                </div>
              </div>
              
              <div className="w-full md:w-2/3">
                <blockquote className="italic text-lg md:text-xl text-gray-700 mb-6">
                  "{currentTestimonial.content}"
                </blockquote>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              <Button variant="outline" size="icon" onClick={prevTestimonial}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={nextTestimonial}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
