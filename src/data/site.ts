// Fuente única de contenido del portafolio (ES / EN).
// Para actualizar el sitio, edita este archivo: todas las páginas leen de aquí.

export type Lang = "es" | "en";
type T = { es: string; en: string };

export const t = (value: T | string, lang: Lang) =>
  typeof value === "string" ? value : value[lang];

export const links = {
  site: "https://rex-portafolio.vercel.app",
  email: "r.servin19@hotmail.com",
  github: "https://github.com/Regirex21",
  linkedin: "https://www.linkedin.com/in/regina-servín/",
  linkedinLabel: "linkedin.com/in/regina-servín",
  cv: {
    es: "/files/CV_Regina_Servin_2026.pdf",
    en: "/files/Resume_Regina_Servin_2026.pdf",
  },
  firsthub: "https://www.firsthub.dev",
  firsthubDocs: "https://www.firsthub.dev/docs",
  aria: "https://www.aria-steamex.com",
};

export const profile = {
  name: "Regina Servín",
  role: { es: "Desarrolladora de Software · Backend y Web", en: "Software Developer · Backend & Web" },
  study: {
    es: "Estudiante de Ingeniería en Desarrollo de Software en Tecmilenio",
    en: "Software Development Engineering student at Tecmilenio",
  },
  tagline: {
    es: "Diseño y desarrollo sitios y plataformas web completos, desde la imagen visual hasta el código, sin necesidad de un diseñador aparte. También construyo APIs y herramientas internas, y lidero equipos de robótica FIRST en México.",
    en: "I design and build complete websites and web platforms, from the visual identity to the code, so no separate designer is needed. I also build APIs and internal tools, and lead FIRST robotics teams in Mexico.",
  },
  availability: { es: "Abierta a nuevas oportunidades", en: "Open to new opportunities" },
  availabilityDetail: { es: "Freelance · Remoto · Prácticas", en: "Freelance · Remote · Internships" },
  travel: { es: "Disponible para viajar", en: "Available to travel" },
  location: { es: "CDMX / Remoto", en: "Mexico City / Remote" },
  languages: { es: "Español / Inglés B2+", en: "Spanish / English B2+" },
  university: { es: "Tecmilenio, Campus Ferrería", en: "Tecmilenio, Ferrería Campus" },
  current: { es: "Desarrolladora de Software en ITESA", en: "Software Developer at ITESA" },
};

export const stats = [
  { value: "17", label: { es: "equipos FTC coordinados a nivel nacional", en: "FTC teams coordinated nationwide" } },
  { value: "50+", label: { es: "estudiantes mentoreados", en: "students mentored" } },
  { value: "4", label: { es: "rutinas autónomas en el debut de ARIA, el único equipo con 4", en: "autonomous routines in ARIA's debut, the only team with 4" } },
  { value: "20K", label: { es: "vistas en publicaciones de cobertura FIRST", en: "views on FIRST coverage posts" } },
];

export type Project = {
  slug: string;
  name: string;
  summary: T;
  description: T;
  tags: string[];
  url?: string;
  image?: string;
  status?: T;
};

export const nylus = {
  name: "Nylus",
  status: { es: "En desarrollo", en: "In development" },
  summary: {
    es: "Plataforma SaaS multi-tenant para administrar organizaciones, equipos y proyectos de comunidades STEM y FIRST Robotics.",
    en: "Multi-tenant SaaS platform to manage organizations, teams and projects for STEM and FIRST Robotics communities.",
  },
  features: [
    { es: "Autenticación con JWT y Google OAuth", en: "JWT and Google OAuth authentication" },
    { es: "Organizaciones multi-tenant con membresías e invitaciones", en: "Multi-tenant organizations with memberships and invitations" },
    { es: "Control de acceso: 5 roles por organización y 24 permisos granulares", en: "Access control: 5 roles per organization and 24 granular permissions" },
    { es: "API REST en un monorepo Turborepo + pnpm", en: "REST API in a Turborepo + pnpm monorepo" },
  ],
  tags: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "Docker", "Turborepo"],
  modules: [
    { name: "auth", done: true },
    { name: "organizations", done: true },
    { name: "invitations", done: true },
    { name: "memberships", done: true },
    { name: "permissions", done: true },
    { name: "projects", done: false },
    { name: "tasks", done: false },
    { name: "calendar", done: false },
  ],
};

