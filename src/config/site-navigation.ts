import type { LucideIcon } from "lucide-react";
import {
  Award,
  Briefcase,
  Building,
  Building2,
  Facebook,
  FileText,
  FlaskConical,
  Globe,
  GraduationCap,
  Handshake,
  Home,
  Info,
  Instagram,
  LayoutGrid,
  Library,
  Linkedin,
  Mail,
  Map,
  MonitorSmartphone,
  Newspaper,
  Server,
  ShieldCheck,
  Star,
  Target,
  TrendingUp,
  User,
  Users,
  Book,
  Image,
} from "lucide-react";

export interface SiteLink {
  label: string;
  href: string;
  description?: string;
}

export interface HeaderActionLink extends SiteLink {
  emphasis?: "default" | "primary";
}

export interface PrimaryNavigationChildLink extends SiteLink {
  icon: LucideIcon;
}

export interface PrimaryNavigationGroup {
  label: string;
  links: readonly PrimaryNavigationChildLink[];
}

export interface PrimaryNavigationItem extends SiteLink {
  icon?: LucideIcon;
  children?: readonly PrimaryNavigationChildLink[];
  groups?: readonly PrimaryNavigationGroup[];
  menuVariant?: "standard" | "mega" | "more";
}

export interface FooterLinkGroup {
  title: string;
  links: readonly SiteLink[];
}

export interface FooterSocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface FooterContactInfo {
  addressLines: readonly string[];
  phones: readonly SiteLink[];
  email: SiteLink;
  mapEmbedUrl: string;
}

export interface SitemapLinkGroup {
  title: string;
  icon: LucideIcon;
  links: readonly SiteLink[];
}

const homeLink = { label: "Home", href: "/" } satisfies SiteLink;
const announcementsLink = {
  label: "Announcements",
  href: "/#announcements",
} satisfies SiteLink;
const aboutSectionLink = {
  label: "About Us",
  href: "/#about",
} satisfies SiteLink;
const aboutPageLink = { label: "About Us", href: "/about" } satisfies SiteLink;
const eventsLink = { label: "Events", href: "/events" } satisfies SiteLink;
const departmentsLink = {
  label: "Departments",
  href: "/#departments",
} satisfies SiteLink;
const placementsSectionLink = {
  label: "Placements",
  href: "/#placements",
} satisfies SiteLink;
const placementsPageLink = {
  label: "Placement Overview",
  href: "/placements",
} satisfies SiteLink;
const contactLink = {
  label: "Connect with Us",
  href: "/#contact",
} satisfies SiteLink;
const virtualTourLink = {
  label: "Virtual Tour",
  href: "/virtual-tour",
} satisfies SiteLink;
const facultyDirectoryLink = {
  label: "Faculty Directory",
  href: "/faculty",
} satisfies SiteLink;
const alumniLink = { label: "Alumni", href: "/alumni" } satisfies SiteLink;
const mcaAdmissionsLink = {
  label: "MCA Admissions",
  href: "/courses/mca",
} satisfies SiteLink;
const privacyPolicyLink = {
  label: "Privacy Policy",
  href: "/privacy",
} satisfies SiteLink;
const termsOfServiceLink = {
  label: "Terms of Service",
  href: "/terms",
} satisfies SiteLink;
const sitemapLink = { label: "Sitemap", href: "/sitemap" } satisfies SiteLink;

export const institutionalHeaderUtilityLinks = [
  { label: "Students", href: "/students" },
  alumniLink,
  { label: "Faculty", href: "/faculty" },
  { label: "Media", href: "/media" },
] satisfies readonly SiteLink[];

export const institutionalHeaderActionLinks = [
  { label: "My Portal", href: "/#portal", emphasis: "primary" },
  { label: "Careers", href: "/#career" },
] satisfies readonly HeaderActionLink[];

export const institutionalVirtualTourLink = virtualTourLink;

