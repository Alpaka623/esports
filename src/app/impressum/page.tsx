export default function ImpressumPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">
            Impressum
          </h1>
        </div>

        <div className="max-w-3xl mx-auto text-muted-foreground leading-relaxed space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-headline text-foreground">
              Anbieterkennung (nach § 5 TMG):
            </h3>
            <p>Finn Mierke</p>
            <p>Otto-Hue-Straße 5</p>
            <p>59439, Holzwickede</p>
            <p>
              E-Mail:{' '}
              <a
                href="mailto:contact@go-esports.de"
                className="text-primary hover:underline"
              >
                contact@go-esports.de
              </a>
            </p>
            <p>Telefon: 0157 32212053</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-headline text-foreground">
              Redaktionelle Verantwortung (nach § 18 MStV):
            </h3>
            <p>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:</p>
            <p>Finn Mierke</p>
            <p>Otto-Hue-Straße 5</p>
            <p>59439, Holzwickede</p>
          </div>
        </div>
      </div>
    </div>
  );
}