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

    // ========================================================================
    // ARTIKEL 2: Rasen düngen, mähen, vertikutieren — der Jahresplan
    // ========================================================================
    {
        slug: 'rasen-pflege-jahresplan',
        title: 'Rasen düngen, mähen, vertikutieren — der Jahresplan',
        metaTitle: 'Rasen düngen, mähen & vertikutieren: Der komplette Jahresplan 2026',
        metaDescription: 'Wann Rasen düngen, mähen und vertikutieren? ✓ Monat für Monat ✓ Profi-Zeitplan ✓ Die häufigsten Fehler vermeiden. Ihr Rasen wird es Ihnen danken.',
        excerpt: 'Die richtige Rasenpflege zur richtigen Zeit entscheidet über einen sattgrünen Rasen oder braune Flecken. Unser Monats-Fahrplan aus der Praxis.',
        category: 'Ratgeber',
        publishDate: '2026-04-24',
        readingTime: 10,
        heroImage: '/images/blog-rasen-jahresplan.png',
        keywords: [
            'Rasen düngen wann', 'Rasen mähen Zeitplan', 'Rasen vertikutieren wann',
            'Rasenpflege Jahresplan', 'Rasen Kalender', 'Rasen düngen Frühling',
            'Rasen pflegen Anleitung', 'Rasen Monat für Monat',
        ],
        tableOfContents: [
            { id: 'warum', title: 'Warum ein Jahresplan wichtig ist' },
            { id: 'fruehling', title: 'Frühling (März – Mai)' },
            { id: 'sommer', title: 'Sommer (Juni – August)' },
            { id: 'herbst', title: 'Herbst (September – November)' },
            { id: 'winter', title: 'Winter (Dezember – Februar)' },
            { id: 'fehler', title: 'Die 5 häufigsten Fehler' },
            { id: 'ueberblick', title: 'Der Jahresplan auf einen Blick' },
        ],
        content: [
            {
                id: 'warum',
                heading: 'Warum ein Jahresplan wichtig ist',
                content: `<p>Ein schöner Rasen entsteht nicht durch Zufall. Er braucht die <strong>richtige Pflege zur richtigen Zeit</strong>. Zu früh vertikutieren, zu spät düngen oder im Hochsommer zu kurz mähen – das sind Fehler, die wir bei Kunden regelmäßig sehen.</p>
<p>In diesem Jahresplan zeigen wir Ihnen Monat für Monat, was Ihr Rasen wirklich braucht. Keine Theorie, sondern <strong>Praxiswissen aus über 15 Jahren</strong> Gartenpflege in Norddeutschland.</p>`,
            },
            {
                id: 'fruehling',
                heading: 'Frühling (März – Mai)',
                content: `<h3>März: Der Rasen wacht auf</h3>
<ul>
<li><strong>Erste Inspektion:</strong> Laub, Äste und Moos entfernen</li>
<li><strong>Nicht betreten</strong> bei Frost oder Nässe — das beschädigt die Grasnarbe</li>
<li><strong>Ende März:</strong> Erster vorsichtiger Schnitt auf 5 cm (nur bei trockenem Boden!)</li>
</ul>

<h3>April: Vertikutieren und Düngen</h3>
<p>April ist der <strong>wichtigste Monat</strong> für Ihren Rasen:</p>
<ul>
<li><strong>Vertikutieren:</strong> Moos und Rasenfilz entfernen. Nur bei trockenem Boden, wenn der Rasen aktiv wächst (Bodentemperatur ab 8°C)</li>
<li><strong>Erste Düngung:</strong> Stickstoffbetonter Langzeitdünger (NPK 20-5-10). Ca. 30g pro m²</li>
<li><strong>Kahle Stellen nachsäen:</strong> Jetzt ist die ideale Zeit für Nachsaat</li>
<li><strong>Mähen:</strong> Wöchentlich auf 4-5 cm</li>
</ul>

<h3>Mai: Volles Wachstum</h3>
<ul>
<li><strong>Mähen:</strong> 1-2x pro Woche auf 3,5-4 cm</li>
<li><strong>Wässern:</strong> Bei Trockenheit 1-2x pro Woche durchdringend (15-20 Liter/m²)</li>
<li><strong>Unkraut:</strong> Von Hand ausstechen, solange es jung ist</li>
</ul>`,
            },
            {
                id: 'sommer',
                heading: 'Sommer (Juni – August)',
                content: `<h3>Juni: Zweite Düngung</h3>
<ul>
<li><strong>Düngung:</strong> Zweite Gabe Langzeitdünger (ca. 25g/m²)</li>
<li><strong>Mähen:</strong> Regelmäßig, aber nicht zu kurz! Mindestens 4 cm</li>
<li><strong>Kanten schneiden:</strong> Entlang von Beeten und Wegen für saubere Optik</li>
</ul>

<h3>Juli – August: Hitze überstehen</h3>
<p>Die kritischste Phase. Hier werden die meisten Fehler gemacht:</p>
<ul>
<li><strong>Schnitthöhe auf 5 cm anheben</strong> — längeres Gras beschattet den Boden und verdunstet weniger</li>
<li><strong>Lieber seltener, dafür gründlich wässern:</strong> 2x pro Woche je 20 Liter/m² statt täglich sprenkeln</li>
<li><strong>Morgens wässern</strong> (vor 9 Uhr) — abends fördert Pilzbefall</li>
<li><strong>Nicht düngen</strong> bei Temperaturen über 30°C — das verbrennt den Rasen</li>
<li><strong>Brauner Rasen?</strong> Keine Panik — die meisten Gräser erholen sich nach Regen von selbst</li>
</ul>`,
            },
            {
                id: 'herbst',
                heading: 'Herbst (September – November)',
                content: `<h3>September: Herbst-Kur</h3>
<p>Der <strong>zweitwichtigste Monat</strong> nach April:</p>
<ul>
<li><strong>Herbstdüngung:</strong> Kaliumbetonter Dünger (NPK 10-5-20) — stärkt die Frostresistenz</li>
<li><strong>Nachsaat:</strong> Letzte Chance für kahle Stellen, noch ist es warm genug</li>
<li><strong>Vertikutieren:</strong> Bei starkem Moos optional ein zweites Mal</li>
<li><strong>Mähen:</strong> Weiterhin regelmäßig auf 4-5 cm</li>
</ul>

<h3>Oktober: Wintervorbereitung</h3>
<ul>
<li><strong>Laub entfernen:</strong> Regelmäßig! Liegengebliebenes Laub fördert Fäulnis und Schneeschimmel</li>
<li><strong>Letzter Schnitt:</strong> Ende Oktober auf ca. 5 cm — nicht zu kurz, nicht zu lang</li>
<li><strong>Mäher warten:</strong> Messer schärfen lassen, einwintern</li>
</ul>

<h3>November: Ruhe</h3>
<ul>
<li><strong>Rasen nicht mehr betreten</strong> bei Frost</li>
<li><strong>Restliches Laub</strong> entfernen</li>
<li><strong>Nicht mehr mähen</strong></li>
</ul>`,
            },
            {
                id: 'winter',
                heading: 'Winter (Dezember – Februar)',
                content: `<p>Der Rasen ruht — und Sie sollten es auch tun:</p>
<ul>
<li><strong>Rasen nicht betreten</strong> bei Frost oder Schnee (Halme brechen!)</li>
<li><strong>Kein Streusalz</strong> auf oder neben Rasenflächen</li>
<li><strong>Schneeschimmel:</strong> Weiße Flecken im Frühjahr? Vertikutieren hilft</li>
<li><strong>Planung:</strong> Jetzt Dünger für die neue Saison bestellen</li>
</ul>
<p><strong>Profi-Tipp:</strong> Nutzen Sie den Winter, um über größere Projekte nachzudenken. Neuen Rasen anlegen? Rollrasen verlegen? Die beste Zeit dafür ist das Frühjahr — also jetzt planen.</p>`,
            },
            {
                id: 'fehler',
                heading: 'Die 5 häufigsten Fehler',
                content: `<p>Diese Fehler sehen wir bei Kunden immer wieder:</p>
<table>
<thead>
<tr><th>Fehler</th><th>Folge</th><th>Lösung</th></tr>
</thead>
<tbody>
<tr><td><strong>Zu kurz mähen</strong></td><td>Rasen vertrocknet, Unkraut breitet sich aus</td><td>Nie kürzer als 3,5 cm, im Sommer 5 cm</td></tr>
<tr><td><strong>Abends wässern</strong></td><td>Pilzkrankheiten durch Feuchtigkeit über Nacht</td><td>Morgens vor 9 Uhr wässern</td></tr>
<tr><td><strong>Zu oft, zu wenig wässern</strong></td><td>Flache Wurzeln, Rasen wird hitzeempfindlich</td><td>2x/Woche durchdringend statt täglich sprenkeln</td></tr>
<tr><td><strong>Zu früh vertikutieren</strong></td><td>Grasnarbe wird zerstört, Moos kommt stärker</td><td>Erst ab 8°C Bodentemperatur (ca. Mitte April)</td></tr>
<tr><td><strong>Nicht düngen</strong></td><td>Rasen wird dünn, blass und von Moos verdrängt</td><td>3x pro Jahr düngen (April, Juni, September)</td></tr>
</tbody>
</table>`,
            },
            {
                id: 'ueberblick',
                heading: 'Der Jahresplan auf einen Blick',
                content: `<table>
<thead>
<tr><th>Monat</th><th>Mähen</th><th>Düngen</th><th>Wässern</th><th>Sonstiges</th></tr>
</thead>
<tbody>
<tr><td><strong>März</strong></td><td>Erster Schnitt (5 cm)</td><td>—</td><td>—</td><td>Laub entfernen</td></tr>
<tr><td><strong>April</strong></td><td>Wöchentlich (4-5 cm)</td><td>1. Düngung</td><td>Bei Bedarf</td><td>Vertikutieren, Nachsaat</td></tr>
<tr><td><strong>Mai</strong></td><td>1-2x/Woche (3,5-4 cm)</td><td>—</td><td>Bei Trockenheit</td><td>Unkraut entfernen</td></tr>
<tr><td><strong>Juni</strong></td><td>1-2x/Woche (4 cm)</td><td>2. Düngung</td><td>2x/Woche</td><td>Kanten schneiden</td></tr>
<tr><td><strong>Juli–Aug</strong></td><td>Wöchentlich (5 cm!)</td><td>—</td><td>2x/Woche morgens</td><td>Höher mähen bei Hitze</td></tr>
<tr><td><strong>Sep</strong></td><td>Wöchentlich (4-5 cm)</td><td>3. Düngung (Herbst)</td><td>Bei Bedarf</td><td>Nachsaat möglich</td></tr>
<tr><td><strong>Okt</strong></td><td>Letzter Schnitt (5 cm)</td><td>—</td><td>—</td><td>Laub entfernen</td></tr>
<tr><td><strong>Nov–Feb</strong></td><td>—</td><td>—</td><td>—</td><td>Rasen ruhen lassen</td></tr>
</tbody>
</table>
<div class="fazit-box">
<p><strong>Merken Sie sich drei Termine:</strong> April (Vertikutieren + 1. Düngung), Juni (2. Düngung) und September (Herbstdüngung). Wenn Sie nur diese drei Dinge richtig machen, haben Sie bereits 80% eines perfekten Rasens.</p>
</div>`,
            },
        ],
        faqs: [
            {
                q: 'Wann sollte man Rasen das erste Mal im Jahr düngen?',
                a: 'Die erste Düngung erfolgt idealerweise Mitte bis Ende April, wenn der Boden mindestens 8°C warm ist und der Rasen aktiv wächst. Verwenden Sie einen stickstoffbetonten Langzeitdünger (NPK 20-5-10) mit ca. 30g pro Quadratmeter.',
            },
            {
                q: 'Wie oft sollte man den Rasen mähen?',
                a: 'Im Frühling und Herbst einmal wöchentlich, im Sommer bei starkem Wachstum 1-2 mal pro Woche. Die Faustregel: Nie mehr als ein Drittel der Halmlänge auf einmal abschneiden.',
            },
            {
                q: 'Wann ist die beste Zeit zum Vertikutieren?',
                a: 'Die beste Zeit zum Vertikutieren ist Mitte April bis Mitte Mai, wenn der Boden mindestens 8°C warm ist und der Rasen aktiv wächst. Optional können Sie im September ein zweites Mal vertikutieren, wenn starker Moosbefall vorliegt.',
            },
            {
                q: 'Wie lange muss man nach dem Vertikutieren warten?',
                a: 'Nach dem Vertikutieren sollten Sie sofort nachsäen (bei kahlen Stellen), düngen und wässern. Der Rasen erholt sich normalerweise innerhalb von 3-4 Wochen vollständig.',
            },
            {
                q: 'Soll man im Sommer den Rasen wässern?',
                a: 'Ja, aber richtig: Lieber 2x pro Woche gründlich wässern (15-20 Liter/m²) als täglich oberflächlich sprenkeln. Immer morgens vor 9 Uhr gießen, nie abends. Bei extremer Hitze die Schnitthöhe auf 5 cm anheben.',
            },
        ],
        relatedServices: ['gartenpflege', 'rollrasen', 'garten-und-landschaftsbau'],
    },

    // ========================================================================
    // ARTIKEL 3: Hecke schneiden — Wann erlaubt?
    // ========================================================================
    {
        slug: 'hecke-schneiden-wann-erlaubt',
        title: 'Hecke schneiden: Wann erlaubt? Zeiträume & Bußgelder',
        metaTitle: 'Hecke schneiden: Wann erlaubt? Gesetz, Zeiträume & Bußgelder 2026',
        metaDescription: 'Wann darf man Hecken schneiden? ✓ Gesetzliche Regelung ✓ Schonzeit 1. März–30. September ✓ Was ist erlaubt, was nicht ✓ Bußgelder bis 50.000€.',
        excerpt: 'Das Bundesnaturschutzgesetz regelt genau, wann Sie Hecken schneiden dürfen — und wann nicht. Wir erklären die Rechtslage verständlich und praxisnah.',
        category: 'Recht & Wissen',
        publishDate: '2026-04-24',
        readingTime: 7,
        heroImage: '/images/blog-hecke-schneiden.png',
        keywords: [
            'Hecke schneiden wann erlaubt', 'Hecke schneiden Gesetz', 'Heckenschnitt Zeitraum',
            'Hecke schneiden verboten', 'Hecke schneiden Bußgeld', 'Heckenschnitt Schonzeit',
            'Hecke radikalschnitt wann', 'Formschnitt Hecke erlaubt',
        ],
        tableOfContents: [
            { id: 'gesetz', title: 'Das sagt das Gesetz' },
            { id: 'schonzeit', title: 'Die Schonzeit: 1. März bis 30. September' },
            { id: 'erlaubt', title: 'Was ist während der Schonzeit erlaubt?' },
            { id: 'verboten', title: 'Was ist verboten?' },
            { id: 'bussgelder', title: 'Bußgelder bei Verstößen' },
            { id: 'beste-zeit', title: 'Die beste Zeit für den Heckenschnitt' },
            { id: 'tipps', title: 'Praxis-Tipps vom Profi' },
        ],
        content: [
            {
                id: 'gesetz',
                heading: 'Das sagt das Gesetz',
                content: `<p>Die Grundlage ist <strong>§ 39 Absatz 5 des Bundesnaturschutzgesetzes (BNatSchG)</strong>. Dieses Gesetz gilt bundesweit und schützt brütende Vögel und andere Tiere, die in Hecken leben.</p>
<p>Die zentrale Regelung:</p>
<div class="fazit-box">
<p><strong>Vom 1. März bis zum 30. September</strong> ist es verboten, Hecken, lebende Zäune, Gebüsche und andere Gehölze abzuschneiden, auf den Stock zu setzen oder zu beseitigen.</p>
</div>
<p>Klingt eindeutig — aber es gibt wichtige Ausnahmen und Feinheiten, die viele Gartenbesitzer nicht kennen.</p>`,
            },
            {
                id: 'schonzeit',
                heading: 'Die Schonzeit: 1. März bis 30. September',
                content: `<p>Die Schonzeit wurde eingeführt, um <strong>brütende Vögel zu schützen</strong>. Viele heimische Vogelarten wie Amseln, Rotkehlchen und Zaunkönige nisten in Hecken. Ein radikaler Rückschnitt während der Brutzeit kann komplette Gelege zerstören.</p>
<table>
<thead>
<tr><th>Zeitraum</th><th>Radikalschnitt</th><th>Formschnitt</th></tr>
</thead>
<tbody>
<tr><td><strong>1. Oktober – 28. Februar</strong></td><td>Erlaubt</td><td>Erlaubt</td></tr>
<tr><td><strong>1. März – 30. September</strong></td><td>Verboten</td><td>Erlaubt (schonend)</td></tr>
</tbody>
</table>
<p><strong>Wichtig:</strong> Die Schonzeit gilt in allen Bundesländern gleich. Einzelne Kommunen können aber zusätzliche Auflagen haben — fragen Sie im Zweifel bei Ihrer Gemeinde nach.</p>`,
            },
            {
                id: 'erlaubt',
                heading: 'Was ist während der Schonzeit erlaubt?',
                content: `<p>Das Gesetz verbietet <strong>nicht jede Art von Schnitt</strong>. Erlaubt sind sogenannte „schonende Form- und Pflegeschnitte":</p>
<ul>
<li><strong>Formschnitt:</strong> Den jährlichen Neuzuwachs zurückschneiden, um die Form zu erhalten</li>
<li><strong>Pflegeschnitt:</strong> Einzelne zu lang gewachsene Triebe einkürzen</li>
<li><strong>Verkehrssicherung:</strong> Äste die über den Gehweg oder die Straße ragen, dürfen zurückgeschnitten werden</li>
<li><strong>Gesundheitsschnitt:</strong> Kranke oder absterbende Triebe entfernen</li>
</ul>
<p><strong>Faustregel:</strong> Alles, was den Grundwuchs der Hecke nicht verändert, ist in der Regel erlaubt. Sie schneiden nur das, was seit dem letzten Herbst neu gewachsen ist.</p>
<p><strong>Aber Achtung:</strong> Vor jedem Schnitt — auch einem Formschnitt — müssen Sie prüfen, ob Vögel in der Hecke brüten. Wenn ja, dürfen Sie auch keinen Formschnitt durchführen, bis die Brut beendet ist.</p>`,
            },
            {
                id: 'verboten',
                heading: 'Was ist verboten?',
                content: `<p>Während der Schonzeit sind folgende Maßnahmen <strong>streng verboten</strong>:</p>
<ul>
<li><strong>Radikalschnitt / „auf den Stock setzen":</strong> Die Hecke auf Kniehöhe oder tiefer zurückschneiden</li>
<li><strong>Roden:</strong> Die Hecke komplett entfernen</li>
<li><strong>Maschineller Schnitt</strong> in die tragende Struktur der Hecke</li>
<li><strong>Großflächiges Entfernen</strong> von Gehölzen oder Heckenabschnitten</li>
</ul>
<p>Auch außerhalb der Schonzeit gilt: Wenn Sie wissen, dass Vögel in der Hecke brüten, dürfen Sie auch zwischen Oktober und Februar nicht radikal schneiden. Der Vogelschutz gilt <strong>ganzjährig</strong>.</p>`,
            },
            {
                id: 'bussgelder',
                heading: 'Bußgelder bei Verstößen',
                content: `<p>Verstöße gegen das Bundesnaturschutzgesetz sind <strong>kein Kavaliersdelikt</strong>. Die Bußgelder variieren je nach Bundesland:</p>
<table>
<thead>
<tr><th>Bundesland</th><th>Bußgeld bis</th></tr>
</thead>
<tbody>
<tr><td><strong>Niedersachsen</strong></td><td>bis 50.000 €</td></tr>
<tr><td><strong>Hamburg</strong></td><td>bis 50.000 €</td></tr>
<tr><td><strong>Schleswig-Holstein</strong></td><td>bis 50.000 €</td></tr>
<tr><td><strong>Bremen</strong></td><td>bis 50.000 €</td></tr>
<tr><td><strong>Bundesweit (Durchschnitt)</strong></td><td>10.000 – 50.000 €</td></tr>
</tbody>
</table>
<p>In der Praxis liegen die Bußgelder bei privaten Gartenbesitzern meist zwischen <strong>500 € und 10.000 €</strong>, abhängig von der Schwere des Verstoßes. Bei gewerblichen Verstößen oder Zerstörung von Vogelnestern kann es deutlich teurer werden.</p>`,
            },
            {
                id: 'beste-zeit',
                heading: 'Die beste Zeit für den Heckenschnitt',
                content: `<p>Aus professioneller Sicht empfehlen wir <strong>zwei Schnitttermine pro Jahr</strong>:</p>
<table>
<thead>
<tr><th>Zeitpunkt</th><th>Art</th><th>Warum</th></tr>
</thead>
<tbody>
<tr><td><strong>Ende Februar</strong></td><td>Radikalschnitt / starker Rückschnitt</td><td>Letzter Termin vor der Schonzeit. Die Hecke treibt im Frühling kräftig neu aus.</td></tr>
<tr><td><strong>Ende Juni</strong></td><td>Formschnitt (schonend!)</td><td>Der Frühjahrsaustrieb ist abgeschlossen. Leichter Schnitt für saubere Form bis Herbst.</td></tr>
</tbody>
</table>
<div class="fazit-box">
<p><strong>Unser Profi-Tipp:</strong> Den Hauptschnitt immer Ende Februar machen, wenn es frostfrei ist. Dann hat die Hecke die gesamte Wachstumsphase, um dicht und voll wieder auszutreiben. Der sommerliche Formschnitt hält sie dann bis zum nächsten Frühjahr in Form.</p>
</div>`,
            },
            {
                id: 'tipps',
                heading: 'Praxis-Tipps vom Profi',
                content: `<ul>
<li><strong>Trapezform schneiden:</strong> Unten breiter, oben schmaler — so bekommen auch die unteren Zweige genug Licht und die Hecke wird nicht unten kahl</li>
<li><strong>Scharfe Werkzeuge:</strong> Stumpfe Klingen quetschen die Äste statt sie sauber zu schneiden. Das begünstigt Krankheiten</li>
<li><strong>Nicht bei Sonne schneiden:</strong> Frisch geschnittene Triebe verbrennen bei direkter Sonneneinstrahlung. Bewölkte Tage oder Abendstunden sind ideal</li>
<li><strong>Laubhecken vs. Nadelhecken:</strong> Laubhecken (Liguster, Buche, Hainbuche) treiben nach Radikalschnitt gut nach. Nadelhecken (Thuja, Eibe) treiben aus altem Holz nicht nach — hier nie zu stark schneiden!</li>
<li><strong>Schnittgut entsorgen:</strong> Nicht auf der Hecke liegen lassen, das fördert Pilzbefall. Kompostieren oder über die Grünabfuhr entsorgen</li>
</ul>`,
            },
        ],
        faqs: [
            {
                q: 'Darf ich im Sommer meine Hecke schneiden?',
                a: 'Ja, aber nur als schonenden Formschnitt. Sie dürfen den Jahreszuwachs einkürzen und die Form erhalten. Ein Radikalschnitt ist vom 1. März bis 30. September verboten. Prüfen Sie vor jedem Schnitt, ob Vögel in der Hecke brüten.',
            },
            {
                q: 'Was passiert, wenn ich gegen die Schonzeit verstoße?',
                a: 'Verstöße gegen das Bundesnaturschutzgesetz können mit Bußgeldern von bis zu 50.000 Euro geahndet werden. In der Praxis liegen die Strafen für Privatpersonen zwischen 500 und 10.000 Euro, je nach Schwere des Verstoßes.',
            },
            {
                q: 'Wie weit darf ich meine Hecke im Sommer zurückschneiden?',
                a: 'Im Sommer dürfen Sie nur den Jahreszuwachs entfernen — also die grünen, weichen Triebe des aktuellen Jahres. Ins alte Holz oder in die tragende Struktur dürfen Sie während der Schonzeit nicht schneiden.',
            },
            {
                q: 'Wann ist der beste Zeitpunkt zum Hecke schneiden?',
                a: 'Der beste Zeitpunkt für einen starken Rückschnitt ist Ende Februar, kurz vor Beginn der Schonzeit. Ein zweiter, leichter Formschnitt ist Ende Juni sinnvoll. So bleibt die Hecke ganzjährig in Form.',
            },
            {
                q: 'Gilt das Verbot auch für den eigenen Garten?',
                a: 'Ja, das Bundesnaturschutzgesetz gilt auch im eigenen Garten. Es gibt keine Ausnahme für Privatgrundstücke. Auch die Hecke an der Grundstücksgrenze unterliegt der Schonzeit.',
            },
        ],
        relatedServices: ['heckenschnitt', 'gartenpflege', 'baumpflege'],
    },

    // ========================================================================
    // ARTIKEL 4: WPC oder Holz? Welche Terrasse hält wirklich länger
    // ========================================================================
    {
        slug: 'wpc-oder-holz-terrasse',
        title: 'WPC oder Holz? Welche Terrasse hält wirklich länger',
        metaTitle: 'WPC oder Holz Terrasse? Ehrlicher Vergleich: Kosten, Haltbarkeit & Pflege 2026',
        metaDescription: 'WPC oder Holz für die Terrasse? ✓ Haltbarkeit ✓ Pflege ✓ Kosten ✓ Optik — der ehrliche Vergleich vom Profi. Was sich wirklich lohnt.',
        excerpt: 'WPC-Dielen oder echtes Holz? Wir vergleichen beide Materialien ehrlich — Kosten, Haltbarkeit, Pflege und Optik aus 15 Jahren Erfahrung im Terrassenbau.',
        category: 'Vergleich',
        publishDate: '2026-04-24',
        readingTime: 9,
        heroImage: '/images/blog-wpc-holz-terrasse.png',
        keywords: [
            'WPC oder Holz Terrasse', 'WPC Vorteile Nachteile', 'Holzterrasse oder WPC',
            'WPC Dielen Erfahrungen', 'Terrassendielen Vergleich', 'WPC Terrasse Kosten',
            'Holzterrasse Kosten', 'WPC Haltbarkeit',
        ],
        tableOfContents: [
            { id: 'was-ist-wpc', title: 'Was ist WPC überhaupt?' },
            { id: 'kosten', title: 'Kosten im Vergleich' },
            { id: 'haltbarkeit', title: 'Haltbarkeit und Lebensdauer' },
            { id: 'pflege', title: 'Pflegeaufwand' },
            { id: 'optik', title: 'Optik und Haptik' },
            { id: 'nachteile', title: 'Die Nachteile, über die niemand spricht' },
            { id: 'fazit', title: 'Unser Fazit: Was empfehlen wir?' },
        ],
        content: [
            {
                id: 'was-ist-wpc',
                heading: 'Was ist WPC überhaupt?',
                content: `<p><strong>WPC steht für Wood-Plastic-Composite</strong> — ein Verbundwerkstoff aus Holzfasern (ca. 60%) und Kunststoff (ca. 40%). Die Dielen werden industriell gefertigt und imitieren die Optik von Holz, ohne dessen „Nachteile".</p>
<div class="comparison-box">
<div class="comparison-item">
<h4>WPC-Dielen</h4>
<p>Verbundwerkstoff aus Holzfasern und Kunststoff. Gleichmäßige Farbe, splitterfrei, pflegeleicht. Fühlt sich allerdings eher wie Kunststoff an als wie echtes Holz.</p>
</div>
<div class="comparison-item">
<h4>Echtholz-Dielen</h4>
<p>Massives Holz wie Douglasie, Lärche, Bangkirai oder Thermoeiche. Natürliche Maserung, warme Haptik, lebendige Optik. Braucht aber regelmäßige Pflege.</p>
</div>
</div>`,
            },
            {
                id: 'kosten',
                heading: 'Kosten im Vergleich',
                content: `<table>
<thead>
<tr><th>Kostenposition</th><th>WPC</th><th>Holz (Douglasie)</th><th>Holz (Bangkirai)</th></tr>
</thead>
<tbody>
<tr><td><strong>Material pro m²</strong></td><td>40 – 80 €</td><td>25 – 45 €</td><td>50 – 90 €</td></tr>
<tr><td><strong>Unterkonstruktion</strong></td><td>15 – 25 €/m²</td><td>15 – 25 €/m²</td><td>15 – 25 €/m²</td></tr>
<tr><td><strong>Verlegung (Profi)</strong></td><td>40 – 60 €/m²</td><td>35 – 55 €/m²</td><td>40 – 60 €/m²</td></tr>
<tr><td><strong>Gesamt pro m²</strong></td><td><strong>95 – 165 €</strong></td><td><strong>75 – 125 €</strong></td><td><strong>105 – 175 €</strong></td></tr>
<tr><td><strong>20 m² Terrasse</strong></td><td><strong>1.900 – 3.300 €</strong></td><td><strong>1.500 – 2.500 €</strong></td><td><strong>2.100 – 3.500 €</strong></td></tr>
<tr><td><strong>Pflege über 15 Jahre</strong></td><td>ca. 0 €</td><td>ca. 1.500 €</td><td>ca. 1.000 €</td></tr>
</tbody>
</table>
<p><strong>Auf den ersten Blick</strong> ist WPC teurer als heimische Hölzer wie Douglasie. Aber: Rechnet man die Pflegekosten über 15 Jahre dazu, gleicht sich der Preis an — oder WPC wird sogar günstiger.</p>`,
            },
            {
                id: 'haltbarkeit',
                heading: 'Haltbarkeit und Lebensdauer',
                content: `<table>
<thead>
<tr><th>Eigenschaft</th><th>WPC</th><th>Holz (unbehandelt)</th><th>Holz (gepflegt)</th></tr>
</thead>
<tbody>
<tr><td><strong>Lebensdauer</strong></td><td>20-30 Jahre</td><td>8-12 Jahre</td><td>15-25 Jahre</td></tr>
<tr><td><strong>Splitter</strong></td><td>Keine</td><td>Nach 2-3 Jahren möglich</td><td>Nach 2-3 Jahren möglich</td></tr>
<tr><td><strong>Vergrauen</strong></td><td>Leichtes Ausbleichen</td><td>Starkes Vergrauen</td><td>Nur ohne Pflege</td></tr>
<tr><td><strong>Fäulnis</strong></td><td>Keine</td><td>Anfällig</td><td>Geschützt durch Öl</td></tr>
<tr><td><strong>Insektenbefall</strong></td><td>Kein Befall</td><td>Möglich</td><td>Seltener</td></tr>
</tbody>
</table>
<p><strong>Ehrliche Einschätzung:</strong> WPC hält theoretisch länger. Aber eine gut gepflegte Holzterrasse aus Bangkirai oder Thermoeiche erreicht problemlos 20+ Jahre. Der Unterschied liegt weniger im Material, sondern in der Pflege.</p>`,
            },
            {
                id: 'pflege',
                heading: 'Pflegeaufwand',
                content: `<h3>WPC: Fast wartungsfrei</h3>
<ul>
<li>1-2x pro Jahr mit Seifenwasser oder Hochdruckreiniger (vorsichtig!) reinigen</li>
<li>Kein Ölen, kein Schleifen, kein Streichen</li>
<li>Flecken (Rotwein, Grillsoße) sofort entfernen — sie können dauerhaft bleiben</li>
<li>Zeitaufwand pro Jahr: ca. 1-2 Stunden</li>
</ul>

<h3>Echtholz: Regelmäßige Zuwendung</h3>
<ul>
<li>1-2x pro Jahr ölen (Terrassen-Öl oder Hartholz-Öl)</li>
<li>Vorher: Reinigen, trocknen lassen, ggf. leicht abschleifen</li>
<li>Einmal pro Saison Algen und Grünbelag entfernen</li>
<li>Alle 3-5 Jahre: Gründliches Abschleifen und neu ölen</li>
<li>Zeitaufwand pro Jahr: ca. 4-8 Stunden für 20 m²</li>
</ul>
<p><strong>Die Wahrheit:</strong> Viele Kunden kaufen Holz, weil es schöner ist — und pflegen es dann nicht. Nach 5 Jahren sieht die Terrasse grau, rissig und splittrig aus. Wenn Sie ehrlich wissen, dass Sie keine Lust auf Pflege haben, ist WPC die bessere Wahl.</p>`,
            },
            {
                id: 'optik',
                heading: 'Optik und Haptik',
                content: `<p>Hier wird es subjektiv — aber aus unserer Erfahrung mit hunderten Kunden:</p>
<p><strong>Echtholz gewinnt bei der Optik.</strong> Keine WPC-Diele der Welt fühlt sich an wie eine geölte Bangkirai-Diele, die in der Abendsonne warm glänzt. Die natürliche Maserung, die leichte Unregelmäßigkeit, das warme Gefühl unter nackten Füßen — das kann Kunststoff nicht replizieren.</p>
<p><strong>WPC gewinnt bei der Gleichmäßigkeit.</strong> Wenn Sie eine perfekt einheitliche Optik ohne natürliche Variationen wollen, ist WPC besser. Moderne Premium-WPC-Dielen sehen auf den ersten Blick täuschend echt aus — erst beim Anfassen merkt man den Unterschied.</p>
<p><strong>Barfuß-Test:</strong> Holz fühlt sich bei 25°C angenehm warm an. WPC wird in der Sonne deutlich heißer — bei dunklen Farben barfuß kaum noch begehbar. Das ist ein Punkt, den viele Hersteller verschweigen.</p>`,
            },
            {
                id: 'nachteile',
                heading: 'Die Nachteile, über die niemand spricht',
                content: `<h3>WPC — die verschwiegenen Nachteile</h3>
<ul>
<li><strong>Hitze:</strong> Dunkle WPC-Dielen werden in der Sonne extrem heiß (bis 60°C Oberfläche!). Barfuß? Vergessen Sie es</li>
<li><strong>Nachdunkeln / Ausbleichen:</strong> WPC verändert in den ersten 6-12 Monaten die Farbe. Danach stabil, aber anders als beim Kauf</li>
<li><strong>Nicht reparierbar:</strong> Beschädigte Dielen müssen komplett ausgetauscht werden. Bei Holz kann man Kratzer abschleifen</li>
<li><strong>Umwelt:</strong> WPC ist schwer zu recyceln. Echtholz ist vollständig biologisch abbaubar</li>
<li><strong>Kratzer:</strong> Einmal drin, immer sichtbar. Möbel ohne Filzgleiter ruinieren WPC schnell</li>
</ul>

<h3>Echtholz — die verschwiegenen Nachteile</h3>
<ul>
<li><strong>Arbeitsaufwand:</strong> Ölen ist echte Arbeit. Bei 30 m² Terrasse sind das 6-10 Stunden pro Jahr</li>
<li><strong>Splitter:</strong> Ab dem 3. Jahr können Splitter auftreten, besonders bei Nadelholz</li>
<li><strong>Verformung:</strong> Holz arbeitet — Dielen können sich wölben, verdrehen oder Risse bilden</li>
<li><strong>Tropenhölzer:</strong> Bangkirai stammt oft aus nicht nachhaltiger Forstwirtschaft. Achten Sie auf FSC-Zertifizierung</li>
</ul>`,
            },
            {
                id: 'fazit',
                heading: 'Unser Fazit: Was empfehlen wir?',
                content: `<div class="fazit-box">
<p><strong>Es gibt keine universelle Antwort.</strong> Beide Materialien haben ihre Berechtigung — es kommt auf Sie an:</p>
</div>
<p><strong>Wählen Sie WPC, wenn:</strong></p>
<ul>
<li>Sie wenig Zeit oder Lust auf Pflege haben</li>
<li>Sie eine pflegeleichte, langlebige Lösung suchen</li>
<li>Gleichmäßige Optik ohne natürliche Maserung Ihnen gefällt</li>
<li>Die Terrasse nicht in der prallen Sonne liegt (Hitze-Problem!)</li>
</ul>
<p><strong>Wählen Sie Echtholz, wenn:</strong></p>
<ul>
<li>Natürliche Optik und warme Haptik für Sie wichtig sind</li>
<li>Sie bereit sind, 1-2x pro Jahr Zeit in die Pflege zu investieren</li>
<li>Sie Wert auf Nachhaltigkeit und Umweltverträglichkeit legen</li>
<li>Die Terrasse in der Sonne liegt (Holz bleibt angenehm kühl)</li>
</ul>
<p><strong>Unser meistverkauftes Setup:</strong> Thermoeiche-Dielen mit Aluminium-Unterkonstruktion. Die Eiche ist dauerhaft haltbar (ohne Tropenholz), die Alu-Unterkonstruktion verrottet nie. Haltbarkeit: 25+ Jahre.</p>`,
            },
        ],
        faqs: [
            {
                q: 'Ist WPC besser als Holz?',
                a: 'Nicht pauschal. WPC ist pflegeleichter und splittert nicht, wird aber in der Sonne sehr heiß und fühlt sich weniger natürlich an. Holz bietet bessere Optik und Haptik, braucht aber regelmäßige Pflege. Die richtige Wahl hängt von Ihren Prioritäten ab.',
            },
            {
                q: 'Wie lange hält eine WPC-Terrasse?',
                a: 'Eine hochwertige WPC-Terrasse hält 20-30 Jahre. Günstige Produkte können jedoch bereits nach 10-15 Jahren ausbleichen oder spröde werden. Achten Sie auf eine Materialstärke von mindestens 20mm und UV-Stabilisatoren.',
            },
            {
                q: 'Wird WPC in der Sonne heiß?',
                a: 'Ja, das ist der größte Nachteil von WPC. Dunkle Dielen können Oberflächentemperaturen von 50-60°C erreichen. Hellere Farben heizen sich weniger auf. Holz bleibt dagegen vergleichsweise kühl.',
            },
            {
                q: 'Welches Holz ist am besten für die Terrasse?',
                a: 'Wir empfehlen Thermoeiche als bestes Preis-Leistungs-Verhältnis: dauerhaft haltbar, schöne Optik, kein Tropenholz. Bangkirai ist ebenfalls sehr langlebig, aber achten Sie auf FSC-Zertifizierung. Douglasie ist die günstigste Option, braucht aber am meisten Pflege.',
            },
            {
                q: 'Was kostet eine Terrasse aus WPC oder Holz?',
                a: 'Komplett verlegt kostet eine WPC-Terrasse ca. 95-165 €/m², eine Holzterrasse aus Douglasie 75-125 €/m² und aus Bangkirai 105-175 €/m². Für eine 20 m² Terrasse liegt der Gesamtpreis zwischen 1.500 und 3.500 Euro.',
            },
        ],
        relatedServices: ['terrassenbau', 'garten-und-landschaftsbau', 'galabau'],
    },

    // ========================================================================
    // ARTIKEL 5: Garten pflegeleicht gestalten (27.04.)
    // ========================================================================
    {
        slug: 'garten-pflegeleicht-gestalten',
        title: 'Garten pflegeleicht gestalten: 12 Ideen die funktionieren',
        metaTitle: 'Garten pflegeleicht gestalten: 12 Ideen für weniger Arbeit 2026',
        metaDescription: 'Pflegeleichter Garten ohne Langeweile? ✓ 12 erprobte Ideen ✓ Richtige Pflanzen ✓ Clevere Planung ✓ Weniger Arbeit, mehr Genuss.',
        excerpt: 'Ein pflegeleichter Garten muss nicht langweilig sein. 12 erprobte Ideen aus der Praxis — von der richtigen Bepflanzung bis zur cleveren Flächengestaltung.',
        category: 'Inspiration',
        publishDate: '2026-04-27',
        readingTime: 11,
        heroImage: '/images/blog-pflegeleichter-garten.png',
        keywords: ['Garten pflegeleicht gestalten', 'pflegeleichter Garten', 'Garten wenig Arbeit', 'Garten anlegen pflegeleicht', 'pflegeleichte Pflanzen', 'Garten modern gestalten'],
        tableOfContents: [
            { id: 'warum', title: 'Warum pflegeleicht nicht langweilig heißt' },
            { id: 'boden', title: 'Bodendecker statt Rasen' },
            { id: 'staudenbeete', title: 'Staudenbeete die sich selbst versorgen' },
            { id: 'mulch', title: 'Mulchen — der unterschätzte Trick' },
            { id: 'graeser', title: 'Ziergräser für das ganze Jahr' },
            { id: 'wege', title: 'Kies- und Schotterwege statt Pflaster' },
            { id: 'hochbeete', title: 'Hochbeete für weniger Rückenschmerzen' },
            { id: 'bewaesserung', title: 'Automatische Bewässerung' },
            { id: 'rasen', title: 'Weniger Rasenfläche, mehr Genuss' },
            { id: 'hecke', title: 'Die richtige Hecke wählen' },
            { id: 'terrasse', title: 'Große Terrasse, kleiner Garten' },
            { id: 'beleuchtung', title: 'Beleuchtung für Atmosphäre' },
            { id: 'fazit', title: 'Das Wichtigste zusammengefasst' },
        ],
        content: [
            {
                id: 'warum',
                heading: 'Warum pflegeleicht nicht langweilig heißt',
                content: `<p>Viele denken bei „pflegeleichtem Garten" an Schotterwüsten und Thujahecken. Das ist nicht nur hässlich — in vielen Gemeinden sind reine Schottergärten mittlerweile sogar <strong>verboten</strong>.</p>
<p>Ein wirklich pflegeleichter Garten ist <strong>smart geplant</strong>: Die richtigen Pflanzen am richtigen Ort, durchdachte Flächen und ein paar clevere Tricks. Das Ergebnis? Ein Garten der gut aussieht und trotzdem nur 2-3 Stunden pro Woche braucht statt 10.</p>`,
            },
            {
                id: 'boden',
                heading: '1. Bodendecker statt Rasen',
                content: `<p>Rasen ist der <strong>pflegeintensivste Teil</strong> jedes Gartens: Mähen, düngen, vertikutieren, wässern. Ersetzen Sie Teile davon durch Bodendecker:</p>
<ul>
<li><strong>Storchschnabel (Geranium):</strong> Blüht wochenlang, unterdrückt Unkraut, winterhart</li>
<li><strong>Waldsteinie:</strong> Immergrüner Teppich, auch im Schatten</li>
<li><strong>Kriechender Thymian:</strong> Duftet herrlich, trittfest, bienenfreundlich</li>
<li><strong>Elfenblume:</strong> Perfekt unter Bäumen und Sträuchern</li>
</ul>
<p><strong>Vorteil:</strong> Einmal gepflanzt, nie mehr mähen. Bodendecker breiten sich aus und unterdrücken Unkraut von allein.</p>`,
            },
            {
                id: 'staudenbeete',
                heading: '2. Staudenbeete die sich selbst versorgen',
                content: `<p>Die Kunst ist die <strong>richtige Kombination</strong>. Setzen Sie auf Stauden die:</p>
<ul>
<li>An Ihrem Standort <strong>natürlich vorkommen</strong> (heimische Arten)</li>
<li><strong>Unterschiedliche Blütezeiten</strong> haben (Frühling bis Herbst)</li>
<li><strong>Den Boden bedecken</strong> und Unkraut verdrängen</li>
</ul>
<p><strong>Unsere Top-5 für Norddeutschland:</strong></p>
<ul>
<li>Lavendel — trockenheitsfest, duftet, bienenfreundlich</li>
<li>Fetthenne (Sedum) — überlebt alles, blüht im Herbst</li>
<li>Frauenmantel — robuster Bodendecker, schönes Blatt</li>
<li>Sonnenhut (Rudbeckia) — blüht den ganzen Sommer</li>
<li>Astilbe — perfekt für schattige Bereiche</li>
</ul>`,
            },
            {
                id: 'mulch',
                heading: '3. Mulchen — der unterschätzte Trick',
                content: `<p>Mulch ist der <strong>einfachste Weg zu weniger Gartenarbeit</strong>. Eine 5-7 cm dicke Schicht Rindenmulch oder Hackschnitzel:</p>
<ul>
<li><strong>Unterdrückt Unkraut:</strong> 80% weniger Jäten</li>
<li><strong>Speichert Feuchtigkeit:</strong> Weniger gießen</li>
<li><strong>Schützt den Boden:</strong> Vor Austrocknung und Erosion</li>
<li><strong>Sieht gepflegt aus:</strong> Sofort ordentliche Optik</li>
</ul>
<p><strong>Wichtig:</strong> Unter dem Mulch kein Vlies verwenden — das zersetzt sich und sieht nach 2 Jahren furchtbar aus. Der Mulch allein reicht als Unkrautsperre.</p>`,
            },
            {
                id: 'graeser',
                heading: '4. Ziergräser für das ganze Jahr',
                content: `<p>Ziergräser sind die <strong>Stars des pflegeleichten Gartens</strong>: Null Pflege, ganzjährig attraktiv, wunderschöne Bewegung im Wind.</p>
<ul>
<li><strong>Lampenputzergras (Pennisetum):</strong> Kompakt, elegante Blütenähren</li>
<li><strong>Chinaschilf (Miscanthus):</strong> Wird bis 2m hoch, perfekter Sichtschutz</li>
<li><strong>Blauschwingel (Festuca):</strong> Kompakte Kugeln, silberblau</li>
<li><strong>Rutenhirse (Panicum):</strong> Herbstfärbung in Orange und Rot</li>
</ul>
<p><strong>Pflege:</strong> Im März einmal bodennah abschneiden. Das war's für das ganze Jahr.</p>`,
            },
            {
                id: 'wege',
                heading: '5. Kies- und Schotterwege statt Pflaster',
                content: `<p>Pflasterflächen brauchen regelmäßig Unkrautentfernung in den Fugen. Wassergebundene Decken oder Kieswege sind oft die <strong>bessere Wahl</strong> für Nebenwege:</p>
<ul>
<li><strong>Günstiger</strong> als Pflaster</li>
<li><strong>Versickerungsfähig</strong> — kein Regenwasser-Problem</li>
<li><strong>Natürliche Optik</strong> die zum Garten passt</li>
</ul>
<p><strong>Tipp:</strong> Hauptwege und die Terrasse sollten dennoch gepflastert sein — das ist komfortabler und langlebiger. Kies eignet sich für Nebenbereiche und Zuwege.</p>`,
            },
            {
                id: 'hochbeete',
                heading: '6. Hochbeete für weniger Rückenschmerzen',
                content: `<p>Hochbeete sind nicht nur rückenfreundlich — sie sind auch <strong>effizienter</strong>:</p>
<ul>
<li><strong>Weniger Unkraut:</strong> Durch die Höhe kommt weniger Samenflug an</li>
<li><strong>Besseres Wachstum:</strong> Wärmerer Boden, mehr Ertrag</li>
<li><strong>Klare Struktur:</strong> Der Garten wirkt ordentlicher</li>
<li><strong>Ergonomisch:</strong> Kein Bücken mehr</li>
</ul>
<p>Material-Empfehlung: Cortenstahl oder kesseldruckimprägniertes Holz. Beides hält 15+ Jahre ohne Pflege.</p>`,
            },
            {
                id: 'bewaesserung',
                heading: '7. Automatische Bewässerung',
                content: `<p>Eine <strong>Tropfbewässerung</strong> oder ein Sprinkler-System mit Zeitschaltuhr spart enorm Zeit:</p>
<ul>
<li>Einmal installiert, läuft alles automatisch</li>
<li><strong>30-50% weniger Wasserverbrauch</strong> als Gießkanne oder Schlauch</li>
<li>Pflanzen werden gleichmäßig versorgt</li>
<li>Kosten: Ab ca. 200€ für einen Basis-Set (Tropfschlauch + Timer)</li>
</ul>
<p><strong>Profi-Tipp:</strong> Morgens zwischen 5 und 7 Uhr bewässern — minimale Verdunstung, kein Pilzrisiko.</p>`,
            },
            {
                id: 'rasen',
                heading: '8. Weniger Rasenfläche, mehr Genuss',
                content: `<p>Reduzieren Sie die Rasenfläche auf das, was Sie <strong>wirklich nutzen</strong>. Der Rest wird zu:</p>
<ul>
<li><strong>Staudenbeeten</strong> mit Bodendeckern (siehe oben)</li>
<li><strong>Kiesflächen</strong> mit einzelnen Solitärpflanzen</li>
<li><strong>Wildblumenwiesen</strong> — 2x pro Jahr mähen reicht!</li>
<li><strong>Terrasse vergrößern</strong> — kein Mähen, mehr Sitzfläche</li>
</ul>`,
            },
            {
                id: 'hecke',
                heading: '9. Die richtige Hecke wählen',
                content: `<p>Nicht jede Hecke braucht gleich viel Pflege:</p>
<table>
<thead><tr><th>Heckenart</th><th>Schnitt pro Jahr</th><th>Wachstum</th></tr></thead>
<tbody>
<tr><td><strong>Eibe</strong></td><td>1x</td><td>Langsam — ideal!</td></tr>
<tr><td><strong>Hainbuche</strong></td><td>1-2x</td><td>Mittel</td></tr>
<tr><td><strong>Liguster</strong></td><td>2-3x</td><td>Schnell — viel Arbeit</td></tr>
<tr><td><strong>Thuja</strong></td><td>1x</td><td>Langsam, aber empfindlich</td></tr>
</tbody>
</table>
<p><strong>Unser Favorit:</strong> Hainbuche. Robust, dicht, laubabwerfend (lässt im Winter Licht durch), braucht nur 1-2 Schnitte pro Jahr.</p>`,
            },
            {
                id: 'terrasse',
                heading: '10. Große Terrasse, kleiner Garten',
                content: `<p>Je größer die Terrasse, desto kleiner die Fläche die gepflegt werden muss. Eine gut geplante Terrasse mit:</p>
<ul>
<li><strong>WPC-Dielen</strong> (null Pflege) oder <strong>großformatigen Platten</strong> (wenig Fugen = wenig Unkraut)</li>
<li><strong>Eingebauten Pflanzinseln</strong> für Struktur</li>
<li><strong>Überdachung</strong> für ganzjährige Nutzung</li>
</ul>
<p>So haben Sie einen Outdoor-Wohnraum statt einer Baustelle.</p>`,
            },
            {
                id: 'beleuchtung',
                heading: '11. Beleuchtung für Atmosphäre',
                content: `<p>Gartenbeleuchtung ist kein Pflegeaufwand — aber sie <strong>verdoppelt den Genuss</strong>:</p>
<ul>
<li><strong>Solar-Wegeleuchten:</strong> Null Stromkosten, null Verkabelung</li>
<li><strong>LED-Spots</strong> an Bäumen und Sträuchern für dramatische Effekte</li>
<li><strong>Lichterketten</strong> auf der Terrasse für gemütliche Abende</li>
</ul>
<p>Einmal installiert, keine Pflege nötig. Aber der Garten sieht abends spektakulär aus.</p>`,
            },
            {
                id: 'fazit',
                heading: '12. Das Wichtigste zusammengefasst',
                content: `<div class="fazit-box">
<p><strong>Ein pflegeleichter Garten braucht keine Kompromisse bei der Optik.</strong> Die drei wichtigsten Regeln:</p>
</div>
<ul>
<li><strong>Richtige Pflanzen:</strong> Heimische Stauden, Bodendecker und Ziergräser statt exotischer Problemfälle</li>
<li><strong>Clevere Flächen:</strong> Weniger Rasen, mehr Terrasse, Mulch auf allen Beeten</li>
<li><strong>Einmal investieren:</strong> Automatische Bewässerung und gute Bodenvorbereitung sparen jahrelang Arbeit</li>
</ul>
<p>Wir planen und gestalten pflegeleichte Gärten in Lüneburg und Umgebung — von der Beratung bis zur fertigen Bepflanzung.</p>`,
            },
        ],
        faqs: [
            { q: 'Was kostet ein pflegeleichter Garten?', a: 'Die Kosten hängen stark von der Größe und den gewünschten Elementen ab. Grundsätzlich ist ein pflegeleichter Garten in der Anlage nicht teurer als ein herkömmlicher — er spart aber langfristig Zeit und Pflegekosten. Lassen Sie sich individuell beraten.' },
            { q: 'Welche Pflanzen sind am pflegeleichtesten?', a: 'Bodendecker wie Storchschnabel und Waldsteinie, Ziergräser wie Lampenputzergras und Chinaschilf, sowie robuste Stauden wie Lavendel, Fetthenne und Sonnenhut. All diese Pflanzen brauchen nach dem Einwachsen kaum noch Pflege.' },
            { q: 'Ist ein Schottergarten pflegeleicht?', a: 'Nein — Schottergärten sind sogar mehr Arbeit als gedacht. Unkraut wächst trotzdem durch, Laub sammelt sich zwischen den Steinen, und nach einigen Jahren sieht es ungepflegt aus. In vielen Gemeinden sind reine Schottergärten zudem verboten.' },
            { q: 'Wie kann ich meinen bestehenden Garten pflegeleichter machen?', a: 'Drei schnelle Maßnahmen: 1. Alle Beete mit 5-7cm Rindenmulch abdecken. 2. Rasenfläche reduzieren und durch Bodendecker ersetzen. 3. Tropfbewässerung mit Zeitschaltuhr installieren. Damit sparen Sie sofort 50% der Gartenarbeit.' },
        ],
        relatedServices: ['gartenpflege', 'garten-und-landschaftsbau', 'pflasterarbeiten'],
    },

    // ========================================================================
    // ARTIKEL 6: Rasen vertikutieren (30.04.)
    // ========================================================================
    {
        slug: 'rasen-vertikutieren-anleitung',
        title: 'Rasen vertikutieren: Wann, wie & die häufigsten Fehler',
        metaTitle: 'Rasen vertikutieren: Anleitung, Zeitpunkt & häufige Fehler 2026',
        metaDescription: 'Rasen vertikutieren richtig gemacht. ✓ Bester Zeitpunkt ✓ Schritt-für-Schritt ✓ 5 Fehler vermeiden ✓ Profi-Tipps für dichten, gesunden Rasen.',
        excerpt: 'Vertikutieren ist die wichtigste Maßnahme gegen Moos und Rasenfilz. Aber falsch gemacht, richtet es mehr Schaden an als es nützt.',
        category: 'Ratgeber',
        publishDate: '2026-04-30',
        readingTime: 8,
        heroImage: '/images/blog-vertikutieren.png',
        keywords: ['Rasen vertikutieren', 'Rasen vertikutieren wann', 'Vertikutieren Anleitung', 'Rasen Moos entfernen', 'Vertikutieren Fehler', 'Rasen vertikutieren Frühling'],
        tableOfContents: [
            { id: 'was', title: 'Was ist Vertikutieren?' },
            { id: 'wann', title: 'Wann vertikutieren?' },
            { id: 'anleitung', title: 'Schritt-für-Schritt Anleitung' },
            { id: 'fehler', title: 'Die 5 häufigsten Fehler' },
            { id: 'nachher', title: 'Was kommt nach dem Vertikutieren?' },
            { id: 'profi', title: 'Wann lohnt sich ein Profi?' },
        ],
        content: [
            {
                id: 'was',
                heading: 'Was ist Vertikutieren?',
                content: `<p>Beim Vertikutieren ritzen rotierende Messer die <strong>Grasnarbe 2-3mm tief</strong> an und entfernen dabei:</p>
<ul>
<li><strong>Rasenfilz:</strong> Abgestorbene Grashalme die sich wie ein Teppich auf dem Boden ansammeln</li>
<li><strong>Moos:</strong> Verdrängt die Gräser und zeigt oft verdichteten Boden an</li>
<li><strong>Flache Unkrautwurzeln:</strong> Werden mit herausgerissen</li>
</ul>
<p>Ohne Vertikutieren erstickt der Rasen langfristig unter seiner eigenen Filzschicht. Wasser und Nährstoffe gelangen nicht mehr an die Wurzeln.</p>`,
            },
            {
                id: 'wann',
                heading: 'Wann vertikutieren?',
                content: `<table>
<thead><tr><th>Zeitpunkt</th><th>Geeignet?</th><th>Warum</th></tr></thead>
<tbody>
<tr><td><strong>Mitte April – Mitte Mai</strong></td><td>Ideal</td><td>Boden ab 8°C, Rasen wächst aktiv und regeneriert schnell</td></tr>
<tr><td><strong>September</strong></td><td>Gut</td><td>Zweiter Termin bei starkem Moosbefall</td></tr>
<tr><td><strong>Sommer (Juni–August)</strong></td><td>Nein</td><td>Hitze + Trockenheit — Rasen erholt sich nicht</td></tr>
<tr><td><strong>Winter (Nov–März)</strong></td><td>Nein</td><td>Rasen wächst nicht, Schäden bleiben</td></tr>
</tbody>
</table>
<p><strong>Faustregel:</strong> Wenn der Rasen im Frühling anfängt sichtbar zu wachsen und Sie schon 2-3 mal gemäht haben — dann ist der richtige Zeitpunkt.</p>`,
            },
            {
                id: 'anleitung',
                heading: 'Schritt-für-Schritt Anleitung',
                content: `<p><strong>1. Rasen mähen</strong></p>
<p>Mähen Sie den Rasen auf ca. 3 cm — kürzer als normal. So kommt der Vertikutierer besser an den Filz.</p>
<p><strong>2. Vertikutierer einstellen</strong></p>
<p>Die Messer dürfen maximal <strong>2-3mm in den Boden</strong> eindringen. Tiefer = Wurzelschäden. Testen Sie die Einstellung auf einem kleinen Stück.</p>
<p><strong>3. Systematisch arbeiten</strong></p>
<ul>
<li>In <strong>Längs-Bahnen</strong> über die Fläche fahren</li>
<li>Bei starkem Moosbefall: Danach noch einmal <strong>quer</strong> (Kreuzmuster)</li>
<li><strong>Zügig gehen</strong> — nicht langsam, sonst wird zu viel Material rausgerissen</li>
<li>Überlappungen vermeiden</li>
</ul>
<p><strong>4. Material aufsammeln</strong></p>
<p>Den herausgerissenen Filz und das Moos gründlich abharken oder mit dem Rasenmäher (ohne Schnittgutbehälter) aufnehmen. Nicht liegen lassen!</p>`,
            },
            {
                id: 'fehler',
                heading: 'Die 5 häufigsten Fehler',
                content: `<table>
<thead><tr><th>Fehler</th><th>Folge</th><th>Richtig</th></tr></thead>
<tbody>
<tr><td><strong>Zu tief vertikutieren</strong></td><td>Wurzeln beschädigt, kahle Stellen</td><td>Max. 2-3mm Tiefe</td></tr>
<tr><td><strong>Zu früh im Jahr</strong></td><td>Rasen wächst noch nicht, erholt sich nicht</td><td>Ab Mitte April, Boden min. 8°C</td></tr>
<tr><td><strong>Bei Nässe</strong></td><td>Grasnarbe wird herausgerissen statt angeritzt</td><td>Nur bei trockenem Boden</td></tr>
<tr><td><strong>Danach nicht düngen</strong></td><td>Lücken schließen sich nicht, Unkraut kommt</td><td>Sofort nach dem Vertikutieren düngen</td></tr>
<tr><td><strong>Zu langsam fahren</strong></td><td>Messer reißen zu viel Gras heraus</td><td>Zügiges, gleichmäßiges Tempo</td></tr>
</tbody>
</table>`,
            },
            {
                id: 'nachher',
                heading: 'Was kommt nach dem Vertikutieren?',
                content: `<p>Direkt nach dem Vertikutieren sollten Sie:</p>
<ul>
<li><strong>Düngen:</strong> Langzeitdünger mit hohem Stickstoffanteil ausbringen</li>
<li><strong>Nachsäen:</strong> Kahle Stellen mit Rasensamen auffüllen. Samen leicht einharken und feucht halten</li>
<li><strong>Sanden:</strong> Bei verdichtetem Boden (Lehm) eine dünne Schicht Sand aufbringen — verbessert die Drainage dauerhaft</li>
<li><strong>Wässern:</strong> Die nächsten 2-3 Wochen gleichmäßig feucht halten, besonders für die Nachsaat</li>
</ul>
<p>Nach 3-4 Wochen sollte der Rasen dichter und sattgrüner sein als vorher.</p>`,
            },
            {
                id: 'profi',
                heading: 'Wann lohnt sich ein Profi?',
                content: `<p>In drei Fällen empfehlen wir, einen Fachbetrieb zu beauftragen:</p>
<ul>
<li><strong>Große Flächen (ab 200m²):</strong> Professionelle Vertikutierer sind deutlich leistungsfähiger als Baumarkt-Geräte</li>
<li><strong>Starker Moosbefall:</strong> Hier braucht es oft eine Kombination aus Vertikutieren, Kalken, Sanden und Düngen</li>
<li><strong>Neuer Rasen gewünscht:</strong> Wenn der alte Rasen so schlecht ist, dass Vertikutieren nicht mehr reicht, kann eine Neuanlage mit Rollrasen die bessere Lösung sein</li>
</ul>
<div class="fazit-box">
<p>Wir übernehmen die komplette Rasensanierung — vom Vertikutieren über die Düngung bis zur Rollrasen-Verlegung. Alles aus einer Hand, mit Festpreisgarantie.</p>
</div>`,
            },
        ],
        faqs: [
            { q: 'Wie oft sollte man den Rasen vertikutieren?', a: '1-2 mal pro Jahr reicht aus. Der Haupttermin ist Mitte April bis Mitte Mai. Bei starkem Moosbefall kann ein zweiter Durchgang im September sinnvoll sein. Öfter als 2x pro Jahr sollten Sie nicht vertikutieren.' },
            { q: 'Kann man beim Vertikutieren etwas falsch machen?', a: 'Ja, die häufigsten Fehler sind: zu tief einstellen (max. 2-3mm), bei nassem Boden vertikutieren, oder danach nicht düngen und nachsäen. All diese Fehler führen dazu, dass der Rasen schlechter aussieht als vorher.' },
            { q: 'Was ist besser: Vertikutieren oder Aerifizieren?', a: 'Beides hat unterschiedliche Zwecke. Vertikutieren entfernt Moos und Rasenfilz an der Oberfläche. Aerifizieren (Belüften) lockert verdichteten Boden in der Tiefe. Bei stark verdichteten Böden (Lehm) empfehlen wir beides.' },
            { q: 'Muss man nach dem Vertikutieren nachsäen?', a: 'Ja, wenn kahle Stellen entstanden sind. Das ist normal und beabsichtigt — die Lücken wurden vorher nur von Moos und Filz gefüllt. Streuen Sie Rasensamen in die Lücken, harken Sie leicht ein und halten Sie die Stellen 2-3 Wochen feucht.' },
        ],
        relatedServices: ['gartenpflege', 'rollrasen', 'garten-und-landschaftsbau'],
    },

    // ========================================================================
    // ARTIKEL 7: Baum fällen (03.05.)
    // ========================================================================
    {
        slug: 'baum-faellen-genehmigung',
        title: 'Baum fällen: Genehmigung, Regeln & was Sie wissen müssen',
        metaTitle: 'Baum fällen: Genehmigung, Baumschutzsatzung & Regeln 2026',
        metaDescription: 'Darf man einen Baum im eigenen Garten fällen? ✓ Genehmigungspflicht ✓ Baumschutzsatzung ✓ Zeitraum ✓ Strafen. Alle Regeln verständlich erklärt.',
        excerpt: 'Einen Baum fällen klingt einfach — ist aber rechtlich komplex. Wann brauchen Sie eine Genehmigung, was sagt die Baumschutzsatzung und wann dürfen Sie überhaupt fällen?',
        category: 'Recht & Wissen',
        publishDate: '2026-05-03',
        readingTime: 8,
        heroImage: '/images/blog-baum-faellen.png',
        keywords: ['Baum fällen Genehmigung', 'Baum fällen erlaubt', 'Baumschutzsatzung', 'Baum fällen wann', 'Baum fällen Garten', 'Baumfällung Regeln'],
        tableOfContents: [
            { id: 'genehmigung', title: 'Brauche ich eine Genehmigung?' },
            { id: 'satzung', title: 'Was ist eine Baumschutzsatzung?' },
            { id: 'zeitraum', title: 'Wann darf man Bäume fällen?' },
            { id: 'ausnahmen', title: 'Wann darf man ohne Genehmigung fällen?' },
            { id: 'antrag', title: 'So stellen Sie den Antrag' },
            { id: 'strafen', title: 'Strafen bei illegaler Fällung' },
            { id: 'alternativen', title: 'Alternativen zum Fällen' },
        ],
        content: [
            {
                id: 'genehmigung',
                heading: 'Brauche ich eine Genehmigung?',
                content: `<p><strong>In den meisten Fällen: Ja.</strong> Ob Sie einen Baum auf Ihrem eigenen Grundstück fällen dürfen, hängt von der Baumschutzsatzung Ihrer Gemeinde ab.</p>
<p>Die Faustregel für die meisten Kommunen in Niedersachsen und Hamburg:</p>
<div class="fazit-box">
<p>Bäume mit einem <strong>Stammumfang ab 80 cm</strong> (gemessen in 1 Meter Höhe) sind geschützt und dürfen nur mit <strong>Genehmigung</strong> gefällt werden. Obstbäume sind meist ausgenommen.</p>
</div>
<p><strong>Wichtig:</strong> Die Regeln unterscheiden sich von Gemeinde zu Gemeinde. Was in Lüneburg erlaubt ist, kann in Hamburg verboten sein. Informieren Sie sich immer bei Ihrer lokalen Behörde.</p>`,
            },
            {
                id: 'satzung',
                heading: 'Was ist eine Baumschutzsatzung?',
                content: `<p>Eine Baumschutzsatzung ist eine <strong>kommunale Verordnung</strong>, die festlegt, welche Bäume unter Schutz stehen. Die wichtigsten Punkte:</p>
<table>
<thead><tr><th>Regelung</th><th>Typisch</th></tr></thead>
<tbody>
<tr><td><strong>Geschützt ab</strong></td><td>60-80 cm Stammumfang (je nach Gemeinde)</td></tr>
<tr><td><strong>Ausgenommen</strong></td><td>Obstbäume, Nadelgehölze (oft), abgestorbene Bäume</td></tr>
<tr><td><strong>Messung</strong></td><td>Stammumfang in 1 Meter Höhe</td></tr>
<tr><td><strong>Ersatzpflanzung</strong></td><td>Oft gefordert: 1-3 neue Bäume pro gefällten Baum</td></tr>
</tbody>
</table>
<p><strong>Nicht jede Gemeinde hat eine Baumschutzsatzung.</strong> Manche ländliche Gemeinden haben keine — dort gelten nur die Bundesregelungen (Schonzeit). Trotzdem: Immer vorher nachfragen.</p>`,
            },
            {
                id: 'zeitraum',
                heading: 'Wann darf man Bäume fällen?',
                content: `<p>Auch hier gilt das <strong>Bundesnaturschutzgesetz § 39</strong>:</p>
<table>
<thead><tr><th>Zeitraum</th><th>Fällung erlaubt?</th></tr></thead>
<tbody>
<tr><td><strong>1. Oktober – 28. Februar</strong></td><td>Ja (mit Genehmigung, falls Satzung vorhanden)</td></tr>
<tr><td><strong>1. März – 30. September</strong></td><td>Grundsätzlich nein (Schonzeit für brütende Vögel)</td></tr>
</tbody>
</table>
<p><strong>Ausnahmen während der Schonzeit:</strong></p>
<ul>
<li><strong>Verkehrssicherung:</strong> Sturmschäden, akute Bruchgefahr</li>
<li><strong>Bauvorhaben:</strong> Mit Baugenehmigung und Ausnahmegenehmigung</li>
<li><strong>Kranke Bäume:</strong> Bei nachgewiesener Gefahr (Gutachten erforderlich)</li>
</ul>`,
            },
            {
                id: 'ausnahmen',
                heading: 'Wann darf man ohne Genehmigung fällen?',
                content: `<p>In den meisten Gemeinden dürfen Sie <strong>ohne Genehmigung</strong> fällen:</p>
<ul>
<li><strong>Obstbäume:</strong> Apfel, Birne, Kirsche, Pflaume (nicht Walnuss!)</li>
<li><strong>Kleine Bäume:</strong> Unter dem geschützten Stammumfang (meist 60-80 cm)</li>
<li><strong>Nadelgehölze:</strong> Fichten, Tannen, Zypressen (in vielen Satzungen ausgenommen)</li>
<li><strong>Abgestorbene Bäume:</strong> Offensichtlich tote Bäume ohne Genehmigung — aber Dokumentation empfohlen</li>
</ul>
<p><strong>Achtung:</strong> Selbst wenn keine Baumschutzsatzung gilt — die <strong>Schonzeit</strong> (1. März bis 30. September) gilt trotzdem bundesweit! In diesem Zeitraum brauchen Sie mindestens eine Ausnahmegenehmigung.</p>`,
            },
            {
                id: 'antrag',
                heading: 'So stellen Sie den Antrag',
                content: `<p>Der Ablauf ist in den meisten Gemeinden ähnlich:</p>
<ul>
<li><strong>Schritt 1:</strong> Antrag beim Umweltamt / Grünflächenamt Ihrer Gemeinde stellen</li>
<li><strong>Schritt 2:</strong> Angaben machen: Baumart, Stammumfang, Standort, Grund der Fällung</li>
<li><strong>Schritt 3:</strong> Oft: Foto des Baumes und Lageplan beifügen</li>
<li><strong>Schritt 4:</strong> Bearbeitungszeit: 2-6 Wochen</li>
<li><strong>Schritt 5:</strong> Genehmigung abholen + Auflagen beachten (z.B. Ersatzpflanzung)</li>
</ul>
<p><strong>Kosten:</strong> Die Verwaltungsgebühr liegt je nach Gemeinde zwischen 25€ und 100€.</p>
<p><strong>Tipp:</strong> Stellen Sie den Antrag im September/Oktober — dann haben Sie die Genehmigung rechtzeitig für die Fäll-Saison ab Oktober.</p>`,
            },
            {
                id: 'strafen',
                heading: 'Strafen bei illegaler Fällung',
                content: `<p>Einen geschützten Baum ohne Genehmigung zu fällen ist eine <strong>Ordnungswidrigkeit</strong>:</p>
<table>
<thead><tr><th>Verstoß</th><th>Bußgeld</th></tr></thead>
<tbody>
<tr><td>Geschützten Baum ohne Genehmigung fällen</td><td><strong>500 – 50.000 €</strong></td></tr>
<tr><td>Fällung während der Schonzeit</td><td><strong>500 – 10.000 €</strong></td></tr>
<tr><td>Zerstörung von Vogelnestern</td><td><strong>5.000 – 50.000 €</strong></td></tr>
<tr><td>Keine Ersatzpflanzung durchgeführt</td><td><strong>250 – 5.000 €</strong></td></tr>
</tbody>
</table>
<p>Zusätzlich kann die Gemeinde eine <strong>Ersatzpflanzung in doppelter Anzahl</strong> anordnen. Bei besonders wertvollen Bäumen droht sogar ein strafrechtliches Verfahren.</p>`,
            },
            {
                id: 'alternativen',
                heading: 'Alternativen zum Fällen',
                content: `<p>Oft muss ein Baum nicht komplett gefällt werden. Alternativen:</p>
<ul>
<li><strong>Kronenschnitt / Auslichtung:</strong> Macht den Baum kleiner und lichtdurchlässiger, ohne ihn zu entfernen</li>
<li><strong>Kroneneinkürzung:</strong> Der Baum wird 30-50% kleiner, bleibt aber erhalten</li>
<li><strong>Totholz entfernen:</strong> Beseitigt die Gefahr, der Baum bleibt stehen</li>
<li><strong>Wurzelvorhang:</strong> Bei Problemen mit Wurzeln — schützt Leitungen ohne Fällung</li>
</ul>
<div class="fazit-box">
<p><strong>Unser Rat:</strong> Lassen Sie einen Baum vor der Fällung immer von einem Fachmann beurteilen. Oft reicht ein professioneller Rückschnitt, um das Problem zu lösen — und Sie sparen sich die Genehmigung und die Kosten einer Neupflanzung.</p>
</div>`,
            },
        ],
        faqs: [
            { q: 'Darf ich einen Baum in meinem eigenen Garten fällen?', a: 'Das hängt von der Baumschutzsatzung Ihrer Gemeinde ab. Bäume mit einem Stammumfang ab 60-80cm (gemessen in 1m Höhe) sind in den meisten Kommunen geschützt. Obstbäume und kleinere Bäume sind meist ausgenommen. Fragen Sie immer zuerst bei Ihrer Gemeinde nach.' },
            { q: 'Wann ist die beste Zeit zum Baum fällen?', a: 'Die beste Zeit ist von Oktober bis Ende Februar — außerhalb der gesetzlichen Schonzeit. In dieser Zeit ruhen die Bäume und es brüten keine Vögel. Stellen Sie den Genehmigungsantrag bereits im September, damit Sie rechtzeitig starten können.' },
            { q: 'Was passiert wenn ich einen Baum illegal fälle?', a: 'Es drohen Bußgelder von 500 bis 50.000 Euro, je nach Bundesland und Schwere des Verstoßes. Zusätzlich kann die Gemeinde eine Ersatzpflanzung anordnen. Bei Zerstörung von geschützten Arten oder Vogelnestern kann es auch strafrechtlich relevant werden.' },
            { q: 'Sind Obstbäume geschützt?', a: 'In den meisten Baumschutzsatzungen sind Obstbäume ausgenommen. Aber Achtung: Die Schonzeit vom 1. März bis 30. September gilt auch für Obstbäume. Und Walnussbäume gelten in vielen Satzungen nicht als Obstbäume und können geschützt sein.' },
        ],
        relatedServices: ['baumpflege', 'gartenpflege', 'garten-und-landschaftsbau'],
    },

    // ========================================================================
    // ARTIKEL 8: Garten winterfest machen (06.05.)
    // ========================================================================
    {
        slug: 'garten-winterfest-machen',
        title: 'Garten winterfest machen: Die komplette Checkliste',
        metaTitle: 'Garten winterfest machen: Checkliste für Rasen, Beete & Technik 2026',
        metaDescription: 'Garten winterfest machen ✓ Rasen vorbereiten ✓ Beete schützen ✓ Wasserleitungen entleeren ✓ Die komplette Checkliste vom Profi.',
        excerpt: 'Ein gut vorbereiteter Garten übersteht den Winter ohne Schäden. Unsere Checkliste zeigt Ihnen alles, was vor dem ersten Frost erledigt sein muss.',
        category: 'Saisonal',
        publishDate: '2026-05-06',
        readingTime: 9,
        heroImage: '/images/blog-winterfest.png',
        keywords: ['Garten winterfest machen', 'Garten Wintervorbereitung', 'Garten Herbst Checkliste', 'Pflanzen winterfest', 'Rasen Winter', 'Garten vor Frost schützen'],
        tableOfContents: [
            { id: 'rasen', title: 'Rasen winterfest machen' },
            { id: 'beete', title: 'Beete und Stauden schützen' },
            { id: 'baeume', title: 'Bäume und Sträucher' },
            { id: 'kuebel', title: 'Kübelpflanzen richtig überwintern' },
            { id: 'technik', title: 'Technik und Wasserleitungen' },
            { id: 'moebel', title: 'Gartenmöbel und Geräte' },
            { id: 'checkliste', title: 'Die komplette Checkliste' },
        ],
        content: [
            {
                id: 'rasen',
                heading: 'Rasen winterfest machen',
                content: `<ul>
<li><strong>Letzter Schnitt Ende Oktober:</strong> Auf ca. 5 cm mähen — nicht zu kurz (frostempfindlich) und nicht zu lang (Schneeschimmel-Risiko)</li>
<li><strong>Herbstdüngung:</strong> Kaliumbetonten Rasendünger ausbringen — stärkt die Zellwände gegen Frost</li>
<li><strong>Laub komplett entfernen:</strong> Liegengebliebenes Laub führt zu Schneeschimmel und gelben Flecken</li>
<li><strong>Nicht betreten bei Frost:</strong> Gefrorene Halme brechen ab und erholen sich erst im Frühling</li>
</ul>`,
            },
            {
                id: 'beete',
                heading: 'Beete und Stauden schützen',
                content: `<ul>
<li><strong>Verblühte Stauden:</strong> Samenstände stehen lassen — Winterfutter für Vögel und natürlicher Frostschutz</li>
<li><strong>Rosen:</strong> Erde ca. 15 cm hoch anhäufeln, mit Reisig oder Laub abdecken</li>
<li><strong>Empfindliche Stauden:</strong> Lavendel, Salbei und mediterrane Kräuter mit Vlies abdecken</li>
<li><strong>Beete mulchen:</strong> 5-7 cm Laub oder Rindenmulch schützt die Wurzeln vor Bodenfrost</li>
<li><strong>Zwiebeln pflanzen:</strong> Oktober ist die perfekte Zeit für Tulpen, Narzissen und Krokusse</li>
</ul>`,
            },
            {
                id: 'baeume',
                heading: 'Bäume und Sträucher',
                content: `<ul>
<li><strong>Junge Bäume:</strong> Stamm mit Juteband umwickeln — schützt vor Frostrissen</li>
<li><strong>Immergrüne:</strong> An frostfreien Tagen gießen! Thuja und Co. vertrocknen im Winter häufiger als sie erfrieren</li>
<li><strong>Obstbäume:</strong> Weißanstrich auf den Stamm — verhindert Spannungsrisse durch Sonne-Frost-Wechsel</li>
<li><strong>Totholz entfernen:</strong> Abgestorbene Äste können bei Schnee und Wind abbrechen</li>
</ul>`,
            },
            {
                id: 'kuebel',
                heading: 'Kübelpflanzen richtig überwintern',
                content: `<ul>
<li><strong>Nicht winterharte Pflanzen</strong> (Oleander, Engelstrompete, Zitrus) vor dem ersten Frost ins Haus holen — ideale Temperatur: 5-12°C</li>
<li><strong>Winterharte Kübelpflanzen:</strong> Topf mit Luftpolsterfolie oder Kokosmatten umwickeln, auf Styroporplatte stellen</li>
<li><strong>Weniger gießen:</strong> Aber nicht komplett austrocknen lassen — auch im Winter brauchen Pflanzen Wasser</li>
<li><strong>Ton-Töpfe:</strong> Frostempfindlich! Entweder reinnehmen oder mit Vlies umwickeln</li>
</ul>`,
            },
            {
                id: 'technik',
                heading: 'Technik und Wasserleitungen',
                content: `<p><strong>Das wird am häufigsten vergessen — und ist am teuersten:</strong></p>
<ul>
<li><strong>Außenwasserhähne:</strong> Zuleitung absperren und Hahn offen lassen, damit Restwasser ablaufen kann</li>
<li><strong>Gartenschläuche:</strong> Komplett entleeren, aufwickeln und trocken lagern</li>
<li><strong>Bewässerungsanlage:</strong> System komplett entleeren (ausblasen lassen bei professionellen Anlagen)</li>
<li><strong>Teichpumpe:</strong> Ab 0°C Wassertemperatur herausnehmen und frostfrei lagern</li>
<li><strong>Regentonnen:</strong> Entleeren und umdrehen oder Deckel öffnen — Volltonne platzt bei Frost!</li>
</ul>
<div class="fazit-box">
<p><strong>Wichtig:</strong> Ein geplatztes Wasserrohr im Garten kann schnell 500-2.000€ Schaden verursachen. Diese 30 Minuten Arbeit im Oktober lohnen sich.</p>
</div>`,
            },
            {
                id: 'moebel',
                heading: 'Gartenmöbel und Geräte',
                content: `<ul>
<li><strong>Holzmöbel:</strong> Trocken einlagern oder mit atmungsaktiver Abdeckung schützen (keine Plastikfolie!)</li>
<li><strong>Polster und Kissen:</strong> Immer trocken einlagern — Schimmelgefahr</li>
<li><strong>Rasenmäher:</strong> Tank leeren, Messer schärfen lassen, trocken lagern</li>
<li><strong>Gartenwerkzeug:</strong> Reinigen, Metallteile einölen, trocken aufhängen</li>
<li><strong>Sonnenschirm:</strong> Trocken einlagern, Ständer leeren</li>
</ul>`,
            },
            {
                id: 'checkliste',
                heading: 'Die komplette Checkliste',
                content: `<table>
<thead><tr><th>Bereich</th><th>Aufgabe</th><th>Wann</th></tr></thead>
<tbody>
<tr><td>Rasen</td><td>Herbstdüngung</td><td>September</td></tr>
<tr><td>Rasen</td><td>Letzter Schnitt (5 cm)</td><td>Ende Oktober</td></tr>
<tr><td>Rasen</td><td>Laub entfernen</td><td>Laufend bis November</td></tr>
<tr><td>Beete</td><td>Mulchen und abdecken</td><td>Oktober/November</td></tr>
<tr><td>Beete</td><td>Blumenzwiebeln pflanzen</td><td>Oktober</td></tr>
<tr><td>Rosen</td><td>Anhäufeln und abdecken</td><td>November</td></tr>
<tr><td>Bäume</td><td>Weißanstrich Obstbäume</td><td>November</td></tr>
<tr><td>Kübelpflanzen</td><td>Nicht-winterharte reinholen</td><td>Vor erstem Frost</td></tr>
<tr><td>Technik</td><td>Wasserleitung absperren</td><td>Oktober</td></tr>
<tr><td>Technik</td><td>Regentonnen entleeren</td><td>Oktober</td></tr>
<tr><td>Möbel</td><td>Einlagern oder abdecken</td><td>Oktober/November</td></tr>
<tr><td>Geräte</td><td>Reinigen und einlagern</td><td>November</td></tr>
</tbody>
</table>`,
            },
        ],
        faqs: [
            { q: 'Wann sollte man den Garten winterfest machen?', a: 'Die meisten Arbeiten sollten im Oktober und November erledigt werden — vor dem ersten Frost. Die Herbstdüngung des Rasens erfolgt idealerweise bereits im September. Kübelpflanzen müssen vor dem ersten Frost reingeholt werden.' },
            { q: 'Muss man Stauden im Winter abschneiden?', a: 'Nein — lassen Sie die verblühten Stauden über den Winter stehen. Sie bieten natürlichen Frostschutz für die Wurzeln und sind Winterfutter für Vögel. Erst im Frühling (März) werden sie bodennah zurückgeschnitten.' },
            { q: 'Wie schütze ich meinen Rasen im Winter?', a: 'Drei Dinge: Herbstdünger mit Kalium ausbringen (September), letzter Schnitt auf 5 cm (Ende Oktober), und Laub komplett entfernen. Im Winter den Rasen bei Frost nicht betreten.' },
            { q: 'Was passiert wenn man Wasserleitungen nicht entleert?', a: 'Gefrorenes Wasser dehnt sich aus und kann Rohre, Hähne und Anschlüsse sprengen. Die Reparaturkosten liegen schnell bei 500-2.000 Euro. Das Entleeren dauert nur 30 Minuten und verhindert teure Schäden.' },
        ],
        relatedServices: ['gartenpflege', 'baumpflege', 'garten-und-landschaftsbau'],
    },

    // ========================================================================
    // ARTIKEL 9: Welcher Zaun passt? (09.05.)
    // ========================================================================
    {
        slug: 'zaun-materialien-vergleich',
        title: 'Welcher Zaun passt zu meinem Garten? Materialien im Vergleich',
        metaTitle: 'Gartenzaun: Holz, Metall oder Gabione? Materialien im Vergleich 2026',
        metaDescription: 'Welcher Zaun ist der richtige? ✓ Holz ✓ Metall ✓ Doppelstabmatte ✓ Gabione — Haltbarkeit, Pflege & Optik im ehrlichen Vergleich.',
        excerpt: 'Holzzaun, Metallzaun oder Gabionenwand? Jedes Material hat Vor- und Nachteile. Wir vergleichen alle Optionen ehrlich — aus 15 Jahren Erfahrung im Zaunbau.',
        category: 'Vergleich',
        publishDate: '2026-05-09',
        readingTime: 8,
        heroImage: '/images/blog-zaun-vergleich.png',
        keywords: ['Gartenzaun Materialien', 'Zaun Holz oder Metall', 'Doppelstabmattenzaun', 'Gabionenzaun', 'Zaun Garten', 'Sichtschutzzaun'],
        tableOfContents: [
            { id: 'ueberblick', title: 'Die vier Zauntypen im Überblick' },
            { id: 'holz', title: 'Holzzaun — Klassiker mit Charme' },
            { id: 'metall', title: 'Doppelstabmattenzaun — pflegefrei und stabil' },
            { id: 'gabione', title: 'Gabionenzaun — modern und massiv' },
            { id: 'aluminium', title: 'Aluminiumzaun — Premium-Option' },
            { id: 'sichtschutz', title: 'Sichtschutz: Welches Material?' },
            { id: 'fazit', title: 'Unsere Empfehlung' },
        ],
        content: [
            {
                id: 'ueberblick',
                heading: 'Die vier Zauntypen im Überblick',
                content: `<table>
<thead><tr><th>Material</th><th>Haltbarkeit</th><th>Pflege</th><th>Optik</th></tr></thead>
<tbody>
<tr><td><strong>Holz</strong></td><td>10-20 Jahre</td><td>Hoch (Streichen/Ölen)</td><td>Natürlich, warm</td></tr>
<tr><td><strong>Doppelstabmatte</strong></td><td>25-30+ Jahre</td><td>Fast keine</td><td>Sachlich, modern</td></tr>
<tr><td><strong>Gabione</strong></td><td>30+ Jahre</td><td>Keine</td><td>Massiv, modern</td></tr>
<tr><td><strong>Aluminium</strong></td><td>30+ Jahre</td><td>Keine</td><td>Premium, elegant</td></tr>
</tbody>
</table>`,
            },
            {
                id: 'holz',
                heading: 'Holzzaun — Klassiker mit Charme',
                content: `<p><strong>Vorteile:</strong></p>
<ul>
<li>Natürliche, warme Ausstrahlung</li>
<li>Vielfältige Gestaltung möglich (Lattenzaun, Sichtschutz, Jägerzaun)</li>
<li>Relativ günstig in der Anschaffung</li>
<li>Lässt sich selbst reparieren</li>
</ul>
<p><strong>Nachteile:</strong></p>
<ul>
<li>Muss alle 2-3 Jahre <strong>gestrichen oder geölt</strong> werden</li>
<li>Anfällig für Fäulnis, besonders am Boden</li>
<li>Lebensdauer deutlich kürzer als Metall</li>
<li>Nicht jedes Holz ist nachhaltig</li>
</ul>
<p><strong>Bestes Holz:</strong> Lärche oder Douglasie — natürlich widerstandsfähig ohne Druckimprägnierung. Kiefer (druckimprägniert) ist günstiger, aber weniger langlebig.</p>`,
            },
            {
                id: 'metall',
                heading: 'Doppelstabmattenzaun — pflegefrei und stabil',
                content: `<p>Der <strong>meistverkaufte Zaun in Deutschland</strong> — aus gutem Grund:</p>
<p><strong>Vorteile:</strong></p>
<ul>
<li><strong>Null Pflege:</strong> Feuerverzinkt + pulverbeschichtet = rostfrei für Jahrzehnte</li>
<li><strong>Extrem stabil:</strong> Trotzt Wind und Wetter problemlos</li>
<li><strong>Sauber und modern:</strong> Klare Linien, verschiedene Farben (Anthrazit am beliebtesten)</li>
<li><strong>Sichtschutz nachrüstbar:</strong> Kunststoff-Streifen oder Hecke davor pflanzen</li>
</ul>
<p><strong>Nachteile:</strong></p>
<ul>
<li>Kein Sichtschutz ohne Zusatz</li>
<li>Etwas „kühle" Optik</li>
<li>Montage braucht Betonfundamente</li>
</ul>
<p><strong>Am beliebtesten:</strong> Doppelstabmatte in Anthrazit (RAL 7016), Höhe 1,40 m oder 1,80 m. Kombiniert mit einer Hecke dahinter ergibt das einen perfekten Sichtschutz mit null Pflege am Zaun.</p>`,
            },
            {
                id: 'gabione',
                heading: 'Gabionenzaun — modern und massiv',
                content: `<p>Gabionen sind Drahtkörbe gefüllt mit Naturstein. Immer häufiger als <strong>Sichtschutz und Grundstücksgrenze</strong> im Einsatz.</p>
<p><strong>Vorteile:</strong></p>
<ul>
<li><strong>Absolut wartungsfrei:</strong> Stein verwittert nicht, Draht ist feuerverzinkt</li>
<li><strong>Perfekter Sichtschutz:</strong> Blickdicht ohne Lücken</li>
<li><strong>Schallschutz:</strong> Dämmt Lärm von der Straße</li>
<li><strong>Flexibel:</strong> Als Zaun, Mauer, Hochbeet oder Sitzbank einsetzbar</li>
</ul>
<p><strong>Nachteile:</strong></p>
<ul>
<li><strong>Schwer:</strong> Braucht ein stabiles Fundament</li>
<li><strong>Teurer</strong> als Doppelstabmatten</li>
<li><strong>Breiter:</strong> 15-30 cm Grundstück gehen für die Tiefe drauf</li>
<li><strong>Genehmigung:</strong> Ab bestimmter Höhe baugenehmigungspflichtig</li>
</ul>`,
            },
            {
                id: 'aluminium',
                heading: 'Aluminiumzaun — Premium-Option',
                content: `<p>Aluminiumzäune sind die <strong>hochwertigste Variante</strong> — entsprechend ist der Preis.</p>
<p><strong>Vorteile:</strong></p>
<ul>
<li><strong>Rostfrei:</strong> Aluminium korrodiert nicht</li>
<li><strong>Leicht:</strong> Einfachere Montage als Stahl</li>
<li><strong>Elegante Optik:</strong> Lamellendesign, verschiedene Farben</li>
<li><strong>Null Pflege:</strong> Gelegentlich abspritzen, fertig</li>
</ul>
<p><strong>Nachteile:</strong></p>
<ul>
<li><strong>Teuer:</strong> 3-5x so teuer wie Doppelstabmatten</li>
<li><strong>Empfindlich:</strong> Dellen und Kratzer nicht reparierbar</li>
</ul>
<p>Aluminiumzäune empfehlen wir für repräsentative Grundstücke, wo der Zaun zum Gesamtbild passen muss.</p>`,
            },
            {
                id: 'sichtschutz',
                heading: 'Sichtschutz: Welches Material?',
                content: `<p>Wenn Sichtschutz die <strong>Hauptanforderung</strong> ist, hier die besten Optionen:</p>
<table>
<thead><tr><th>Option</th><th>Sichtschutz</th><th>Pflege</th><th>Empfehlung</th></tr></thead>
<tbody>
<tr><td><strong>Gabione</strong></td><td>100%</td><td>Keine</td><td>Beste Lösung wenn Budget da</td></tr>
<tr><td><strong>Holz-Sichtschutz</strong></td><td>100%</td><td>Alle 2-3 Jahre streichen</td><td>Natürlich, aber pflegeintensiv</td></tr>
<tr><td><strong>Doppelstab + Hecke</strong></td><td>90-100%</td><td>Hecke 1-2x schneiden</td><td>Beste Kombination aus Preis und Optik</td></tr>
<tr><td><strong>Alu-Lamellenzaun</strong></td><td>100%</td><td>Keine</td><td>Premium, schönste Optik</td></tr>
</tbody>
</table>`,
            },
            {
                id: 'fazit',
                heading: 'Unsere Empfehlung',
                content: `<div class="fazit-box">
<p><strong>Für die meisten Gärten empfehlen wir eine Doppelstabmatte in Anthrazit mit einer Hecke davor.</strong> Das ist die beste Kombination aus Preis, Haltbarkeit, Optik und Sichtschutz. Der Zaun hält 30+ Jahre ohne Pflege, die Hecke sorgt für natürliche Optik.</p>
</div>
<p>Für repräsentative Grundstücke oder wenn ein massiver Sichtschutz gewünscht ist, empfehlen wir Gabionen oder Alu-Lamellenzäune.</p>
<p>Wir beraten Sie gerne persönlich — und bauen den Zaun natürlich auch für Sie auf.</p>`,
            },
        ],
        faqs: [
            { q: 'Welcher Zaun ist am günstigsten?', a: 'Doppelstabmattenzäune bieten das beste Preis-Leistungs-Verhältnis. Sie sind günstiger als Holz- und Gabionenzäune und halten dabei 25-30 Jahre ohne jede Pflege. Die Kosten variieren je nach Höhe und Länge.' },
            { q: 'Welcher Zaun braucht am wenigsten Pflege?', a: 'Doppelstabmatten, Gabionen und Aluminiumzäune sind praktisch wartungsfrei. Holzzäune müssen dagegen alle 2-3 Jahre gestrichen oder geölt werden. Wenn Ihnen Pflegefreiheit wichtig ist, wählen Sie Metall.' },
            { q: 'Brauche ich eine Baugenehmigung für einen Zaun?', a: 'In den meisten Gemeinden sind Zäune bis 1,80 m genehmigungsfrei. Gabionen und massive Mauern können ab einer bestimmten Höhe genehmigungspflichtig sein. Prüfen Sie die Vorgaben Ihrer Gemeinde und beachten Sie die Grenzabstände.' },
            { q: 'Was ist besser: Zaun oder Hecke?', a: 'Die beste Lösung ist oft beides: Ein stabiler Zaun (Doppelstabmatte) mit einer Hecke davor. Der Zaun bietet sofortigen Schutz, die Hecke sorgt für natürliche Optik und Sichtschutz. So haben Sie die Vorteile beider Optionen.' },
        ],
        relatedServices: ['zaunbau', 'gartenpflege', 'garten-und-landschaftsbau'],
    },

    // ========================================================================
    // ARTIKEL 10: Drainage im Garten (12.05.)
    // ========================================================================
    {
        slug: 'drainage-garten-anleitung',
        title: 'Drainage im Garten: Wann nötig und wie es richtig geht',
        metaTitle: 'Drainage im Garten verlegen: Anleitung, Anzeichen & Tipps 2026',
        metaDescription: 'Staunässe im Garten? ✓ Wann eine Drainage nötig ist ✓ Welche Systeme es gibt ✓ Professionelle vs. DIY-Lösung. Vom Experten erklärt.',
        excerpt: 'Staunässe zerstört Rasen, Pflanzen und Fundamente. Aber nicht jeder Garten braucht eine Drainage. Wir erklären, wann sie nötig ist und wie sie richtig funktioniert.',
        category: 'Ratgeber',
        publishDate: '2026-05-12',
        readingTime: 8,
        heroImage: '/images/blog-drainage.png',
        keywords: ['Drainage Garten', 'Staunässe Garten', 'Garten Drainage verlegen', 'Garten entwässern', 'Drainage Rasen', 'Drainagerohr Garten'],
        tableOfContents: [
            { id: 'anzeichen', title: 'Anzeichen für Staunässe' },
            { id: 'ursachen', title: 'Warum staut sich Wasser?' },
            { id: 'systeme', title: 'Welche Drainage-Systeme gibt es?' },
            { id: 'aufbau', title: 'Aufbau einer Drainage' },
            { id: 'alternativen', title: 'Alternativen zur Drainage' },
            { id: 'profi', title: 'DIY oder Profi?' },
        ],
        content: [
            {
                id: 'anzeichen',
                heading: 'Anzeichen für Staunässe',
                content: `<p>Nicht jeder nasse Garten braucht eine Drainage. Aber bei diesen Anzeichen sollten Sie handeln:</p>
<ul>
<li><strong>Pfützen die tagelang stehen bleiben</strong> — auch 48 Stunden nach dem Regen</li>
<li><strong>Matschiger Rasen:</strong> Sie sinken beim Laufen ein</li>
<li><strong>Moosbefall:</strong> Starkes Moos deutet auf dauerhaft feuchten Boden hin</li>
<li><strong>Pflanzen kümmern:</strong> Gelbe Blätter, Wurzelfäule, Pflanzen gehen ohne ersichtlichen Grund ein</li>
<li><strong>Feuchter Keller:</strong> Wasser drückt von außen gegen die Kellerwand</li>
<li><strong>Algenwachstum</strong> auf Wegen und Terrasse</li>
</ul>
<div class="fazit-box">
<p><strong>Schnelltest:</strong> Graben Sie ein 30 cm tiefes Loch und füllen Sie es mit Wasser. Wenn das Wasser nach 4 Stunden noch steht, haben Sie ein Drainage-Problem.</p>
</div>`,
            },
            {
                id: 'ursachen',
                heading: 'Warum staut sich Wasser?',
                content: `<p>Die häufigsten Ursachen in Norddeutschland:</p>
<ul>
<li><strong>Lehmiger/toniger Boden:</strong> Der häufigste Grund. Lehm lässt Wasser extrem langsam durch</li>
<li><strong>Verdichteter Boden:</strong> Durch Baufahrzeuge, schwere Maschinen oder jahrelange Nutzung</li>
<li><strong>Zu viel versiegelte Fläche:</strong> Terrasse, Auffahrt und Dach leiten Wasser in den Garten</li>
<li><strong>Hoher Grundwasserspiegel:</strong> In manchen Gebieten steht das Grundwasser nur 50 cm unter der Oberfläche</li>
<li><strong>Fehlende Gefälle:</strong> Das Grundstück hat keine natürliche Entwässerung</li>
</ul>`,
            },
            {
                id: 'systeme',
                heading: 'Welche Drainage-Systeme gibt es?',
                content: `<table>
<thead><tr><th>System</th><th>Geeignet für</th><th>Aufwand</th></tr></thead>
<tbody>
<tr><td><strong>Drainagerohr</strong> (Flächendrainage)</td><td>Große Rasenflächen</td><td>Hoch — Erdarbeiten nötig</td></tr>
<tr><td><strong>Rigole / Sickergrube</strong></td><td>Punktuelle Staunässe</td><td>Mittel</td></tr>
<tr><td><strong>Oberflächenentwässerung</strong> (Mulde/Rinne)</td><td>Leichte Probleme</td><td>Gering</td></tr>
<tr><td><strong>Vertikaldrainage</strong> (Sanden)</td><td>Verdichteter Rasen</td><td>Gering</td></tr>
</tbody>
</table>`,
            },
            {
                id: 'aufbau',
                heading: 'Aufbau einer Drainage',
                content: `<p>Eine klassische Flächendrainage besteht aus:</p>
<ul>
<li><strong>Drainagerohre:</strong> Perforierte Rohre (DN 80-100) in 40-60 cm Tiefe, mit Gefälle (min. 0,5%)</li>
<li><strong>Filterschicht:</strong> 10-15 cm gewaschener Kies (16/32) um das Rohr</li>
<li><strong>Filtervlies:</strong> Umwickelt die Kiesschicht, verhindert Verschlammung</li>
<li><strong>Sammelleitung:</strong> Führt das Wasser zu einem Ableitpunkt (Versickerungsschacht, Vorfluter oder Kanal)</li>
</ul>
<p><strong>Wichtig:</strong> Die Drainage muss <strong>wohin ableiten</strong>. Ein Drainagerohr ohne Abfluss ist nutzlos. Klären Sie vorher mit Ihrer Gemeinde, ob eine Einleitung in den Kanal erlaubt ist.</p>`,
            },
            {
                id: 'alternativen',
                heading: 'Alternativen zur Drainage',
                content: `<p>Nicht immer braucht es gleich eine aufwändige Drainage:</p>
<ul>
<li><strong>Sanden:</strong> 2-3 mm Sand auf den Rasen aufbringen, verbessert die Durchlässigkeit bei lehmigem Boden über die Jahre</li>
<li><strong>Aerifizieren:</strong> Rasen belüften mit Hohlspoons — lockert verdichteten Boden</li>
<li><strong>Muldenversickerung:</strong> Natürliche Mulde im Garten anlegen, die Regenwasser sammelt und langsam versickert</li>
<li><strong>Bepflanzung:</strong> Wasserliebende Pflanzen (Sumpfdotterblume, Iris) an den nassen Stellen — nutzen das Problem als Vorteil</li>
<li><strong>Regenwassermanagement:</strong> Regenrinne vom Dach in eine Zisterne leiten statt in den Garten</li>
</ul>`,
            },
            {
                id: 'profi',
                heading: 'DIY oder Profi?',
                content: `<table>
<thead><tr><th>Situation</th><th>Empfehlung</th></tr></thead>
<tbody>
<tr><td>Leichte Staunässe, kleiner Bereich</td><td>DIY: Sanden, Aerifizieren, Mulde anlegen</td></tr>
<tr><td>Größere Fläche, Lehmiger Boden</td><td>Profi: Flächendrainage verlegen</td></tr>
<tr><td>Feuchter Keller</td><td>Unbedingt Profi: Gebäudedrainage ist komplex</td></tr>
<tr><td>Neubau-Garten anlegen</td><td>Profi: Drainage gleich von Anfang an mit einplanen</td></tr>
</tbody>
</table>
<div class="fazit-box">
<p><strong>Eine falsch verlegte Drainage kann das Problem verschlimmern</strong> — wenn das Gefälle nicht stimmt oder die Ableitung fehlt, staut sich das Wasser erst recht. Bei größeren Projekten lohnt sich immer eine professionelle Planung.</p>
</div>`,
            },
        ],
        faqs: [
            { q: 'Woran erkenne ich ob mein Garten eine Drainage braucht?', a: 'Die eindeutigsten Zeichen sind Pfützen die länger als 48 Stunden stehen, starker Moosbefall im Rasen, und Pflanzen die trotz guter Pflege eingehen. Ein einfacher Test: Graben Sie ein 30cm tiefes Loch, füllen Sie es mit Wasser — steht es nach 4 Stunden noch, brauchen Sie eine Lösung.' },
            { q: 'Kann ich eine Drainage selbst verlegen?', a: 'Bei kleinen Flächen ist das machbar, erfordert aber einiges an Erdarbeit und Know-how. Das Gefälle muss stimmen (mindestens 0,5%), die Ableitung muss geklärt sein, und die Filterschichten müssen korrekt aufgebaut werden. Bei größeren Projekten empfehlen wir einen Fachbetrieb.' },
            { q: 'Was hilft gegen Staunässe im Rasen?', a: 'Drei Maßnahmen die sofort helfen: 1. Aerifizieren (Rasen belüften) verbessert die Durchlässigkeit. 2. Sand aufbringen (2-3mm Schicht) lockert lehmigen Boden. 3. Vertikutieren entfernt Moos und öffnet die Oberfläche. Bei hartnäckiger Staunässe braucht es eine professionelle Drainage.' },
        ],
        relatedServices: ['garten-und-landschaftsbau', 'galabau', 'pflasterarbeiten'],
    },

    // ========================================================================
    // ARTIKEL 11: Naturstein oder Betonstein (15.05.)
    // ========================================================================
    {
        slug: 'naturstein-oder-betonstein',
        title: 'Naturstein oder Betonstein? Was für Ihre Terrasse besser ist',
        metaTitle: 'Naturstein oder Betonstein? Terrasse & Wege im Vergleich 2026',
        metaDescription: 'Naturstein oder Betonstein für Terrasse und Wege? ✓ Haltbarkeit ✓ Optik ✓ Pflege ✓ Vor- und Nachteile. Der ehrliche Vergleich vom Fachbetrieb.',
        excerpt: 'Granit oder Betonpflaster? Diese Entscheidung beeinflusst Optik, Pflege und Lebensdauer Ihrer Terrasse für Jahrzehnte. Ein ehrlicher Vergleich.',
        category: 'Vergleich',
        publishDate: '2026-05-15',
        readingTime: 8,
        heroImage: '/images/blog-naturstein-beton.png',
        keywords: ['Naturstein oder Betonstein', 'Terrassenplatten Vergleich', 'Naturstein Terrasse', 'Betonstein Terrasse', 'Granit oder Beton', 'Pflastersteine Vergleich'],
        tableOfContents: [
            { id: 'unterschied', title: 'Der grundlegende Unterschied' },
            { id: 'optik', title: 'Optik und Charakter' },
            { id: 'haltbarkeit', title: 'Haltbarkeit und Lebensdauer' },
            { id: 'pflege', title: 'Pflege und Reinigung' },
            { id: 'verlegung', title: 'Verlegung und Aufwand' },
            { id: 'nachhaltigkeit', title: 'Nachhaltigkeit' },
            { id: 'fazit', title: 'Unser Fazit' },
        ],
        content: [
            {
                id: 'unterschied',
                heading: 'Der grundlegende Unterschied',
                content: `<div class="comparison-box">
<div class="comparison-item">
<h4>Naturstein</h4>
<p>Von der Natur geformt: Granit, Basalt, Sandstein, Travertin, Schiefer. Jede Platte ist ein Unikat mit individueller Maserung, Farbe und Struktur.</p>
</div>
<div class="comparison-item">
<h4>Betonstein</h4>
<p>Industriell gefertigt aus Zement, Sand und Zuschlagstoffen. Gleichmäßige Formen, reproduzierbare Farben, oft in Naturstein-Optik hergestellt.</p>
</div>
</div>`,
            },
            {
                id: 'optik',
                heading: 'Optik und Charakter',
                content: `<p><strong>Naturstein gewinnt bei der Ausstrahlung.</strong> Eine Granitterrasse hat eine Tiefe und Lebendigkeit, die Beton nicht erreichen kann. Die natürliche Maserung, die leichten Farbvariationen und die Haptik machen den Unterschied.</p>
<p><strong>Betonstein gewinnt bei der Gleichmäßigkeit.</strong> Wenn Sie eine perfekt ebene Fläche mit einheitlicher Farbe wollen, ist Betonstein besser. Moderne Betonplatten in Naturstein-Optik sehen auf den ersten Blick täuschend echt aus.</p>
<p><strong>Aber:</strong> Betonstein altert weniger schön. Nach 10-15 Jahren verblasst die Farbe und die Oberfläche wird stumpf. Naturstein dagegen entwickelt eine <strong>edle Patina</strong> — Granit sieht nach 30 Jahren noch besser aus als am ersten Tag.</p>`,
            },
            {
                id: 'haltbarkeit',
                heading: 'Haltbarkeit und Lebensdauer',
                content: `<table>
<thead><tr><th>Eigenschaft</th><th>Naturstein</th><th>Betonstein</th></tr></thead>
<tbody>
<tr><td><strong>Lebensdauer</strong></td><td>50-100+ Jahre</td><td>20-30 Jahre</td></tr>
<tr><td><strong>Frostbeständigkeit</strong></td><td>Sehr hoch (Granit, Basalt)</td><td>Hoch (Qualitätsware)</td></tr>
<tr><td><strong>Farbbeständigkeit</strong></td><td>Dauerhaft (keine künstliche Farbe)</td><td>Verblasst über die Jahre</td></tr>
<tr><td><strong>Abrieb</strong></td><td>Minimal (extrem hart)</td><td>Sichtbar nach 10-15 Jahren</td></tr>
<tr><td><strong>Bruchfestigkeit</strong></td><td>Sehr hoch</td><td>Hoch, aber Kanten können absplittern</td></tr>
</tbody>
</table>
<p><strong>Ehrliche Einschätzung:</strong> Naturstein ist die Investition für Generationen. Eine Granitterrasse überdauert das Haus. Betonstein ist eine gute Lösung für 20-30 Jahre, muss dann aber erneuert werden.</p>`,
            },
            {
                id: 'pflege',
                heading: 'Pflege und Reinigung',
                content: `<p><strong>Naturstein:</strong></p>
<ul>
<li>1x pro Jahr mit klarem Wasser und weicher Bürste reinigen</li>
<li><strong>Keine</strong> chemischen Reiniger oder Hochdruckreiniger!</li>
<li>Imprägnierung alle 3-5 Jahre empfohlen (besonders bei hellem Sandstein)</li>
<li>Moos und Algen mit Soda-Lösung entfernen</li>
</ul>
<p><strong>Betonstein:</strong></p>
<ul>
<li>Hochdruckreiniger funktioniert gut (vorsichtig mit der Oberfläche)</li>
<li>Unkraut in Fugen regelmäßig entfernen</li>
<li>Imprägnierung verlängert die Farbintensität</li>
<li>Einfacher zu reinigen als Naturstein</li>
</ul>
<p><strong>Fazit:</strong> Betonstein ist im Alltag etwas pflegeleichter. Naturstein braucht sanftere Behandlung, dafür bleibt er länger schön.</p>`,
            },
            {
                id: 'verlegung',
                heading: 'Verlegung und Aufwand',
                content: `<p>Naturstein ist <strong>aufwändiger zu verlegen</strong> als Betonstein:</p>
<ul>
<li><strong>Dicke variiert:</strong> Natursteinplatten sind nie exakt gleich dick — mehr Ausgleichsarbeit nötig</li>
<li><strong>Zuschnitt:</strong> Naturstein schneiden ist anspruchsvoller und braucht Spezialwerkzeug</li>
<li><strong>Gewicht:</strong> Natursteinplatten sind oft schwerer</li>
<li><strong>Erfahrung:</strong> Naturstein verlegen braucht echtes Handwerkswissen</li>
</ul>
<p>Betonstein dagegen hat <strong>industriell normierte Maße</strong> — jede Platte ist exakt gleich, was die Verlegung schneller und einfacher macht.</p>`,
            },
            {
                id: 'nachhaltigkeit',
                heading: 'Nachhaltigkeit',
                content: `<p><strong>Naturstein:</strong> Muss nur abgebaut werden — keine energieintensive Herstellung. Vollständig recyclebar und wiederverwendbar. Aber: Transportwege können lang sein (Granit oft aus China oder Indien).</p>
<p><strong>Betonstein:</strong> Energieintensiv in der Herstellung (Zement = hoher CO₂-Ausstoß). Dafür oft regional produziert, kurze Transportwege.</p>
<p><strong>Tipp:</strong> Fragen Sie nach <strong>regionalem Naturstein</strong> — Norddeutscher Granit oder Basalt hat kurze Transportwege und unterstützt lokale Steinbrüche.</p>`,
            },
            {
                id: 'fazit',
                heading: 'Unser Fazit',
                content: `<p><strong>Wählen Sie Naturstein, wenn:</strong></p>
<ul>
<li>Sie eine Terrasse für Jahrzehnte bauen wollen</li>
<li>Ihnen individuelle Optik und Charakter wichtig sind</li>
<li>Sie bereit sind, etwas mehr zu investieren</li>
<li>Die Terrasse ein Highlight im Garten sein soll</li>
</ul>
<p><strong>Wählen Sie Betonstein, wenn:</strong></p>
<ul>
<li>Das Budget begrenzt ist</li>
<li>Sie eine gleichmäßige, moderne Optik wollen</li>
<li>Die Fläche in 20-30 Jahren ohnehin erneuert wird</li>
<li>Einfache Verlegung und Reparatur wichtig sind</li>
</ul>
<div class="fazit-box">
<p><strong>Unser meistverkauftes Setup:</strong> Granit-Terrassenplatten (anthrazit, geflammt) mit Basalt-Randsteinen. Zeitlose Eleganz, null Pflegeaufwand, Lebensdauer 50+ Jahre. Eine Investition die sich bezahlt macht.</p>
</div>`,
            },
        ],
        faqs: [
            { q: 'Ist Naturstein teurer als Betonstein?', a: 'Im Material ja — Naturstein kostet je nach Sorte 40-120€/m², Betonstein 15-50€/m². Aber: Naturstein hält 50-100 Jahre, Betonstein 20-30 Jahre. Auf die Lebensdauer gerechnet ist Naturstein oft die günstigere Wahl.' },
            { q: 'Welcher Naturstein ist am besten für die Terrasse?', a: 'Granit (geflammt oder gestrahlt) ist unsere Empfehlung: extrem hart, frostbeständig, rutschfest und in vielen Farben erhältlich. Basalt ist ähnlich robust, aber dunkler. Sandstein ist weicher und empfindlicher, dafür wärmer in der Optik.' },
            { q: 'Kann man Naturstein und Betonstein kombinieren?', a: 'Ja, das ist sogar eine beliebte Lösung: Naturstein für die Terrasse (Hauptfläche) und Betonstein für Nebenwege und untergeordnete Flächen. So sparen Sie Budget, ohne bei der Terrasse Kompromisse zu machen.' },
            { q: 'Wird Naturstein rutschig bei Nässe?', a: 'Das hängt von der Oberfläche ab. Polierter Naturstein wird rutschig — deshalb empfehlen wir für Außenbereiche immer geflämmte, gestrahlte oder gebürstete Oberflächen. Diese haben eine natürliche Rauheit und sind selbst bei Nässe trittsicher.' },
        ],
        relatedServices: ['pflasterarbeiten', 'terrassenbau', 'garten-und-landschaftsbau'],
    },

    // ========================================================================
    // ARTIKEL 12: Rasen neu anlegen
    // ========================================================================
    {
        slug: 'rasen-neuanlage-kosten',
        title: 'Rasen neu anlegen: Kosten, Ablauf & Tipps vom Profi',
        metaTitle: 'Rasen neu anlegen: Kosten pro m², Ablauf & Profi-Tipps 2026',
        metaDescription: 'Rasen neu anlegen lassen? ✓ Kosten pro m² ✓ Schritt-für-Schritt Ablauf ✓ Boden vorbereiten ✓ Häufige Fehler vermeiden. Vom Profi erklärt.',
        excerpt: 'Was kostet es, einen Rasen komplett neu anzulegen? Wir zeigen den kompletten Ablauf, realistische Kosten und die häufigsten Fehler.',
        category: 'Ratgeber',
        publishDate: '2026-05-18',
        readingTime: 9,
        keywords: ['Rasen neu anlegen Kosten', 'Rasen anlegen lassen', 'Rasen anlegen Kosten pro m2', 'Rasenfläche neu anlegen'],
        tableOfContents: [
            { id: 'wann', title: 'Wann Rasen neu anlegen?' },
            { id: 'kosten', title: 'Kosten im Überblick' },
            { id: 'ablauf', title: 'Schritt für Schritt Ablauf' },
            { id: 'fehler', title: 'Die 5 häufigsten Fehler' },
            { id: 'fazit', title: 'Fazit' },
        ],
        content: [
            { id: 'wann', heading: 'Wann sollte man den Rasen neu anlegen?', content: '<p>Ein <strong>kompletter Neuanfang</strong> lohnt sich, wenn:</p><ul><li>Mehr als 50% der Fläche aus Moos und Unkraut besteht</li><li>Der Boden verdichtet und wasserundurchlässig ist</li><li>Unebenheiten das Mähen unmöglich machen</li><li>Nach einem Hausbau der Garten erstmals angelegt wird</li></ul><p><strong>Beste Zeit:</strong> April bis Mai oder September. Im Frühling hat der Rasen die ganze Saison zum Einwachsen, im Herbst profitiert er von Feuchtigkeit und milden Temperaturen.</p>' },
            { id: 'kosten', heading: 'Kosten im Überblick', content: '<table><thead><tr><th>Leistung</th><th>DIY</th><th>Vom Profi</th></tr></thead><tbody><tr><td><strong>Alten Rasen entfernen</strong></td><td>Eigene Arbeit</td><td>3-5 €/m²</td></tr><tr><td><strong>Boden fräsen & planieren</strong></td><td>Maschinenmiete 80-150€</td><td>4-6 €/m²</td></tr><tr><td><strong>Rasenerde aufbringen</strong></td><td>3-5 €/m²</td><td>5-8 €/m²</td></tr><tr><td><strong>Aussaat</strong></td><td>0,50-2 €/m²</td><td>2-3 €/m²</td></tr><tr><td><strong>Rollrasen</strong></td><td>5-9 €/m²</td><td>8-12 €/m²</td></tr><tr><td><strong>Gesamt (100m² Aussaat)</strong></td><td><strong>350-700 €</strong></td><td><strong>1.400-2.200 €</strong></td></tr><tr><td><strong>Gesamt (100m² Rollrasen)</strong></td><td><strong>800-1.400 €</strong></td><td><strong>2.000-3.100 €</strong></td></tr></tbody></table><p><strong>Unser Tipp:</strong> Die Bodenvorbereitung ist der teuerste Teil — und gleichzeitig der wichtigste. Sparen Sie hier nicht, sonst haben Sie in 2 Jahren das gleiche Problem.</p>' },
            { id: 'ablauf', heading: 'Schritt für Schritt Ablauf', content: '<ol><li><strong>Alten Bewuchs entfernen:</strong> Gras, Moos und Unkraut mit einer Schälmaschine oder Fräse abtragen. Bei starkem Unkraut 2-3 Wochen vorher mit Unkrautvernichter behandeln.</li><li><strong>Boden fräsen:</strong> 15-20 cm tief umgraben. Steine, Wurzeln und Bauabfälle entfernen.</li><li><strong>Drainage prüfen:</strong> Staut sich Wasser? Dann Sand einarbeiten (5-10 kg/m²) oder eine Drainage verlegen.</li><li><strong>Rasenerde aufbringen:</strong> 2-3 cm Schicht hochwertiger Rasenerde aufbringen und einarbeiten.</li><li><strong>Planieren:</strong> Mit einer Walze oder einem Brett die Fläche ebnen. Kleine Unebenheiten rächen sich später beim Mähen!</li><li><strong>Aussaat oder Rollrasen:</strong> Bei Aussaat: 25-30g/m² gleichmäßig verteilen, leicht einharken, walzen und wässern. Bei Rollrasen: innerhalb von 24 Stunden nach Lieferung verlegen.</li><li><strong>Wässern:</strong> In den ersten 3 Wochen täglich wässern — der Boden darf nie austrocknen!</li></ol>' },
            { id: 'fehler', heading: 'Die 5 häufigsten Fehler', content: '<table><thead><tr><th>Fehler</th><th>Folge</th><th>Lösung</th></tr></thead><tbody><tr><td><strong>Zu wenig Bodenvorbereitung</strong></td><td>Rasen wächst ungleichmäßig</td><td>Mindestens 15 cm tief fräsen</td></tr><tr><td><strong>Billiges Saatgut</strong></td><td>Viel Unkraut, wenig Gras</td><td>RSM-zertifiziertes Saatgut verwenden</td></tr><tr><td><strong>Zu wenig wässern</strong></td><td>Keimung stoppt komplett</td><td>3 Wochen lang täglich wässern</td></tr><tr><td><strong>Zu früh betreten</strong></td><td>Junge Halme werden zerstört</td><td>6-8 Wochen warten</td></tr><tr><td><strong>Zu kurz mähen</strong></td><td>Rasen wird geschwächt</td><td>Erster Schnitt auf 6-7 cm</td></tr></tbody></table>' },
            { id: 'fazit', heading: 'Fazit', content: '<div class="fazit-box"><p><strong>Rasen neu anlegen ist kein Hexenwerk</strong> — aber die Bodenvorbereitung entscheidet über Erfolg oder Misserfolg. Investieren Sie 80% Ihrer Zeit und Ihres Budgets in den Unterbau. Dann haben Sie jahrelang Freude an einem satten, grünen Rasen.</p></div><p>Sie möchten Ihren Rasen professionell neu anlegen lassen? Wir beraten Sie kostenlos und erstellen ein unverbindliches Angebot — von der Bodenvorbereitung bis zum fertigen Rasen.</p>' },
        ],
        faqs: [
            { q: 'Was kostet Rasen neu anlegen lassen?', a: 'Vom Profi komplett angelegt kostet ein neuer Rasen mit Aussaat ca. 14-22 €/m², mit Rollrasen ca. 20-31 €/m². Für einen 100m² Garten liegt der Gesamtpreis zwischen 1.400 und 3.100 Euro inklusive Bodenvorbereitung.' },
            { q: 'Wie lange dauert es, bis neuer Rasen wächst?', a: 'Bei Aussaat: Erste Keimung nach 7-14 Tagen, begehbar nach 6-8 Wochen, voll belastbar nach 3 Monaten. Bei Rollrasen: Sofort grün, begehbar nach 2-3 Wochen.' },
            { q: 'Kann man alten Rasen einfach umgraben?', a: 'Ja, aber besser ist es, den alten Rasen vorher mit einer Schälmaschine abzutragen. Umgegraben verrottet er zwar im Boden, kann aber Unebenheiten und Unkraut verursachen.' },
            { q: 'Welches Saatgut ist am besten?', a: 'Verwenden Sie RSM-zertifiziertes Saatgut (Regel-Saatgut-Mischungen). Für Hausgärten empfehlen wir RSM 2.3 (Gebrauchsrasen Spielrasen) — robust, trittfest und pflegeleicht.' },
        ],
        relatedServices: ['rollrasen', 'gartenpflege', 'garten-und-landschaftsbau'],
    },

    // ========================================================================
    // ARTIKEL 13: Mähroboter Vor- und Nachteile
    // ========================================================================
    {
        slug: 'maehroboter-vor-nachteile',
        title: 'Mähroboter: Lohnt sich das? Ehrliche Vor- & Nachteile',
        metaTitle: 'Mähroboter: Lohnt sich das? Ehrliche Vor- & Nachteile 2026',
        metaDescription: 'Mähroboter kaufen oder nicht? ✓ Ehrliche Vor- und Nachteile ✓ Kosten ✓ Für welche Gärten geeignet ✓ Profi-Einschätzung.',
        excerpt: 'Mähroboter versprechen den perfekten Rasen ohne Arbeit. Aber stimmt das wirklich? Wir teilen unsere ehrliche Einschätzung nach 15 Jahren Erfahrung.',
        category: 'Vergleich',
        publishDate: '2026-05-21',
        readingTime: 8,
        keywords: ['Mähroboter Vorteile Nachteile', 'Mähroboter Erfahrungen', 'Mähroboter lohnt sich', 'Rasenroboter Test'],
        tableOfContents: [
            { id: 'vorteile', title: 'Die echten Vorteile' },
            { id: 'nachteile', title: 'Die Nachteile die keiner erwähnt' },
            { id: 'kosten', title: 'Was kostet ein Mähroboter wirklich?' },
            { id: 'geeignet', title: 'Für welche Gärten geeignet?' },
            { id: 'fazit', title: 'Unser Fazit' },
        ],
        content: [
            { id: 'vorteile', heading: 'Die echten Vorteile', content: '<p>Nach hunderten Kundengärten — hier sind die <strong>tatsächlichen Vorteile</strong>:</p><ul><li><strong>Zeitersparnis:</strong> Der Roboter mäht autonom, Sie haben Wochenende frei. Bei 200m² sparen Sie ca. 2 Stunden pro Woche.</li><li><strong>Bessere Rasenqualität:</strong> Durch tägliches Mähen in Millimeter-Schritten wird der Rasen dichter und satter. Das Schnittgut bleibt als Mulch liegen und düngt natürlich.</li><li><strong>Leise:</strong> Die meisten Mähroboter sind unter 60 dB — Sie können sie nachts oder am Sonntag laufen lassen, ohne die Nachbarn zu stören.</li><li><strong>Kein Rasenschnitt entsorgen:</strong> Da der Roboter nur Millimeter abschneidet, bleibt das Schnittgut als feiner Mulch auf dem Rasen.</li></ul>' },
            { id: 'nachteile', heading: 'Die Nachteile die keiner erwähnt', content: '<p>Und hier die <strong>ehrlichen Nachteile</strong>, die in der Werbung fehlen:</p><ul><li><strong>Igel-Gefahr:</strong> Mähroboter die nachts fahren können Igel verletzen oder töten. Lassen Sie den Roboter nie nach Einbruch der Dunkelheit laufen!</li><li><strong>Begrenzungsdraht:</strong> Bei den meisten Modellen müssen Sie einen Draht im Boden verlegen — das dauert bei 200m² ca. 3-4 Stunden und kostet oft 300-500€ für die Installation.</li><li><strong>Hanglagen:</strong> Ab 25% Steigung wird es für viele Roboter kritisch. Premium-Modelle schaffen 35-45%, aber die kosten 2.000€+.</li><li><strong>Kein Kantenschnitt:</strong> Der Roboter kommt nicht an Mauern, Beete und Zäune heran. Sie brauchen trotzdem einen Kantentrimmer.</li><li><strong>Diebstahl:</strong> Mähroboter werden gestohlen. GPS-Tracking und PIN-Schutz sind Pflicht.</li><li><strong>Wartung:</strong> Messer alle 4-8 Wochen wechseln, Reinigung, Software-Updates. Ganz wartungsfrei ist er nicht.</li></ul>' },
            { id: 'kosten', heading: 'Was kostet ein Mähroboter wirklich?', content: '<table><thead><tr><th>Position</th><th>Einstieg</th><th>Mittelklasse</th><th>Premium</th></tr></thead><tbody><tr><td><strong>Roboter</strong></td><td>600-900 €</td><td>1.000-1.500 €</td><td>2.000-3.500 €</td></tr><tr><td><strong>Installation</strong></td><td>200-400 €</td><td>300-500 €</td><td>500-800 €</td></tr><tr><td><strong>Garage/Überdachung</strong></td><td>50-100 €</td><td>100-200 €</td><td>200-400 €</td></tr><tr><td><strong>Jährliche Wartung</strong></td><td>50-80 €</td><td>80-120 €</td><td>100-150 €</td></tr><tr><td><strong>Gesamt Jahr 1</strong></td><td><strong>900-1.480 €</strong></td><td><strong>1.480-2.320 €</strong></td><td><strong>2.800-4.850 €</strong></td></tr></tbody></table><p><strong>Zum Vergleich:</strong> Ein professioneller Rasenmäh-Service kostet ca. 30-50€ pro Einsatz. Bei wöchentlichem Mähen sind das 1.200-2.000€/Jahr. Ein Mähroboter amortisiert sich also nach 1-2 Jahren.</p>' },
            { id: 'geeignet', heading: 'Für welche Gärten geeignet?', content: '<p><strong>Ideal für:</strong></p><ul><li>Rasenflächen ab 100m² bis ca. 2.000m²</li><li>Relativ ebene Gärten ohne extreme Steigungen</li><li>Gärten ohne viele verwinkelte Ecken und Engstellen</li><li>Berufstätige die keine Zeit zum Mähen haben</li></ul><p><strong>Weniger geeignet für:</strong></p><ul><li>Sehr kleine Gärten unter 50m² (da lohnt sich die Investition nicht)</li><li>Stark hügelige oder terrassierte Gärten</li><li>Gärten mit vielen Bäumen, Beeten und Hindernissen</li><li>Gärten mit Kindern die viel Spielzeug auf dem Rasen liegen lassen</li></ul>' },
            { id: 'fazit', heading: 'Unser Fazit', content: '<div class="fazit-box"><p><strong>Ein Mähroboter ist kein Ersatz für Gartenpflege</strong> — er ist ein Werkzeug, das Ihnen das Mähen abnimmt. Sie brauchen trotzdem: Kantentrimmer, Vertikutierer, Dünger und jemanden der den Roboter wartet.</p><p>Für Berufstätige mit 200-500m² Rasen ist ein Mähroboter aber eine <strong>hervorragende Investition</strong>. Der Rasen wird tatsächlich besser als beim wöchentlichen Mähen.</p></div>' },
        ],
        faqs: [
            { q: 'Lohnt sich ein Mähroboter für kleine Gärten?', a: 'Ab ca. 100m² Rasenfläche lohnt sich ein Mähroboter finanziell und zeitlich. Unter 50m² ist ein normaler Akku-Mäher die bessere Wahl — schneller, günstiger und flexibler.' },
            { q: 'Sind Mähroboter gefährlich für Igel?', a: 'Ja, besonders nachts. Igel rollen sich bei Gefahr zusammen statt zu fliehen. Lassen Sie den Roboter nie nach Einbruch der Dunkelheit laufen. Tagsüber sind Igel in der Regel nicht aktiv.' },
            { q: 'Wie laut ist ein Mähroboter?', a: 'Die meisten Modelle liegen zwischen 55-65 dB — vergleichbar mit einem Gespräch in normaler Lautstärke. Zum Vergleich: Ein Benzinrasenmäher erreicht 90-100 dB.' },
            { q: 'Muss man einen Mähroboter im Winter einlagern?', a: 'Ja. Ab Oktober den Roboter reinigen, die Messer wechseln, den Akku auf ca. 50-70% laden und frostfrei überwintern. Im Frühling den Begrenzungsdraht prüfen und den Roboter neu kalibrieren.' },
        ],
        relatedServices: ['gartenpflege', 'rollrasen', 'garten-und-landschaftsbau'],
    },

    // ========================================================================
    // ARTIKEL 14: Braune Flecken im Rasen
    // ========================================================================
    {
        slug: 'rasen-braune-flecken',
        title: 'Braune Flecken im Rasen? 7 Ursachen & Lösungen',
        metaTitle: 'Braune Flecken im Rasen: 7 Ursachen & was wirklich hilft 2026',
        metaDescription: 'Braune Flecken im Rasen? ✓ 7 häufige Ursachen ✓ Schnelle Lösungen ✓ Wann zum Profi? Diagnose-Guide vom Gartenbauer.',
        excerpt: 'Braune Flecken im Rasen sind ärgerlich aber meist leicht zu beheben. Wir zeigen die 7 häufigsten Ursachen und was Sie konkret tun können.',
        category: 'Ratgeber',
        publishDate: '2026-05-24',
        readingTime: 7,
        keywords: ['Rasen braune Flecken', 'Rasen trockene Stellen', 'Rasen wird braun', 'gelbe Flecken Rasen'],
        tableOfContents: [
            { id: 'trockenheit', title: '1. Trockenheit' },
            { id: 'pilz', title: '2. Pilzkrankheiten' },
            { id: 'duenger', title: '3. Überdüngung' },
            { id: 'hund', title: '4. Hundeurin' },
            { id: 'insekten', title: '5. Engerlinge & Insekten' },
            { id: 'maehen', title: '6. Zu kurz gemäht' },
            { id: 'verdichtung', title: '7. Bodenverdichtung' },
            { id: 'fazit', title: 'Schnell-Diagnose' },
        ],
        content: [
            { id: 'trockenheit', heading: '1. Trockenheit — die häufigste Ursache', content: '<p><strong>Symptome:</strong> Gleichmäßig braune, strohige Flächen. Gras federt beim Betreten nicht zurück.</p><p><strong>Lösung:</strong></p><ul><li>2x pro Woche durchdringend wässern (15-20 Liter/m²)</li><li>Morgens vor 9 Uhr wässern — nie in der Mittagshitze</li><li>Schnitthöhe auf 5 cm anheben</li></ul><p><strong>Prognose:</strong> Erholt sich nach Regen oder Bewässerung innerhalb von 1-2 Wochen vollständig.</p>' },
            { id: 'pilz', heading: '2. Pilzkrankheiten', content: '<p><strong>Symptome:</strong> Runde, scharf begrenzte braune Flecken (10-30 cm). Oft mit weißlichem Rand. Typisch bei feuchtwarmem Wetter.</p><p><strong>Häufige Pilze:</strong></p><ul><li><strong>Schneeschimmel:</strong> Runde Flecken im Frühjahr nach Schneeschmelze</li><li><strong>Rotspitzigkeit:</strong> Rosa-rötliche Fäden an den Grashalmen</li><li><strong>Dollar Spot:</strong> Kleine münzgroße braune Flecken</li></ul><p><strong>Lösung:</strong> Vertikutieren für bessere Belüftung, nicht abends wässern, Stickstoffdüngung. Bei starkem Befall: fungizidhaltige Rasendünger.</p>' },
            { id: 'duenger', heading: '3. Überdüngung (Dünger-Brand)', content: '<p><strong>Symptome:</strong> Scharf begrenzte braune Streifen entlang der Dünge-Bahnen. Verbranntes, gelb-braunes Gras.</p><p><strong>Lösung:</strong></p><ul><li>Sofort intensiv wässern (30-40 Liter/m²) um den Dünger auszuschwemmen</li><li>2-3 Tage hintereinander wässern</li><li>Beim nächsten Mal: Streuwagen verwenden, nie von Hand düngen</li></ul><p><strong>Prognose:</strong> Bei leichter Verbrennung erholt sich der Rasen in 2-3 Wochen. Bei starker Verbrennung: Nachsäen nötig.</p>' },
            { id: 'hund', heading: '4. Hundeurin', content: '<p><strong>Symptome:</strong> Kleine runde Flecken (15-25 cm) mit dunkelgrünem Ring drumherum. Das Zentrum ist braun und tot.</p><p><strong>Warum:</strong> Hundeurin enthält extrem viel Stickstoff — wie eine lokale Überdüngung.</p><p><strong>Lösung:</strong></p><ul><li>Betroffene Stelle sofort mit viel Wasser spülen</li><li>Tote Stellen aufharken und nachsäen</li><li>Vorbeugend: Dem Hund einen festen Bereich zuweisen</li></ul>' },
            { id: 'insekten', heading: '5. Engerlinge & Insekten', content: '<p><strong>Symptome:</strong> Rasen lässt sich wie ein Teppich anheben — die Wurzeln sind abgefressen. Vögel hacken vermehrt im Rasen.</p><p><strong>Ursache:</strong> Engerlinge (Larven von Maikäfer, Junikäfer) oder Wiesenschnaken-Larven (Tipula) fressen die Graswurzeln.</p><p><strong>Lösung:</strong></p><ul><li>Biologisch: Nematoden (SC-Nematoden gegen Engerlinge) im August/September ausbringen</li><li>Rasen vertikutieren und nachsäen</li><li>Bei starkem Befall: Professionelle Behandlung empfohlen</li></ul>' },
            { id: 'maehen', heading: '6. Zu kurz gemäht (Skalpierung)', content: '<p><strong>Symptome:</strong> Großflächig gelblich-braune Flächen nach dem Mähen. Besonders auf Hügeln und Unebenheiten.</p><p><strong>Lösung:</strong></p><ul><li>Nie mehr als 1/3 der Halmlänge auf einmal abschneiden</li><li>Minimum 3,5 cm Schnitthöhe, im Sommer 5 cm</li><li>Unebenheiten mit Rasenerde auffüllen</li></ul>' },
            { id: 'verdichtung', heading: '7. Bodenverdichtung', content: '<p><strong>Symptome:</strong> Braune Stellen an stark belaufenen Bereichen (Spielbereich der Kinder, Weg zur Garage). Wasser steht nach Regen.</p><p><strong>Lösung:</strong></p><ul><li>Aerifizieren: Mit einer Grabegabel alle 10-15 cm einstechen</li><li>Sand einarbeiten (5-10 kg/m²)</li><li>Besonders stark belastete Stellen: Trittplatten oder Rasengittersteine verwenden</li></ul>' },
            { id: 'fazit', heading: 'Schnell-Diagnose', content: '<table><thead><tr><th>Muster</th><th>Wahrscheinliche Ursache</th><th>Erste Hilfe</th></tr></thead><tbody><tr><td>Gleichmäßig braun</td><td>Trockenheit</td><td>Intensiv wässern</td></tr><tr><td>Runde Flecken mit Rand</td><td>Pilz</td><td>Vertikutieren, morgens wässern</td></tr><tr><td>Streifen entlang Bahnen</td><td>Dünger-Brand</td><td>Sofort spülen</td></tr><tr><td>Kleine Kreise, grüner Ring</td><td>Hundeurin</td><td>Wasser, nachsäen</td></tr><tr><td>Rasen hebt sich ab</td><td>Engerlinge</td><td>Nematoden</td></tr><tr><td>Braun nach dem Mähen</td><td>Zu kurz gemäht</td><td>Höher mähen</td></tr><tr><td>Braun an Laufwegen</td><td>Verdichtung</td><td>Aerifizieren</td></tr></tbody></table>' },
        ],
        faqs: [
            { q: 'Erholt sich brauner Rasen von alleine?', a: 'Bei Trockenheit: Ja, nach Regen oder Bewässerung innerhalb von 1-2 Wochen. Bei Pilzbefall oder Engerlingen: Nur mit Behandlung. Bei Skalpierung: Oft Nachsaat nötig.' },
            { q: 'Wann sollte man einen Profi rufen?', a: 'Wenn sich die braunen Flecken trotz Bewässerung ausbreiten, der Rasen sich wie ein Teppich abheben lässt, oder Sie den Grund nicht identifizieren können.' },
            { q: 'Kann man braune Stellen einfach nachsäen?', a: 'Ja, aber erst die Ursache beheben! Sonst werden auch die neuen Halme braun. Tote Stellen aufharken, Rasenerde aufbringen, nachsäen und 3 Wochen feucht halten.' },
        ],
        relatedServices: ['gartenpflege', 'rollrasen', 'garten-und-landschaftsbau'],
    },

    // ========================================================================
    // ARTIKEL 15: Obstbäume schneiden
    // ========================================================================
    {
        slug: 'obstbaum-schneiden-anleitung',
        title: 'Obstbäume richtig schneiden: Anleitung für Anfänger',
        metaTitle: 'Obstbäume schneiden: Wann & wie? Anleitung für Anfänger 2026',
        metaDescription: 'Obstbaum richtig schneiden? ✓ Zeitpunkt ✓ Schritt-für-Schritt ✓ Apfelbaum, Kirsche, Pflaume ✓ Die 5 häufigsten Fehler vermeiden.',
        excerpt: 'Obstbäume schneiden ist einfacher als gedacht — wenn man weiß, wann und wie. Unsere Schritt-für-Schritt-Anleitung für gesunde, ertragreiche Bäume.',
        category: 'Ratgeber',
        publishDate: '2026-05-27',
        readingTime: 10,
        keywords: ['Obstbaum schneiden wann', 'Apfelbaum schneiden Anleitung', 'Obstbaumschnitt', 'Kirschbaum schneiden'],
        tableOfContents: [
            { id: 'wann', title: 'Wann Obstbäume schneiden?' },
            { id: 'werkzeug', title: 'Das richtige Werkzeug' },
            { id: 'grundregeln', title: 'Die 5 Grundregeln' },
            { id: 'apfel', title: 'Apfelbaum schneiden' },
            { id: 'kirsche', title: 'Kirschbaum schneiden' },
            { id: 'fehler', title: 'Häufige Fehler' },
        ],
        content: [
            { id: 'wann', heading: 'Wann Obstbäume schneiden?', content: '<table><thead><tr><th>Obstart</th><th>Bester Zeitpunkt</th><th>Warum</th></tr></thead><tbody><tr><td><strong>Apfel, Birne</strong></td><td>Januar – März</td><td>Im Winterschlaf verheilen Schnittwunden am besten</td></tr><tr><td><strong>Kirsche, Pflaume</strong></td><td>Juni – August (nach Ernte)</td><td>Steinobst ist anfällig für Pilze bei Winterschnitt</td></tr><tr><td><strong>Walnuss</strong></td><td>August – September</td><td>Blutet stark bei Winterschnitt</td></tr><tr><td><strong>Beerensträucher</strong></td><td>Oktober – Februar</td><td>Alte Triebe entfernen fördert Neuwuchs</td></tr></tbody></table><p><strong>Goldene Regel:</strong> Kernobst (Apfel, Birne) im Winter, Steinobst (Kirsche, Pflaume) im Sommer!</p>' },
            { id: 'werkzeug', heading: 'Das richtige Werkzeug', content: '<ul><li><strong>Bypass-Schere:</strong> Für Äste bis 2 cm Durchmesser (sauberer Schnitt, quetscht nicht)</li><li><strong>Astschere:</strong> Für Äste 2-5 cm</li><li><strong>Klappsäge:</strong> Für Äste über 5 cm</li><li><strong>Wundverschluss:</strong> Nicht nötig! Moderne Forschung zeigt: Bäume verschließen Wunden selbst besser ohne Paste</li></ul><p><strong>Wichtig:</strong> Werkzeug vor jedem Baum desinfizieren (Spiritus oder 70% Alkohol). So verhindern Sie die Übertragung von Krankheiten.</p>' },
            { id: 'grundregeln', heading: 'Die 5 Grundregeln', content: '<ol><li><strong>Totes und Krankes zuerst:</strong> Trockene, beschädigte und von Pilz befallene Äste immer entfernen</li><li><strong>Konkurrenztriebe entfernen:</strong> Wenn zwei Äste parallel wachsen oder sich kreuzen — den schwächeren entfernen</li><li><strong>Innen lichten:</strong> Licht und Luft müssen ins Innere der Krone gelangen. Nur so reifen Früchte gleichmäßig</li><li><strong>Auf Astring schneiden:</strong> Immer direkt am Astring (der Verdickung am Astansatz) schneiden, keine Stummel lassen</li><li><strong>Nie mehr als 20% entfernen:</strong> Zu starker Schnitt stresst den Baum und löst Wasserschosse aus</li></ol>' },
            { id: 'apfel', heading: 'Apfelbaum schneiden — Schritt für Schritt', content: '<ol><li><strong>Totholz entfernen:</strong> Alle trockenen, abgestorbenen Äste herausschneiden</li><li><strong>Steil nach oben wachsende Triebe entfernen:</strong> Diese „Wasserschosse" tragen keine Früchte und nehmen Licht</li><li><strong>Sich kreuzende Äste:</strong> Den schwächeren oder nach innen wachsenden Ast entfernen</li><li><strong>Zu dichte Bereiche lichten:</strong> Nach dem Schnitt sollte „ein Vogel durch die Krone fliegen können"</li><li><strong>Leittriebe einkürzen:</strong> Die Hauptäste um 1/3 des letztjährigen Zuwachses einkürzen — immer auf eine nach außen zeigende Knospe</li></ol>' },
            { id: 'kirsche', heading: 'Kirschbaum schneiden', content: '<p><strong>Wichtig:</strong> Kirschen werden im Sommer geschnitten — direkt nach der Ernte! Bei Winterschnitt drohen Pilzinfektionen.</p><ul><li>Abgetragene Fruchttriebe auf junge Seitentriebe ableiten</li><li>Krone lichten, damit Kirschen gleichmäßig reifen</li><li>Sauerkirschen stärker schneiden als Süßkirschen (fruchten am einjährigen Holz)</li></ul>' },
            { id: 'fehler', heading: 'Die häufigsten Fehler', content: '<table><thead><tr><th>Fehler</th><th>Folge</th></tr></thead><tbody><tr><td>Kirschbaum im Winter schneiden</td><td>Pilzbefall (Monilia, Gummifluss)</td></tr><tr><td>Stummel stehen lassen</td><td>Faulen ab, Eintrittspforte für Krankheiten</td></tr><tr><td>Zu viel auf einmal schneiden</td><td>Massenhaft Wasserschosse im nächsten Jahr</td></tr><tr><td>Stumpfes Werkzeug</td><td>Gequetschte Schnittstellen heilen schlecht</td></tr><tr><td>Werkzeug nicht desinfizieren</td><td>Krankheiten von Baum zu Baum übertragen</td></tr></tbody></table>' },
        ],
        faqs: [
            { q: 'Wann schneidet man einen Apfelbaum?', a: 'Idealerweise zwischen Januar und März, bei frostfreiem Wetter. Der Baum ist im Winterschlaf und verheilt die Schnittwunden am besten.' },
            { q: 'Kann man beim Obstbaumschnitt etwas falsch machen?', a: 'Die häufigsten Fehler: Zu viel auf einmal entfernen, Stummel stehen lassen, und Kirschbäume im Winter statt im Sommer schneiden. Mit unseren 5 Grundregeln vermeiden Sie die schlimmsten Fehler.' },
            { q: 'Muss man Schnittwunden versiegeln?', a: 'Nein. Moderne Forschung zeigt, dass Bäume Wunden am besten selbst verschließen. Wundverschlusspaste kann sogar schaden, da sie Feuchtigkeit einschließt.' },
        ],
        relatedServices: ['baumpflege', 'gartenpflege', 'garten-und-landschaftsbau'],
    },

    // ========================================================================
    // ARTIKEL 16: Terrasse planen
    // ========================================================================
    {
        slug: 'terrasse-planen-groesse-ausrichtung',
        title: 'Terrasse planen: Die richtige Größe & Ausrichtung',
        metaTitle: 'Terrasse planen: Größe berechnen, Ausrichtung & Profi-Tipps 2026',
        metaDescription: 'Terrasse planen? ✓ Richtige Größe berechnen ✓ Beste Ausrichtung ✓ Material wählen ✓ Häufige Planungsfehler vermeiden. Profi-Guide.',
        excerpt: 'Die perfekte Terrasse beginnt mit der richtigen Planung. Wir zeigen, wie Sie die optimale Größe, Ausrichtung und das Material bestimmen.',
        category: 'Ratgeber',
        publishDate: '2026-05-30',
        readingTime: 8,
        keywords: ['Terrasse planen', 'Terrasse Größe berechnen', 'Terrasse Ausrichtung', 'Terrasse bauen Planung'],
        tableOfContents: [
            { id: 'groesse', title: 'Die richtige Größe' },
            { id: 'ausrichtung', title: 'Himmelsrichtung & Ausrichtung' },
            { id: 'material', title: 'Material wählen' },
            { id: 'fehler', title: 'Die 5 größten Planungsfehler' },
            { id: 'kosten', title: 'Kosten-Überblick' },
        ],
        content: [
            { id: 'groesse', heading: 'Die richtige Größe', content: '<p>Die häufigste Frage: <strong>Wie groß sollte die Terrasse sein?</strong> Unsere Faustformel:</p><table><thead><tr><th>Nutzung</th><th>Empfohlene Größe</th></tr></thead><tbody><tr><td>2 Personen, Kaffeetisch</td><td>8-12 m²</td></tr><tr><td>4 Personen, Esstisch</td><td>12-16 m²</td></tr><tr><td>6+ Personen, Esstisch + Lounge</td><td>20-30 m²</td></tr><tr><td>Große Grillterrasse</td><td>30-50 m²</td></tr></tbody></table><p><strong>Faustregel:</strong> Pro Person ca. 3-4 m² einplanen. Lieber etwas größer als zu klein — eine Terrasse nachträglich zu vergrößern ist teuer und optisch oft unbefriedigend.</p>' },
            { id: 'ausrichtung', heading: 'Himmelsrichtung & Ausrichtung', content: '<table><thead><tr><th>Ausrichtung</th><th>Sonnenstunden</th><th>Ideal für</th></tr></thead><tbody><tr><td><strong>Süden</strong></td><td>Ganztags Sonne</td><td>Sonnenanbeter, Markise empfohlen</td></tr><tr><td><strong>Westen</strong></td><td>Ab Mittag Sonne</td><td>Feierabend-Genießer, Abendsonne!</td></tr><tr><td><strong>Osten</strong></td><td>Morgens Sonne</td><td>Frühstücker, im Sommer angenehm</td></tr><tr><td><strong>Norden</strong></td><td>Kaum direkte Sonne</td><td>Hitzeempfindliche, schattig & kühl</td></tr></tbody></table><p><strong>Unser Favorit:</strong> Südwest-Ausrichtung — Sie haben den ganzen Nachmittag und Abend Sonne, ohne in der Mittagshitze zu braten.</p>' },
            { id: 'material', heading: 'Material wählen', content: '<table><thead><tr><th>Material</th><th>Kosten/m²</th><th>Haltbarkeit</th><th>Pflege</th></tr></thead><tbody><tr><td><strong>Betonplatten</strong></td><td>15-50 €</td><td>20-30 Jahre</td><td>Gering</td></tr><tr><td><strong>Naturstein</strong></td><td>40-120 €</td><td>50-100 Jahre</td><td>Gering</td></tr><tr><td><strong>Holz (Douglasie)</strong></td><td>25-45 €</td><td>10-20 Jahre</td><td>Hoch (ölen)</td></tr><tr><td><strong>Holz (Bangkirai)</strong></td><td>50-90 €</td><td>20-30 Jahre</td><td>Mittel</td></tr><tr><td><strong>WPC</strong></td><td>40-80 €</td><td>20-30 Jahre</td><td>Gering</td></tr></tbody></table>' },
            { id: 'fehler', heading: 'Die 5 größten Planungsfehler', content: '<ol><li><strong>Zu klein geplant:</strong> Viele planen nur den Tisch ein und vergessen Stuhlrückfläche, Durchgänge und Lounge-Bereich.</li><li><strong>Kein Gefälle:</strong> Eine Terrasse braucht 2% Gefälle vom Haus weg, sonst steht Wasser an der Hauswand.</li><li><strong>Falsches Material für Südterrasse:</strong> Dunkle WPC-Dielen werden in der Sonne 60°C heiß — barfuß unbenutzbar!</li><li><strong>Keine Beleuchtung eingeplant:</strong> Leerrohre für Strom sind im Nachhinein extrem teuer. Vorher planen!</li><li><strong>Unterbau gespart:</strong> Ein schlechter Unterbau führt zu absackenden Platten und Pfützen.</li></ol>' },
            { id: 'kosten', heading: 'Kosten-Überblick', content: '<table><thead><tr><th>Terrassengröße</th><th>Einfach (Beton)</th><th>Mittel (WPC/Holz)</th><th>Premium (Naturstein)</th></tr></thead><tbody><tr><td><strong>15 m²</strong></td><td>1.500-3.000 €</td><td>3.000-5.000 €</td><td>5.000-9.000 €</td></tr><tr><td><strong>25 m²</strong></td><td>2.500-5.000 €</td><td>5.000-8.500 €</td><td>8.500-15.000 €</td></tr><tr><td><strong>40 m²</strong></td><td>4.000-8.000 €</td><td>8.000-14.000 €</td><td>14.000-24.000 €</td></tr></tbody></table><p>Preise inkl. Unterbau, Material und Verlegung durch den Profi.</p>' },
        ],
        faqs: [
            { q: 'Wie groß sollte eine Terrasse für 4 Personen sein?', a: 'Mindestens 12-16 m². Planen Sie 3-4 m² pro Person plus Platz für den Durchgang. Wenn Sie zusätzlich eine Lounge aufstellen möchten, rechnen Sie 20-25 m².' },
            { q: 'Braucht man eine Baugenehmigung für eine Terrasse?', a: 'In den meisten Bundesländern ist eine ebenerdige Terrasse genehmigungsfrei. Erhöhte Terrassen (über 50-100 cm, je nach Landesbauordnung) können genehmigungspflichtig sein.' },
            { q: 'Welches Material ist am besten für die Terrasse?', a: 'Es kommt auf Ihre Prioritäten an: Naturstein für maximale Langlebigkeit und Optik, WPC für Pflegeleichtigkeit, Holz für natürliche Wärme. Unser Favorit: Geflämmter Granit oder Thermoeiche.' },
        ],
        relatedServices: ['terrassenbau', 'pflasterarbeiten', 'garten-und-landschaftsbau'],
    },

    // ========================================================================
    // ARTIKEL 17: Bewässerungssystem Garten
    // ========================================================================
    {
        slug: 'garten-bewaesserung-system',
        title: 'Gartenbewässerung: Welches System passt zu Ihnen?',
        metaTitle: 'Gartenbewässerung: Automatische Systeme im Vergleich 2026',
        metaDescription: 'Garten automatisch bewässern? ✓ Systeme im Vergleich ✓ Kosten ✓ Installation ✓ Tropfbewässerung vs. Sprinkler. Profi-Guide.',
        excerpt: 'Nie wieder von Hand gießen — wir vergleichen die besten Bewässerungssysteme für jeden Garten und jedes Budget.',
        category: 'Ratgeber',
        publishDate: '2026-06-03',
        readingTime: 9,
        keywords: ['Garten Bewässerung automatisch', 'Bewässerungssystem Garten', 'Garten bewässern', 'Tropfbewässerung Garten'],
        tableOfContents: [
            { id: 'systeme', title: 'Die 4 Systeme im Überblick' },
            { id: 'kosten', title: 'Kosten-Vergleich' },
            { id: 'planung', title: 'Planung & Installation' },
            { id: 'tipps', title: 'Wasser sparen — 5 Profi-Tipps' },
        ],
        content: [
            { id: 'systeme', heading: 'Die 4 Systeme im Überblick', content: '<table><thead><tr><th>System</th><th>Ideal für</th><th>Vorteile</th><th>Nachteile</th></tr></thead><tbody><tr><td><strong>Versenkregner</strong></td><td>Große Rasenflächen</td><td>Unsichtbar im Boden, gleichmäßig</td><td>Teuer, Einbau aufwändig</td></tr><tr><td><strong>Tropfbewässerung</strong></td><td>Beete, Hecken, Gemüse</td><td>Wassersparend, gezielt</td><td>Verstopfungsgefahr</td></tr><tr><td><strong>Micro-Sprinkler</strong></td><td>Kleinere Beete, Balkon</td><td>Günstig, flexibel</td><td>Ungleichmäßig bei Wind</td></tr><tr><td><strong>Perlschlauch</strong></td><td>Hecken, Reihen</td><td>Sehr günstig, einfach</td><td>Begrenzte Reichweite</td></tr></tbody></table><p><strong>Unsere Empfehlung:</strong> Die meisten Gärten profitieren von einer <strong>Kombination</strong>: Versenkregner für den Rasen + Tropfbewässerung für Beete und Hecken. Gesteuert über einen Bewässerungscomputer mit Regensensor.</p>' },
            { id: 'kosten', heading: 'Kosten-Vergleich', content: '<table><thead><tr><th>System</th><th>Material (200m²)</th><th>Installation (Profi)</th><th>Gesamt</th></tr></thead><tbody><tr><td><strong>Versenkregner</strong></td><td>800-1.500 €</td><td>1.000-2.000 €</td><td>1.800-3.500 €</td></tr><tr><td><strong>Tropfbewässerung</strong></td><td>200-500 €</td><td>300-600 €</td><td>500-1.100 €</td></tr><tr><td><strong>Bewässerungscomputer</strong></td><td>50-300 €</td><td>inkl.</td><td>50-300 €</td></tr><tr><td><strong>Kombi-System</strong></td><td>1.200-2.500 €</td><td>1.500-3.000 €</td><td>2.700-5.500 €</td></tr></tbody></table><p><strong>Amortisation:</strong> Ein automatisches Bewässerungssystem spart 30-50% Wasser gegenüber Handgießen und erspart Ihnen 3-5 Stunden pro Woche im Sommer.</p>' },
            { id: 'planung', heading: 'Planung & Installation', content: '<ol><li><strong>Wasseranschluss prüfen:</strong> Sie brauchen mindestens 3 bar Wasserdruck und 1.500 l/h Durchflussmenge</li><li><strong>Zonen planen:</strong> Rasen, Beete, Hecken haben unterschiedlichen Wasserbedarf — separate Kreise anlegen</li><li><strong>Regnertypen wählen:</strong> Getrieberegner für große Flächen, Sprühregner für kleine Bereiche</li><li><strong>Leitungen verlegen:</strong> PE-Rohre 20-30 cm tief verlegen. Am besten beim Terrassenbau oder Gartenanlage gleich mit planen!</li><li><strong>Computer programmieren:</strong> Morgens 5-7 Uhr bewässern, 2-3x pro Woche, je 20-30 Min pro Zone</li></ol>' },
            { id: 'tipps', heading: 'Wasser sparen — 5 Profi-Tipps', content: '<ul><li><strong>Morgens gießen:</strong> Vor 7 Uhr verdunstet am wenigsten Wasser</li><li><strong>Regensensor:</strong> Kostet nur 20-40€ und verhindert Bewässerung bei Regen</li><li><strong>Mulchen:</strong> 5 cm Mulch auf Beeten reduziert den Wasserbedarf um 50%</li><li><strong>Richtige Pflanzen:</strong> Heimische Stauden brauchen weniger Wasser als exotische</li><li><strong>Lieber selten und viel:</strong> 2x pro Woche 20 Liter/m² ist besser als täglich 5 Liter</li></ul>' },
        ],
        faqs: [
            { q: 'Was kostet eine automatische Gartenbewässerung?', a: 'Ein Kombi-System (Versenkregner für Rasen + Tropfbewässerung für Beete) für einen 200m² Garten kostet komplett installiert 2.700-5.500 Euro. Einfache Tropfbewässerung für Beete gibt es ab 500 Euro.' },
            { q: 'Kann man eine Bewässerung nachträglich einbauen?', a: 'Ja, aber es ist deutlich aufwändiger. Die Leitungen müssen im bestehenden Rasen verlegt werden (Gräben ziehen). Ideal ist die Installation bei einem Neubau oder einer Gartenneuanlage.' },
            { q: 'Wie viel Wasser spart eine automatische Bewässerung?', a: 'Eine gut geplante automatische Bewässerung mit Regensensor spart 30-50% Wasser gegenüber Handgießen. Der Grund: gleichmäßige Verteilung, optimaler Zeitpunkt und keine Über- oder Unterbewässerung.' },
        ],
        relatedServices: ['gartenpflege', 'garten-und-landschaftsbau', 'rollrasen'],
    },

    // ========================================================================
    // ARTIKEL 18: Zaun Grundstücksgrenze Recht
    // ========================================================================
    {
        slug: 'zaun-hoehe-grenze-recht',
        title: 'Zaun an der Grundstücksgrenze: Höhe, Recht & Nachbarschaft',
        metaTitle: 'Zaun Grundstücksgrenze: Höhe, Recht & Nachbar-Regelung 2026',
        metaDescription: 'Zaun an der Grundstücksgrenze? ✓ Erlaubte Höhe ✓ Nachbarrecht ✓ Wer zahlt? ✓ Abstand. Alles was Sie rechtlich wissen müssen.',
        excerpt: 'Darf ich einen Zaun an die Grundstücksgrenze setzen? Wie hoch? Wer zahlt? Wir klären die wichtigsten Rechtsfragen.',
        category: 'Recht & Wissen',
        publishDate: '2026-06-09',
        readingTime: 8,
        keywords: ['Zaun Grundstücksgrenze', 'Zaun Höhe Vorschriften', 'Zaun Nachbarrecht', 'Einfriedungspflicht'],
        tableOfContents: [
            { id: 'grundlagen', title: 'Rechtliche Grundlagen' },
            { id: 'hoehe', title: 'Erlaubte Zaunhöhen' },
            { id: 'abstand', title: 'Abstand zur Grenze' },
            { id: 'kosten', title: 'Wer zahlt den Zaun?' },
            { id: 'streit', title: 'Streit mit dem Nachbarn vermeiden' },
        ],
        content: [
            { id: 'grundlagen', heading: 'Rechtliche Grundlagen', content: '<p>Das Zaunrecht ist in Deutschland <strong>Ländersache</strong> — jedes Bundesland hat eigene Nachbarrechtsgesetze. Zusätzlich können Gemeinden in ihrem <strong>Bebauungsplan</strong> weitere Vorschriften machen.</p><p><strong>Die drei Rechtsquellen:</strong></p><ol><li><strong>Nachbarrechtsgesetz</strong> des Bundeslandes (z.B. NNachbG für Niedersachsen)</li><li><strong>Bebauungsplan</strong> der Gemeinde (kann Zaunhöhen und -arten vorschreiben)</li><li><strong>BGB § 903-924</strong> (allgemeines Eigentumsrecht)</li></ol><p><strong>Wichtig:</strong> Prüfen Sie immer zuerst den Bebauungsplan Ihrer Gemeinde — dieser hat Vorrang vor allgemeinen Regelungen.</p>' },
            { id: 'hoehe', heading: 'Erlaubte Zaunhöhen', content: '<table><thead><tr><th>Bundesland</th><th>Max. Höhe (Wohngebiet)</th><th>Besonderheit</th></tr></thead><tbody><tr><td><strong>Niedersachsen</strong></td><td>1,20 m (ortsüblich)</td><td>Keine gesetzliche Maximalhöhe, ortsüblich entscheidet</td></tr><tr><td><strong>Hamburg</strong></td><td>1,20-1,50 m</td><td>Bebauungsplan entscheidend</td></tr><tr><td><strong>Schleswig-Holstein</strong></td><td>1,20 m</td><td>Einfriedungspflicht nur auf Verlangen des Nachbarn</td></tr><tr><td><strong>Allgemein</strong></td><td>1,20-1,80 m</td><td>Höhere Zäune oft genehmigungspflichtig</td></tr></tbody></table><p><strong>Faustregel:</strong> Bis 1,20 m sind Sie fast überall auf der sicheren Seite. Ab 1,80 m wird es in vielen Gemeinden genehmigungspflichtig. Sichtschutzzäune über 1,80 m sind oft nicht erlaubt.</p>' },
            { id: 'abstand', heading: 'Abstand zur Grenze', content: '<p>In den meisten Bundesländern darf ein Zaun <strong>direkt auf die Grundstücksgrenze</strong> gesetzt werden. Aber:</p><ul><li><strong>Auf der Grenze:</strong> Beide Nachbarn sind Eigentümer und müssen sich über Material und Kosten einigen</li><li><strong>Auf eigenem Grundstück:</strong> 50 cm Abstand zur Grenze ist empfehlenswert — für Wartung und um Streit zu vermeiden</li><li><strong>Fundament:</strong> Darf nicht ins Nachbargrundstück ragen</li></ul><p><strong>Unser Tipp:</strong> Setzen Sie den Zaun 10-20 cm auf Ihr Grundstück zurück. So haben Sie freie Hand bei Material und Gestaltung und vermeiden Nachbarschaftsstreit.</p>' },
            { id: 'kosten', heading: 'Wer zahlt den Zaun?', content: '<p>Das hängt davon ab, <strong>wer den Zaun will</strong> und wo er steht:</p><table><thead><tr><th>Situation</th><th>Wer zahlt?</th></tr></thead><tbody><tr><td>Zaun auf eigener Seite</td><td>Sie allein</td></tr><tr><td>Zaun auf der Grenze (gemeinsam)</td><td>Beide je 50%</td></tr><tr><td>Einfriedungspflicht (Nachbar verlangt)</td><td>Meist der Einfriedungspflichtige</td></tr><tr><td>Bestehender Zaun beschädigt</td><td>Wer den Schaden verursacht hat</td></tr></tbody></table><p><strong>Niedersachsen:</strong> In Niedersachsen gibt es eine Einfriedungspflicht auf Verlangen — wenn Ihr Nachbar einen Zaun verlangt, müssen Sie sich an den Kosten beteiligen.</p>' },
            { id: 'streit', heading: 'Streit mit dem Nachbarn vermeiden', content: '<ul><li><strong>Vorher reden:</strong> Informieren Sie den Nachbarn über Ihr Zaunvorhaben, bevor Sie bauen</li><li><strong>Schriftlich vereinbaren:</strong> Material, Höhe, Kostenteilung und Zuständigkeit für die Pflege</li><li><strong>Schöne Seite nach außen:</strong> Die „schöne Seite" des Zauns sollte zum Nachbarn zeigen — das ist nicht nur höflich, sondern in manchen Regionen Vorschrift</li><li><strong>Bebauungsplan prüfen:</strong> Vermeidet böse Überraschungen und Rückbau-Anordnungen</li><li><strong>Schlichtung statt Gericht:</strong> Bei Streit erst die Schiedsstelle der Gemeinde kontaktieren</li></ul>' },
        ],
        faqs: [
            { q: 'Wie hoch darf ein Zaun zum Nachbarn sein?', a: 'In Wohngebieten sind 1,20-1,50 m üblich und meist ohne Genehmigung erlaubt. Ab 1,80 m wird es in vielen Gemeinden genehmigungspflichtig. Prüfen Sie immer den Bebauungsplan Ihrer Gemeinde.' },
            { q: 'Darf ich einen Sichtschutzzaun aufstellen?', a: 'Grundsätzlich ja, auf Ihrem eigenen Grundstück. Die erlaubte Höhe variiert — in den meisten Wohngebieten sind 1,80 m das Maximum. Blickdichte Zäune können von Nachbarn als unzumutbare Beeinträchtigung angesehen werden.' },
            { q: 'Muss mein Nachbar den Zaun mitbezahlen?', a: 'Nur wenn der Zaun auf der Grundstücksgrenze steht und beide Seiten ihn nutzen, oder wenn eine Einfriedungspflicht besteht. Einen Zaun auf Ihrem eigenen Grundstück zahlen Sie allein.' },
        ],
        relatedServices: ['zaunbau', 'garten-und-landschaftsbau', 'galabau'],
    },

    // ========================================================================
    // ARTIKEL 19: Unkraut im Rasen
    // ========================================================================
    {
        slug: 'unkraut-rasen-bekaempfen',
        title: 'Unkraut im Rasen: Was hilft wirklich?',
        metaTitle: 'Unkraut im Rasen entfernen: Was wirklich hilft 2026',
        metaDescription: 'Unkraut im Rasen loswerden? ✓ Klee, Löwenzahn, Moos ✓ Mechanisch oder chemisch? ✓ Vorbeugen statt bekämpfen. Profi-Tipps.',
        excerpt: 'Klee, Löwenzahn und Moos im Rasen? Wir zeigen, was wirklich hilft — ohne den Rasen zu ruinieren.',
        category: 'Ratgeber',
        publishDate: '2026-06-15',
        readingTime: 8,
        keywords: ['Unkraut im Rasen entfernen', 'Klee im Rasen', 'Löwenzahn im Rasen', 'Moos im Rasen'],
        tableOfContents: [
            { id: 'ursachen', title: 'Warum wächst Unkraut im Rasen?' },
            { id: 'arten', title: 'Die häufigsten Unkräuter' },
            { id: 'bekaempfung', title: 'Mechanisch vs. chemisch' },
            { id: 'vorbeugen', title: 'Vorbeugen ist besser' },
        ],
        content: [
            { id: 'ursachen', heading: 'Warum wächst Unkraut im Rasen?', content: '<p>Unkraut ist ein <strong>Symptom</strong>, nicht die Krankheit. Es zeigt: <strong>Dem Rasen geht es nicht gut.</strong></p><ul><li><strong>Zu wenig Dünger:</strong> Schwacher Rasen = Platz für Unkraut</li><li><strong>Zu kurz gemäht:</strong> Unter 3 cm können Unkrautsamen keimen</li><li><strong>Bodenverdichtung:</strong> Moos breitet sich auf verdichtetem Boden aus</li><li><strong>Schatten:</strong> Gras wächst schlecht, Moos liebt es</li><li><strong>Zu selten vertikutiert:</strong> Rasenfilz = idealer Nährboden für Moos</li></ul><p><strong>Die Lösung:</strong> Einen gesunden, dichten Rasen fördern — dann hat Unkraut keine Chance.</p>' },
            { id: 'arten', heading: 'Die häufigsten Unkräuter', content: '<table><thead><tr><th>Unkraut</th><th>Erkennung</th><th>Beste Bekämpfung</th></tr></thead><tbody><tr><td><strong>Weißklee</strong></td><td>Runde Dreiblätter, weiße Blüten</td><td>Stickstoff-Düngung (Klee zeigt N-Mangel an!)</td></tr><tr><td><strong>Löwenzahn</strong></td><td>Gelbe Blüten, tiefe Pfahlwurzel</td><td>Mit Unkrautstecher ausstechen</td></tr><tr><td><strong>Gänseblümchen</strong></td><td>Kleine weiße Blüten</td><td>Regelmäßiges Mähen reduziert sie</td></tr><tr><td><strong>Moos</strong></td><td>Grüner Teppich in Schattenlagen</td><td>Vertikutieren + Kalk + Dünger</td></tr><tr><td><strong>Ehrenpreis</strong></td><td>Kleine blaue Blüten, kriechend</td><td>Rasen stärken, ggf. Rasenherbizid</td></tr></tbody></table>' },
            { id: 'bekaempfung', heading: 'Mechanisch vs. chemisch', content: '<h3>Mechanisch (unser Favorit)</h3><ul><li><strong>Unkrautstecher:</strong> Ideal für Löwenzahn und einzelne Unkräuter. Wurzel komplett entfernen!</li><li><strong>Vertikutierer:</strong> Entfernt Moos und Rasenfilz. Im April und ggf. September.</li><li><strong>Nachsäen:</strong> Kahle Stellen sofort nachsäen, damit kein neues Unkraut kommt</li></ul><h3>Chemisch (nur als letzter Ausweg)</h3><ul><li><strong>Rasenherbizide:</strong> Wirken nur gegen breitblättrige Unkräuter, nicht gegen Gras</li><li><strong>Anwendung:</strong> Nur bei 15-25°C, nicht bei Regen, nicht bei Trockenheit</li><li><strong>Achtung:</strong> Rasen erst 3 Tage nach Behandlung mähen, Kinder und Haustiere fernhalten</li></ul><p><strong>Unsere Empfehlung:</strong> In 90% der Fälle reicht es, den Rasen richtig zu pflegen (düngen, nicht zu kurz mähen, vertikutieren). Chemie ist fast nie nötig.</p>' },
            { id: 'vorbeugen', heading: 'Vorbeugen ist besser als bekämpfen', content: '<ol><li><strong>3x pro Jahr düngen</strong> (April, Juni, September)</li><li><strong>Nie kürzer als 4 cm mähen</strong> — dichtes Gras unterdrückt Unkraut</li><li><strong>1x pro Jahr vertikutieren</strong> (April)</li><li><strong>Kahle Stellen sofort nachsäen</strong></li><li><strong>Richtig wässern:</strong> 2x/Woche durchdringend statt täglich oberflächlich</li></ol><div class="fazit-box"><p><strong>Die Wahrheit:</strong> Ein perfekt unkrautfreier Rasen ist weder realistisch noch ökologisch sinnvoll. Ein paar Gänseblümchen und Klee sind normal und sogar gut für Bienen. Handeln Sie erst, wenn Unkraut mehr als 20-30% der Fläche einnimmt.</p></div>' },
        ],
        faqs: [
            { q: 'Was hilft am besten gegen Klee im Rasen?', a: 'Klee zeigt Stickstoffmangel an. Die beste Lösung: Stickstoffbetonten Dünger ausbringen (NPK 20-5-10). Innerhalb von 4-6 Wochen verdrängt der gestärkte Rasen den Klee von allein.' },
            { q: 'Wie bekomme ich Moos aus dem Rasen?', a: 'Moos bekämpfen Sie in 3 Schritten: 1. Vertikutieren (April), 2. Kalken wenn der pH-Wert unter 5,5 liegt, 3. Düngen. Langfristig: Schatten reduzieren und Boden lockern.' },
            { q: 'Kann ich Essig gegen Unkraut im Rasen verwenden?', a: 'Nein! Essig ist auf versiegelten Flächen sogar verboten und tötet im Rasen auch das Gras ab. Verwenden Sie lieber einen Unkrautstecher für einzelne Unkräuter.' },
        ],
        relatedServices: ['gartenpflege', 'rollrasen', 'garten-und-landschaftsbau'],
    },

    // ========================================================================
    // ARTIKEL 20: Pflastersteine verlegen
    // ========================================================================
    {
        slug: 'pflastersteine-verlegen-anleitung',
        title: 'Pflastersteine verlegen: Anleitung & häufige Fehler',
        metaTitle: 'Pflastersteine verlegen: Schritt-für-Schritt Anleitung 2026',
        metaDescription: 'Pflastersteine verlegen? ✓ Komplette Anleitung ✓ Unterbau richtig machen ✓ Häufige Fehler ✓ Kosten. Vom Pflaster-Profi erklärt.',
        excerpt: 'Einfahrt pflastern, Gartenweg anlegen oder Terrasse pflastern — wir zeigen den korrekten Aufbau und die häufigsten Fehler.',
        category: 'Ratgeber',
        publishDate: '2026-06-18',
        readingTime: 10,
        keywords: ['Pflastersteine verlegen', 'Einfahrt pflastern', 'Pflaster verlegen Anleitung', 'Unterbau Pflaster'],
        tableOfContents: [
            { id: 'aufbau', title: 'Der richtige Schichtaufbau' },
            { id: 'anleitung', title: 'Schritt für Schritt' },
            { id: 'fehler', title: 'Die 5 häufigsten Fehler' },
            { id: 'kosten', title: 'Kosten-Übersicht' },
        ],
        content: [
            { id: 'aufbau', heading: 'Der richtige Schichtaufbau', content: '<p>Ein Pflasterbelag ist nur so gut wie sein <strong>Unterbau</strong>. Der korrekte Aufbau von unten nach oben:</p><table><thead><tr><th>Schicht</th><th>Material</th><th>Dicke</th><th>Funktion</th></tr></thead><tbody><tr><td><strong>1. Planum</strong></td><td>Verdichteter Boden</td><td>—</td><td>Ebene, feste Basis</td></tr><tr><td><strong>2. Tragschicht</strong></td><td>Schotter 0/32 oder 0/45</td><td>15-30 cm</td><td>Trägt die Last, leitet Wasser ab</td></tr><tr><td><strong>3. Bettungsschicht</strong></td><td>Splitt 2/5 oder Sand 0/5</td><td>3-5 cm</td><td>Ausgleich, Pflaster liegt plan</td></tr><tr><td><strong>4. Pflaster</strong></td><td>Beton oder Naturstein</td><td>6-10 cm</td><td>Begehbare Oberfläche</td></tr><tr><td><strong>5. Fugenmaterial</strong></td><td>Fugensand oder Splitt</td><td>—</td><td>Stabilisiert die Steine</td></tr></tbody></table><p><strong>Bei Einfahrten:</strong> Tragschicht mindestens 25-30 cm, da PKW-Belastung. Bei Gehwegen reichen 15-20 cm.</p>' },
            { id: 'anleitung', heading: 'Schritt für Schritt', content: '<ol><li><strong>Aushub:</strong> Boden 30-45 cm tief ausheben (je nach Belastung). Gefälle von 2% einplanen!</li><li><strong>Planum verdichten:</strong> Boden mit Rüttelplatte verdichten. Bei lehmigem Boden: Vlies auslegen.</li><li><strong>Tragschicht einbauen:</strong> Schotter in 10-15 cm Lagen einbringen und jede Lage verdichten.</li><li><strong>Randsteine setzen:</strong> Randeinfassung mit Beton fixieren. Ohne Randsteine rutscht das Pflaster auseinander!</li><li><strong>Bettung:</strong> 3-5 cm Splitt aufziehen und mit Abziehlatte abziehen. NICHT betreten!</li><li><strong>Pflaster verlegen:</strong> Von einer Ecke aus verlegen, nicht auf der Bettung knien. Fugenbreite 3-5 mm.</li><li><strong>Abrütteln:</strong> Mit Rüttelplatte (mit Gummimatte!) das Pflaster einrütteln.</li><li><strong>Fugen:</strong> Fugensand einkehren und einschlämmen. Nach 2-3 Wochen nachfugen.</li></ol>' },
            { id: 'fehler', heading: 'Die 5 häufigsten Fehler', content: '<table><thead><tr><th>Fehler</th><th>Folge</th><th>Vermeidung</th></tr></thead><tbody><tr><td><strong>Unterbau zu dünn</strong></td><td>Pflaster sackt ab, Pfützen entstehen</td><td>Min. 20 cm Tragschicht (Einfahrt: 30 cm)</td></tr><tr><td><strong>Kein Gefälle</strong></td><td>Wasser steht, Frostschäden im Winter</td><td>2% Gefälle vom Haus weg</td></tr><tr><td><strong>Keine Randsteine</strong></td><td>Pflaster wandert und öffnet sich</td><td>Immer Randeinfassung setzen</td></tr><tr><td><strong>Bettung nicht abgezogen</strong></td><td>Unebene Oberfläche</td><td>Mit Schienen und Abziehlatte arbeiten</td></tr><tr><td><strong>Nicht verdichtet</strong></td><td>Setzungen nach Monaten</td><td>Jede Schicht einzeln rütteln</td></tr></tbody></table>' },
            { id: 'kosten', heading: 'Kosten-Übersicht', content: '<table><thead><tr><th>Position</th><th>Kosten pro m²</th></tr></thead><tbody><tr><td><strong>Aushub & Entsorgung</strong></td><td>10-20 €</td></tr><tr><td><strong>Tragschicht (Schotter)</strong></td><td>8-15 €</td></tr><tr><td><strong>Bettung (Splitt)</strong></td><td>3-5 €</td></tr><tr><td><strong>Pflastersteine (Beton)</strong></td><td>15-40 €</td></tr><tr><td><strong>Pflastersteine (Naturstein)</strong></td><td>40-120 €</td></tr><tr><td><strong>Verlegung (Profi)</strong></td><td>30-50 €</td></tr><tr><td><strong>Gesamt (Beton, Profi)</strong></td><td><strong>65-130 €/m²</strong></td></tr><tr><td><strong>Gesamt (Naturstein, Profi)</strong></td><td><strong>90-210 €/m²</strong></td></tr></tbody></table><p><strong>Beispiel:</strong> Eine 30m² Einfahrt mit Betonpflaster kostet komplett vom Profi verlegt ca. 2.000-3.900 Euro.</p>' },
        ],
        faqs: [
            { q: 'Was kostet es, Pflastersteine verlegen zu lassen?', a: 'Komplett mit Unterbau kostet Betonpflaster 65-130 €/m², Natursteinpflaster 90-210 €/m². Eine 30m² Einfahrt liegt damit bei 2.000-6.300 Euro.' },
            { q: 'Wie dick muss der Unterbau sein?', a: 'Für Gehwege 15-20 cm Tragschicht, für befahrene Flächen (Einfahrt) 25-30 cm. Dazu kommen 3-5 cm Bettung und 6-10 cm Pflasterstein.' },
            { q: 'Braucht man eine Genehmigung zum Pflastern?', a: 'Für private Flächen auf dem eigenen Grundstück in der Regel nicht. Aber: In manchen Gemeinden gibt es Vorschriften zur Versiegelung. Prüfen Sie, ob ein Versickerungsnachweis nötig ist.' },
        ],
        relatedServices: ['pflasterarbeiten', 'terrassenbau', 'garten-und-landschaftsbau'],
    },

    // ========================================================================
    // ARTIKEL 21: Schnellwachsende Hecken
    // ========================================================================
    {
        slug: 'schnellwachsende-hecken',
        title: 'Schnellwachsende Hecken: Die 8 besten Sorten',
        metaTitle: 'Schnellwachsende Hecken: Die 8 besten Sorten im Vergleich 2026',
        metaDescription: 'Schnell blickdicht? ✓ Die 8 besten schnellwachsenden Hecken ✓ Wuchsgeschwindigkeit ✓ Kosten ✓ Pflege. Profi-Vergleich.',
        excerpt: 'Sie brauchen schnell Sichtschutz? Diese 8 Heckenpflanzen wachsen am schnellsten und werden zuverlässig dicht.',
        category: 'Vergleich',
        publishDate: '2026-06-21',
        readingTime: 9,
        keywords: ['Schnellwachsende Hecke', 'Hecke schnell dicht', 'Sichtschutz Hecke schnell', 'schnell wachsende Heckenpflanzen'],
        tableOfContents: [
            { id: 'vergleich', title: 'Die 8 besten Sorten' },
            { id: 'immergruen', title: 'Immergrüne Sorten' },
            { id: 'laubabwerfend', title: 'Laubabwerfende Sorten' },
            { id: 'tipps', title: 'Tipps für schnelles Wachstum' },
        ],
        content: [
            { id: 'vergleich', heading: 'Die 8 besten schnellwachsenden Hecken', content: '<table><thead><tr><th>Sorte</th><th>Wuchs/Jahr</th><th>Max. Höhe</th><th>Immergrün</th><th>Preis/Pflanze</th></tr></thead><tbody><tr><td><strong>Liguster</strong></td><td>40-60 cm</td><td>3-4 m</td><td>Halb-immergrün</td><td>3-8 €</td></tr><tr><td><strong>Hainbuche</strong></td><td>30-50 cm</td><td>4-6 m</td><td>Nein (Laub bleibt)</td><td>3-7 €</td></tr><tr><td><strong>Rotbuche</strong></td><td>30-50 cm</td><td>4-6 m</td><td>Nein (Laub bleibt)</td><td>4-9 €</td></tr><tr><td><strong>Thuja</strong></td><td>30-40 cm</td><td>4-8 m</td><td>Ja</td><td>5-15 €</td></tr><tr><td><strong>Kirschlorbeer</strong></td><td>30-50 cm</td><td>3-5 m</td><td>Ja</td><td>8-20 €</td></tr><tr><td><strong>Eibe</strong></td><td>20-30 cm</td><td>3-4 m</td><td>Ja</td><td>8-25 €</td></tr><tr><td><strong>Feldahorn</strong></td><td>40-60 cm</td><td>5-8 m</td><td>Nein</td><td>4-10 €</td></tr><tr><td><strong>Glanzmispel</strong></td><td>30-40 cm</td><td>2-3 m</td><td>Ja</td><td>10-25 €</td></tr></tbody></table>' },
            { id: 'immergruen', heading: 'Immergrüne Sorten — ganzjährig dicht', content: '<h3>🏆 Unsere Empfehlung: Eibe (Taxus)</h3><p>Langsamer als Kirschlorbeer, aber <strong>die mit Abstand beste Hecke</strong> für Norddeutschland:</p><ul><li>Extrem schnittverträglich — wird nach jedem Schnitt dichter</li><li>Winterhart bis -30°C</li><li>Wird 100+ Jahre alt</li><li>Einheimisch und ökologisch wertvoll</li><li>Einzige Nadelpflanze die aus altem Holz austreibt</li></ul><h3>Thuja (Lebensbaum)</h3><p>Beliebt aber mit Einschränkungen:</p><ul><li>Günstig und schnell blickdicht</li><li>Aber: Treibt nicht aus altem Holz nach — einmal zu stark geschnitten = für immer kahl</li><li>Anfällig für Miniermotte und Trockenheit</li></ul>' },
            { id: 'laubabwerfend', heading: 'Laubabwerfende Sorten — natürlich & robust', content: '<h3>🏆 Unsere Empfehlung: Hainbuche</h3><p>Die <strong>perfekte Hecke</strong> für die meisten Gärten:</p><ul><li>Wächst fast überall (Sonne bis Halbschatten, jeder Boden)</li><li>Wird schnell dicht und blickdicht</li><li>Behält das braune Laub bis zum Frühling — auch im Winter Sichtschutz!</li><li>Extrem schnittverträglich</li><li>Heimisch, bietet Vögeln Nistplätze</li><li>Günstigste Option (3-7 € pro Pflanze)</li></ul><p><strong>Pflanzabstand:</strong> 4-5 Pflanzen pro laufenden Meter für eine dichte Hecke.</p>' },
            { id: 'tipps', heading: 'Tipps für schnelles Wachstum', content: '<ol><li><strong>Im Herbst pflanzen</strong> (Oktober/November) — die Wurzeln wachsen den ganzen Winter</li><li><strong>Boden vorbereiten:</strong> Pflanzgraben 50 cm breit, 40 cm tief, mit Kompost mischen</li><li><strong>Sofort nach dem Pflanzen kürzen:</strong> Um 1/3 einkürzen fördert dichten Wuchs von unten</li><li><strong>Regelmäßig wässern:</strong> Im ersten Jahr alle 3-4 Tage gießen</li><li><strong>2x pro Jahr düngen:</strong> März und Juni mit Heckendünger</li></ol><div class="fazit-box"><p><strong>Realistisch:</strong> Mit schnellwachsenden Sorten dauert es 3-4 Jahre bis zur vollen Blickdichte. Wenn Sie sofort Sichtschutz brauchen, pflanzen Sie größere Pflanzen (150-200 cm) — das kostet mehr, spart aber Jahre.</p></div>' },
        ],
        faqs: [
            { q: 'Welche Hecke wächst am schnellsten?', a: 'Liguster und Feldahorn wachsen mit 40-60 cm pro Jahr am schnellsten. Für immergrüne Hecken ist Kirschlorbeer mit 30-50 cm/Jahr die schnellste Option.' },
            { q: 'Wie schnell wird eine Hecke blickdicht?', a: 'Mit schnellwachsenden Sorten und Pflanzen ab 80-100 cm Höhe dauert es 2-3 Jahre bis zur vollen Blickdichte. Mit größeren Pflanzen (150-200 cm) nur 1-2 Jahre.' },
            { q: 'Was kostet eine neue Hecke?', a: 'Pro laufenden Meter: 15-35 € (Hainbuche, 4-5 Pflanzen) bis 80-125 € (Eibe, größere Pflanzen). Für 10 Meter Hecke also 150-1.250 € nur für die Pflanzen.' },
        ],
        relatedServices: ['heckenschnitt', 'gartenpflege', 'garten-und-landschaftsbau'],
    },

    // ========================================================================
    // ARTIKEL 22: Gabionenzaun
    // ========================================================================
    {
        slug: 'gabionenzaun-vor-nachteile',
        title: 'Gabionenzaun: Kosten, Vorteile & Nachteile',
        metaTitle: 'Gabionenzaun: Kosten pro Meter, Vorteile & ehrliche Nachteile 2026',
        metaDescription: 'Gabionenzaun als Sichtschutz? ✓ Kosten pro Meter ✓ Vorteile & Nachteile ✓ Fundament ✓ Befüllung. Ehrlicher Profi-Vergleich.',
        excerpt: 'Gabionen liegen im Trend — aber sind sie wirklich die beste Lösung für Ihren Garten? Kosten, Vor- und Nachteile im ehrlichen Vergleich.',
        category: 'Vergleich',
        publishDate: '2026-06-24',
        readingTime: 7,
        keywords: ['Gabionenzaun Kosten', 'Gabionen Erfahrungen', 'Gabionenwand Garten', 'Gabionen Sichtschutz'],
        tableOfContents: [
            { id: 'was', title: 'Was sind Gabionen?' },
            { id: 'vorteile', title: 'Vorteile' },
            { id: 'nachteile', title: 'Nachteile' },
            { id: 'kosten', title: 'Kosten pro Meter' },
            { id: 'fazit', title: 'Fazit' },
        ],
        content: [
            { id: 'was', heading: 'Was sind Gabionen?', content: '<p><strong>Gabionen</strong> sind Drahtkörbe aus verzinktem Stahl, die mit Steinen gefüllt werden. Sie dienen als Sichtschutz, Lärmschutz, Stützmauer oder dekoratives Element.</p><ul><li><strong>Standardmaße:</strong> 100-200 cm hoch, 30-50 cm tief, Länge variabel</li><li><strong>Draht:</strong> Verzinkter Stahl, 4-5 mm stark, Maschenweite 5x10 oder 10x10 cm</li><li><strong>Füllung:</strong> Natursteine (Granit, Basalt, Kalkstein, Jura), Größe 60-120 mm</li></ul>' },
            { id: 'vorteile', heading: 'Vorteile von Gabionen', content: '<ul><li><strong>Extrem langlebig:</strong> 50-80 Jahre Lebensdauer bei verzinktem Draht</li><li><strong>Wartungsfrei:</strong> Kein Streichen, kein Imprägnieren, kein Nacharbeiten</li><li><strong>Schallschutz:</strong> Reduzieren Straßenlärm um 5-8 dB — deutlich spürbar</li><li><strong>Naturnaher Look:</strong> Passen gut zu modernen und naturnahen Gärten</li><li><strong>Keine Genehmigung:</strong> Bis 1,80 m in den meisten Gemeinden genehmigungsfrei</li><li><strong>Flexibel:</strong> Kurven, Ecken und Stufen möglich</li></ul>' },
            { id: 'nachteile', heading: 'Die ehrlichen Nachteile', content: '<ul><li><strong>Teuer:</strong> Pro Meter 200-600 € — deutlich teurer als Holzzaun oder Doppelstabmatte</li><li><strong>Schwer:</strong> 1 Meter Gabione wiegt 500-1.500 kg. Fundament zwingend nötig!</li><li><strong>Breite:</strong> Mindestens 30 cm tief — das kostet Gartenfläche</li><li><strong>Unkraut:</strong> In den Steinfugen wächst mit der Zeit Unkraut und Moos</li><li><strong>Optik altert:</strong> Steine verfärben sich mit der Zeit durch Algen und Moos (grünlich)</li><li><strong>Nicht reparierbar:</strong> Wenn der Draht rostet, muss die ganze Gabione erneuert werden</li></ul>' },
            { id: 'kosten', heading: 'Kosten pro laufenden Meter', content: '<table><thead><tr><th>Position</th><th>Kosten/lfm</th></tr></thead><tbody><tr><td><strong>Gabionenkorb (180 cm hoch)</strong></td><td>80-150 €</td></tr><tr><td><strong>Steine (Granit/Basalt)</strong></td><td>80-200 €</td></tr><tr><td><strong>Fundament (Streifenfundament)</strong></td><td>40-80 €</td></tr><tr><td><strong>Montage (Profi)</strong></td><td>60-120 €</td></tr><tr><td><strong>Gesamt pro Meter</strong></td><td><strong>260-550 €</strong></td></tr></tbody></table><p><strong>Vergleich:</strong> Doppelstabmattenzaun: 80-180 €/lfm. Holzzaun: 100-250 €/lfm. Gabionen sind also 2-3x teurer als Alternativen.</p>' },
            { id: 'fazit', heading: 'Unser Fazit', content: '<div class="fazit-box"><p><strong>Gabionen sind toll, wenn:</strong> Sie einen modernen, wartungsfreien Sichtschutz wollen und das Budget haben. Besonders als Kombination mit Holz- oder Metallelementen sehen sie großartig aus.</p><p><strong>Gabionen sind übertrieben, wenn:</strong> Sie einfach nur Sichtschutz brauchen. Dann ist ein Doppelstabmattenzaun mit Sichtschutzstreifen oder eine dichte Hecke günstiger und genauso effektiv.</p></div>' },
        ],
        faqs: [
            { q: 'Was kostet ein Gabionenzaun pro Meter?', a: 'Komplett mit Fundament, Körben, Steinen und Montage: 260-550 € pro laufenden Meter. Für 10 Meter Gabionenzaun also 2.600-5.500 Euro.' },
            { q: 'Braucht ein Gabionenzaun ein Fundament?', a: 'Ja, zwingend. Gabionen wiegen 500-1.500 kg pro Meter. Ohne Streifenfundament sacken sie ab und kippen. Das Fundament sollte 30-40 cm tief und frostfrei gegründet sein.' },
            { q: 'Wie lange hält ein Gabionenzaun?', a: 'Bei verzinktem Draht (Zink-Aluminium-Beschichtung) hält ein Gabionenzaun 50-80 Jahre. Standard-Verzinkung hält ca. 20-30 Jahre.' },
        ],
        relatedServices: ['zaunbau', 'pflasterarbeiten', 'garten-und-landschaftsbau'],
    },

    // ========================================================================
    // ARTIKEL 23: Sichtschutz Garten
    // ========================================================================
    {
        slug: 'sichtschutz-garten-ideen',
        title: 'Sichtschutz im Garten: 10 Ideen von günstig bis premium',
        metaTitle: 'Sichtschutz Garten: 10 Ideen von günstig bis premium 2026',
        metaDescription: 'Sichtschutz für den Garten gesucht? ✓ 10 Ideen ✓ Von 20€ bis 500€ pro Meter ✓ Natürlich & modern ✓ Profi-Vergleich.',
        excerpt: 'Vom günstigen Sichtschutzstreifen bis zur Premium-Gabionenwand — 10 Sichtschutz-Ideen für jeden Geschmack und jedes Budget.',
        category: 'Inspiration',
        publishDate: '2026-07-09',
        readingTime: 8,
        keywords: ['Sichtschutz Garten', 'Sichtschutz modern', 'Sichtschutz günstig', 'Sichtschutz Ideen'],
        tableOfContents: [
            { id: 'guenstig', title: 'Günstige Optionen (20-100 €/m)' },
            { id: 'mittel', title: 'Mittlere Preisklasse (100-250 €/m)' },
            { id: 'premium', title: 'Premium-Lösungen (250-600 €/m)' },
            { id: 'vergleich', title: 'Übersicht & Vergleich' },
        ],
        content: [
            { id: 'guenstig', heading: 'Günstige Optionen (20-100 €/m)', content: '<h3>1. Sichtschutzstreifen im Zaun (20-40 €/m)</h3><p>PVC- oder PP-Streifen die in bestehende Doppelstabmatten eingefädelt werden. Schnell, günstig, aber optisch nicht premium.</p><h3>2. Bambusmatten (30-60 €/m)</h3><p>Natürlicher Look, einfach an bestehendem Zaun befestigt. Haltbarkeit 3-5 Jahre.</p><h3>3. Schnellwachsende Hecke (40-100 €/m)</h3><p>Liguster oder Hainbuche pflanzen. Dauert 2-3 Jahre bis blickdicht, ist aber die natürlichste und nachhaltigste Lösung.</p>' },
            { id: 'mittel', heading: 'Mittlere Preisklasse (100-250 €/m)', content: '<h3>4. WPC-Sichtschutz (120-200 €/m)</h3><p>Fertigelemente aus WPC in Holzoptik. Pflegeleicht, modern, 20+ Jahre haltbar. Unser Preis-Leistungs-Tipp!</p><h3>5. Holzzaun mit Rhombus-Profil (100-200 €/m)</h3><p>Lärche oder Douglasie mit offenen Fugen — moderner Look, Luft- und Lichtdurchlässig.</p><h3>6. Doppelstabmattenzaun mit Rankpflanzen (80-180 €/m)</h3><p>Zaun aufstellen und mit Efeu, Clematis oder Wilder Wein bepflanzen. Nach 1-2 Jahren natürlicher Sichtschutz.</p><h3>7. Gräser als Sichtschutz (100-150 €/m)</h3><p>Chinaschilf (Miscanthus) wird 2-3 m hoch und bietet natürlichen, bewegten Sichtschutz. Im Winter allerdings kahl.</p>' },
            { id: 'premium', heading: 'Premium-Lösungen (250-600 €/m)', content: '<h3>8. Gabionenzaun (260-550 €/m)</h3><p>Steinkörbe — massiv, wartungsfrei, 50+ Jahre. Besonders als Kombination mit Holz- oder Metallelementen.</p><h3>9. Cortenstahl-Elemente (300-500 €/m)</h3><p>Rostiger Stahl in edlem Industrial-Look. Extrem langlebig, kein Nachrosten. Sehr modern.</p><h3>10. Glaselemente (400-600 €/m)</h3><p>Satiniertes oder getöntes Glas — lässt Licht durch bei vollem Sichtschutz. Premium-Optik, aber anfällig für Verschmutzung.</p>' },
            { id: 'vergleich', heading: 'Alle 10 Optionen im Vergleich', content: '<table><thead><tr><th>Option</th><th>Kosten/m</th><th>Haltbarkeit</th><th>Pflege</th><th>Optik</th></tr></thead><tbody><tr><td>Sichtschutzstreifen</td><td>20-40 €</td><td>5-10 Jahre</td><td>Keine</td><td>⭐⭐</td></tr><tr><td>Bambusmatten</td><td>30-60 €</td><td>3-5 Jahre</td><td>Gering</td><td>⭐⭐⭐</td></tr><tr><td>Hecke</td><td>40-100 €</td><td>50+ Jahre</td><td>2x/Jahr schneiden</td><td>⭐⭐⭐⭐</td></tr><tr><td>WPC-Sichtschutz</td><td>120-200 €</td><td>20+ Jahre</td><td>Keine</td><td>⭐⭐⭐⭐</td></tr><tr><td>Holz Rhombus</td><td>100-200 €</td><td>15-20 Jahre</td><td>1x/Jahr ölen</td><td>⭐⭐⭐⭐⭐</td></tr><tr><td>Zaun + Rankpflanzen</td><td>80-180 €</td><td>20+ Jahre</td><td>1x/Jahr schneiden</td><td>⭐⭐⭐⭐</td></tr><tr><td>Ziergräser</td><td>100-150 €</td><td>10-15 Jahre</td><td>1x/Jahr rückschneiden</td><td>⭐⭐⭐⭐</td></tr><tr><td>Gabionen</td><td>260-550 €</td><td>50+ Jahre</td><td>Keine</td><td>⭐⭐⭐⭐</td></tr><tr><td>Cortenstahl</td><td>300-500 €</td><td>50+ Jahre</td><td>Keine</td><td>⭐⭐⭐⭐⭐</td></tr><tr><td>Glas</td><td>400-600 €</td><td>30+ Jahre</td><td>Regelmäßig reinigen</td><td>⭐⭐⭐⭐⭐</td></tr></tbody></table>' },
        ],
        faqs: [
            { q: 'Was ist der günstigste Sichtschutz für den Garten?', a: 'Sichtschutzstreifen für bestehende Doppelstabmatten ab 20€/m. Langfristig am günstigsten: eine Hecke, da sie Jahrzehnte hält und nur 2x/Jahr geschnitten werden muss.' },
            { q: 'Welcher Sichtschutz ist am pflegeleichtesten?', a: 'WPC-Sichtschutz, Gabionen und Cortenstahl sind komplett wartungsfrei. Kein Streichen, kein Ölen, kein Schneiden.' },
            { q: 'Wie hoch darf Sichtschutz im Garten sein?', a: 'In den meisten Wohngebieten maximal 1,80 m ohne Genehmigung. Prüfen Sie den Bebauungsplan Ihrer Gemeinde. An der Grundstücksgrenze gelten ggf. andere Regelungen.' },
        ],
        relatedServices: ['zaunbau', 'heckenschnitt', 'garten-und-landschaftsbau'],
    },

    // ========================================================================
    // ARTIKEL 24: Doppelstabmattenzaun
    // ========================================================================
    {
        slug: 'doppelstabmattenzaun-montage',
        title: 'Doppelstabmattenzaun: Kosten, Montage & Tipps',
        metaTitle: 'Doppelstabmattenzaun: Kosten pro Meter & Montage-Anleitung 2026',
        metaDescription: 'Doppelstabmattenzaun aufstellen? ✓ Kosten pro Meter ✓ Montage-Anleitung ✓ Mit oder ohne Sichtschutz ✓ Profi-Tipps.',
        excerpt: 'Der Doppelstabmattenzaun ist der beliebteste Zaun Deutschlands. Kosten, Montage und was Sie wissen müssen.',
        category: 'Ratgeber',
        publishDate: '2026-07-24',
        readingTime: 7,
        keywords: ['Doppelstabmattenzaun Kosten', 'Metallzaun setzen', 'Doppelstabmatte Montage', 'Stabgitterzaun'],
        tableOfContents: [
            { id: 'vorteile', title: 'Warum Doppelstabmatten?' },
            { id: 'kosten', title: 'Kosten pro Meter' },
            { id: 'montage', title: 'Montage Schritt für Schritt' },
            { id: 'sichtschutz', title: 'Sichtschutz-Optionen' },
        ],
        content: [
            { id: 'vorteile', heading: 'Warum Doppelstabmatten?', content: '<p>Der Doppelstabmattenzaun ist aus gutem Grund <strong>Deutschlands beliebtester Zaun</strong>:</p><ul><li><strong>Extrem robust:</strong> 6/5/6 mm Drahtstärke hält Jahrzehnte</li><li><strong>Günstig:</strong> Ab 30-50 € pro Meter Material</li><li><strong>Pflegefrei:</strong> Verzinkt + pulverbeschichtet = kein Streichen nötig</li><li><strong>Flexibel:</strong> Mit Sichtschutz, Rankpflanzen oder Gabionen kombinierbar</li><li><strong>Schnelle Montage:</strong> 20 Meter Zaun an einem Tag montiert</li></ul>' },
            { id: 'kosten', heading: 'Kosten pro laufenden Meter', content: '<table><thead><tr><th>Position</th><th>Nur Material</th><th>Mit Montage</th></tr></thead><tbody><tr><td><strong>Matten (120 cm hoch)</strong></td><td>20-35 €/m</td><td>—</td></tr><tr><td><strong>Matten (180 cm hoch)</strong></td><td>35-55 €/m</td><td>—</td></tr><tr><td><strong>Pfosten</strong></td><td>15-25 €/Stück</td><td>—</td></tr><tr><td><strong>Befestigung</strong></td><td>5-10 €/m</td><td>—</td></tr><tr><td><strong>Montage (Profi)</strong></td><td>—</td><td>30-50 €/m</td></tr><tr><td><strong>Gesamt (180 cm, Profi)</strong></td><td>55-90 €/m</td><td><strong>85-140 €/m</strong></td></tr></tbody></table>' },
            { id: 'montage', heading: 'Montage Schritt für Schritt', content: '<ol><li><strong>Verlauf abstecken:</strong> Schnur spannen, Pfostenposition alle 250 cm markieren</li><li><strong>Löcher bohren:</strong> Mit Erdbohrer 80 cm tiefe Löcher (Durchmesser 30 cm)</li><li><strong>Pfosten einbetonieren:</strong> C25/30 Beton, Pfosten mit Wasserwaage ausrichten</li><li><strong>48 Stunden warten:</strong> Beton muss aushärten!</li><li><strong>Matten einhängen:</strong> Von oben in die Pfostenhalterungen einsetzen</li><li><strong>Befestigungsklammern:</strong> Matten mit Klammern an den Pfosten sichern</li></ol><p><strong>Tipp:</strong> Beginnen Sie immer an einer Ecke oder einem Tor. Die letzte Matte muss ggf. gekürzt werden.</p>' },
            { id: 'sichtschutz', heading: 'Sichtschutz-Optionen', content: '<table><thead><tr><th>Option</th><th>Kosten/m</th><th>Optik</th><th>Haltbarkeit</th></tr></thead><tbody><tr><td><strong>PVC-Streifen</strong></td><td>10-25 €</td><td>⭐⭐</td><td>5-10 Jahre</td></tr><tr><td><strong>PP-Gewebe (Textil)</strong></td><td>15-30 €</td><td>⭐⭐⭐</td><td>8-12 Jahre</td></tr><tr><td><strong>Holzlatten-Füllung</strong></td><td>40-80 €</td><td>⭐⭐⭐⭐</td><td>10-15 Jahre</td></tr><tr><td><strong>Rankpflanzen</strong></td><td>20-50 € + Geduld</td><td>⭐⭐⭐⭐⭐</td><td>Dauerhaft</td></tr></tbody></table><p><strong>Unsere Empfehlung:</strong> Doppelstabmatte mit Efeu bepflanzen. Nach 1-2 Jahren haben Sie einen dichten, lebendigen Sichtschutz der nichts kostet und ökologisch wertvoll ist.</p>' },
        ],
        faqs: [
            { q: 'Was kostet ein Doppelstabmattenzaun pro Meter?', a: 'Nur Material: 55-90 €/m (180 cm hoch). Mit professioneller Montage: 85-140 €/m. Für 20 Meter Zaun also 1.700-2.800 Euro komplett.' },
            { q: 'Wie tief müssen die Pfosten einbetoniert werden?', a: 'Mindestens 80 cm tief, um frostsicher zu sein. Das Loch sollte 30 cm Durchmesser haben und mit C25/30 Beton gefüllt werden.' },
            { q: 'Wie lange hält ein Doppelstabmattenzaun?', a: 'Mit Zink-Pulverbeschichtung 30-50 Jahre. Nur verzinkt (ohne Pulverbeschichtung) ca. 15-25 Jahre. Die Beschichtung schützt vor Rost.' },
        ],
        relatedServices: ['zaunbau', 'garten-und-landschaftsbau', 'galabau'],
    },

    // ========================================================================
    // ARTIKEL 25: Thuja wird braun
    // ========================================================================
    {
        slug: 'thuja-hecke-wird-braun',
        title: 'Thuja-Hecke wird braun: Ursachen & Rettung',
        metaTitle: 'Thuja wird braun: 6 Ursachen & was Sie jetzt tun können 2026',
        metaDescription: 'Thuja-Hecke wird braun? ✓ 6 Ursachen ✓ Rettungsmaßnahmen ✓ Wann ist es zu spät? Diagnose-Guide vom Gärtner.',
        excerpt: 'Ihre Thuja wird braun? Keine Panik — aber schnell handeln. Wir zeigen die 6 häufigsten Ursachen und was Sie jetzt tun können.',
        category: 'Ratgeber',
        publishDate: '2026-07-18',
        readingTime: 7,
        keywords: ['Thuja braun', 'Thuja Hecke Pflege', 'Thuja wird braun was tun', 'Lebensbaum braun'],
        tableOfContents: [
            { id: 'ursachen', title: 'Die 6 häufigsten Ursachen' },
            { id: 'diagnose', title: 'Schnell-Diagnose' },
            { id: 'rettung', title: 'Rettungsmaßnahmen' },
            { id: 'vorbeugen', title: 'Vorbeugen' },
        ],
        content: [
            { id: 'ursachen', heading: 'Die 6 häufigsten Ursachen', content: '<ol><li><strong>Trockenheit:</strong> Die #1 Ursache! Thujen brauchen auch im Winter Wasser. Braune Spitzen im Frühling = oft Trockenschaden vom Winter.</li><li><strong>Staunässe:</strong> Paradox aber wahr — zu viel Wasser ist genauso schädlich. Wurzeln faulen, die Pflanze wird braun.</li><li><strong>Miniermotte:</strong> Kleine Larven fressen das Innere der Triebspitzen aus. Befallene Spitzen werden braun und hohl.</li><li><strong>Borkenkäfer:</strong> Bohrt sich in den Stamm. Erkennbar an Bohrmehl und runden Löchern.</li><li><strong>Pilzbefall (Phytophthora):</strong> Wurzelfäule durch bodenbürtige Pilze. Oft bei verdichtetem oder staunassem Boden.</li><li><strong>Streusalz:</strong> Salz von der Straße schädigt Wurzeln und Nadeln im Winter.</li></ol>' },
            { id: 'diagnose', heading: 'Schnell-Diagnose', content: '<table><thead><tr><th>Symptom</th><th>Wahrscheinliche Ursache</th></tr></thead><tbody><tr><td>Braune Spitzen, Rest grün</td><td>Trockenheit oder Miniermotte</td></tr><tr><td>Ganze Äste von innen braun</td><td>Normaler Prozess (alte Nadeln)</td></tr><tr><td>Pflanze komplett braun</td><td>Wurzelschaden (Staunässe/Pilz)</td></tr><tr><td>Braun nur straßenseitig</td><td>Streusalz</td></tr><tr><td>Braun nach dem Schnitt</td><td>Ins alte Holz geschnitten</td></tr></tbody></table><p><strong>Wichtig:</strong> Wenn eine Thuja ins alte (braune) Holz geschnitten wird, treibt sie dort <strong>nie wieder aus</strong>. Das ist der größte Unterschied zur Eibe.</p>' },
            { id: 'rettung', heading: 'Rettungsmaßnahmen', content: '<ul><li><strong>Bei Trockenheit:</strong> Sofort durchdringend wässern (20-30 Liter pro Pflanze). 2x pro Woche über 4-6 Wochen.</li><li><strong>Bei Miniermotte:</strong> Befallene braune Triebspitzen abschneiden und entsorgen (nicht kompostieren!)</li><li><strong>Bei Staunässe:</strong> Drainage verbessern, ggf. Boden lockern. In schweren Fällen: Pflanze umsetzen.</li><li><strong>Bei Pilzbefall:</strong> Leider meist nicht rettbar. Befallene Pflanzen entfernen und Boden austauschen.</li></ul><div class="fazit-box"><p><strong>Ehrliche Einschätzung:</strong> Wenn mehr als 50% einer Thuja braun sind, ist sie meistens nicht mehr zu retten. Ersetzen Sie sie — am besten durch eine Eibe, die deutlich robuster ist.</p></div>' },
            { id: 'vorbeugen', heading: 'So bleibt Ihre Thuja gesund', content: '<ul><li><strong>Auch im Winter gießen:</strong> An frostfreien Tagen wässern, besonders bei Ostwind</li><li><strong>Nie ins alte Holz schneiden:</strong> Nur den grünen Zuwachs schneiden</li><li><strong>Mulchen:</strong> 5 cm Rindenmulch hält die Feuchtigkeit im Boden</li><li><strong>Düngen:</strong> 2x pro Jahr mit Koniferendünger (März und Juli)</li><li><strong>Gute Drainage:</strong> Thujen vertragen keine Staunässe</li></ul>' },
        ],
        faqs: [
            { q: 'Kann eine braune Thuja wieder grün werden?', a: 'Nur wenn die Ursache rechtzeitig behoben wird und die Pflanze nicht zu stark geschädigt ist. Braune Stellen im grünen Bereich wachsen nach. Komplett braune Äste oder Pflanzen erholen sich nicht.' },
            { q: 'Warum wird meine Thuja von innen braun?', a: 'Das Braunwerden alter Nadeln im Inneren ist ein normaler Prozess. Thujen erneuern ihre Nadeln alle 3-4 Jahre. Solange die Außenseite grün ist, ist alles in Ordnung.' },
            { q: 'Welche Alternative ist besser als Thuja?', a: 'Wir empfehlen Eibe (Taxus) als beste Alternative: genauso dicht und immergrün, aber schnittverträglicher, langlebiger und treibt auch aus altem Holz neu aus.' },
        ],
        relatedServices: ['heckenschnitt', 'baumpflege', 'gartenpflege'],
    },

    // ========================================================================
    // ARTIKEL 26: Garten anlegen nach Hausbau
    // ========================================================================
    {
        slug: 'garten-anlegen-neubau',
        title: 'Garten anlegen nach Hausbau: Der richtige Ablauf',
        metaTitle: 'Garten anlegen nach Hausbau: Ablauf, Kosten & Planung 2026',
        metaDescription: 'Garten nach Hausbau anlegen? ✓ Der richtige Ablauf ✓ Was zuerst? ✓ Kosten kalkulieren ✓ Typische Fehler. Profi-Fahrplan.',
        excerpt: 'Nach dem Hausbau gleicht der Garten einer Mondlandschaft. Wir zeigen den richtigen Ablauf — was zuerst, was kann warten.',
        category: 'Ratgeber',
        publishDate: '2026-06-30',
        readingTime: 10,
        keywords: ['Garten anlegen Neubau', 'Garten planen Hausbau', 'Garten nach Hausbau', 'Garten neu anlegen Ablauf'],
        tableOfContents: [
            { id: 'reihenfolge', title: 'Die richtige Reihenfolge' },
            { id: 'phase1', title: 'Phase 1: Infrastruktur' },
            { id: 'phase2', title: 'Phase 2: Harte Flächen' },
            { id: 'phase3', title: 'Phase 3: Bepflanzung' },
            { id: 'kosten', title: 'Kosten kalkulieren' },
            { id: 'fehler', title: 'Die 5 größten Fehler' },
        ],
        content: [
            { id: 'reihenfolge', heading: 'Die richtige Reihenfolge', content: '<p>Der häufigste Fehler: <strong>Alles auf einmal machen wollen.</strong> Ein Garten braucht Planung und die richtige Reihenfolge:</p><ol><li><strong>Planen</strong> (Wochen 1-4): Wünsche sammeln, Budget festlegen, Profi einbeziehen</li><li><strong>Infrastruktur</strong> (Wochen 4-8): Entwässerung, Strom, Wasser</li><li><strong>Harte Flächen</strong> (Wochen 8-14): Terrasse, Wege, Einfahrt, Zaun</li><li><strong>Bepflanzung</strong> (Wochen 14-18): Rasen, Hecke, Beete, Bäume</li></ol><p><strong>Zeitrahmen:</strong> Planen Sie 3-5 Monate für den kompletten Garten ein.</p>' },
            { id: 'phase1', heading: 'Phase 1: Infrastruktur (das Unsichtbare)', content: '<p>Alles was <strong>in den Boden</strong> muss, kommt zuerst — bevor Terrasse und Rasen drauf sind:</p><ul><li><strong>Entwässerung:</strong> Drainage, Rigole, Regenwasserleitung</li><li><strong>Leerrohre:</strong> Strom für Gartenbeleuchtung, Mähroboter, Gartenhaus</li><li><strong>Wasseranschluss:</strong> Außenwasserhahn, ggf. Bewässerungsleitungen</li><li><strong>Boden verbessern:</strong> Baustellenboden ist verdichtet — auffräsen und Mutterboden aufbringen</li></ul><p><strong>Budget:</strong> Ca. 2.000-5.000 € für die Infrastruktur eines 300m² Gartens.</p>' },
            { id: 'phase2', heading: 'Phase 2: Harte Flächen', content: '<ul><li><strong>Terrasse:</strong> Direkt ans Haus, mit 2% Gefälle weg vom Gebäude</li><li><strong>Einfahrt:</strong> Pflaster oder Schotter, ggf. mit Versickerungsmulde</li><li><strong>Gartenwege:</strong> Hauptwege 1,20 m breit, Nebenwege 80 cm</li><li><strong>Zaun/Sichtschutz:</strong> Grundstücksgrenze absichern</li><li><strong>Mauern/Stufen:</strong> Höhenunterschiede im Gelände ausgleichen</li></ul><p><strong>Budget:</strong> Ca. 8.000-20.000 € (abhängig von Material und Fläche).</p>' },
            { id: 'phase3', heading: 'Phase 3: Bepflanzung', content: '<ul><li><strong>Hecke:</strong> Im Herbst pflanzen (Oktober/November) — wächst den Winter über an</li><li><strong>Rasen:</strong> April-Mai oder September. Rollrasen für sofortiges Grün, Aussaat für Budget</li><li><strong>Beete:</strong> Stauden und Bodendecker gegen Unkraut</li><li><strong>Bäume:</strong> Jetzt pflanzen, damit sie in 5 Jahren Schatten spenden</li></ul><p><strong>Budget:</strong> Ca. 3.000-8.000 € für Bepflanzung und Rasen.</p>' },
            { id: 'kosten', heading: 'Kosten kalkulieren', content: '<table><thead><tr><th>Gartenbereich</th><th>Budget (300m² Garten)</th></tr></thead><tbody><tr><td><strong>Planung & Infrastruktur</strong></td><td>2.000-5.000 €</td></tr><tr><td><strong>Terrasse (20m²)</strong></td><td>3.000-8.000 €</td></tr><tr><td><strong>Einfahrt (25m²)</strong></td><td>2.000-5.000 €</td></tr><tr><td><strong>Zaun (30 lfm)</strong></td><td>2.500-5.000 €</td></tr><tr><td><strong>Rasen (150m²)</strong></td><td>1.500-4.000 €</td></tr><tr><td><strong>Bepflanzung</strong></td><td>1.500-4.000 €</td></tr><tr><td><strong>Gesamt</strong></td><td><strong>12.500-31.000 €</strong></td></tr></tbody></table><p><strong>Faustregel:</strong> Planen Sie 10-15% der Hausbaukosten für den Garten ein.</p>' },
            { id: 'fehler', heading: 'Die 5 größten Fehler beim Gartenanlegen', content: '<ol><li><strong>Keinen Plan machen:</strong> Einfach drauflos führt zu teuren Umbauten</li><li><strong>Boden nicht verbessern:</strong> Baustellenboden ist verdichtet — Rasen und Pflanzen wachsen schlecht</li><li><strong>Leerrohre vergessen:</strong> Strom und Wasser nachträglich verlegen kostet 5x so viel</li><li><strong>Alles auf einmal:</strong> Lieber in Phasen — erst Infrastruktur und Terrasse, Bepflanzung kann warten</li><li><strong>Zu kleine Terrasse:</strong> Die #1 Bereue nach 2 Jahren. Lieber 5m² mehr!</li></ol>' },
        ],
        faqs: [
            { q: 'Was kostet es, einen Garten nach dem Hausbau komplett anlegen zu lassen?', a: 'Für einen 300m² Garten mit Terrasse, Einfahrt, Zaun, Rasen und Bepflanzung rechnen Sie mit 12.500-31.000 Euro. Faustregel: 10-15% der Hausbaukosten.' },
            { q: 'Wann sollte man nach dem Hausbau mit dem Garten anfangen?', a: 'Sobald die Bauarbeiten abgeschlossen und die schweren Maschinen weg sind. Idealerweise im Frühjahr oder Herbst starten. Planen können Sie aber schon während des Hausbaus.' },
            { q: 'Kann man den Garten in Etappen anlegen?', a: 'Ja, das ist sogar empfehlenswert. Zuerst Infrastruktur und Terrasse, dann Zaun und Wege, zuletzt Bepflanzung. So verteilen Sie die Kosten auf 1-2 Jahre.' },
        ],
        relatedServices: ['garten-und-landschaftsbau', 'galabau', 'terrassenbau', 'pflasterarbeiten', 'rollrasen'],
    },
];

// Helper functions
export function getBlogArticleBySlug(slug: string): BlogArticle | undefined {
    return blogArticles.find((article) => article.slug === slug);
}

export function getAllBlogSlugs(): string[] {
    return blogArticles.map((article) => article.slug);
}

export function getPublishedArticles(): BlogArticle[] {
    const today = new Date().toISOString().split('T')[0];
    return blogArticles.filter((article) => {
        if (!article.publishDate) return true;
        return article.publishDate <= today;
    });
}
