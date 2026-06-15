import { useTranslation } from 'react-i18next';
import { usePageMeta } from '../hooks/usePageMeta';

export const PromoPublisher = () => {
  const { t } = useTranslation();
  usePageMeta('Promo Publisher', '/promo_publisher_logo.png');
  return (
    <main className="min-h-screen pt-32 pb-20 flex items-center bg-[#0a0a0c] text-center bg-[linear-gradient(to_right,#111114_1px,transparent_1px),linear-gradient(to_bottom,#111114_1px,transparent_1px)] bg-[size:4rem_4rem]">
      <div className="max-w-7xl mx-auto px-4 w-full bg-[#0a0a0c]/80 backdrop-blur-sm p-12 border border-border">
        <div className="w-24 h-24 mx-auto mb-8 bg-surface border border-border flex items-center justify-center p-2">
           <img src="/promo_publisher_logo.png" alt="Logo" className="w-full h-full object-contain" />
        </div>
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Promo Publisher<span className="text-accent">_</span>
        </h1>
        <div className="max-w-3xl mx-auto">
           <p className="text-xl md:text-2xl text-text-dim mb-10 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('promoDesc') }} />
        </div>
        <a href="/" className="font-mono text-sm text-accent hover:text-white transition-colors flex items-center justify-center gap-2">
          <span>←</span> {t('backToPortfolio')}
        </a>
      </div>
    </main>
  );
};
