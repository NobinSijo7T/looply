import React, { useState, useEffect } from 'react';
import { Button } from '../common/Button';
import { X, Eye, EyeOff, ShieldCheck, AlertCircle } from 'lucide-react';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const SignInModal: React.FC<SignInModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setEmail('');
      setPassword('');
      setError('');
      setIsLoading(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password.trim()) {
      setError('Please provide your email and password.');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onSuccess();
      onClose();
    }, 600);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#17183F]/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="signin-title"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-[#E6E7EF] relative animate-in zoom-in-95 duration-200 text-left"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#73758A] hover:text-[#17183F] p-1.5 rounded-full hover:bg-[#FAFAFC] transition-colors"
          aria-label="Close sign in modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-3">
          <img src="/logo_violet.png" alt="Looply Logo" className="w-5 h-5 object-contain" />
          <span className="font-heading font-extrabold text-xs text-[#6F86F8] uppercase tracking-wider">
            Looply Account
          </span>
        </div>

        <h3 id="signin-title" className="text-2xl font-bold text-[#17183F] font-heading mb-1.5">
          Welcome back.
        </h3>
        <p className="text-sm text-[#73758A] leading-relaxed mb-5">
          Sign in to access your saved activities and continue discovering.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#17183F] mb-1.5">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              required
              className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-[#E6E7EF] bg-[#FAFAFC] text-[#202139] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6F86F8]/20 focus:border-[#6F86F8]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#17183F] mb-1.5">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full px-3.5 py-2.5 pr-10 rounded-xl text-sm border border-[#E6E7EF] bg-[#FAFAFC] text-[#202139] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6F86F8]/20 focus:border-[#6F86F8]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#73758A] hover:text-[#17183F]"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {error && (
            <p className="text-xs text-[#D94A58] font-medium flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{error}</span>
            </p>
          )}

          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              isLoading={isLoading}
              className="w-full text-center"
            >
              Sign in
            </Button>
          </div>
        </form>

        <div className="mt-5 pt-4 border-t border-[#F0F1F6] flex items-center justify-center gap-1.5 text-[11px] text-[#73758A]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#17865D] shrink-0" />
          <span>Prototype simulation. Any valid-format login will simulate authentication.</span>
        </div>
      </div>
    </div>
  );
};
