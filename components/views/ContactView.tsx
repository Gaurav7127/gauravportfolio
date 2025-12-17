import React from 'react';
import { PERSONAL_INFO } from '../../constants';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Download } from 'lucide-react';

const ContactView: React.FC = () => {
  return (
    <div className="p-6 md:p-12 h-full flex flex-col items-center justify-center relative overflow-hidden">
        
        {/* Background Graphic Elements */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
            <div className="w-[600px] h-[600px] border-[20px] border-slate-900 rounded-full"></div>
            <div className="absolute w-[400px] h-[400px] border-[40px] border-slate-900 rounded-full"></div>
        </div>

        <div className="max-w-2xl w-full relative z-10">
            
            {/* Main Title Block Card */}
            <div className="bg-white border-4 border-slate-800 p-1 shadow-[10px_10px_0px_0px_rgba(30,41,59,0.2)]">
                <div className="border border-slate-800 p-8">
                    
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b-2 border-slate-800 pb-6 mb-6">
                        <div>
                            <h2 className="text-4xl font-bold text-slate-800 uppercase tracking-tighter">
                                {PERSONAL_INFO.name.split(' ')[0]}
                            </h2>
                            <h2 className="text-4xl font-bold text-slate-800 uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-500">
                                {PERSONAL_INFO.name.split(' ')[1]}
                            </h2>
                        </div>
                        <div className="mt-4 md:mt-0 text-right">
                             <div className="bg-slate-800 text-white px-3 py-1 text-sm font-bold uppercase tracking-widest inline-block mb-1">
                                Status: Open to Work
                             </div>
                             <p className="text-xs font-mono text-slate-500">INITIATE COMMUNICATION PROTOCOL</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {/* Contact Item */}
                        <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center group p-3 border border-transparent hover:border-slate-300 hover:bg-slate-50 transition-all cursor-pointer">
                            <div className="w-10 h-10 bg-slate-100 border border-slate-300 flex items-center justify-center mr-4 group-hover:bg-blue-100 group-hover:border-blue-300 group-hover:text-blue-600 transition-colors">
                                <Mail className="w-5 h-5 text-slate-600" />
                            </div>
                            <div>
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email Address</div>
                                <div className="text-sm md:text-base font-mono text-slate-800">{PERSONAL_INFO.email}</div>
                            </div>
                        </a>

                        <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center group p-3 border border-transparent hover:border-slate-300 hover:bg-slate-50 transition-all">
                            <div className="w-10 h-10 bg-slate-100 border border-slate-300 flex items-center justify-center mr-4 group-hover:bg-green-100 group-hover:border-green-300 group-hover:text-green-600 transition-colors">
                                <Phone className="w-5 h-5 text-slate-600" />
                            </div>
                            <div>
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Telephone</div>
                                <div className="text-sm md:text-base font-mono text-slate-800">{PERSONAL_INFO.phone}</div>
                            </div>
                        </a>

                        <div className="flex items-center group p-3 border border-transparent hover:border-slate-300 hover:bg-slate-50 transition-all">
                            <div className="w-10 h-10 bg-slate-100 border border-slate-300 flex items-center justify-center mr-4">
                                <MapPin className="w-5 h-5 text-slate-600" />
                            </div>
                            <div>
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Base Location</div>
                                <div className="text-sm md:text-base font-mono text-slate-800">{PERSONAL_INFO.location}</div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-200">
                             <a 
                               href={PERSONAL_INFO.socials.linkedin}
                               target="_blank"
                               rel="noopener noreferrer" 
                               className="flex items-center justify-center py-3 bg-[#0077b5] text-white text-sm font-bold uppercase hover:opacity-90 transition-opacity shadow-sm"
                             >
                                <Linkedin className="w-4 h-4 mr-2" />
                                LinkedIn Profile
                             </a>
                             <a 
                               href={PERSONAL_INFO.socials.github} 
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex items-center justify-center py-3 bg-[#24292e] text-white text-sm font-bold uppercase hover:bg-slate-800 transition-colors shadow-sm"
                             >
                                <Github className="w-4 h-4 mr-2" />
                                GitHub Profile
                             </a>
                        </div>
                        
                        <a 
                            href={PERSONAL_INFO.resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full mt-2 py-4 border-2 border-dashed border-slate-400 text-slate-600 font-mono text-sm uppercase hover:bg-slate-50 hover:border-slate-600 hover:text-slate-800 transition-all flex items-center justify-center"
                        >
                            <Download className="w-4 h-4 mr-2" />
                            Download Resume (PDF)
                        </a>
                    </div>

                </div>
            </div>
            
        </div>
    </div>
  );
};

export default ContactView;