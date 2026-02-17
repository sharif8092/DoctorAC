
import React, { useEffect, useState, useRef } from 'react';
import { COMPANY_NAME, GST_NUMBER, UDYAM_NUMBER } from '../constants';

const brandLogos = [
  { name: "LG", url: "https://upload.wikimedia.org/wikipedia/commons/b/bf/LG_logo_%282015%29.svg" },
  { name: "Daikin", url: "https://upload.wikimedia.org/wikipedia/commons/2/20/Daikin_logo.svg" },
  { name: "Samsung", url: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
  { name: "Voltas", url: "https://upload.wikimedia.org/wikipedia/en/7/7b/Voltas_logo.svg" }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-32 bg-white overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Visual Area */}
          <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
            <div className="relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl aspect-[4/3] md:aspect-[4/5]">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" 
                alt="Technicians at work" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-transparent opacity-60"></div>
              
              <div className="absolute top-4 right-4 bg-blue-600 text-white p-6 rounded-3xl shadow-2xl text-center border-4 border-white animate-float scale-75 md:scale-100">
                <span className="block text-2xl font-black">MSME</span>
                <span className="block text-[10px] font-bold uppercase tracking-widest opacity-80">Verified</span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full font-black text-[10px] uppercase tracking-widest mb-6">
              Authorized Service Entity
            </div>
            <h2 className="text-3xl md:text-6xl font-black text-slate-950 mb-6 leading-tight tracking-tight">
              Legally Certified <br />
              <span className="text-blue-600">Repair Hub</span>
            </h2>
            
            <p className="text-base md:text-xl text-slate-600 mb-8 leading-relaxed">
              <strong>{COMPANY_NAME}</strong> is a government-registered hub providing standardized appliance repair in Delhi. Based in South East Delhi, we provide <strong>GST-compliant</strong>, transparent repair logistics.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Registration</p>
                <p className="text-slate-950 font-black text-sm md:text-lg">UDYAM CERTIFIED</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Compliance</p>
                <p className="text-slate-950 font-black text-sm md:text-lg">GST REGISTERED</p>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-100">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Authorized Parts for:</p>
              <div className="flex flex-wrap items-center gap-6 opacity-40 grayscale">
                {brandLogos.map(brand => (
                  <img key={brand.name} src={brand.url} alt={brand.name} className="h-4 md:h-6 object-contain" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
