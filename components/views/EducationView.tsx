import React from 'react';
import { EDUCATION } from '../../constants';
import { GraduationCap, CircleDot } from 'lucide-react';

const EducationView: React.FC = () => {
  return (
    <div className="p-4 md:p-12 h-full overflow-y-auto">
      <div className="max-w-4xl mx-auto">
         
         <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold uppercase text-slate-800 inline-flex items-center border-b-4 border-slate-800 pb-2">
                <GraduationCap className="w-8 h-8 mr-4 text-blue-600" />
                Academic Progression
            </h2>
            <p className="text-xs font-mono text-slate-500 mt-2">EDUCATIONAL BACKGROUND // VERIFIED RECORDS</p>
         </div>

         <div className="relative pl-4 md:pl-8">
            {/* Main Vertical Bus Line (Circuit Trace) */}
            <div className="absolute left-[27px] md:left-[31px] top-4 bottom-4 w-1 bg-slate-300">
                <div className="w-full h-full bg-[linear-gradient(to_bottom,#64748b_50%,transparent_50%)] bg-[size:4px_12px] opacity-20"></div>
            </div>

            <div className="space-y-16">
                {EDUCATION.map((edu, index) => (
                    <div key={edu.id} className="relative group pl-12 md:pl-16">
                        
                        {/* Connection Node */}
                        <div className="absolute left-[19px] md:left-[23px] top-8 w-5 h-5 bg-white border-2 border-slate-500 rounded-full z-10 group-hover:border-blue-600 group-hover:scale-125 transition-all duration-300 flex items-center justify-center shadow-sm">
                            <div className="w-2 h-2 bg-slate-500 rounded-full group-hover:bg-blue-600 transition-colors"></div>
                        </div>
                        
                        {/* Horizontal Trace Connector */}
                        <div className="absolute left-[39px] md:left-[43px] top-[38px] w-8 md:w-12 h-[2px] bg-slate-300 group-hover:bg-blue-600 group-hover:w-14 transition-all duration-300"></div>

                        {/* Card Container */}
                        <div className="bg-white border-2 border-slate-800 relative transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(30,41,59,0.2)] group-hover:border-blue-600">
                            
                            {/* Technical Decor - Corners */}
                            <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-2 border-l-2 border-slate-800 group-hover:border-blue-600 transition-colors"></div>
                            <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-2 border-r-2 border-slate-800 group-hover:border-blue-600 transition-colors"></div>
                            <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-2 border-r-2 border-slate-800 group-hover:border-blue-600 transition-colors"></div>
                            <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-2 border-l-2 border-slate-800 group-hover:border-blue-600 transition-colors"></div>

                            {/* Card Header */}
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-slate-100 border-b border-slate-200 p-3 px-5 group-hover:bg-blue-50 transition-colors">
                                <div className="flex items-center gap-3 mb-2 sm:mb-0">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">{edu.id} // STATUS: COMPLETED</span>
                                </div>
                                <span className="text-[10px] font-bold bg-slate-800 text-white px-3 py-1 font-mono shadow-sm rounded-full">
                                    CLASS OF {edu.year}
                                </span>
                            </div>
                            
                            {/* Card Body */}
                            <div className="p-6 md:p-8">
                                <h3 className="text-2xl font-bold text-slate-900 uppercase leading-none mb-2 group-hover:text-blue-700 transition-colors">
                                    {edu.degree}
                                </h3>
                                <div className="text-sm font-bold text-slate-500 uppercase mb-6 font-mono tracking-wider flex items-center">
                                    <span className="inline-block w-4 h-[1px] bg-slate-400 mr-2"></span>
                                    {edu.institution}
                                </div>
                                
                                {edu.details && (
                                    <div className="bg-[#f8f8f6] border border-slate-200 p-4 mb-6 font-mono text-xs text-slate-600 leading-relaxed relative">
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-300"></div>
                                        <span className="font-bold text-slate-400 block mb-1 text-[9px] uppercase tracking-wider">Coursework Spec:</span>
                                        {edu.details}
                                    </div>
                                )}

                                <div className="flex justify-between items-end border-t border-dashed border-slate-300 pt-4 mt-auto">
                                    <div className="flex items-center text-[10px] font-bold text-slate-400 uppercase">
                                        <CircleDot className="w-3 h-3 mr-1 text-blue-500" />
                                        Verified Record
                                    </div>
                                    <span className="text-base font-bold text-slate-800 bg-white border border-slate-800 px-4 py-1 shadow-[2px_2px_0px_0px_rgba(30,41,59,0.2)]">
                                        {edu.score}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

         </div>
      </div>
    </div>
  );
};

export default EducationView;