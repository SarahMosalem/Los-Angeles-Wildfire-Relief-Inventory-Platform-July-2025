
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: any) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col md:flex-row antialiased">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex w-72 flex-col bg-white border-r border-slate-100 sticky top-0 h-screen shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
        <div className="p-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-gradient-to-br from-sky-600 to-sky-400 rounded-xl flex items-center justify-center text-white shadow-lg shadow-sky-200">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <div>
              <span className="block font-bold text-slate-900 text-lg leading-tight">LA Recovery</span>
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-widest">Inventory Pro</span>
            </div>
          </div>
          
          <nav className="space-y-2">
            <NavItem 
              active={activeTab === 'overview'} 
              onClick={() => setActiveTab('overview')} 
              icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />}
              label="Overview" 
            />
            <NavItem 
              active={activeTab === 'inventory'} 
              onClick={() => setActiveTab('inventory')} 
              icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />}
              label="Item Logger" 
            />
            <NavItem 
              active={activeTab === 'resources'} 
              onClick={() => setActiveTab('resources')} 
              icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />}
              label="Help Center" 
            />
          </nav>
        </div>

        <div className="mt-auto p-8">
          <div className="bg-sky-50 rounded-2xl p-5 border border-sky-100">
            <div className="flex items-center gap-2 mb-2 text-sky-700">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span className="text-xs font-bold uppercase tracking-wider">Live Support</span>
            </div>
            <p className="text-sm text-sky-800/80 mb-4 leading-snug">Average response: <span className="font-bold text-sky-900">2 mins</span></p>
            <button className="w-full bg-white text-sky-700 font-bold text-xs py-3 rounded-xl border border-sky-200 hover:shadow-md transition-all uppercase tracking-widest">Chat with Adjuster</button>
          </div>
        </div>
      </aside>

      {/* Mobile Sticky Action Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-slate-200 z-[60] px-8 py-4 flex justify-between items-center shadow-[0_-8px_30px_rgb(0,0,0,0.04)]">
        <MobileNavItem active={activeTab === 'overview'} onClick={() => setActiveTab('overview')} icon={<path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />} />
        <div className="relative -top-10">
           <button 
            onClick={() => setActiveTab('inventory')}
            className="w-16 h-16 bg-sky-600 rounded-full flex items-center justify-center text-white shadow-2xl shadow-sky-400 border-4 border-white transform active:scale-95 transition-all"
           >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
            </svg>
           </button>
        </div>
        <MobileNavItem active={activeTab === 'resources'} onClick={() => setActiveTab('resources')} icon={<path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />} />
      </nav>

      <main className="flex-1 min-w-0">
        <header className="md:hidden bg-white px-6 py-5 flex items-center justify-between border-b border-slate-100">
           <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-sky-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">LA</div>
            <span className="font-bold text-slate-900 tracking-tight">Recovery Claims</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </header>
        {children}
      </main>
    </div>
  );
};

const NavItem = ({ active, label, icon, onClick }: { active: boolean, label: string, icon: React.ReactNode, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl font-bold transition-all duration-300 group ${
      active ? 'bg-sky-50 text-sky-700 shadow-sm shadow-sky-100' : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'
    }`}
  >
    <svg className={`w-5 h-5 transition-transform duration-300 ${active ? 'scale-110' : 'group-hover:scale-110'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      {icon}
    </svg>
    <span className="text-sm tracking-tight">{label}</span>
  </button>
);

const MobileNavItem = ({ active, icon, onClick }: { active: boolean, icon: React.ReactNode, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className={`p-2 transition-all ${active ? 'text-sky-600' : 'text-slate-300'}`}
  >
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      {icon}
    </svg>
  </button>
);
