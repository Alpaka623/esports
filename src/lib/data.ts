import type { Player, Match, NewsArticle, NavLink, SocialLink } from './types';
import { Youtube, Twitch, Twitter, Instagram } from 'lucide-react';

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/team', label: 'Team' },
  { href: '/schedule', label: 'Schedule' },
  { href: '/news', label: 'News' },
  { href: '/about', label: 'About' },
];

export const socialLinks: SocialLink[] = [
  { name: 'Twitter', url: '#', icon: Twitter },
  { name: 'Twitch', url: '#', icon: Twitch },
  { name: 'Instagram', url: '#', icon: Instagram },
  { name: 'YouTube', url: '#', icon: Youtube },
];

export const players: Player[] = [
  {
    id: 1,
    name: 'Vortex',
    role: 'Top',
    image: 'player-1',
    bio: 'The unshakable frontline of GOG, Vortex is known for his rock-solid lane presence and game-changing teleports. A veteran of the scene, his leadership is as formidable as his champion pool.',
    stats: [
      { name: 'KDA', value: '4.2' },
      { name: 'Win Rate', value: '65%' },
      { name: 'CS/min', value: '8.9' },
    ],
  },
  {
    id: 2,
    name: 'Nyx',
    role: 'Jungle',
    image: 'player-2',
    bio: 'A strategic mastermind, Nyx controls the flow of the game from the shadows of the jungle. Her unpredictable gank paths and objective control make her a constant threat to the enemy team.',
    stats: [
      { name: 'KDA', value: '5.1' },
      { name: 'Win Rate', value: '70%' },
      { name: 'Kill Participation', value: '72%' },
    ],
  },
  {
    id: 3,
    name: 'Rift',
    role: 'Mid',
    image: 'player-3',
    bio: 'The explosive heart of the team, Rift is a mechanical prodigy with a flair for the dramatic. His aggressive playstyle and ability to outplay opponents make him a fan favorite.',
    stats: [
      { name: 'KDA', value: '6.3' },
      { name: 'Win Rate', value: '68%' },
      { name: 'Dmg/min', value: '650' },
    ],
  },
  {
    id: 4,
    name: 'Zenith',
    role: 'Bot',
    image: 'player-4',
    bio: 'Cool, calm, and collected, Zenith is the team\'s reliable carry. His precise positioning and consistent damage output in teamfights have secured countless victories for GOG.',
    stats: [
      { name: 'KDA', value: '7.0' },
      { name: 'Win Rate', value: '71%' },
      { name: 'CS/min', value: '9.8' },
    ],
  },
  {
    id: 5,
    name: 'Aura',
    role: 'Support',
    image: 'player-5',
    bio: 'The vigilant protector and shotcaller, Aura\'s vision control and crucial saves are the backbone of the team. Her game sense and communication enable her teammates to shine.',
    stats: [
      { name: 'KDA', value: '3.8' },
      { name: 'Win Rate', value: '69%' },
      { name: 'Vision Score/min', value: '2.5' },
    ],
  },
];

export const matches: Match[] = [
  {
    id: 1,
    date: '2024-08-15T18:00:00Z',
    opponent: { name: 'Cyber Dragons', logo: 'opponent-logo-1' },
    tournament: 'Summer Split - Week 8',
    result: 'W',
    score: '2-0',
  },
  {
    id: 2,
    date: '2024-08-08T20:00:00Z',
    opponent: { name: 'Shadow Wolves', logo: 'opponent-logo-2' },
    tournament: 'Summer Split - Week 7',
    result: 'L',
    score: '1-2',
  },
  {
    id: 3,
    date: '2024-08-01T17:00:00Z',
    opponent: { name: 'Quantum Leap', logo: 'opponent-logo-3' },
    tournament: 'Summer Split - Week 6',
    result: 'W',
    score: '2-1',
  },
  {
    id: 4,
    date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    opponent: { name: 'Shadow Wolves', logo: 'opponent-logo-2' },
    tournament: 'Summer Split - Playoffs',
    result: 'TBD',
    score: 'vs',
  },
    {
    id: 5,
    date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
    opponent: { name: 'Cyber Dragons', logo: 'opponent-logo-1' },
    tournament: 'Summer Split - Playoffs',
    result: 'TBD',
    score: 'vs',
  },
];

export const news: NewsArticle[] = [
  {
    id: 1,
    title: 'GOG ESPORTS Qualifies for Summer Playoffs!',
    date: '2024-08-16',
    image: 'news-1',
    summary: 'After a decisive 2-0 victory against Cyber Dragons, the team has officially secured their spot in the Summer Split playoffs. The hard work and dedication have paid off!',
    content: 'Full article content about qualifying for the playoffs...',
  },
  {
    id: 2,
    title: 'Welcome Zenith, Our New ADC!',
    date: '2024-07-20',
    image: 'news-2',
    summary: 'We are thrilled to announce the newest addition to our roster, Zenith. His exceptional mechanics and game sense will be a huge asset to the team.',
    content: 'Full article content about the new player...',
  },
  {
    id: 3,
    title: 'New Partnership with TechGiant Inc.',
    date: '2024-07-10',
    image: 'news-3',
    summary: 'GOG ESPORTS is proud to partner with TechGiant Inc., a leader in high-performance gaming peripherals. This partnership will equip our players with the best gear to compete at the highest level.',
    content: 'Full article content about the new partnership...',
  },
  {
    id: 4,
    title: 'Match Analysis: GOG vs Shadow Wolves',
    date: '2024-08-09',
    image: 'news-4',
    summary: 'A deep dive into our tough loss against Shadow Wolves. We break down the key moments, strategies, and what we\'re learning as we head towards playoffs.',
    content: 'Full article content analyzing the match...',
  },
];
