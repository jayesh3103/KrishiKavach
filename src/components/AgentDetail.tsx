import React, { useState } from 'react';
import { Shield, Camera, Upload, TrendingUp, AlertTriangle, MapPin, Calendar, Activity, X } from 'lucide-react';

interface AgentDetailProps {
  language: string;
}

export default function AgentDetail({ language }: AgentDetailProps) {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [showCamera, setShowCamera] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [cameraStream, setCameraStream] = useState<MediaStream | null>(null);

  const getTexts = () => {
    switch (language) {
      case 'hi':
        return {
          title: 'कीट गश्ती - सुरक्षा एजेंट',
          subtitle: 'फसल कीट निगरानी और सुरक्षा प्रणाली',
          tabs: {
            overview: 'अवलोकन',
            detection: 'पहचान',
            history: 'इतिहास',
            settings: 'सेटिंग्स'
          },
          status: 'वर्तमान स्थिति',
          safe: 'सुरक्षित',
          threatLevel: 'खतरे का स्तर',
          low: 'कम',
          lastScan: 'अंतिम स्कैन',
          uploadImage: 'तस्वीर अपलोड करें',
          takePhoto: 'फोटो लें',
          recentDetections: 'हाल की पहचान',
          pestMap: 'कीट मानचित्र',
          noThreats: 'कोई खतरा नहीं मिला',
          capturePhoto: 'फोटो खींचें',
          closeCamera: 'कैमरा बंद करें'
        };
      case 'mr':
        return {
          title: 'कीड गस्त - संरक्षण एजेंट',
          subtitle: 'पीक कीड निरीक्षण आणि संरक्षण प्रणाली',
          tabs: {
            overview: 'आढावा',
            detection: 'ओळख',
            history: 'इतिहास',
            settings: 'सेटिंग्ज'
          },
          status: 'सध्याची स्थिती',
          safe: 'सुरक्षित',
          threatLevel: 'धोक्याची पातळी',
          low: 'कमी',
          lastScan: 'शेवटचे स्कॅन',
          uploadImage: 'प्रतिमा अपलोड करा',
          takePhoto: 'फोटो घ्या',
          recentDetections: 'अलीकडील ओळख',
          pestMap: 'कीड नकाशा',
          noThreats: 'कोणता धोका आढळला नाही',
          capturePhoto: 'फोटो काढा',
          closeCamera: 'कॅमेरा बंद करा'
        };
      default:
        return {
          title: 'Pest Patrol - Protection Agent',
          subtitle: 'Crop pest monitoring and protection system',
          tabs: {
            overview: 'Overview',
            detection: 'Detection',
            history: 'History',
            settings: 'Settings'
          },
          status: 'Current Status',
          safe: 'Safe',
          threatLevel: 'Threat Level',
          low: 'Low',
          lastScan: 'Last Scan',
          uploadImage: 'Upload Image',
          takePhoto: 'Take Photo',
          recentDetections: 'Recent Detections',
          pestMap: 'Pest Map',
          noThreats: 'No threats detected',
          capturePhoto: 'Capture Photo',
          closeCamera: 'Close Camera'
        };
    }
  };

  const texts = getTexts();

  const tabs = [
    { id: 'overview', label: texts.tabs.overview, icon: Activity },
    { id: 'detection', label: texts.tabs.detection, icon: Camera },
    { id: 'history', label: texts.tabs.history, icon: Calendar },
    { id: 'settings', label: texts.tabs.settings, icon: Shield }
  ];

  const recentDetections = [
    { 
      id: 1, 
      pest: 'Brown Planthopper', 
      confidence: 94, 
      location: 'Field A, Zone 3', 
      time: '2 hours ago',
      severity: 'medium' 
    },
    { 
      id: 2, 
      pest: 'Leaf Folder', 
      confidence: 87, 
      location: 'Field B, Zone 1', 
      time: '5 hours ago',
      severity: 'low' 
    },
    { 
      id: 3, 
      pest: 'Stem Borer', 
      confidence: 92, 
      location: 'Field A, Zone 2', 
      time: '1 day ago',
      severity: 'high' 
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-700 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const handleTakePhoto = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          facingMode: 'environment',
          width: { ideal: 1280 },
          height: { ideal: 720 }
        } 
      });
      setCameraStream(stream);
      setShowCamera(true);
    } catch (error) {
      console.error('Error accessing camera:', error);
      alert('Camera access denied or not available. Please check permissions.');
    }
  };

  const handleCapturePhoto = () => {
    if (cameraStream) {
      const video = document.getElementById('agent-camera-video') as HTMLVideoElement;
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
        
        alert('Photo captured! AI analysis will begin shortly.');
      }
    }
  };

  const handleCloseCamera = () => {
    if (cameraStream) {
      cameraStream.getTracks().forEach(track => track.stop());
      setCameraStream(null);
    }
    setShowCamera(false);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCapturedImage(e.target?.result as string);
        alert('Image uploaded! AI analysis will begin shortly.');
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
            <Shield className="w-8 h-8 text-green-600" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{texts.title}</h1>
            <p className="text-gray-600">{texts.subtitle}</p>
          </div>
        </div>
        
        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-green-100 rounded-xl p-4 border border-green-200">
            <div className="text-sm text-green-600 font-medium">{texts.status}</div>
            <div className="text-xl font-bold text-green-700">{texts.safe}</div>
          </div>
          <div className="bg-yellow-100 rounded-xl p-4 border border-yellow-200">
            <div className="text-sm text-yellow-600 font-medium">{texts.threatLevel}</div>
            <div className="text-xl font-bold text-yellow-700">{texts.low}</div>
          </div>
          <div className="bg-blue-100 rounded-xl p-4 border border-blue-200">
            <div className="text-sm text-blue-600 font-medium">{texts.lastScan}</div>
            <div className="text-xl font-bold text-blue-700">15 min ago</div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 whitespace-nowrap transition-colors ${
                  selectedTab === tab.id
                    ? 'bg-green-50 text-green-700 border-b-2 border-green-500'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      {selectedTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Pest Map */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4">{texts.pestMap}</h3>
            <div className="bg-green-50 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-green-600 mx-auto mb-2" />
                <p className="text-gray-600">Interactive pest detection map</p>
                <div className="mt-4 flex justify-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <span className="text-sm text-gray-600">High Risk</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <span className="text-sm text-gray-600">Medium Risk</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <span className="text-sm text-gray-600">Safe</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Detections */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4">{texts.recentDetections}</h3>
            <div className="space-y-3">
              {recentDetections.map((detection) => (
                <div key={detection.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{detection.pest}</div>
                    <div className="text-sm text-gray-600">{detection.location}</div>
                    <div className="text-xs text-gray-500">{detection.time}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900">{detection.confidence}%</div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getSeverityColor(detection.severity)}`}>
                      {detection.severity}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedTab === 'detection' && (
        <div className="space-y-6">
          {/* Upload Section */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4">Pest Detection Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex items-center justify-center space-x-3 p-6 bg-green-50 border-2 border-dashed border-green-200 rounded-xl hover:bg-green-100 transition-colors cursor-pointer">
                <Upload className="w-6 h-6 text-green-600" />
                <span className="font-medium text-green-700">{texts.uploadImage}</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
              <button 
                onClick={handleTakePhoto}
                className="flex items-center justify-center space-x-3 p-6 bg-blue-50 border-2 border-dashed border-blue-200 rounded-xl hover:bg-blue-100 transition-colors"
              >
                <Camera className="w-6 h-6 text-blue-600" />
                <span className="font-medium text-blue-700">{texts.takePhoto}</span>
              </button>
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
                  id="agent-camera-video"
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
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 animate-fadeIn">
              <h3 className="font-semibold text-gray-900 mb-4">Captured Image</h3>
              <img
                src={capturedImage}
                alt="Captured for analysis"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>
          )}

          {/* Analysis Results */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4">Analysis Results</h3>
            <div className="text-center py-8">
              <AlertTriangle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">{texts.noThreats}</p>
              <p className="text-sm text-gray-500 mt-2">Upload an image to start detection</p>
            </div>
          </div>
        </div>
      )}

      {selectedTab === 'history' && (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-4">Detection History</h3>
          <div className="space-y-4">
            {recentDetections.map((detection) => (
              <div key={detection.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-gray-600" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">{detection.pest}</div>
                  <div className="text-sm text-gray-600">{detection.location} • {detection.time}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-900">{detection.confidence}%</div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getSeverityColor(detection.severity)}`}>
                    {detection.severity}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedTab === 'settings' && (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-4">Agent Settings</h3>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Scan Frequency</label>
              <select className="w-full md:w-64 px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500">
                <option>Every 30 minutes</option>
                <option>Every hour</option>
                <option>Every 3 hours</option>
                <option>Daily</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Alert Threshold</label>
              <select className="w-full md:w-64 px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500">
                <option>High ({'>'}90% confidence)</option>
                <option>Medium ({'>'}75% confidence)</option>
                <option>Low ({'>'}60% confidence)</option>
              </select>
            </div>
            <div className="flex items-center space-x-3">
              <input type="checkbox" id="notifications" className="rounded border-gray-300" />
              <label htmlFor="notifications" className="text-sm text-gray-700">Enable push notifications</label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}