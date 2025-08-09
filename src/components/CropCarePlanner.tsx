import React, { useState } from 'react';
import { Calendar, Clock, Droplets, Sprout, TrendingUp, Bell, CheckCircle, AlertCircle } from 'lucide-react';

interface CropCarePlannerProps {
  language: string;
}

export default function CropCarePlanner({ language }: CropCarePlannerProps) {
  const [selectedCrop, setSelectedCrop] = useState('wheat');
  const [currentWeek, setCurrentWeek] = useState(12);

  const getTexts = () => {
    switch (language) {
      case 'hi':
        return {
          title: 'फसल देखभाल योजनाकार',
          subtitle: 'व्यक्तिगत फसल चक्र कैलेंडर और अलर्ट',
          cropSelection: 'फसल चुनें',
          currentWeek: 'वर्तमान सप्ताह',
          upcomingTasks: 'आगामी कार्य',
          completedTasks: 'पूर्ण कार्य',
          weatherIntegration: 'मौसम एकीकरण',
          soilHealth: 'मिट्टी स्वास्थ्य',
          marketTrends: 'बाजार रुझान',
          tasks: {
            sowing: 'बुआई',
            irrigation: 'सिंचाई',
            fertilizer: 'उर्वरक',
            pesticide: 'कीटनाशक',
            harvesting: 'कटाई'
          },
          status: {
            pending: 'लंबित',
            inProgress: 'प्रगति में',
            completed: 'पूर्ण',
            overdue: 'देर से'
          }
        };
      case 'mr':
        return {
          title: 'पीक काळजी नियोजक',
          subtitle: 'वैयक्तिक पीक चक्र कॅलेंडर आणि अलर्ट',
          cropSelection: 'पीक निवडा',
          currentWeek: 'सध्याचा आठवडा',
          upcomingTasks: 'येणारी कामे',
          completedTasks: 'पूर्ण कामे',
          weatherIntegration: 'हवामान एकीकरण',
          soilHealth: 'माती आरोग्य',
          marketTrends: 'बाजार ट्रेंड',
          tasks: {
            sowing: 'पेरणी',
            irrigation: 'पाणी',
            fertilizer: 'खत',
            pesticide: 'किटकनाशक',
            harvesting: 'कापणी'
          },
          status: {
            pending: 'प्रलंबित',
            inProgress: 'सुरू',
            completed: 'पूर्ण',
            overdue: 'उशीर'
          }
        };
      default:
        return {
          title: 'CropCare Planner',
          subtitle: 'Personalized crop cycle calendar with smart alerts',
          cropSelection: 'Select Crop',
          currentWeek: 'Current Week',
          upcomingTasks: 'Upcoming Tasks',
          completedTasks: 'Completed Tasks',
          weatherIntegration: 'Weather Integration',
          soilHealth: 'Soil Health',
          marketTrends: 'Market Trends',
          tasks: {
            sowing: 'Sowing',
            irrigation: 'Irrigation',
            fertilizer: 'Fertilizer',
            pesticide: 'Pesticide',
            harvesting: 'Harvesting'
          },
          status: {
            pending: 'Pending',
            inProgress: 'In Progress',
            completed: 'Completed',
            overdue: 'Overdue'
          }
        };
    }
  };

  const texts = getTexts();

  const crops = [
    { id: 'wheat', name: language === 'hi' ? 'गेहूं' : language === 'mr' ? 'गहू' : 'Wheat' },
    { id: 'rice', name: language === 'hi' ? 'चावल' : language === 'mr' ? 'तांदूळ' : 'Rice' },
    { id: 'cotton', name: language === 'hi' ? 'कपास' : language === 'mr' ? 'कापूस' : 'Cotton' },
    { id: 'sugarcane', name: language === 'hi' ? 'गन्ना' : language === 'mr' ? 'ऊस' : 'Sugarcane' }
  ];

  const tasks = [
    {
      id: 1,
      type: 'irrigation',
      title: texts.tasks.irrigation,
      description: 'Apply 2 inches of water to field sections A-C',
      week: 12,
      priority: 'high',
      status: 'pending',
      icon: Droplets,
      color: 'blue'
    },
    {
      id: 2,
      type: 'fertilizer',
      title: texts.tasks.fertilizer,
      description: 'Apply nitrogen fertilizer (40kg/acre)',
      week: 13,
      priority: 'medium',
      status: 'pending',
      icon: Sprout,
      color: 'green'
    },
    {
      id: 3,
      type: 'pesticide',
      title: texts.tasks.pesticide,
      description: 'Spray for brown planthopper prevention',
      week: 14,
      priority: 'high',
      status: 'pending',
      icon: AlertCircle,
      color: 'red'
    },
    {
      id: 4,
      type: 'sowing',
      title: texts.tasks.sowing,
      description: 'Completed wheat sowing in Field A',
      week: 8,
      priority: 'high',
      status: 'completed',
      icon: CheckCircle,
      color: 'green'
    }
  ];

  const upcomingTasks = tasks.filter(task => task.week >= currentWeek && task.status !== 'completed');
  const completedTasks = tasks.filter(task => task.status === 'completed');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-700 border-green-200';
      case 'inProgress': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'overdue': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-yellow-100 text-yellow-700 border-yellow-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      default: return 'bg-green-500';
    }
  };

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
            <Calendar className="w-8 h-8 text-green-600" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{texts.title}</h1>
            <p className="text-gray-600">{texts.subtitle}</p>
          </div>
        </div>

        {/* Crop Selection */}
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <label className="text-sm font-medium text-gray-700">{texts.cropSelection}:</label>
          <select
            value={selectedCrop}
            onChange={(e) => setSelectedCrop(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500"
          >
            {crops.map(crop => (
              <option key={crop.id} value={crop.id}>{crop.name}</option>
            ))}
          </select>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Clock className="w-4 h-4" />
            <span>{texts.currentWeek}: {currentWeek}</span>
          </div>
        </div>
      </div>

      {/* Integration Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              <Droplets className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900">{texts.weatherIntegration}</h3>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Temperature</span>
              <span className="font-medium">28°C</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Humidity</span>
              <span className="font-medium">78%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Rain Forecast</span>
              <span className="font-medium text-blue-600">Light rain</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
              <Sprout className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900">{texts.soilHealth}</h3>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">pH Level</span>
              <span className="font-medium text-green-600">6.8</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Moisture</span>
              <span className="font-medium">65%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Nitrogen</span>
              <span className="font-medium text-yellow-600">Medium</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="font-semibold text-gray-900">{texts.marketTrends}</h3>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Current Price</span>
              <span className="font-medium">₹2,450/q</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Trend</span>
              <span className="font-medium text-green-600">+12%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Best Time</span>
              <span className="font-medium text-blue-600">2 weeks</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tasks Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Tasks */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-gray-900">{texts.upcomingTasks}</h3>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              {upcomingTasks.length}
            </span>
          </div>
          <div className="space-y-4">
            {upcomingTasks.map((task) => {
              const Icon = task.icon;
              return (
                <div key={task.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className={`p-2 rounded-lg bg-${task.color}-100`}>
                    <Icon className={`w-5 h-5 text-${task.color}-600`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-medium text-gray-900">{task.title}</h4>
                      <div className={`w-2 h-2 rounded-full ${getPriorityColor(task.priority)}`} />
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{task.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">Week {task.week}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(task.status)}`}>
                        {texts.status[task.status as keyof typeof texts.status]}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Completed Tasks */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-gray-900">{texts.completedTasks}</h3>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              {completedTasks.length}
            </span>
          </div>
          <div className="space-y-4">
            {completedTasks.map((task) => {
              const Icon = task.icon;
              return (
                <div key={task.id} className="flex items-start space-x-4 p-4 bg-green-50 rounded-xl">
                  <div className="p-2 rounded-lg bg-green-100">
                    <Icon className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{task.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{task.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">Week {task.week}</span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium border bg-green-100 text-green-700 border-green-200">
                        {texts.status.completed}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Calendar Timeline */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-gray-900 mb-6">Crop Cycle Timeline</h3>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />
          <div className="space-y-6">
            {tasks.map((task, index) => {
              const Icon = task.icon;
              return (
                <div key={task.id} className="relative flex items-center space-x-4">
                  <div className={`relative z-10 p-2 rounded-full ${task.status === 'completed' ? 'bg-green-100' : 'bg-gray-100'}`}>
                    <Icon className={`w-4 h-4 ${task.status === 'completed' ? 'text-green-600' : 'text-gray-600'}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-gray-900">{task.title}</h4>
                      <span className="text-sm text-gray-500">Week {task.week}</span>
                    </div>
                    <p className="text-sm text-gray-600">{task.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}