import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import ChatInterface from './components/ChatInterface';
import AgentDetail from './components/AgentDetail';
import CommunityAlerts from './components/CommunityAlerts';
import OfflineMode from './components/OfflineMode';
import CropCarePlanner from './components/CropCarePlanner';
import VoiceDiagnosis from './components/VoiceDiagnosis';
import SmartSoilBox from './components/SmartSoilBox';
import Login from './components/Login';
import Profile from './components/Profile';
import Settings from './components/Settings';
import { useTheme } from './contexts/ThemeContext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<any>(null);
  const [activeScreen, setActiveScreen] = useState('dashboard');
  const [language, setLanguage] = useState('en');
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Weather Alert', message: 'Heavy rain expected tomorrow', type: 'warning', read: false },
    { id: 2, title: 'Crop Update', message: 'Time to apply fertilizer', type: 'info', read: false },
    { id: 3, title: 'Market Price', message: 'Wheat prices increased by 5%', type: 'success', read: true },
    { id: 4, title: 'Pest Alert', message: 'Aphid infestation detected nearby', type: 'error', read: false },
    { id: 5, title: 'Government Scheme', message: 'New subsidy available', type: 'info', read: false }
  ]);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleLogin = (user: any) => {
    setUserData(user);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUserData(null);
    setIsLoggedIn(false);
    setActiveScreen('dashboard');
  };

  const handleProfileUpdate = (updatedData: any) => {
    setUserData({ ...userData, ...updatedData });
  };

  // Show login screen if not logged in
  if (!isLoggedIn) {
    return (
      <ThemeProvider>
        <Login 
          language={language}
          onLanguageChange={setLanguage}
          onLogin={handleLogin}
        />
      </ThemeProvider>
    );
  }

  const renderScreen = () => {
    switch (activeScreen) {
      case 'dashboard':
        return <Dashboard language={language} onScreenChange={setActiveScreen} />;
      case 'cropcare':
        return <CropCarePlanner language={language} />;
      case 'diagnosis':
        return <VoiceDiagnosis language={language} />;
      case 'soilbox':
        return <SmartSoilBox language={language} />;
      case 'chat':
        return <ChatInterface language={language} />;
      case 'agents':
        return <AgentDetail language={language} />;
      case 'community':
        return <CommunityAlerts language={language} />;
      case 'offline':
        return <OfflineMode language={language} />;
      case 'profile':
        return (
          <Profile 
            language={language}
            userData={userData}
            onUpdateProfile={handleProfileUpdate}
            onBack={() => setActiveScreen('dashboard')}
          />
        );
      case 'settings':
        return (
          <AppSettings 
            language={language}
            onLanguageChange={setLanguage}
            onBack={() => setActiveScreen('dashboard')}
          />
        );
      default:
        return <Dashboard language={language} />;
    }
  };

  // Wrapper component to access theme context
  const AppSettings = ({ language, onLanguageChange, onBack }: any) => {
    const { theme, toggleTheme } = useTheme();
    return (
      <Settings
        language={language}
        onLanguageChange={onLanguageChange}
        theme={theme}
        onThemeChange={toggleTheme}
        onBack={onBack}
      />
    );
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col transition-colors duration-300">
        <Header
          language={language}
          onLanguageChange={setLanguage}
          isOnline={isOnline}
          onMenuToggle={() => setIsNavOpen(!isNavOpen)}
          notifications={notifications}
          userData={userData}
          onProfileClick={() => setActiveScreen('profile')}
          onSettingsClick={() => setActiveScreen('settings')}
          onLogout={handleLogout}
        />
        
        <div className="flex flex-1 overflow-hidden">
          <Navigation
            activeScreen={activeScreen}
            onScreenChange={setActiveScreen}
            language={language}
            isOpen={isNavOpen}
            onClose={() => setIsNavOpen(false)}
          />
          
          <main className="flex-1 overflow-y-auto">
            {renderScreen()}
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;