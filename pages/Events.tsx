
import React, { useState } from 'react';
import { Language } from '../types';
import { MOCK_EVENTS } from '../constants';

const Events: React.FC<{ lang: Language }> = ({ lang }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  const openRegister = (title: string) => {
      setSelectedEvent(title);
      setShowModal(true);
  };

  return (
    <div className="bg-brand-light min-h-screen">
      {/* Editorial Header */}
      <section className="bg-white pt-32 pb-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-[10px] font-black text-brand-red uppercase tracking-[0.5em] mb-6 block">Engagement</span>
            <h1 className="text-5xl sm:text-7xl font-light font-canela text-brand-black mb-8 leading-tight">
              {lang === 'zh' ? '活动与讲座' : 'Global Events & \nSeminars'}
            </h1>
            <p className="text-slate-500 max-w-2xl text-xl font-light leading-relaxed">
              {lang === 'zh' ? '与专家面对面，掌握升学一手资讯。' : 'Direct dialogues with alumni and admissions experts. Secure your seat for the next intelligence briefing.'}
            </p>
        </div>
      </section>

      {/* Event List - Architectural Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="space-y-0 divide-y divide-slate-200 border-t border-b border-slate-200">
          {MOCK_EVENTS.map(ev => (
            <div key={ev.id} className="py-16 flex flex-col lg:flex-row lg:items-center justify-between gap-12 group">
              <div className="flex flex-col md:flex-row md:items-start gap-12 lg:gap-24">
                <div className="flex flex-col items-center justify-center shrink-0 border-r border-slate-100 pr-12">
                    <span className="text-[10px] font-black text-brand-red uppercase tracking-[0.3em] mb-2">{ev.date.split('-')[1]} MO</span>
                    <span className="text-6xl font-black font-heading tracking-tighter text-brand-black">{ev.date.split('-')[2]}</span>
                </div>
                <div className="max-w-2xl space-y-6">
                    <span className="inline-block px-3 py-1 border border-brand-red text-brand-red text-[9px] font-black uppercase tracking-widest">
                        {ev.type[lang]}
                    </span>
                    <h3 className="text-3xl font-bold font-heading text-brand-black group-hover:text-brand-red transition-colors leading-tight">
                        {ev.title[lang]}
                    </h3>
                    <p className="text-slate-500 text-lg leading-relaxed font-light italic">
                        "{ev.description[lang]}"
                    </p>
                    <div className="flex space-x-8 text-[10px] font-mono text-slate-400 uppercase tracking-wider pt-2">
                        <span className="flex items-center">Time: {ev.time}</span>
                        <span className="flex items-center">Capacity: Limited</span>
                    </div>
                </div>
              </div>
              <button 
                  onClick={() => openRegister(ev.title[lang])}
                  className="px-12 py-5 bg-brand-black text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-brand-red transition-all shadow-xl self-start lg:self-center"
              >
                  {lang === 'zh' ? '预约席位' : 'Apply for Seat'}
              </button>
            </div>
          ))}
        </div>

        {/* Past Events - Monochromatic Grid */}
        <div className="mt-40">
            <h2 className="text-3xl font-bold font-heading text-brand-black mb-16 text-center italic opacity-30">Archive Records</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[1,2,3].map(i => (
                    <div key={i} className="group cursor-not-allowed">
                        <div className="aspect-video bg-slate-100 mb-8 grayscale opacity-40 group-hover:opacity-60 transition-opacity"></div>
                        <div className="space-y-3 opacity-30">
                            <div className="h-1 w-12 bg-slate-300"></div>
                            <h4 className="text-lg font-bold font-heading">Archived Webinar Session</h4>
                            <p className="text-xs font-mono uppercase">Dec 2023</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* Register Modal - Refined Harvard Theme */}
      {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-black/80 backdrop-blur-sm animate-in fade-in duration-300">
              <div className="bg-white rounded shadow-2xl max-w-lg w-full relative overflow-hidden animate-in zoom-in-95 duration-300">
                  <div className="bg-brand-red p-8 text-white relative">
                      <button onClick={() => setShowModal(false)} className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-2 block opacity-80">Registration Portal</span>
                      <h3 className="text-3xl font-bold font-heading">{lang === 'zh' ? '活动报名' : 'Secure Access'}</h3>
                  </div>
                  <div className="p-10 space-y-8">
                      <div className="pb-6 border-b border-slate-100">
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Selected Program</p>
                          <p className="text-lg font-heading italic text-brand-black">{selectedEvent}</p>
                      </div>
                      <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Registration Successful.'); setShowModal(false); }}>
                          <div className="grid grid-cols-2 gap-6">
                              <div className="space-y-2">
                                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Student Name</label>
                                  <input required type="text" className="w-full px-0 py-2 border-b border-slate-200 outline-none focus:border-brand-red text-sm font-light transition-colors" />
                              </div>
                              <div className="space-y-2">
                                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Address</label>
                                  <input required type="email" className="w-full px-0 py-2 border-b border-slate-200 outline-none focus:border-brand-red text-sm font-light transition-colors" />
                              </div>
                          </div>
                          <div className="space-y-2">
                              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Current Grade</label>
                              <select required className="w-full px-0 py-2 border-b border-slate-200 outline-none focus:border-brand-red text-sm font-light appearance-none bg-transparent">
                                  <option value="">{lang === 'zh' ? '请选择年级' : 'Select Grade'}</option>
                                  <option>9th</option><option>10th</option><option>11th</option><option>12th</option>
                              </select>
                          </div>
                          <button type="submit" className="w-full bg-brand-black text-white py-5 font-black text-xs tracking-[0.3em] uppercase hover:bg-brand-red transition-all shadow-xl">
                              {lang === 'zh' ? '提交申请' : 'Confirm Registration'}
                          </button>
                      </form>
                  </div>
              </div>
          </div>
      )}
    </div>
  );
};

export default Events;