export const primaryNavigationItems: readonly PrimaryNavigationItem[] = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Placements",
    href: "/placements",
    children: [
      { label: "Placements", href: "/placements", icon: TrendingUp },
      { label: "Entrepreneurship Cell", href: "/industry/entrepreneurship-cell", icon: Building },
      { label: "Industry Interaction", href: "/industry/interaction", icon: Handshake },
    ],
  },
  {
    label: "Courses",
    href: "/courses/mca",
    children: [
      { label: "MCA", href: "/courses/mca", icon: MonitorSmartphone },
      { label: "MCA FEE details", href: "/admissions/fees", icon: FileText },
      { label: "Phd", href: "/courses/phd", icon: GraduationCap },
    ],
  },
  {
    label: "MCA Syllabus",
    href: "/courses/mca#syllabus",
    children: [
      { label: "MCA NEP2020 2nd Year syllabus", href: "/pdf/6.71N-MCA-Sem-III-IV.pdf", icon: Book },
      { label: "MCA NEP2020 1st Year syllabus", href: "/pdf/6.19-N-Master-of-Computer-Applications-Sem-I-II.pdf", icon: Book },
      { label: "MCA 1st & 2nd Year (w.e.f 20-21)", href: "/pdf/MCAsyllabus%20AC20-21UOM.pdf", icon: FileText },
    ],
  },
  {
    label: "Research",
    href: "/research",
    children: [
      { label: "Research Obj", href: "/research/objectives", icon: Target },
      { label: "Code of ethics", href: "/research/code-of-ethics", icon: ShieldCheck },
      { label: "Publications", href: "/research/publications", icon: Library },
      { label: "Research and consultancy grants", href: "/research/consultancy", icon: FlaskConical },
      { label: "Research awards", href: "/about/achievements-awards", icon: Award },
      { label: "MoU", href: "/research/mou", icon: Handshake },
      { label: "International conference 2026", href: "/research/icet-2026", icon: Globe },
      { label: "International conference 2024", href: "/research/icet-2024", icon: Globe },
      { label: "International conference 2022", href: "/research/icet-2022", icon: Globe },
    ],
  },
  {
    label: "Campus",
    href: "/campus/infrastructure",
    children: [
      { label: "Academic Infra", href: "/campus/infrastructure", icon: Server },
      { label: "Library", href: "/campus/library", icon: Library },
      { label: "Canteen", href: "/campus/canteen", icon: Home },
      { label: "Hostel", href: "/campus/hostel", icon: Home },
    ],
  },
  {
    label: "Transparency",
    href: "/compliance/transparency",
    children: [
      { label: "Academic", href: "/compliance/academic", icon: FileText },
      { label: "Exam", href: "/compliance/examination", icon: FileText },
      { label: "Administration", href: "/about/administration", icon: Users },
    ],
  },
  {
    label: "Committee",
    href: "/committees",
    children: [
      { label: "IQAC", href: "/compliance/iqac", icon: Users },
      { label: "DAB", href: "/compliance/dab", icon: Users },
      { label: "Anti Ragging Cell", href: "/pdf/Anti Raggin Committee.pdf", icon: ShieldCheck },
      { label: "Grievance Committee", href: "/compliance/grievance-redressal", icon: Users },
      { label: "College Development", href: "/pdf/Development_Comitee.pdf", icon: Building },
      { label: "Governing Body", href: "/pdf/Governing Body.pdf", icon: Users },
    ],
  },
  {
    label: "Faculty",
    href: "/faculty",
    children: [
      { label: "Faculty list", href: "/faculty", icon: Users },
      { label: "Profile", href: "/faculty", icon: User },
    ],
  },
  {
    label: "More",
    href: "#",
    menuVariant: "more",
    groups: [
      {
        label: "Student Corner",
        links: [
          { label: "ISTE Student Chapter", href: "/students/iste", icon: Users },
          { label: "NPTEL Local Chapter", href: "/students/nptel", icon: Users },
          { label: "Achievements", href: "/students/achievements", icon: Award },
          { label: "Technical Magazine", href: "/students/technical-magazine", icon: FileText },
          { label: "Newsletter Prabhat", href: "/students/newsletter", icon: Newspaper },
          { label: "IMIT Dairies", href: "/students/imit-dairies", icon: Book },
          { label: "Glimpses of BVIMIT", href: "/students/glimpses", icon: Image },
          { label: "Student Handbook", href: "/students/handbook", icon: Book },
        ],
      },
      {
        label: "NIRF",
        links: [
          { label: "NIRF 2025", href: "/pdf/nirfbvimit2025.pdf", icon: Award },
          { label: "NIRF 2024", href: "/pdf/bvimitnirf24.pdf", icon: Award },
          { label: "NIRF 2023", href: "/pdf/BVIMITNIRF2023.pdf", icon: Award },
        ],
      },
      {
        label: "Events",
        links: [
          { label: "Seminars", href: "/events/seminars", icon: Users },
          { label: "Workshops", href: "/events/workshops", icon: Briefcase },
          { label: "FDPs", href: "/events/fdp", icon: Book },
          { label: "Internal Hackathon SIH 2025 Report", href: "/pdf/Report.pdf", icon: Target },
          { label: "ICET 2026 Report", href: "/pdf/ICET26final.pdf", icon: Globe },
          { label: "ICET 2024 Report", href: "/pdf/ICET 2024-CONFERENCE REPORT.pdf", icon: Globe },
          { label: "ICET-2022 Conference Proceedings", href: "/pdf/ICET-2022-Bharati Vidyapeeth’s Conference Proceedings.pdf", icon: Globe },
          { label: "ICET 2022 Report", href: "/pdf/ICET 2022-CONFERENCE REPORT.pdf", icon: Globe },
          { label: "National Conference 2020", href: "/pdf/NCIT2020-CONFERENE REPORT.pdf", icon: Globe },
          { label: "National Conference 2017", href: "/research/ncit-2017", icon: Globe },
          { label: "Activities", href: "/events/activities", icon: Star },
          { label: "Sports", href: "/events/sports", icon: Target },
          { label: "Eminence", href: "/events/eminence", icon: Award },
          { label: "Manthan", href: "/events/manthan-2026", icon: Star },
        ],
      },
      {
        label: "ISR & Contact",
        links: [
          { label: "ISR", href: "/outreach/isr", icon: Users },
          { label: "Swachh Bharat Abhiyan", href: "/outreach/swatch", icon: Star },
          { label: "Covid 19 Awareness", href: "/outreach/covid-19", icon: Info },
          { label: "Blood Donation", href: "/outreach/blood-donation", icon: Star },
          { label: "Tree Plantation", href: "/outreach/tree-plantation", icon: Star },
          { label: "Khusiyo Ki Pathshala", href: "/outreach/khushiyo-ki-pathshala", icon: Star },
          { label: "Contact Us", href: "/contact", icon: Map },
        ],
      },
    ],
  },
];

