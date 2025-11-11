import type { Player, NavLink, SocialLink } from './types';
import { Instagram } from 'lucide-react';

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/team', label: 'Team' },
  { href: '/about', label: 'About' },
];

export const socialLinks: SocialLink[] = [
  { name: 'Instagram', url: '#', icon: Instagram },
];

export const players: Player[] = [
  {
    id: 1,
    name: 'ANOYRE',
    role: 'Top',
    birthdate: '2005-01-07',
    bio: 'Leading the charge in the top lane is ANOYRE. Known for his rock-solid consistency and unshakable mental, he\'s the frontline leader the team trusts to weather any storm and secure the win.',
    stats: [
      { name: 'Nationality', value: 'German' },
      { name: 'Fav offrole Champ', value: 'Xerath' },
    ],
  },
  {
    id: 2,
    name: 'LE KARPADÓRE',
    role: 'Jungle',
    birthdate: '2006-05-17',
    bio: 'You never know where he\'ll strike from. LE KARPADÓRE is the strategic mastermind in the jungle, always two steps ahead. His intelligent game sense makes him the engine that drives GO\'s success.',
    stats: [
      { name: 'Nationality', value: 'German' },
      { name: 'Fav offrole Champ', value: 'Thresh' },
    ],
  },
  {
    id: 3,
    name: 'SKULLL',
    role: 'Mid',
    birthdate: '2005-10-21',
    bio: 'Welcome to the highlight reel. SKULLL is the explosive heart of the team, bringing mechanical flair and high-octane energy to the mid lane. When he\'s in the zone, look out for game-changing outplays.',
    stats: [
      { name: 'Nationality', value: 'German' },
      { name: 'Fav offrole Champ', value: 'Viego' },
    ],
  },
  {
    id: 4,
    name: 'BROKEN ORANGE',
    role: 'Bot',
    birthdate: '2005-12-11',
    bio: 'Cool, calm, and collected—that\'s "BROKEN ORANGE". As the team\'s bot lane carry, he\'s the definition of reliable. His precise mechanics and ice-cold demeanor in teamfights are what you can count on when the game is on the line.',
    stats: [
      { name: 'Nationality', value: 'German' },
      { name: 'Fav offrole Champ', value: 'Lillia' },
    ],
  },
  {
    id: 5,
    name: 'NOWIN15',
    role: 'Support',
    birthdate: '2006-05-26',
    bio: 'Guiding the team from the support position is NOWIN15. A true field general, he\'s known for his sharp macro calls and flawless protection of his carry. He\'s the brain and the shield of the team.',
    stats: [
      { name: 'Nationality', value: 'German' },
      { name: 'Fav offrole Champ', value: 'Wukong' },
    ],
  },
  {
    id: 6,
    name: 'MRMCMUFFIN',
    role: 'Top',
    birthdate: '2003-12-11',
    bio: 'Rounding out the top lane talent is MRMCMUFFIN. Don\'t let the name fool you; he\'s a versatile threat who can switch from an unkillable tank to a dominant carry at a moment\'s notice, all while having fun doing it.',
    stats: [
      { name: 'Nationality', value: 'German/Russian' },
      { name: 'Fav offrole Champ', value: 'Aurora' },
    ],
  },
  {
    id: 7,
    name: 'DODO',
    role: 'Bot',
    birthdate: '2005-04-23',
    bio: 'When you need pure firepower, you call DODO. This aggressive bot laner is always ready to take the 2v2 and push the limits. We\'re excited to see his confidence and mechanical skill light up the bot lane.',
    stats: [
      { name: 'Nationality', value: 'German' },
      { name: 'Fav offrole Champ', value: 'Sion' },
    ],
  },
  {
    id: 8,
    name: 'KASHAD',
    role: 'Support',
    birthdate: '2005-03-20',
    bio: 'Lighting up the map and the team is "KASHAD". As our second support, her game-changing vision control and clutch playmaking are legendary. She’s the vigilant protector who ensures the team is always set up for the next big play.',
    stats: [
      { name: 'Nationality', value: 'German' },
      { name: 'Fav offrole Champ', value: 'Malzahar' },
    ],
  },
];