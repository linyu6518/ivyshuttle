
import React from 'react';
import { Language } from '../types';
import { MOCK_PROGRAMS } from '../constants';

const Programs: React.FC<{ lang: Language }> = ({ lang }) => {
  return (
    <div className="bg-white min-h-screen">
      {/* Editorial Header */}
      <section className="bg-brand-black py-40 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 grayscale">
            <img src="https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Academic Background" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="text-[10px] font-black text-brand-red uppercase tracking-[0.5em] mb-8 block">Educational Excellence</span>
            <h1 className="text-6xl sm:text-8xl font-light font-canela mb-10 tracking-tight">
                {lang === 'zh' ? '项目中心' : 'Signature Curriculums'}
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-xl opacity-90 leading-relaxed font-light">
                {lang === 'zh' 
                    ? 'IvyShuttle (哈佛直通车) 秉承“精英教育”理念，不仅是升学咨询，更是能力的系统化提升。' 
                    : 'Systematic capability enhancement designed by Ivy League alumni. We move beyond simple consulting to fundamental skill mastery.'}
            </p>
        </div>
      </section>

      {/* Program Grid - Modernized Editorial Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40 space-y-48">
        {MOCK_PROGRAMS.map((p, idx) => (
            <div key={p.id} className={`flex flex-col lg:flex-row items-center gap-24 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2 space-y-12">
                    <div className="space-y-4">
                        <span className="text-[10px] font-black text-brand-red uppercase tracking-[0.4em] block">{p.grade[lang]}</span>
                        <h2 className="text-5xl font-bold font-heading text-brand-black">{p.name[lang]}</h2>
                    </div>
                    <p className="text-slate-500 text-xl leading-relaxed font-light italic border-l-2 border-brand-red pl-8">
                        "{p.summary[lang]}"
                    </p>
                    <div className="grid grid-cols-1 gap-6">
                        {p.highlights[lang].map((h, i) => (
                            <div key={i} className="flex items-center text-slate-800 group cursor-default">
                                <span className="w-2 h-2 bg-brand-red mr-6 transition-all group-hover:w-6"></span>
                                <span className="text-lg font-light tracking-tight">{h}</span>
                            </div>
                        ))}
                    </div>
                    <div className="pt-10 flex flex-wrap gap-8">
                        <button className="px-12 py-5 bg-brand-black text-white font-bold text-xs uppercase tracking-[0.2em] hover:bg-brand-red transition-all">
                            {lang === 'zh' ? '查看项目大纲' : 'Full Syllabus'}
                        </button>
                        <button className="px-12 py-5 border border-brand-black text-brand-black font-bold text-xs uppercase tracking-[0.2em] hover:bg-brand-black hover:text-white transition-all">
                            {lang === 'zh' ? '在线咨询' : 'Inquire'}
                        </button>
                    </div>
                </div>
                <div className="lg:w-1/2 w-full aspect-[5/6] relative overflow-hidden group border border-slate-100">
                    <img src={`https://picsum.photos/seed/${p.id}/1000/1200`} alt={p.name[lang]} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-brand-red/5 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
            </div>
        ))}
      </div>

      {/* Minimalist "Why" Section */}
      <section className="bg-slate-50 py-40 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-32">
                 <span className="text-[10px] font-black text-brand-red uppercase tracking-[0.5em] mb-4 block">Difference</span>
                 <h2 className="text-5xl font-bold font-heading text-brand-black">{lang === 'zh' ? '为什么选择 IvyShuttle？' : 'The IvyShuttle Standards'}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
                {[
                    { t: {zh: '藤校导师阵容', en: 'Alumni Network'}, d: {zh: '100% 来自美国顶尖名校的导师团队。', en: 'Instruction directly from those who navigated the highest academic echelons.'} },
                    { t: {zh: '个性化定制', en: 'Precision Strategy'}, d: {zh: '根据每个学生的特质，挖掘独一无二的闪光点。', en: 'We do not follow templates. Every student profile is an original academic thesis.'} },
                    { t: {zh: '结果导向', en: 'Elite Records'}, d: {zh: '多年的录取案例积累，极高的名校录取成功率。', en: 'Decades of longitudinal success in global top-tier university placement.'} },
                ].map((item, i) => (
                    <div key={i} className="space-y-8">
                        <div className="text-brand-red font-heading text-6xl font-black opacity-10">0{i+1}</div>
                        <h3 className="text-2xl font-bold font-heading text-brand-black">{item.t[lang]}</h3>
                        <p className="text-slate-500 leading-relaxed font-light">{item.d[lang]}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