export const navigationCallToAction = {
  desktop: { label: "Apply", href: "/courses/mca" },
  mobile: { label: "Apply Now 2026", href: "/courses/mca" },
} satisfies {
  desktop: SiteLink;
  mobile: SiteLink;
};

export const footerLinkGroups = [
  {
    title: "Useful Links",
    links: [
      { label: "Faculty", href: "/faculty" },
      { label: "Alumni", href: "/alumni" },
      { label: "Gallery", href: "/gallery" },
      { label: "Self Learning", href: "/students/self-learning" },
      { label: "Grievance Redressal", href: "/compliance/grievance-redressal" },
      { label: "EOC/SC/ST/OBC COMPLIANCE FORM", href: "/compliance/scst-complaints" },
      { label: "Important Links for Students", href: "/students/important-links" },
      { label: "IIC", href: "/students/iic" },
      { label: "Learning Management System Login", href: "/students/lms" },
      { label: "Online Fees Portal", href: "/admissions/fees-portal" },
      { label: "Approved Fees by FRA 2026-2027", href: "/legacy/pdfs/FRA-2025-2026.pdf" },
      { label: "Approval Letters 2026.pdf", href: "/compliance/approval-letters-2026" },
    ],
  },
  {
    title: "Important Links",
    links: [
      { label: "Feedback Facility of Students and Faculty AICTE", href: "https://www.aicte-india.org/feedback/index.php" },
      { label: "AICTE Approval Letters", href: "/compliance/aicte-approvals" },
      { label: "Mandatory Discloser 2025-2026", href: "/mandatory-disclosure" },
      { label: "Mandatory Discloser 2024-2025", href: "/mandatory-disclosure" },
      { label: "Mandatory Discloser 2023-2024", href: "/mandatory-disclosure" },
      { label: "Mandatory Discloser 2022-2023", href: "/mandatory-disclosure" },
      { label: "Mandatory Discloser 2021-2022", href: "/mandatory-disclosure" },
      { label: "Teacher Training Policy", href: "/compliance/teacher-training-policy" },
      { label: "Safety of Students", href: "/compliance/safety-of-students" },
      { label: "Sports Facility", href: "/campus/gymkhana" },
      { label: "DLLE", href: "/students/dlle" },
    ],
  },
] satisfies readonly FooterLinkGroup[];