export const projects: Project[] = [
  {
    slug: "firsthub",
    name: "FIRSTHub",
    summary: {
      es: "Plataforma comunitaria en español para equipos FRC y FTC.",
      en: "Spanish-language community platform for FRC and FTC teams.",
    },
    description: {
      es: "Fundé FIRSTHub para democratizar el acceso a recursos de FIRST en español: documentación técnica, guías, blog con noticias e insights, y un equipo de voluntarios. Vive en su propio dominio con las docs integradas en /docs.",
      en: "I founded FIRSTHub to make FIRST resources accessible in Spanish: technical docs, guides, a blog with news and insights, and a volunteer team. It runs on its own domain with the docs integrated under /docs.",
    },
    tags: ["Astro", "MDX", "Vercel", "Blog"],
    url: links.firsthub,
    image: "/components/firsthub.webp",
  },
  {
    slug: "firsthub-docs",
    name: "FIRSTHub Docs",
    summary: {
      es: "Centro de documentación técnica de FRC y FTC.",
      en: "Technical documentation hub for FRC and FTC.",
    },
    description: {
      es: "Guías de WPILib, Android Studio, programación de robots, premios y portafolio, pensadas para que un equipo rookie pueda arrancar rápido y con estructura.",
      en: "Guides on WPILib, Android Studio, robot programming, awards and portfolios, designed so rookie teams can get started quickly and with structure.",
    },
    tags: ["MDX", "Docs", "WPILib", "UX Writing"],
    url: links.firsthubDocs,
    image: "/components/docs.webp",
  },
  {
    slug: "aria",
    name: "ARIA STEAMex",
    summary: {
      es: "Sitio oficial del equipo FRC 11040.",
      en: "Official website for FRC Team 11040.",
    },
    description: {
      es: "Diseñé y desarrollé el sitio del primer equipo comunitario 100% femenino de FRC en México: identidad visual, misión, programa y patrocinios, con dominio propio.",
      en: "I designed and built the website for Mexico's first all-female community FRC team: visual identity, mission, program and sponsorships, on its own domain.",
    },
    tags: ["Astro", "Tailwind CSS", "Responsive", "Branding"],
    url: links.aria,
    image: "/components/aria.webp",
  },
];

export type Role = { title: T; org: string; date: T; points: T[]; kind: "dev" | "lead" | "community" };

export const experience: Role[] = [
  {
    kind: "dev",
    title: { es: "Desarrolladora de Software y Operaciones Digitales", en: "Software Developer & Digital Operations" },
    org: "ITESA Infraestructura",
    date: { es: "2025 – Actualidad", en: "2025 – Present" },
    points: [
      { es: "Desarrollo y mantengo el sitio web corporativo, con mejoras de diseño responsivo y rendimiento.", en: "Develop and maintain the corporate website, improving responsive design and performance." },
      { es: "Construí herramientas internas de inventarios, pedidos y cotizaciones, y automaticé procesos con Python.", en: "Built internal tools for inventory, orders and quotes, and automated processes with Python." },
    ],
  },
  {
    kind: "dev",
    title: { es: "Fundadora y Desarrolladora Backend", en: "Founder & Backend Developer" },
    org: "Nylus",
    date: { es: "En desarrollo", en: "In development" },
    points: [
      { es: "Plataforma SaaS multi-tenant con NestJS, PostgreSQL y Prisma: autenticación, organizaciones, roles y permisos.", en: "Multi-tenant SaaS platform with NestJS, PostgreSQL and Prisma: authentication, organizations, roles and permissions." },
    ],
  },
  {
    kind: "lead",
    title: { es: "Fundadora y Head Coach", en: "Founder & Head Coach" },
    org: "ARIA STEAMex · FRC 11040",
    date: { es: "2025 – Actualidad", en: "2025 – Present" },
    points: [
      { es: "Fundé y dirijo el primer equipo comunitario 100% femenino de FIRST Robotics Competition en México.", en: "Founded and lead the first all-female community FIRST Robotics Competition team in Mexico." },
      { es: "En su debut fue el único equipo con 4 rutinas autónomas; 4.º en total tower points y 4.º con menos penalizaciones.", en: "In its debut it was the only team with 4 autonomous routines; 4th in total tower points and 4th in fewest penalties." },
    ],
  },
  {
    kind: "lead",
    title: { es: "Coordinadora Nacional de FTC", en: "National FTC Coordinator" },
    org: "Project STEAMex",
    date: { es: "2026 – Actualidad", en: "2026 – Present" },
    points: [
      { es: "Coordino 17 equipos de FIRST Tech Challenge en distintos estados y diseño el programa nacional de capacitación en línea.", en: "Coordinate 17 FIRST Tech Challenge teams across several states and design the national online training program." },
    ],
  },
  {
    kind: "lead",
    title: { es: "Coach", en: "Coach" },
    org: "ACRIS · FTC",
    date: { es: "2025 – Actualidad", en: "2025 – Present" },
    points: [
      { es: "Mentoría en programación y planeación de temporada. También soy mentora técnica de Desert Robotics (FRC 9060) e imparto cursos propios de Java desde 2024.", en: "Programming and season-planning mentor. Also a technical mentor for Desert Robotics (FRC 9060) and instructor of my own Java courses since 2024." },
    ],
  },
  {
    kind: "community",
    title: { es: "Cobertura de eventos y contenido", en: "Event coverage & content" },
    org: "SoyFIRST · ARIA · ACRIS · FIRSTHub",
    date: { es: "2026 – Actualidad", en: "2026 – Present" },
    points: [
      { es: "Cubro competencias de FIRST México (hasta 20,000 vistas por publicación) y manejo el contenido semanal de tres cuentas.", en: "Cover FIRST Mexico competitions (up to 20,000 views per post) and run weekly content for three accounts." },
    ],
  },
];

