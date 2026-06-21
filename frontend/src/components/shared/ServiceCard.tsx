interface Props {
  title: string;
  description: string;
}

export default function ServiceCard({
  title,
  description,
}: Props) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800">
      <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
        {title}
      </h3>

      <p className="leading-7 text-slate-600 dark:text-slate-300">
        {description}
      </p>
    </article>
  );
}