export const footerSocialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/bvimit/",
    icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/bharatividyapeeths_imit_mca/",
    icon: Instagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bharati-vidyapeeth-institute-of-management-and-information-technology-705802225/",
    icon: Linkedin,
  },
] satisfies readonly FooterSocialLink[];

export const footerMetaLinks = [
  privacyPolicyLink,
  termsOfServiceLink,
  sitemapLink,
] satisfies readonly SiteLink[];

export const footerContactInfo = {
  addressLines: ["Sector 8, C.B.D. Belapur", "Navi Mumbai - 400614"],
  phones: [
    { label: "022-27578415", href: "tel:+912227578415" },
    { label: "+91 8657008016", href: "tel:+918657008016" },
  ],
  email: {
    label: "principal.bvimit@bharatividyapeeth.edu",
    href: "mailto:principal.bvimit@bharatividyapeeth.edu",
  },
  mapEmbedUrl:
    "https://www.google.com/maps?q=BVIMIT%20Sector%208%20C.B.D.%20Belapur%2C%20Navi%20Mumbai%20400614&output=embed",
} satisfies FooterContactInfo;

export const sitemapLinkGroups = [
  {
    title: "Primary Navigation",
    icon: Home,
    links: [homeLink, announcementsLink, eventsLink],
  },
  {
    title: "Institutional Profile",
    icon: Info,
    links: [
      aboutPageLink,
      { label: "Vision & Mission", href: "/about/vision" },
      { label: "Institutional Values", href: "/about/values" },
      { label: "Principal's Message", href: "/about/principal" },
    ],
  },
  {
    title: "Academic Programs",
    icon: GraduationCap,
    links: [
      mcaAdmissionsLink,
      { label: "PhD Program", href: "/courses/phd" },
      { label: "Short-term Certifications", href: "/#courses" },
    ],
  },
  {
    title: "Careers & Outcomes",
    icon: Building2,
    links: [
      placementsPageLink,
      { label: "Top Recruiters", href: "/#placements" },
      alumniLink,
    ],
  },
  {
    title: "Campus Experience",
    icon: Map,
    links: [
      virtualTourLink,
      { label: "IT Infrastructure", href: "/about/infrastructure" },
      { label: "Campus Facilities", href: "/#about" },
    ],
  },
  {
    title: "Governance & Legal",
    icon: ShieldCheck,
    links: [privacyPolicyLink, termsOfServiceLink, sitemapLink],
  },
  {
    title: "Contact & Assistance",
    icon: Mail,
    links: [
      contactLink,
      { label: "Grievance Portal", href: "/grievance" },
      { label: "Portal Inquiry", href: "/#portal" },
    ],
  },
] satisfies readonly SitemapLinkGroup[];

export const siteFooterSummary =
  "Bharati Vidyapeeth's Institute of Management & Information Technology - Empowering future innovators through quality education since 2002.";

export const siteFooterLegalText =
  "© 2026 Bharati Vidyapeeth's Institute of Management & Information Technology. All rights reserved.";

export const siteBranding = {
  shortName: "BVIMIT",
  location: "Navi Mumbai",
  fullName: "Bharati Vidyapeeth",
  fullSubtitle: "Institute of Management & Information Technology",
  homeHref: "/",
} as const;
