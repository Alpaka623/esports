import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { players } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const roleIcons: { [key: string]: React.ReactNode } = {
  Top: <img src="/imgs/Position_Challenger-Top.png" alt="Top Icon" className="h-8 w-8" />,
  Jungle: <img src="/imgs/Position_Challenger-Jungle.png" alt="Jungle Icon" className="h-8 w-8" />,
  Mid: <img src="/imgs/Position_Challenger-Mid.png" alt="Mid Icon" className="h-8 w-8" />,
  Bot: <img src="/imgs/Position_Challenger-Bot.png" alt="Bot Icon" className="h-8 w-8" />,
  Support: <img src="/imgs/Position_Challenger-Support.png" alt="Support Icon" className="h-8 w-8" />,
};

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
const teamPlayers = players.slice(0, 5);

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white">
          <Image
            src="/imgs/hero.jpg"
            alt={'Esports Hero Background'}
            fill
            className="object-cover brightness-50"
            priority
          />

        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-7xl font-bold font-headline tracking-tighter bg-clip-text text-transparent bg-gradient-to-r text-white from-primary via-purple-400 to-accent">
            GO ESPORTS
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-neutral-200">
            Gymnastik ohne Grenzen: Pushing the limits in the League of Legends arena.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
              <Link href="/team">Meet the Team</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">

        {/* Team Preview */}
        <section>
          <h2 className="text-3xl font-bold font-headline text-center mb-12">Meet The Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
            {teamPlayers.map((player) => {
              return (
                <Link href="/team" key={player.id} className="group">
                  <Card>
                    <div className="relative aspect-square md:aspect-[2] rounded-lg overflow-hidden">
                      <div className="absolute bottom-0 left-0 p-4">
                        <div className="text-primary">{roleIcons[player.role]}</div>
                        <h3 className="text-white font-bold font-headline text-xl mt-1">{player.name}</h3>
                        <p className="text-neutral-300 text-sm">{player.role}</p>
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
