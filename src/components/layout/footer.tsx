import Link from 'next/link';
import { GOLogo } from '@/components/icons/go-logo';
import { socialLinks } from '@/lib/data';

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-2">
            <GOLogo className="h-8 w-8 text-primary" />
            <span className="font-bold font-headline">GO ESPORTS</span>
          </div>
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label={link.name}
              >
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-foreground/60">
          <div className="flex justify-center gap-4 mb-2">
            <Link href="/impressum" className="text-primary hover:underline">
              Impressum
            </Link>
          </div>
          <p>&copy; {new Date().getFullYear()} GO Esports. All rights reserved.</p>
          <p className="mt-2">
            Contact us:{' '}
            <a
              href="mailto:contact@go-esports.de"
              className="text-primary hover:underline"
            >
              contact@go-esports.de
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}