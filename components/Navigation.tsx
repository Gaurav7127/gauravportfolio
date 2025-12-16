import React, { useState } from 'react';
import { ViewState } from '../types';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentView: ViewState;
  onViewChange: (view: ViewState) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, onViewChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tabs = [
    { id: ViewState.PROFILE, label: 'ABOUT ME' },
    { id: ViewState.SKILLS, label: 'SKILLS' },
    { id: ViewState.PROJECTS, label: 'PROJECTS' },
    { id: ViewState.EDUCATION, label: 'EDUCATION & CERTS' },
    { id: ViewState.CONTACT, label: 'CONTACT INFO' },
  ];

  const handleMobileNav = (id: ViewState) => {
    onViewChange(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="w-full bg-[#f0f0eb] border-b-2 border-slate-800 relative z-50">
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex px-4 pt-4 gap-2 overflow-x-auto">
        {tabs.map((tab) => {
          const isActive = currentView === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onViewChange(tab.id)}
              className={`
                relative px-6 py-3 min-w-[140px] text-sm font-bold uppercase tracking-wider border-t-2 border-l-2 border-r-2 transition-all
                ${isActive 
                  ? 'bg-white border-slate-800 text-blue-700 translate-y-[2px] z-10' 
                  : 'bg-[#e5e5e0] border-slate-400 text-slate-500 hover:bg-[#dcdcd9] hover:text-slate-700'}
              `}
            >
              {isActive && <div className="absolute top-0 left-0 right-0 h-1 bg-blue-600"></div>}
              {tab.label}
            </button>
          );
        })}
        <div className="flex-1 border-b-2 border-slate-800 transform translate-y-[-2px]"></div>
      </div>

      {/* Mobile Navigation Header */}
      <div className="md:hidden flex justify-between items-center p-4 bg-[#e5e5e0]">
        <span className="text-sm font-bold text-slate-500 uppercase">MENU</span>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 border border-slate-400 bg-white">
          {isMobileMenuOpen ? <X className="w-6 h-6 text-slate-800" /> : <Menu className="w-6 h-6 text-slate-800" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#fdfbf7] border-b-2 border-slate-800 shadow-xl p-4 flex flex-col gap-2">
           {tabs.map((tab) => (
             <button
               key={tab.id}
               onClick={() => handleMobileNav(tab.id)}
               className={`
                 w-full text-left px-4 py-3 text-sm font-bold uppercase border border-slate-300
                 ${currentView === tab.id ? 'bg-blue-50 border-blue-500 text-blue-800' : 'bg-white text-slate-600'}
               `}
             >
               {tab.label}
             </button>
           ))}
        </div>
      )}

    </nav>
  );
};

export default Navigation;