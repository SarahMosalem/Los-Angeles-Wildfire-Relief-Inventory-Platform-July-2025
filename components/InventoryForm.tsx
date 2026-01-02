
import React, { useState } from 'react';
import { ItemCategory, InventoryItem } from '../types';

interface InventoryFormProps {
  onClose: () => void;
  onSubmit: (item: Omit<InventoryItem, 'id' | 'dateLogged'>) => void;
}

export const InventoryForm: React.FC<InventoryFormProps> = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    category: ItemCategory.ELECTRONICS,
    estimatedValue: '',
    receiptStatus: 'Missing' as 'Uploaded' | 'Missing',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.estimatedValue) return;

    onSubmit({
      name: formData.name,
      category: formData.category,
      estimatedValue: parseFloat(formData.estimatedValue),
      receiptStatus: formData.receiptStatus,
    });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/40 backdrop-blur-md transition-opacity">
      <div className="bg-white w-full max-w-xl rounded-t-[2.5rem] sm:rounded-[3rem] shadow-[0_24px_80px_rgba(0,0,0,0.1)] overflow-hidden animate-slide-up">
        <div className="px-10 py-8 border-b border-slate-50 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Log Lost Property</h2>
            <p className="text-slate-400 text-sm font-medium">Step 1: Essential item info</p>
          </div>
          <button onClick={onClose} className="w-12 h-12 flex items-center justify-center bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-600">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-10 space-y-8">
          <div className="space-y-3">
            <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-1">What did you lose?</label>
            <input 
              required
              autoFocus
              placeholder="e.g., 65-inch Samsung OLED TV"
              className="w-full px-6 py-5 rounded-2xl bg-slate-50 border-2 border-transparent focus:bg-white focus:border-sky-500 outline-none transition-all text-lg font-bold placeholder:text-slate-300 shadow-inner"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-3">
              <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Replacement Value</label>
              <div className="relative">
                <span className="absolute left-6 top-1/2 -translate-y-1/2 text-lg font-bold text-slate-400">$</span>
                <input 
                  required
                  type="number"
                  placeholder="0.00"
                  className="w-full pl-10 pr-6 py-5 rounded-2xl bg-slate-50 border-2 border-transparent focus:bg-white focus:border-sky-500 outline-none transition-all text-lg font-bold shadow-inner"
                  value={formData.estimatedValue}
                  onChange={(e) => setFormData({...formData, estimatedValue: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Category</label>
              <select 
                className="w-full px-6 py-5 rounded-2xl bg-slate-50 border-2 border-transparent focus:bg-white focus:border-sky-500 outline-none transition-all text-lg font-bold shadow-inner appearance-none"
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value as ItemCategory})}
              >
                {Object.values(ItemCategory).map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Proof of Ownership</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <button type="button" className="flex items-center gap-4 p-5 bg-sky-50 text-sky-700 border-2 border-sky-100 rounded-2xl hover:bg-sky-100 hover:border-sky-200 transition-all group">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="font-bold">Take Photo</span>
              </button>
              
              <button 
                type="button" 
                onClick={() => setFormData({...formData, receiptStatus: formData.receiptStatus === 'Uploaded' ? 'Missing' : 'Uploaded'})}
                className={`flex items-center gap-4 p-5 rounded-2xl transition-all border-2 group ${
                  formData.receiptStatus === 'Uploaded' 
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-100' 
                    : 'bg-slate-50 text-slate-400 border-transparent hover:bg-slate-100'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-sm transition-colors ${
                  formData.receiptStatus === 'Uploaded' ? 'bg-white text-emerald-600' : 'bg-white text-slate-300'
                }`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.414a4 4 0 00-5.656-5.656l-6.415 6.414a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                </div>
                <span className="font-bold">{formData.receiptStatus === 'Uploaded' ? 'Attached' : 'Add Receipt'}</span>
              </button>
            </div>
          </div>

          <div className="pt-4 flex gap-4">
            <button 
              type="submit"
              className="flex-1 px-8 py-6 rounded-2xl bg-sky-600 text-white font-black text-lg hover:bg-sky-700 shadow-xl shadow-sky-600/30 transition-all transform active:scale-[0.98]"
            >
              Add to Inventory
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
