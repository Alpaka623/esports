import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { players } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  IconBot,
  IconJungle,
  IconMid,
  IconSupport,
  IconTop,
} from '@/components/icons/role-icons';

const roleIcons: { [key: string]: React.ReactNode } = {
  Top: <IconTop className="h-8 w-8 text-primary" />,
  Jungle: <IconJungle className="h-8 w-8 text-primary" />,
  Mid: <IconMid className="h-8 w-8 text-primary" />,
  Bot: <IconBot className="h-8 w-8 text-primary" />,
  Support: <IconSupport className="h-8 w-8 text-primary" />,
};

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">
          Meet the <span className="text-primary">GOG</span> Roster
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          The talent, the drive, the champions. Get to know the players who make up GOG ESPORTS.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {players.map((player, index) => {
          const playerImage = PlaceHolderImages.find((img) => img.id === player.image);
          return (
            <Card key={player.id} className="overflow-hidden border-transparent bg-transparent shadow-none">
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center`}>
                <div className={`relative aspect-square md:aspect-[4/5] ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                  {playerImage && (
                    <Image
                      src={playerImage.imageUrl}
                      alt={playerImage.description}
                      fill
                      className="object-cover rounded-lg shadow-2xl shadow-primary/20"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      data-ai-hint={playerImage.imageHint}
                    />
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-4 mb-4">
                    {roleIcons[player.role]}
                    <div>
                      <p className="text-lg font-semibold text-primary">{player.role}</p>
                      <h2 className="text-4xl font-bold font-headline">{player.name}</h2>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-lg mb-8">
                    {player.bio}
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {player.stats.map((stat) => (
                      <div key={stat.name} className="bg-card p-4 rounded-lg">
                        <p className="text-2xl font-bold font-headline text-primary">{stat.value}</p>
                        <p className="text-sm text-muted-foreground">{stat.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
