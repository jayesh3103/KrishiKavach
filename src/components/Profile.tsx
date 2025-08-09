import React, { useState } from 'react';
import { User, MapPin, Phone, Mail, Calendar, Edit3, Save, X, Camera, Shield, TrendingUp, Award } from 'lucide-react';

interface ProfileProps {
  language: string;
  userData: any;
  onUpdateProfile: (data: any) => void;
  onBack: () => void;
}

export default function Profile({ language, userData, onUpdateProfile, onBack }: ProfileProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    name: userData.name || '',
    phone: userData.phone || '',
    email: userData.email || '',
    village: userData.village || '',
    district: userData.district || '',
    farmSize: userData.farmSize || '',
    crops: userData.crops || ''
  });

  const getTexts = () => {
    switch (language) {
      case 'hi':
        return {
          profile: 'प्रोफ़ाइल',
          editProfile: 'प्रोफ़ाइल संपादित करें',
          personalInfo: 'व्यक्तिगत जानकारी',
          farmingInfo: 'कृषि जानकारी',
          statistics: 'आंकड़े',
          achievements: 'उपलब्धियां',
          name: 'नाम',
          phone: 'फोन नंबर',
          email: 'ईमेल',
          village: 'गांव',
          district: 'जिला',
          farmSize: 'खेत का आकार (एकड़)',
          crops: 'मुख्य फसलें',
          memberSince: 'सदस्य बने',
          totalAlerts: 'कुल अलर्ट',
          alertsResolved: 'हल किए गए अलर्ट',
          farmingScore: 'कृषि स्कोर',
          save: 'सहेजें',
          cancel: 'रद्द करें',
          edit: 'संपादित करें',
          changePhoto: 'फोटो बदलें',
          back: 'वापस',
          badges: {
            earlyAdopter: 'प्रारंभिक अपनाने वाला',
            pestExpert: 'कीट विशेषज्ञ',
            weatherWise: 'मौसम बुद्धिमान'
          }
        };
      case 'mr':
        return {
          profile: 'प्रोफाइल',
          editProfile: 'प्रोफाइल संपादित करा',
          personalInfo: 'वैयक्तिक माहिती',
          farmingInfo: 'शेती माहिती',
          statistics: 'आकडेवारी',
          achievements: 'यश',
          name: 'नाव',
          phone: 'फोन नंबर',
          email: 'ईमेल',
          village: 'गाव',
          district: 'जिल्हा',
          farmSize: 'शेताचा आकार (एकर)',
          crops: 'मुख्य पिके',
          memberSince: 'सदस्य झाले',
          totalAlerts: 'एकूण अलर्ट',
          alertsResolved: 'सोडवलेले अलर्ट',
          farmingScore: 'शेती स्कोअर',
          save: 'जतन करा',
          cancel: 'रद्द करा',
          edit: 'संपादित करा',
          changePhoto: 'फोटो बदला',
          back: 'परत',
          badges: {
            earlyAdopter: 'लवकर स्वीकारणारा',
            pestExpert: 'कीड तज्ञ',
            weatherWise: 'हवामान बुद्धिमान'
          }
        };
      default:
        return {
          profile: 'Profile',
          editProfile: 'Edit Profile',
          personalInfo: 'Personal Information',
          farmingInfo: 'Farming Information',
          statistics: 'Statistics',
          achievements: 'Achievements',
          name: 'Full Name',
          phone: 'Phone Number',
          email: 'Email Address',
          village: 'Village',
          district: 'District',
          farmSize: 'Farm Size (Acres)',
          crops: 'Primary Crops',
          memberSince: 'Member Since',
          totalAlerts: 'Total Alerts',
          alertsResolved: 'Alerts Resolved',
          farmingScore: 'Farming Score',
          save: 'Save',
          cancel: 'Cancel',
          edit: 'Edit',
          changePhoto: 'Change Photo',
          back: 'Back',
          badges: {
            earlyAdopter: 'Early Adopter',
            pestExpert: 'Pest Expert',
            weatherWise: 'Weather Wise'
          }
        };
    }
  };

  const texts = getTexts();

  const handleSave = () => {
    onUpdateProfile(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({
      name: userData.name || '',
      phone: userData.phone || '',
      email: userData.email || '',
      village: userData.village || '',
      district: userData.district || '',
      farmSize: userData.farmSize || '',
      crops: userData.crops || ''
    });
    setIsEditing(false);
  };

  const stats = [
    { label: texts.totalAlerts, value: '47', icon: Shield, color: 'blue' },
    { label: texts.alertsResolved, value: '42', icon: TrendingUp, color: 'green' },
    { label: texts.farmingScore, value: '89%', icon: Award, color: 'yellow' }
  ];

  const badges = [
    { id: 'earlyAdopter', name: texts.badges.earlyAdopter, color: 'blue', earned: true },
    { id: 'pestExpert', name: texts.badges.pestExpert, color: 'green', earned: true },
    { id: 'weatherWise', name: texts.badges.weatherWise, color: 'purple', earned: false }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-200"
          >
            <X className="w-5 h-5" />
            <span>{texts.back}</span>
          </button>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{texts.profile}</h1>
          <div className="w-20"></div>
        </div>

        {/* Profile Header */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 animate-fadeIn">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="relative">
              <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <User className="w-12 h-12 text-green-600 dark:text-green-400" />
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors duration-200 transform hover:scale-110">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <div className="text-center md:text-left flex-1">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{userData.name}</h2>
              <p className="text-gray-600 dark:text-gray-400">{userData.village}, {userData.district}</p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">{texts.memberSince}: January 2024</p>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-200 transform hover:scale-105"
            >
              <Edit3 className="w-4 h-4" />
              <span>{texts.edit}</span>
            </button>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 text-center animate-slideUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center ${
                  stat.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30' :
                  stat.color === 'green' ? 'bg-green-100 dark:bg-green-900/30' :
                  'bg-yellow-100 dark:bg-yellow-900/30'
                }`}>
                  <Icon className={`w-6 h-6 ${
                    stat.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                    stat.color === 'green' ? 'text-green-600 dark:text-green-400' :
                    'text-yellow-600 dark:text-yellow-400'
                  }`} />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Profile Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Personal Information */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 animate-fadeIn">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">{texts.personalInfo}</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{texts.name}</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editData.name}
                    onChange={(e) => setEditData({...editData, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-green-500 transition-all duration-300"
                  />
                ) : (
                  <p className="text-gray-900 dark:text-white">{userData.name}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{texts.phone}</label>
                {isEditing ? (
                  <input
                    type="tel"
                    value={editData.phone}
                    onChange={(e) => setEditData({...editData, phone: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-green-500 transition-all duration-300"
                  />
                ) : (
                  <p className="text-gray-900 dark:text-white">{userData.phone}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{texts.email}</label>
                {isEditing ? (
                  <input
                    type="email"
                    value={editData.email}
                    onChange={(e) => setEditData({...editData, email: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-green-500 transition-all duration-300"
                  />
                ) : (
                  <p className="text-gray-900 dark:text-white">{userData.email || 'ram.kumar@email.com'}</p>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{texts.village}</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.village}
                      onChange={(e) => setEditData({...editData, village: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-green-500 transition-all duration-300"
                    />
                  ) : (
                    <p className="text-gray-900 dark:text-white">{userData.village}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{texts.district}</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.district}
                      onChange={(e) => setEditData({...editData, district: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-green-500 transition-all duration-300"
                    />
                  ) : (
                    <p className="text-gray-900 dark:text-white">{userData.district}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Farming Information */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 animate-fadeIn">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">{texts.farmingInfo}</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{texts.farmSize}</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editData.farmSize}
                    onChange={(e) => setEditData({...editData, farmSize: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-green-500 transition-all duration-300"
                  />
                ) : (
                  <p className="text-gray-900 dark:text-white">{userData.farmSize || '5 acres'}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{texts.crops}</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editData.crops}
                    onChange={(e) => setEditData({...editData, crops: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-green-500 transition-all duration-300"
                  />
                ) : (
                  <p className="text-gray-900 dark:text-white">{userData.crops || 'Wheat, Rice, Cotton'}</p>
                )}
              </div>
            </div>

            {/* Achievements */}
            <div className="mt-6">
              <h4 className="text-md font-semibold text-gray-900 dark:text-white mb-4">{texts.achievements}</h4>
              <div className="flex flex-wrap gap-2">
                {badges.map((badge) => (
                  <div
                    key={badge.id}
                    className={`px-3 py-1 rounded-full text-xs font-medium border transition-all duration-300 ${
                      badge.earned
                        ? badge.color === 'blue' ? 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-700' :
                          badge.color === 'green' ? 'bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-700' :
                          'bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-400 dark:border-purple-700'
                        : 'bg-gray-100 text-gray-500 border-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600 opacity-50'
                    }`}
                  >
                    {badge.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        {isEditing && (
          <div className="flex justify-center space-x-4 animate-fadeIn">
            <button
              onClick={handleSave}
              className="flex items-center space-x-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-200 transform hover:scale-105"
            >
              <Save className="w-4 h-4" />
              <span>{texts.save}</span>
            </button>
            <button
              onClick={handleCancel}
              className="flex items-center space-x-2 px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-all duration-200 transform hover:scale-105"
            >
              <X className="w-4 h-4" />
              <span>{texts.cancel}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}