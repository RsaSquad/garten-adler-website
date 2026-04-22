import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Impressum | Adler & Sohn',
    description: 'Impressum der Adler & Sohn GmbH – Angaben gemäß § 5 TMG. Garten- und Landschaftsbau in Lüneburg und Umgebung.',
    alternates: {
        canonical: 'https://garten-adler.de/impressum',
    },
    robots: {
        index: false,
        follow: true,
    },
};

export default function Impressum() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="container-custom py-6">
                    <Link href="/" className="flex items-center gap-3">
                        <Image src="/images/logo.png" alt="Adler & Sohn Galabau" width={140} height={47} className="h-10 w-auto object-contain" />
                    </Link>
                </div>
            </header>

            {/* Content */}
            <div className="container-custom py-16">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-900 mb-8">Impressum</h1>

                    <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Angaben gemäß § 5 TMG</h2>
                            <p className="text-gray-600">
                                Adler & Sohn GmbH<br />
                                Musterstraße 123<br />
                                21335 Lüneburg
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Kontakt</h2>
                            <p className="text-gray-600">
                                Telefon: +49 4131 123 456<br />
                                E-Mail: info@garten-adler.de
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Vertreten durch</h2>
                            <p className="text-gray-600">
                                Geschäftsführer: Max Mustermann
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Registereintrag</h2>
                            <p className="text-gray-600">
                                Eintragung im Handelsregister<br />
                                Registergericht: Amtsgericht Lüneburg<br />
                                Registernummer: HRB XXXXX
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Umsatzsteuer-ID</h2>
                            <p className="text-gray-600">
                                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                                DE XXX XXX XXX
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Streitschlichtung</h2>
                            <p className="text-gray-600">
                                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                                <a href="https://ec.europa.eu/consumers/odr/" className="text-green-600 hover:underline" target="_blank" rel="noopener noreferrer">
                                    https://ec.europa.eu/consumers/odr/
                                </a><br />
                                Unsere E-Mail-Adresse finden Sie oben im Impressum.
                            </p>
                            <p className="text-gray-600 mt-4">
                                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Haftung für Inhalte</h2>
                            <p className="text-gray-600">
                                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                                Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
                            </p>
                        </section>
                    </div>

                    <div className="mt-8 text-center">
                        <Link href="/" className="text-green-600 hover:text-green-700 font-medium">
                            ← Zurück zur Startseite
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
