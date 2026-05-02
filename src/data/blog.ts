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
