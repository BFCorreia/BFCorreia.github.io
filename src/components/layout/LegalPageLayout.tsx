import { ReactNode } from 'react';
import { SectionHeading } from '../ui/SectionHeading';

interface LegalPageLayoutProps {
  title: string;
  children: ReactNode;
}

export const LegalPageLayout = ({ title, children }: LegalPageLayoutProps) => {
  return (
    <main className="pt-32 pb-24 min-h-screen max-w-4xl mx-auto px-4 font-sans">
      <SectionHeading title={title} className="mb-8" />
      <div className="text-text-dim font-mono space-y-4">
        {children}
      </div>
    </main>
  );
};
