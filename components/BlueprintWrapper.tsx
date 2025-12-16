import React from 'react';

interface BlueprintWrapperProps {
  children: React.ReactNode;
}

const BlueprintWrapper: React.FC<BlueprintWrapperProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full blueprint-grid blueprint-grid-sub p-2 sm:p-4 md:p-8 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Outer Border simulating a physical blueprint paper edge */}
      <div className="w-full h-full max-w-[1600px] min-h-[90vh] bg-[#fdfbf7] border-4 border-slate-700 shadow-2xl relative flex flex-col md:flex-row overflow-hidden">
        
        {/* Corner marks for technical drawing feel */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-slate-700 z-20"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-slate-700 z-20"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-slate-700 z-20"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-slate-700 z-20"></div>
        
        {/* Top Ruler / Scale (Decorative) */}
        <div className="absolute top-0 left-12 right-12 h-4 border-b border-slate-300 flex justify-between px-2 items-end z-10 hidden md:flex">
             {Array.from({ length: 20 }).map((_, i) => (
                 <div key={i} className={`w-[1px] bg-slate-400 ${i % 5 === 0 ? 'h-3' : 'h-1'}`}></div>
             ))}
        </div>

        {children}
      </div>
    </div>
  );
};

export default BlueprintWrapper;