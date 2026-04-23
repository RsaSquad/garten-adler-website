import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Seite nicht gefunden | Adler & Sohn',
    description: 'Die angeforderte Seite wurde nicht gefunden.',
    robots: {
        index: false,
        follow: false,
    },
};

export default function NotFound() {
    return (
        <main className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="container-custom py-20">
                <div className="max-w-2xl mx-auto text-center">
                    {/* Logo */}
                    <Link href="/" className="inline-flex items-center gap-3 mb-12">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center">
                            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                        </div>
                        <span className="text-2xl font-bold text-gray-900">
                            Adler <span className="text-green-600">& Sohn</span>
                        </span>
                    </Link>

                    {/* 404 */}
                    <div className="text-8xl font-bold text-green-600/20 mb-4">404</div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Seite nicht gefunden
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                        Die angeforderte Seite existiert leider nicht oder wurde verschoben.
                    </p>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-800 text-white rounded-full font-bold hover:bg-green-700 transition-colors shadow-lg"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <span>Zur Startseite</span>
                        </Link>
                        <Link
                            href="/standorte"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-bold hover:border-green-600 hover:text-green-600 transition-colors"
                        >
                            <span>Standorte ansehen</span>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
