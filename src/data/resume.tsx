import type { ReactNode } from "react";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  dates?: string;
  href?: string;
  image?: string;
  video?: string;
  links?: { icon: ReactNode; type: string; href: string }[];
};

type Hackathon = {
  title: string;
  dates: string;
  location?: string;
  description?: string;
  image?: string;
  links?: { icon: ReactNode; title: string; href: string }[];
};

export const DATA = {
  name: "Arya Kharisudin Irfani",
  initials: "AKI",
  // shortcut: localhost is only for preview, set NEXT_PUBLIC_SITE_URL before deployment.
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  description:
    "Informatics Engineering student exploring Blue Team security, Linux systems, and Python development.",
  summary:
    "I study Informatics Engineering at UIN Maulana Malik Ibrahim Malang. My main interests are defensive security, log analysis, network security, and Linux. I also use Python to build practical tools and continue learning through hands-on projects and labs.",
  avatarUrl: "/arya-cutout.png",
  skills: ["Blue Team", "Cybersecurity", "Linux", "Python", "Networking", "Log Analysis", "Flask", "SQL"],
  certificates: [
    { title: "Introduction to Cybersecurity", issuer: "Cisco", issued: "Mar 2026" },
    { title: "Pre Security Certificate", issuer: "TryHackMe", issued: "Jul 2025" },
    { title: "Cyber Security 101 Certificate", issuer: "TryHackMe", issued: "Jul 2025" },
  ],
  contact: {
    social: {
      LinkedIn: {
        url: "https://id.linkedin.com/in/arya-kharisudin-irfani-055311328",
      },
      GitHub: {
        url: "https://github.com/aryapulosari-design",
      },
    },
  },
  work: [
    {
      company: "Ethernet-0 Community",
      title: "Lead",
      monogram: "ETH",
      logoUrl: "",
      start: "Oct 2026",
      end: "Present",
      description: "A cybersecurity community at UIN Maulana Malik Ibrahim Malang, where I serve as Lead.",
    },
    {
      company: 'HMPS Teknik Informatika "Encoder" UIN Malang',
      title: "Member",
      monogram: "ENC",
      logoUrl: "",
      start: "Jun 2025",
      end: "Present",
      description:
        "Participate in student activities and team-based programs that support learning and collaboration in information technology.",
    },
  ],
  education: [
    {
      school: "UIN Maulana Malik Ibrahim Malang",
      href: "https://uin-malang.ac.id/",
      degree: "Informatics Engineering",
      logoUrl: "",
      start: "2024",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "Geographic Route Finder",
      description:
        "A route-finding application using Python, Flask, Dijkstra's algorithm, and SQL-backed data.",
      technologies: ["Python", "Flask", "Dijkstra", "SQL"],
    },
    {
      title: "MikroTik Networking Laboratory",
      description:
        "Hands-on networking practice covering DHCP, NAT, firewall filtering, simple queues, hotspot, and troubleshooting.",
      technologies: ["MikroTik", "DHCP", "NAT", "Firewall"],
    },
    {
      title: "Superstore Data Science",
      description:
        "Data analysis comparing Linear Regression, Ridge Regression, and Random Forest Regressor.",
      technologies: ["Python", "Machine Learning", "Data Analysis"],
    },
    {
      title: "Web CRUD Application",
      description:
        "A group-built data management application using HTML, CSS, PHP, and MySQL.",
      technologies: ["HTML", "CSS", "PHP", "MySQL"],
    },
  ] as Project[],
  hackathons: [] as Hackathon[],
};
