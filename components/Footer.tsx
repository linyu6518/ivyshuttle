
import React from 'react';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const content = {
    zh: {
      about: 'IvyShuttle (哈佛直通车) 致力于通过世界级的一流训练，帮助全球优秀学子走向顶尖名校。',
      contact: '联系我们',
      links: '快速链接',
      copyright: '© 2024 IvyShuttle (Harvard Express). All rights reserved.',
      address: '地址: 深圳市南山区粤海街道某某科技园',
    },
    en: {
      about: 'IvyShuttle (Harvard Express) is dedicated to helping outstanding students globally enter top universities through world-class training.',
      contact: 'Contact Us',
      links: 'Quick Links',
      copyright: '© 2024 IvyShuttle (Harvard Express). All rights reserved.',
      address: 'Address: High-Tech Park, Nanshan District, Shenzhen',
    }
  };

  const c = content[lang];

  return (
    <footer className="bg-brand-black text-slate-400 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="col-span-1 md:col-span-2 space-y-6">
          <h2 className="text-white text-3xl font-black font-heading tracking-tight">IvyShuttle</h2>
          <p className="max-w-md leading-relaxed text-slate-400">{c.about}</p>
          <div className="flex space-x-4 pt-4">
             <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-red transition-colors cursor-pointer">
                <span className="text-white text-sm">W</span>
             </div>
             <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-red transition-colors cursor-pointer">
                <span className="text-white text-sm">L</span>
             </div>
          </div>
        </div>
        <div>
          <h3 className="text-white font-bold font-heading mb-6 uppercase tracking-widest text-sm">{c.links}</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="#/insights" className="hover:text-brand-red transition-colors">University Insights</a></li>
            <li><a href="#/programs" className="hover:text-brand-red transition-colors">Our Programs</a></li>
            <li><a href="#/ischoolx" className="hover:text-brand-red transition-colors">iSchoolX LMS</a></li>
            <li><a href="#/about" className="hover:text-brand-red transition-colors">About the Team</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold font-heading mb-6 uppercase tracking-widest text-sm">{c.contact}</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex flex-col">
                <span className="text-white font-bold mb-1">{lang === 'zh' ? '电子邮箱' : 'Email'}</span>
                <span>info@IvyShuttle.com</span>
            </li>
            <li className="flex flex-col">
                <span className="text-white font-bold mb-1">{lang === 'zh' ? '电话' : 'Phone'}</span>
                <span>416.900.0706 / 905.910.9831</span>
            </li>
            <li className="flex flex-col">
                <span className="text-white font-bold mb-1">{lang === 'zh' ? '微信' : 'WeChat'}</span>
                <span>IvyShuttle</span>
            </li>
            <li className="text-slate-500 text-xs pt-4">
              {lang === 'zh' ? (
                <>
                  <div className="mb-2">北美办公室: 7130 Warden Ave., #302, Markham ON L3R 1S2 Canada</div>
                  <div>剑桥办公室: 485 Massachusetts Ave Suite 300, Cambridge, MA 02139 USA</div>
                </>
              ) : (
                <>
                  <div className="mb-2">North America: 7130 Warden Ave., #302, Markham ON L3R 1S2 Canada</div>
                  <div>Cambridge: 485 Massachusetts Ave Suite 300, Cambridge, MA 02139 USA</div>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-8 border-t border-white/5 text-center text-[10px] uppercase tracking-[0.3em]">
        {c.copyright}
      </div>
    </footer>
  );
};

export default Footer;
