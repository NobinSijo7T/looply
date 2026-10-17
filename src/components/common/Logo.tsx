import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  size = 'md',
  className = '',
  showText = true,
}) => {
  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  const isDarkBg = variant === 'dark';

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Geometric Loop Mark */}
      <svg
        className={`${iconSizes[size]} transition-transform duration-200 hover:scale-105`}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Soft rounded container */}
        <rect
          width="32"
          height="32"
          rx="9"
          fill={isDarkBg ? 'rgba(111, 134, 248, 0.2)' : '#EEF1FF'}
        />
        {/* Continuous loop path suggesting discovery and return */}
        <path
          d="M10 16C10 12.6863 12.6863 10 16 10C19.3137 10 22 12.6863 22 16C22 19.3137 19.3137 22 16 22C12.6863 22 10 19.3137 10 16Z"
          stroke="#6F86F8"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeDasharray="28 6"
        />
        {/* Centre anchor point */}
        <circle cx="16" cy="16" r="2.75" fill="#6F86F8" />
        {/* Small orbit accent */}
        <circle cx="22" cy="12" r="1.5" fill="#17183F" />
      </svg>

      {showText && (
        <span
          className={`font-heading font-extrabold tracking-tight ${textSizes[size]} ${
            isDarkBg ? 'text-white' : 'text-[#17183F]'
          }`}
        >
          looply
        </span>
      )}
    </div>
  );
};
