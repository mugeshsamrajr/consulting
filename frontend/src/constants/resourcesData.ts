// src/constants/resourcesData.ts

export interface ContentSection {
  sectionTitle: string;
  paragraphs: string[];
  bullets?: string[];
  quote?: { text: string; author: string };
}

export interface ResourceItem {
  id: string;
  category: "case-studies" | "blogs" | "whitepapers" | "checklists";
  categoryLabel: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  readTime: string;
  date: string;
  clientName?: string;
  clientUrl?: string;
  bgImage: string;
  frameworks?: string[];
  content: ContentSection[];
}

export const RESOURCES_DATA: ResourceItem[] = [
  {
    id: "the-ai-corporation-soc-success",
    category: "case-studies",
    categoryLabel: "Case Study",
    clientName: "The ai Corporation",
    clientUrl: "https://www.aicorporation.com",
    title: "How The ai Corporation Achieved Rapid, Unqualified SOC 1 & SOC 2 Compliance",
    subtitle: "Strengthening enterprise trust, accelerating strategic banking partnerships, and reducing audit friction in North American payment markets.",
    excerpt: "Discover how The ai Corporation worked alongside specialized consultants to align its existing cloud payment systems and achieve clean, audit-ready compliance frameworks.",
    readTime: "5 min read",
    date: "February 2026",
    frameworks: ["SOC 1", "SOC 2 Type II", "PCI DSS"],
    bgImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
    content: [
      {
        sectionTitle: "The Challenge & Case Overview",
        paragraphs: [
          "The ai Corporation provides secure payment processing and fraud prevention technology for the fuel, banking, fleet and mobility sectors, built around its two core products: aiEazyFuel®, a cloud based fuel and fleet card issuing platform, and aiRiskNet®, a robust fraud detection engine. Because these services handle sensitive financial data, strong security and trust are essential.",
          "To demonstrate this commitment, especially to clients in North America, The ai Corporation pursued and achieved SOC 1 and SOC 2 compliance to independently validate the strength of its controls and security practices."
        ]
      },
      {
        sectionTitle: "Governance Strategy and Achievements",
        paragraphs: [
          "The ai Corporation already had a solid security foundation through long standing PCI DSS compliance, but new client expectations meant it needed to provide even broader assurance. SOC 1 and SOC 2 were chosen because they directly address how well a company manages the services it delivers and the protection of client data.",
          "Despite tight deadlines, The ai Corporation received an unqualified opinion on its SOC 2 report in February 2026, confirming that all controls were operating effectively with no exceptions. This result reflects the Company’s strong internal processes and its ability to move quickly and effectively.",
          "Importantly, the adoption of SOC 2 has also strengthened The ai Corporation’s position when engaging with strategic partners. As the Company progresses into the open loop card issuing space and works closely with Bank Identification Number (BIN) sponsors, the ability to demonstrate independently assured, year-round control effectiveness helps build trust, accelerates discussions and removes friction in stakeholder assessments."
        ]
      },
      {
        sectionTitle: "Partnership Approach: Supportive & Practical Guidance",
        paragraphs: [
          "Throughout the project, implementation consultants explained SOC requirements in straightforward, practical terms, helping The ai Corporation understand exactly what was needed at each step. Clear guidance on documentation, evidence gathering and requirement interpretation was especially valuable given the tight timelines.",
          "One of the most challenging tasks, the SOC system description, became far more manageable with hands-on support. Their input saved significant time and ensured the final documentation was accurate and compliant.",
          "Another major challenge was documenting the customer onboarding process, which varied widely between clients. Team alignment helped capture a consistent, audit-ready version of the process while still allowing for the bespoke steps needed for enterprise customers."
        ],
        quote: {
          text: "Aligning our intricate onboarding pipelines into an audit-ready framework without creating operational friction was our biggest win.",
          author: "Head of Operations, Platform Architecture"
        }
      }
    ]
  },
  {
    id: "global-fintech-saas-soc2",
    category: "case-studies",
    categoryLabel: "Case Study",
    clientName: "NexusFlow Payments",
    title: "Scaling Global FinTech Architecture via Continuous Monitoring Control Systems",
    subtitle: "How a high-volume SaaS payment gateway automated 94% of evidence collection to clear market roadblocks.",
    excerpt: "NexusFlow Payments eliminated manual spreadsheets, building a dynamic security posture that cleared complex procurement loops inside North American banking chains.",
    readTime: "4 min read",
    date: "March 2026",
    frameworks: ["SOC 2 Type II", "NIST CSF"],
    bgImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
    content: [
      {
        sectionTitle: "The Scale Bottleneck",
        paragraphs: [
          "NexusFlow handles millions of transactions daily across multiple jurisdictions. When looking to secure contracts with Tier-1 traditional retail banks in the US, compliance teams encountered an insurmountable hurdle: manual evidence-gathering before annual audits took months and left severe visibility gaps.",
          "To scale safely, they needed to move from snapshot-in-time auditing models to robust, continuous infrastructure verification maps that aligned with AICPA Trust Services Criteria."
        ]
      },
      {
        sectionTitle: "Engineering the Automation Posture",
        paragraphs: [
          "The engineering team implemented API-driven telemetry hooks directly across AWS cloud environments, GitHub repositories, and internal IAM directories. Rather than manual asset counting, automated scripts logged configuration profiles instantly into a secure tracking ledger."
        ],
        bullets: [
          "Real-time alerting for open S3 buckets and identity posture drift.",
          "Automated hashing of code review sign-offs mapped straight to compliance cards.",
          "Continuous risk mapping against newly deployed serverless architectures."
        ]
      },
      {
        sectionTitle: "The Ultimate Payoff",
        paragraphs: [
          "The organization successfully passed its audit cycle with zero exceptions recorded on the final Type II attestation documentation. This automated continuous monitoring posture reduced internal compliance workloads by over 70% and immediately unlocked a $12M pipeline of enterprise accounts."
        ]
      }
    ]
  },
  {
    id: "aerospace-cmmc-compliance",
    category: "case-studies",
    categoryLabel: "Case Study",
    clientName: "AeroVanguard Systems",
    title: "Securing the Defense Supply Chain: AeroVanguard's CMMC Level 2 Journey",
    subtitle: "Protecting Controlled Unclassified Information (CUI) through unified ISO alignment frameworks.",
    excerpt: "Learn how a mid-market defense contractor implemented strict NIST SP 800-171 protocols to protect federal defense pipelines.",
    readTime: "6 min read",
    date: "January 2026",
    frameworks: ["CMMC Level 2", "ISO 27001", "NIST SP 800-171"],
    bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    content: [
      {
        sectionTitle: "Federal Mandates & Operational Reality",
        paragraphs: [
          "As an engineering firm specializing in avionics telemetry components, AeroVanguard Systems manages sensitive blueprints classified as Controlled Unclassified Information (CUI). New Department of Defense (DoD) contract rules made CMMC Level 2 certification an absolute requirement for bidding on all future programs.",
          "The core challenge lay in implementing rigorous cryptographic access boundaries without breaking the agile software design iterations their engineering labs relied on."
        ]
      },
      {
        sectionTitle: "The Dual-Framework Implementation Path",
        paragraphs: [
          "AeroVanguard structured its security environment by utilizing its existing ISO 27001 Information Security Management System (ISMS) architecture as the foundation, then layered the 110 specific controls of NIST SP 800-171 over the top.",
          "They deployed hardware-based FIPS-compliant encryption keys across all endpoint devices, isolated manufacturing test equipment from the corporate web, and rolled out multi-factor authentication (MFA) to cover all legacy terminal integrations."
        ]
      },
      {
        sectionTitle: "Audit Assessment Results",
        paragraphs: [
          "AeroVanguard achieved full CMMC Level 2 audit readiness within 6 months. This swift implementation protected existing aerospace supply revenue pipelines and established their operation as an elite partner in high-integrity federal contracting pools."
        ]
      }
    ]
  },
  {
    id: "neobank-dora-resilience",
    category: "case-studies",
    categoryLabel: "Case Study",
    clientName: "VividVault Digital",
    title: "Achieving Operational Resilience Under the EU Digital Operational Resilience Act",
    subtitle: "How a European mobile neobank transformed threat-led penetration testing loops into proactive strategy tools.",
    excerpt: "VividVault overhauled its ICT risk strategies to meet strict European DORA timelines and manage complex vendor risk.",
    readTime: "5 min read",
    date: "April 2026",
    frameworks: ["DORA", "NIS2", "ISO 27001"],
    bgImage: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=600&q=80",
    content: [
      {
        sectionTitle: "Navigating EU Regulations",
        paragraphs: [
          "With the enforcement of the European Digital Operational Resilience Act (DORA), digital-first banking entities face unparalleled operational scrutiny. Regulations demand not just defensive barriers, but proven business survival and recovery under active technical distress.",
          "VividVault needed to overhaul their entire third-party provider tracking registry, as their operations relied heavily on cloud infrastructure and external core-banking APIs."
        ]
      },
      {
        sectionTitle: "Deploying Threat-Led Penetration Testing (TLPT)",
        paragraphs: [
          "VividVault introduced continuous, advanced red-teaming simulations across their systems. Rather than basic surface scans, these simulations stress-tested their cloud environments against real-world advanced persistent threats (APTs). Simultaneously, they mapped out deep visibility chains down to fourth-party subcontractors."
        ],
        quote: {
          text: "DORA completely changes the perspective. The regulator no longer just asks if you are secure — they demand you prove exactly how you recover when systems go down.",
          author: "Chief Risk Officer, VividVault"
        }
      }
    ]
  },
  {
    id: "healthtech-hipaa-governance",
    category: "case-studies",
    categoryLabel: "Case Study",
    clientName: "AuraHealth Insights",
    title: "Dual HIPAA & ISO 27001 Governance in Clinical Machine Learning Models",
    subtitle: "Protecting sensitive patient PHI data across cloud computing medical networks.",
    excerpt: "AuraHealth constructed automated identity and access management layers to process multi-hospital patient data streams safely.",
    readTime: "4 min read",
    date: "May 2026",
    frameworks: ["HIPAA", "ISO 27001", "GDPR"],
    bgImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
    content: [
      {
        sectionTitle: "Processing Data at Scale",
        paragraphs: [
          "AuraHealth Insights processes large streams of medical telemetry data to train predictive machine learning tools for global oncology centers. Handling Protected Health Information (PHI) requires strict adherence to US HIPAA privacy laws and European GDPR guidelines.",
          "The main operational hurdle was ensuring data remained completely anonymous at rest during compute phases, while still preserving its analytical clinical value."
        ]
      },
      {
        sectionTitle: "Enforcing Granular Identity Control Layers",
        paragraphs: [
          "The security teams deployed zero-trust network access (ZTNA) combined with precise role-based access control (RBAC). Data storage spaces use localized keys that rotate automatically every 24 hours, completely eliminating static entry points into databases."
        ]
      }
    ]
  },
  {
    id: "enterprise-ai-iso42001",
    category: "case-studies",
    categoryLabel: "Case Study",
    clientName: "Synthetix Enterprise AI",
    title: "First-Mover Edge: Implementing the ISO/IEC 42001 AI Management Framework",
    subtitle: "Proactive alignment with the EU AI Act using ethical governance matrices.",
    excerpt: "Synthetix proved to Fortune 500 enterprise buyers that its Large Language Model (LLM) analytical tools are clear, transparent, and audit-ready.",
    readTime: "5 min read",
    date: "June 2026",
    frameworks: ["ISO 42001", "EU AI Act", "SOC 2"],
    bgImage: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=600&q=80",
    content: [
      {
        sectionTitle: "The AI Governance Challenge",
        paragraphs: [
          "As enterprise customers rapidly adopt generative AI integrations, procurement departments have begun adding rigorous new requirements regarding data poisoning, algorithmic bias, and security isolation zones.",
          "Synthetix chose to address this proactively by implementing ISO/IEC 42001, the international standard for Artificial Intelligence Management Systems (AIMS)."
        ]
      },
      {
        sectionTitle: "Building the AI Risk Matrix",
        paragraphs: [
          "Synthetix mapped out explicit data lineage routes for every training dataset, built automated guardrails to monitor model hallucination rates, and established clear human-in-the-loop oversight points for all automated decisions.",
          "This proactive alignment with upcoming EU AI Act parameters gave them an immediate advantage over slower competitors during enterprise contract negotiations."
        ]
      }
    ]
  },
  {
    id: "insight-unified-control-mapping",
    category: "blogs",
    categoryLabel: "Expert Insights",
    title: "The Architecture of Unified Control Mapping: Stop Auditing Twice",
    excerpt: "Stop wasting hundreds of development hours prepping for separate compliance reviews. Learn how to map overlapping security controls across standards to build a leaner, multi-framework posture.",
    readTime: "3 min read",
    date: "June 2026",
    bgImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    content: [
      {
        sectionTitle: "The Multi-Framework Tax",
        paragraphs: [
          "Most modern security teams are buried under compliance requests. They look at ISO 27001 in Q1, tackle SOC 2 in Q2, and review DORA or NIS2 prep in Q3. This siloed approach treats each standard as an isolated island, forcing teams to perform the exact same evidence collection loops over and over again.",
          "The fix requires moving to a unified control framework strategy. When you break these frameworks down, the core security hygiene requirements are remarkably similar across all of them."
        ]
      }
    ]
  },
  {
    id: "wp-continuous-compliance-architecture",
    category: "whitepapers",
    categoryLabel: "White Paper",
    title: "Continuous Compliance Framework Architecture for Cloud-Native SaaS Platforms",
    excerpt: "Moving beyond point-in-time snapshot audits. Technical guidelines on structuring real-time infrastructure event logging pipelines into an automated GRC framework.",
    readTime: "8 min read",
    date: "May 2026",
    bgImage: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=600&q=80",
    content: [
      {
        sectionTitle: "The Death of the Snapshot Audit",
        paragraphs: [
          "Traditional auditing models resemble a single annual photograph: you clean the data, pull the records, pass the inspection, and then ignore configuration adjustments for the next eleven months. In cloud-native operations where infrastructure changes daily, this model introduces massive security blind spots.",
          "This engineering white paper outlines the architectural patterns needed to turn your telemetry feeds into a source of continuous compliance verification data."
        ]
      }
    ]
  },
//   {
//     id: "chk-iso27001-readiness",
//     category: "checklists",
//     categoryLabel: "Compliance Checklist",
//     title: "ISO/IEC 27001:2022 Stage 1 Readiness Evaluation Matrix",
//     excerpt: "A practical, 42-point baseline checklist mapping organizational roles, asset management criteria, and statement of applicability controls required to pass your Stage 1 audit.",
//     readTime: "4 min read",
//     date: "June 2026",
//     content: [
//       {
//         sectionTitle: "Stage 1 Diagnostic Thresholds",
//         paragraphs: [
//           "The Stage 1 audit focuses on verifying documentation structure and confirming your leadership team understands the boundaries of your ISMS. Before scheduling your third-party registrar review, ensure your team has completed these essential actions."
//         ],
//         bullets: [
//           "Context of the Organization (Clause 4) explicitly defined and documented.",
//           "Information Security Policy formally approved by executive leadership.",
//           "Risk Assessment methodology verified with a complete corporate risk register.",
//           "Statement of Applicability (SoA) covering all 93 controls from Annex A."
//         ]
//       }
//     ]
//   }
];