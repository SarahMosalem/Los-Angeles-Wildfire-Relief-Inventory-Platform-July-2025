
import React from 'react';
import { InventoryItem, ItemCategory } from '../types';

interface InventoryTableProps {
  items: InventoryItem[];
  viewAll?: () => void;
}

const CATEGORY_STYLES: Record<string, string> = {
  [ItemCategory.ELECTRONICS]: 'bg-purple-50 text-purple-600 border-purple-100',
  [ItemCategory.FURNITURE]: 'bg-amber-50 text-amber-600 border-amber-100',
  [ItemCategory.APPAREL]: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  [ItemCategory.KITCHENWARE]: 'bg-blue-50 text-blue-600 border-blue-100',
  [ItemCategory.APPLIANCES]: 'bg-indigo-50 text-indigo-600 border-indigo-100',
  [ItemCategory.PERSONAL_EFFECTS]: 'bg-pink-50 text-pink-600 border-pink-100',
  [ItemCategory.OTHER]: 'bg-slate-50 text-slate-600 border-slate-100',
};

export const InventoryTable: React.FC<InventoryTableProps> = ({ items, viewAll }) => {
  if (items.length === 0) {
    return (
      <div className="bg-white rounded-[2.5rem] p-12 text-center border border-dashed border-slate-200">
        <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
        </div>
        <h4 className="text-xl font-bold text-slate-800 mb-2">No items logged yet</h4>
        <p className="text-slate-500 max-w-xs mx-auto">Start building your claim by adding your first lost item.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
      <div className="px-8 py-8 border-b border-slate-50 flex justify-between items-center">
        <div>
          <h3 className="font-black text-xl text-slate-900 tracking-tight">Recent Inventory</h3>
          <p className="text-sm text-slate-400 font-medium">Tracking {items.length} loss entries</p>
        </div>
        {viewAll && (
          <button onClick={viewAll} className="px-4 py-2 text-sky-600 font-bold hover:bg-sky-50 rounded-xl transition-colors text-sm uppercase tracking-widest">
            See All
          </button>
        )}
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block">
        <table className="w-full text-left">
          <thead className="bg-slate-50/50 text-slate-400 text-[10px] uppercase font-black tracking-[0.2em]">
            <tr>
              <th className="px-10 py-5">Item Details</th>
              <th className="px-10 py-5">Value</th>
              <th className="px-10 py-5">Status</th>
              <th className="px-10 py-5 text-right">Edit</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {items.map((item) => (
              <tr key={item.id} className="group hover:bg-slate-50/40 transition-all duration-300">
                <td className="px-10 py-6">
                  <div className="flex items-center gap-5">
                    <div className="relative group-hover:scale-110 transition-transform duration-500">
                      <img src={item.photoUrl} alt="" className="w-14 h-14 rounded-2xl object-cover shadow-sm ring-4 ring-white" />
                      {item.receiptStatus === 'Uploaded' && (
                        <div className="absolute -top-2 -right-2 bg-emerald-500 text-white p-1 rounded-full shadow-lg">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-lg tracking-tight mb-1">{item.name}</p>
                      <span className={`px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border ${CATEGORY_STYLES[item.category]}`}>
                        {item.category}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="px-10 py-6">
                  <p className="font-black text-slate-900 text-lg">${item.estimatedValue.toLocaleString()}</p>
                </td>
                <td className="px-10 py-6">
                   <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold ${
                    item.receiptStatus === 'Uploaded' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'
                  }`}>
                    <div className={`w-2 h-2 rounded-full ${item.receiptStatus === 'Uploaded' ? 'bg-emerald-400' : 'bg-rose-400'}`}></div>
                    {item.receiptStatus === 'Uploaded' ? 'Ready' : 'Incomplete'}
                  </div>
                </td>
                <td className="px-10 py-6 text-right">
                  <button className="w-10 h-10 rounded-xl hover:bg-sky-50 text-slate-300 hover:text-sky-600 transition-all flex items-center justify-center ml-auto">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Optimized Cards */}
      <div className="md:hidden divide-y divide-slate-100">
        {items.map((item) => (
          <div key={item.id} className="p-6 active:bg-slate-50 transition-colors">
            <div className="flex gap-4 items-start mb-4">
               <img src={item.photoUrl} alt="" className="w-16 h-16 rounded-2xl object-cover shadow-sm" />
               <div className="flex-1">
                 <p className="font-black text-slate-900 text-lg leading-tight mb-1">{item.name}</p>
                 <span className={`inline-block px-2 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-widest border ${CATEGORY_STYLES[item.category]}`}>
                  {item.category}
                </span>
               </div>
               <p className="font-black text-sky-600 text-lg">${item.estimatedValue.toLocaleString()}</p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className={`text-[10px] font-black uppercase tracking-[0.15em] flex items-center gap-1.5 ${
                item.receiptStatus === 'Uploaded' ? 'text-emerald-500' : 'text-rose-500'
              }`}>
                {item.receiptStatus === 'Uploaded' ? (
                  <>
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Evidence Attached
                  </>
                ) : 'Documentation Missing'}
              </span>
              <button className="text-slate-400 font-bold text-xs uppercase tracking-widest">Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
