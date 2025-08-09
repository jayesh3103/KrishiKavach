import React, { useState } from 'react';
import { Mic, MicOff, Volume2, Camera, MapPin, Clock, AlertTriangle, CheckCircle, Stethoscope, Users, Upload, X } from 'lucide-react';

interface VoiceDiagnosisProps {
  language: string;
}

export default function VoiceDiagnosis({ language }: VoiceDiagnosisProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [diagnosisResult, setDiagnosisResult] = useState<any>(null);
  const [recordedText, setRecordedText] = useState('');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isTakingPhoto, setIsTakingPhoto] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [cameraStream, setCameraStream] = useState<MediaStream | null>(null);

  const getTexts = () => {
    switch (language) {
      case 'hi':
        return {
          title: 'आवाज़ आधारित फसल निदान',
          subtitle: 'अपनी फसल की समस्या बताएं, हम समाधान देंगे',
          startRecording: 'रिकॉर्डिंग शुरू करें',
          stopRecording: 'रिकॉर्डिंग बंद करें',
          analyzing: 'विश्लेषण हो रहा है...',
          speakNow: 'अब बोलें',
          tapToSpeak: 'बोलने के लिए दबाएं',
          diagnosis: 'निदान परिणाम',
          confidence: 'विश्वसनीयता',
          recommendations: 'सुझाव',
          nearbyClinic: 'नजदीकी कृषि क्लिनिक',
          symptoms: 'लक्षण',
          possibleCauses: 'संभावित कारण',
          treatment: 'उपचार',
          prevention: 'रोकथाम',
          takePhoto: 'फोटो लें',
          uploadImage: 'तस्वीर अपलोड करें',
          capturePhoto: 'फोटो खींचें',
          retakePhoto: 'दोबारा लें',
          usePhoto: 'इस फोटो का उपयोग करें',
          closeCamera: 'कैमरा बंद करें'
        };
      case 'mr':
        return {
          title: 'आवाज आधारित पीक निदान',
          subtitle: 'तुमच्या पिकाची समस्या सांगा, आम्ही उपाय देऊ',
          startRecording: 'रेकॉर्डिंग सुरू करा',
          stopRecording: 'रेकॉर्डिंग बंद करा',
          analyzing: 'विश्लेषण सुरू आहे...',
          speakNow: 'आता बोला',
          tapToSpeak: 'बोलण्यासाठी दाबा',
          diagnosis: 'निदान परिणाम',
          confidence: 'विश्वसनीयता',
          recommendations: 'शिफारसी',
          nearbyClinic: 'जवळचे कृषी क्लिनिक',
          symptoms: 'लक्षणे',
          possibleCauses: 'संभाव्य कारणे',
          treatment: 'उपचार',
          prevention: 'प्रतिबंध',
          takePhoto: 'फोटो घ्या',
          uploadImage: 'प्रतिमा अपलोड करा',
          capturePhoto: 'फोटो काढा',
          retakePhoto: 'पुन्हा घ्या',
          usePhoto: 'हा फोटो वापरा',
          closeCamera: 'कॅमेरा बंद करा'
        };
      default:
        return {
          title: 'Voice-Based Crop Diagnosis',
          subtitle: 'Describe your crop symptoms and get AI-powered solutions',
          startRecording: 'Start Recording',
          stopRecording: 'Stop Recording',
          analyzing: 'Analyzing...',
          speakNow: 'Speak Now',
          tapToSpeak: 'Tap to Speak',
          diagnosis: 'Diagnosis Results',
          confidence: 'Confidence',
          recommendations: 'Recommendations',
          nearbyClinic: 'Nearby Agri-Clinics',
          symptoms: 'Symptoms',
          possibleCauses: 'Possible Causes',
          treatment: 'Treatment',
          prevention: 'Prevention',
          takePhoto: 'Take Photo',
          uploadImage: 'Upload Image',
          capturePhoto: 'Capture Photo',
          retakePhoto: 'Retake Photo',
          usePhoto: 'Use This Photo',
          closeCamera: 'Close Camera'
        };
    }
  };

  const texts = getTexts();

  const handleRecording = () => {
    if (!isRecording) {
      setIsRecording(true);
      setRecordedText('');
      setDiagnosisResult(null);
      
      // Simulate voice recording
      setTimeout(() => {
        const sampleTexts = {
          hi: 'मेरी गेहूं की फसल में पत्तियां पीली हो रही हैं और कुछ धब्बे भी दिख रहे हैं। पौधे कमजोर लग रहे हैं।',
          mr: 'माझ्या गहूच्या पिकात पाने पिवळी होत आहेत आणि काही डाग दिसत आहेत. झाडे कमकुवत दिसत आहेत.',
          en: 'My wheat crop leaves are turning yellow and I can see some spots. The plants look weak.'
        };
        
        setRecordedText(sampleTexts[language as keyof typeof sampleTexts] || sampleTexts.en);
        setIsRecording(false);
        setIsAnalyzing(true);
        
        // Simulate AI analysis
        setTimeout(() => {
          setDiagnosisResult({
            disease: language === 'hi' ? 'पत्ती धब्बा रोग' : language === 'mr' ? 'पान डाग रोग' : 'Leaf Spot Disease',
            confidence: 87,
            severity: 'medium',
            causes: [
              language === 'hi' ? 'फंगल संक्रमण' : language === 'mr' ? 'बुरशी संसर्ग' : 'Fungal infection',
              language === 'hi' ? 'अधिक नमी' : language === 'mr' ? 'जास्त ओलावा' : 'Excess moisture',
              language === 'hi' ? 'पोषक तत्वों की कमी' : language === 'mr' ? 'पोषक तत्वांची कमतरता' : 'Nutrient deficiency'
            ],
            treatment: [
              language === 'hi' ? 'कॉपर सल्फेट का छिड़काव करें' : language === 'mr' ? 'कॉपर सल्फेटची फवारणी करा' : 'Apply copper sulfate spray',
              language === 'hi' ? 'जल निकासी में सुधार करें' : language === 'mr' ? 'पाणी निचरा सुधारा' : 'Improve drainage',
              language === 'hi' ? 'संतुलित उर्वरक दें' : language === 'mr' ? 'संतुलित खत द्या' : 'Apply balanced fertilizer'
            ],
            prevention: [
              language === 'hi' ? 'बीज उपचार करें' : language === 'mr' ? 'बियाणे उपचार करा' : 'Treat seeds before sowing',
              language === 'hi' ? 'फसल चक्र अपनाएं' : language === 'mr' ? 'पीक चक्र अवलंबा' : 'Follow crop rotation',
              language === 'hi' ? 'नियमित निरीक्षण करें' : language === 'mr' ? 'नियमित तपासणी करा' : 'Regular monitoring'
            ]
          });
          setIsAnalyzing(false);
        }, 3000);
      }, 4000);
    } else {
      setIsRecording(false);
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-700 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const handleTakePhoto = async () => {
    setIsTakingPhoto(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          facingMode: 'environment', // Use back camera on mobile
          width: { ideal: 1280 },
          height: { ideal: 720 }
        } 
      });
      setCameraStream(stream);
      setShowCamera(true);
      setIsTakingPhoto(false);
    } catch (error) {
      console.error('Error accessing camera:', error);
      setIsTakingPhoto(false);
      alert('Camera access denied or not available. Please check permissions.');
    }
  };

  const handleCapturePhoto = () => {
    if (cameraStream) {
      const video = document.getElementById('camera-video') as HTMLVideoElement;
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      
      if (video && context) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0);
        
        const imageDataUrl = canvas.toDataURL('image/jpeg', 0.8);
        setCapturedImage(imageDataUrl);
        
        // Stop camera stream
        cameraStream.getTracks().forEach(track => track.stop());
        setCameraStream(null);
        setShowCamera(false);
      }
    }
  };

  const handleCloseCamera = () => {
    if (cameraStream) {
      cameraStream.getTracks().forEach(track => track.stop());
      setCameraStream(null);
    }
    setShowCamera(false);
    setIsTakingPhoto(false);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCapturedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUsePhoto = () => {
    if (capturedImage) {
      alert('Photo analysis started! AI is processing your crop image...');
      // Here you would typically send the image to your AI analysis service
      setCapturedImage(null);
    }
  };

  const handlePlayAudio = () => {
    setIsPlayingAudio(true);
    // Simulate audio playback
    setTimeout(() => {
      setIsPlayingAudio(false);
    }, 3000);
  };

  const handleFindExperts = () => {
    alert('Connecting you to nearby agricultural experts...');
  };

  const nearbyClinic = {
    name: language === 'hi' ? 'कृषि विज्ञान केंद्र' : language === 'mr' ? 'कृषी विज्ञान केंद्र' : 'Krishi Vigyan Kendra',
    distance: '2.5 km',
    phone: '+91-9876543210',
    address: language === 'hi' ? 'मुख्य बाजार, पुणे' : language === 'mr' ? 'मुख्य बाजार, पुणे' : 'Main Market, Pune'
  };

  return (
    <div className="p-4 md:p-6 space-y-6 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-2xl p-6 transform hover:scale-[1.02] transition-all duration-300">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-800 rounded-2xl flex items-center justify-center animate-pulse">
            <Stethoscope className="w-8 h-8 text-blue-600 dark:text-blue-300" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">{texts.title}</h1>
            <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">{texts.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Voice Recording Interface */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 text-center transform hover:scale-[1.01] transition-all duration-300">
        <div className="mb-8">
          <button
            onClick={handleRecording}
            className={`w-32 h-32 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
              isRecording 
                ? 'bg-red-500 text-white animate-pulse shadow-2xl scale-110' 
                : 'bg-blue-500 text-white hover:bg-blue-600 shadow-xl hover:shadow-2xl'
            }`}
          >
            {isRecording ? (
              <MicOff className="w-12 h-12" />
            ) : (
              <Mic className="w-12 h-12" />
            )}
          </button>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">
            {isRecording ? texts.speakNow : texts.tapToSpeak}
          </h3>
          
          {isRecording && (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
              <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            </div>
          )}
          
          {recordedText && !isAnalyzing && !diagnosisResult && (
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 max-w-md mx-auto animate-fadeIn">
              <p className="text-gray-700 dark:text-gray-300 italic transition-colors duration-300">"{recordedText}"</p>
            </div>
          )}
          
          {isAnalyzing && (
            <div className="flex items-center justify-center space-x-3">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500 dark:border-blue-400" />
              <span className="text-gray-600 dark:text-gray-300 transition-colors duration-300">{texts.analyzing}</span>
            </div>
          )}
        </div>
      </div>

      {/* Camera Modal */}
      {showCamera && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative w-full h-full max-w-4xl max-h-4xl">
            <button
              onClick={handleCloseCamera}
              className="absolute top-4 right-4 z-10 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <video
              id="camera-video"
              ref={(video) => {
                if (video && cameraStream) {
                  video.srcObject = cameraStream;
                  video.play();
                }
              }}
              className="w-full h-full object-cover rounded-lg"
              autoPlay
              playsInline
            />
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <button
                onClick={handleCapturePhoto}
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg"
              >
                <Camera className="w-8 h-8 text-gray-800" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Captured Image Preview */}
      {capturedImage && (
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 animate-fadeIn">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Captured Image</h3>
          <div className="relative">
            <img
              src={capturedImage}
              alt="Captured crop"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
            <div className="flex justify-center space-x-4 mt-4">
              <button
                onClick={() => setCapturedImage(null)}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                {texts.retakePhoto}
              </button>
              <button
                onClick={handleUsePhoto}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                {texts.usePhoto}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Diagnosis Results */}
      {diagnosisResult && (
        <div className="space-y-6">
          {/* Main Diagnosis */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">{texts.diagnosis}</h3>
              <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getSeverityColor(diagnosisResult.severity)}`}>
                {diagnosisResult.severity}
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">{texts.symptoms}</h4>
                <p className="text-lg font-semibold text-blue-600 mb-4">{diagnosisResult.disease}</p>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">{texts.confidence}:</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full" 
                      style={{ width: `${diagnosisResult.confidence}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-900">{diagnosisResult.confidence}%</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">{texts.possibleCauses}</h5>
                  <ul className="space-y-1">
                    {diagnosisResult.causes.map((cause: string, index: number) => (
                      <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                        <AlertTriangle className="w-4 h-4 text-yellow-500" />
                        <span>{cause}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Treatment Recommendations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>{texts.treatment}</span>
              </h4>
              <ul className="space-y-3">
                {diagnosisResult.treatment.map((item: string, index: number) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-medium text-green-600">{index + 1}</span>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
                <span>{texts.prevention}</span>
              </h4>
              <ul className="space-y-3">
                {diagnosisResult.prevention.map((item: string, index: number) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-medium text-yellow-600">{index + 1}</span>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Nearby Clinic */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span>{texts.nearbyClinic}</span>
            </h4>
            <div className="bg-blue-50 rounded-xl p-4">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <h5 className="font-medium text-gray-900">{nearbyClinic.name}</h5>
                  <p className="text-sm text-gray-600">{nearbyClinic.address}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{nearbyClinic.distance}</span>
                    </span>
                    <span>{nearbyClinic.phone}</span>
                  </div>
                </div>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-slideUp">
        <button 
          onClick={handleTakePhoto}
          disabled={isTakingPhoto}
          className={`flex items-center justify-center space-x-3 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
            isTakingPhoto ? 'animate-pulse' : ''
          }`}
        >
          <Camera className={`w-6 h-6 text-gray-600 dark:text-gray-300 ${isTakingPhoto ? 'animate-bounce' : ''}`} />
          <span className="font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300">
            {isTakingPhoto ? 'Opening Camera...' : texts.takePhoto}
          </span>
        </button>
        
        <label className="flex items-center justify-center space-x-3 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer">
          <Upload className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          <span className="font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300">
            {texts.uploadImage}
          </span>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />
        </label>
        
        <button 
          onClick={handlePlayAudio}
          disabled={isPlayingAudio}
          className={`flex items-center justify-center space-x-3 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
            isPlayingAudio ? 'animate-pulse' : ''
          }`}
        >
          <Volume2 className={`w-6 h-6 text-gray-600 dark:text-gray-300 ${isPlayingAudio ? 'animate-bounce' : ''}`} />
          <span className="font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300">
            {isPlayingAudio ? 'Playing...' : 'Play Audio'}
          </span>
        </button>
      </div>
      
      <div className="grid grid-cols-1 gap-4 animate-slideUp">
        <button 
          onClick={handleFindExperts}
          className="flex items-center justify-center space-x-3 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          <Users className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          <span className="font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300">Find Experts</span>
        </button>
      </div>
    </div>
  );
}