
import React, { useState, useEffect, useCallback } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { InventoryForm } from './components/InventoryForm';
import { InventoryTable } from './components/InventoryTable';
import { ResourceCenter } from './components/ResourceCenter';
import { Timeline } from './components/Timeline';
import { InventoryItem, ItemCategory, ClaimStatus } from './types';

const INITIAL_ITEMS: InventoryItem[] = [
  {
    id: '1',
    name: 'MacBook Pro 16"',
    category: ItemCategory.ELECTRONICS,
    estimatedValue: 2499,
    dateLogged: '2024-05-15',
    receiptStatus: 'Uploaded',
    photoUrl: 'https://picsum.photos/seed/laptop/200/200'
  },
  {
    id: '2',
    name: 'Italian Leather Sofa',
    category: ItemCategory.FURNITURE,
    estimatedValue: 1850,
    dateLogged: '2024-05-15',
    receiptStatus: 'Uploaded',
    photoUrl: 'https://picsum.photos/seed/sofa/200/200'
  },
  {
    id: '3',
    name: 'Samsung 4K OLED TV',
    category: ItemCategory.ELECTRONICS,
    estimatedValue: 1200,
    dateLogged: '2024-05-16',
    receiptStatus: 'Missing',
    photoUrl: 'https://picsum.photos/seed/tv/200/200'
  }
];

const App: React.FC = () => {
  const [items, setItems] = useState<InventoryItem[]>(INITIAL_ITEMS);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'inventory' | 'resources'>('overview');
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const addItem = (item: Omit<InventoryItem, 'id' | 'dateLogged'>) => {
    const newItem: InventoryItem = {
      ...item,
      id: Math.random().toString(36).substr(2, 9),
      dateLogged: new Date().toISOString().split('T')[0],
    };
    setItems([newItem, ...items]);
    setIsFormOpen(false);
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 4000);
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Success Toast */}
        {showSuccessToast && (
          <div className="fixed top-6 right-6 z-50 bg-emerald-500 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-bounce">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-semibold text-lg">Item successfully added to your inventory!</span>
          </div>
        )}

        {activeTab === 'overview' && (
          <>
            <section>
              <h1 className="text-2xl font-bold text-slate-800 mb-2">Recovery Dashboard</h1>
              <p className="text-slate-500">Welcome back. Let's get your claim settled.</p>
            </section>
            
            <Timeline currentStep={2} />
            <Dashboard items={items} onAddClick={() => setIsFormOpen(true)} />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <InventoryTable items={items.slice(0, 5)} viewAll={() => setActiveTab('inventory')} />
              </div>
              <div className="lg:col-span-1">
                <ResourceCenter compact />
              </div>
            </div>
          </>
        )}

        {activeTab === 'inventory' && (
          <>
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-slate-800">Your Full Inventory</h1>
              <button 
                onClick={() => setIsFormOpen(true)}
                className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add New Item
              </button>
            </div>
            <InventoryTable items={items} />
          </>
        )}

        {activeTab === 'resources' && (
          <ResourceCenter />
        )}
      </div>

      {isFormOpen && (
        <InventoryForm 
          onClose={() => setIsFormOpen(false)} 
          onSubmit={addItem} 
        />
      )}
    </Layout>
  );
};

export default App;
