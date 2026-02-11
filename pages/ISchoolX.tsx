
import React from 'react';
import { Language } from '../types';

const ISchoolX: React.FC<{ lang: Language }> = ({ lang }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-5xl bg-white rounded shadow-2xl overflow-hidden border border-slate-100">
        <div className="bg-brand-black p-16 text-center text-white relative">
            <div className="absolute top-0 left-0 w-full h-full bg-brand-red opacity-10 pointer-events-none"></div>
            <h1 className="text-6xl font-light font-canela mb-6 tracking-tighter">iSchoolX</h1>
            <p className="text-slate-300 text-xl max-w-2xl mx-auto opacity-90 leading-relaxed font-light">
                {lang === 'zh' 
                    ? 'IvyShuttle 专属学习与作业管理系统，让每一堂课、每一份作业都尽在掌握。' 
                    : 'Exclusive LMS for IvyShuttle students. Track every lesson and homework with precision.'}
            </p>
        </div>
        
        <div className="p-16 space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                    { icon: '📅', t: {zh: '课程进度', en: 'Curriculum'}, d: {zh: '实时查看排课与学习进度。', en: 'Real-time schedule tracking.'} },
                    { icon: '📝', t: {zh: '作业反馈', en: 'Feedback'}, d: {zh: '导师在线批改，实时反馈。', en: 'Online marking & direct feedback.'} },
                    { icon: '📂', t: {zh: '资源共享', en: 'Resources'}, d: {zh: '海量学习资料一键下载。', en: 'Massive resource library.'} }
                ].map((s, i) => (
                    <div key={i} className="text-center space-y-4 p-8 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors shadow-sm">
                        <span className="text-4xl block">{s.icon}</span>
                        <h3 className="text-xl font-bold font-heading text-brand-black">{s.t[lang]}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">{s.d[lang]}</p>
                    </div>
                ))}
            </div>

            <div className="bg-slate-50 rounded-lg p-10 border border-slate-200">
                <h3 className="text-2xl font-bold font-heading text-brand-black mb-10 text-center uppercase tracking-widest">{lang === 'zh' ? '使用指南' : 'User Guide'}</h3>
                <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                    {[
                        { s: '01', t: {zh: '账号登录', en: 'Login'}, d: {zh: '使用顾问分发的学生账号登录系统。', en: 'Login with your student ID.'} },
                        { s: '02', t: {zh: '选择项目', en: 'Pick Course'}, d: {zh: '进入您报名的 ECAT 或 AP 项目空间。', en: 'Enter your enrolled program.'} },
                        { s: '03', t: {zh: '开始学习', en: 'Start!'}, d: {zh: '查看作业要求，上传并等待导师反馈。', en: 'Submit work & get feedback.'} }
                    ].map((step, i) => (
                        <div key={i} className="flex-1 space-y-4">
                            <span className="text-3xl font-black text-brand-red/20">{step.s}</span>
                            <h4 className="text-xl font-bold font-heading text-brand-black">{step.t[lang]}</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">{step.d[lang]}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center pt-10">
                <a 
                    href="https://portal.ischoolx.info/uaa/login" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-12 py-5 bg-brand-red text-white text-lg font-bold rounded shadow-2xl hover:bg-brand-black transition-all group uppercase tracking-widest"
                >
                    {content[lang].btn}
                    <span className="ml-4 group-hover:translate-x-2 transition-transform">→</span>
                </a>
                <p className="text-slate-400 text-[10px] mt-10 italic uppercase tracking-widest">
                    {lang === 'zh' ? '* iSchoolX 是 IvyShuttle 的注册商标，版权归属于 IvyShuttle Inc.' : '* iSchoolX is a registered trademark of IvyShuttle Inc.'}
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

const content = {
    zh: { btn: '立即进入 iSchoolX 系统' },
    en: { btn: 'Enter iSchoolX Portal' }
};

export default ISchoolX;
