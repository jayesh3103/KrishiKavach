import React, { useState, useEffect } from 'react';
import { Thermometer, Droplets, Zap, Sun, Wifi, Battery, TrendingUp, AlertTriangle, Settings } from 'lucide-react';

interface SmartSoilBoxProps {
  language: string;
}

export default function SmartSoilBox({ language }: SmartSoilBoxProps) {
  const [sensorData, setSensorData] = useState({
    ph: 6.8,
    moisture: 65,
    nitrogen: 45,
    temperature: 28,
    lastUpdate: new Date(),
    batteryLevel: 78,
    signalStrength: 85
  });

  const [alerts, setAlerts] = useState([
    { id: 1, type: 'warning', message: 'Nitrogen levels below optimal range', timestamp: '2 hours ago' },
    { id: 2, type: 'info', message: 'Moisture levels stable', timestamp: '4 hours ago' }
  ]);

  const getTexts = () => {
    switch (language) {
      case 'hi':
        return {
          title: 'स्मार्ट मिट्टी बॉक्स',
          subtitle: 'वास्तविक समय मिट्टी निगरानी और विश्लेषण',
          sensorReadings: 'सेंसर रीडिंग',
          deviceStatus: 'डिवाइस स्थिति',
          recentAlerts: 'हाल की चेतावनियां',
          trends: 'रुझान',
          settings: 'सेटिंग्स',
          lastUpdate: 'अंतिम अपडेट',
          batteryLevel: 'बैटरी स्तर',
          signalStrength: 'सिग्नल शक्ति',
          optimal: 'अनुकूल',
          warning: 'चेतावनी',
          critical: 'गंभीर',
          parameters: {
            ph: 'पीएच स्तर',
            moisture: 'नमी',
            nitrogen: 'नाइट्रोजन',
            temperature: 'तापमान'
          }
        };
      case 'mr':
        return {
          title: 'स्मार्ट माती बॉक्स',
          subtitle: 'रिअल-टाइम माती निरीक्षण आणि विश्लेषण',
          sensorReadings: 'सेन्सर रीडिंग',
          deviceStatus: 'डिव्हाइस स्थिती',
          recentAlerts: 'अलीकडील सूचना',
          trends: 'ट्रेंड',
          settings: 'सेटिंग्ज',
          lastUpdate: 'शेवटचे अपडेट',
          batteryLevel: 'बॅटरी पातळी',
          signalStrength: 'सिग्नल शक्ती',
          optimal: 'योग्य',
          warning: 'सावधानता',
          critical: 'गंभीर',
          parameters: {
            ph: 'पीएच पातळी',
            moisture: 'ओलावा',
            nitrogen: 'नायट्रोजन',
            temperature: 'तापमान'
          }
        };
      default:
        return {
          title: 'Smart Soil Box',
          subtitle: 'Real-time soil monitoring and analysis',
          sensorReadings: 'Sensor Readings',
          deviceStatus: 'Device Status',
          recentAlerts: 'Recent Alerts',
          trends: 'Trends',
          settings: 'Settings',
          lastUpdate: 'Last Update',
          batteryLevel: 'Battery Level',
          signalStrength: 'Signal Strength',
          optimal: 'Optimal',
          warning: 'Warning',
          critical: 'Critical',
          parameters: {
            ph: 'pH Level',
            moisture: 'Moisture',
            nitrogen: 'Nitrogen',
            temperature: 'Temperature'
          }
        };
    }
  };

  const texts = getTexts();

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setSensorData(prev => ({
        ...prev,
        ph: Math.max(5.5, Math.min(8.5, prev.ph + (Math.random() - 0.5) * 0.2)),
        moisture: Math.max(20, Math.min(90, prev.moisture + (Math.random() - 0.5) * 5)),
        nitrogen: Math.max(20, Math.min(80, prev.nitrogen + (Math.random() - 0.5) * 3)),
        temperature: Math.max(15, Math.min(40, prev.temperature + (Math.random() - 0.5) * 2)),
        lastUpdate: new Date()
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getParameterStatus = (parameter: string, value: number) => {
    switch (parameter) {
      case 'ph':
        if (value >= 6.0 && value <= 7.5) return 'optimal';
        if (value >= 5.5 && value <= 8.0) return 'warning';
        return 'critical';
      case 'moisture':
        if (value >= 50 && value <= 80) return 'optimal';
        if (value >= 30 && value <= 90) return 'warning';
        return 'critical';
      case 'nitrogen':
        if (value >= 40 && value <= 70) return 'optimal';
        if (value >= 25 && value <= 80) return 'warning';
        return 'critical';
      case 'temperature':
        if (value >= 20 && value <= 35) return 'optimal';
        if (value >= 15 && value <= 40) return 'warning';
        return 'critical';
      default:
        return 'optimal';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'optimal': return 'bg-green-100 text-green-700 border-green-200';
      case 'warning': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'critical': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const sensorParameters = [
    {
      key: 'ph',
      label: texts.parameters.ph,
      value: sensorData.ph.toFixed(1),
      unit: 'pH',
      icon: Zap,
      color: 'blue'
    },
    {
      key: 'moisture',
      label: texts.parameters.moisture,
      value: sensorData.moisture.toFixed(0),
      unit: '%',
      icon: Droplets,
      color: 'blue'
    },
    {
      key: 'nitrogen',
      label: texts.parameters.nitrogen,
      value: sensorData.nitrogen.toFixed(0),
      unit: 'ppm',
      icon: TrendingUp,
      color: 'green'
    },
    {
      key: 'temperature',
      label: texts.parameters.temperature,
      value: sensorData.temperature.toFixed(1),
      unit: '°C',
      icon: Thermometer,
      color: 'red'
    }
  ];

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
            <Sun className="w-8 h-8 text-green-600" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{texts.title}</h1>
            <p className="text-gray-600">{texts.subtitle}</p>
          </div>
        </div>

        {/* Device Status */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center space-x-3">
              <Battery className="w-5 h-5 text-green-600" />
              <div>
                <div className="text-sm text-gray-600">{texts.batteryLevel}</div>
                <div className="font-semibold text-gray-900">{sensorData.batteryLevel}%</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center space-x-3">
              <Wifi className="w-5 h-5 text-blue-600" />
              <div>
                <div className="text-sm text-gray-600">{texts.signalStrength}</div>
                <div className="font-semibold text-gray-900">{sensorData.signalStrength}%</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center space-x-3">
              <Settings className="w-5 h-5 text-gray-600" />
              <div>
                <div className="text-sm text-gray-600">{texts.lastUpdate}</div>
                <div className="font-semibold text-gray-900">
                  {sensorData.lastUpdate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sensor Readings */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-gray-900 mb-6">{texts.sensorReadings}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sensorParameters.map((param) => {
            const Icon = param.icon;
            const status = getParameterStatus(param.key, parseFloat(param.value));
            
            return (
              <div key={param.key} className="text-center">
                <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                  param.color === 'blue' ? 'bg-blue-100' :
                  param.color === 'green' ? 'bg-green-100' :
                  param.color === 'red' ? 'bg-red-100' : 'bg-gray-100'
                }`}>
                  <Icon className={`w-8 h-8 ${
                    param.color === 'blue' ? 'text-blue-600' :
                    param.color === 'green' ? 'text-green-600' :
                    param.color === 'red' ? 'text-red-600' : 'text-gray-600'
                  }`} />
                </div>
                <h4 className="font-medium text-gray-900 mb-2">{param.label}</h4>
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  {param.value} <span className="text-sm font-normal text-gray-600">{param.unit}</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(status)}`}>
                  {texts[status as keyof typeof texts]}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Trends Chart */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-gray-900 mb-6">{texts.trends}</h3>
        <div className="bg-gray-50 rounded-xl h-64 flex items-center justify-center">
          <div className="text-center">
            <TrendingUp className="w-12 h-12 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-600">Sensor data trends will be displayed here</p>
            <div className="mt-4 flex justify-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full" />
                <span className="text-sm text-gray-600">pH</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-sm text-gray-600">Moisture</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <span className="text-sm text-gray-600">Nitrogen</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <span className="text-sm text-gray-600">Temperature</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Alerts */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-gray-900 mb-6">{texts.recentAlerts}</h3>
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div key={alert.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
              <div className={`p-2 rounded-lg ${
                alert.type === 'warning' ? 'bg-yellow-100' : 'bg-blue-100'
              }`}>
                <AlertTriangle className={`w-5 h-5 ${
                  alert.type === 'warning' ? 'text-yellow-600' : 'text-blue-600'
                }`} />
              </div>
              <div className="flex-1">
                <p className="text-gray-900">{alert.message}</p>
                <p className="text-sm text-gray-500 mt-1">{alert.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Configuration */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-gray-900 mb-6">{texts.settings}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Reading Frequency</label>
            <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500">
              <option>Every 5 minutes</option>
              <option>Every 15 minutes</option>
              <option>Every 30 minutes</option>
              <option>Every hour</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Alert Threshold</label>
            <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500">
              <option>High sensitivity</option>
              <option>Medium sensitivity</option>
              <option>Low sensitivity</option>
            </select>
          </div>
        </div>
        
        <div className="mt-6 flex items-center space-x-4">
          <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
            Save Settings
          </button>
          <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
            Reset to Default
          </button>
        </div>
      </div>
    </div>
  );
}