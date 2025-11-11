import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Calendar, Newspaper, Users } from 'lucide-react';
import { players, news, matches } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Player, Match } from '@/lib/types';
import {
  IconBot,
  IconJungle,
  IconMid,
  IconSupport,
  IconTop,
} from '@/components/icons/role-icons';

const roleIcons: { [key: string]: React.ReactNode } = {
  Top: <IconTop className="h-6 w-6" />,
  Jungle: <IconJungle className="h-6 w-6" />,
  Mid: <IconMid className="h-6 w-6" />,
  Bot: <IconBot className="h-6 w-6" />,
  Support: <IconSupport className="h-6 w-6" />,
};

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
const latestNews = news.slice(0, 2);
const upcomingMatch = matches.find((match) => new Date(match.date) > new Date());
const teamPlayers = players.slice(0, 5);

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover brightness-50"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-7xl font-bold font-headline tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-accent">
            GOG ESPORTS
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-neutral-200">
            Gymnastik ohne Grenzen: Pushing the limits in the League of Legends arena.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/schedule">Match Schedule</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
              <Link href="/team">Meet the Team</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 sm:py-24 space-y-24">
        {/* Quick Links Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/team" className="group">
            <Card className="h-full text-center hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <Users className="h-12 w-12 mx-auto text-primary" />
                <CardTitle className="font-headline mt-4">Our Roster</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Meet the players behind the champions.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/schedule" className="group">
            <Card className="h-full text-center hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <Calendar className="h-12 w-12 mx-auto text-primary" />
                <CardTitle className="font-headline mt-4">Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Catch us live and see our past results.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/news" className="group">
            <Card className="h-full text-center hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <Newspaper className="h-12 w-12 mx-auto text-primary" />
                <CardTitle className="font-headline mt-4">Latest News</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Stay updated with team announcements.</p>
              </CardContent>
            </Card>
          </Link>
        </section>

        {/* Upcoming Match & Latest News */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold font-headline mb-6">Next Match</h2>
            {upcomingMatch ? <UpcomingMatchCard match={upcomingMatch} /> : <p>No upcoming matches scheduled.</p>}
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold font-headline mb-6">Latest News</h2>
            <div className="space-y-6">
              {latestNews.map((article) => {
                const articleImage = PlaceHolderImages.find((img) => img.id === article.image);
                return (
                  <Link href="/news" key={article.id}>
                    <Card className="flex flex-col md:flex-row items-center gap-6 p-4 hover:bg-card/80 transition-colors">
                      {articleImage && (
                        <Image
                          src={articleImage.imageUrl}
                          alt={articleImage.description}
                          width={150}
                          height={100}
                          className="rounded-md object-cover w-full md:w-[150px] h-[100px]"
                          data-ai-hint={articleImage.imageHint}
                        />
                      )}
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">{article.date}</p>
                        <h3 className="font-semibold font-headline text-lg mt-1">{article.title}</h3>
                      </div>
                      <ArrowRight className="h-5 w-5 text-primary ml-auto hidden md:block" />
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Preview */}
        <section>
          <h2 className="text-3xl font-bold font-headline text-center mb-12">Meet The Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
            {teamPlayers.map((player) => {
              const playerImage = PlaceHolderImages.find((img) => img.id === player.image);
              return (
                <Link href="/team" key={player.id} className="group">
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                    {playerImage && (
                      <Image
                        src={playerImage.imageUrl}
                        alt={playerImage.description}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={playerImage.imageHint}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <div className="text-primary">{roleIcons[player.role]}</div>
                      <h3 className="text-white font-bold font-headline text-xl mt-1">{player.name}</h3>
                      <p className="text-neutral-300 text-sm">{player.role}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

function UpcomingMatchCard({ match }: { match: Match }) {
  const opponentLogo = PlaceHolderImages.find((img) => img.id === match.opponent.logo);
  const gogLogo = PlaceHolderImages.find((img) => img.id === 'gog-logo');
  const matchDate = new Date(match.date);

  return (
    <Card className="bg-gradient-to-br from-card to-card/60 p-1 shadow-lg">
      <CardContent className="p-6 bg-card rounded-lg">
        <p className="text-sm text-center text-muted-foreground">{match.tournament}</p>
        <div className="flex items-center justify-around my-4">
          <div className="flex flex-col items-center gap-2">
            {gogLogo && (
              <Image
                src={gogLogo.imageUrl}
                alt={gogLogo.description}
                width={64}
                height={64}
                className="rounded-full"
                data-ai-hint={gogLogo.imageHint}
              />
            )}
            <span className="font-semibold">GOG</span>
          </div>
          <span className="text-2xl font-bold text-muted-foreground">VS</span>
          <div className="flex flex-col items-center gap-2">
            {opponentLogo && (
              <Image
                src={opponentLogo.imageUrl}
                alt={opponentLogo.description}
                width={64}
                height={64}
                className="rounded-full"
                data-ai-hint={opponentLogo.imageHint}
              />
            )}
            <span className="font-semibold">{match.opponent.name}</span>
          </div>
        </div>
        <div className="text-center">
          <p className="font-bold text-lg text-primary">{matchDate.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}</p>
          <p className="text-muted-foreground">{matchDate.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}</p>
        </div>
      </CardContent>
    </Card>
  );
}
