export interface HeroSlide {
  label: string;
  title: string;
  description: string;
  buttonText: string;
  href: string;
  image: string;
}

export const heroSlides: HeroSlide[] = [
  {
    label: "Consultancy",
    title: "Cyber Essentials made simple",
    description:
      "Get certified faster with expert guidance, audit support and training.",
    buttonText: "View Consultancy",
    href: "/services",
    image: "/images/hero-slide-1.svg",
  },
  {
    label: "Training",
    title: "Learn security best practices",
    description:
      "Practical training for staff and teams so your business stays protected.",
    buttonText: "View Training",
    href: "/about",
    image: "/images/hero-slide-2.svg",
  },
  {
    label: "Case Study",
    title: "Real results for real clients",
    description:
      "See how URM helped clients pass certification and strengthen security.",
    buttonText: "Read Case Study",
    href: "/casestudy/caseitem",
    image: "/images/hero-slide-3.svg",
  },
  {
    label: "Contact",
    title: "Start your security journey today",
    description:
      "Talk with our experts and get a clear plan for your next compliance milestone.",
    buttonText: "Contact Us",
    href: "/contact",
    image: "/images/hero-slide-4.svg",
  },
];
