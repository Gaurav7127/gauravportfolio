import React from 'react';
import { EDUCATION, CERTIFICATIONS } from '../../constants';
import { GraduationCap, Award, Calendar, ExternalLink, CircleDot, GitCommit } from 'lucide-react';

const EducationView: React.FC = () => {
  return (
    <div className="p-4 md:p-12 h-full overflow-y-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
         
         {/* Left Col: Education Timeline */}
         <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold uppercase text-slate-800 mb-10 flex items-center border-b-2 border-slate-800 pb-2 inline-block">
                <GraduationCap className="w-6 h-6 mr-3" />
                Academic Progression
            </h2>

            <div className="relative pl-4">
                {/* Main Vertical Bus Line (Circuit Trace) */}
                <div className="absolute left-[27px] top-4 bottom-4 w-1 bg-slate-300/50">
                    <div className="w-full h-full bg-[linear-gradient(to_bottom,#94a3b8_50%,transparent_50%)] bg-[size:4px_8px] opacity-30"></div>
                </div>

                <div className="space-y-12">
                    {EDUCATION.map((edu, index) => (
                        <div key={edu.id} className="relative group pl-12">
                            
                            {/* Connection Node */}
                            <div className="absolute left-[19px] top-8 w-4 h-4 bg-white border-2 border-slate-400 rounded-full z-10 group-hover:border-blue-600 group-hover:scale-125 transition-all duration-300 flex items-center justify-center">
                                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full group-hover:bg-blue-600 transition-colors"></div>
                            </div>
                            
                            {/* Horizontal Trace Connector */}
                            <div className="absolute left-[34px] top-[39px] w-8 h-[2px] bg-slate-300 group-hover:bg-blue-600 group-hover:w-10 transition-all duration-300"></div>

                            {/* Card Container */}
                            <div className="bg-white border-2 border-slate-800 relative transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(30,41,59,0.2)] group-hover:border-blue-600">
                                
                                {/* Technical Decor - Corners */}
                                <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-2 border-l-2 border-slate-800 group-hover:border-blue-600"></div>
                                <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-2 border-r-2 border-slate-800 group-hover:border-blue-600"></div>

                                {/* Card Header */}
                                <div className="flex justify-between items-center bg-slate-100 border-b border-slate-200 p-2 px-4 group-hover:bg-blue-50 transition-colors">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                        <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">{edu.id} // COMPLETED</span>
                                    </div>
                                    <span className="text-[10px] font-bold bg-slate-800 text-white px-2 py-0.5 font-mono shadow-sm">
                                        {edu.year}
                                    </span>
                                </div>
                                
                                {/* Card Body */}
                                <div className="p-5">
                                    <h3 className="text-xl font-bold text-slate-900 uppercase leading-none mb-1 group-hover:text-blue-700 transition-colors">
                                        {edu.degree}
                                    </h3>
                                    <div className="text-sm font-bold text-slate-500 uppercase mb-4 font-mono">
                                        {edu.institution}
                                    </div>
                                    
                                    <div className="bg-[#f8f8f6] border border-slate-200 p-3 mb-4 font-mono text-xs text-slate-600 leading-relaxed">
                                        <span className="font-bold text-slate-400 block mb-1 text-[9px] uppercase tracking-wider">Coursework Spec:</span>
                                        {edu.details}
                                    </div>

                                    <div className="flex justify-between items-end border-t border-dashed border-slate-300 pt-3">
                                        <div className="flex items-center text-[10px] font-bold text-slate-400 uppercase">
                                            <CircleDot className="w-3 h-3 mr-1" />
                                            Verified Record
                                        </div>
                                        <span className="text-sm font-bold text-slate-800 bg-white border border-slate-800 px-3 py-1 shadow-[2px_2px_0px_0px_rgba(30,41,59,0.2)]">
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

         {/* Right Col: Certifications */}
         <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold uppercase text-slate-800 mb-10 flex items-center border-b-2 border-slate-800 pb-2 inline-block">
                <Award className="w-6 h-6 mr-3" />
                Certifications
            </h2>

            <div className="space-y-4 relative">
                {/* Decorative background line for certifications */}
                <div className="absolute left-[-16px] top-2 bottom-2 w-[2px] border-l-2 border-dashed border-slate-300 hidden lg:block"></div>

                {CERTIFICATIONS.map((cert) => {
                    const CardContent = () => (
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="text-sm font-bold text-slate-800 uppercase leading-snug pr-4 group-hover:text-blue-700">
                                    {cert.title}
                                </h4>
                                {cert.link && <ExternalLink className="w-3 h-3 text-blue-500 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0" />}
                            </div>
                            <div className="flex justify-between items-center text-xs font-mono text-slate-500 border-t border-slate-200 pt-2 mt-2">
                                <span>{cert.issuer}</span>
                                <span className="flex items-center font-bold bg-slate-100 px-1.5 py-0.5 rounded-sm">
                                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-1.5"></span>
                                    {cert.year}
                                </span>
                            </div>
                        </div>
                    );

                    return cert.link ? (
                         <a 
                            key={cert.id}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-white border-2 border-slate-300 p-4 hover:border-blue-600 hover:shadow-[4px_4px_0px_0px_rgba(37,99,235,0.2)] transition-all cursor-pointer group relative overflow-hidden"
                         >
                            {/* Hover slide effect */}
                            <div className="absolute top-0 left-0 w-1 h-full bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                            <CardContent />
                         </a>
                    ) : (
                        <div key={cert.id} className="bg-white border-2 border-slate-300 p-4 hover:border-slate-500 transition-all group">
                            <CardContent />
                        </div>
                    );
                })}
            </div>
         </div>

      </div>
    </div>
  );
};

export default EducationView;