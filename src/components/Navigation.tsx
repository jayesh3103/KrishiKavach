import React from 'react';
import { Home, MessageCircle, Shield, Users, WifiOff, Calendar, Stethoscope, Sun } from 'lucide-react';

interface NavigationProps {
  activeScreen: string;
  onScreenChange: (screen: string) => void;
  language: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function Navigation({ activeScreen, onScreenChange, language, isOpen, onClose }: NavigationProps) {
  const getNavItems = () => {
    switch (language) {
      case 'hi':
        return [
          { id: 'dashboard', icon: Home, label: 'मुख्य डैशबोर्ड', badge: null },
          { id: 'cropcare', icon: Calendar, label: 'फसल देखभाल', badge: null },
          { id: 'diagnosis', icon: Stethoscope, label: 'आवाज़ निदान', badge: null },
          { id: 'soilbox', icon: Sun, label: 'मिट्टी बॉक्स', badge: null },
          { id: 'chat', icon: MessageCircle, label: 'कृषि सहायक', badge: null },
          { id: 'agents', icon: Shield, label: 'सुरक्षा एजेंट', badge: 'नया' },
          { id: 'community', icon: Users, label: 'समुदाय अलर्ट', badge: '3' },
          { id: 'offline', icon: WifiOff, label: 'ऑफलाइन मोड', badge: null },
        ];
      case 'mr':
        return [
          { id: 'dashboard', icon: Home, label: 'मुख्य डॅशबोर्ड', badge: null },
          { id: 'cropcare', icon: Calendar, label: 'पीक काळजी', badge: null },
          { id: 'diagnosis', icon: Stethoscope, label: 'आवाज निदान', badge: null },
          { id: 'soilbox', icon: Sun, label: 'माती बॉक्स', badge: null },
          { id: 'chat', icon: MessageCircle, label: 'कृषी सहायक', badge: null },
          { id: 'agents', icon: Shield, label: 'संरक्षण एजेंट', badge: 'नवीन' },
          { id: 'community', icon: Users, label: 'समुदाय अलर्ट', badge: '3' },
          { id: 'offline', icon: WifiOff, label: 'ऑफलाइन मोड', badge: null },
        ];
      default:
        return [
          { id: 'dashboard', icon: Home, label: 'Dashboard', badge: null },
          { id: 'cropcare', icon: Calendar, label: 'CropCare Planner', badge: null },
          { id: 'diagnosis', icon: Stethoscope, label: 'Voice Diagnosis', badge: null },
          { id: 'soilbox', icon: Sun, label: 'Smart Soil Box', badge: null },
          { id: 'chat', icon: MessageCircle, label: 'KrishiCopilot', badge: null },
          { id: 'agents', icon: Shield, label: 'Protection Agents', badge: 'New' },
          { id: 'community', icon: Users, label: 'Community Alerts', badge: '3' },
          { id: 'offline', icon: WifiOff, label: 'Offline Mode', badge: null },
        ];
    }
  };

  const navItems = getNavItems();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Navigation sidebar */}
      <nav className={`
        fixed left-0 top-16 h-full bg-white dark:bg-gray-800 shadow-lg z-50 transform transition-all duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:top-0 md:translate-x-0 md:shadow-none md:border-r md:border-green-100 dark:md:border-gray-700
        w-64 flex-shrink-0
      `}>
        <div className="p-4">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeScreen === item.id;
              
              return (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      onScreenChange(item.id);
                      onClose();
                    }}
                    className={`
                      w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200
                      ${isActive 
                        ? 'bg-green-50 dark:bg-green-800 text-green-700 dark:text-green-300 border-l-4 border-green-500 transform scale-105' 
                        : 'text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-gray-700 hover:text-green-600 dark:hover:text-green-400 transform hover:scale-105'
                      }
                    `}
                  >
                    <Icon className={`w-6 h-6 transition-colors duration-200 ${isActive ? 'text-green-600 dark:text-green-400' : 'text-gray-500 dark:text-gray-400'}`} />
                    <span className="font-medium">{item.label}</span>
                    {item.badge && (
                      <span className="ml-auto px-2 py-1 text-xs bg-red-500 text-white rounded-full animate-pulse">
                        {item.badge}
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}