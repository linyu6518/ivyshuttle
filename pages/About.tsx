
import React from 'react';
import { Language } from '../types';

const About: React.FC<{ lang: Language }> = ({ lang }) => {
  return (
    <div className="space-y-24 pb-24 min-h-screen bg-brand-light">
      <section className="bg-white py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
                <h1 className="text-5xl font-light font-canela text-brand-black leading-tight">
                    {lang === 'zh' ? 'Ivy Shuttle（哈佛直通车） ECAT美国名校升学营' : 'Ivy Shuttle Academy'}
                </h1>
                <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                    <p>
                        {lang === 'zh' 
                            ? 'Ivy Shuttle（哈佛直通车） ECAT美国名校升学营 由哈佛伯纳德教授主创并协同哈佛，MIT，普林斯顿等名校专家直接培训和跟踪指导。' 
                            : 'Ivy Shuttle is an academy that offers a unique college readiness education — ECAT (Elite College Advanced Training ), through our Ongoing Follow-up Education System, OFES, which facilitates each student\'s emergent development needs through learning in physical classrooms and cloud classrooms.'}
                    </p>
                    <p>
                        {lang === 'zh' 
                            ? 'Ivy Shuttle 相信智力能力、人际成熟度和综合活力是学生大学准备度的重要品质，也是他们在高中、大学和未来职业中成功的关键指标。这些品质的增长取决于学生对真正学习价值的自我觉醒理解，以及它如何推动他们应对学术和非学术领域的严格学习挑战。' 
                            : 'Ivy Shuttle believes that intellectual capacity, interpersonal maturity, and integrative vitality are important qualities for a student\'s college readiness, as well as crucial indicators for his or her success in high school, college, and future careers. The growth of these qualities depend on the student\'s self-awakening understanding of the value of true learning and how it can drive him or her through rigorous learning challenges in academic and non-academic areas.'}
                    </p>
                    <p>
                        {lang === 'zh' 
                            ? 'Ivy Shuttle 的导师都是高水平、经验丰富的教育工作者，他们在美国最好的大学（包括哈佛、普林斯顿和哥伦比亚）任教和/或接受教育。Ivy Shuttle 致力于提供最佳支持每个学生个人需求的教育体验，帮助他们发展智力能力、人际成熟度和综合活力。我们的目标是让每个学生为大学和人生做好充分准备。' 
                            : 'Ivy Shuttle\'s instructors are high-level, experienced educators who teach at and/or were educated at the best US universities, including Harvard, Princeton and Columbia. Ivy Shuttle strives to provide an educational experience that best supports each student\'s individual needs in the development of his or her intellectual capacity, interpersonal maturity, and integrative vitality. Our goal is for each student to be well-prepared for college and for life.'}
                    </p>
                </div>
                <div className="flex space-x-12 pt-6">
                    <div>
                        <div className="text-4xl font-bold font-heading text-brand-red">15+</div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-black mt-1">{lang === 'zh' ? '行业经验' : 'Experience'}</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold font-heading text-brand-red">500+</div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-black mt-1">{lang === 'zh' ? '藤校录取' : 'Admissions'}</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold font-heading text-brand-red">98%</div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-black mt-1">{lang === 'zh' ? '满意度' : 'Success'}</div>
                    </div>
                </div>
            </div>
            <div className="lg:w-1/2 rounded shadow-2xl relative">
                <div className="absolute -inset-4 border-2 border-brand-red opacity-10 rounded"></div>
                <img src="https://images.unsplash.com/photo-1519817914152-22d216bb9170?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover rounded relative z-10" alt="Toronto" />
            </div>
        </div>
      </section>

      {/* OFES Education System Diagram */}
      <section className="bg-white py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-black text-brand-red uppercase tracking-[0.4em] mb-4 block">
              {lang === 'zh' ? '教育体系' : 'Education System'}
            </span>
            <h2 className="text-4xl sm:text-5xl font-light font-canela text-brand-black mb-4">
              OFES
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-sm uppercase tracking-widest mb-6">
              {lang === 'zh' ? '行进支持教育系统' : 'Ongoing Facilitating Education System'}
            </p>
            <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
              {lang === 'zh' 
                ? 'OFES"行进支持教育系统"是一套系统可以及时呼应和促进学生个体随时产生的好奇和想法。不是一次，不是一个地方，而是行进式随时随地。' 
                : 'OFES is an effective system that can timely echos to & facilitates individual emergent curiosity & ideas. Not one time, not just one place, but anytime anywhere.'}
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <img 
              src="/ofes-diagram.png" 
              alt={lang === 'zh' ? 'OFES 教育系统流程图' : 'OFES Education System Flow Diagram'} 
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <span className="text-xs font-black text-brand-red uppercase tracking-[0.4em] mb-4 block">
              {lang === 'zh' ? '顾问委员会' : 'Advisory Committee'}
            </span>
            <h2 className="text-4xl sm:text-5xl font-light font-canela text-brand-black mb-6">
              {lang === 'zh' ? '哈佛教授团' : 'Harvard Professors'}
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-brand-red text-lg font-heading italic">
                {lang === 'zh' 
                  ? '哈佛教授的求知欲' 
                  : 'Harvard Professors\' Curiosity'}
              </p>
              <p className="text-brand-red text-lg font-heading italic">
                {lang === 'zh' 
                  ? '激发了对5000名哈佛学生的研究' 
                  : 'Sparkled A Research On 5k Harvard Students'}
              </p>
              <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed mt-6">
                {lang === 'zh' 
                  ? '五千哈佛跨64年的个案研究,哈佛教授揭示成才要素和秘诀。提供导师团队指导,为学生提供研助机会。' 
                  : 'A 64-year case study across 5,000 Harvard students, Harvard professors reveal the elements and secrets of success. Provide mentor team guidance and research assistance opportunities for students.'}
              </p>
            </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
                { n: 'Dr. Bernard', t: 'Harvard', u: 'Harvard University', img: '/professors/Dr.Bernard.png' },
                { n: 'Dr. Pollack', t: 'Harvard', u: 'Harvard University', img: '/professors/Harvard Professor Dr.Pollack.jpg' },
                { n: 'Dr. Boyd', t: 'Harvard', u: 'Harvard University', img: '/professors/Dr.Boyd Harvard Professor.jpg' },
                { n: 'Dr. Goss', t: 'Harvard', u: 'Harvard University', img: '/professors/Harvard Professor Dr.Goss.jpg' },
                { n: 'Dr. Stone', t: 'Harvard', u: 'Harvard University', img: '/professors/Dr.Stone.jpeg' }
            ].map((m, idx) => (
                <div key={idx} className="text-center group">
                    <div className="w-full aspect-square overflow-hidden mb-4 rounded border-2 border-white shadow-md group-hover:shadow-xl transition-all duration-500">
                        <img src={m.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={m.n} />
                    </div>
                    <h3 className="text-sm font-bold font-heading text-brand-black mb-1">{m.n}</h3>
                    <p className="text-brand-red font-bold text-xs uppercase tracking-widest">{m.t}</p>
                    <p className="text-slate-400 text-[10px] mt-1">{m.u}</p>
                </div>
            ))}
        </div>
      </section>

      {/* Consultant Instruction Team */}
      <section className="bg-white py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-black text-brand-red uppercase tracking-[0.4em] mb-4 block">
              {lang === 'zh' ? '咨询指导团队' : 'Consultant Instruction Team'}
            </span>
            <h2 className="text-4xl sm:text-5xl font-light font-canela text-brand-black mb-6">
              {lang === 'zh' ? '咨询指导团队' : 'Consultant Instruction Team'}
            </h2>
            <p className="text-brand-red text-lg font-heading italic mb-4">
              {lang === 'zh' 
                ? '哈佛斯坦福前招生官领衔的导师团队合力培养每一个学生' 
                : 'Ivy Shuttle Facilitates Each Individual\'s Emergent Need'}
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {(() => {
              const getConsultantPhoto = (name: string) => {
                // Try to match photo by name
                const nameMap: { [key: string]: string } = {
                  'Dr. Kuhn': '/consultants/Screenshot 2026-01-23 at 2.22.45 PM.png',
                  'Mr. Hesler': '/consultants/Screenshot 2026-01-23 at 2.22.45 PM.png',
                  'Mr. Dean': '/consultants/Screenshot 2026-01-23 at 2.22.45 PM.png',
                  'Dr. Stone': '/consultants/Screenshot 2026-01-23 at 2.22.45 PM.png',
                  'Dr. Goss': '/consultants/Screenshot 2026-01-23 at 2.22.45 PM.png',
                  'Mr. Escobar': '/consultants/Screenshot 2026-01-23 at 2.22.45 PM.png',
                  'Dr. Lobove': '/consultants/Screenshot 2026-01-23 at 2.22.51 PM.png',
                  'Dr. Wurm': '/consultants/Screenshot 2026-01-23 at 2.22.51 PM.png',
                  'Dr. Salehi': '/consultants/Screenshot 2026-01-23 at 2.22.51 PM.png',
                  'Ms. Goldman': '/consultants/Screenshot 2026-01-23 at 2.22.51 PM.png',
                  'Ms. Hickerson': '/consultants/Screenshot 2026-01-23 at 2.22.51 PM.png',
                  'Ms. Cummings': '/consultants/Screenshot 2026-01-23 at 2.22.51 PM.png',
                  'Mr. Peters': '/consultants/Screenshot 2026-01-23 at 2.22.51 PM.png',
                  'Mr. Hudson': '/consultants/Screenshot 2026-01-23 at 2.22.51 PM.png',
                  'Ms. Booth': '/consultants/Screenshot 2026-01-23 at 2.22.51 PM.png',
                  'Dr. Dickens': '/consultants/Screenshot 2026-01-23 at 2.22.51 PM.png',
                  'Ms. Sontag': '/consultants/Screenshot 2026-01-23 at 2.22.51 PM.png',
                  'Ms. Megan': '/consultants/Screenshot 2026-01-23 at 2.22.51 PM.png',
                  'Mr. Odamah': '/consultants/Screenshot 2026-01-23 at 2.22.51 PM.png',
                  'Mr. Kester': '/consultants/Screenshot 2026-01-23 at 2.22.51 PM.png'
                };
                return nameMap[name] || null;
              };
              return [
              { n: 'Dr. Kuhn', t: 'Harvard', u: 'Harvard University', i: '1' },
              { n: 'Mr. Hesler', t: 'Harvard', u: 'Harvard University', i: '2' },
              { n: 'Mr. Dean', t: 'Stanford', u: 'Stanford University', i: '3' },
              { n: 'Dr. Stone', t: 'Harvard', u: 'Harvard University', i: '4' },
              { n: 'Dr. Goss', t: 'Harvard', u: 'Harvard University', i: '5' },
              { n: 'Mr. Escobar', t: 'Harvard', u: 'Harvard University', i: '6' },
              { n: 'Dr. Lobove', t: 'UChicago', u: 'University of Chicago', i: '7' },
              { n: 'Dr. Wurm', t: 'Columbia', u: 'Columbia University', i: '8' },
              { n: 'Dr. Salehi', t: 'Stanford', u: 'Stanford University', i: '9' },
              { n: 'Ms. Goldman', t: 'Upenn', u: 'University of Pennsylvania', i: '10' },
              { n: 'Ms. Hickerson', t: 'Columbia', u: 'Columbia University', i: '11' },
              { n: 'Ms. Cummings', t: 'Columbia', u: 'Columbia University', i: '12' },
              { n: 'Mr. Peters', t: 'Cornell', u: 'Cornell University', i: '13' },
              { n: 'Mr. Hudson', t: 'Princeton', u: 'Princeton University', i: '14' },
              { n: 'Ms. Booth', t: 'Harvard', u: 'Harvard University', i: '15' },
              { n: 'Dr. Dickens', t: 'Harvard', u: 'Harvard University', i: '16' },
              { n: 'Ms. Sontag', t: 'MIT', u: 'Massachusetts Institute of Technology', i: '17' },
              { n: 'Ms. Megan', t: 'Harvard', u: 'Harvard University', i: '18' },
              { n: 'Mr. Odamah', t: 'Harvard', u: 'Harvard University', i: '19' },
              { n: 'Mr. Kester', t: 'Harvard', u: 'Harvard University', i: '20' }
            ].map(m => {
              const photo = getConsultantPhoto(m.n);
              return (
              <div key={m.i} className="text-center group">
                <div className="w-full aspect-square overflow-hidden mb-4 rounded border-2 border-white shadow-md group-hover:shadow-xl transition-all duration-500">
                  <img src={photo || `https://picsum.photos/seed/consultant${m.i}/400/400`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={m.n} />
                </div>
                <h3 className="text-sm font-bold font-heading text-brand-black mb-1">{m.n}</h3>
                <p className="text-brand-red font-bold text-xs uppercase tracking-widest">{m.t}</p>
                <p className="text-slate-400 text-[10px] mt-1">{m.u}</p>
              </div>
            );
            });
            })()}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-brand-black rounded shadow-2xl p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red opacity-10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="relative z-10">
                <h2 className="text-4xl font-bold font-heading mb-8 text-center">
                    {lang === 'zh' ? '仅仅符合顶尖大学要求还远远不够' : 'BEING QUALIFIED IS WAY NOT ENOUGH'}
                </h2>
                <div className="space-y-6 text-lg text-slate-300 opacity-90 leading-relaxed">
                    <p>
                        {lang === 'zh' 
                            ? '每年，来自美国各州及世界各国申请美国顶尖大学的学生都达到几十万。然而在他们当中，只有极少数(约9%)成为幸运者，而绝大多数(90%左右)会被拒之门外。这些被拒绝的学生当中，除10%左右为不自量力不合格申请者外，绝大多数(占到90%以上)都是极其优秀的合格者。他们做了所有应该做的正确事情, 而且个个都有超强的申请素材和装备:' 
                            : 'Every year, hundreds of thousands of students from all US states and countries around the world apply to top US universities. However, among them, only a very small number (approximately 9%) become the lucky ones, while the vast majority (about 90%) are rejected. Among these rejected students, except for about 10% who are unqualified applicants, the vast majority (more than 90%) are extremely excellent qualified candidates. They have done all the right things they should do, and each has super strong application materials and equipment:'}
                    </p>
                    <p>
                        {lang === 'zh' 
                            ? '他们都有让人羡慕的各科高分；他们都有几近满分的SAT分数和4.0的平均学分；他们都参与了很多课外活动有着让人刮目的成就；他们都有热心老师极强的推荐信；他们都从有经验升学指导老师哪儿或是招生咨询机构那儿得到指导和建议;还有大量的网络信息搜寻汇集… 等等。总之， 他们做了巨大的努力来充分展示 -- 他们是极其出色的申请者。' 
                            : 'They all have enviable high scores in all subjects; they all have near-perfect SAT scores and 4.0 GPAs; they all participate in many extracurricular activities with impressive achievements; they all have strong recommendation letters from enthusiastic teachers; they all receive guidance and advice from experienced college counselors or admissions consulting agencies; and there is a large amount of online information gathering... and so on. In short, they have made tremendous efforts to fully demonstrate that they are extremely outstanding applicants.'}
                    </p>
                    <p className="text-xl font-bold text-center pt-4">
                        {lang === 'zh' ? '但是为什么他们仍然被美国顶尖大学拒绝？' : 'But why are they still rejected by top US universities?'}
                    </p>
                </div>
            </div>
      </section>

      {/* Why Us Section */}
      <section className="bg-white py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-black text-brand-red uppercase tracking-[0.4em] mb-4 block">
              {lang === 'zh' ? '为什么选择我们' : 'Why Us'}
            </span>
            <h2 className="text-4xl sm:text-5xl font-light font-canela text-brand-black mb-4">
              {lang === 'zh' ? 'Ivy Shuttle 的理念' : 'Ivy Shuttle\'s Philosophy'}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-12 text-slate-600 text-lg leading-relaxed">
            <p>
              {lang === 'zh' 
                ? 'Ivy Shuttle（哈佛直通车） ECAT美国名校升学营 由哈佛伯纳德教授主创并协同哈佛，MIT，普林斯顿等名校专家直接培训和跟踪指导。' 
                : 'Ivy Shuttle is an academy that offers a unique college readiness education — ECAT (Elite College Advanced Training ), through our Ongoing Follow-up Education System, OFES, which facilitates each student\'s emergent development needs through learning in physical classrooms and cloud classrooms.'}
            </p>

            <p>
              {lang === 'zh' 
                ? '每年，来自美国各州及世界各国申请美国顶尖大学的学生都达到几十万。然而在他们当中，只有极少数(约9%)成为幸运者，而绝大多数(90%左右)会被拒之门外。这些被拒绝的学生当中，除10%左右为不自量力不合格申请者外，绝大多数(占到90%以上)都是极其优秀的合格者。他们做了所有应该做的正确事情, 而且个个都有超强的申请素材和装备:' 
                : 'Every year, half a million students from all over the world travel on the narrow application path to top US colleges. Only 9% of the applicants are accepted. The majority - over 90% - are rejected. Among the rejected majority, only 5% to 10% are unqualified , 90% applicants are very strong in either academic area or co-curriculum area .'}
            </p>

            {lang === 'zh' && (
              <div className="pl-6 border-l-4 border-brand-red space-y-3">
                <p>他们都有让人羡慕的各科高分；他们都有几近满分的SAT分数和4.0的平均学分；他们都参与了很多课外活动有着让人刮目的成就；他们都有热心老师极强的推荐信；他们都从有经验升学指导老师哪儿或是招生咨询机构那儿得到指导和建议;还有大量的网络信息搜寻汇集… 等等。总之， 他们做了巨大的努力来充分展示 -- 他们是极其出色的申请者。</p>
                <p className="text-xl font-bold text-brand-black pt-2">但是为什么他们仍然被美国顶尖大学拒绝？</p>
              </div>
            )}

            <p>
              {lang === 'zh' 
                ? 'Ivy Shuttle 的导师曾在大学招生委员会服务3-7年。Ivy Shuttle 的专家和导师已经审阅和评判了约10,000份申请。我们的专业知识使我们能够帮助学生开发一份强有力的申请，让他们脱颖而出。Ivy Shuttle 不是帮助您达到合格标准。相反，我们的专家通过深度技能发展，帮助您实现从90%强大且合格的申请者中脱颖而出的目标。' 
                : 'Ivy Shuttle\'s instructors have served on university admissions committees from 3-7 years. Ivy Shuttle\'s specialists and instructors have seen and judged around 10,000 applications. Our expertise allows us to help a student develop a strong application that could make him/her stand out. Ivy Shuttle doesn\'t help you be qualified. Yet, our specialists do help you achieve your goal of distinguishing yourself from the 90% strong and qualified applicants through deep skills development.'}
            </p>

            <p>
              {lang === 'zh' 
                ? '作为招生和教育过程的内部人士，我们知道为什么一些优秀的学生被录取而其他人没有。原因很简单。精英大学不仅仅在寻找优秀的学生。他们正在寻找那些在毕业后有潜力成为伟大领导者和创新者的人。一些招生官员将这些申请者称为他们所选领域及更广泛领域的未来超级明星。' 
                : 'As insiders to the admissions and education process , we know why some great students get in and others do not. The reason is simple. Elite colleges are NOT looking only for excellent students. They are looking for people who have the potential to be great leaders and innovators after graduation. Some admissions officials refer to these applicants as future superstars in their chosen fields and beyond.'}
            </p>

            <p>
              {lang === 'zh' 
                ? 'Ivy Shuttle 相信智力能力、人际成熟度和综合活力是学生大学准备度的重要品质，也是他们在高中、大学和未来职业中作为未来超级明星成功的关键指标。这些品质的增长取决于学生对真正学习价值的自我觉醒理解，以及它如何推动他们应对学术和非学术领域的严格学习挑战。' 
                : 'Ivy Shuttle believes that intellectual capacity, interpersonal maturity, and integrative vitality are important qualities for a student\'s college readiness, as well as crucial indicators for his or her success in high school, college, and future careers as a future superstar . The growth of these qualities depend on the student\'s self-awakening understanding of the value of true learning and how it can drive him or her through rigorous learning challenges in academic and non-academic areas.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
