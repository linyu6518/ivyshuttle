
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import { Language } from '../types';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  openAI: () => void;
}

const Header: React.FC<HeaderProps> = ({ lang, setLang, openAI }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <img 
                src={lang === 'zh' ? '/logo-cn.png' : '/logo-en.png'} 
                alt="IvyShuttle" 
                className="h-12 object-contain"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-brand-red ${
                  location.pathname === item.path ? 'text-brand-red font-bold underline underline-offset-8 decoration-2' : 'text-slate-600'
                }`}
              >
                {item.label[lang]}
              </Link>
            ))}
            <button
              onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
              className="ml-4 px-3 py-1 border border-slate-300 rounded text-xs font-bold hover:bg-slate-50 transition-colors uppercase tracking-tight"
            >
              {lang === 'zh' ? 'EN' : 'CN'}
            </button>
            {/* AI Assistant Button removed from here */}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-brand-red hover:bg-slate-100 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-brand-red hover:bg-slate-50"
              >
                {item.label[lang]}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 p-3 border-t border-slate-100 mt-2">
              <button
                onClick={() => { setLang(lang === 'zh' ? 'en' : 'zh'); setIsOpen(false); }}
                className="text-left py-2 text-slate-600 font-medium"
              >
                {lang === 'zh' ? 'Switch to English' : '切换为中文'}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
