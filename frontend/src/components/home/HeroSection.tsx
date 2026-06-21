import Container from "../layout/Container";

export default function HeroSection() {
  return (
    <section className="bg-[var(--surface)] py-24">
  <Container>
    <div className="grid items-center gap-12 lg:grid-cols-2">
      <div>
        <span className="font-medium text-blue-600">
          Cyber Security Experts
        </span>

        <h1 className="mt-4 text-5xl font-bold text-[var(--text-primary)]">
          URM makes Cyber Essentials certification easy
        </h1>

        <p className="mt-6 text-lg text-[var(--text-secondary)]">
          Achieve Cyber Essentials and Cyber Essentials Plus
          certification with our team of qualified experts.
        </p>
      </div>

      <img
        src="/images/hero-security.svg"
        alt="Cyber security illustration"
        className="w-full"
      />
    </div>
  </Container>
</section>
  );
}