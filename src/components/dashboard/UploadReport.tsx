
import { useState } from 'react';
import { FileUp, Check, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

type UploadStatus = 'idle' | 'uploading' | 'success' | 'error';

const UploadReport = () => {
  const [status, setStatus] = useState<UploadStatus>('idle');
  const [file, setFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!file) return;
    
    setStatus('uploading');
    
    // Simulate upload process
    setTimeout(() => {
      setStatus('success');
      toast({
        title: "Report uploaded successfully",
        description: "Your health report has been analyzed. Recommendations updated!",
      });
    }, 2000);
  };

  const getStatusStyles = () => {
    switch (status) {
      case 'uploading':
        return 'border-yellow-400 bg-yellow-50';
      case 'success':
        return 'border-wellness-500 bg-wellness-50';
      case 'error':
        return 'border-red-500 bg-red-50';
      default:
        return 'border-gray-300 bg-gray-50';
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'uploading':
        return <div className="animate-pulse h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-500"></div>;
      case 'success':
        return <Check className="h-6 w-6 text-wellness-500" />;
      case 'error':
        return <AlertCircle className="h-6 w-6 text-red-500" />;
      default:
        return <FileUp className="h-6 w-6 text-gray-400" />;
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'uploading':
        return 'Uploading and analyzing...';
      case 'success':
        return 'Report analysis complete';
      case 'error':
        return 'Upload failed. Please try again.';
      default:
        return file ? file.name : 'Upload your blood test report for personalized recommendations';
    }
  };

  return (
    <div className="dashboard-card">
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4">Upload Health Report</h3>
        
        <div
          className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer transition-colors ${getStatusStyles()}`}
          onClick={() => document.getElementById('file-upload')?.click()}
        >
          <input
            id="file-upload"
            type="file"
            className="hidden"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            disabled={status === 'uploading'}
          />
          
          <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center mb-3">
            {getStatusIcon()}
          </div>
          
          <p className="text-sm font-medium text-gray-700 text-center mb-1">
            {getStatusText()}
          </p>
          
          {status === 'idle' && (
            <p className="text-xs text-gray-500 text-center">
              Drag and drop or click to browse (PDF, JPG, PNG)
            </p>
          )}
        </div>
        
        {file && status === 'idle' && (
          <div className="mt-4 flex justify-end">
            <Button onClick={handleUpload}>
              Analyze Report
            </Button>
          </div>
        )}
        
        {status === 'success' && (
          <div className="mt-4 p-4 bg-wellness-50 rounded-lg border border-wellness-200">
            <p className="text-sm text-wellness-800 font-medium">
              Based on your report, we've updated your diet recommendations and health plan.
              Check the Diet Plan and Health Recommendations sections for personalized advice.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadReport;
