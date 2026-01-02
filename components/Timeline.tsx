
import React from 'react';

export const Timeline: React.FC<{ currentStep: number }> = ({ currentStep }) => {
  const steps = [
    { label: 'Logger', icon: <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /> },
    { label: 'Verify', icon: <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /> },
    { label: 'Review', icon: <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /> },
    { label: 'Settled', icon: <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> }
  ];

  return (
    <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm overflow-x-auto no-scrollbar">
      <div className="min-w-[500px] flex items-center justify-between relative px-4">
        {/* Track Line */}
        <div className="absolute top-[28px] left-[60px] right-[60px] h-1.5 bg-slate-50 rounded-full z-0 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-sky-500 to-sky-400 transition-all duration-1000 ease-out"
            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          />
        </div>

        {steps.map((step, idx) => {
          const isDone = idx < currentStep;
          const isCurrent = idx === currentStep;
          
          return (
            <div key={idx} className="relative z-20 flex flex-col items-center gap-4 group">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-xl ${
                isDone 
                  ? 'bg-sky-500 text-white shadow-sky-200' 
                  : isCurrent 
                    ? 'bg-white border-4 border-sky-500 text-sky-600 scale-110 shadow-sky-100' 
                    : 'bg-white border-2 border-slate-50 text-slate-200'
              }`}>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  {isDone ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  ) : step.icon}
                </svg>
              </div>
              <div className="flex flex-col items-center">
                <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${
                  isCurrent ? 'text-sky-600' : isDone ? 'text-slate-900' : 'text-slate-300'
                }`}>
                  {step.label}
                </span>
                {isCurrent && <div className="w-1 h-1 bg-sky-500 rounded-full mt-1 animate-ping"></div>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
