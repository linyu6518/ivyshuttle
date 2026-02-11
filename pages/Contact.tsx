
import React, { useState } from 'react';
import { Language } from '../types';

const Contact: React.FC<{ lang: Language }> = ({ lang }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', grade: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', form);
    alert(lang === 'zh' ? '消息已发送！我们会尽快联系您。' : 'Message sent! We will contact you shortly.');
    setForm({ name: '', email: '', phone: '', grade: '', message: '' });
  };

  return (
    <div className="bg-brand-light min-h-screen">
      {/* Header Section */}
      <section className="bg-brand-black pt-32 pb-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 grayscale">
            <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2000" 
                className="w-full h-full object-cover" 
                alt="Contact Background"
            />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <span className="text-[10px] font-black text-brand-red uppercase tracking-[0.5em] mb-6 block">Communication</span>
            <h1 className="text-5xl sm:text-7xl font-light font-canela mb-8 leading-tight">
              {lang === 'zh' ? '开启您的名校之旅' : 'Connect with \nAdmissions Experts'}
            </h1>
            <p className="text-slate-400 max-w-2xl text-xl font-light leading-relaxed">
              {lang === 'zh' 
                  ? '请填写下方表单，我们的资深顾问将在24小时内为您安排评估。' 
                  : 'Establish your direct line to elite education. Our consultants provide personalized assessments for serious candidates.'}
            </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          {/* Info Side */}
          <div className="space-y-24">
            {/* Contact Information */}
            <div className="space-y-12">
                {[
                    { t: {zh: '电话咨询', en: 'Phone'}, d: {zh: '416.900.0706 / 905.910.9831', en: '416.900.0706 / 905.910.9831'}, icon: '01' },
                    { t: {zh: '电子邮箱', en: 'Email'}, d: 'info@IvyShuttle.com', icon: '02' },
                    { t: {zh: '官方微信', en: 'WeChat'}, d: 'IvyShuttle', icon: '03' }
                ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-12 group">
                        <span className="text-4xl font-black font-heading text-brand-red/10 group-hover:text-brand-red transition-colors italic">{item.icon}</span>
                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2">{item.t[lang]}</h4>
                            <p className="text-2xl font-bold font-heading text-brand-black">{typeof item.d === 'string' ? item.d : item.d[lang]}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* North America Office */}
            <div className="border border-slate-200 p-2 relative overflow-hidden group">
                <div className="absolute inset-0 bg-brand-red opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none"></div>
                <div className="aspect-video bg-slate-100 overflow-hidden grayscale">
                    <iframe 
                        src="https://maps.google.com/maps?q=7130+Warden+Ave,+Markham,+ON+L3R+1S2,+Canada&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full"
                        title="North America Office"
                    ></iframe>
                </div>
                <div className="p-8 text-center bg-white border-t border-slate-100">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-red mb-2">{lang === 'zh' ? '北美办公室' : 'North America Office'}</p>
                    <p className="text-sm font-bold font-heading text-brand-black mb-2">7130 Warden Ave., #302</p>
                    <p className="text-sm font-bold font-heading text-brand-black">Markham ON L3R 1S2 Canada</p>
                    <p className="text-xs text-slate-500 mt-2">416.900.0706 / 905.910.9831</p>
                    <p className="text-xs text-slate-500">M-F 3pm-9pm Sat 9am-6pm</p>
                </div>
            </div>

            {/* Cambridge Office */}
            <div className="border border-slate-200 p-2 relative overflow-hidden group">
                <div className="absolute inset-0 bg-brand-red opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none"></div>
                <div className="aspect-video bg-slate-100 overflow-hidden grayscale">
                    <iframe 
                        src="https://maps.google.com/maps?q=485+Massachusetts+Avenue+Suite+300,+Cambridge,+MA+02139&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full"
                        title="Cambridge Office"
                    ></iframe>
                </div>
                <div className="p-8 text-center bg-white border-t border-slate-100">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-red mb-2">{lang === 'zh' ? '剑桥办公室' : 'Cambridge Office'}</p>
                    <p className="text-sm font-bold font-heading text-brand-black mb-2">485 Massachusetts Avenue Suite 300</p>
                    <p className="text-sm font-bold font-heading text-brand-black">Cambridge, Massachusetts 02139-4018</p>
                    <p className="text-xs text-slate-500 mt-2">1.866.962.9922</p>
                    <p className="text-xs text-slate-500">United States</p>
                </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-16 shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-brand-red"></div>
            <div className="mb-12">
                <h3 className="text-3xl font-bold font-heading text-brand-black mb-4 italic">{lang === 'zh' ? '预约咨询' : 'Confidential Inquiry'}</h3>
                <p className="text-slate-500 font-light text-sm">{lang === 'zh' ? '我们将尽快回复您的咨询。' : 'Please provide the necessary information for a comprehensive evaluation.'}</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-10">
                <div className="space-y-2 group">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-focus-within:text-brand-red transition-colors">
                        {lang === 'zh' ? '全名' : 'Full Name'}
                    </label>
                    <input 
                        required 
                        type="text" 
                        className="w-full bg-transparent border-b border-slate-200 py-3 outline-none focus:border-brand-red transition-all text-lg font-light italic" 
                        value={form.name}
                        onChange={e => setForm({...form, name: e.target.value})}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-2 group">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-focus-within:text-brand-red transition-colors">
                            {lang === 'zh' ? '联系电话' : 'Phone'}
                        </label>
                        <input 
                            required 
                            type="tel" 
                            className="w-full bg-transparent border-b border-slate-200 py-3 outline-none focus:border-brand-red transition-all text-lg font-light italic" 
                            value={form.phone}
                            onChange={e => setForm({...form, phone: e.target.value})}
                        />
                    </div>
                    <div className="space-y-2 group">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-focus-within:text-brand-red transition-colors">
                            Email
                        </label>
                        <input 
                            required 
                            type="email" 
                            className="w-full bg-transparent border-b border-slate-200 py-3 outline-none focus:border-brand-red transition-all text-lg font-light italic" 
                            value={form.email}
                            onChange={e => setForm({...form, email: e.target.value})}
                        />
                    </div>
                </div>

                <div className="space-y-2 group">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-focus-within:text-brand-red transition-colors">
                        {lang === 'zh' ? '当前年级' : 'Academic Grade'}
                    </label>
                    <select 
                        required 
                        className="w-full bg-transparent border-b border-slate-200 py-3 outline-none focus:border-brand-red transition-all text-lg font-light italic appearance-none"
                        value={form.grade}
                        onChange={e => setForm({...form, grade: e.target.value})}
                    >
                        <option value="" className="text-brand-black">{lang === 'zh' ? '请选择...' : 'Select grade...'}</option>
                        <option value="Grade 8">Grade 8</option>
                        <option value="Grade 9">Grade 9</option>
                        <option value="Grade 10">Grade 10</option>
                        <option value="Grade 11">Grade 11</option>
                        <option value="Grade 12">Grade 12</option>
                    </select>
                </div>

                <div className="space-y-2 group">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-focus-within:text-brand-red transition-colors">
                        {lang === 'zh' ? '留言内容' : 'Detailed Message'}
                    </label>
                    <textarea 
                        rows={4} 
                        className="w-full bg-transparent border-b border-slate-200 py-3 outline-none focus:border-brand-red transition-all text-lg font-light italic resize-none"
                        value={form.message}
                        onChange={e => setForm({...form, message: e.target.value})}
                    ></textarea>
                </div>

                <button type="submit" className="w-full bg-brand-black text-white py-6 font-black text-xs tracking-[0.4em] uppercase hover:bg-brand-red transition-all shadow-2xl active:scale-[0.98]">
                    {lang === 'zh' ? '发送评估申请' : 'Submit for Evaluation'}
                </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
