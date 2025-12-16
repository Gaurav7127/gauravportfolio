import React from 'react';
import { SKILLS } from '../../constants';
import { Cpu, Globe, Terminal, Users, Activity } from 'lucide-react';

const SkillsView: React.FC = () => {
  // Group skills by category
  const categories = {
    'Languages': SKILLS.filter(s => s.category === 'Languages'),
    'Web': SKILLS.filter(s => s.category === 'Web'),
    'Tools': SKILLS.filter(s => s.category === 'Tools'),
    'Soft Skills': SKILLS.filter(s => s.category === 'Soft Skills'),
  };

  const getIcon = (cat: string) => {
      switch(cat) {
          case 'Languages': return <Terminal className="w-5 h-5" />;
          case 'Web': return <Globe className="w-5 h-5" />;
          case 'Tools': return <Cpu className="w-5 h-5" />;
          default: return <Users className="w-5 h-5" />;
      }
  };

  return (
    <div className="p-4 md:p-8 h-full overflow-y-auto">
      <div className="max-w-6xl mx-auto">
         
         <div className="flex flex-col md:flex-row items-center justify-between mb-8 border-b-2 border-slate-800 pb-4">
             <div>
                <h2 className="text-2xl font-bold uppercase text-slate-800 flex items-center">
                    <Activity className="w-6 h-6 mr-3 text-blue-600" />
                    Skill Matrix
                </h2>
                <p className="text-xs font-mono text-slate-500 mt-1">TECHNICAL COMPETENCY INVENTORY // CLASSIFIED</p>
             </div>
             <div className="mt-4 md:mt-0 flex gap-2">
                 <div className="px-3 py-1 bg-slate-800 text-white text-[10px] font-bold uppercase tracking-wider">
                     System: ONLINE
                 </div>
                 <div className="px-3 py-1 border border-slate-800 text-slate-800 text-[10px] font-bold uppercase tracking-wider">
                     v.2.4.1
                 </div>
             </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {Object.entries(categories).map(([category, skills]) => (
                <div key={category} className="bg-white border-2 border-slate-800 p-6 shadow-[8px_8px_0px_0px_rgba(30,41,59,0.1)] hover:border-blue-600 transition-colors group">
                    <div className="flex items-center mb-6 pb-2 border-b border-dashed border-slate-300">
                        <div className="w-8 h-8 bg-slate-100 text-slate-600 border border-slate-300 flex items-center justify-center mr-3 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors">
                            {getIcon(category)}
                        </div>
                        <h3 className="text-lg font-bold uppercase text-slate-800">{category}</h3>
                        <div className="ml-auto text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                            {skills.length} MODULES
                        </div>
                    </div>
                    
                    <div className="space-y-5">
                        {skills.map(skill => (
                            <div key={skill.name} className="relative">
                                <div className="flex justify-between items-end mb-2">
                                    <div className="flex items-center">
                                        <i className={`${skill.iconClass} text-lg mr-2`}></i>
                                        <span className="font-mono text-sm font-bold text-slate-700">{skill.name}</span>
                                    </div>
                                    <span className="font-mono text-xs font-bold text-blue-600">{skill.level}%</span>
                                </div>
                                
                                {/* Progress Bar Background (Track) */}
                                <div className="w-full h-2 bg-slate-100 border border-slate-200 overflow-hidden relative">
                                    {/* Tick marks on track */}
                                    <div className="absolute inset-0 flex justify-between px-[1px]">
                                        {[...Array(10)].map((_, i) => (
                                            <div key={i} className="w-[1px] h-full bg-white"></div>
                                        ))}
                                    </div>
                                    
                                    {/* Progress Fill */}
                                    <div 
                                        className="h-full bg-slate-600 group-hover:bg-blue-600 transition-all duration-1000 ease-out relative" 
                                        style={{ width: `${skill.level}%` }}
                                    >
                                        {/* Animated Shine effect */}
                                        <div className="absolute top-0 left-0 bottom-0 right-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)] translate-x-[-100%] group-hover:animate-[shine_2s_infinite]"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
         </div>
      </div>
      
      <style>{`
        @keyframes shine {
            100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default SkillsView;