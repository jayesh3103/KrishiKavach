import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, MicOff, Volume2, VolumeX, Bot, User, Languages } from 'lucide-react';

interface ChatInterfaceProps {
  language: string;
}

export default function ChatInterface({ language }: ChatInterfaceProps) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: language === 'hi' ? 'नमस्ते! मैं कृषि सहायक हूं। आपकी फसल की समस्या के बारे में पूछिए।' : 
               language === 'mr' ? 'नमस्कार! मी कृषी सहायक आहे. तुमच्या पिकाच्या समस्येबद्दल विचारा.' :
               'Hello! I\'m KrishiCopilot. Ask me about your farming concerns.',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getTexts = () => {
    switch (language) {
      case 'hi':
        return {
          placeholder: 'अपना संदेश टाइप करें...',
          speaking: 'बोल रहा है...',
          listening: 'सुन रहा है...',
          voiceNote: 'आवाज़ रिकॉर्ड करने के लिए दबाएं',
          quickQuestions: [
            'मेरी फसल में कीड़े लग गए हैं',
            'बारिश का पूर्वानुमान क्या है?',
            'बाजार की कीमत क्या है?',
            'ऋण की जानकारी चाहिए'
          ]
        };
      case 'mr':
        return {
          placeholder: 'तुमचा संदेश टाइप करा...',
          speaking: 'बोलत आहे...',
          listening: 'ऐकत आहे...',
          voiceNote: 'आवाज रेकॉर्ड करण्यासाठी दाबा',
          quickQuestions: [
            'माझ्या पिकात कीड लागले आहेत',
            'पावसाचा अंदाज काय आहे?',
            'बाजारातील किंमत काय आहे?',
            'कर्जाची माहिती हवी'
          ]
        };
      default:
        return {
          placeholder: 'Type your message...',
          speaking: 'Speaking...',
          listening: 'Listening...',
          voiceNote: 'Press to record voice',
          quickQuestions: [
            'My crops have pest problems',
            'What\'s the weather forecast?',
            'What are the market prices?',
            'I need loan information'
          ]
        };
    }
  };

  const texts = getTexts();

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user' as const,
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        type: 'bot' as const,
        content: getBotResponse(inputMessage),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (message: string) => {
    const lowerMessage = message.toLowerCase();
    
    if (language === 'hi') {
      if (lowerMessage.includes('कीड') || lowerMessage.includes('pest')) {
        return 'आपकी फसल में कीड़ों की समस्या को देखते हुए, मैं सुझाता हूं कि आप जैविक कीटनाशक का उपयोग करें। नीम का तेल एक अच्छा विकल्प है। क्या आप चाहते हैं कि मैं आपको विस्तृत जानकारी दूं?';
      }
      if (lowerMessage.includes('बारिश') || lowerMessage.includes('weather')) {
        return 'अगले 3 दिनों में हल्की बारिश की संभावना है। आपको अपनी फसल को ढकने की सलाह दी जाती है। क्या आपको और मौसम की जानकारी चाहिए?';
      }
      return 'मैं आपकी समस्या समझ गया हूं। कृपया अधिक विवरण दें ताकि मैं बेहतर सहायता कर सकूं।';
    }
    
    if (language === 'mr') {
      if (lowerMessage.includes('कीड') || lowerMessage.includes('pest')) {
        return 'तुमच्या पिकातील कीडांच्या समस्येवर लक्ष देता, मी सुचवितो की तुम्ही जैविक किटकनाशकाचा वापर करा. कडुनिंबाचे तेल एक चांगला पर्याय आहे. तुम्हाला तपशीलवार माहिती हवी आहे का?';
      }
      if (lowerMessage.includes('पाऊस') || lowerMessage.includes('weather')) {
        return 'पुढील 3 दिवसांत हलका पाऊस पडण्याची शक्यता आहे. तुम्हाला तुमचे पीक झाकून ठेवण्याचा सल्ला दिला जातो. तुम्हाला अधिक हवामान माहिती हवी आहे का?';
      }
      return 'मी तुमची समस्या समजली आहे. कृपया अधिक तपशील द्या जेणेकरून मी उत्तम मदत करू शकेन.';
    }

    // Default English responses
    if (lowerMessage.includes('pest') || lowerMessage.includes('bug')) {
      return 'I understand you have pest issues. I recommend using organic pesticides like neem oil. Would you like detailed application instructions and timing recommendations?';
    }
    if (lowerMessage.includes('weather') || lowerMessage.includes('rain')) {
      return 'Light rainfall is expected in the next 3 days. I suggest covering your crops. Would you like a detailed weather forecast for your area?';
    }
    if (lowerMessage.includes('price') || lowerMessage.includes('market')) {
      return 'Current market prices for wheat: ₹2,450/quintal, Rice: ₹3,200/quintal. Prices are trending upward. Would you like price alerts for specific crops?';
    }
    
    return 'I understand your concern. Please provide more details so I can give you the best farming advice.';
  };

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question);
    handleSendMessage();
  };

  const toggleRecording = () => {
    if (!isRecording) {
      setIsRecording(true);
      // Simulate voice recording with actual feedback
      setTimeout(() => {
        const sampleTexts = {
          hi: 'मेरी गेहूं की फसल में पत्तियां पीली हो रही हैं और कुछ धब्बे भी दिख रहे हैं।',
          mr: 'माझ्या गहूच्या पिकात पाने पिवळी होत आहेत आणि काही डाग दिसत आहेत.',
          en: 'My wheat crop leaves are turning yellow and I can see some spots.'
        };
        setInputMessage(sampleTexts[language as keyof typeof sampleTexts] || sampleTexts.en);
        setIsRecording(false);
      }, 3000);
    } else {
      setIsRecording(false);
    }
  };

  const toggleSpeaking = () => {
    if (!isSpeaking) {
      setIsSpeaking(true);
      // Simulate text-to-speech with actual feedback
      setTimeout(() => {
        setIsSpeaking(false);
      }, 4000);
    } else {
      setIsSpeaking(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Chat Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 transition-colors duration-300">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center animate-pulse">
              <Bot className="w-6 h-6 text-green-600 dark:text-green-300" />
            </div>
            <div>
              <h2 className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                {language === 'hi' ? 'कृषि सहायक' : language === 'mr' ? 'कृषी सहायक' : 'KrishiCopilot'}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">
                {language === 'hi' ? 'ऑनलाइन - हमेशा मदद के लिए तैयार' : 
                 language === 'mr' ? 'ऑनलाइन - नेहमी मदतीसाठी तयार' :
                 'Online - Always ready to help'}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleSpeaking}
              className={`p-2 rounded-lg transition-all duration-200 transform hover:scale-110 ${
                isSpeaking ? 'bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-300 animate-pulse' : 'text-gray-400 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {isSpeaking ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
            </button>
            <button className="p-2 rounded-lg text-gray-400 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 transform hover:scale-110">
              <Languages className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Quick Questions */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 transition-colors duration-300">
        <div className="flex space-x-2 overflow-x-auto">
          {texts.quickQuestions.map((question, index) => (
            <button
              key={index}
              onClick={() => handleQuickQuestion(question)}
              className="flex-shrink-0 px-4 py-2 bg-green-50 dark:bg-green-800 text-green-700 dark:text-green-300 rounded-full text-sm hover:bg-green-100 dark:hover:bg-green-700 transition-all duration-200 transform hover:scale-105"
            >
              {question}
            </button>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex items-end space-x-2 max-w-xs lg:max-w-md ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                message.type === 'user' ? 'bg-blue-100' : 'bg-green-100'
              }`}>
                {message.type === 'user' ? 
                  <User className="w-4 h-4 text-blue-600" /> : 
                  <Bot className="w-4 h-4 text-green-600" />
                }
              </div>
              <div className={`px-4 py-3 rounded-2xl ${
                message.type === 'user' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-white border border-gray-200 text-gray-900'
              }`}>
                <p className="text-sm leading-relaxed">{message.content}</p>
                <p className={`text-xs mt-1 ${
                  message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                }`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          </div>
        ))}
        {isSpeaking && (
          <div className="flex justify-start">
            <div className="flex items-center space-x-2 px-4 py-3 bg-green-50 rounded-2xl">
              <Volume2 className="w-4 h-4 text-green-600 animate-pulse" />
              <span className="text-sm text-green-700">{texts.speaking}</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 transition-colors duration-300">
        {isRecording && (
          <div className="mb-4 flex items-center justify-center space-x-2 text-red-600 dark:text-red-400 animate-pulse">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            <span className="text-sm">{texts.listening}</span>
          </div>
        )}
        <div className="flex items-center space-x-3">
          <button
            onClick={toggleRecording}
            className={`p-3 rounded-full transition-all duration-200 transform hover:scale-110 ${
              isRecording 
                ? 'bg-red-500 text-white animate-pulse scale-110' 
                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
            title={texts.voiceNote}
          >
            {isRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
          </button>
          <div className="flex-1 relative">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder={texts.placeholder}
              className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
            />
          </div>
          <button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim()}
            className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-110 disabled:hover:scale-100"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}