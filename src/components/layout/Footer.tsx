import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-surface py-8 border-t border-border font-mono text-xs text-text-dim">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p>{t('footerRights')}</p>
          <div className="flex gap-6">
            <a href="/legal/privacy" className="hover:text-accent transition-colors">[{t('privacyPolicy')}]</a>
            <a href="/legal/terms" className="hover:text-accent transition-colors">[{t('termsOfUse')}]</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
