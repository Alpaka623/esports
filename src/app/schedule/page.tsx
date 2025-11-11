import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { matches } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Match } from '@/lib/types';
import { cn } from '@/lib/utils';

export default function SchedulePage() {
  const upcomingMatches = matches
    .filter((match) => new Date(match.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    
  const pastMatches = matches
    .filter((match) => new Date(match.date) < new Date())
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">
          Match <span className="text-primary">Schedule</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Follow our journey through the season. Find details on all our upcoming and past encounters.
        </p>
      </div>

      <Tabs defaultValue="upcoming" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="upcoming">Upcoming Matches</TabsTrigger>
          <TabsTrigger value="results">Match Results</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
          <div className="space-y-6 mt-8">
            {upcomingMatches.length > 0 ? (
              upcomingMatches.map((match) => <MatchCard key={match.id} match={match} />)
            ) : (
              <p className="text-center text-muted-foreground py-12">No upcoming matches scheduled. Check back soon!</p>
            )}
          </div>
        </TabsContent>
        <TabsContent value="results">
          <div className="space-y-6 mt-8">
            {pastMatches.length > 0 ? (
              pastMatches.map((match) => <MatchCard key={match.id} match={match} />)
            ) : (
              <p className="text-center text-muted-foreground py-12">No past matches found.</p>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function MatchCard({ match }: { match: Match }) {
  const opponentLogo = PlaceHolderImages.find((img) => img.id === match.opponent.logo);
  const gogLogo = PlaceHolderImages.find((img) => img.id === 'gog-logo');
  const matchDate = new Date(match.date);
  const isPast = match.result !== 'TBD';

  return (
    <Card className="hover:border-primary/50 transition-colors">
      <CardContent className="p-4 md:p-6 flex items-center">
        <div className="hidden md:block w-1/4 text-center">
          <p className="font-semibold">{matchDate.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</p>
          <p className="text-muted-foreground text-sm">{matchDate.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}</p>
        </div>

        <div className="flex-1 flex items-center justify-between">
          <div className="flex items-center gap-4 w-2/5 justify-end">
            <span className="font-bold text-lg hidden md:inline">GOG</span>
             {gogLogo && <Image src={gogLogo.imageUrl} alt="GOG Logo" width={48} height={48} className="rounded-full" data-ai-hint={gogLogo.imageHint} />}
          </div>

          <div className="text-center mx-4">
            <p className={cn(
                "font-bold text-2xl",
                isPast && match.result === 'W' && 'text-green-400',
                isPast && match.result === 'L' && 'text-red-400',
                !isPast && 'text-primary'
              )}>{match.score}</p>
              <p className="text-xs text-muted-foreground mt-1 truncate">{match.tournament}</p>
          </div>

          <div className="flex items-center gap-4 w-2/5">
            {opponentLogo && <Image src={opponentLogo.imageUrl} alt={`${match.opponent.name} Logo`} width={48} height={48} className="rounded-full" data-ai-hint={opponentLogo.imageHint} />}
            <span className="font-bold text-lg hidden md:inline">{match.opponent.name}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
