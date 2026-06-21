import Container from "../layout/Container";
import SectionTitle from "../shared/SectionTitle";

const tags = [
  "Cyber Security",
  "Information Security",
  "Data Protection",
  "Business Continuity",
  "Risk Management",
];

export default function AboutSection() {
  return (
    <section className="text-lg leading-8 text-slate-600 dark:text-slate-300 py-24 bg-[var(--surface)]">
      <Container>
        <SectionTitle
          subtitle="About URM"
          title="Consulting Services (URM)"
        />

        <div className="max-w-5xl space-y-8">
          <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
            Consulting Services (URM) is dedicated to
            providing high quality, cost-effective and tailored
            consultancy and training in the areas of cyber and
            information security, data protection, business
            continuity and risk management.
          </p>

          <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
            URM&apos;s mission, through its consultancy,
            cyber testing, auditing and training services,
            along with risk management software, is to
            assist organisations in achieving the levels of
            information security, data protection and
            business continuity required to meet
            international standards and recognised best
            practices.
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-slate-800 dark:text-blue-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}