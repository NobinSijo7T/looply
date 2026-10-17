import React, { useState, useEffect, useRef } from 'react';
import type { Activity } from '../../types';
import { Button } from '../common/Button';
import {
  X,
  ArrowLeft,
  Eye,
  EyeOff,
  AlertCircle,
  WifiOff,
  ShieldCheck,
} from 'lucide-react';

interface RegistrationModalProps {
  activity: Activity | null;
  isOpen: boolean;
  forceNetworkError?: boolean;
  onClose: () => void;
  onBack: () => void;
  onSuccess: () => void;
  onOpenSignIn: () => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  activity,
  isOpen,
  forceNetworkError = false,
  onClose,
  onBack,
  onSuccess,
  onOpenSignIn,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [networkError, setNetworkError] = useState(false);

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Focus email input on open
      const timer = setTimeout(() => {
        emailInputRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    } else {
      // Reset sensitive credentials when dismissed
      setEmail('');
      setPassword('');
      setEmailError('');
      setPasswordError('');
      setNetworkError(false);
      setIsLoading(false);
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const validateEmail = (val: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!val.trim()) {
      return 'Please enter your email address.';
    }
    if (!emailRegex.test(val.trim())) {
      return 'Please enter a valid email address.';
    }
    return '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');
    setNetworkError(false);

    const errEmail = validateEmail(email);
    if (errEmail) {
      setEmailError(errEmail);
      emailInputRef.current?.focus();
      return;
    }

    if (password.length < 8) {
      setPasswordError('Your password needs at least 8 characters.');
      passwordInputRef.current?.focus();
      return;
    }

    setIsLoading(true);

    // Simulate in-memory registration call
    setTimeout(() => {
      setIsLoading(false);

      if (forceNetworkError) {
        // Trigger simulated network failure for reviewer evaluation
        setNetworkError(true);
        return;
      }

      // Success path
      onSuccess();
    }, 750);
  };

