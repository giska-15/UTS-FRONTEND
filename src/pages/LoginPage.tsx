import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { Lock, User, RefreshCw, Eye, EyeOff } from "lucide-react";

// Generate random character captcha
const generateCharCaptcha = () => {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
  let captchaText = '';
  for (let i = 0; i < 6; i++) {
    captchaText += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return captchaText;
};

// Generate math captcha with mixed operations
const generateMathCaptcha = () => {
  const operations = [
    { symbol: '+', fn: (a: number, b: number) => a + b },
    { symbol: '-', fn: (a: number, b: number) => a - b },
    { symbol: '×', fn: (a: number, b: number) => a * b },
  ];
  const op = operations[Math.floor(Math.random() * operations.length)];
  const num1 = Math.floor(Math.random() * 10) + 2;
  const num2 = Math.floor(Math.random() * 10) + 2;
  return {
    text: `${num1} ${op.symbol} ${num2} = ?`,
    answer: op.fn(num1, num2)
  };
};

type CaptchaType = 'char' | 'math';

export const LoginPage = () => {
  const [nim, setNim] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [captchaType, setCaptchaType] = useState<CaptchaType>('char');
  const [charCaptcha, setCharCaptcha] = useState(generateCharCaptcha());
  const [mathCaptcha, setMathCaptcha] = useState(generateMathCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const [attempts, setAttempts] = useState(0);
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const refreshCaptcha = () => {
    if (captchaType === 'char') {
      setCharCaptcha(generateCharCaptcha());
    } else {
      setMathCaptcha(generateMathCaptcha());
    }
    setCaptchaInput("");
    setCaptchaError("");
  };

  const switchCaptchaType = () => {
    const newType = captchaType === 'char' ? 'math' : 'char';
    setCaptchaType(newType);
    refreshCaptcha();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate captcha
    let isValid = false;
    if (captchaType === 'char') {
      isValid = captchaInput.toLowerCase() === charCaptcha.toLowerCase();
    } else {
      isValid = parseInt(captchaInput) === mathCaptcha.answer;
    }
    
    if (!isValid) {
      setCaptchaError("Jawaban captcha salah!");
      refreshCaptcha();
      setAttempts(prev => prev + 1);
      return;
    }
    
    if (!nim.trim() || !password.trim()) {
      setError("NIM dan Password harus diisi");
      return;
    }
    
    // UTS credentials
    if (nim === "24090055" && password === "@Giska12345") {
      login(nim);
      navigate("/admin");
    } else {
      setError("NIM atau Password salah");
      setAttempts(prev => prev + 1);
      if (attempts >= 2) {
        // Force new captcha after 3 failed attempts
        refreshCaptcha();
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-900 via-red-800 to-red-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative w-full max-w-md px-6">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-red-900 px-8 py-6 text-center">
            <img
              src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png"
              alt="logo"
              className="h-16 mx-auto mb-3 brightness-0 invert"
            />
            <h2 className="text-2xl font-bold text-white">Admin Panel</h2>
            <p className="text-red-200 text-sm mt-1">Event Management System</p>
          </div>
          
          <div className="px-8 py-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  NIM
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={nim}
                    onChange={(e) => setNim(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent transition-all"
                    placeholder="Masukkan NIM"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock size={18} className="text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent transition-all"
                    placeholder="Masukkan Password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center hover:text-red-900"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Captcha */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Verifikasi Captcha
                  </label>
                  <button
                    type="button"
                    onClick={switchCaptchaType}
                    className="text-xs text-red-900 hover:underline"
                  >
                    {captchaType === 'char' ? 'Ganti ke Matematika' : 'Ganti ke Karakter'}
                  </button>
                </div>
                
                {captchaType === 'char' ? (
                  /* Character Captcha Display */
                  <div className="bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 border border-gray-300 rounded-lg p-4 flex items-center justify-center gap-4">
                    <div className="flex gap-1">
                      {charCaptcha.split('').map((char, i) => (
                        <span 
                          key={i} 
                          className={`text-2xl font-bold tracking-wider transform ${i % 2 === 0 ? 'rotate-[-8deg]' : 'rotate-[8deg]'} ${char === char.toUpperCase() ? 'text-red-900' : 'text-blue-800'}`}
                        >
                          {char}
                        </span>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={refreshCaptcha}
                      className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                      title="Ganti captcha"
                    >
                      <RefreshCw size={18} className="text-gray-600" />
                    </button>
                  </div>
                ) : (
                  /* Math Captcha Display */
                  <div className="bg-gradient-to-r from-red-100 via-red-50 to-red-100 border border-red-200 rounded-lg p-4 flex items-center justify-between gap-4">
                    <span className="text-xl font-bold text-red-900">
                      {mathCaptcha.text}
                    </span>
                    <button
                      type="button"
                      onClick={refreshCaptcha}
                      className="p-2 hover:bg-red-100 rounded-lg transition-colors"
                      title="Ganti captcha"
                    >
                      <RefreshCw size={18} className="text-red-700" />
                    </button>
                  </div>
                )}
                
                <input
                  type="text"
                  value={captchaInput}
                  onChange={(e) => {
                    setCaptchaInput(captchaType === 'char' ? e.target.value.toUpperCase() : e.target.value);
                    setCaptchaError("");
                  }}
                  className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent transition-all"
                  placeholder={captchaType === 'char' ? "Masukkan karakter di atas" : "Masukkan jawaban matematika"}
                  autoComplete="off"
                />
                {captchaError && (
                  <p className="text-red-600 text-sm mt-1">{captchaError}</p>
                )}
              </div>
              
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}
              
              <button
                type="submit"
                className="w-full bg-red-900 text-white py-3 rounded-lg hover:bg-red-800 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Masuk
              </button>
            </form>
          </div>
          
          <div className="bg-gray-50 px-8 py-4 text-center border-t border-gray-100">
            <p className="text-gray-500 text-xs">
              © 2025 INVOFEST. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;