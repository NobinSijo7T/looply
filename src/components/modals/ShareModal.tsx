import React, { useState, useEffect } from 'react';
import type { Activity } from '../../types';
import { Button } from '../common/Button';
import { X, Copy, Check, Share2 } from 'lucide-react';

interface ShareModalProps {
  activity: Activity | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  activity,
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) setCopied(false);
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !activity) return null;

  const shareUrl = `https://looply.local/activity/${activity.id}`;

  const handleCopy = () => {
    navigator.clipboard?.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#17183F]/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="share-modal-title"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-[#E6E7EF] relative animate-in zoom-in-95 duration-200 text-left"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#73758A] hover:text-[#17183F] p-1.5 rounded-full hover:bg-[#FAFAFC] transition-colors cursor-pointer"
          aria-label="Close share modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 rounded-2xl bg-[#EEF1FF] flex items-center justify-center text-[#6F86F8] mb-4">
          <Share2 className="w-6 h-6" />
        </div>

        <h3 id="share-modal-title" className="text-2xl font-bold text-[#17183F] font-heading mb-1.5">
          Share this discovery
        </h3>
        <p className="text-sm text-[#73758A] leading-relaxed mb-5">
          Send a link to a friend to see if they want to join you for {activity.title}.
        </p>

        {/* Selected activity card preview */}
        <div className="bg-[#FAFAFC] rounded-2xl p-3 border border-[#E6E7EF] flex gap-3 items-center mb-5">
          <img
            src={activity.image}
            alt={activity.title}
            className="w-14 h-14 rounded-xl object-cover shrink-0"
          />
          <div className="min-w-0 flex-1">
            <span className="text-[10px] font-bold text-[#6F86F8] uppercase tracking-wider block">
              {activity.category}
            </span>
            <h4 className="font-bold text-xs text-[#17183F] truncate">
              {activity.title}
            </h4>
            <span className="text-[11px] text-[#73758A]">{activity.duration}</span>
          </div>
        </div>

        {/* Copyable link input */}
        <div className="flex items-center gap-2 mb-4">
          <div className="relative flex-1">
            <input
              type="text"
              readOnly
              value={shareUrl}
              className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-[#FAFAFC] border border-[#E6E7EF] text-[#202139] font-mono select-all focus:outline-none"
            />
          </div>
          <Button
            variant={copied ? 'secondary' : 'primary'}
            size="md"
            onClick={handleCopy}
            icon={copied ? <Check className="w-4 h-4 text-[#17865D]" /> : <Copy className="w-4 h-4" />}
          >
            {copied ? 'Copied' : 'Copy'}
          </Button>
        </div>

        {copied && (
          <p className="text-xs text-[#17865D] font-medium flex items-center gap-1 mb-2">
            <Check className="w-3.5 h-3.5" />
            <span>Link copied to clipboard!</span>
          </p>
        )}

        <p className="text-[11px] text-[#73758A] text-center pt-2">
          Sharing is optional. Friends can browse freely without needing an account.
        </p>
      </div>
    </div>
  );
};
