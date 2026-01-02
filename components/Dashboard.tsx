
import React from 'react';
import { InventoryItem } from '../types';

interface DashboardProps {
  items: InventoryItem[];
  onAddClick: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ items, onAddClick }) => {
  const totalValue = items.reduce((acc, item) => acc + item.estimatedValue, 0);
  const totalItems = items.length;
  const receiptsMissing = items.filter(i => i.receiptStatus === 'Missing').length;
  const completionPercent = Math.min(Math.round((totalItems / 15) * 100), 100);

  return (
    <div className="space-y-8">
      {/* Hero Action Section */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl shadow-slate-200">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight tracking-tight">Your recovery starts with a complete list.</h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">We recommend logging at least <span className="text-white font-bold underline decoration-sky-500 underline-offset-4">12-15 items</span> to give adjusters a clear picture of your loss.</p>
            <button 
              onClick={onAddClick}
              className="bg-sky-500 hover:bg-sky-400 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-sky-500/20 transform transition-all active:scale-95 flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
              </svg>
              Add New Item
            </button>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-[2rem] p-8 border border-white/10 flex items-center gap-6">
            <div className="relative w-24 h-24">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-white/10" />
                <circle 
                  cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" 
                  strokeDasharray={251.2}
                  strokeDashoffset={251.2 - (251.2 * completionPercent) / 100}
                  className="text-sky-400 transition-all duration-1000"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-black">{completionPercent}%</span>
              </div>
            </div>
            <div>
              <p className="font-bold text-lg leading-tight">Claim Ready</p>
              <p className="text-slate-400 text-sm">{totalItems} items documented</p>
            </div>
          </div>
        </div>
        
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 blur-[120px] rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 blur-[80px] rounded-full -ml-32 -mb-32"></div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard 
          label="Est. Payout" 
          value={`$${totalValue.toLocaleString()}`} 
          sub="Replacement Value"
          icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
          theme="sky"
        />
        <StatCard 
          label="Items Logged" 
          value={totalItems.toString()} 
          sub="Total Count"
          icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />}
          theme="slate"
        />
        <StatCard 
          label="Missing Docs" 
          value={receiptsMissing.toString()} 
          sub="Requires Attention"
          icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />}
          theme="amber"
          warning={receiptsMissing > 0}
        />
      </div>
    </div>
  );
};

const StatCard = ({ label, value, sub, icon, theme, warning }: { label: string, value: string, sub: string, icon: React.ReactNode, theme: 'sky' | 'amber' | 'slate', warning?: boolean }) => {
  const themes = {
    sky: 'bg-sky-50 text-sky-600 border-sky-100',
    amber: 'bg-amber-50 text-amber-600 border-amber-100',
    slate: 'bg-slate-50 text-slate-600 border-slate-100'
  };

  return (
    <div className={`bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group`}>
      <div className={`w-14 h-14 rounded-2xl ${themes[theme]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {icon}
        </svg>
      </div>
      <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">{label}</p>
      <div className="flex items-baseline gap-2">
        <h4 className="text-3xl font-black text-slate-900 leading-none">{value}</h4>
        {warning && <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>}
      </div>
      <p className="text-xs font-semibold text-slate-400 mt-2">{sub}</p>
    </div>
  );
};
