import React, { useState } from 'react';
import { CERTIFICATIONS } from '../../constants';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';

const CertificationsView: React.FC = () => {
  const [imgErrors, setImgErrors] = useState<{ [key: string]: boolean }>({});

  const handleImageError = (id: string) => {
    setImgErrors(prev => ({ ...prev, [id]: true }));
  };

  const categories = [
    {
        title: "🏆 Top Tier: AI & Machine Learning",
        description: "These are your strongest credentials as they demonstrate professional-grade generative AI and specialized ML operations skills:"
    },
    {
        title: "☁️ Core Technical: Cloud & Networking",
        description: "These demonstrate your ability to build and deploy scalable, secure full-stack solutions:"
    },
    {
        title: "🎨 Design & Visualisation",
        description: "To round out your full-stack persona, include these to prove your user-centric design and data storytelling capabilities:"
    },
    {
        title: "📚 AI Literacy & Ethics Foundations",
        description: "Credentials focusing on ethical AI usage, prompt engineering, and academic integration of AI tools."
    },
    {
        title: "🎓 Foundational & Emerging Tech",
        description: "Foundational knowledge and emerging technology skill badges."
    }
  ];

  return (
    <div className="p-4 md:p-12 h-full overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 border-b-2 border-slate-800 pb-4">
            <div>
                <h2 className="text-2xl md:text-3xl font-bold uppercase text-slate-800 flex items-center">
                    <Award className="w-8 h-8 mr-3 text-blue-600" />
                    Credentials Vault
                </h2>
                <p className="text-xs font-mono text-slate-500 mt-2">AUTHORIZED CERTIFICATIONS & LICENSES</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center bg-slate-800 text-white px-4 py-2">
                <ShieldCheck className="w-4 h-4 mr-2 text-green-400" />
                <span className="text-xs font-bold uppercase tracking-widest">All Credentials Verified</span>
            </div>
        </div>

        {/* Categories Loop */}
        <div className="space-y-16">
            {categories.map((category) => {
                const categoryCerts = CERTIFICATIONS.filter(c => c.category === category.title);
                
                if (categoryCerts.length === 0) return null;

                return (
                    <div key={category.title}>
                        <div className="mb-6">
                            <h3 className="text-xl font-bold uppercase text-slate-800 flex items-center border-l-4 border-blue-600 pl-4 mb-2">
                                {category.title}
                            </h3>
                            <p className="text-sm font-mono text-slate-500 pl-5">
                                {category.description}
                            </p>
                        </div>

                        {/* Grid Layout */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {categoryCerts.map((cert) => (
                                <div 
                                    key={cert.id} 
                                    className="bg-white border-2 border-slate-300 hover:border-blue-600 hover:shadow-[8px_8px_0px_0px_rgba(37,99,235,0.15)] transition-all duration-300 group flex flex-col relative overflow-hidden"
                                >
                                    {/* Top Status Bar */}
                                    <div className="bg-slate-100 border-b border-slate-200 px-4 py-2 flex justify-between items-center group-hover:bg-blue-50 transition-colors">
                                        <span className="text-[10px] font-mono font-bold text-slate-500">{cert.id}</span>
                                        <div className="flex gap-1">
                                            <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-400"></div>
                                            <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-400 delay-75"></div>
                                            <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-400 delay-150"></div>
                                        </div>
                                    </div>

                                    <div className="p-6 flex-1 flex flex-col items-center text-center">
                                        
                                        {/* Logo Container */}
                                        <div className="w-20 h-20 mb-6 relative flex items-center justify-center p-2 bg-white rounded-full border-2 border-dashed border-slate-300 group-hover:border-blue-500 group-hover:scale-110 transition-all duration-500 overflow-hidden">
                                            {cert.logo && !imgErrors[cert.id] ? (
                                                <img 
                                                    src={cert.logo} 
                                                    alt={`${cert.issuer} logo`}
                                                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                                                    onError={() => handleImageError(cert.id)}
                                                />
                                            ) : (
                                                <Award className="w-8 h-8 text-slate-300" />
                                            )}
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-lg font-bold text-slate-800 uppercase leading-tight mb-2 group-hover:text-blue-700 transition-colors">
                                            {cert.title}
                                        </h3>
                                        
                                        <div className="inline-block bg-slate-100 px-3 py-1 rounded text-xs font-bold text-slate-500 uppercase mb-4 tracking-wide border border-slate-200">
                                            Issued by {cert.issuer}
                                        </div>

                                        {/* Footer Action */}
                                        <div className="mt-auto w-full pt-4 border-t border-slate-100">
                                            {cert.link ? (
                                                <a 
                                                    href={cert.link} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-center w-full py-2 bg-white border border-slate-300 text-slate-600 text-xs font-bold uppercase hover:bg-slate-800 hover:text-white hover:border-slate-800 transition-all"
                                                >
                                                    View Credential <ExternalLink className="w-3 h-3 ml-2" />
                                                </a>
                                            ) : (
                                                <span className="flex items-center justify-center w-full py-2 bg-slate-50 text-slate-400 text-xs font-bold uppercase cursor-not-allowed">
                                                    Credential Archived
                                                </span>
                                            )}
                                        </div>
                                        
                                        <div className="mt-2 text-[9px] font-mono text-slate-400">
                                            ISSUED: {cert.year}
                                        </div>

                                    </div>
                                    
                                    {/* Decorative Corner */}
                                    <div className="absolute top-0 right-0 w-8 h-8 bg-blue-600 transform translate-x-4 -translate-y-4 rotate-45 group-hover:translate-x-3 group-hover:-translate-y-3 transition-transform duration-300"></div>

                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>

      </div>
    </div>
  );
};

export default CertificationsView;