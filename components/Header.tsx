import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';

const Header: React.FC = () => {
  const [dateStr, setDateStr] = useState('');

  useEffect(() => {
    const today = new Date();
    // Format: DEC-15
    const formatted = today.toLocaleDateString('en-US', { month: 'short', day: '2-digit' }).toUpperCase().replace(' ', '-');
    setDateStr(formatted);
  }, []);

  return (
    <div className="w-full border-b-2 border-slate-800 bg-[#e5e5e0] p-4 flex flex-col md:flex-row justify-between items-start md:items-center relative">
      {/* Decorative Grid Background for Header */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000),linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000)] bg-[length:10px_10px] bg-[position:0_0,5px_5px]"></div>

      {/* Main Title Block */}
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

      {/* Meta Data Block (Right side) */}
      <div className="relative z-10 mt-4 md:mt-0 flex">
         <div className="grid grid-cols-2 text-[10px] font-mono border-2 border-slate-800 bg-white">
            <div className="p-1 px-2 border-r border-b border-slate-300 bg-slate-100 text-slate-500">PROJECT ID</div>
            <div className="p-1 px-2 border-b border-slate-300 font-bold">17-05-2005</div>
            
            <div className="p-1 px-2 border-r border-slate-300 bg-slate-100 text-slate-500">DATE</div>
            <div className="p-1 px-2 font-bold">{dateStr}</div>
         </div>
         <div className="ml-2 w-12 border-2 border-slate-800 bg-slate-800 flex items-center justify-center">
            <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center text-white text-xs font-bold">
                GS
            </div>
         </div>
      </div>
    </div>
  );
};

export default Header;