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
];

// Helper functions
export function getBlogArticleBySlug(slug: string): BlogArticle | undefined {
    return blogArticles.find((article) => article.slug === slug);
}

export function getAllBlogSlugs(): string[] {
    return blogArticles.map((article) => article.slug);
}
