import { ReactNode } from "react";

interface InfoCardProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function InfoCard({
  title,
  subtitle,
  children,
  className = "",
}: InfoCardProps) {
  return (
    <div className={`rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-10 shadow-sm ${className}`}>
      {(subtitle || title) && (
        <div className="mb-8">
          {subtitle && (
            <p className="text-sm uppercase tracking-[0.4em] text-[var(--primary)]">
              {subtitle}
            </p>
          )}

          {title && (
            <h2 className="mt-4 text-4xl font-semibold text-[var(--text-primary)]">
              {title}
            </h2>
          )}
        </div>
      )}

      <div className="space-y-8 text-[var(--text-secondary)]">
        {children}
      </div>
    </div>
  );
}
