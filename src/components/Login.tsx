import React, { useState } from 'react';
import { Shield, Eye, EyeOff, User, Lock, Phone, MapPin } from 'lucide-react';

interface LoginProps {
  language: string;
  onLanguageChange: (lang: string) => void;
  onLogin: (userData: any) => void;
}

export default function Login({ language, onLanguageChange, onLogin }: LoginProps) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    password: '',
    confirmPassword: '',
    village: '',
    district: ''
  });

  const getTexts = () => {
    switch (language) {
      case 'hi':
        return {
          welcome: 'कृषिकवच में आपका स्वागत है',
          subtitle: 'आपकी फसल की सुरक्षा के लिए AI सहायक',
          login: 'लॉगिन',
          signup: 'साइन अप',
          name: 'नाम',
          phone: 'फोन नंबर',
          password: 'पासवर्ड',
          confirmPassword: 'पासवर्ड की पुष्टि करें',
          village: 'गांव',
          district: 'जिला',
          loginButton: 'लॉगिन करें',
          signupButton: 'खाता बनाएं',
          switchToSignup: 'नया खाता बनाएं',
          switchToLogin: 'पहले से खाता है? लॉगिन करें',
          forgotPassword: 'पासवर्ड भूल गए?',
          orContinueWith: 'या जारी रखें',
          features: {
            pest: 'कीट निगरानी',
            weather: 'मौसम अलर्ट',
            market: 'बाजार की जानकारी',
            expert: 'विशेषज्ञ सलाह'
          }
        };
      case 'mr':
        return {
          welcome: 'कृषिकवचमध्ये आपले स्वागत आहे',
          subtitle: 'तुमच्या पिकाच्या संरक्षणासाठी AI सहायक',
          login: 'लॉगिन',
          signup: 'साइन अप',
          name: 'नाव',
          phone: 'फोन नंबर',
          password: 'पासवर्ड',
          confirmPassword: 'पासवर्डची पुष्टी करा',
          village: 'गाव',
          district: 'जिल्हा',
          loginButton: 'लॉगिन करा',
          signupButton: 'खाते तयार करा',
          switchToSignup: 'नवीन खाते तयार करा',
          switchToLogin: 'आधीच खाते आहे? लॉगिन करा',
          forgotPassword: 'पासवर्ड विसरलात?',
          orContinueWith: 'किंवा सुरू ठेवा',
          features: {
            pest: 'कीड निरीक्षण',
            weather: 'हवामान अलर्ट',
            market: 'बाजार माहिती',
            expert: 'तज्ञ सल्ला'
          }
        };
      default:
        return {
          welcome: 'Welcome to KrishiKavach',
          subtitle: 'AI-powered protection for your crops',
          login: 'Login',
          signup: 'Sign Up',
          name: 'Full Name',
          phone: 'Phone Number',
          password: 'Password',
          confirmPassword: 'Confirm Password',
          village: 'Village',
          district: 'District',
          loginButton: 'Login',
          signupButton: 'Create Account',
          switchToSignup: 'Create new account',
          switchToLogin: 'Already have an account? Login',
          forgotPassword: 'Forgot Password?',
          orContinueWith: 'Or continue with',
          features: {
            pest: 'Pest Monitoring',
            weather: 'Weather Alerts',
            market: 'Market Information',
            expert: 'Expert Advice'
          }
        };
    }
  };

  const texts = getTexts();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate login/signup
    const userData = {
      name: isSignUp ? formData.name : 'राम कुमार',
      phone: formData.phone || '+91-9876543210',
      village: isSignUp ? formData.village : 'पुणे',
      district: isSignUp ? formData.district : 'महाराष्ट्र',
      isLoggedIn: true
    };
    
    onLogin(userData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
    { code: 'mr', name: 'Marathi', nativeName: 'मराठी' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-200 dark:from-gray-900 dark:via-gray-800 dark:to-green-900 flex items-center justify-center p-4 transition-all duration-300">
      {/* Language Selector */}
      <div className="absolute top-4 right-4 z-10">
        <select
          value={language}
          onChange={(e) => onLanguageChange(e.target.value)}
          className="px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg text-sm focus:ring-2 focus:ring-green-500 transition-colors duration-300"
        >
          {languages.map(lang => (
            <option key={lang.code} value={lang.code}>
              {lang.nativeName}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding */}
        <div className="text-center lg:text-left space-y-6 animate-fadeIn">
          <div className="flex items-center justify-center lg:justify-start space-x-4">
            <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center animate-bounce-slow">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                KrishiKavach
              </h1>
              <p className="text-green-600 dark:text-green-400 font-medium">
                कृषिकवच
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {texts.welcome}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              {texts.subtitle}
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            {Object.entries(texts.features).map(([key, value], index) => (
              <div 
                key={key} 
                className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-2">
                    {key === 'pest' && <Shield className="w-4 h-4 text-green-600 dark:text-green-400" />}
                    {key === 'weather' && <MapPin className="w-4 h-4 text-green-600 dark:text-green-400" />}
                    {key === 'market' && <User className="w-4 h-4 text-green-600 dark:text-green-400" />}
                    {key === 'expert' && <Phone className="w-4 h-4 text-green-600 dark:text-green-400" />}
                  </div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 animate-slideUp transition-colors duration-300">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {isSignUp ? texts.signup : texts.login}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {isSignUp ? texts.switchToLogin : texts.switchToSignup}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {isSignUp && (
              <div className="animate-fadeIn">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {texts.name}
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    placeholder={texts.name}
                    required={isSignUp}
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {texts.phone}
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  placeholder="+91-9876543210"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {texts.password}
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="w-full pl-10 pr-12 py-3 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  placeholder={texts.password}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {isSignUp && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadeIn">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {texts.village}
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={formData.village}
                      onChange={(e) => handleInputChange('village', e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      placeholder={texts.village}
                      required={isSignUp}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {texts.district}
                  </label>
                  <input
                    type="text"
                    value={formData.district}
                    onChange={(e) => handleInputChange('district', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    placeholder={texts.district}
                    required={isSignUp}
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              {isSignUp ? texts.signupButton : texts.loginButton}
            </button>

            {!isSignUp && (
              <div className="text-center">
                <button
                  type="button"
                  className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 text-sm font-medium transition-colors duration-200"
                >
                  {texts.forgotPassword}
                </button>
              </div>
            )}

            <div className="text-center">
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 text-sm transition-colors duration-200"
              >
                {isSignUp ? texts.switchToLogin : texts.switchToSignup}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}