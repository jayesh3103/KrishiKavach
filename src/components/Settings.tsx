import React, { useState } from 'react';
import { Settings as SettingsIcon, Bell, Globe, Shield, Moon, Sun, Volume2, Smartphone, Wifi, Database, X } from 'lucide-react';

interface SettingsProps {
  language: string;
  onLanguageChange: (lang: string) => void;
  theme: string;
  onThemeChange: () => void;
  onBack: () => void;
}

export default function Settings({ language, onLanguageChange, theme, onThemeChange, onBack }: SettingsProps) {
  const [notifications, setNotifications] = useState({
    pestAlerts: true,
    weatherWarnings: true,
    marketUpdates: false,
    systemUpdates: true
  });

  const [preferences, setPreferences] = useState({
    voiceEnabled: true,
    autoSync: true,
    offlineMode: false,
    dataUsage: 'medium'
  });

  const getTexts = () => {
    switch (language) {
      case 'hi':
        return {
          settings: 'सेटिंग्स',
          notifications: 'सूचनाएं',
          language: 'भाषा',
          theme: 'थीम',
          privacy: 'गोपनीयता',
          data: 'डेटा',
          about: 'के बारे में',
          back: 'वापस',
          pestAlerts: 'कीट अलर्ट',
          weatherWarnings: 'मौसम चेतावनी',
          marketUpdates: 'बाजार अपडेट',
          systemUpdates: 'सिस्टम अपडेट',
          voiceEnabled: 'आवाज सक्षम',
          autoSync: 'ऑटो सिंक',
          offlineMode: 'ऑफलाइन मोड',
          dataUsage: 'डेटा उपयोग',
          lightTheme: 'लाइट थीम',
          darkTheme: 'डार्क थीम',
          low: 'कम',
          medium: 'मध्यम',
          high: 'उच्च',
          version: 'संस्करण',
          developer: 'डेवलपर',
          support: 'सहायता',
          privacy_policy: 'गोपनीयता नीति',
          terms: 'नियम और शर्तें'
        };
      case 'mr':
        return {
          settings: 'सेटिंग्ज',
          notifications: 'सूचना',
          language: 'भाषा',
          theme: 'थीम',
          privacy: 'गोपनीयता',
          data: 'डेटा',
          about: 'बद्दल',
          back: 'परत',
          pestAlerts: 'कीड अलर्ट',
          weatherWarnings: 'हवामान चेतावणी',
          marketUpdates: 'बाजार अपडेट',
          systemUpdates: 'सिस्टम अपडेट',
          voiceEnabled: 'आवाज सक्षम',
          autoSync: 'ऑटो सिंक',
          offlineMode: 'ऑफलाइन मोड',
          dataUsage: 'डेटा वापर',
          lightTheme: 'लाइट थीम',
          darkTheme: 'डार्क थीम',
          low: 'कमी',
          medium: 'मध्यम',
          high: 'जास्त',
          version: 'आवृत्ती',
          developer: 'डेव्हलपर',
          support: 'सहाय्य',
          privacy_policy: 'गोपनीयता धोरण',
          terms: 'अटी व शर्ती'
        };
      default:
        return {
          settings: 'Settings',
          notifications: 'Notifications',
          language: 'Language',
          theme: 'Theme',
          privacy: 'Privacy',
          data: 'Data',
          about: 'About',
          back: 'Back',
          pestAlerts: 'Pest Alerts',
          weatherWarnings: 'Weather Warnings',
          marketUpdates: 'Market Updates',
          systemUpdates: 'System Updates',
          voiceEnabled: 'Voice Enabled',
          autoSync: 'Auto Sync',
          offlineMode: 'Offline Mode',
          dataUsage: 'Data Usage',
          lightTheme: 'Light Theme',
          darkTheme: 'Dark Theme',
          low: 'Low',
          medium: 'Medium',
          high: 'High',
          version: 'Version',
          developer: 'Developer',
          support: 'Support',
          privacy_policy: 'Privacy Policy',
          terms: 'Terms & Conditions'
        };
    }
  };

  const texts = getTexts();

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
    { code: 'mr', name: 'Marathi', nativeName: 'मराठी' }
  ];

  const toggleNotification = (key: string) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev]
    }));
  };

  const togglePreference = (key: string) => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev]
    }));
  };

  const ToggleSwitch = ({ enabled, onToggle }: { enabled: boolean; onToggle: () => void }) => (
    <button
      onClick={onToggle}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
        enabled ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
          enabled ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );

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
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{texts.settings}</h1>
          <div className="w-20"></div>
        </div>

        {/* Settings Sections */}
        <div className="space-y-6">
          {/* Notifications */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 animate-fadeIn">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                <Bell className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{texts.notifications}</h2>
            </div>
            <div className="space-y-4">
              {Object.entries(notifications).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-300">
                    {texts[key as keyof typeof texts]}
                  </span>
                  <ToggleSwitch enabled={value} onToggle={() => toggleNotification(key)} />
                </div>
              ))}
            </div>
          </div>

          {/* Language & Theme */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Language */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 animate-fadeIn">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                  <Globe className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{texts.language}</h2>
              </div>
              <div className="space-y-3">
                {languages.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => onLanguageChange(lang.code)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                      language === lang.code
                        ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-700'
                        : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    <div className="font-medium">{lang.nativeName}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{lang.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Theme */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 animate-fadeIn">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                  {theme === 'dark' ? (
                    <Moon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  ) : (
                    <Sun className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  )}
                </div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{texts.theme}</h2>
              </div>
              <div className="space-y-3">
                <button
                  onClick={theme === 'dark' ? onThemeChange : undefined}
                  className={`w-full text-left p-3 rounded-lg transition-all duration-200 flex items-center space-x-3 ${
                    theme === 'light'
                      ? 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-700'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <Sun className="w-5 h-5" />
                  <span className="font-medium">{texts.lightTheme}</span>
                </button>
                <button
                  onClick={theme === 'light' ? onThemeChange : undefined}
                  className={`w-full text-left p-3 rounded-lg transition-all duration-200 flex items-center space-x-3 ${
                    theme === 'dark'
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-700'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <Moon className="w-5 h-5" />
                  <span className="font-medium">{texts.darkTheme}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 animate-fadeIn">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Preferences</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Volume2 className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-700 dark:text-gray-300">{texts.voiceEnabled}</span>
                </div>
                <ToggleSwitch enabled={preferences.voiceEnabled} onToggle={() => togglePreference('voiceEnabled')} />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Wifi className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-700 dark:text-gray-300">{texts.autoSync}</span>
                </div>
                <ToggleSwitch enabled={preferences.autoSync} onToggle={() => togglePreference('autoSync')} />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Database className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-700 dark:text-gray-300">{texts.offlineMode}</span>
                </div>
                <ToggleSwitch enabled={preferences.offlineMode} onToggle={() => togglePreference('offlineMode')} />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">{texts.dataUsage}</span>
                <select
                  value={preferences.dataUsage}
                  onChange={(e) => setPreferences(prev => ({ ...prev, dataUsage: e.target.value }))}
                  className="px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-sm focus:ring-2 focus:ring-green-500 transition-colors duration-300"
                >
                  <option value="low">{texts.low}</option>
                  <option value="medium">{texts.medium}</option>
                  <option value="high">{texts.high}</option>
                </select>
              </div>
            </div>
          </div>

          {/* About */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 animate-fadeIn">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                <SettingsIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{texts.about}</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-300">{texts.version}</span>
                <span className="text-gray-900 dark:text-white font-medium">1.0.0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-300">{texts.developer}</span>
                <span className="text-gray-900 dark:text-white font-medium">KrishiKavach Team</span>
              </div>
              <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
                <div className="space-y-2">
                  <button className="w-full text-left text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors duration-200">
                    {texts.support}
                  </button>
                  <button className="w-full text-left text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors duration-200">
                    {texts.privacy_policy}
                  </button>
                  <button className="w-full text-left text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors duration-200">
                    {texts.terms}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}