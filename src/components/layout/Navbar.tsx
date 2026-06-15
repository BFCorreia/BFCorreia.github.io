import { useTranslation } from 'react-i18next';
import { TerminalPrefix } from '../ui/TerminalPrefix';

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('preferredLang', lng);
  };

  return (
    <nav className="fixed w-full z-50 bg-[#0a0a0c]/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <a href="/" className="font-display font-bold text-xl tracking-tight hover:text-accent transition-colors">
              <TerminalPrefix />BRUNO_CORREIA
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8 font-mono text-sm">
            <a href="/#about" className="text-text-dim hover:text-accent transition-colors">01. {t('navAbout')}</a>
            <a href="/#products" className="text-text-dim hover:text-accent transition-colors">02. {t('navProducts')}</a>
            <a href="/#experience" className="text-text-dim hover:text-accent transition-colors">03. {t('navExperience')}</a>
            
            <div className="flex items-center border border-border p-0.5 bg-surface">
              <button 
                onClick={() => changeLanguage('pt-BR')} 
                className={`px-3 py-1 transition-colors ${i18n.language === 'pt-BR' ? 'bg-accent text-[#0a0a0c] font-bold' : 'text-text-dim hover:text-white'}`}
              >PT</button>
              <button 
                onClick={() => changeLanguage('en')} 
                className={`px-3 py-1 transition-colors ${i18n.language === 'en' ? 'bg-accent text-[#0a0a0c] font-bold' : 'text-text-dim hover:text-white'}`}
              >EN</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
