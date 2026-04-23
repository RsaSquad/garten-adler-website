// Funktion um stadtspezifische FAQs zu generieren
export interface FAQItem {
    question: string;
    answer: string;
}

export function generateCityFAQs(cityName: string, region: string): FAQItem[] {
    return [
        {
            question: `Bieten Sie Gartengestaltung in ${cityName} an?`,
            answer: `Ja, wir sind regelmäßig in ${cityName} und der näheren Umgebung im Einsatz. Von der Erstberatung vor Ort bis zur fertigen Umsetzung betreuen wir Sie persönlich – schnell und zuverlässig.`,
        },
        {
            question: `Was kostet ein Gärtner in ${cityName}?`,
            answer: `Die Kosten hängen – wie überall – vom Umfang, dem Material und dem Zugang zum Grundstück ab. Kleinere Pflegearbeiten sind natürlich günstiger als komplette Neugestaltungen mit Pflaster- oder Terrassenbau. Am besten vereinbaren Sie einen kostenlosen Beratungstermin, dann können wir ein konkretes Angebot erstellen.`,
        },
        {
            question: `Wie schnell können Sie in ${cityName} starten?`,
            answer: `In der Regel können wir innerhalb von 1–2 Wochen loslegen. Bei dringenden Anliegen finden wir oft auch schneller einen Termin. Die Erstberatung vor Ort ist meist schon in wenigen Tagen möglich.`,
        },
        {
            question: `Welche Gartenarbeiten übernehmen Sie?`,
            answer: `Wir decken das gesamte Spektrum des Garten- und Landschaftsbaus ab: Gartengestaltung, Terrassenbau, Pflasterarbeiten, Rollrasen, Zaunbau, Heckenpflege, Baumpflege und regelmäßige Gartenpflege. Alles aus einer Hand.`,
        },
        {
            question: `Haben Sie schon Projekte in der Region ${region} umgesetzt?`,
            answer: `Ja, wir haben bereits viele Projekte in der Region erfolgreich realisiert. Bei der Beratung zeigen wir Ihnen gerne Referenzfotos aus Ihrer Nähe.`,
        },
        {
            question: `Muss ich während der Arbeiten anwesend sein?`,
            answer: `Nein, nach der gemeinsamen Planung und Abstimmung arbeiten wir selbstständig. Wir halten Sie per Foto und telefonisch über den Fortschritt auf dem Laufenden.`,
        },
        {
            question: `Fallen Anfahrtskosten an?`,
            answer: `Nein, die Anfahrt ist in unseren Angeboten bereits enthalten. Es entstehen keine zusätzlichen Kosten für Sie.`,
        },
        {
            question: `Kennen Sie die Bodenverhältnisse in der Region?`,
            answer: `Durch unsere langjährige Erfahrung in ${region} kennen wir die typischen Gegebenheiten vor Ort gut. Ob sandiger Heideboden, Marschboden oder Lehm – wir wählen passende Pflanzen und Techniken für ein optimales Ergebnis.`,
        },
    ];
}

