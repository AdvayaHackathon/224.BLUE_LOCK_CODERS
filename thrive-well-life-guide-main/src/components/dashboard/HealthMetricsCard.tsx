
import { 
  Activity, 
  Apple, 
  Brain, 
  Droplets, 
  Heart, 
  HeartPulse, 
  Moon
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface MetricProps {
  icon: React.ReactNode;
  name: string;
  value: string;
  progress: number;
  color: string;
}

const Metric = ({ icon, name, value, progress, color }: MetricProps) => (
  <div className="flex items-start space-x-3">
    <div className={`p-2 rounded-lg ${color}`}>
      {icon}
    </div>
    <div className="flex-1">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm font-semibold">{value}</span>
      </div>
      <Progress value={progress} className="h-1.5" />
    </div>
  </div>
);

const HealthMetricsCard = () => {
  const metrics = [
    {
      icon: <HeartPulse size={18} className="text-red-600" />,
      name: 'Heart Rate',
      value: '72 bpm',
      progress: 72,
      color: 'bg-red-100'
    },
    {
      icon: <Activity size={18} className="text-wellness-600" />,
      name: 'Steps',
      value: '8,942',
      progress: 74,
      color: 'bg-wellness-100'
    },
    {
      icon: <Moon size={18} className="text-sleep-600" />,
      name: 'Sleep',
      value: '7.5 hrs',
      progress: 85,
      color: 'bg-sleep-100'
    },
    {
      icon: <Apple size={18} className="text-nutrition-600" />,
      name: 'Nutrition',
      value: 'Good',
      progress: 65,
      color: 'bg-nutrition-100'
    },
    {
      icon: <Brain size={18} className="text-mental-600" />,
      name: 'Stress',
      value: 'Low',
      progress: 25,
      color: 'bg-mental-100'
    },
    {
      icon: <Droplets size={18} className="text-blue-600" />,
      name: 'Hydration',
      value: '1.8L',
      progress: 60,
      color: 'bg-blue-100'
    }
  ];

  return (
    <div className="dashboard-card">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">Health Metrics</h3>
          <span className="text-xs text-gray-500">Last updated: Today, 10:45 AM</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {metrics.map((metric, index) => (
            <Metric
              key={index}
              icon={metric.icon}
              name={metric.name}
              value={metric.value}
              progress={metric.progress}
              color={metric.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthMetricsCard;
