import type { LucideIcon } from 'lucide-react';

export type NavLink = {
  href: string;
  label: string;
};

export type SocialLink = {
  name: string;
  url: string;
  icon: LucideIcon;
};

export type Player = {
  id: number;
  name: string;
  role: 'Top' | 'Jungle' | 'Mid' | 'Bot' | 'Support';
  image: string;
  bio: string;
  stats: { name: string; value: string }[];
};

export type NewsArticle = {
  id: number;
  title: string;
  date: string;
  image: string;
  summary: string;
  content: string;
};
