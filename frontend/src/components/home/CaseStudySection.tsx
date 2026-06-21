import Link from "next/link";
import Container from "../layout/Container";

export default function CaseStudySection() {
  return (
    <section className="py-24 bg-[var(--background)]">
      <Container>
        <div className="grid items-center gap-12 rounded-3xl bg-slate-900 p-10 text-white lg:grid-cols-2">

          <div className="flex justify-center">
            <img
              src="/images/case-study.svg"
              alt="Case study illustration"
              className="max-w-sm"
            />
          </div>

          <div>
            <span className="text-blue-400">
              Case Study
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              The ai Corporation
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              The ai Corporation achieved SOC 1 and SOC 2
              compliance, confirming strong security controls
              and governance, with support from URM.
            </p>

            <Link
              href="/casestudy/caseitem"
              className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-700"
            >
              Read Case Study
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}