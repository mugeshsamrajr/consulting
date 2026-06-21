import Container from "../layout/Container";
import SectionTitle from "../shared/SectionTitle";
import ServiceCard from "../shared/ServiceCard";
import { services } from "../../constants/services";

export default function ServicesSection() {
  return (
    <section className="bg-[var(--surface)] py-24">
      <Container>
        <SectionTitle
          subtitle="Our Services"
          title="Consultancy & Security Services"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service:any) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}