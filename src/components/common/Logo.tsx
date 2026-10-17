import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
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
    xl: 'w-14 h-14',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl sm:text-4xl',
  };

  const isDarkBg = variant === 'dark';
  const logoSrc = isDarkBg ? '/logo.png' : '/logo_violet.png';

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <img
        src={logoSrc}
        alt="Looply Logo"
        className={`${iconSizes[size]} object-contain shrink-0 transition-transform duration-200 hover:scale-105`}
      />

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
