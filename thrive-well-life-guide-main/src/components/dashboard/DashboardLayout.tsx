
import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Utensils,
  Dumbbell,
  Moon,
  Brain,
  Heart,
  Settings,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

interface SidebarLinkProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  active: boolean;
  onClick?: () => void;
}

const SidebarLink = ({ icon, label, to, active, onClick }: SidebarLinkProps) => (
  <Link to={to} onClick={onClick}>
    <div
      className={`flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${
        active
          ? 'bg-wellness-100 text-wellness-600'
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </div>
  </Link>
);

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  
  const links = [
    { icon: <LayoutDashboard size={20} />, label: 'Overview', to: '/dashboard' },
    { icon: <Utensils size={20} />, label: 'Diet Plan', to: '/dashboard/diet' },
    { icon: <Dumbbell size={20} />, label: 'Fitness', to: '/dashboard/fitness' },
    { icon: <Moon size={20} />, label: 'Sleep', to: '/dashboard/sleep' },
    { icon: <Brain size={20} />, label: 'Mental Health', to: '/dashboard/mental' },
    { icon: <Heart size={20} />, label: 'Health Reports', to: '/dashboard/reports' },
    { icon: <Settings size={20} />, label: 'Settings', to: '/dashboard/settings' },
  ];
  
  const closeSidebar = () => {
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen || !isMobile ? 'translate-x-0' : '-translate-x-full'
        } fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out ${
          isMobile ? 'shadow-xl' : ''
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-wellness-500 to-sleep-500 w-8 h-8 rounded-full"></div>
            <span className="font-bold text-xl">ThriveWell</span>
          </Link>
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(false)}
              className="md:hidden"
            >
              <X size={20} />
            </Button>
          )}
        </div>
        
        <div className="p-4">
          <div className="mb-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
                JD
              </div>
              <div>
                <p className="font-medium">John Doe</p>
                <p className="text-xs text-gray-500">john@example.com</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-1">
            {links.map((link) => (
              <SidebarLink
                key={link.to}
                icon={link.icon}
                label={link.label}
                to={link.to}
                active={location.pathname === link.to}
                onClick={closeSidebar}
              />
            ))}
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
            <Link to="/">
              <div className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 cursor-pointer transition-colors">
                <LogOut size={20} />
                <span className="font-medium">Logout</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Backdrop for mobile */}
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
      
      {/* Main content */}
      <div className={`flex-1 ${isMobile ? 'w-full' : 'ml-64'} flex flex-col`}>
        {/* Top navigation */}
        <header className="bg-white border-b sticky top-0 z-30">
          <div className="flex items-center justify-between p-4">
            {isMobile && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarOpen(true)}
                className="mr-2"
              >
                <Menu size={20} />
              </Button>
            )}
            <h1 className="text-xl font-semibold">
              {links.find((link) => link.to === location.pathname)?.label || 'Dashboard'}
            </h1>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                Upgrade
              </Button>
            </div>
          </div>
        </header>
        
        {/* Page content */}
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
