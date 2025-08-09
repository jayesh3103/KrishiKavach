import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { 
  Shield, 
  CloudRain, 
  TrendingUp, 
  CreditCard, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  MapPin,
  Thermometer,
  Droplets,
  Wind,
  Sun
} from 'lucide-react';

interface DashboardProps {
  language: string;
  onScreenChange?: (screen: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ language, onScreenChange }) => {
  const { theme } = useTheme();

  const getTexts = () => {
    switch (language) {
      case 'hi':
        return {
          title: 'KrishiKavach डैशबोर्ड',
          subtitle: 'कृषि सुरक्षा डैशबोर्ड - Your farm\'s AI protection system',
          currentWeather: 'वर्तमान मौसम',
          temperature: 'तापमान',
          humidity: 'नमी',
          wind: 'हवा (किमी/घंटा)',
          recentEvents: 'हाल की घटनाएं',
          viewAll: 'सभी देखें',
          fieldMap: 'खेत का नक्शा',
          alerts: 'अलर्ट',
          analytics: 'विश्लेषण',
          tasks: 'कार्य',
          agents: {
            pestpatrol: {
              name: 'PestPatrol',
              nameHi: 'कीट गश्त',
              description: 'कीट का पता लगाना और निगरानी'
            },
            rainrisk: {
              name: 'RainRisk',
              nameHi: 'बारिश जोखिम',
              description: 'मौसम और बारिश की भविष्यवाणी'
            },
            marketguard: {
              name: 'MarketGuard',
              nameHi: 'बाजार रक्षक',
              description: 'बाजार मूल्य निगरानी'
            },
            creditshield: {
              name: 'CreditShield',
              nameHi: 'क्रेडिट शील्ड',
              description: 'क्रेडिट और ऋण सुरक्षा'
            }
          }
        };
      case 'mr':
        return {
          title: 'KrishiKavach डॅशबोर्ड',
          subtitle: 'कृषी सुरक्षा डॅशबोर्ड - Your farm\'s AI protection system',
          currentWeather: 'सध्याचे हवामान',
          temperature: 'तापमान',
          humidity: 'आर्द्रता',
          wind: 'वारा (किमी/तास)',
          recentEvents: 'अलीकडच्या घटना',
          viewAll: 'सर्व पहा',
          fieldMap: 'शेताचा नकाशा',
          alerts: 'अलर्ट',
          analytics: 'विश्लेषण',
          tasks: 'कामे',
          agents: {
            pestpatrol: {
              name: 'PestPatrol',
              nameHi: 'कीड गस्त',
              description: 'कीड शोध आणि निरीक्षण'
            },
            rainrisk: {
              name: 'RainRisk',
              nameHi: 'पाऊस जोखीम',
              description: 'हवामान आणि पावसाचा अंदाज'
            },
            marketguard: {
              name: 'MarketGuard',
              nameHi: 'बाजार रक्षक',
              description: 'बाजार किंमत निरीक्षण'
            },
            creditshield: {
              name: 'CreditShield',
              nameHi: 'क्रेडिट शील्ड',
              description: 'क्रेडिट आणि कर्ज सुरक्षा'
            }
          }
        };
      default:
        return {
          title: 'KrishiKavach Dashboard',
          subtitle: 'कृषि सुरक्षा डैशबोर्ड - Your farm\'s AI protection system',
          currentWeather: 'Current Weather',
          temperature: 'Temperature',
          humidity: 'Humidity',
          wind: 'Wind (km/h)',
          recentEvents: 'Recent Events',
          viewAll: 'View All',
          fieldMap: 'Field Map',
          alerts: 'Alerts',
          analytics: 'Analytics',
          tasks: 'Tasks',
          agents: {
            pestpatrol: {
              name: 'PestPatrol',
              nameHi: 'कीट गश्त',
              description: 'Pest detection and monitoring'
            },
            rainrisk: {
              name: 'RainRisk',
              nameHi: 'बारिश जोखिम',
              description: 'Weather and rainfall prediction'
            },
            marketguard: {
              name: 'MarketGuard',
              nameHi: 'बाजार रक्षक',
              description: 'Market price monitoring'
            },
            creditshield: {
              name: 'CreditShield',
              nameHi: 'क्रेडिट शील्ड',
              description: 'Credit and loan protection'
            }
          }
        };
    }
  };

  const texts = getTexts();

  const agents = [
    {
      id: 'pestpatrol',
      name: texts.agents.pestpatrol.name,
      nameHi: texts.agents.pestpatrol.nameHi,
      icon: Shield,
      status: 'active',
      alerts: 2,
      lastUpdate: '2 मिनट पहले',
      description: texts.agents.pestpatrol.description
    },
    {
      id: 'rainrisk',
      name: texts.agents.rainrisk.name,
      nameHi: texts.agents.rainrisk.nameHi,
      icon: CloudRain,
      status: 'warning',
      alerts: 1,
      lastUpdate: '15 मिनट पहले',
      description: texts.agents.rainrisk.description
    },
    {
      id: 'marketguard',
      name: texts.agents.marketguard.name,
      nameHi: texts.agents.marketguard.nameHi,
      icon: TrendingUp,
      status: 'active',
      alerts: 0,
      lastUpdate: '1 घंटा पहले',
      description: texts.agents.marketguard.description
    },
    {
      id: 'creditshield',
      name: texts.agents.creditshield.name,
      nameHi: texts.agents.creditshield.nameHi,
      icon: CreditCard,
      status: 'active',
      alerts: 0,
      lastUpdate: '3 घंटे पहले',
      description: texts.agents.creditshield.description
    }
  ];

  const weatherData = {
    temperature: 28,
    humidity: 65,
    windSpeed: 12,
    condition: 'Partly Cloudy',
    conditionHi: 'आंशिक बादल'
  };

  const recentEvents = [
    {
      id: 1,
      type: 'alert',
      message: 'Pest activity detected in sector 3',
      messageHi: 'सेक्टर 3 में कीट गतिविधि का पता चला',
      time: '10 मिनट पहले',
      severity: 'high'
    },
    {
      id: 2,
      type: 'info',
      message: 'Weather forecast updated',
      messageHi: 'मौसम पूर्वानुमान अपडेट किया गया',
      time: '1 घंटा पहले',
      severity: 'low'
    },
    {
      id: 3,
      type: 'success',
      message: 'Irrigation cycle completed',
      messageHi: 'सिंचाई चक्र पूरा हुआ',
      time: '2 घंटे पहले',
      severity: 'low'
    }
  ];

  const handleAgentClick = (agentId: string) => {
    console.log(`Clicked on agent: ${agentId}`);
    if (onScreenChange) {
      onScreenChange('agents');
    }
    // Show agent details or navigate to agent page
    alert(`Opening ${agentId} details...`);
  };

  const handleQuickActionClick = (action: string) => {
    console.log(`Clicked on quick action: ${action}`);
    switch (action) {
      case 'fieldMap':
        alert('Opening Field Map...\nThis will show your farm layout with real-time monitoring zones.');
        break;
      case 'alerts':
        if (onScreenChange) {
          onScreenChange('community');
        }
        break;
      case 'analytics':
        alert('Opening Analytics Dashboard...\nView detailed insights about your crop performance, weather patterns, and market trends.');
        break;
      case 'tasks':
        if (onScreenChange) {
          onScreenChange('cropcare');
        }
        break;
      default:
        alert(`Opening ${action}...`);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/30';
      case 'warning':
        return 'text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/30';
      case 'error':
        return 'text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/30';
      default:
        return 'text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-900/30';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'border-l-red-500 bg-red-50 dark:bg-red-900/20';
      case 'medium':
        return 'border-l-yellow-500 bg-yellow-50 dark:bg-yellow-900/20';
      case 'low':
        return 'border-l-green-500 bg-green-50 dark:bg-green-900/20';
      default:
        return 'border-l-gray-500 bg-gray-50 dark:bg-gray-900/20';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 animate-fadeIn">
            {texts.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 animate-fadeIn">
            {texts.subtitle}
          </p>
        </div>

        {/* Weather Widget */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 transition-all duration-300 hover:shadow-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <Sun className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                  {texts.currentWeather}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
                  {weatherData.condition} • {weatherData.conditionHi}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="flex items-center text-2xl font-bold text-gray-900 dark:text-white">
                  <Thermometer className="h-6 w-6 mr-1 text-red-500" />
                  {weatherData.temperature}°C
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">{texts.temperature}</p>
              </div>
              <div className="text-center">
                <div className="flex items-center text-2xl font-bold text-gray-900 dark:text-white">
                  <Droplets className="h-6 w-6 mr-1 text-blue-500" />
                  {weatherData.humidity}%
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">{texts.humidity}</p>
              </div>
              <div className="text-center">
                <div className="flex items-center text-2xl font-bold text-gray-900 dark:text-white">
                  <Wind className="h-6 w-6 mr-1 text-gray-500" />
                  {weatherData.windSpeed}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">{texts.wind}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Agent Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {agents.map((agent) => {
            const IconComponent = agent.icon;
            return (
              <div
                key={agent.id}
                onClick={() => handleAgentClick(agent.id)}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer transform animate-slideUp"
                style={{ animationDelay: `${agents.indexOf(agent) * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <IconComponent className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  {agent.alerts > 0 && (
                    <div className="flex items-center space-x-1">
                      <AlertTriangle className="h-4 w-4 text-red-500 animate-pulse" />
                      <span className="text-sm font-semibold text-red-600 dark:text-red-400">
                        {agent.alerts}
                      </span>
                    </div>
                  )}
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {agent.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {agent.nameHi}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mb-3 transition-colors duration-300">
                  {agent.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(agent.status)}`}>
                    {agent.status === 'active' ? 'सक्रिय' : agent.status === 'warning' ? 'चेतावनी' : 'त्रुटि'}
                  </span>
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <Clock className="h-3 w-3 mr-1" />
                    {agent.lastUpdate}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Recent Events */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-300">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">
              {texts.recentEvents} • Recent Events
            </h2>
            <button className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 text-sm font-medium transition-colors duration-200 hover:scale-105 transform">
              {texts.viewAll} • View All
            </button>
          </div>
          
          <div className="space-y-4">
            {recentEvents.map((event) => (
              <div
                key={event.id}
                className={`border-l-4 pl-4 py-3 rounded-r-lg transition-all duration-300 hover:shadow-md cursor-pointer hover:scale-[1.02] ${getSeverityColor(event.severity)}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-gray-900 dark:text-white font-medium mb-1">
                      {event.message}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {event.messageHi}
                    </p>
                  </div>
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 ml-4">
                    <Clock className="h-3 w-3 mr-1" />
                    {event.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 animate-slideUp">
          <button 
            onClick={() => handleQuickActionClick('fieldMap')}
            className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg transform active:scale-95"
          >
            <MapPin className="h-6 w-6 mx-auto mb-2" />
            <span className="text-sm font-medium">{texts.fieldMap}</span>
          </button>
          <button 
            onClick={() => handleQuickActionClick('alerts')}
            className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg transform active:scale-95"
          >
            <Shield className="h-6 w-6 mx-auto mb-2" />
            <span className="text-sm font-medium">{texts.alerts}</span>
          </button>
          <button 
            onClick={() => handleQuickActionClick('analytics')}
            className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg transform active:scale-95"
          >
            <TrendingUp className="h-6 w-6 mx-auto mb-2" />
            <span className="text-sm font-medium">{texts.analytics}</span>
          </button>
          <button 
            onClick={() => handleQuickActionClick('tasks')}
            className="bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg transform active:scale-95"
          >
            <CheckCircle className="h-6 w-6 mx-auto mb-2" />
            <span className="text-sm font-medium">{texts.tasks}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;