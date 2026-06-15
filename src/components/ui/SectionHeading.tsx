
import { TerminalPrefix } from './TerminalPrefix';

interface SectionHeadingProps {
  title: string;
  className?: string;
}

export const SectionHeading = ({ title, className = 'mb-16' }: SectionHeadingProps) => (
  <h2 className={`font-display text-3xl font-bold ${className}`}>
    <TerminalPrefix />{title}
  </h2>
);
