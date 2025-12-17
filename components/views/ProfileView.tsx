import React from 'react';
import { PERSONAL_INFO } from '../../constants';
import { Download } from 'lucide-react';

const ProfileView: React.FC = () => {
  return (
    <div className="p-4 md:p-12 h-full overflow-y-auto flex flex-col items-center">
      
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Photo Section */}
        <div className="flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative p-2 border-2 border-slate-800 bg-white shadow-[10px_10px_0px_0px_rgba(30,41,59,0.2)]">
                {/* Tape Effect */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-yellow-100/80 border border-slate-300 rotate-2"></div>
                
                {/* Image Placeholder */}
                <div className="w-64 h-80 bg-slate-200 overflow-hidden border border-slate-300 relative group">
                     {/* NOTE: Ensure 'gaurav_profile.jpg' is placed in your public folder or accessible path */}
                     <img 
                       src="gaurav_profile.jpg" 
                       onError={(e) => {
                           // Fallback if image not found
                           (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop";
                       }}
                       alt="Gaurav Singh" 
                       className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                     />
                     <div className="absolute bottom-0 left-0 right-0 bg-slate-900/80 text-white text-[10px] text-center py-1 font-mono uppercase">
                        ID: GS-2005
                     </div>
                </div>
            </div>
        </div>

        {/* Bio Section */}
        <div className="order-2 md:order-1">
            <div className="border-l-4 border-slate-800 pl-6 py-2">
                <h2 className="text-4xl font-bold uppercase text-slate-800 leading-none mb-2">
                    Hello, I'm <br/>
                    <span className="text-blue-700">{PERSONAL_INFO.name.split(' ')[0]}</span>
                </h2>
                <div className="inline-block bg-slate-800 text-white px-2 py-1 text-sm font-mono font-bold uppercase mb-6">
                    {PERSONAL_INFO.role}
                </div>
                
                <p className="text-sm md:text-base font-mono text-slate-600 leading-relaxed text-justify mb-8">
                    {PERSONAL_INFO.bio}
                </p>

                <div className="flex gap-4">
                     <a 
                        href={PERSONAL_INFO.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-6 py-3 bg-blue-600 text-white text-sm font-bold uppercase hover:bg-blue-700 transition-colors shadow-[4px_4px_0px_0px_rgba(30,41,59,1)] active:translate-y-1 active:shadow-none"
                     >
                         <Download className="w-4 h-4 mr-2" />
                         Resume
                     </a>
                </div>
            </div>

            {/* Quick Tech Tag Cloud */}
            <div className="mt-8 pt-6 border-t border-dashed border-slate-300">
                <div className="text-[10px] font-bold text-slate-400 uppercase mb-2">Specialized In:</div>
                <div className="flex flex-wrap gap-2">
                    {['Artificial Intelligence', 'Full Stack Dev', 'Machine Learning'].map(tag => (
                        <span key={tag} className="px-2 py-1 bg-[#e5e5e0] text-xs font-bold text-slate-700 border border-slate-400">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>

      </div>

    </div>
  );
};

export default ProfileView;