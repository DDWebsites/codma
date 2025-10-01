import { NavLink, NewsItemProps, FAQItemProps } from "@/types";

export const NavLinks: NavLink[] = [
  { label: "Accueil", href: "#" },
  { label: "À propos", href: "#" },
  { label: "Actualités", href: "#" },
  { label: "Documents", href: "#" },
  { label: "FAQ", href: "#" },
];

export const newsItems: NewsItemProps[] = [
  {
    id: 1,
    image: {
      src: "/1.jpg",
      alt: "Medical breakthrough research",
    },
    date: "15 December 2024",
    title: "Nouvelles Directives pour Les Praticiens",
    description:
      "Comprendre les récents changements dans les protocoles médicaux et leurs implications pour les soins aux patients.",
    category: "Evenements",
    author: "Web Master",
  },
  {
    id: 2,
    image: {
      src: "/2.jpg",
      alt: "Healthcare technology",
    },
    date: "12 December 2024",
    title: "Programmes de Développement Professionnel",
    description:
      "Découvrez nos nouveaux programmes de formation continue pour les professionnels de santé.",
    category: "Evenements",
    author: "Web Master",
  },
  {
    id: 3,
    image: {
      src: "/3.jpg",
      alt: "Medical conference",
    },
    date: "8 December 2024",
    title: "Innovation en Santé Numérique ",
    description:
      "Les dernières avancées technologiques qui transforment la pratique médicale.",
    category: "Actualités",
    author: "Web Master",
  },
];

export const faqItems: FAQItemProps[] = [
  {
    id: "1",
    question: "Comment obtenir mon agrément ?",
    answer:
      "Le processus d'agrément dure environ 3 mois. Nous évaluons vos compétences professionnelles avec rigueur et transparence. Chaque dossier est examiné individuellement.",
  },
  {
    id: "2",
    question: "Quels sont les critères d'évaluation ?",
    answer:
      "Nous vérifions votre diplôme, votre expérience professionnelle et vos références. L'intégrité éthique et les compétences cliniques sont nos priorités absolues.",
  },
  {
    id: "3",
    question: "Coût de l'agrément?",
    answer:
      "Les frais d'agrément varient selon votre spécialité médicale. Un devis personnalisé vous sera proposé après l'étude initiale de votre dossier.",
  },
  {
    id: "4",
    question: "Procédure de renouvellement ?",
    answer:
      "Le renouvellement implique une évaluation de vos compétences récentes et de votre développement professionnel. Un dossier détaillé vous sera demandé.",
  },
];
