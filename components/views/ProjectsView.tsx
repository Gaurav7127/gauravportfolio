import React, { useState } from 'react';
import { PROJECTS } from '../../constants';
import { Project } from '../../types';
import { ExternalLink, Database, Cpu, Monitor, HardDrive, X, Maximize2, ArrowRight } from 'lucide-react';

const ProjectsView: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const getIconForType = (type: string, size: string = "w-4 h-4") => {
      switch(type) {
          case 'input': return <HardDrive className={size} />;
          case 'process': return <Cpu className={size} />;
          case 'storage': return <Database className={size} />;
          case 'output': return <Monitor className={size} />;
          default: return <div className={size} />;
      }
  };

  return (
    <div className="p-4 md:p-8 h-full overflow-y-auto relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-8">
        
        {PROJECTS.map((project, idx) => (
          <div 
            key={project.id} 
            onClick={() => setSelectedProject(project)}
            className="bg-white border-2 border-slate-800 p-6 shadow-[8px_8px_0px_0px_rgba(30,41,59,0.2)] cursor-pointer hover:border-blue-600 transition-colors group flex flex-col"
          >
             
             {/* Header */}
             <div className="flex justify-between items-start mb-4 border-b-2 border-slate-800 pb-4">
                <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{project.id}</div>
                    <h3 className="text-2xl font-bold text-slate-900 uppercase group-hover:text-blue-700">{project.title}</h3>
                    <div className="text-xs font-mono text-blue-600 mt-1">{project.role}</div>
                </div>
                <Maximize2 className="w-5 h-5 text-slate-400 group-hover:text-blue-600" />
             </div>

             {/* Preview Architecture Diagram */}
             <div className="bg-[#f0f0eb] border border-slate-300 p-4 mb-6 relative overflow-hidden flex-1 flex flex-col justify-center min-h-[160px]">
                <div className="text-[9px] font-bold uppercase text-slate-500 absolute top-2 left-2 tracking-wider flex items-center">
                    <Cpu className="w-3 h-3 mr-1" /> System Architecture
                </div>
                
                <div className="flex flex-wrap items-center justify-center gap-2 pt-4 relative z-10">
                    {project.architecture.flow.map((node, i) => (
                        <React.Fragment key={i}>
                            <div className={`
                                flex flex-col items-center justify-center w-16 h-16 p-1 text-center border shadow-sm bg-white transition-transform group-hover:scale-105
                                ${node.type === 'process' ? 'border-blue-500 bg-blue-50/50' : 'border-slate-400'}
                                ${node.type === 'output' ? 'border-slate-800 bg-slate-800 text-slate-200' : 'text-slate-700'}
                            `}>
                                <div className={`scale-75 mb-1 ${node.type === 'output' ? 'text-slate-300' : 'text-slate-600'}`}>
                                    {getIconForType(node.type)}
                                </div>
                                <span className="text-[7px] font-bold uppercase leading-tight line-clamp-2">{node.label}</span>
                            </div>
                            
                            {/* Arrow */}
                            {i < project.architecture.flow.length - 1 && (
                                <ArrowRight className="w-3 h-3 text-slate-400" />
                            )}
                        </React.Fragment>
                    ))}
                </div>
                
                {/* Background Grid */}
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none"></div>
             </div>

             <div className="mt-auto">
                 <p className="text-sm font-mono text-slate-600 mb-4 pl-4 border-l-4 border-slate-300 group-hover:border-blue-300 line-clamp-2">
                     {project.description}
                 </p>
                 
                 <div className="flex justify-between items-center border-t border-slate-100 pt-3">
                    <div className="flex gap-1">
                        {project.techStack.slice(0,3).map(t => (
                            <span key={t} className="text-[8px] bg-slate-100 border border-slate-200 px-1 py-0.5 uppercase font-bold text-slate-500">{t}</span>
                        ))}
                    </div>
                    <div className="text-xs font-bold text-blue-600 uppercase flex items-center">
                        View Details <ArrowRight className="w-3 h-3 ml-1" />
                    </div>
                 </div>
             </div>

          </div>
        ))}

      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
            <div 
                className="bg-[#fdfbf7] w-full max-w-5xl max-h-[95vh] overflow-y-auto border-4 border-slate-800 shadow-2xl relative flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Modal Header */}
                <div className="flex justify-between items-center p-6 border-b-2 border-slate-800 bg-[#e5e5e0]">
                    <div>
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">SYSTEM DETAIL VIEW</span>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 uppercase leading-none mt-1">{selectedProject.title}</h2>
                    </div>
                    <button 
                        onClick={() => setSelectedProject(null)}
                        className="p-2 border-2 border-slate-800 hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Modal Content */}
                <div className="p-6 md:p-8 space-y-8">
                    
                    {/* Architecture Diagram (Full) */}
                    <div className="border-2 border-slate-800 p-8 bg-white relative group/diagram overflow-hidden shadow-inner">
                         {/* Grid Pattern */}
                         <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
                         
                         <style>{`
                            @keyframes flowDash {
                                from { stroke-dashoffset: 24; }
                                to { stroke-dashoffset: 0; }
                            }
                         `}</style>
                         
                         <div className="absolute -top-3 left-4 bg-[#fdfbf7] border border-slate-800 px-3 py-1 text-xs font-bold text-blue-600 uppercase tracking-widest z-10">
                            System Schematic v1.0
                         </div>
                         
                         <div className="flex flex-col md:flex-row items-center justify-center gap-0 py-4 relative z-10">
                            {selectedProject.architecture.flow.map((node, i) => (
                                <React.Fragment key={i}>
                                    {/* Node */}
                                    <div className={`
                                        relative z-10 flex flex-col items-center justify-center w-32 h-32 p-4 text-center border-2 transition-all duration-300 group/node
                                        ${node.type === 'input' ? 'bg-white border-slate-600 rounded-lg' : ''}
                                        ${node.type === 'process' ? 'bg-blue-50 border-blue-600 rounded-md' : ''}
                                        ${node.type === 'storage' ? 'bg-amber-50 border-amber-600 rounded-xl' : ''}
                                        ${node.type === 'output' ? 'bg-slate-800 text-white border-slate-800 rounded-sm' : ''}
                                        hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:-translate-y-1 hover:scale-105
                                    `}>
                                        <div className={`mb-2 p-2 rounded-full border ${node.type === 'output' ? 'border-slate-600 bg-slate-700 text-slate-200' : 'border-slate-200 bg-white text-slate-600'} group-hover/node:scale-110 transition-transform`}>
                                            {getIconForType(node.type, "w-6 h-6")}
                                        </div>
                                        <span className="text-[10px] font-bold uppercase leading-tight tracking-wide">{node.label}</span>
                                        
                                        {/* Hover Tooltip */}
                                        <div className="absolute -bottom-8 opacity-0 group-hover/node:opacity-100 transition-opacity text-[9px] font-mono bg-slate-900 text-white px-2 py-1 rounded">
                                            {node.type.toUpperCase()} UNIT
                                        </div>
                                    </div>

                                    {/* Connector */}
                                    {i < selectedProject.architecture.flow.length - 1 && (
                                        <>
                                            {/* Desktop Connector */}
                                            <div className="hidden md:flex items-center justify-center w-16 -mx-1">
                                                <svg width="100%" height="24" viewBox="0 0 64 24" className="text-slate-400 overflow-visible">
                                                    <line 
                                                        x1="0" y1="12" x2="64" y2="12" 
                                                        stroke="currentColor" 
                                                        strokeWidth="2" 
                                                        strokeDasharray="6 4"
                                                        className="group-hover/diagram:animate-[flowDash_1s_linear_infinite]"
                                                    />
                                                    <path 
                                                        d="M58 6 L64 12 L58 18" 
                                                        fill="none" 
                                                        stroke="currentColor" 
                                                        strokeWidth="2" 
                                                        strokeLinecap="round" 
                                                        strokeLinejoin="round" 
                                                    />
                                                </svg>
                                            </div>

                                            {/* Mobile Connector */}
                                            <div className="md:hidden flex flex-col items-center justify-center h-16 -my-1">
                                                <svg width="24" height="100%" viewBox="0 0 24 64" className="text-slate-400 overflow-visible">
                                                    <line 
                                                        x1="12" y1="0" x2="12" y2="64" 
                                                        stroke="currentColor" 
                                                        strokeWidth="2" 
                                                        strokeDasharray="6 4"
                                                        className="group-hover/diagram:animate-[flowDash_1s_linear_infinite]"
                                                    />
                                                    <path 
                                                        d="M6 58 L12 64 L18 58" 
                                                        fill="none" 
                                                        stroke="currentColor" 
                                                        strokeWidth="2" 
                                                        strokeLinecap="round" 
                                                        strokeLinejoin="round" 
                                                    />
                                                </svg>
                                            </div>
                                        </>
                                    )}
                                </React.Fragment>
                            ))}
                         </div>
                    </div>

                    {/* Detailed Info */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-2">
                            <h3 className="text-lg font-bold uppercase text-slate-800 mb-2">Technical Description</h3>
                            <p className="font-mono text-sm text-slate-700 leading-relaxed text-justify">
                                {selectedProject.fullDescription || selectedProject.description}
                            </p>
                        </div>
                        <div className="md:col-span-1 space-y-4">
                            <div>
                                <h3 className="text-xs font-bold uppercase text-slate-400 mb-2">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.techStack.map(tech => (
                                        <span key={tech} className="px-2 py-1 bg-slate-200 text-xs font-bold uppercase border border-slate-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            {selectedProject.link && (
                                <div className="pt-4 border-t border-slate-200">
                                    <a 
                                        href={selectedProject.link} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-full py-3 bg-blue-600 text-white font-bold uppercase text-sm hover:bg-blue-700 transition-colors shadow-md"
                                    >
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        Launch Project
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
      )}

    </div>
  );
};

export default ProjectsView;