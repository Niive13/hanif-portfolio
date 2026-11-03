// data/projects.ts
export type Project = {
  slug: string;
  title: string;
  category: string;
  period: string;
  featured?: boolean;
  priority: number;
  summary: string;
  role: string;
  tech: string[];
  accent: "violet" | "lime" | "coral";
  thumbnail: string;
  overview: string;
  background: string;
  solution: string;
  features: string[];
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "early-detection-chain-bearing",
    title: "Early Detection Chain Bearing",
    category: "Industrial IoT / Web Dashboard",
    period: "January 2026 - June 2026",
    featured: true,
    priority: 1,
    accent: "violet",
    summary:
      "An early-detection and monitoring system for roller & nut components, integrated with a web dashboard for real-time recording and management of abnormal findings.",
    role: "System & Web Developer at PT. Astra Daihatsu Motor. Built the hardware setup, the detection pipeline, and the web dashboard.",
    tech: ["Python", "PHP", "MySQL", "YOLOv8n", "OpenCV", "EasyOCR", "Web Dashboard", "Hardware Setup"],
    thumbnail: "projects/chain-bearing/Early-detection-thumbnail.png", // Ubah di sini
    overview:
      "Developed during an internship at PT. Astra Daihatsu Motor, this system detects abnormal conditions in roller and nut components on the conveyor assembly line before they escalate into unplanned downtime.",
    background:
      "Manual inspection of conveyor components is time-consuming and inconsistent. Abnormal conditions can go unnoticed until they cause line stoppage, directly impacting preventive maintenance efficiency.",
    solution:
      "Combined a hardware capture setup with a computer-vision pipeline (YOLOv8n for detection, OpenCV for processing, EasyOCR for label reading) and a PHP/MySQL web dashboard that records findings and surfaces abnormal conditions in real time.",
    features: [
      "Real-time detection of roller & nut component conditions",
      "Automated identification via YOLOv8n + OpenCV pipeline",
      "Label/text reading with EasyOCR",
      "Web dashboard for recording and managing abnormal findings",
      "Real-time condition reporting to support preventive maintenance",
    ],
    gallery: [
      "projects/chain-bearing/Early-detection-1.png", // Ubah di sini
      "projects/chain-bearing/Early-detection-2.png", // Ubah di sini
    ],
  },
  {
    slug: "digital-artist-portfolio",
    title: "Digital Artist Portfolio & Commission",
    category: "Freelance / Full Stack Web",
    period: "September 2026",
    featured: true,
    priority: 2,
    accent: "coral",
    summary:
      "A digital art portfolio and pricing catalog with an interactive commission queue tracker and an admin panel for transparent status updates.",
    role: "Full Stack Web Developer (Freelance).",
    tech: ["PHP", "Laravel 13", "Node.js", "Next.js", "MySQL"],
    thumbnail: "projects/artist/artist.png",
    overview:
      "A freelance-built platform for a digital artist to showcase work, publish a pricing catalog, and manage commissions transparently.",
    background:
      "Commission-based artists need a way to display their portfolio and pricing while keeping clients informed about their queue position and progress.",
    solution:
      "Built a portfolio and pricing catalog with an interactive commission queue tracker and an admin panel that lets the artist update work status publicly.",
    features: [
      "Digital art portfolio gallery",
      "Pricing catalog",
      "Interactive commission queue tracker",
      "Admin panel for status updates",
      "Transparent progress visibility for clients",
    ],
    gallery: [], // Dikosongkan karena di screenshot belum ada gambar galeri tambahan
  },
  {
    slug: "notago",
    title: "NotaGO - UMKM Transaction Recording App",
    category: "Mobile App / Full Stack",
    period: "May 2025 - July 2025",
    featured: true,
    priority: 3,
    accent: "lime",
    summary:
      "A digital transaction app for small businesses with product, customer, and kasbon (credit) management, plus daily-monthly reports exportable to Excel and PDF.",
    role: "Full Stack Mobile Developer.",
    tech: ["Java", "Spring Boot", "React Native", "SQL Server"],
    thumbnail: "projects/notago/NotaGo-thumbnail.png", // Ubah di sini
    overview:
      "A mobile transaction app built for UMKM (micro, small, and medium enterprises) to digitize sales records.",
    background:
      "Small business owners often track transactions manually, making it hard to manage credit (kasbon) and generate periodic reports.",
    solution:
      "Built a React Native app backed by a Spring Boot API and SQL Server, covering product/customer management, kasbon tracking, and exportable reports.",
    features: [
      "Product management",
      "Customer management",
      "Kasbon (credit) system",
      "Daily and monthly transaction reports",
      "Export reports to Excel and PDF",
    ],
    gallery: [
      "projects/notago/NotaGo-1.png",
      "projects/notago/NotaGo-2.png", 
    ],
  },
  {
    slug: "astra-tech-ess-migration",
    title: "Master Structure & Permission Migration",
    category: "Enterprise Web (AstraTech)",
    period: "September 2025 - December 2025",
    priority: 4,
    accent: "violet",
    summary:
      "Migration and development of a web-based Employee Self-Service (ESS) system for HRD administrators to manage Organization Master and Permission Master data.",
    role: "Web Developer.",
    tech: ["HTML", "CSS", "JavaScript", "Next.js", "ASP.NET", "SQL Server"],
    thumbnail: "projects/astra-tech/master-structure-thumbnail.png",
    overview:
      "Part of the AstraTech initiative: migrating and building a web-based Employee Self-Service (ESS) system.",
    background:
      "HRD administrators needed a structured, web-based way to manage Organization Master and Permission Master employee data.",
    solution:
      "Migrated and developed the ESS web system, giving HRD administrators structured access to organization and permission master data.",
    features: [
      "Organization Master data management",
      "Permission Master data management",
      "Employee Self-Service web interface",
      "Structured data management for HRD administrators",
    ],
    gallery: [
      "projects/astra-tech/master-structure-1.png",
      "projects/astra-tech/master-structure-2.png"
    ],
  },
  {
    slug: "sistem-manajemen-pemasukan",
    title: "Income Management System",
    category: "Freelance / Full Stack Web",
    period: "April 2026",
    priority: 5,
    accent: "coral",
    summary:
      "An MVC-based cash flow management web app with transaction/category CRUD, session authentication, data visualization dashboard, period filters, and report export.",
    role: "Full Stack Web Developer (Freelance).",
    tech: ["PHP", "Laravel 13", "Node.js", "Vite", "MySQL"],
    thumbnail: "projects/cashflow/Income-management-thumbnail.png",
    overview:
      "A web application for managing income flow, built on the MVC architecture.",
    background:
      "Needed a structured way to record transactions and visualize cash flow over selectable periods.",
    solution:
      "Built an MVC web app with CRUD for transactions and categories, session-based authentication, a visualization dashboard, and report export.",
    features: [
      "CRUD for transactions and categories",
      "Session authentication",
      "Data visualization dashboard",
      "Period filters",
      "Report export",
    ],
    gallery: [
      "projects/cashflow/Income-management-1.png"
    ],
  },
  {
    slug: "digitalisasi-peralatan",
    title: "Equipment Digitalization - Politeknik Astra P3P",
    category: "Web System",
    period: "September 2024 - February 2025",
    priority: 6,
    accent: "lime",
    summary:
      "A web system digitizing lab machine check-sheets and inventory, with CRUD, analytics dashboard, automatic validation, and tool maintenance/notification modules.",
    role: "Web Developer (Politeknik Astra - P3P).",
    tech: ["PHP", "Laravel 11", "MySQL"],
    thumbnail: "projects/lab-digitization/Equipment-Digitalization-thumbnail.png",
    overview:
      "Digitized check-sheets and inventory for a machine laboratory at Politeknik Astra.",
    background:
      "Paper-based check-sheets and inventory records were hard to track and validate.",
    solution:
      "Built a Laravel web system for check-sheets and inventory with analytics, automatic validation, and maintenance notifications.",
    features: [
      "Check-sheet digitization",
      "Laboratory inventory management",
      "CRUD operations",
      "Analytics dashboard",
      "Automatic validation",
      "Tool maintenance & notification module",
    ],
    gallery: [
      "projects/lab-digitization/Equipment-Digitalization-1.png",
      "projects/lab-digitization/Equipment-Digitalization-2.png",
      "projects/lab-digitization/Equipment-Digitalization-3.png"
    ],
  },
];