import React, { useState } from 'react';
import { AlertTriangle, Users, MapPin, Clock, Filter, Bell, TrendingUp } from 'lucide-react';

interface CommunityAlertsProps {
  language: string;
}

export default function CommunityAlerts({ language }: CommunityAlertsProps) {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const getTexts = () => {
    switch (language) {
      case 'hi':
        return {
          title: 'समुदाय अलर्ट',
          subtitle: 'आसपास के क्षेत्रों से महत्वपूर्ण चेतावनियां और अपडेट',
          filters: {
            all: 'सभी',
            pest: 'कीट',
            weather: 'मौसम',
            market: 'बाजार',
            credit: 'ऋण'
          },
          alertTypes: {
            drought: 'सूखा चेतावनी',
            pestOutbreak: 'कीट प्रकोप',
            loanFraud: 'ऋण धोखाधड़ी',
            priceAlert: 'मूल्य चेतावनी',
            weatherAlert: 'मौसम चेतावनी'
          },
          severity: {
            high: 'उच्च',
            medium: 'मध्यम',
            low: 'कम'
          },
          distance: 'दूरी',
          affectedFarmers: 'प्रभावित किसान'
        };
      case 'mr':
        return {
          title: 'समुदाय अलर्ट',
          subtitle: 'जवळच्या भागातील महत्त्वाच्या सूचना आणि अपडेट',
          filters: {
            all: 'सर्व',
            pest: 'कीड',
            weather: 'हवामान',
            market: 'बाजार',
            credit: 'कर्ज'
          },
          alertTypes: {
            drought: 'दुष्काळ सूचना',
            pestOutbreak: 'कीड प्रादुर्भाव',
            loanFraud: 'कर्ज फसवणूक',
            priceAlert: 'किंमत सूचना',
            weatherAlert: 'हवामान सूचना'
          },
          severity: {
            high: 'उच्च',
            medium: 'मध्यम',
            low: 'कमी'
          },
          distance: 'अंतर',
          affectedFarmers: 'प्रभावित शेतकरी'
        };
      default:
        return {
          title: 'Community Alerts',
          subtitle: 'Important warnings and updates from nearby areas',
          filters: {
            all: 'All',
            pest: 'Pest',
            weather: 'Weather',
            market: 'Market',
            credit: 'Credit'
          },
          alertTypes: {
            drought: 'Drought Warning',
            pestOutbreak: 'Pest Outbreak',
            loanFraud: 'Loan Fraud',
            priceAlert: 'Price Alert',
            weatherAlert: 'Weather Alert'
          },
          severity: {
            high: 'High',
            medium: 'Medium',
            low: 'Low'
          },
          distance: 'Distance',
          affectedFarmers: 'Affected Farmers'
        };
    }
  };

  const texts = getTexts();

  const alerts = [
    {
      id: 1,
      type: 'pest',
      title: texts.alertTypes.pestOutbreak,
      message: 'Brown planthopper infestation reported in multiple fields. Immediate action recommended.',
      location: 'Beed District, Maharashtra',
      distance: '15 km',
      severity: 'high',
      affectedFarmers: 23,
      timestamp: '2 hours ago',
      source: 'Local Agricultural Officer'
    },
    {
      id: 2,
      type: 'weather',
      title: texts.alertTypes.droughtAlert,
      message: 'Water levels critically low. Drought conditions expected to continue for next 15 days.',
      location: 'Aurangabad Region',
      distance: '8 km',
      severity: 'high',
      affectedFarmers: 145,
      timestamp: '4 hours ago',
      source: 'Meteorological Department'
    },
    {
      id: 3,
      type: 'credit',
      title: texts.alertTypes.loanFraud,
      message: 'Fraudulent loan agents targeting farmers. Verify credentials before any transactions.',
      location: 'Pune Rural',
      distance: '12 km',
      severity: 'medium',
      affectedFarmers: 8,
      timestamp: '6 hours ago',
      source: 'Police Advisory'
    },
    {
      id: 4,
      type: 'market',
      title: texts.alertTypes.priceAlert,
      message: 'Wheat prices increased by 12% in local markets. Good time to sell stored grain.',
      location: 'Pune APMC',
      distance: '20 km',
      severity: 'low',
      affectedFarmers: 67,
      timestamp: '8 hours ago',
      source: 'Market Committee'
    },
    {
      id: 5,
      type: 'weather',
      title: texts.alertTypes.weatherAlert,
      message: 'Heavy rainfall expected in next 24 hours. Protect harvested crops from moisture.',
      location: 'Satara District',
      distance: '25 km',
      severity: 'medium',
      affectedFarmers: 89,
      timestamp: '12 hours ago',
      source: 'Weather Bureau'
    }
  ];

  const filters = [
    { id: 'all', label: texts.filters.all, icon: Filter },
    { id: 'pest', label: texts.filters.pest, icon: AlertTriangle },
    { id: 'weather', label: texts.filters.weather, icon: TrendingUp },
    { id: 'market', label: texts.filters.market, icon: TrendingUp },
    { id: 'credit', label: texts.filters.credit, icon: Bell }
  ];

  const filteredAlerts = selectedFilter === 'all' 
    ? alerts 
    : alerts.filter(alert => alert.type === selectedFilter);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-700 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'pest': return <AlertTriangle className="w-5 h-5" />;
      case 'weather': return <TrendingUp className="w-5 h-5" />;
      case 'market': return <TrendingUp className="w-5 h-5" />;
      case 'credit': return <Bell className="w-5 h-5" />;
      default: return <AlertTriangle className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'pest': return 'bg-red-100 text-red-600';
      case 'weather': return 'bg-blue-100 text-blue-600';
      case 'market': return 'bg-green-100 text-green-600';
      case 'credit': return 'bg-yellow-100 text-yellow-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
            <Users className="w-8 h-8 text-blue-600" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{texts.title}</h1>
            <p className="text-gray-600">{texts.subtitle}</p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-red-100 rounded-xl p-4 border border-red-200">
            <div className="text-sm text-red-600 font-medium">High Priority</div>
            <div className="text-xl font-bold text-red-700">2 Active</div>
          </div>
          <div className="bg-yellow-100 rounded-xl p-4 border border-yellow-200">
            <div className="text-sm text-yellow-600 font-medium">Medium Priority</div>
            <div className="text-xl font-bold text-yellow-700">2 Active</div>
          </div>
          <div className="bg-green-100 rounded-xl p-4 border border-green-200">
            <div className="text-sm text-green-600 font-medium">{texts.affectedFarmers}</div>
            <div className="text-xl font-bold text-green-700">332 Total</div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
        <div className="flex space-x-2 overflow-x-auto">
          {filters.map((filter) => {
            const Icon = filter.icon;
            return (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  selectedFilter === filter.id
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{filter.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Alerts Feed */}
      <div className="space-y-4">
        {filteredAlerts.map((alert) => (
          <div key={alert.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start space-x-4">
              {/* Alert Type Icon */}
              <div className={`p-3 rounded-xl ${getTypeColor(alert.type)}`}>
                {getTypeIcon(alert.type)}
              </div>

              {/* Alert Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">{alert.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getSeverityColor(alert.severity)}`}>
                    {texts.severity[alert.severity as keyof typeof texts.severity]}
                  </span>
                </div>
                
                <p className="text-gray-700 mb-3">{alert.message}</p>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{alert.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>{texts.distance}: {alert.distance}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{alert.affectedFarmers} {texts.affectedFarmers.toLowerCase()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{alert.timestamp}</span>
                  </div>
                </div>
                
                <div className="mt-3 text-xs text-gray-500">
                  Source: {alert.source}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredAlerts.length === 0 && (
        <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-100 text-center">
          <AlertTriangle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No alerts found</h3>
          <p className="text-gray-600">No community alerts match your current filter selection.</p>
        </div>
      )}
    </div>
  );
}