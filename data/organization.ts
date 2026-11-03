// data/organization.ts
export type OrgItem = {
  role: string;
  org: string;
  period: string;
  description: string;
  type: "organizational" | "event";
  images: string[];
};

export const organization: OrgItem[] = [
  {
    role: "Head of PSDMO Department",
    org: "Informatics Management Student Association",
    period: "2025 - 2026",
    type: "organizational",
    description: "Led the planning of community service programs, organizational needs analysis, team workflow drafting, and structured performance evaluation of member resources.",
    images: [
      "organization/HeadPsdmo.jpg",
      "organization/SertifHimma.png"
    ],
  },
  {
    role: "Internal Relations Staff",
    org: "KEMENDAORI Student Executive Board",
    period: "2024 - 2025",
    type: "organizational",
    description: "Managed communication flows, coordination, and needs analysis between student organization divisions to ensure the smooth running and alignment of internal programs, focusing on building intensive relationships and directly assisting the Student Association.",
    images: [
      "organization/StaffInternal.jpg",
      "organization/SertifBem.jpg"
    ],
  },
  {
    role: "Treasurer - ADP Ratification Session (Basic Implementation Guidelines)",
    org: "Event Committee",
    period: "June 2025",
    type: "event",
    description: "Verified funding documents, controlled the inflow/outflow of session funds, and prepared the activity's financial bookkeeping.",
    images: ["organization/Adp.jpeg"],
  },
  {
    role: "Treasurer - GARASI#7 (Ramadan Event with Informatics System)",
    org: "Event Committee",
    period: "March 2025",
    type: "event",
    description: "Managed Ramadan fundraising, prepared the budget plan (RAB), and recapitulated budget allocations for distributing basic food aid and organizing a charity event with orphanage children.",
    images: ["organization/garasi.jpg"],
  },
  {
    role: "Treasurer - Hello Project",
    org: "Informatics Management Student Association",
    period: "December 2024",
    type: "event",
    description: "Managed budget planning and operational fund allocation for the implementation of material briefing programs and final semester project simulations for new students.",
    images: ["organization/Hello.png"],
  },
  {
    role: "Treasurer - LDKO (Basic Organizational Leadership Training)",
    org: "Event Committee",
    period: "October 2024",
    type: "event",
    description: "Managed trainer operational funds and prepared budget planning for logistical needs and training implementation.",
    images: ["organization/ldko.png"],
  },
  {
    role: "Event Division Member - BEM Gama Cakra Gathering",
    org: "Event Committee",
    period: "November 2024",
    type: "event",
    description: "Designed the event rundown and coordinated with cross-divisional teams to execute the technical requirements of the inaugural gathering event that brought together all BEM administrators and alumni.",
    images: ["organization/Gathering.jpeg"], // Nanti tambah gambar sertifikat BEM di sini
  },
];