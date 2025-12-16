import React from 'react';
import { EXPERIENCE } from '../../constants';

const ExperienceView: React.FC = () => {
  return (
    <div className="p-4 md:p-8 h-full overflow-y-auto">
      <div className="bg-white border-2 border-slate-800 p-6 min-h-full">
         <h2 className="text-xl font-bold uppercase text-slate-800 mb-6 border-b-2 border-slate-800 pb-2">
            Professional History
         </h2>

         <div className="relative border-l-2 border-slate-300 ml-4 space-y-8 pl-8 py-2">
            {EXPERIENCE.map((exp, idx) => (
                <div key={exp.id} className="relative group">
                    {/* Timeline Node */}
                    <div className="absolute -left-[41px] top-1 w-5 h-5 bg-[#f0f0eb] border-2 border-slate-800 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors">
                        <div className="w-1.5 h-1.5 bg-slate-800 rounded-full group-hover:bg-white"></div>
                    </div>

                    <div className="bg-[#fdfbf7] border border-slate-300 p-4 shadow-sm hover:border-blue-400 transition-colors">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                            <h3 className="text-base font-bold text-slate-900 uppercase">
                                {exp.title}
                            </h3>
                            <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-1 border border-blue-100">
                                {exp.date}
                            </span>
                        </div>
                        <div className="text-sm font-bold text-slate-500 uppercase mb-2">
                            {exp.organization} <span className="text-slate-300">|</span> {exp.type}
                        </div>
                        {exp.description && (
                            <p className="text-xs font-mono text-slate-600 leading-relaxed border-t border-dashed border-slate-200 pt-2">
                                {exp.description}
                            </p>
                        )}
                    </div>
                </div>
            ))}
         </div>
         
         <div className="mt-12 p-4 border border-dashed border-slate-400 bg-slate-50 text-center">
             <p className="text-xs font-mono text-slate-500 uppercase">End of Record // Continuous Learning in Progress</p>
         </div>
      </div>
    </div>
  );
};

export default ExperienceView;