
import React, { useState, useEffect, useRef } from 'react';
import { Language } from '../types';
import { MOCK_ARTICLES } from '../constants';
import { Link, useLocation } from 'react-router-dom';

interface InsightsProps {
  lang: Language;
}

const Insights: React.FC<InsightsProps> = ({ lang }) => {
  const [category, setCategory] = useState('All');
  const location = useLocation();
  const articleRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const categories = [
    { id: 'All', label: { zh: '全部', en: 'All' } },
    { id: '美高申请', label: { zh: '美高申请', en: 'Prep School Application' } },
    { id: '大学录取趋势', label: { zh: '大学录取趋势', en: 'Admission Trends' } },
    { id: '签证与政策', label: { zh: '签证与政策', en: 'Visa & Policy' } },
    { id: '校长分享', label: { zh: '校长分享', en: 'Principal\'s Insights' } }
  ];

  const filtered = MOCK_ARTICLES.filter(a => {
    if (category === 'All') {
      return true;
    }
    const catObj = categories.find(c => c.id === category);
    const matchesCat = catObj ? a.category[lang] === catObj.label[lang] : false;
    return matchesCat;
  });

  // Always scroll to top on initial load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Handle hash and category setting
  useEffect(() => {
    const hash = location.hash;
    if (hash && hash.startsWith('#article-')) {
      const articleId = hash.replace('#article-', '');
      const article = MOCK_ARTICLES.find(a => a.id === articleId);
      
      if (article) {
        // Set the category filter to match the article
        const catObj = categories.find(c => c.label[lang] === article.category[lang]);
        if (catObj) {
          setCategory(catObj.id);
        }
      }
    }
  }, [location.hash, lang]);

  // Handle scrolling to article after category filter updates and DOM renders
  useEffect(() => {
    const hash = location.hash;
    if (hash && hash.startsWith('#article-')) {
      const articleId = hash.replace('#article-', '');
      
      // Wait longer to ensure page is fully rendered and user sees the banner first
      const scrollToArticle = () => {
        const element = articleRefs.current[articleId];
        if (element) {
          // Calculate offset to account for sticky header
          const headerOffset = 120;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          
          // Add highlight effect
          setTimeout(() => {
            element.classList.add('ring-4', 'ring-brand-red', 'ring-opacity-50');
            setTimeout(() => {
              element.classList.remove('ring-4', 'ring-brand-red', 'ring-opacity-50');
            }, 2000);
          }, 100);
          return true;
        }
        return false;
      };
      
      // Wait a bit longer so user can see the banner first, then scroll to article
      setTimeout(() => {
        let attempts = 0;
        const tryScroll = () => {
          if (scrollToArticle() || attempts >= 10) {
            return;
          }
          attempts++;
          setTimeout(tryScroll, 50);
        };
        tryScroll();
      }, 800); // Wait 800ms so user sees the banner first
    }
  }, [location.hash, category, lang]);

  return (
    <div className="bg-brand-light min-h-screen">
      {/* Header Section */}
      <section className="bg-brand-black pt-32 pb-24 text-white border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 grayscale">
            <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=2000" 
                className="w-full h-full object-cover" 
                alt="Insights Background"
            />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <span className="text-[10px] font-black text-brand-red uppercase tracking-[0.5em] mb-6 block">Resource Library</span>
            <h1 className="text-5xl sm:text-7xl font-light font-canela mb-8">
              {lang === 'zh' ? '我们的观点' : 'Our Insights'}
            </h1>
            <p className="text-slate-400 max-w-2xl text-xl font-light leading-relaxed">
              {lang === 'zh' ? '最前沿的留学动态，深度的政策解读，助您把握升学先机。' : 'Strategic analysis and deep dives into the evolving landscape of global education and elite admissions.'}
            </p>
        </div>
      </section>


      {/* Article Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {filtered.map(article => (
                <div 
                    key={article.id} 
                    id={`article-${article.id}`}
                    ref={(el) => { articleRefs.current[article.id] = el; }}
                    className="scroll-mt-32"
                >
                <Link to={`/insights/article/${article.id}`} className="group block space-y-6">
                    <div className="aspect-[16/10] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 bg-slate-100">
                        <img src={article.image} alt={article.title[lang]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                    </div>
                    <div className="space-y-4">
                        <span className="text-[9px] font-black text-brand-red uppercase tracking-[0.3em] block">{article.category[lang]}</span>
                        <h3 className="text-2xl font-bold font-heading text-brand-black leading-tight group-hover:text-brand-red transition-colors">
                            {article.title[lang]}
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed font-light line-clamp-3 italic">
                            {article.summary[lang]}
                        </p>
                        <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                            <span className="text-[10px] font-mono text-slate-400">{article.date}</span>
                            <span className="text-[10px] font-black uppercase tracking-widest text-brand-black group-hover:text-brand-red transition-colors">Read Article →</span>
                        </div>
                    </div>
                </Link>
                </div>
            ))}
        </div>

        {filtered.length === 0 && (
            <div className="text-center py-40">
                <h3 className="text-3xl font-heading text-slate-300 italic">{lang === 'zh' ? '暂无匹配文章' : 'No articles match your criteria.'}</h3>
            </div>
        )}
      </div>
    </div>
  );
};

export default Insights;
