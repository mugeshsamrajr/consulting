// src/constants/aboutData.ts

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface FrameworkItem {
  text: string;
}

export interface InfoCardData {
  title: string;
  subtitle?: string;
  logo?: { src: string; alt: string };
  paragraphs: string[];
  quote?: { text: string; author: string };
  note?: string;
  images?: { src: string; alt: string }[];
}

export const HERO_CONTENT = {
  label: "About",
  title: "ABOUT URM",
  description: "URM is a trusted consultancy for cyber security and information assurance. We combine certification, audit, and risk management expertise to help organizations build resilient, compliant operations.",
  bgImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80",
};

export const LEFT_COLUMN_CARDS: InfoCardData[] = [
  {
    title: "Our Qualifications",
    subtitle: "Credibility & Trust",
    paragraphs: [
      "Practising what it preaches, URM has its own integrated management systems and has been certified to both ISO 27001 and ISO 22301 (certificate BCMS 594364) since they were first introduced. The Company also became one of the first organisations in the UK to transition its certification to ISO 27001:2022 (certificate IS 536976).",
      "URM is also a Payment Card Industry Qualified Security Assessor Company (QSAC) which allows it to perform formal assessments of conformance with the PCI Data Security Standard (DSS)."
    ],
    images: [
      { src: "https://cdn.prod.website-files.com/663395d3790b636e6eefc611_Cert-PCI-QSA.png", alt: "PCI DSS Certification" },
      { src: "https://cdn.prod.website-files.com/663395d3790b636e6eefc611_Cert-PCI-QSA.png", alt: "CE Certification" },
      { src: "https://cdn.prod.website-files.com/663395d3790b636e6eefc5ce_7e911026641ec45713c4132a95d9c243_Cert-BSI.png", alt: "BSI Certification" },
      { src: "https://cdn.prod.website-files.com/663395d3790b636e6eefc683_e27f9613cdbbfb614813c940ff1c2f44_Cert-BSI-22301.png", alt: "BSI 22301 Certification" }
    ]
  },
  {
    title: "Audit & Certification Capabilities",
    paragraphs: [
      "As well as providing consultancy and remediation services, URM is one of the UK’s leading auditors of information and cyber security systems and delivers first-party audits, second-party audits, and third-party audits (PCI DSS and Cyber Essentials).",
      "URM has been qualified as a Payment Card Industry Qualified Security Assessor (PCI QSA) by the PCI Security Standards Council (PCI SSC). In addition, URM has also been accredited as a certification body by IASME to certify against the Government’s Cyber Essentials Scheme."
    ],
    quote: {
      text: "“Our Quality and Regulatory Manager has stated how impressed they are with our auditor’s approach, conduct and output during the recent internal audits.”",
      author: "Medical technology developer"
    }
  },
  {
    title: "Data Protection Mastery",
    paragraphs: [
      "Data protection is another area where URM excels. With a 17-year track record assisting organisations to comply with legislation such as the Data Protection Act, the GDPR and local country-specific legislation, URM has earned a reputation for adopting a pragmatic and business appropriate approach."
    ],
    quote: {
      text: "“Thank you to the URM DP consultant for continuously making our days and plans more manageable. We value his commitment, his patience and his going beyond of what is expected over and over again.”",
      author: "US-based university"
    }
  }
];

export const RIGHT_COLUMN_CARDS: InfoCardData[] = [
  {
    title: "Advanced Cybersecurity Testing",
    logo: {
      src: "https://cdn.prod.website-files.com/663395d3790b636e6eefc3a3/663395d3790b636e6eefc595_CREST-logo-Pen-OVO.png",
      alt: "CREST logo"
    },
    paragraphs: [
      "To fully complement all of our governance, risk and compliance services is our cybersecurity consulting and testing offering to help you identify threats to your information assets.",
      "URM is a CREST-accredited organisation and delivers a wide range of penetration tests, including infrastructure, network, web application, mobile application, and Cloud environments."
    ],
    quote: {
      text: "“We have been a partner with URM Consulting for many years. They offer a great service and are a team of real experts in all things cyber security.”",
      author: "IT support company"
    }
  },
  {
    title: "Risk Management Frameworks",
    paragraphs: [
      "Risk management is the cornerstone of any information security or business continuity management system. Our suite of purpose-designed risk assessment software products (Abriska) can help you satisfy the requirements of ISO 27001 and ISO 22301, enabling better-informed security choices. Abriska has underpinned nearly 400 successful ISO certifications worldwide."
    ],
    note: "The Marathon Approach: We view cyber security as a marathon, not a sprint. Our methodology is entirely risk-based and incremental, targeting and mitigating major critical vulnerabilities first."
  }
];

export const CORPORATE_MILESTONES: Milestone[] = [
  { year: "2002", title: "Founding Origins", description: "Started as an independent information security division within a major technical solution group." },
  { year: "2005", title: "Ultima Risk Management", description: "Established as a distinct, specialized corporate legal entity in July 2005." },
  { year: "2019", title: "Rebranding to URM", description: "Officially altered trading name to URM Consulting Services Limited to synchronize with industry reputation." },
  { year: "2025", title: "Cooper Parry Integration", description: "Joined forces with Cooper Parry group, accelerating development throughout the wider professional services ecosystem." }
];

export const CORE_FRAMEWORKS: FrameworkItem[] = [
  { text: "ISO 27001:2022 Certified (In April 2023, URM became one of the first UK firms to successfully transition)" },
  { text: "ISO 22301:2019 Certified Operational Standard" },
  { text: "Certified Cyber Essentials & Cyber Essentials Plus Body" },
  { text: "Full CREST Accreditation for Enterprise Penetration Testing" }
];