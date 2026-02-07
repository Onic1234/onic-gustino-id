import { CareerProps } from "../types/careers";

export const CAREERS: CareerProps[] = [
  {
    position: "Web Development",
    company: "PT. Hostelent Indonesia",
    logo: "/images/careers/hostelent.png",
    location: "Surakarta, Indonesia 🇮🇩",
    location_type: "Hybrid",
    type: "Internship",
    start_date: "2025-03",
    end_date: "2025-05",
    industry: "Hotel & Accommodation",
    link: "https://hostelent.com/",
    responsibilities: [
      "Developed and maintained backend services and internal web applications using PHP and Laravel/CodeIgniter frameworks.",
      "Implemented efficient data handling and secure API integrations to support internal business logic and operational workflows.",
      "Collaborated with frontend and product teams to ensure smooth functionality and a seamless user experience for the hostel management system.",
    ],
    lessons_learned: [
      "Deepened understanding of MVC Architecture and Clean Code principles within a PHP-based production environment.",
      "Gained hands-on experience in implementing Agile Scrum methodologies to coordinate development tasks and deadlines.",
      "Learned to collaborate effectively within a professional environment to solve technical debt and improve system scalability.",
    ],
    impact: [
      "Developed core features for essential functionalities, including an internal attendance system, leave management (requesting & listing), and employee profile modules (GET/UPDATE).",
      "Optimized database queries (MySQL) for employee records and transaction history, improving the overall reliability and speed of internal tools.",
    ],
    isShow: true,
  },
];
