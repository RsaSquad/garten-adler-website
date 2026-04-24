export interface BlogArticle {
    slug: string;
    title: string;
    metaTitle: string;
    metaDescription: string;
    excerpt: string;
    category: string;
    publishDate: string;
    updatedDate?: string;
    readingTime: number; // minutes
    keywords: string[];
    tableOfContents: { id: string; title: string }[];
    content: BlogSection[];
    faqs: { q: string; a: string }[];
    relatedServices: string[]; // service slugs for internal linking
    relatedCities?: string[]; // city slugs for internal linking
    heroImage?: string; // hero background image path
}

export interface BlogSection {
    id: string;
    heading: string;
    content: string; // HTML content
    type?: 'text' | 'comparison' | 'tip' | 'warning' | 'cost-table';
}

// ============================================================================
// BLOG ARTICLES
// ============================================================================

export const blogArticles: BlogArticle[] = [
    {
        slug: 'rollrasen-oder-rasen-saeen',
        title: 'Rollrasen oder Rasen säen? Der ehrliche Vergleich',
        metaTitle: 'Rollrasen oder Rasen säen? Kosten, Vorteile & ehrlicher Vergleich 2026',
        metaDescription: 'Rollrasen oder Rasen säen – was ist besser? ✓ Kosten-Vergleich ✓ Vor- & Nachteile ✓ Zeitaufwand ✓ Pflege-Tipps. Ehrliche Beratung vom Profi.',
        excerpt: 'Rollrasen oder Rasen säen? Wir vergleichen Kosten, Zeitaufwand, Pflege und Ergebnis – ehrlich und aus 15 Jahren Erfahrung als Garten- und Landschaftsbauer.',
        category: 'Ratgeber',
        publishDate: '2026-04-24',
        readingTime: 8,
        keywords: [
            'Rollrasen oder Rasen säen', 'Rollrasen Vorteile Nachteile', 'Rollrasen Kosten',
            'Rasen säen Kosten', 'Rollrasen vs Aussaat', 'Fertigrasen oder säen',
            'Rollrasen verlegen', 'Rasen anlegen Kosten', 'Rollrasen Erfahrungen',
        ],
        tableOfContents: [
            { id: 'ueberblick', title: 'Rollrasen vs. Rasen säen – der Überblick' },
            { id: 'kosten', title: 'Kosten im Vergleich' },
            { id: 'zeitaufwand', title: 'Zeitaufwand: Sofort grün vs. Geduld' },
            { id: 'qualitaet', title: 'Qualität und Ergebnis' },
            { id: 'pflege', title: 'Pflege in den ersten Wochen' },
            { id: 'boden', title: 'Bodenvorbereitung – bei beiden gleich wichtig' },
            { id: 'wann-rollrasen', title: 'Wann lohnt sich Rollrasen?' },
            { id: 'wann-saeen', title: 'Wann lohnt sich Rasen säen?' },
            { id: 'fazit', title: 'Unser ehrliches Fazit' },
        ],
        content: [
            {
                id: 'ueberblick',
                heading: 'Rollrasen vs. Rasen säen – der Überblick',
                content: `<p>Die Frage „<strong>Rollrasen oder Rasen säen?</strong>" gehört zu den häufigsten, die wir als Garten- und Landschaftsbauer hören. Und die ehrliche Antwort ist: <strong>Es kommt darauf an.</strong></p>
<p>Beide Methoden haben klare Stärken und Schwächen. In über 15 Jahren Erfahrung haben wir hunderte Rasenflächen angelegt – sowohl mit Rollrasen als auch mit Aussaat. In diesem Artikel geben wir Ihnen einen ehrlichen, praxisnahen Vergleich, damit Sie die richtige Entscheidung für Ihren Garten treffen können.</p>
<div class="comparison-box">
<div class="comparison-item">
<h4>🌿 Rollrasen (Fertigrasen)</h4>
<p>Wird auf speziellen Rasenschulen angebaut, als Soden geerntet und innerhalb von 24 Stunden verlegt. Ergebnis: <strong>Sofort ein perfekter, grüner Rasen.</strong></p>
</div>
<div class="comparison-item">
<h4>🌱 Rasen säen (Aussaat)</h4>
<p>Rasensamen werden gleichmäßig auf vorbereiteten Boden ausgesät. Nach 2-3 Wochen keimen die Samen, nach 8-12 Wochen ist der Rasen voll nutzbar.</p>
</div>
</div>`,
            },
            {
                id: 'kosten',
                heading: 'Kosten im Vergleich',
                content: `<p>Der <strong>größte Unterschied</strong> liegt im Preis – und hier ist Rollrasen deutlich teurer. Aber: Wenn Sie die Arbeitszeit und das Risiko einrechnen, relativiert sich der Unterschied.</p>
<table>
<thead>
<tr><th>Kostenfaktor</th><th>Rollrasen</th><th>Rasen säen</th></tr>
</thead>
<tbody>
<tr><td><strong>Material pro m²</strong></td><td>5 – 9 €</td><td>0,50 – 2 €</td></tr>
<tr><td><strong>Bodenvorbereitung</strong></td><td>3 – 5 €/m²</td><td>3 – 5 €/m²</td></tr>
<tr><td><strong>Verlegung/Aussaat</strong></td><td>5 – 8 €/m²</td><td>1 – 2 €/m²</td></tr>
<tr><td><strong>Gesamtkosten pro m²</strong></td><td><strong>13 – 22 €</strong></td><td><strong>4,50 – 9 €</strong></td></tr>
<tr><td><strong>100 m² Garten</strong></td><td><strong>1.300 – 2.200 €</strong></td><td><strong>450 – 900 €</strong></td></tr>
<tr><td><strong>Nachsaat-Risiko</strong></td><td>Gering (< 5%)</td><td>Hoch (20-30%)</td></tr>
</tbody>
</table>
<p><strong>Wichtig:</strong> Bei der Aussaat müssen Sie oft <strong>nachsäen</strong>, weil Vögel Samen fressen, Regen Samen wegschwemmt oder kahle Stellen entstehen. Diese versteckten Kosten werden oft vergessen.</p>`,
            },
            {
                id: 'zeitaufwand',
                heading: 'Zeitaufwand: Sofort grün vs. Geduld',
                content: `<p>Hier liegt der <strong>dramatischste Unterschied</strong>:</p>
<table>
<thead>
<tr><th>Zeitfaktor</th><th>Rollrasen</th><th>Rasen säen</th></tr>
</thead>
<tbody>
<tr><td><strong>Bis sofort begehbar</strong></td><td>Sofort (vorsichtig)</td><td>6-8 Wochen</td></tr>
<tr><td><strong>Bis voll belastbar</strong></td><td>2-3 Wochen</td><td>10-14 Wochen</td></tr>
<tr><td><strong>Bis perfektes Ergebnis</strong></td><td>4-6 Wochen</td><td>6-12 Monate</td></tr>
<tr><td><strong>Idealer Zeitraum</strong></td><td>März bis Oktober</td><td>April-Mai oder September</td></tr>
</tbody>
</table>
<p><strong>Unser Praxis-Tipp:</strong> Wenn Sie im Frühling anfangen und den Garten im Sommer nutzen wollen, ist Rollrasen die einzige Option. Rasen säen im Mai bedeutet: Erst im August/September voll nutzbar – und dann kommt schon der Herbst.</p>`,
            },
            {
                id: 'qualitaet',
                heading: 'Qualität und Ergebnis',
                content: `<p>Rollrasen wird auf <strong>professionellen Rasenschulen</strong> unter idealen Bedingungen angebaut – 12 bis 18 Monate lang, bevor er geerntet wird. Das Ergebnis:</p>
<ul>
<li><strong>Dichte, geschlossene Grasnarbe</strong> vom ersten Tag</li>
<li><strong>Kein Unkraut</strong> – die dichte Narbe lässt nichts durch</li>
<li><strong>Gleichmäßige Optik</strong> – keine kahlen Stellen</li>
<li><strong>Sofortiger Erosionsschutz</strong> – besonders an Hängen wichtig</li>
</ul>
<p>Bei der <strong>Aussaat</strong> hängt das Ergebnis stark von den Bedingungen ab:</p>
<ul>
<li>Wetter während der Keimung (zu trocken = nichts wächst, zu nass = Samen faulen)</li>
<li>Vögel fressen einen Teil der Samen</li>
<li>Wind verweht Samen, es entstehen kahle Stellen</li>
<li>Unkraut wächst oft schneller als das Gras</li>
</ul>
<p><strong>Ehrliches Fazit:</strong> Ein vom Profi verlegter Rollrasen sieht vom ersten Tag perfekt aus. Ein gesäter Rasen kann nach einem Jahr genauso gut sein – aber der Weg dahin ist deutlich steiniger.</p>`,
            },
            {
                id: 'pflege',
                heading: 'Pflege in den ersten Wochen',
                content: `<h3>Rollrasen – Pflege nach der Verlegung</h3>
<ul>
<li><strong>Woche 1-2:</strong> Täglich wässern (15-20 Liter/m²)</li>
<li><strong>Woche 3-4:</strong> Alle 2-3 Tage wässern</li>
<li><strong>Ab Woche 3:</strong> Erster Schnitt auf 4-5 cm</li>
<li><strong>Ab Woche 6:</strong> Erste Düngung</li>
</ul>
<h3>Gesäter Rasen – Pflege nach der Aussaat</h3>
<ul>
<li><strong>Tag 1-21:</strong> Boden ständig feucht halten (2-3x täglich besprühen!)</li>
<li><strong>Woche 3-4:</strong> Keimung beginnt  – weiter feucht halten</li>
<li><strong>Woche 6-8:</strong> Erster vorsichtiger Schnitt auf 5-6 cm</li>
<li><strong>Woche 10-12:</strong> Kahle Stellen nachsäen</li>
<li><strong>Ab Monat 3:</strong> Normaler Mäh-Rhythmus möglich</li>
</ul>
<p><strong>Der große Unterschied:</strong> Rollrasen verzeiht Pflege-Fehler deutlich besser. Vergessen Sie einen Tag das Wässern, überlebt er das meistens. Bei frischer Aussaat kann ein trockener Tag die Keimung komplett zerstören.</p>`,
            },
            {
                id: 'boden',
                heading: 'Bodenvorbereitung – bei beiden gleich wichtig',
                content: `<p>Egal ob Rollrasen oder Aussaat – die <strong>Bodenvorbereitung ist identisch</strong> und entscheidet über den langfristigen Erfolg:</p>
<ol>
<li><strong>Alten Bewuchs entfernen:</strong> Gras, Unkraut, Steine</li>
<li><strong>Boden fräsen:</strong> 15-20 cm tief lockern</li>
<li><strong>Steine und Wurzeln entfernen</strong></li>
<li><strong>Rasenerde aufbringen:</strong> 2-3 cm Schicht</li>
<li><strong>Walzen:</strong> Ebene, feste Fläche schaffen</li>
<li><strong>Fein harken:</strong> Krümelige Oberfläche für optimalen Kontakt</li>
</ol>
<p><strong>Profi-Tipp:</strong> Investieren Sie in gute Bodenvorbereitung! 80% aller Rasen-Probleme entstehen durch schlechten Unterbau – egal ob Rollrasen oder Aussaat.</p>`,
            },
            {
                id: 'wann-rollrasen',
                heading: 'Wann lohnt sich Rollrasen?',
                content: `<p>Rollrasen ist die <strong>bessere Wahl</strong>, wenn:</p>
<ul>
<li>✅ Sie <strong>sofort einen fertigen Rasen</strong> brauchen (z.B. nach Hausbau)</li>
<li>✅ Sie <strong>Kinder oder Haustiere</strong> haben, die den Rasen schnell nutzen wollen</li>
<li>✅ Das <strong>Budget da ist</strong> und Sie Wert auf ein perfektes Ergebnis legen</li>
<li>✅ Sie an einem <strong>Hang</strong> wohnen (Erosionsschutz!)</li>
<li>✅ Sie im <strong>Sommer starten</strong> wollen (Aussaat funktioniert dann schlecht)</li>
<li>✅ Sie <strong>Unkraut-Probleme</strong> im Garten haben (Rollrasen deckt alles ab)</li>
<li>✅ Sie wenig Zeit für <strong>wochenlange Pflege</strong> haben</li>
</ul>`,
            },
            {
                id: 'wann-saeen',
                heading: 'Wann lohnt sich Rasen säen?',
                content: `<p>Aussaat ist die <strong>bessere Wahl</strong>, wenn:</p>
<ul>
<li>✅ Sie ein <strong>kleines Budget</strong> haben</li>
<li>✅ Sie <strong>Geduld</strong> mitbringen und Zeit haben</li>
<li>✅ Sie eine <strong>spezielle Rasensorte</strong> wollen (z.B. Kräuterrasen, Blumenwiese)</li>
<li>✅ Die Fläche <strong>sehr groß</strong> ist (ab 500 m² wird Rollrasen sehr teuer)</li>
<li>✅ Sie im <strong>Frühjahr oder Herbst</strong> starten (ideale Keimzeit)</li>
<li>✅ Sie <strong>Spaß an Gartenarbeit</strong> haben und den Prozess genießen</li>
</ul>`,
            },
            {
                id: 'fazit',
                heading: 'Unser ehrliches Fazit',
                content: `<p>Nach über <strong>15 Jahren und hunderten Projekten</strong> ist unsere Einschätzung:</p>
<div class="fazit-box">
<p><strong>Für 80% unserer Kunden empfehlen wir Rollrasen.</strong> Der höhere Preis wird durch sofortige Nutzbarkeit, geringeres Risiko und deutlich weniger Pflegeaufwand mehr als ausgeglichen.</p>
<p>Rasen säen empfehlen wir, wenn das Budget eng ist oder Sie eine sehr große Fläche (ab 500 m²) begrünen wollen. Dann lohnt sich die Geduld.</p>
</div>
<p><strong>Was viele nicht wissen:</strong> Die Bodenvorbereitung ist bei beiden Methoden gleich – und das ist der teuerste Teil. Der reine Materialunterschied liegt bei nur 3-7 €/m². Auf 100 m² sind das 300-700 € Unterschied – für ein sofort perfektes Ergebnis statt monatelangem Warten.</p>`,
            },
        ],
        faqs: [
            {
                q: 'Was ist günstiger – Rollrasen oder Rasen säen?',
                a: 'Rasen säen ist im Material deutlich günstiger (0,50-2 €/m² vs. 5-9 €/m²). Allerdings fallen bei der Aussaat oft Nachsaat-Kosten an, da Vögel, Wind und Regen Samen zerstören. Die Bodenvorbereitung kostet bei beiden gleich viel. Insgesamt ist Aussaat etwa 50% günstiger.',
            },
            {
                q: 'Wie lange dauert es, bis Rollrasen begehbar ist?',
                a: 'Rollrasen ist sofort vorsichtig begehbar und nach 2-3 Wochen voll belastbar. Gesäter Rasen braucht 6-8 Wochen bis zur ersten Nutzung und 10-14 Wochen bis zur vollen Belastbarkeit.',
            },
            {
                q: 'Kann man Rollrasen das ganze Jahr verlegen?',
                a: 'Rollrasen kann von März bis Oktober verlegt werden – am besten im Frühling oder Herbst. Im Hochsommer ist intensives Wässern nötig. Im Winter pausiert die Verlegung, da der Rasen nicht anwachsen würde.',
            },
            {
                q: 'Wie pflege ich frisch verlegten Rollrasen?',
                a: 'In den ersten 2 Wochen täglich wässern (15-20 Liter/m²). Ab Woche 3 alle 2-3 Tage wässern. Der erste Schnitt erfolgt nach ca. 2-3 Wochen auf 4-5 cm Höhe. Erste Düngung nach 6 Wochen.',
            },
            {
                q: 'Rollrasen oder Rasen säen bei Hanglage?',
                a: 'Bei Hanglagen empfehlen wir eindeutig Rollrasen. Er bietet sofortigen Erosionsschutz, während bei Aussaat die Samen bei Regen weggespült werden. Rollrasen-Soden werden auf Hängen mit Erdnägeln fixiert.',
            },
            {
                q: 'Wie lange hält Rollrasen?',
                a: 'Professionell verlegter Rollrasen hält bei guter Pflege Jahrzehnte – genau wie ein gesäter Rasen. Die Lebensdauer hängt nicht von der Anlegemethode ab, sondern von der Pflege: regelmäßig mähen, düngen und wässern.',
            },
        ],
        relatedServices: ['rollrasen', 'gartenpflege', 'garten-und-landschaftsbau'],
        heroImage: '/images/blog-rollrasen-vergleich.png',
    },
];

// Helper functions
export function getBlogArticleBySlug(slug: string): BlogArticle | undefined {
    return blogArticles.find((article) => article.slug === slug);
}

export function getAllBlogSlugs(): string[] {
    return blogArticles.map((article) => article.slug);
}
