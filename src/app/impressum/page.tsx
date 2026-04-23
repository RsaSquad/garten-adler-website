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
            <header className="bg-green-800/95 backdrop-blur-xl shadow-lg shadow-green-900/20">
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
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Angaben zum Anbieter</h2>
                            <p className="text-gray-600">
                                Adler &amp; Sohn<br />
                                Rehrhöfe 14a<br />
                                21423 Winsen (Luhe)<br />
                                Deutschland
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Vertreten durch</h2>
                            <p className="text-gray-600">
                                Geschäftsführerin: Particia Danger
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Kontakt</h2>
                            <p className="text-gray-600">
                                Telefon: 04131 - 39429 77<br />
                                E-Mail: galabau@sohn-adler.de
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Steuerliche Angaben</h2>
                            <p className="text-gray-600">
                                Steuernummer: 50/109/09177<br />
                                USt-IdNr.: DE458384130
                            </p>
                            <p className="text-gray-600 mt-2">
                                Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Verantwortlich für den Inhalt</h2>
                            <p className="text-gray-600">
                                nach § 55 Abs. 2 RStV:<br />
                                Particia Danger<br />
                                Rehrhöfe 14a<br />
                                21423 Winsen (Luhe)
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Streitschlichtung</h2>
                            <p className="text-gray-600">
                                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                                <a href="https://ec.europa.eu/consumers/odr/" className="text-green-600 hover:underline" target="_blank" rel="noopener noreferrer">
                                    https://ec.europa.eu/consumers/odr/
                                </a>
                            </p>
                            <p className="text-gray-600 mt-4">
                                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Haftung für Inhalte</h2>
                            <p className="text-gray-600">
                                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                                Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen
                                oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Haftung für Links</h2>
                            <p className="text-gray-600">
                                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten
                                ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Urheberrecht</h2>
                            <p className="text-gray-600">
                                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                                Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
                                bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
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
