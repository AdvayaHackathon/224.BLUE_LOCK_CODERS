
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface PricingPlanProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const PricingPlan = ({ name, price, description, features, popular = false }: PricingPlanProps) => (
  <div className={`rounded-xl overflow-hidden ${popular ? 'border-2 border-wellness-500 shadow-xl' : 'border border-gray-200 shadow-sm'}`}>
    {popular && (
      <div className="bg-wellness-500 text-white text-center py-2 font-medium">
        Most Popular
      </div>
    )}
    
    <div className="p-6 md:p-8 bg-white">
      <h3 className={`text-xl font-bold mb-2 ${popular ? 'text-wellness-600' : ''}`}>{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="mb-6">
        <span className="text-3xl md:text-4xl font-bold">{price}</span>
        {price !== 'Free' && <span className="text-gray-500 ml-2">/month</span>}
      </div>
      
      <Link to="/register">
        <Button 
          className={`w-full mb-6 ${popular ? 'bg-wellness-600 hover:bg-wellness-700' : ''}`}
          variant={popular ? 'default' : 'outline'}
        >
          Get Started
        </Button>
      </Link>
      
      <div className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <CheckCircle2 className={`h-5 w-5 mr-3 mt-0.5 ${popular ? 'text-wellness-500' : 'text-gray-400'}`} />
            <span className="text-gray-600">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const PricingSection = () => {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      description: "Essential wellness tracking for beginners",
      features: [
        "Basic health assessment",
        "Limited diet recommendations",
        "Sleep tracking",
        "Access to community forums"
      ]
    },
    {
      name: "Premium",
      price: "$12.99",
      description: "Comprehensive wellness solutions",
      features: [
        "Detailed health assessment",
        "Full personalized diet plans",
        "Advanced sleep analysis",
        "Mental wellness resources",
        "Progress tracking dashboard",
        "Weekly progress reports"
      ],
      popular: true
    },
    {
      name: "Family",
      price: "$24.99",
      description: "Wellness solutions for the whole family",
      features: [
        "Up to 5 family members",
        "All Premium features",
        "Family health overview",
        "Shared meal planning",
        "Family activity challenges",
        "Priority customer support"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4">Simple, <span className="gradient-text">Transparent Pricing</span></h2>
          <p className="text-lg text-gray-600">
            Choose the plan that fits your wellness journey. Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PricingPlan
              key={index}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              popular={plan.popular}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center text-gray-500">
          <p>All plans include a 14-day free trial. No credit card required.</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