export const skillGroups = [
  { label: { es: "Lenguajes", en: "Languages" }, items: ["Java", "TypeScript", "JavaScript", "Python", "SQL"] },
  { label: { es: "Backend y datos", en: "Backend & data" }, items: ["NestJS", "Node.js", "Express", "REST APIs", "JWT / OAuth", "PostgreSQL", "Prisma"] },
  { label: { es: "Frontend", en: "Frontend" }, items: ["Astro", "Tailwind CSS", "HTML", "CSS", "MDX"] },
  { label: { es: "DevOps y herramientas", en: "DevOps & tools" }, items: ["Git / GitHub", "Docker", "Linux", "Vercel", "Railway", "Turborepo", "Postman"] },
  { label: { es: "Diseño", en: "Design" }, items: [{ es: "Diseño UI", en: "UI design" }, { es: "Diseño web responsivo", en: "Responsive web design" }, { es: "Identidad visual", en: "Visual identity" }, "Branding", { es: "Contenido para redes", en: "Social media content" }] as (string | { es: string; en: string })[] },
  { label: { es: "Robótica", en: "Robotics" }, items: ["WPILib", "FTC SDK", "PathPlanner", "Choreo", "Limelight", "REV Robotics"] },
];

export const softSkills = {
  es: ["Liderazgo", "Gestión de proyectos", "Documentación técnica", "Mentoría", "Comunicación", "Pensamiento sistémico"],
  en: ["Leadership", "Project management", "Technical writing", "Mentoring", "Communication", "Systems thinking"],
};

export const certifications = [
  { name: "Database Foundations", issuer: "Oracle Academy", date: { es: "sep. 2026", en: "Sep 2026" } },
  { name: "Java Fundamentals", issuer: "Oracle Academy", date: { es: "feb. 2026", en: "Feb 2026" } },
  { name: "Red Hat System Administration I (RH124)", issuer: "Red Hat", date: { es: "feb. 2026", en: "Feb 2026" } },
  { name: "AWS Academy Graduate – Cloud Foundations", issuer: "AWS Academy", date: { es: "sep. 2025", en: "Sep 2025" } },
  { name: "Python Essentials 1", issuer: "Cisco Networking Academy", date: { es: "sep. 2025", en: "Sep 2025" } },
];

export const education = {
  degree: { es: "Ingeniería en Desarrollo de Software", en: "B.Eng. in Software Development" },
  school: { es: "Universidad Tecmilenio, Campus Ferrería", en: "Universidad Tecmilenio, Ferrería Campus" },
  date: { es: "2025 – Actualidad", en: "2025 – Present" },
  note: { es: "Presidenta de carrera, electa por segundo año consecutivo.", en: "Program class president, elected for the second consecutive year." },
};

export const paths = (lang: Lang) => {
  const p = lang === "en" ? "/en" : "";
  return { home: `${p}/`, projects: `${p}/projects`, about: `${p}/about`, contact: `${p}/contact` };
};
