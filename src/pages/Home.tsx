import { useTranslation } from 'react-i18next';
import { cvData } from '../cvData';
import { SectionHeading } from '../components/ui/SectionHeading';
import { usePageMeta } from '../hooks/usePageMeta';

export const Home = () => {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language === 'pt-BR' || i18n.language === 'en') ? i18n.language : 'pt-BR';
  
  usePageMeta('Bruno Correia - Software Engineer', '/favicon.png');

  return (
    <main className="font-sans">
      <section id="home" className="min-h-[90vh] flex items-center border-b border-border pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6">
              {cvData.content.name}.
            </h1>
            <p className="text-xl md:text-2xl text-text-dim mb-8 font-light leading-relaxed">
              {t('heroRole')}
            </p>
            <div className="flex flex-wrap gap-3 mb-12 font-mono text-sm">
              {['Java', 'TypeScript', 'Spring Boot', 'NestJS', 'AWS', 'IA', 'Docker'].map(skill => (
                 <span key={skill} className="px-3 py-1 bg-surface border border-border text-white group-hover:border-accent transition-colors">
                   {skill}
                 </span>
              ))}
            </div>
            <div className="flex gap-4 font-mono text-sm">
              <a href={`https://${cvData.content.linkedin}`} target="_blank" rel="noreferrer" className="px-6 py-3 bg-white text-[#0a0a0c] font-bold hover:bg-accent transition-colors">
                LinkedIn
              </a>
              <a href={`https://${cvData.content.github}`} target="_blank" rel="noreferrer" className="px-6 py-3 bg-surface border border-border hover:border-white transition-colors">
                GitHub
              </a>
              <a href="/cv-bruno-correia.pdf" download="Bruno_Correia_CV.pdf" className="px-6 py-3 bg-surface border border-border text-accent hover:bg-accent hover:text-[#0a0a0c] font-bold transition-colors">
                CV ↓
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <section id="about" className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <SectionHeading title={t('aboutTitle')} className="" />
          </div>
          <div className="md:w-2/3">
            <div className="bg-surface p-8 border border-border border-l-4 border-l-accent text-lg text-text-dim leading-relaxed">
               <p className="mb-0 text-[#EDEDED]">{cvData.content.summary[lang]}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-24 border-b border-border bg-[linear-gradient(to_right,#111114_1px,transparent_1px),linear-gradient(to_bottom,#111114_1px,transparent_1px)] bg-[size:4rem_4rem]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <SectionHeading title={t('productsTitle')} className="mb-4 bg-[#0a0a0c] inline-block px-4" />
          <div className="max-w-2xl mx-auto bg-[#0a0a0c] p-4">
             <p className="text-text-dim text-lg" dangerouslySetInnerHTML={{ __html: t('productsDesc') }} />
          </div>
          <div className="mt-12 flex justify-center">
            <a href="/products/promo-publisher" className="group flex items-center gap-4 p-6 bg-surface border border-border hover:border-accent transition-all max-w-lg text-left">
              <div className="w-16 h-16 bg-[#0a0a0c] border border-border flex items-center justify-center">
                 <img src="/promo_publisher_logo.png" alt="Promo Publisher" className="w-10 h-10 object-contain" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl group-hover:text-accent transition-colors">Promo Publisher</h3>
                <p className="font-mono text-xs text-text-dim mt-1">Tascor Software // Automation</p>
              </div>
              <div className="ml-auto text-accent font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                {'>'}
              </div>
            </a>
          </div>
        </div>
      </section>
      
      <section id="experience" className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t('experienceTitle')} />
          <div className="max-w-4xl mx-auto space-y-12">
            {cvData.content.experience.map((exp, idx) => (
              <div key={idx} className="relative pl-8 md:pl-0">
                 <div className="md:grid md:grid-cols-4 md:gap-8">
                    <div className="hidden md:block text-right pt-1">
                      <span className="font-mono text-sm text-text-dim">{exp.period[lang as keyof typeof exp.period]}</span>
                    </div>
                    <div className="md:col-span-3 relative">
                       {/* Timeline Line */}
                       <div className="absolute left-[-24px] md:left-[-17px] top-2 bottom-[-48px] w-px bg-border"></div>
                       {/* Timeline Node */}
                       <div className="absolute left-[-28px] md:left-[-21px] top-2 w-2 h-2 bg-accent"></div>
                       
                       <div className="md:hidden font-mono text-xs text-accent mb-2">{exp.period[lang as keyof typeof exp.period]}</div>
                       <h3 className="font-display text-2xl font-bold">{exp.company}</h3>
                       <p className="font-mono text-sm text-[#EDEDED] mt-1 mb-6">{exp.role[lang as keyof typeof exp.role]}</p>
                       <ul className="space-y-3 text-text-dim">
                         {exp.achievements[lang as keyof typeof exp.achievements].map((ach, i) => (
                           <li key={i} className="flex gap-3">
                             <span className="text-border mt-1">↳</span>
                             <span dangerouslySetInnerHTML={{ __html: ach }} />
                           </li>
                         ))}
                       </ul>
                    </div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-24 border-b border-border bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t('skillsTitle')} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {cvData.content.skills.map((group, idx) => (
              <div key={idx}>
                <h3 className="font-mono text-sm text-accent mb-4 border-b border-border pb-2 uppercase">{group.label[lang as keyof typeof group.label]}</h3>
                <div className="flex flex-wrap gap-2 font-mono text-sm">
                  {group.items.split(',').map(item => (
                    <span key={item} className="text-[#EDEDED] bg-[#0a0a0c] px-2 py-1 border border-border">
                      {item.trim()}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <SectionHeading title={t('educationTitle')} className="" />
          </div>
          <div className="md:w-2/3">
            <div className="border border-border p-6 bg-surface hover:border-accent transition-colors">
              <h3 className="font-display text-xl font-bold">{cvData.content.education.institution}</h3>
              <p className="text-[#EDEDED] mt-2">{cvData.content.education.degree[lang]}</p>
              <p className="font-mono text-sm text-text-dim mt-4">CLASS_OF_{cvData.content.education.date[lang]}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">{t('contactTitle')}</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-text-dim mb-8 leading-relaxed">{t('contactText')}</p>
            <a href={`mailto:${cvData.content.email}`} className="inline-block px-8 py-4 bg-white text-[#0a0a0c] font-bold hover:bg-accent transition-colors font-mono text-sm uppercase tracking-wider">
              {cvData.content.email}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
