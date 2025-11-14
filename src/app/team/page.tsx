import { Card } from '@/components/ui/card';
import { players } from '@/lib/data';

const roleIcons: { [key: string]: React.ReactNode } = {
  Top: <img src="/imgs/Position_Challenger-Top.png" alt="Top Icon" className="h-8 w-8" />,
  Jungle: <img src="/imgs/Position_Challenger-Jungle.png" alt="Jungle Icon" className="h-8 w-8" />,
  Mid: <img src="/imgs/Position_Challenger-Mid.png" alt="Mid Icon" className="h-8 w-8" />,
  Bot: <img src="/imgs/Position_Challenger-Bot.png" alt="Bot Icon" className="h-8 w-8" />,
  Support: <img src="/imgs/Position_Challenger-Support.png" alt="Support Icon" className="h-8 w-8" />,
};

function calculateAge(birthdate: string): number {
  const birth = new Date(birthdate);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">
          Meet the <span className="text-primary">GO</span> Roster
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          The talent, the drive, the champions. Get to know the players who make up GO ESPORTS.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {players.map((player, index) => {
          const displayStats = [...player.stats];
          if (player.birthdate) {
            const age = calculateAge(player.birthdate);
            displayStats.unshift({ name: 'Age', value: age.toString() });
          }

          return (
            <div key={player.id}>
              {player.id == 6 && (
                <>
                  <hr/>
                  <h2 className="text-3xl font-bold font-headline mb-8 mt-16 text-center">Substitutes</h2>
                </>
            )}
              <Card className="overflow-hidden border-transparent bg-transparent shadow-none">
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
                      {displayStats.map((stat) => (
                        <div key={stat.name} className="bg-card px-2 py-4 md:p-4 rounded-lg">
                          <p className="md:text-2xl font-bold font-headline text-primary">{stat.value}</p>
                          <p className="text-xs md:text-sm text-muted-foreground">{stat.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
