
export type Language = 'zh' | 'en';

export interface NavItem {
  id: string;
  label: { zh: string; en: string };
  path: string;
}

export interface Article {
  id: string;
  title: { zh: string; en: string };
  summary: { zh: string; en: string };
  date: string;
  category: { zh: string; en: string };
  image: string;
  content?: { zh: string; en: string };
}

export interface Event {
  id: string;
  title: { zh: string; en: string };
  type: { zh: string; en: string };
  date: string;
  time: string;
  description: { zh: string; en: string };
}

export interface Program {
  id: string;
  name: { zh: string; en: string };
  grade: { zh: string; en: string };
  summary: { zh: string; en: string };
  highlights: { zh: string[]; en: string[] };
  icon: string;
}

export interface FAQItem {
  question: { zh: string; en: string };
  answer: { zh: string; en: string };
}
