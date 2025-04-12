
import { Activity, Brain, Clock, HeartPulse, Users, Utensils, Watch, Zap } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 card-gradient">
    <div className="feature-icon">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: <HeartPulse size={28} />,
      title: "Personalized Health Plans",
      description: "Custom fitness routines and health recommendations based on your specific needs and goals."
    },
    {
      icon: <Utensils size={28} />,
      title: "Nutrition Analysis",
      description: "Diet plans customized from your blood reports to address nutritional deficiencies and health concerns."
    },
    {
      icon: <Clock size={28} />,
      title: "Sleep Improvement",
      description: "Strategies and tracking to optimize your sleep cycles and improve overall rest quality."
    },
    {
      icon: <Brain size={28} />,
      title: "Mental Wellness",
      description: "Techniques and resources to manage stress, improve focus, and enhance mental well-being."
    },
    {
      icon: <Watch size={28} />,
      title: "Wearable Integration",
      description: "Connect with your favorite wearable devices to track progress and get more accurate insights."
    },
    {
      icon: <Activity size={28} />,
      title: "Progress Tracking",
      description: "Visualize your wellness journey with interactive charts showing improvements over time."
    },
    {
      icon: <Users size={28} />,
      title: "Community Support",
      description: "Connect with others on similar health journeys for motivation and shared experiences."
    },
    {
      icon: <Zap size={28} />,
      title: "Habit Building",
      description: "Develop and maintain healthy habits with reminders and streak tracking for consistency."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4">Comprehensive <span className="gradient-text">Wellness Features</span></h2>
          <p className="text-lg text-gray-600">
            Our platform combines cutting-edge technology with health expertise to deliver a holistic approach to your wellbeing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
