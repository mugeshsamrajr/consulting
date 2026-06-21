import Container from "../layout/Container";
import Button from "../shared/Button";

const logos = [
  "CREST",
  "Pen Test",
  "OVS Mobile",
  "OVS Apps",
  "PCI DSS",
  "BSI Certification",
];

export default function TrustedSection() {
  return (
    <section className="bg-[var(--surface)] py-24">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[var(--text-primary)]">
            Our experts are the ones to trust
          </h2>

          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            when it comes to your cyber security
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {logos.map((logo) => (
            <div
              key={logo}
              className="flex h-32 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--card)] text-lg font-semibold text-[var(--text-primary)] shadow-sm"
            >
              {logo}
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/casestudy">
            Read Latest Case Study
          </Button>
        </div>
      </Container>
    </section>
  );
}