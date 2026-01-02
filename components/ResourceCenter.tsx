
import React from 'react';

export const ResourceCenter: React.FC<{ compact?: boolean }> = ({ compact }) => {
  const tips = [
    {
      title: 'Maximize Your Claim',
      desc: 'Be as specific as possible with models and serial numbers.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    },
    {
      title: 'Save Every Receipt',
      desc: 'Digital copies are accepted by all major adjusters in CA.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    },
    {
      title: 'Don\'t Rush Disposal',
      desc: 'Keep photos of debris if possible before discarding items.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    }
  ];

  return (
    <div className={`space-y-6 ${compact ? '' : 'max-w-4xl'}`}>
      {!compact && (
        <div className="bg-sky-600 p-10 rounded-[3rem] text-white overflow-hidden relative mb-12">
          <div className="relative z-10">
            <h1 className="text-4xl font-extrabold mb-4 leading-tight">Expert Claim Resources</h1>
            <p className="text-sky-100 text-lg max-w-xl">We've partnered with local adjusters to bring you the best tips for a successful recovery claim.</p>
          </div>
          <svg className="absolute top-0 right-0 w-64 h-64 text-white/10 -mr-20 -mt-20" fill="currentColor" viewBox="0 0 20 20">
            <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1a1 1 0 112 0v1a1 1 0 11-2 0zM13 16v-1a1 1 0 112 0v1a1 1 0 11-2 0zM14.5 10a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
          </svg>
        </div>
      )}

      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 space-y-6">
        <h3 className="font-bold text-xl text-slate-800">Pro Recovery Tips</h3>
        <div className="space-y-4">
          {tips.map((tip, idx) => (
            <div key={idx} className="flex gap-5 p-4 rounded-2xl bg-slate-50 hover:bg-sky-50 transition-colors group">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-sky-600 shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {tip.icon}
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-1">{tip.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="pt-6 border-t border-slate-100">
          <button className="w-full py-4 bg-sky-50 text-sky-700 font-bold rounded-2xl hover:bg-sky-100 transition-colors">
            Contact Local Public Adjuster
          </button>
        </div>
      </div>
    </div>
  );
};
