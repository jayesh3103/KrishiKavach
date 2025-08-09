import React from 'react';
import { WifiOff, Download, MapPin, MessageCircle, AlertTriangle, Clock, Database } from 'lucide-react';

interface OfflineModeProps {
  language: string;
}

export default function OfflineMode({ language }: OfflineModeProps) {
  const getTexts = () => {
    switch (language) {
      case 'hi':
        return {
          title: 'ऑफलाइन मोड',
          subtitle: 'इंटरनेट कनेक्शन के बिना उपलब्ध सुविधाएं',
          availableFeatures: 'उपलब्ध सुविधाएं',
          cachedData: 'सहेजा गया डेटा',
          lastSync: 'अंतिम सिंक',
          syncNow: 'अभी सिंक करें',
          features: {
            maps: {
              title: 'ऑफलाइन मानचित्र',
              description: 'आपके क्षेत्र का सहेजा गया मानचित्र देखें'
            },
            recommendations: {
              title: 'सहेजी गई सिफारिशें',
              description: 'पहले से डाउनलोड की गई कृषि सलाह'
            },
            alerts: {
              title: 'अलर्ट प्लेबैक',
              description: 'हाल की चेतावनियों को फिर से सुनें'
            },
            history: {
              title: 'इतिहास डेटा',
              description: 'पिछले रिकॉर्ड और डेटा देखें'
            }
          },
          dataSize: 'डेटा आकार',
          lastUpdate: 'अंतिम अपडेट',
          downloadMore: 'और डाउनलोड करें'
        };
      case 'mr':
        return {
          title: 'ऑफलाइन मोड',
          subtitle: 'इंटरनेट कनेक्शनशिवाय उपलब्ध सुविधा',
          availableFeatures: 'उपलब्ध सुविधा',
          cachedData: 'साठवलेला डेटा',
          lastSync: 'शेवटचे सिंक',
          syncNow: 'आता सिंक करा',
          features: {
            maps: {
              title: 'ऑफलाइन नकाशे',
              description: 'तुमच्या क्षेत्राचा साठवलेला नकाशा पहा'
            },
            recommendations: {
              title: 'साठवलेल्या शिफारसी',
              description: 'आधीच डाउनलोड केलेला कृषी सल्ला'
            },
            alerts: {
              title: 'अलर्ट प्लेबॅक',
              description: 'अलीकडच्या सूचना पुन्हा ऐका'
            },
            history: {
              title: 'इतिहास डेटा',
              description: 'मागील रेकॉर्ड आणि डेटा पहा'
            }
          },
          dataSize: 'डेटा आकार',
          lastUpdate: 'शेवटचे अपडेट',
          downloadMore: 'अधिक डाउनलोड करा'
        };
      default:
        return {
          title: 'Offline Mode',
          subtitle: 'Features available without internet connection',
          availableFeatures: 'Available Features',
          cachedData: 'Cached Data',
          lastSync: 'Last Sync',
          syncNow: 'Sync Now',
          features: {
            maps: {
              title: 'Offline Maps',
              description: 'View cached maps of your farming area'
            },
            recommendations: {
              title: 'Stored Recommendations',
              description: 'Previously downloaded farming advice'
            },
            alerts: {
              title: 'Alert Playback',
              description: 'Replay recent warnings and notifications'
            },
            history: {
              title: 'Historical Data',
              description: 'View past records and data logs'
            }
          },
          dataSize: 'Data Size',
          lastUpdate: 'Last Update',
          downloadMore: 'Download More'
        };
    }
  };

  const texts = getTexts();

  const offlineFeatures = [
    {
      id: 'maps',
      icon: MapPin,
      title: texts.features.maps.title,
      description: texts.features.maps.description,
      dataSize: '45 MB',
      lastUpdate: '2 hours ago',
      available: true
    },
    {
      id: 'recommendations',
      icon: MessageCircle,
      title: texts.features.recommendations.title,
      description: texts.features.recommendations.description,
      dataSize: '12 MB',
      lastUpdate: '6 hours ago',
      available: true
    },
    {
      id: 'alerts',
      icon: AlertTriangle,
      title: texts.features.alerts.title,
      description: texts.features.alerts.description,
      dataSize: '8 MB',
      lastUpdate: '1 hour ago',
      available: true
    },
    {
      id: 'history',
      icon: Database,
      title: texts.features.history.title,
      description: texts.features.history.description,
      dataSize: '25 MB',
      lastUpdate: '12 hours ago',
      available: true
    }
  ];

  const totalDataSize = offlineFeatures.reduce((total, feature) => {
    const size = parseInt(feature.dataSize);
    return total + size;
  }, 0);

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center">
            <WifiOff className="w-8 h-8 text-gray-600" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{texts.title}</h1>
            <p className="text-gray-600">{texts.subtitle}</p>
          </div>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-blue-100 rounded-xl p-4 border border-blue-200">
            <div className="text-sm text-blue-600 font-medium">{texts.cachedData}</div>
            <div className="text-xl font-bold text-blue-700">{totalDataSize} MB</div>
          </div>
          <div className="bg-green-100 rounded-xl p-4 border border-green-200">
            <div className="text-sm text-green-600 font-medium">{texts.lastSync}</div>
            <div className="text-xl font-bold text-green-700">1 hour ago</div>
          </div>
          <div className="bg-yellow-100 rounded-xl p-4 border border-yellow-200">
            <div className="text-sm text-yellow-600 font-medium">Status</div>
            <div className="text-xl font-bold text-yellow-700">Offline Ready</div>
          </div>
        </div>
      </div>

      {/* Connection Status */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
              <WifiOff className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">No Internet Connection</h3>
              <p className="text-sm text-gray-600">Using cached data and offline features</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            {texts.syncNow}
          </button>
        </div>
      </div>

      {/* Available Features */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-gray-900 mb-6">{texts.availableFeatures}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {offlineFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  feature.available
                    ? 'border-green-200 bg-green-50 hover:bg-green-100'
                    : 'border-gray-200 bg-gray-50 opacity-60'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg ${
                    feature.available ? 'bg-green-100' : 'bg-gray-100'
                  }`}>
                    <Icon className={`w-5 h-5 ${
                      feature.available ? 'text-green-600' : 'text-gray-400'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{feature.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{feature.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{texts.dataSize}: {feature.dataSize}</span>
                      <span>{texts.lastUpdate}: {feature.lastUpdate}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Download More Data */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-gray-900 mb-4">{texts.downloadMore}</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Database className="w-5 h-5 text-gray-600" />
              <div>
                <div className="font-medium text-gray-900">Extended Weather Data</div>
                <div className="text-sm text-gray-600">15-day forecast and historical weather</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600">18 MB</div>
              <button className="text-blue-600 text-sm hover:underline">Download</button>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <MessageCircle className="w-5 h-5 text-gray-600" />
              <div>
                <div className="font-medium text-gray-900">Crop Care Guidelines</div>
                <div className="text-sm text-gray-600">Detailed farming best practices</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600">22 MB</div>
              <button className="text-blue-600 text-sm hover:underline">Download</button>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-gray-600" />
              <div>
                <div className="font-medium text-gray-900">Regional Market Data</div>
                <div className="text-sm text-gray-600">Price trends and market information</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600">8 MB</div>
              <button className="text-blue-600 text-sm hover:underline">Download</button>
            </div>
          </div>
        </div>
      </div>

      {/* Storage Info */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-gray-900 mb-4">Storage Information</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Used Storage</span>
            <span className="font-medium text-gray-900">{totalDataSize} MB</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Available Storage</span>
            <span className="font-medium text-gray-900">128 MB</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full" 
              style={{ width: `${(totalDataSize / (totalDataSize + 128)) * 100}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>Optimize storage for better performance</span>
            <button className="text-blue-600 hover:underline">Clean Cache</button>
          </div>
        </div>
      </div>
    </div>
  );
}