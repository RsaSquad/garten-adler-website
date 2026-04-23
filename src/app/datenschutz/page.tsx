import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Datenschutzerklärung',
    description: 'Datenschutzerklärung der Adler & Sohn GmbH. Informationen zur Erfassung und Verarbeitung Ihrer Daten.',
    robots: {
        index: false,
        follow: false,
    },
    alternates: {
        canonical: 'https://garten-adler.de/datenschutz',
    },
};

export default function Datenschutz() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-green-800/95 backdrop-blur-xl shadow-lg shadow-green-900/20">
                <div className="container-custom py-1.5">
                    <Link href="/" className="flex items-center gap-3">
                        <Image src="/images/logo.png" alt="Adler & Sohn Galabau" width={180} height={60} className="h-7 md:h-9 w-auto object-contain" priority />
                    </Link>
                </div>
            </header>

            {/* Content */}
            <div className="container-custom py-16">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>

                    <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">1. Datenschutz auf einen Blick</h2>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Allgemeine Hinweise</h3>
                            <p className="text-gray-600">
                                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert,
                                wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Datenschutz</h3>
                            <p className="text-gray-600 mb-4">
                                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
                                Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                            </p>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Hinweis zur verantwortlichen Stelle</h3>
                            <p className="text-gray-600">
                                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
                                Adler & Sohn GmbH<br />
                                Musterstraße 123<br />
                                21335 Lüneburg<br /><br />
                                Telefon: 04131 - 394 2971<br />
                                E-Mail: galabau@sohn-adler.de
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">3. Datenerfassung auf dieser Website</h2>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Kontaktformular</h3>
                            <p className="text-gray-600 mb-4">
                                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
                                inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
                                Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                            </p>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Server-Log-Dateien</h3>
                            <p className="text-gray-600">
                                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien,
                                die Ihr Browser automatisch an uns übermittelt. Dies sind:<br /><br />
                                • Browsertyp und Browserversion<br />
                                • verwendetes Betriebssystem<br />
                                • Referrer URL<br />
                                • Hostname des zugreifenden Rechners<br />
                                • Uhrzeit der Serveranfrage<br />
                                • IP-Adresse
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">4. Ihre Rechte</h2>
                            <p className="text-gray-600">
                                Sie haben jederzeit das Recht:<br /><br />
                                • Auskunft über Ihre bei uns gespeicherten Daten zu erhalten<br />
                                • die Berichtigung unrichtiger Daten zu verlangen<br />
                                • die Löschung Ihrer Daten zu verlangen<br />
                                • die Einschränkung der Verarbeitung zu verlangen<br />
                                • der Verarbeitung zu widersprechen<br />
                                • eine Datenübertragung zu verlangen<br />
                                • Ihre Einwilligung zu widerrufen<br />
                                • sich bei einer Aufsichtsbehörde zu beschweren
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">5. SSL-Verschlüsselung</h2>
                            <p className="text-gray-600">
                                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-Verschlüsselung.
                                Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt
                                und an dem Schloss-Symbol in Ihrer Browserzeile.
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