  if (!isOpen || !activity) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#17183F]/60 backdrop-blur-xs animate-in fade-in duration-200 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="registration-title"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-[#E6E7EF] relative animate-in zoom-in-95 duration-200 my-8 text-left"
      >
        {/* Top Navigation Row: Back and Close */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#73758A] hover:text-[#17183F] p-1.5 rounded-lg hover:bg-[#FAFAFC] transition-colors cursor-pointer"
            aria-label="Back to activity explanation"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>

          <div className="flex items-center gap-1.5">
            <img src="/logo_violet.png" alt="Looply Logo" className="w-4 h-4 object-contain" />
            <span className="font-heading font-extrabold text-xs text-[#17183F]">looply</span>
          </div>

          <button
            onClick={onClose}
            className="text-[#73758A] hover:text-[#17183F] p-1.5 rounded-full hover:bg-[#FAFAFC] transition-colors cursor-pointer"
            aria-label="Close registration modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Selected Activity Context Pill */}
        <div className="bg-[#FAFAFC] rounded-2xl p-2.5 border border-[#E6E7EF] flex gap-3 items-center mb-5">
          <img
            src={activity.image}
            alt={activity.title}
            className="w-12 h-12 rounded-xl object-cover shrink-0"
          />
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-[#6F86F8] uppercase tracking-wider">
                Saving: {activity.category}
              </span>
              <span className="text-[10px] text-[#73758A]">{activity.duration}</span>
            </div>
            <h4 className="font-bold text-xs text-[#17183F] truncate">
              {activity.title}
            </h4>
          </div>
        </div>

        {/* NETWORK ERROR STATE */}
        {networkError ? (
          <div className="space-y-4 py-2 animate-in fade-in">
            <div className="w-12 h-12 rounded-2xl bg-[#FFF1F2] border border-[#FECDD3] flex items-center justify-center text-[#D94A58] mb-3">
              <WifiOff className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-[#17183F] font-heading">
              We couldn't confirm your registration.
            </h3>
            <p className="text-sm text-[#73758A] leading-relaxed">
              Check your connection and try again, or sign in if you may already have an account.
            </p>

            <div className="pt-3 flex flex-col gap-2.5">
              <Button
                variant="primary"
                size="md"
                onClick={handleSubmit}
                className="w-full"
              >
                Try again
              </Button>
              <Button
                variant="outline"
                size="md"
                onClick={onOpenSignIn}
                className="w-full"
              >
                Sign in
              </Button>
            </div>
          </div>
        ) : (
          /* STANDARD REGISTRATION FORM */
          <>
            <div className="mb-5">
              <h3
                id="registration-title"
                className="text-2xl font-bold text-[#17183F] font-heading mb-1.5"
              >
                Save it for later.
              </h3>
              <p className="text-sm text-[#73758A] leading-relaxed">
                Create your free account to keep your favourite activities in one place.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Email field */}
              <div>
                <label
                  htmlFor="register-email"
                  className="block text-xs font-semibold text-[#17183F] mb-1.5"
                >
                  Email address
                </label>
                <input
                  ref={emailInputRef}
                  id="register-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) setEmailError('');
                  }}
                  placeholder="name@example.com"
                  autoComplete="email"
                  className={`w-full px-3.5 py-2.5 rounded-xl text-sm border bg-[#FAFAFC] text-[#202139] placeholder-[#9CA3AF] transition-all focus:bg-white focus:outline-none focus:ring-2 ${
                    emailError
                      ? 'border-[#D94A58] focus:ring-[#D94A58]/20 focus:border-[#D94A58]'
                      : 'border-[#E6E7EF] focus:ring-[#6F86F8]/20 focus:border-[#6F86F8]'
                  }`}
                  aria-invalid={!!emailError}
                  aria-describedby={emailError ? 'email-error-msg' : undefined}
                />
                {emailError && (
                  <p
                    id="email-error-msg"
                    className="text-xs text-[#D94A58] mt-1.5 flex items-center gap-1 font-medium"
                  >
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{emailError}</span>
                  </p>
                )}
              </div>

              {/* Password field */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label
                    htmlFor="register-password"
                    className="block text-xs font-semibold text-[#17183F]"
                  >
                    Password
                  </label>
                  <span className="text-[11px] text-[#73758A]">Min. 8 characters</span>
                </div>
                <div className="relative">
                  <input
                    ref={passwordInputRef}
                    id="register-password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (passwordError) setPasswordError('');
                    }}
                    placeholder="Create a password"
                    autoComplete="new-password"
                    className={`w-full px-3.5 py-2.5 pr-10 rounded-xl text-sm border bg-[#FAFAFC] text-[#202139] placeholder-[#9CA3AF] transition-all focus:bg-white focus:outline-none focus:ring-2 ${
                      passwordError
                        ? 'border-[#D94A58] focus:ring-[#D94A58]/20 focus:border-[#D94A58]'
                        : 'border-[#E6E7EF] focus:ring-[#6F86F8]/20 focus:border-[#6F86F8]'
                    }`}
                    aria-invalid={!!passwordError}
                    aria-describedby={
                      passwordError ? 'password-error-msg' : undefined
                    }
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#73758A] hover:text-[#17183F] p-0.5 rounded cursor-pointer"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Inline password validation error */}
                {passwordError && (
                  <div id="password-error-msg" className="mt-2 space-y-0.5">
                    <p className="text-xs text-[#D94A58] font-semibold flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{passwordError}</span>
                    </p>
                    <p className="text-[11px] text-[#73758A] pl-4.5">
                      Update your password and try again.
                    </p>
                  </div>
                )}
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  isLoading={isLoading}
                  className="w-full text-center"
                >
                  Create account
                </Button>
              </div>
            </form>

            {/* Existing user link */}
            <div className="mt-4 text-center">
              <span className="text-xs text-[#73758A]">
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={onOpenSignIn}
                  className="text-[#6F86F8] font-semibold hover:underline cursor-pointer"
                >
                  Sign in
                </button>
              </span>
            </div>

            {/* Prototype reassurance */}
            <div className="mt-5 pt-4 border-t border-[#F0F1F6] flex items-center justify-center gap-1.5 text-[11px] text-[#73758A]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#17865D] shrink-0" />
              <span>In-memory prototype demo. No personal data is stored or transmitted.</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
