
import { useState } from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { Button } from '@/components/ui/button';

// Sample data
const generateData = (days: number) => {
  const data = [];
  const date = new Date();
  date.setDate(date.getDate() - days + 1);

  for (let i = 0; i < days; i++) {
    const currentDate = new Date(date);
    currentDate.setDate(currentDate.getDate() + i);
    
    data.push({
      date: currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      nutrition: Math.floor(Math.random() * 30) + 60,
      sleep: Math.floor(Math.random() * 30) + 55,
      fitness: Math.floor(Math.random() * 40) + 50,
      mental: Math.floor(Math.random() * 25) + 65,
    });
  }
  
  return data;
};

const ProgressGraph = () => {
  const [timeRange, setTimeRange] = useState<'week' | 'month'>('week');
  const data = timeRange === 'week' ? generateData(7) : generateData(30);
  
  return (
    <div className="dashboard-card">
      <div className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <h3 className="text-lg font-semibold mb-2 sm:mb-0">Monthly Progress</h3>
          <div className="flex space-x-2">
            <Button 
              variant={timeRange === 'week' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setTimeRange('week')}
            >
              Week
            </Button>
            <Button 
              variant={timeRange === 'month' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setTimeRange('month')}
            >
              Month
            </Button>
          </div>
        </div>
        
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 5,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
              <XAxis dataKey="date" axisLine={false} tickLine={false} />
              <YAxis 
                domain={[0, 100]} 
                axisLine={false} 
                tickLine={false} 
                tickFormatter={(value) => `${value}%`} 
              />
              <Tooltip 
                formatter={(value) => [`${value}%`, '']}
                contentStyle={{ 
                  borderRadius: '8px', 
                  backgroundColor: 'white', 
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  border: 'none'
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="nutrition" 
                stroke="#f97316" 
                strokeWidth={2}
                activeDot={{ r: 6 }} 
                dot={{ r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="sleep" 
                stroke="#6366f1" 
                strokeWidth={2}
                activeDot={{ r: 6 }} 
                dot={{ r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="fitness" 
                stroke="#22c55e" 
                strokeWidth={2}
                activeDot={{ r: 6 }} 
                dot={{ r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="mental" 
                stroke="#ec4899" 
                strokeWidth={2}
                activeDot={{ r: 6 }} 
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ProgressGraph;
