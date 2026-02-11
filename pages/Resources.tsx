
import React, { useState } from 'react';
import { Language } from '../types';
import { MOCK_FAQS } from '../constants';

const Resources: React.FC<{ lang: Language }> = ({ lang }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-brand-light min-h-screen">
      {/* Header Section */}
      <section className="bg-white pt-32 pb-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-[10px] font-black text-brand-red uppercase tracking-[0.5em] mb-6 block">Repository</span>
            <h1 className="text-5xl sm:text-7xl font-light font-canela text-brand-black mb-8 leading-tight">
              {lang === 'zh' ? '资源中心' : 'Strategic \nResources'}
            </h1>
            <p className="text-slate-500 max-w-2xl text-xl font-light leading-relaxed">
              {lang === 'zh' ? '您的升学百宝箱：常见问题解答与资料下载。' : 'A curated library of essential guides, analytical data, and technical support for the elite student.'}
            </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-40">
        {/* FAQ Section */}
        <section className="space-y-16">
            <div className="text-center md:text-left border-l-2 border-brand-red pl-8">
                <span className="text-[10px] font-black text-brand-red uppercase tracking-[0.4em] mb-4 block">Knowledge Base</span>
                <h2 className="text-4xl font-bold font-heading text-brand-black">{lang === 'zh' ? '常见问题 (FAQ)' : 'Frequently Asked Questions'}</h2>
            </div>
            <div className="space-y-0 divide-y divide-slate-200 border-t border-b border-slate-200">
                {MOCK_FAQS.map((faq, i) => (
                    <div key={i} className="group">
                        <button 
                            onClick={() => setOpenFaq(openFaq === i ? null : i)}
                            className="w-full py-8 text-left flex justify-between items-center transition-all group-hover:px-4"
                        >
                            <span className="text-2xl font-bold font-heading text-brand-black group-hover:text-brand-red transition-colors italic">
                                {faq.question[lang]}
                            </span>
                            <span className={`text-4xl font-light transition-transform duration-500 ${openFaq === i ? 'rotate-45 text-brand-red' : 'text-slate-200'}`}>+</span>
                        </button>
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === i ? 'max-h-[500px] opacity-100 pb-12' : 'max-h-0 opacity-0'}`}>
                            <div className="max-w-4xl text-lg text-slate-500 font-light leading-relaxed">
                                {faq.answer[lang]}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Downloads Grid - Minimal Blocks */}
        <section className="space-y-16">
            <div className="flex justify-between items-end">
                <div className="border-l-2 border-brand-red pl-8">
                    <span className="text-[10px] font-black text-brand-red uppercase tracking-[0.4em] mb-4 block">Documentation</span>
                    <h2 className="text-4xl font-bold font-heading text-brand-black">{lang === 'zh' ? '资料下载' : 'Technical Downloads'}</h2>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-slate-200">
                {[
                    { name: {zh: '常春藤录取蓝皮书', en: 'Ivy League Bluebook'}, size: '2.4 MB' },
                    { name: {zh: '美高申请Checklist', en: 'US Prep School Checklist'}, size: '1.1 MB' },
                    { name: {zh: 'IvyShuttle项目介绍手册', en: 'Program Prospectus'}, size: '5.8 MB' },
                    { name: {zh: '2025留学趋势白皮书', en: '2025 Trend Whitepaper'}, size: '3.2 MB' }
                ].map((doc, i) => (
                    <div key={i} className="p-10 flex flex-col justify-between border-r last:border-r-0 border-slate-100 bg-white group hover:bg-slate-50 transition-colors h-72">
                        <div>
                            <span className="text-[9px] font-black text-brand-red/30 mb-6 block uppercase tracking-[0.3em]">PDF Document</span>
                            <h4 className="text-xl font-bold font-heading text-brand-black leading-tight mb-2 group-hover:text-brand-red transition-colors">{doc.name[lang]}</h4>
                            <p className="text-[10px] font-mono text-slate-400">{doc.size}</p>
                        </div>
                        <button className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-black flex items-center group-hover:translate-x-2 transition-transform">
                            Download Now <span className="ml-2">→</span>
                        </button>
                    </div>
                ))}
            </div>
        </section>

        {/* Video Resources - Grayscale Aspect */}
        <section className="space-y-16">
            <div className="text-center md:text-left border-l-2 border-brand-red pl-8">
                <span className="text-[10px] font-black text-brand-red uppercase tracking-[0.4em] mb-4 block">Visual Library</span>
                <h2 className="text-4xl font-bold font-heading text-brand-black">{lang === 'zh' ? '视频资源' : 'Video Intelligence'}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {[
                    { t: {zh: 'IvyShuttle 宣讲视频', en: 'System Overview'}, img: 'vid1' },
                    { t: {zh: '名校申请讲座回放', en: 'Admissions Webinar'}, img: 'vid2' }
                ].map((v, idx) => (
                    <div key={idx} className="group relative cursor-pointer overflow-hidden border border-slate-100 shadow-2xl">
                        <div className="aspect-video bg-slate-100 grayscale group-hover:grayscale-0 transition-all duration-1000">
                            <img src={`https://picsum.photos/seed/${v.img}/1200/675`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]" alt="Video Cover" />
                        </div>
                        <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-brand-black/0 transition-colors flex items-center justify-center">
                            <div className="w-20 h-20 border border-white/40 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-brand-black/80 to-transparent">
                            <h4 className="text-xl font-bold font-heading text-white">{v.t[lang]}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </section>
      </div>
    </div>
  );
};

export default Resources;
