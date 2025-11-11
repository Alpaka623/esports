import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutPage() {
  const teamImage = PlaceHolderImages.find((img) => img.id === 'about-us-team');
  const facilityImage = PlaceHolderImages.find((img) => img.id === 'about-us-facility');

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <div className="relative pt-32 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">
          Gymnastik <span className="text-primary">ohne</span> Grenzen
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          More than just a team, we are a philosophy. We believe in pushing boundaries, both in-game and out, to achieve peak performance through discipline, strategy, and unity.
        </p>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Our History Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold font-headline mb-4">Our <span className="text-accent">History</span></h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2025, GO ESPORTS (Gymnastik ohne Grenzen) emerged from a small group of passionate gamers who believed in a holistic approach to competitive gaming. The name, "Gymnastics Without Borders," reflects our core belief in mental and physical fitness as a key to unlocking digital potential.
              </p>
            </div>
          </div>
          {teamImage && (
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl shadow-accent/20">
              <Image
                src={teamImage.imageUrl}
                alt={teamImage.description}
                fill
                className="object-cover"
                data-ai-hint={teamImage.imageHint}
              />
            </div>
          )}
        </div>

        {/* Our Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {facilityImage && (
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl shadow-primary/20 lg:order-last">
              <Image
                src={facilityImage.imageUrl}
                alt={facilityImage.description}
                fill
                className="object-cover"
                data-ai-hint={facilityImage.imageHint}
              />
            </div>
          )}
          <div>
            <h2 className="text-3xl font-bold font-headline mb-4">Our <span className="text-primary">Mission</span></h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <div>
                <h3 className="font-semibold text-foreground mb-2">To Innovate</h3>
                <p>We constantly refine our approach to training, incorporating sports science, psychology, and data analytics to stay ahead of the curve.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">To Compete</h3>
                <p>Our goal is to compete at the highest level of League of Legends, challenging for titles and leaving our mark on the global stage.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">To Inspire</h3>
                <p>We aim to inspire the next generation of esports athletes by demonstrating that success is built on a foundation of health, hard work, and teamwork.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
