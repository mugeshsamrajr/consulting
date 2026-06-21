interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-12">
      {subtitle && (
        <p className="text-blue-600 font-medium">
          {subtitle}
        </p>
      )}

      <h2 className="mt-2 text-4xl font-bold text-[var(--text-primary)]">
        {title}
      </h2>
    </div>
  );
}