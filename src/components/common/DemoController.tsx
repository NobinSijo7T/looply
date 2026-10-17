import React, { useState } from 'react';
import { Wrench, ChevronDown, WifiOff, Bookmark, RotateCcw } from 'lucide-react';

interface DemoControllerProps {
  forceNetworkError: boolean;
  onToggleForceNetworkError: () => void;
  onTriggerSaveFlow: () => void;
  onOpenSavedList: () => void;
  onResetSession: () => void;
  savedCount: number;
}

export const DemoController: React.FC<DemoControllerProps> = ({
  forceNetworkError,
  onToggleForceNetworkError,
  onTriggerSaveFlow,
  onOpenSavedList,
  onResetSession,
  savedCount,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-40 select-none">
      {/* Trigger pill */}
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#17183F] text-white text-xs font-semibold shadow-lg hover:bg-[#202139] border border-[#6F86F8]/30 transition-all hover:scale-105 cursor-pointer"
          title="Reviewer test controls"
        >
          <Wrench className="w-3.5 h-3.5 text-[#6F86F8]" />
          <span>Prototype Tools</span>
          {forceNetworkError && (
            <span className="w-2 h-2 rounded-full bg-[#D94A58] animate-pulse" />
          )}
        </button>
      ) : (
        /* Expanded tool panel */
        <div className="bg-white rounded-2xl p-4 shadow-2xl border border-[#E6E7EF] w-80 text-left animate-in zoom-in-95 duration-150">
          <div className="flex items-center justify-between pb-3 border-b border-[#F0F1F6] mb-3">
            <div className="flex items-center gap-1.5">
              <Wrench className="w-4 h-4 text-[#6F86F8]" />
              <span className="text-xs font-bold text-[#17183F]">
                Reviewer Evaluation Tools
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#73758A] hover:text-[#17183F] p-1 rounded"
              aria-label="Collapse panel"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-[#73758A] leading-relaxed mb-3">
            Use these controls to verify required error, network, and recovery states without leaving the page.
          </p>

          <div className="space-y-2">
            {/* Toggle Network Failure Simulation */}
            <div className="flex items-center justify-between p-2 rounded-xl bg-[#FAFAFC] border border-[#E6E7EF]">
              <div className="flex items-center gap-2">
                <WifiOff
                  className={`w-4 h-4 ${
                    forceNetworkError ? 'text-[#D94A58]' : 'text-[#73758A]'
                  }`}
                />
                <span className="text-xs font-medium text-[#202139]">
                  Simulate Network Error
                </span>
              </div>
              <button
                type="button"
                onClick={onToggleForceNetworkError}
                className={`w-9 h-5 rounded-full transition-colors relative cursor-pointer ${
                  forceNetworkError ? 'bg-[#D94A58]' : 'bg-[#D5D8E8]'
                }`}
                aria-pressed={forceNetworkError}
              >
                <span
                  className={`block w-3.5 h-3.5 rounded-full bg-white transition-transform ${
                    forceNetworkError ? 'translate-x-4.5' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Quick launch save flow */}
            <button
              onClick={() => {
                onTriggerSaveFlow();
                setIsOpen(false);
              }}
              className="w-full text-left p-2 rounded-xl bg-[#EEF1FF] hover:bg-[#E8EBFF] text-[#17183F] text-xs font-medium flex items-center justify-between transition-colors"
            >
              <span>Test Save-to-Register Flow</span>
              <span className="text-[10px] text-[#6F86F8] font-bold">Launch →</span>
            </button>

            {/* Open saved activities */}
            <button
              onClick={() => {
                onOpenSavedList();
                setIsOpen(false);
              }}
              className="w-full text-left p-2 rounded-xl bg-[#FAFAFC] hover:bg-[#EEF1FF] text-[#202139] text-xs font-medium flex items-center justify-between border border-[#E6E7EF] transition-colors"
            >
              <div className="flex items-center gap-1.5">
                <Bookmark className="w-3.5 h-3.5 text-[#6F86F8]" />
                <span>Saved Activities List</span>
              </div>
              <span className="text-[10px] bg-[#6F86F8] text-white px-1.5 py-0.5 rounded-full font-bold">
                {savedCount}
              </span>
            </button>

            {/* Reset session state */}
            <button
              onClick={onResetSession}
              className="w-full text-left p-2 rounded-xl hover:bg-[#FFF1F2] text-[#73758A] hover:text-[#D94A58] text-xs flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Prototype Session</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
