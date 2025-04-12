
import { 
  CalendarCheck, 
  Utensils, 
  PlusCircle, 
  MinusCircle, 
  AlertTriangle,
  Info
} from 'lucide-react';

interface InsightProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  type: 'positive' | 'negative' | 'warning' | 'info';
}

const Insight = ({ title, description, icon, type }: InsightProps) => {
  const styles = {
    positive: 'bg-wellness-50 border-wellness-200 text-wellness-800',
    negative: 'bg-red-50 border-red-200 text-red-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800'
  };

  return (
    <div className={`p-4 rounded-lg border ${styles[type]}`}>
      <div className="flex items-start space-x-3">
        <div className="mt-1">{icon}</div>
        <div>
          <h4 className="font-semibold mb-1">{title}</h4>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

const HealthInsights = () => {
  // These would be generated based on the uploaded blood report in a real app
  const insights = [
    {
      title: 'Lower Iron Levels Detected',
      description: 'Your recent blood report shows slightly lower iron levels. We\'ve updated your diet plan with iron-rich food recommendations.',
      icon: <MinusCircle size={18} />,
      type: 'warning' as const
    },
    {
      title: 'Vitamin D Supplementation Needed',
      description: 'Your Vitamin D levels are below the optimal range. Consider 15 minutes of morning sunlight and supplementation.',
      icon: <AlertTriangle size={18} />,
      type: 'negative' as const
    },
    {
      title: 'Improved Cholesterol Levels',
      description: 'Your cholesterol levels have improved since your last test. Keep up the healthy habits!',
      icon: <PlusCircle size={18} />,
      type: 'positive' as const
    },
    {
      title: 'Drink More Water',
      description: 'Based on your activity level, aim for 3 liters of water daily to maintain optimal hydration.',
      icon: <Info size={18} />,
      type: 'info' as const
    }
  ];

  return (
    <div className="dashboard-card">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">Health Insights</h3>
          <div className="flex items-center space-x-2">
            <CalendarCheck className="h-4 w-4 text-gray-400" />
            <span className="text-xs text-gray-500">Updated April 10, 2025</span>
          </div>
        </div>
        
        <div className="space-y-4">
          {insights.map((insight, index) => (
            <Insight
              key={index}
              title={insight.title}
              description={insight.description}
              icon={insight.icon}
              type={insight.type}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthInsights;
