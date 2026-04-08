import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  FileText, 
  Loader2, 
  ArrowRight, 
  Phone, 
  MessageCircle, 
  X,
  MapPin,
  Clock,
  Send,
  Mail,
  CheckCircle,
  Sun,
  Moon
} from 'lucide-react';

const apiKey = "AIzaSyBThyg7ccOHrRMUno4WqnwJeul-L38fLdI";

const Contact = () => {
  const [projectBrief, setProjectBrief] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // Check for saved preference or system preference
  useEffect(() => {
    const savedMode = localStorage.getItem('contactDarkMode');
    if (savedMode !== null) {
      setDarkMode(savedMode === 'true');
    } else {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(systemPrefersDark);
    }
  }, []);

  // Save preference
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('contactDarkMode', newMode);
  };

  // Gemini API Logic
  const callGemini = async (prompt, systemInstruction = "") => {
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, 
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            systemInstruction: { parts: [{ text: systemInstruction }] },
            generationConfig: {
              temperature: 0.9,
              maxOutputTokens: 1000
            }
          })
        }
      );
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error('API Error:', errorData);
        return `Error: ${errorData.error?.message || 'API request failed'}`;
      }
      
      const data = await response.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text || "No analysis generated";
    } catch (e) { 
      console.error('Network Error:', e);
      return `Error: ${e.message}`; 
    }
  };

  const handleAiAnalyze = async () => {
    if (!projectBrief) return;
    setIsAnalyzing(true);
    const systemPrompt = "Expert structural engineer. Analyze steel bending requirements, material specifications, and provide technical recommendations.";
    const result = await callGemini(`Analyze: ${projectBrief}`, systemPrompt);
    if (result) setAiAnalysis(result);
    setIsAnalyzing(false);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const emailBody = `
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Service Needed: ${formData.service}

Project Details:
${formData.message}

${aiAnalysis ? `AI Analysis: ${aiAnalysis}` : ''}
${projectBrief ? `Project Brief: ${projectBrief}` : ''}
    `;
    
    const mailtoLink = `mailto:wahhababassali246@gmail.com?subject=New Quote Request from ${formData.name}&body=${encodeURIComponent(emailBody)}`;
    
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  const services = [
    "Rebar Cutting & Bending",
    "Stirrups & Links", 
    "Column & Beam Cages",
    "Foundation Mesh",
    "On-Site Installation",
    "Delivery Only"
  ];

  // Dynamic styles based on dark/light mode
  const bgColors = darkMode 
    ? 'bg-zinc-950' 
    : 'bg-gray-50';
  
  const textColors = darkMode 
    ? 'text-white' 
    : 'text-black';
  
  const cardBg = darkMode 
    ? 'bg-zinc-900/80' 
    : 'bg-white/80';
  
  const borderColors = darkMode 
    ? 'border-zinc-800' 
    : 'border-gray-200';
  
  const inputBg = darkMode 
    ? 'bg-zinc-950/50' 
    : 'bg-white';
  
  const inputBorder = darkMode 
    ? 'border-zinc-700' 
    : 'border-gray-300';
  
  const inputText = darkMode 
    ? 'text-white' 
    : 'text-black';
  
  const placeholderColor = darkMode 
    ? 'placeholder-zinc-600' 
    : 'placeholder-gray-400';
  
  const formBg = darkMode 
    ? 'bg-gradient-to-br from-zinc-100 to-zinc-200' 
    : 'bg-gradient-to-br from-white to-gray-100';
  
  const labelColor = darkMode 
    ? 'text-zinc-500' 
    : 'text-gray-500';
  
  const subtitleColor = darkMode 
    ? 'text-zinc-400' 
    : 'text-gray-600';

  return (
    <section id="contact" className={`py-40 ${bgColors} relative overflow-hidden transition-all duration-500`}>
      {/* Animated Background */}
      <div className={`absolute top-0 right-0 w-[800px] h-[800px] ${darkMode ? 'bg-orange-600/5' : 'bg-orange-400/10'} blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 animate-pulse`} />
      <div className={`absolute bottom-0 left-0 w-[600px] h-[600px] ${darkMode ? 'bg-orange-600/3' : 'bg-orange-400/5'} blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2`} />
      <div className={`absolute top-1/2 left-1/2 w-[400px] h-[400px] ${darkMode ? 'bg-orange-600/2' : 'bg-orange-400/5'} blur-[80px] rounded-full -translate-x-1/2 -translate-y-1/2`} />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start relative z-10">
        
        {/* Dark/Light Mode Toggle Button */}
        <div className="absolute top-0 right-6 mt-4">
          <button
            onClick={toggleDarkMode}
            className={`p-3 rounded-full transition-all duration-300 ${
              darkMode 
                ? 'bg-zinc-800 hover:bg-zinc-700 text-yellow-400' 
                : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
            }`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Left Side - Info & AI */}
        <div className="space-y-8">
          <div>
            <h2 className={`text-6xl md:text-7xl font-black uppercase tracking-tighter mb-4 leading-none ${textColors}`}>
              Get A <span className="text-orange-500">Free</span> Quote
            </h2>
            <p className={`${subtitleColor} text-lg`}>Ready to start your project? Let's talk steel.</p>
          </div>
          
          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a href="tel:+233537194106" className={`group ${cardBg} backdrop-blur p-6 rounded-2xl border ${borderColors} hover:border-orange-500 transition-all duration-300`}>
              <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Phone className="text-black" size={24} />
              </div>
              <p className={`text-zinc-400 text-xs uppercase tracking-wider mb-1`}>Call Us</p>
              <p className={`font-bold ${textColors}`}>+233 53 71 94106</p>
            </a>
            
            <a href="https://wa.me/+233241573496" className={`group ${cardBg} backdrop-blur p-6 rounded-2xl border ${borderColors} hover:border-green-500 transition-all duration-300`}>
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="text-black" size={24} />
              </div>
              <p className={`text-zinc-400 text-xs uppercase tracking-wider mb-1`}>WhatsApp</p>
              <p className={`font-bold ${textColors}`}>+233 24 15 73496</p>
            </a>
            
            <a href="mailto:wahhababassali246@gmail.com" className={`group ${cardBg} backdrop-blur p-6 rounded-2xl border ${borderColors} hover:border-orange-500 transition-all duration-300`}>
              <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="text-black" size={24} />
              </div>
              <p className={`text-zinc-400 text-xs uppercase tracking-wider mb-1`}>Email Us</p>
              <p className={`font-bold ${textColors} text-sm break-all`}>wahhababassali246@gmail.com</p>
            </a>
          </div>

          {/* AI Analyzer */}
          <div className={`${cardBg} backdrop-blur-xl border ${borderColors} rounded-3xl p-8`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                <Sparkles className="text-white" size={20} />
              </div>
              <div>
                <h3 className={`font-black uppercase ${textColors}`}>AI Project Analyzer</h3>
                <p className="text-zinc-500 text-xs">Instant technical analysis</p>
              </div>
            </div>
            
            <textarea 
              value={projectBrief}
              onChange={(e) => setProjectBrief(e.target.value)}
              className={`w-full ${inputBg} border ${inputBorder} p-4 rounded-xl text-sm ${inputText} ${placeholderColor} focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all`}
              placeholder="Describe your project (e.g., need 100 pieces of 12mm rebar bent at 90° for foundation...)"
              rows="3"
            />
            
            <button 
              onClick={handleAiAnalyze}
              disabled={isAnalyzing || !projectBrief}
              className="w-full mt-4 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-black font-black uppercase tracking-wider rounded-xl hover:from-orange-500 hover:to-orange-400 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isAnalyzing ? <Loader2 className="animate-spin" size={18} /> : <FileText size={18} />}
              <span>Analyze Project</span>
            </button>
            
            {aiAnalysis && (
              <div className="mt-4 p-4 bg-orange-600/10 border border-orange-600/30 rounded-xl">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-orange-500 text-xs font-bold uppercase">AI Analysis</span>
                  <button onClick={() => setAiAnalysis(null)}><X size={14} className="text-zinc-500" /></button>
                </div>
                <p className={`${subtitleColor} text-sm`}>{aiAnalysis}</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Side - Form */}
        <div className={`${formBg} p-8 md:p-10 rounded-3xl shadow-2xl transition-all duration-500`}>
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-6 animate-bounce">
                <CheckCircle className="text-white" size={48} />
              </div>
              <h3 className={`text-3xl font-black ${darkMode ? 'text-black' : 'text-gray-800'} uppercase mb-4`}>Almost Done!</h3>
              <p className={`${darkMode ? 'text-zinc-600' : 'text-gray-600'} mb-4`}>Your email client will open with the message pre-filled.</p>
              <p className={`${darkMode ? 'text-zinc-500' : 'text-gray-500'} text-sm mb-8`}>Just click send and we'll receive your inquiry at <strong className="text-orange-600">wahhababassali246@gmail.com</strong></p>
              <button 
                onClick={() => setSubmitted(false)} 
                className="text-orange-600 font-bold hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-black ${darkMode ? 'text-black' : 'text-gray-800'} uppercase tracking-tight`}>Send Us A Message</h3>
                <p className={`${darkMode ? 'text-zinc-500' : 'text-gray-500'} text-sm`}>Fill the form, then click send in your email app</p>
              </div>

              <div className="space-y-2">
                <label className={`text-xs font-black uppercase ${labelColor} tracking-wider`}>Full Name</label>
                <input 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={`w-full ${inputBg} border-2 ${inputBorder} p-4 rounded-xl ${inputText} font-bold placeholder-zinc-400 focus:border-orange-500 focus:ring-0 outline-none transition-all`}
                  placeholder="Your name" 
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className={`text-xs font-black uppercase ${labelColor} tracking-wider`}>Phone</label>
                  <input 
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className={`w-full ${inputBg} border-2 ${inputBorder} p-4 rounded-xl ${inputText} font-bold placeholder-zinc-400 focus:border-orange-500 focus:ring-0 outline-none transition-all`}
                    placeholder="+233 XX XXX XXXX" 
                  />
                </div>
                <div className="space-y-2">
                  <label className={`text-xs font-black uppercase ${labelColor} tracking-wider`}>Email</label>
                  <input 
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full ${inputBg} border-2 ${inputBorder} p-4 rounded-xl ${inputText} font-bold placeholder-zinc-400 focus:border-orange-500 focus:ring-0 outline-none transition-all`}
                    placeholder="your@email.com" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className={`text-xs font-black uppercase ${labelColor} tracking-wider`}>Service Needed</label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className={`w-full ${inputBg} border-2 ${inputBorder} p-4 rounded-xl ${inputText} font-bold focus:border-orange-500 focus:ring-0 outline-none transition-all`}
                >
                  <option value="">Select a service...</option>
                  {services.map((s, i) => <option key={i} value={s}>{s}</option>)}
                </select>
              </div>

              <div className="space-y-2">
                <label className={`text-xs font-black uppercase ${labelColor} tracking-wider`}>Project Details</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className={`w-full ${inputBg} border-2 ${inputBorder} p-4 rounded-xl ${inputText} font-bold placeholder-zinc-400 focus:border-orange-500 focus:ring-0 outline-none transition-all resize-none`}
                  placeholder="Tell us about your project..."
                />
              </div>

              <button type="submit" className="w-full py-5 bg-black text-white font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-orange-600 transition-all rounded-xl group">
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
                <span>Open Email Client</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <div className={`flex items-center justify-center gap-6 text-xs ${darkMode ? 'text-zinc-500' : 'text-gray-500'} pt-4`}>
                <div className="flex items-center gap-2">
                  <MapPin size={14} />
                  <span>Accra, Ghana</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} />
                  <span>Mon - Sat: 7AM - 6PM</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;