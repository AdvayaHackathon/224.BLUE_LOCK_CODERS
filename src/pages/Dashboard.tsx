
import HealthMetricsCard from '@/components/dashboard/HealthMetricsCard';
import ProgressGraph from '@/components/dashboard/ProgressGraph';
import UploadReport from '@/components/dashboard/UploadReport';
import HealthInsights from '@/components/dashboard/HealthInsights';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <HealthMetricsCard />
        <UploadReport />
      </div>
      
      <ProgressGraph />
      
      <HealthInsights />
    </div>
  );
};

export default Dashboard;
