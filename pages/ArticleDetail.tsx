
import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Language } from '../types';
import { MOCK_ARTICLES } from '../constants';

interface ArticleDetailProps {
  lang: Language;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ lang }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const article = MOCK_ARTICLES.find(a => a.id === id);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  if (!article) {
    return (
      <div className="min-h-screen bg-brand-light flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold font-heading text-brand-black mb-4">
            {lang === 'zh' ? '文章未找到' : 'Article Not Found'}
          </h1>
          <Link to="/insights" className="text-brand-red hover:underline">
            {lang === 'zh' ? '返回文章列表' : 'Back to Articles'}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-light min-h-screen">
      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        {/* Back Button and Header */}
        <div className="mb-12">
          <Link 
            to="/insights" 
            className="inline-flex items-center text-sm text-slate-600 hover:text-brand-red mb-8 transition-colors group"
          >
            <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            {lang === 'zh' ? '返回文章列表' : 'Back to Articles'}
          </Link>
          <span className="text-[10px] font-black text-brand-red uppercase tracking-[0.5em] mb-4 block">
            {article.category[lang]}
          </span>
          <h1 className="text-5xl sm:text-6xl font-light font-canela mb-6 leading-tight text-brand-black">
            {article.title[lang]}
          </h1>
          <div className="flex items-center space-x-6 text-slate-500 text-sm">
            <span className="font-mono">{article.date}</span>
            <span className="text-slate-400">•</span>
            <div className="flex items-center space-x-2">
              <img 
                src="/avatar.png" 
                alt="Jack Hu" 
                className="w-6 h-6 rounded-full object-cover"
              />
              <span>Jack Hu</span>
            </div>
          </div>
        </div>
        {/* Featured Image */}
        <div className="mb-16">
          <img 
            src={article.image} 
            alt={article.title[lang]} 
            className="w-full h-auto rounded-lg shadow-2xl"
          />
        </div>

        {/* Summary */}
        <div className="mb-16 p-8 bg-slate-50 border-l-4 border-brand-red">
          <p className="text-xl text-slate-700 leading-relaxed font-light italic">
            {article.summary[lang]}
          </p>
        </div>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none">
          {article.content && article.content[lang] ? (() => {
            const content = article.content[lang];
            if (!content || content.trim() === '') {
              return (
                <div className="space-y-6 text-slate-700 leading-relaxed">
                  <p className="text-lg">
                    {lang === 'zh' 
                      ? '文章内容正在加载中...'
                      : 'Article content is loading...'}
                  </p>
                </div>
              );
            }
            
            const lines = content.split('\n');
            const elements: JSX.Element[] = [];
            let currentParagraph: string[] = [];
            let currentBullets: string[] = [];
            let keyCounter = 0;
            
            const flushParagraph = () => {
              if (currentParagraph.length > 0) {
                const text = currentParagraph.join(' ').trim();
                if (text) {
                  elements.push(
                    <p key={`p-${keyCounter++}`} className="mb-6 text-slate-700 leading-relaxed text-lg">
                      {text}
                    </p>
                  );
                }
                currentParagraph = [];
              }
            };
            
            const flushBullets = () => {
              if (currentBullets.length > 0) {
                elements.push(
                  <ul key={`bullets-${keyCounter++}`} className="list-disc list-inside space-y-3 mb-6 ml-6">
                    {currentBullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="text-slate-700 leading-relaxed text-lg">
                        {bullet.replace(/^[•\s]+/, '').trim()}
                      </li>
                    ))}
                  </ul>
                );
                currentBullets = [];
              }
            };
            
            lines.forEach((line, lineIdx) => {
              const trimmed = line.trim();
              
              // Handle section headings (一、二、三、etc. or I. II. III. etc.)
              if (trimmed.match(/^[一二三四五六七八九十]+、/) || trimmed.match(/^[IVX]+\.\s/)) {
                flushBullets();
                flushParagraph();
                elements.push(
                  <h2 key={`heading-${keyCounter++}`} className="text-3xl font-light font-canela text-brand-black mt-12 mb-6">
                    {trimmed}
                  </h2>
                );
              }
              // Handle numbered headings (1. 2. 3. etc.)
              else if (trimmed.match(/^\d+\.\s/)) {
                flushBullets();
                flushParagraph();
                elements.push(
                  <h2 key={`heading-${keyCounter++}`} className="text-3xl font-light font-canela text-brand-black mt-12 mb-6">
                    {trimmed}
                  </h2>
                );
              }
              // Handle bullet points
              else if (trimmed.startsWith('•') || trimmed.startsWith('-')) {
                flushParagraph();
                currentBullets.push(trimmed);
              }
              // Handle empty lines
              else if (!trimmed) {
                flushBullets();
                flushParagraph();
              }
              // Regular text
              else {
                flushBullets();
                currentParagraph.push(trimmed);
              }
            });
            
            // Flush any remaining content
            flushBullets();
            flushParagraph();
            
            return <div className="space-y-4">{elements}</div>;
          })() : (
            <div className="space-y-6 text-slate-700 leading-relaxed">
              <p className="text-lg">
                {lang === 'zh' 
                  ? '这里是文章的详细内容。在实际应用中，您可以从CMS、数据库或API获取完整的文章内容。'
                  : 'This is where the full article content would be displayed. In a real application, you would fetch the complete article content from a CMS, database, or API.'}
              </p>
            </div>
          )}
        </div>

        {/* Share Section */}
        <div className="mt-16 pt-16 border-t border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm text-slate-500 uppercase tracking-wider block mb-4">
                {lang === 'zh' ? '分享文章' : 'Share Article'}
              </span>
              <div className="flex space-x-4">
                <button className="w-10 h-10 rounded-full bg-slate-200 hover:bg-brand-red hover:text-white transition-all flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-slate-200 hover:bg-brand-red hover:text-white transition-all flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-slate-200 hover:bg-brand-red hover:text-white transition-all flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm4.568 8.16c-.169 1.858-.896 3.305-2.185 4.343-.977.785-2.118 1.188-3.383 1.188-1.265 0-2.406-.403-3.383-1.188-1.289-1.038-2.016-2.485-2.185-4.343-.034-.375-.05-.754-.05-1.137 0-.383.016-.762.05-1.137.169-1.858.896-3.305 2.185-4.343C7.594.758 8.735.355 10 .355s2.406.403 3.383 1.188c1.289 1.038 2.016 2.485 2.185 4.343.034.375.05.754.05 1.137 0 .383-.016.762-.05 1.137z"/>
                  </svg>
                </button>
              </div>
            </div>
            <Link 
              to="/insights" 
              className="px-8 py-4 bg-brand-red text-white font-bold text-sm uppercase tracking-widest hover:bg-red-800 transition-all"
            >
              {lang === 'zh' ? '更多文章' : 'More Articles'}
            </Link>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-white border-t border-slate-200 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light font-canela text-brand-black mb-12 text-center">
            {lang === 'zh' ? '相关文章' : 'Related Articles'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MOCK_ARTICLES.filter(a => a.id !== article.id).slice(0, 3).map(relatedArticle => (
              <Link 
                key={relatedArticle.id} 
                to={`/insights/article/${relatedArticle.id}`}
                className="group block"
              >
                <div className="aspect-[16/10] overflow-hidden mb-6 grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img 
                    src={relatedArticle.image} 
                    alt={relatedArticle.title[lang]} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                </div>
                <span className="text-[9px] font-black text-brand-red uppercase tracking-[0.3em] block mb-2">
                  {relatedArticle.category[lang]}
                </span>
                <h3 className="text-xl font-bold font-heading text-brand-black leading-tight group-hover:text-brand-red transition-colors mb-2">
                  {relatedArticle.title[lang]}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light line-clamp-2">
                  {relatedArticle.summary[lang]}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticleDetail;
