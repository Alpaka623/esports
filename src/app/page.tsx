import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Newspaper, Users } from 'lucide-react';
import { players, news } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
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
              <Link href="/news">Latest News</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
              <Link href="/team">Meet the Team</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 sm:py-24 space-y-24">
        {/* Quick Links Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

        {/* Latest News */}
        <section>
          <h2 className="text-3xl font-bold font-headline mb-6 text-center">Latest News</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
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
