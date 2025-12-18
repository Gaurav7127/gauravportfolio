import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';
import { Palette } from 'lucide-react';

interface HeaderProps {
  theme?: string;
  onThemeChange?: (theme: string) => void;
}

const Header: React.FC<HeaderProps> = ({ theme = 'blue', onThemeChange }) => {
  const [dateStr, setDateStr] = useState('');

  useEffect(() => {
    const today = new Date();
    const formatted = today.toLocaleDateString('en-US', { month: 'short', day: '2-digit' }).toUpperCase().replace(' ', '-');
    setDateStr(formatted);
  }, []);

  const themeOptions = [
    { id: 'blue', color: '#2563eb', label: 'BLU' },
    { id: 'red', color: '#dc2626', label: 'RED' },
    { id: 'pink', color: '#db2777', label: 'PNK' },
    { id: 'green', color: '#059669', label: 'GRN' },
    { id: 'orange', color: '#ea580c', label: 'ORG' },
  ];

  return (
    <div className="w-full border-b-2 border-slate-800 bg-[#e5e5e0] p-4 flex flex-col md:flex-row justify-between items-start md:items-center relative">
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000),linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000)] bg-[length:10px_10px] bg-[position:0_0,5px_5px] pointer-events-none"></div>

      <div className="relative z-10 flex items-start space-x-4">
        <div className="border-2 border-slate-800 p-3 bg-[#f0f0eb] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tighter text-slate-900 leading-none">
                {PERSONAL_INFO.name}
            </h1>
            <div className="text-xs font-mono text-slate-500 mt-1 uppercase tracking-widest flex justify-between">
                <span>{PERSONAL_INFO.role}</span>
                <span className="text-blue-600 font-bold ml-4">V.2025</span>
            </div>
        </div>
      </div>

      <div className="relative z-10 mt-4 md:mt-0 flex flex-wrap gap-4 items-center">
         {/* Theme Switcher */}
         <div className="flex flex-col items-end mr-2">
            <div className="text-[9px] font-bold text-slate-500 uppercase mb-1 flex items-center">
                <Palette className="w-3 h-3 mr-1" /> INK SELECTOR
            </div>
            <div className="flex gap-1 border-2 border-slate-800 p-1 bg-white">
                {themeOptions.map((opt) => (
                    <button
                        key={opt.id}
                        onClick={() => onThemeChange?.(opt.id)}
                        title={opt.label}
                        className={`w-5 h-5 border transition-all flex items-center justify-center text-[7px] font-bold ${
                            theme === opt.id 
                            ? 'border-slate-900 ring-1 ring-slate-400' 
                            : 'border-slate-300 opacity-60 hover:opacity-100'
                        }`}
                        style={{ backgroundColor: opt.color, color: opt.id === 'pink' || opt.id === 'blue' || opt.id === 'red' || opt.id === 'green' ? 'white' : 'black' }}
                    >
                        {opt.label}
                    </button>
                ))}
            </div>
         </div>

         <div className="grid grid-cols-2 text-[10px] font-mono border-2 border-slate-800 bg-white shadow-sm">
            <div className="p-1 px-2 border-r border-b border-slate-300 bg-slate-100 text-slate-500">PROJECT ID</div>
            <div className="p-1 px-2 border-b border-slate-300 font-bold">17-05-2005</div>
            
            <div className="p-1 px-2 border-r border-slate-300 bg-slate-100 text-slate-500">DATE</div>
            <div className="p-1 px-2 font-bold">{dateStr}</div>
         </div>
         
         <div className="w-12 h-full py-2 border-2 border-slate-800 bg-slate-800 flex items-center justify-center self-stretch">
            <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center text-white text-xs font-bold shadow-inner">
                GS
            </div>
         </div>
      </div>
    </div>
  );
};

export default Header;
