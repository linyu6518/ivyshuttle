
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { MOCK_ARTICLES, MOCK_PROGRAMS, MOCK_EVENTS } from '../constants';

interface HomeProps {
  lang: Language;
  openAI: () => void;
}

const Home: React.FC<HomeProps> = ({ lang, openAI }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Set video properties
      video.muted = true;
      video.playsInline = true;
      
      // Handle video loaded
      const handleLoadedData = () => {
        video.play().catch((error) => {
          console.error('Video play error:', error);
        });
      };
      
      // Handle video can play
      const handleCanPlay = () => {
        video.play().catch((error) => {
          console.error('Video play error:', error);
        });
      };
      
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('canplay', handleCanPlay);
      
      // Try to play immediately
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error('Video play error:', error);
        });
      }
      
      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, []);

  const content = {
    zh: {
      heroTitle: '用顶尖教育训练，帮学生走向世界名校',
      heroSubtitle: 'IvyShuttle (哈佛直通车) 为有志于北美名校的学子提供精英成长的一站式路径。',
      cta1: '了解项目',
      cta2: '预约咨询',
      sectionInsights: '我们的观点',
      sectionPrograms: '我们的项目',
      sectionEvents: '即将开始的活动',
      ischoolxTitle: 'iSchoolX 学习系统',
      ischoolxText: '集成化教学管理，让学习路径更清晰、导师互动更直接。',
      ischoolxBtn: '前往学习系统'
    },
    en: {
      heroTitle: 'Elite Training for Global Success',
      heroSubtitle: 'IvyShuttle (Harvard Express) provides an elite pathway for ambitious students to reach premier North American institutions.',
      cta1: 'Explore Programs',
      cta2: 'Book Consultation',
      sectionInsights: 'Our Insights',
      sectionPrograms: 'Signature Programs',
      sectionEvents: 'Upcoming Seminars',
      ischoolxTitle: 'iSchoolX Platform',
      ischoolxText: 'Integrated learning management system designed for transparent progress and direct faculty interaction.',
      ischoolxBtn: 'Enter System'
    }
  }[lang];

  return (
    <div className="space-y-0 pb-0">
      {/* Hero Section - No bottom gradient, cleaner architecture */}
      <section className="relative h-[64vh] flex items-center bg-brand-black overflow-hidden">
        <div className="absolute inset-0 z-0">
            <video 
                ref={videoRef}
                src="/hero-video.mp4"
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                style={{ minWidth: '100%', minHeight: '100%', width: '100%', height: '100%' }}
            />
        </div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70 z-[1] pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white z-10">
          <div className="max-w-4xl">
            <h1 className="text-6xl sm:text-8xl font-light font-canela leading-[1.1] mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              {content.heroTitle}
            </h1>
            <p className="text-xl sm:text-2xl text-slate-200 mb-12 opacity-90 max-w-2xl font-light leading-relaxed">
              {content.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
              <Link to="/programs" className="px-12 py-5 bg-brand-red text-white font-bold text-center hover:bg-red-800 transition-all uppercase tracking-widest text-xs">
                {content.cta1}
              </Link>
              <Link to="/contact" className="px-12 py-5 border border-white/40 text-white font-bold text-center hover:bg-white hover:text-brand-black transition-all uppercase tracking-widest text-xs">
                {content.cta2}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Grid - Modernized Card Style (Minimalist) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-20 grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-200 bg-white">
        {MOCK_PROGRAMS.map((p, idx) => (
            <Link 
                to="/programs" 
                key={p.id} 
                className={`p-12 transition-all group hover:bg-slate-50 flex flex-col justify-between min-h-[400px] ${idx !== 2 ? 'border-r border-slate-100' : ''}`}
            >
                <div>
                    <div className="text-4xl mb-8 group-hover:scale-110 transition-transform duration-500 origin-left grayscale group-hover:grayscale-0">{p.icon}</div>
                    <h3 className="font-bold font-heading text-2xl mb-6 text-brand-black group-hover:text-brand-red transition-colors">{p.name[lang]}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-light">{p.summary[lang]}</p>
                </div>
                <div className="pt-8 text-[10px] font-black tracking-[0.3em] uppercase text-brand-red">
                    {lang === 'zh' ? '查看详情' : 'View Details'}
                </div>
            </Link>
        ))}
        <div className="bg-brand-black p-12 text-white flex flex-col justify-between min-h-[400px]">
            <div>
                <h3 className="font-bold font-heading text-2xl mb-6">iSchoolX</h3>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed font-light">{content.ischoolxText}</p>
            </div>
            <Link to="/ischoolx" className="inline-flex items-center space-x-4 text-white font-bold text-xs tracking-[0.2em] uppercase hover:text-brand-red transition-colors">
                <span>{content.ischoolxBtn}</span>
                <span className="text-lg">→</span>
            </Link>
        </div>
      </div>

      {/* Ivy League Schools - Animated Logo Carousel */}
      <section className="bg-white py-24 border-t border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-4xl font-light font-canela text-brand-black text-center mb-4">
            {lang === 'zh' ? '我们的学生在以下学校' : 'Our Students at These Universities'}
          </h2>
          <p className="text-slate-500 text-center text-sm uppercase tracking-widest">
            {lang === 'zh' ? '常春藤联盟' : 'Ivy League'}
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-16">
            {/* First set of logos */}
            {[
              { name: 'Harvard', logo: '/logos/logo_harvard.gif' },
              { name: 'Yale', logo: '/logos/logo_yale.jpg' },
              { name: 'Princeton', logo: '/logos/logo_princeton.gif' },
              { name: 'Columbia', logo: '/logos/logo_columbia.jpg' },
              { name: 'Brown', logo: '/logos/logo_brown.jpg' },
              { name: 'Stanford', logo: '/logos/logo_stanford.gif' },
              { name: 'Amherst', logo: '/logos/logo_amherst.jpg' },
              { name: 'Swarthmore', logo: '/logos/logo_swarthmore.jpg' }
            ].map((school, idx) => (
              <div key={`first-${idx}`} className="flex-shrink-0 w-32 h-32 flex items-center justify-center transition-all duration-500 opacity-80 hover:opacity-100">
                <img src={school.logo} alt={school.name} className="max-w-full max-h-full object-contain" />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {[
              { name: 'Harvard', logo: '/logos/logo_harvard.gif' },
              { name: 'Yale', logo: '/logos/logo_yale.jpg' },
              { name: 'Princeton', logo: '/logos/logo_princeton.gif' },
              { name: 'Columbia', logo: '/logos/logo_columbia.jpg' },
              { name: 'Brown', logo: '/logos/logo_brown.jpg' },
              { name: 'Stanford', logo: '/logos/logo_stanford.gif' },
              { name: 'Amherst', logo: '/logos/logo_amherst.jpg' },
              { name: 'Swarthmore', logo: '/logos/logo_swarthmore.jpg' }
            ].map((school, idx) => (
              <div key={`second-${idx}`} className="flex-shrink-0 w-32 h-32 flex items-center justify-center transition-all duration-500 opacity-80 hover:opacity-100">
                <img src={school.logo} alt={school.name} className="max-w-full max-h-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Preview - Editorial Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 space-y-8 md:space-y-0">
            <div className="max-w-2xl">
                <span className="text-[10px] font-black text-brand-red uppercase tracking-[0.5em] mb-4 block">Perspective</span>
                <h2 className="text-5xl font-bold font-heading text-brand-black">{content.sectionInsights}</h2>
            </div>
            <Link to="/insights" className="text-brand-red font-bold text-xs uppercase tracking-widest border-b border-brand-red pb-2 hover:opacity-70 transition-opacity">
                All Articles
            </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {MOCK_ARTICLES.slice(0, 2).map(article => (
                <Link to={`/insights/article/${article.id}`} key={article.id} className="group block">
                    <div className="aspect-[16/10] overflow-hidden mb-10 grayscale hover:grayscale-0 transition-all duration-700">
                        <img src={article.image} alt={article.title[lang]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                    </div>
                    <div className="space-y-4">
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.3em]">{article.category[lang]}</span>
                        <h3 className="text-3xl font-bold font-heading text-brand-black leading-tight group-hover:text-brand-red transition-colors">
                            {article.title[lang]}
                        </h3>
                        <p className="text-slate-500 text-base leading-relaxed font-light line-clamp-2">{article.summary[lang]}</p>
                        <div className="pt-4 flex items-center space-x-4 text-[10px] font-mono text-slate-400">
                            <span>{article.date}</span>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
      </section>

      {/* Events Quick List - Modern & Minimal */}
      <section className="bg-slate-50 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold font-heading text-brand-black mb-20 text-center">{content.sectionEvents}</h2>
            <div className="space-y-1 divide-y divide-slate-200 max-w-5xl mx-auto border-t border-b border-slate-200">
                {MOCK_EVENTS.map(event => (
                    <div key={event.id} className="py-12 flex flex-col md:flex-row md:items-center justify-between gap-8 group">
                        <div className="flex items-start space-x-12">
                            <div className="text-brand-red flex flex-col items-center justify-center shrink-0">
                                <span className="text-[10px] uppercase tracking-widest font-black mb-1 opacity-60">{event.date.split('-')[1]} MO</span>
                                <span className="text-4xl font-black font-heading tracking-tighter">{event.date.split('-')[2]}</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold font-heading text-brand-black group-hover:text-brand-red transition-colors">{event.title[lang]}</h3>
                                <div className="flex space-x-8 mt-3 text-slate-400 text-xs font-medium uppercase tracking-widest">
                                    <span className="flex items-center">🕒 {event.time}</span>
                                    <span className="flex items-center">📍 {event.type[lang]}</span>
                                </div>
                            </div>
                        </div>
                        <Link to="/events" className="px-10 py-3 border border-brand-black text-brand-black font-bold text-[10px] tracking-widest uppercase hover:bg-brand-black hover:text-white transition-all text-center">
                            {lang === 'zh' ? '立即报名' : 'Secure a Seat'}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Success Stories - Floating Testimonials */}
      <section className="bg-slate-50 py-32 border-t border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center">
            <span className="text-[10px] font-black text-brand-red uppercase tracking-[0.5em] mb-6 block">Success Stories</span>
            <h2 className="text-5xl sm:text-6xl font-light font-canela text-brand-black mb-6">
              {lang === 'zh' ? '一段伟大的自我发现之旅' : 'A Great Self Discovery Journey'}
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
              {lang === 'zh' 
                ? '见证我们的学生如何通过 Ivy Shuttle 实现他们的梦想' 
                : 'Discover how our students achieved their dreams through Ivy Shuttle'}
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-slow space-x-6">
            {/* First set of testimonials */}
            {(() => {
              const getUniversityLogo = (university: string) => {
                const logoMap: { [key: string]: string } = {
                  'Harvard': '/logos/logo_harvard.gif',
                  'Stanford': '/logos/logo_stanford.gif',
                  'Columbia': '/logos/logo_columbia.jpg',
                  'Yale': '/logos/logo_yale.jpg',
                  'Princeton': '/logos/logo_princeton.gif',
                  'Brown': '/logos/logo_brown.jpg',
                  'UPenn': null,
                  'Duke': '/logos/Duke_University_seal.svg'
                };
                return logoMap[university] || null;
              };
              const getStudentPhoto = (name: string) => {
                const photoMap: { [key: string]: string } = {
                  'Susan': '/cases/Susan.png',
                  'Lawrence': '/cases/Lawrence.png',
                  'Emily': '/cases/Emily.png',
                  'Sherry': '/cases/Sherry.png',
                  'Tony': '/cases/Tony.png',
                  'Oscar': '/cases/Oscar.png',
                  'Melody': '/cases/Melody.png',
                  'Harry': '/cases/Harry.png'
                };
                return photoMap[name] || null;
              };
              return [
              { 
                name: 'Susan', 
                nameZh: '苏珊',
                photo: getStudentPhoto('Susan'),
                achievement: { 
                  zh: '全奖进入杜克大学,曾同时被斯坦福等四所名校录取,杭州年度新闻人物,大陆当年唯一一位被杜克大学以全额奖学金录取的学生。',
                  en: 'Full scholarship to Duke University, also admitted by Stanford and four other prestigious universities, Hangzhou Person of the Year, the only student from mainland China admitted by Duke with a full scholarship that year.'
                },
                quote: {
                  zh: 'IVYSHUTTLE哈佛直通车ECAT是一个真正的教育项目，帮助孩子认识和培养自己的优秀品质，成长超越大学录取。',
                  en: 'IVYSHUTTLE Harvard Express ECAT is a real educational program that helps students understand and cultivate their own excellent qualities, leading to growth beyond just university admission.'
                },
                university: 'Duke',
                year: '2012'
              },
              { 
                name: 'Lawrence',
                photo: getStudentPhoto('Lawrence'),
                achievement: { 
                  zh: '2012年入读哈佛大学同时被斯坦福等八所名校录取。2011年考入哈佛,一个在哈佛只上了两年就修完四年学分,并提前毕业的学生。',
                  en: 'Admitted to Harvard University in 2012, also admitted by Stanford and eight other prestigious universities. Entered Harvard in 2011, completed four years of credits in just two years and graduated early.'
                },
                quote: {
                  zh: '经过IVYSHUTTLE ECAT训练后，进入美国顶尖大学不再是孩子的唯一目标。训练帮助孩子培养个人品质，在整个成长过程中提供持续收益。',
                  en: 'After IVYSHUTTLE ECAT training, getting into a top American university is no longer the only goal. The training helped cultivate personal qualities, providing continuous benefits throughout growth.'
                },
                university: 'Harvard',
                year: '2012'
              },
              { 
                name: 'Emily',
                photo: getStudentPhoto('Emily'),
                achievement: { 
                  zh: '2018年入读斯坦福,同时被宾大,伯克利,UCLA录取。',
                  en: 'Admitted to Stanford in 2018, also admitted by UPenn, Berkeley, and UCLA.'
                },
                quote: {
                  zh: '一个数学和科学基础扎实的学生，对文学、历史和时事的热情促使她深入研究朝鲜核武器问题，发现了连特朗普都感到困扰的问题。',
                  en: 'A student with strong foundation in mathematics and science, whose passion for literature, history, and current affairs led her to research the North Korean nuclear weapons issue.'
                },
                university: 'Stanford',
                year: '2018'
              },
              { 
                name: 'Sherry',
                photo: getStudentPhoto('Sherry'),
                achievement: { 
                  zh: '2016年入读哥伦比亚(提前录取)',
                  en: 'Admitted to Columbia University in 2016 (early admission)'
                },
                quote: {
                  zh: 'Sherry的梦想大学是NYU，哥伦比亚似乎遥不可及。从十年级开始Ivy Shuttle后，她的勤奋和智慧让她提前被哥伦比亚录取，这超出了我们的想象。',
                  en: 'Sherry\'s dream university was NYU, and Columbia seemed out of reach. After starting Ivy Shuttle in tenth grade, her diligence led to early admission to Columbia.'
                },
                university: 'Columbia',
                year: '2016'
              },
              { 
                name: 'Tony',
                photo: getStudentPhoto('Tony'),
                achievement: { 
                  zh: '2016年入读斯坦福大学。同时被斯坦福等八所名校录取。一个弃哈佛而奔斯坦福的学生。',
                  en: 'Admitted to Stanford University in 2016. Also admitted by Stanford and eight other prestigious universities. A student who chose Stanford over Harvard.'
                },
                quote: {
                  zh: 'Tony的父母从北美的朋友那里了解到IVYSHUTTLE ECAT项目，为了训练从深圳搬到北美，Tony最终被申请的九所大学中的八所录取。',
                  en: 'Tony\'s parents learned about IVYSHUTTLE ECAT from a friend in North America, moved from Shenzhen for training, and Tony was admitted by eight out of nine universities.'
                },
                university: 'Stanford',
                year: '2016'
              },
              { 
                name: 'Oscar',
                photo: getStudentPhoto('Oscar'),
                achievement: { 
                  zh: '2015年入读哈佛大学(提前录取)要先掐掐自己才相信被哈佛提前录取。',
                  en: 'Admitted to Harvard University in 2015 (early admission). Had to pinch himself to believe he was admitted early by Harvard.'
                },
                quote: {
                  zh: 'IVYSHUTTLE ECAT导师团队来自哈佛、MIT、哥伦比亚和普林斯顿，精通文理，融合东西方文化，拥有超强的指导能力，帮助孩子提前实现哈佛梦想！',
                  en: 'IVYSHUTTLE ECAT mentor team from Harvard, MIT, Columbia, and Princeton, well-versed in arts and sciences, bridging cultures, helped achieve the Harvard dream ahead of schedule!'
                },
                university: 'Harvard',
                year: '2015'
              },
              { 
                name: 'Melody',
                photo: getStudentPhoto('Melody'),
                achievement: { 
                  zh: '2017年入读哥伦比亚大学并获得七万奖学金。同时被斯坦福,加州理工等名校录取。一个拒绝美国最难进的斯坦福的学生。',
                  en: 'Admitted to Columbia University in 2017 with a $70,000 scholarship. Also admitted by Stanford, Caltech, and other prestigious universities. A student who rejected Stanford.'
                },
                quote: {
                  zh: '来自南京外国语学校的Melody，尽管只在十二年级开始Ivy Shuttle，但收获很多。她对文书修改过程印象深刻，相比之前"僵硬"的文书有了显著改进。',
                  en: 'Melody from Nanjing Foreign Language School gained a lot despite starting Ivy Shuttle in twelfth grade. She was impressed with the essay revision process and significant improvement.'
                },
                university: 'Columbia',
                year: '2017'
              },
              { 
                name: 'Harry',
                photo: getStudentPhoto('Harry'),
                achievement: { 
                  zh: '2016年全奖入读宾大。同时被杜克等五所名校录取。不仅进藤校,还有奖学金而且是全额奖学金。',
                  en: 'Admitted to UPenn with a full scholarship in 2016. Also admitted by Duke and five other prestigious universities. Not only got into an Ivy League school, but also received a full scholarship.'
                },
                quote: {
                  zh: '从上海到多伦多，从政府资助的夏令营中学会了回馈社区。以城市规划创意赢得比赛，成为唯一受邀参加多伦多市政府交通拥堵会议的高中生。',
                  en: 'From Shanghai to Toronto, learned to give back through government-sponsored summer camps. Won a creative competition with city-planning idea, became the only high school student invited to Toronto City Government conference.'
                },
                university: 'UPenn',
                year: '2016'
              }
            ].map((student, idx) => {
              const universityLogo = getUniversityLogo(student.university);
              return (
              <div key={`first-${idx}`} className="flex-shrink-0 w-96 bg-white border border-slate-200 p-8 hover:border-brand-red/30 transition-all duration-500 group relative">
                {universityLogo && (
                  <div className="absolute top-4 right-4">
                    <img src={universityLogo} alt={student.university} className="w-16 h-16 object-contain opacity-90" />
                  </div>
                )}
                <div className="flex items-start mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden mr-5 bg-slate-100 flex-shrink-0 border-2 border-slate-100 group-hover:border-brand-red/20 transition-colors">
                    <img src={student.photo || `https://picsum.photos/seed/student${idx}/200/200`} alt={student.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold font-heading text-brand-black text-lg mb-1">{lang === 'zh' ? (student.nameZh || student.name) : student.name}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <p className="text-brand-red text-sm font-bold uppercase tracking-wider">{student.university}</p>
                    </div>
                    <p className="text-slate-400 text-xs">{student.year}</p>
                  </div>
                </div>
                <div className="mb-4 pb-4 border-b border-slate-100">
                  <p className="text-slate-700 text-sm leading-relaxed font-light">{student.achievement[lang]}</p>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed italic line-clamp-4">{student.quote[lang]}</p>
              </div>
            );
            })})()}
            {/* Duplicate set for seamless loop */}
            {(() => {
              const getUniversityLogo = (university: string) => {
                const logoMap: { [key: string]: string } = {
                  'Harvard': '/logos/logo_harvard.gif',
                  'Stanford': '/logos/logo_stanford.gif',
                  'Columbia': '/logos/logo_columbia.jpg',
                  'Yale': '/logos/logo_yale.jpg',
                  'Princeton': '/logos/logo_princeton.gif',
                  'Brown': '/logos/logo_brown.jpg',
                  'UPenn': null,
                  'Duke': '/logos/Duke_University_seal.svg'
                };
                return logoMap[university] || null;
              };
              const getStudentPhoto = (name: string) => {
                const photoMap: { [key: string]: string } = {
                  'Susan': '/cases/Susan.png',
                  'Lawrence': '/cases/Lawrence.png',
                  'Emily': '/cases/Emily.png',
                  'Sherry': '/cases/Sherry.png',
                  'Tony': '/cases/Tony.png',
                  'Oscar': '/cases/Oscar.png',
                  'Melody': '/cases/Melody.png',
                  'Harry': '/cases/Harry.png'
                };
                return photoMap[name] || null;
              };
              return [
              { 
                name: 'Susan', 
                nameZh: '苏珊',
                photo: getStudentPhoto('Susan'),
                achievement: { 
                  zh: '全奖进入杜克大学,曾同时被斯坦福等四所名校录取,杭州年度新闻人物,大陆当年唯一一位被杜克大学以全额奖学金录取的学生。',
                  en: 'Full scholarship to Duke University, also admitted by Stanford and four other prestigious universities, Hangzhou Person of the Year, the only student from mainland China admitted by Duke with a full scholarship that year.'
                },
                quote: {
                  zh: 'IVYSHUTTLE哈佛直通车ECAT是一个真正的教育项目，帮助孩子认识和培养自己的优秀品质，成长超越大学录取。',
                  en: 'IVYSHUTTLE Harvard Express ECAT is a real educational program that helps students understand and cultivate their own excellent qualities, leading to growth beyond just university admission.'
                },
                university: 'Duke',
                year: '2012'
              },
              { 
                name: 'Lawrence',
                photo: getStudentPhoto('Lawrence'),
                achievement: { 
                  zh: '2012年入读哈佛大学同时被斯坦福等八所名校录取。2011年考入哈佛,一个在哈佛只上了两年就修完四年学分,并提前毕业的学生。',
                  en: 'Admitted to Harvard University in 2012, also admitted by Stanford and eight other prestigious universities. Entered Harvard in 2011, completed four years of credits in just two years and graduated early.'
                },
                quote: {
                  zh: '经过IVYSHUTTLE ECAT训练后，进入美国顶尖大学不再是孩子的唯一目标。训练帮助孩子培养个人品质，在整个成长过程中提供持续收益。',
                  en: 'After IVYSHUTTLE ECAT training, getting into a top American university is no longer the only goal. The training helped cultivate personal qualities, providing continuous benefits throughout growth.'
                },
                university: 'Harvard',
                year: '2012'
              },
              { 
                name: 'Emily',
                photo: getStudentPhoto('Emily'),
                achievement: { 
                  zh: '2018年入读斯坦福,同时被宾大,伯克利,UCLA录取。',
                  en: 'Admitted to Stanford in 2018, also admitted by UPenn, Berkeley, and UCLA.'
                },
                quote: {
                  zh: '一个数学和科学基础扎实的学生，对文学、历史和时事的热情促使她深入研究朝鲜核武器问题，发现了连特朗普都感到困扰的问题。',
                  en: 'A student with strong foundation in mathematics and science, whose passion for literature, history, and current affairs led her to research the North Korean nuclear weapons issue.'
                },
                university: 'Stanford',
                year: '2018'
              },
              { 
                name: 'Sherry',
                photo: getStudentPhoto('Sherry'),
                achievement: { 
                  zh: '2016年入读哥伦比亚(提前录取)',
                  en: 'Admitted to Columbia University in 2016 (early admission)'
                },
                quote: {
                  zh: 'Sherry的梦想大学是NYU，哥伦比亚似乎遥不可及。从十年级开始Ivy Shuttle后，她的勤奋和智慧让她提前被哥伦比亚录取，这超出了我们的想象。',
                  en: 'Sherry\'s dream university was NYU, and Columbia seemed out of reach. After starting Ivy Shuttle in tenth grade, her diligence led to early admission to Columbia.'
                },
                university: 'Columbia',
                year: '2016'
              },
              { 
                name: 'Tony',
                photo: getStudentPhoto('Tony'),
                achievement: { 
                  zh: '2016年入读斯坦福大学。同时被斯坦福等八所名校录取。一个弃哈佛而奔斯坦福的学生。',
                  en: 'Admitted to Stanford University in 2016. Also admitted by Stanford and eight other prestigious universities. A student who chose Stanford over Harvard.'
                },
                quote: {
                  zh: 'Tony的父母从北美的朋友那里了解到IVYSHUTTLE ECAT项目，为了训练从深圳搬到北美，Tony最终被申请的九所大学中的八所录取。',
                  en: 'Tony\'s parents learned about IVYSHUTTLE ECAT from a friend in North America, moved from Shenzhen for training, and Tony was admitted by eight out of nine universities.'
                },
                university: 'Stanford',
                year: '2016'
              },
              { 
                name: 'Oscar',
                photo: getStudentPhoto('Oscar'),
                achievement: { 
                  zh: '2015年入读哈佛大学(提前录取)要先掐掐自己才相信被哈佛提前录取。',
                  en: 'Admitted to Harvard University in 2015 (early admission). Had to pinch himself to believe he was admitted early by Harvard.'
                },
                quote: {
                  zh: 'IVYSHUTTLE ECAT导师团队来自哈佛、MIT、哥伦比亚和普林斯顿，精通文理，融合东西方文化，拥有超强的指导能力，帮助孩子提前实现哈佛梦想！',
                  en: 'IVYSHUTTLE ECAT mentor team from Harvard, MIT, Columbia, and Princeton, well-versed in arts and sciences, bridging cultures, helped achieve the Harvard dream ahead of schedule!'
                },
                university: 'Harvard',
                year: '2015'
              },
              { 
                name: 'Melody',
                photo: getStudentPhoto('Melody'),
                achievement: { 
                  zh: '2017年入读哥伦比亚大学并获得七万奖学金。同时被斯坦福,加州理工等名校录取。一个拒绝美国最难进的斯坦福的学生。',
                  en: 'Admitted to Columbia University in 2017 with a $70,000 scholarship. Also admitted by Stanford, Caltech, and other prestigious universities. A student who rejected Stanford.'
                },
                quote: {
                  zh: '来自南京外国语学校的Melody，尽管只在十二年级开始Ivy Shuttle，但收获很多。她对文书修改过程印象深刻，相比之前"僵硬"的文书有了显著改进。',
                  en: 'Melody from Nanjing Foreign Language School gained a lot despite starting Ivy Shuttle in twelfth grade. She was impressed with the essay revision process and significant improvement.'
                },
                university: 'Columbia',
                year: '2017'
              },
              { 
                name: 'Harry',
                photo: getStudentPhoto('Harry'),
                achievement: { 
                  zh: '2016年全奖入读宾大。同时被杜克等五所名校录取。不仅进藤校,还有奖学金而且是全额奖学金。',
                  en: 'Admitted to UPenn with a full scholarship in 2016. Also admitted by Duke and five other prestigious universities. Not only got into an Ivy League school, but also received a full scholarship.'
                },
                quote: {
                  zh: '从上海到多伦多，从政府资助的夏令营中学会了回馈社区。以城市规划创意赢得比赛，成为唯一受邀参加多伦多市政府交通拥堵会议的高中生。',
                  en: 'From Shanghai to Toronto, learned to give back through government-sponsored summer camps. Won a creative competition with city-planning idea, became the only high school student invited to Toronto City Government conference.'
                },
                university: 'UPenn',
                year: '2016'
              }
            ].map((student, idx) => {
              const universityLogo = getUniversityLogo(student.university);
              return (
              <div key={`second-${idx}`} className="flex-shrink-0 w-96 bg-white border border-slate-200 p-8 hover:border-brand-red/30 transition-all duration-500 group relative">
                {universityLogo && (
                  <div className="absolute top-4 right-4">
                    <img src={universityLogo} alt={student.university} className="w-16 h-16 object-contain opacity-90" />
                  </div>
                )}
                <div className="flex items-start mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden mr-5 bg-slate-100 flex-shrink-0 border-2 border-slate-100 group-hover:border-brand-red/20 transition-colors">
                    <img src={student.photo || `https://picsum.photos/seed/student${idx}/200/200`} alt={student.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold font-heading text-brand-black text-lg mb-1">{lang === 'zh' ? (student.nameZh || student.name) : student.name}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <p className="text-brand-red text-sm font-bold uppercase tracking-wider">{student.university}</p>
                    </div>
                    <p className="text-slate-400 text-xs">{student.year}</p>
                  </div>
                </div>
                <div className="mb-4 pb-4 border-b border-slate-100">
                  <p className="text-slate-700 text-sm leading-relaxed font-light">{student.achievement[lang]}</p>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed italic line-clamp-4">{student.quote[lang]}</p>
              </div>
            );
            })})()}
          </div>
        </div>
      </section>

      {/* AI Assistant Banner - Full-Width, Sophisticated Non-Red Background */}
      <section className="w-full bg-[#f8f8f8] border-t border-slate-100 py-32 overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
             <div className="text-[40rem] font-black font-heading text-brand-black leading-none select-none">IVY</div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="text-[10px] font-black text-brand-red uppercase tracking-[0.5em] mb-8 block">Next Generation Service</span>
            <h2 className="text-5xl sm:text-7xl font-light font-canela text-brand-black mb-10 leading-tight">
                {lang === 'zh' ? '遇见您的 AI 留学管家' : 'A New Dimension of\nAcademic Guidance'}
            </h2>
            <p className="text-slate-500 max-w-3xl mx-auto mb-16 text-lg font-light leading-relaxed">
                {lang === 'zh' ? '24小时待命，解答关于选校、标化、项目和文书的各种疑惑。' : 'Experience the synthesis of Ivy League expertise and artificial intelligence. Our consultant is ready to navigate the complexities of your academic journey 24/7.'}
            </p>
            <button onClick={openAI} className="px-16 py-6 bg-brand-black text-white font-black text-xs tracking-[0.4em] uppercase hover:bg-brand-red transition-all shadow-xl">
                {lang === 'zh' ? '立刻开始对话' : 'Initiate Inquiry'}
            </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
