import React from 'react';

interface PhoneFrameProps {
  src: string;
  alt: string;
  className?: string;
  innerClassName?: string;
  priority?: boolean;
  aspectRatio?: string;
  showGlow?: boolean;
  glowColor?: string;
  badge?: string;
  onClick?: () => void;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({
  src,
  alt,
  className = '',
  innerClassName = '',
  showGlow = false,
  glowColor = 'rgba(111, 134, 248, 0.25)',
  badge,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative group inline-block select-none ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {/* Optional ambient colored glow */}
      {showGlow && (
        <div
          className="absolute -inset-3 rounded-[46px] blur-xl opacity-60 transition-opacity duration-300 group-hover:opacity-90 -z-10"
          style={{ background: glowColor }}
        />
      )}

      {/* Outer Phone Chassis */}
      <div className="relative bg-[#17183F] p-2.5 sm:p-3 rounded-[38px] sm:rounded-[44px] shadow-2xl shadow-[#17183F]/25 border-[3px] border-[#2A2B58] transition-all duration-300 group-hover:shadow-3xl group-hover:border-[#6F86F8]/40">
        
        {/* Subtle glass rim highlight */}
        <div className="absolute inset-0 rounded-[35px] sm:rounded-[41px] border border-white/10 pointer-events-none" />

        {/* Screen container */}
        <div className={`relative bg-[#0F1026] rounded-[28px] sm:rounded-[34px] overflow-hidden shadow-inner ${innerClassName}`}>
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="w-full h-auto object-cover block transition-transform duration-500 group-hover:scale-[1.02]"
          />

          {/* Subtle screen light glare across top right */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.12] pointer-events-none" />
        </div>

        {/* Optional floating badge */}
        {badge && (
          <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[#17183F] border border-[#6F86F8]/40 text-white text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full shadow-md whitespace-nowrap z-20">
            {badge}
          </div>
        )}
      </div>
    </div>
  );
};
