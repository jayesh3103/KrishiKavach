import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Bell, 
  User, 
  Settings, 
  LogOut, 
  Globe,
  ChevronDown,
  Wifi,
  WifiOff
} from 'lucide-react';

interface HeaderProps {
  language: string;
  onLanguageChange: (lang: string) => void;
  isOnline: boolean;
  onMenuToggle: () => void;
  notifications: Array<{
    id: string;
    title: string;
    message: string;
    type: 'info' | 'warning' | 'success' | 'error';
    timestamp: string;
    read: boolean;
  }>;
  userData: {
    name: string;
    email: string;
    avatar?: string;
    farmName: string;
  };
  onProfileClick: () => void;
  onSettingsClick: () => void;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  isOnline,
  onMenuToggle,
  notifications,
  userData,
  onProfileClick,
  onSettingsClick,
  onLogout
}) => {
  const { theme, toggleTheme } = useTheme();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);

  const unreadCount = notifications.filter(n => !n.read).length;

  const languages = [
    { code: 'en', name: 'English', native: 'English' },
    { code: 'hi', name: 'Hindi', native: 'हिंदी' },
    { code: 'mr', name: 'Marathi', native: 'मराठी' }
  ];

  const translations = {
    en: {
      notifications: 'Notifications',
      profile: 'Profile',
      settings: 'Settings',
      logout: 'Logout',
      online: 'Online',
      offline: 'Offline'
    },
    hi: {
      notifications: 'सूचनाएं',
      profile: 'प्रोफ़ाइल',
      settings: 'सेटिंग्स',
      logout: 'लॉग आउट',
      online: 'ऑनलाइन',
      offline: 'ऑफलाइन'
    },
    mr: {
      notifications: 'सूचना',
      profile: 'प्रोफाइल',
      settings: 'सेटिंग्ज',
      logout: 'लॉग आउट',
      online: 'ऑनलाइन',
      offline: 'ऑफलाइन'
    }
  };

  const t = translations[language as keyof typeof translations] || translations.en;

  return (
    <header className="bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-700 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Menu and Logo */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onMenuToggle}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-105"
            >
              <Menu className="h-6 w-6" />
            </button>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  KrishiKavach
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  AI Risk Shield
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Controls */}
          <div className="flex items-center space-x-2">
            {/* Online Status */}
            <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800">
              {isOnline ? (
                <Wifi className="h-4 w-4 text-green-500" />
              ) : (
                <WifiOff className="h-4 w-4 text-red-500" />
              )}
              <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
                {isOnline ? t.online : t.offline}
              </span>
            </div>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLanguage(!showLanguage)}
                className="flex items-center space-x-1 px-3 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-105"
              >
                <Globe className="h-5 w-5" />
                <span className="hidden sm:inline text-sm font-medium">
                  {languages.find(l => l.code === language)?.native}
                </span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {showLanguage && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50 animate-fadeIn">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onLanguageChange(lang.code);
                        setShowLanguage(false);
                      }}
                      className={`w-full text-left px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                        language === lang.code ? 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400' : 'text-gray-700 dark:text-gray-300'
                      } ${lang === languages[0] ? 'rounded-t-lg' : ''} ${lang === languages[languages.length - 1] ? 'rounded-b-lg' : ''}`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{lang.native}</span>
                        <span className="text-sm text-gray-500">{lang.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-105"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-105"
              >
                <Bell className="h-5 w-5" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
                    {unreadCount > 9 ? '9+' : unreadCount}
                  </span>
                )}
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50 animate-fadeIn">
                  <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{t.notifications}</h3>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    {notifications.length > 0 ? (
                      notifications.slice(0, 5).map((notification) => (
                        <div
                          key={notification.id}
                          className={`p-4 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                            !notification.read ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                          }`}
                        >
                          <div className="flex items-start space-x-3">
                            <div className={`w-2 h-2 rounded-full mt-2 ${
                              notification.type === 'error' ? 'bg-red-500' :
                              notification.type === 'warning' ? 'bg-yellow-500' :
                              notification.type === 'success' ? 'bg-green-500' :
                              'bg-blue-500'
                            }`} />
                            <div className="flex-1">
                              <p className="font-medium text-gray-900 dark:text-white text-sm">
                                {notification.title}
                              </p>
                              <p className="text-gray-600 dark:text-gray-300 text-xs mt-1">
                                {notification.message}
                              </p>
                              <p className="text-gray-400 text-xs mt-1">
                                {notification.timestamp}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                        <Bell className="h-8 w-8 mx-auto mb-2 opacity-50" />
                        <p>No notifications</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Profile Menu */}
            <div className="relative">
              <button
                onClick={() => setShowProfile(!showProfile)}
                className="flex items-center space-x-2 p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-105"
              >
                {userData.avatar ? (
                  <img
                    src={userData.avatar}
                    alt={userData.name}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                ) : (
                  <div className="h-8 w-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-white" />
                  </div>
                )}
                <span className="hidden sm:inline font-medium">{userData.name}</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {showProfile && (
                <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50 animate-fadeIn">
                  <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-3">
                      {userData.avatar ? (
                        <img
                          src={userData.avatar}
                          alt={userData.name}
                          className="h-12 w-12 rounded-full object-cover"
                        />
                      ) : (
                        <div className="h-12 w-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                          <User className="h-6 w-6 text-white" />
                        </div>
                      )}
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">{userData.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{userData.email}</p>
                        <p className="text-xs text-green-600 dark:text-green-400">{userData.farmName}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="py-2">
                    <button
                      onClick={() => {
                        onProfileClick();
                        setShowProfile(false);
                      }}
                      className="w-full text-left px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center space-x-3"
                    >
                      <User className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-700 dark:text-gray-300">{t.profile}</span>
                    </button>
                    
                    <button
                      onClick={() => {
                        onSettingsClick();
                        setShowProfile(false);
                      }}
                      className="w-full text-left px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center space-x-3"
                    >
                      <Settings className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-700 dark:text-gray-300">{t.settings}</span>
                    </button>
                    
                    <button
                      onClick={() => {
                        onLogout();
                        setShowProfile(false);
                      }}
                      className="w-full text-left px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center space-x-3 text-red-600 dark:text-red-400"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>{t.logout}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;