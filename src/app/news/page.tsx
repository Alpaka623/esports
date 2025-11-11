import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { news } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export default function NewsPage() {
  const sortedNews = [...news].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">
          Latest <span className="text-primary">News</span> & Updates
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          All the latest announcements, game analyses, and stories from the GO ESPORTS team.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedNews.map((article) => {
          const articleImage = PlaceHolderImages.find((img) => img.id === article.image);
          return (
            <Link href="#" key={article.id} className="group">
              <Card className="h-full overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-2xl hover:shadow-primary/10 transform hover:-translate-y-2">
                {articleImage && (
                  <div className="relative w-full h-56">
                    <Image
                      src={articleImage.imageUrl}
                      alt={articleImage.description}
                      fill
                      className="object-cover"
                      data-ai-hint={articleImage.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <p className="text-sm text-muted-foreground">{new Date(article.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  <CardTitle className="font-headline text-xl leading-tight mt-2 h-16">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground h-24 overflow-hidden">{article.summary}</p>
                  <div className="mt-4 flex items-center text-primary font-semibold">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