// Standard FAQ Items für die Startseite
export const homepageFAQs: FAQItem[] = [
    {
        question: 'Wie läuft eine Gartenberatung bei Adler & Sohn ab?',
        answer: 'Wir vereinbaren einen Vor-Ort-Termin, bei dem wir Ihren Garten besichtigen und Ihre Wünsche besprechen. Anschließend erhalten Sie ein unverbindliches Angebot mit detaillierter Kostenschätzung. Die Erstberatung ist kostenlos!',
    },
    {
        question: 'Wie viel kostet eine Gartengestaltung?',
        answer: 'Die Kosten variieren je nach Größe und Umfang. Eine einfache Bepflanzung beginnt bei ca. 50€/m², eine komplette Gartengestaltung mit Terrasse, Wegen und Bepflanzung liegt bei 150-300€/m². Wir erstellen Ihnen gerne ein individuelles Angebot.',
    },
    {
        question: 'Wie lange dauert eine Gartengestaltung?',
        answer: 'Ein kleiner Garten (bis 200m²) ist in 1-2 Wochen fertig. Größere Projekte mit Terrasse, Pflasterarbeiten und komplexer Bepflanzung benötigen 3-6 Wochen. Den genauen Zeitplan erhalten Sie mit unserem Angebot.',
    },
    {
        question: 'Arbeiten Sie auch im Winter?',
        answer: 'Ja! Viele Arbeiten wie Pflasterarbeiten, Zaunbau oder Terrassenbau können auch im Winter durchgeführt werden, sofern kein strenger Frost herrscht. Pflanzarbeiten verschieben wir auf geeignete Zeitpunkte.',
    },
    {
        question: 'Bieten Sie auch Gartenpflege an?',
        answer: 'Ja, wir bieten regelmäßige Gartenpflege als Monats- oder Jahresvertrag an. Dazu gehören Rasenmähen, Heckenschnitt, Unkrautentfernung, Düngung und Bewässerung. Fragen Sie nach unseren Pflegepaketen!',
    },
    {
        question: 'Welche Zahlungsmöglichkeiten gibt es?',
        answer: 'Wir akzeptieren Überweisung und bei größeren Projekten auch Ratenzahlung. Bei Projekten über 5.000€ vereinbaren wir Teilzahlungen nach Baufortschritt.',
    },
    {
        question: 'Wie weit reicht Ihr Einzugsgebiet?',
        answer: 'Wir sind in Hamburg und einem Umkreis von ca. 150km aktiv. Das umfasst die gesamte Metropolregion Hamburg, Schleswig-Holstein bis Kiel/Lübeck, Niedersachsen bis Bremen/Oldenburg und die Lüneburger Heide.',
    },
    {
        question: 'Können Sie auch kleine Gärten gestalten?',
        answer: 'Absolut! Gerade kleine Gärten profitieren von professioneller Planung. Mit cleveren Raumkonzepten, vertikalen Elementen und gezielter Bepflanzung holen wir das Maximum aus jedem Quadratmeter.',
    },
    {
        question: 'Was ist im Festpreisangebot enthalten?',
        answer: 'Unser Festpreis umfasst alle Arbeiten, Materialien, Anfahrt und Entsorgung. Es gibt keine versteckten Kosten. Nur bei unvorhergesehenen Gegebenheiten (z.B. Fels im Untergrund) können Mehrkosten entstehen – diese besprechen wir vorher.',
    },
    {
        question: 'Übernehmen Sie auch die Entsorgung von Grünschnitt und Aushub?',
        answer: 'Ja, die fachgerechte Entsorgung von Grünschnitt, Erdaushub und Bauschutt ist in unseren Angeboten enthalten. Alles wird umweltgerecht über zertifizierte Entsorgungsbetriebe abgewickelt.',
    },
    {
        question: 'Welche Garantie geben Sie auf Ihre Arbeiten?',
        answer: 'Auf Pflasterarbeiten und Terrassenbau geben wir 5 Jahre Gewährleistung, auf Zaunbau 3 Jahre. Für Pflanzen gilt eine Anwachsgarantie von einem Jahr bei regelmäßiger Bewässerung.',
    },
    {
        question: 'Brauche ich für Gartenarbeiten eine Genehmigung?',
        answer: 'Für die meisten Gartenarbeiten benötigen Sie keine Genehmigung. Bei Mauern über 2m Höhe, größeren Versiegelungen oder Baumfällungen kann eine Genehmigung erforderlich sein. Wir beraten Sie hierzu.',
    },
    {
        question: 'Können Sie einen barrierefreien Garten gestalten?',
        answer: 'Ja, wir haben Erfahrung mit barrierefreien Gärten. Dazu gehören stufenlose Wege, rutschfeste Beläge, erhöhte Beete und ausreichend breite Wege für Rollstühle oder Rollatoren.',
    },
    {
        question: 'Wie pflege ich meinen neuen Garten richtig?',
        answer: 'Nach Fertigstellung erhalten Sie eine Pflegeanleitung für Ihre Pflanzen. Grundsätzlich: Regelmäßig wässern (besonders im ersten Jahr), 2x jährlich düngen und Unkraut entfernen. Gerne übernehmen wir auch die Pflege für Sie.',
    },
    {
        question: 'Arbeiten Sie mit Subunternehmern?',
        answer: 'Nein, alle Arbeiten werden von unserem eigenen, festangestellten Team durchgeführt. So garantieren wir gleichbleibend hohe Qualität und haben einen direkten Draht zu allen Mitarbeitern vor Ort.',
    },
];
