export type NavLink = {
  label: string;
  href: string;
};

export type SectionTitleProps = {
  tag: string;
  title: string;
  description: string;
  align?: "left" | "center" | "right";
  shrink?: boolean;
};

export type StatsProps = {
  number: string;
  label: string;
  icon: React.ReactNode;
};

export type NewsItemProps = {
  id: number;
  image: {
    src: string;
    alt: string;
  };
  date: string;
  title: string;
  description: string;
  category: string;
  author: string;
};

export type StepsProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export type FAQItemProps = {
  id: string;
  question: string;
  answer: string;
};

export type SocialLinks = {
  platform: string;
  url: string;
  icon: React.ReactNode;
};
