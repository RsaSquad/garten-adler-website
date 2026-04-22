// Funktion um stadtspezifische FAQs zu generieren
export interface FAQItem {
    question: string;
    answer: string;
}

export function generateCityFAQs(cityName: string, region: string): FAQItem[] {
    return [
        {
            question: `Bieten Sie Gartengestaltung in ${cityName} an?`,
            answer: `Ja, wir sind regelmäßig in ${cityName} und Umgebung tätig. Wir bieten schnellen Service und persönliche Betreuung für alle Garten- und Landschaftsbau-Projekte in ${cityName}.`,
        },
        {
            question: `Was kostet ein Gärtner in ${cityName}?`,
            answer: `Die Kosten für Gartenarbeiten in ${cityName} entsprechen unseren fairem Regionalpreisen. Eine einfache Gartenpflege beginnt bei ca. 45€/Stunde, komplette Gartengestaltungen bei 80-150€/m². Kontaktieren Sie uns für ein kostenloses Angebot für Ihr Projekt in ${cityName}.`,
        },
        {
            question: `Wie schnell können Sie in ${cityName} starten?`,
            answer: `Für ${cityName} können wir meist innerhalb von 1-2 Wochen mit der Arbeit beginnen. Bei dringenden Projekten in ${cityName} sind oft auch kurzfristigere Termine möglich. Die Erstberatung vor Ort ist bereits in wenigen Tagen möglich.`,
        },
        {
            question: `Welche Gartenarbeiten bieten Sie in ${cityName} an?`,
            answer: `In ${cityName} bieten wir das komplette Spektrum: Gartengestaltung, Terrassenbau, Pflasterarbeiten, Rollrasenverlegung, Zaunbau, Heckenpflanzung, Baumfällung und regelmäßige Gartenpflege. Alles aus einer Hand für ${cityName} und ${region}.`,
        },
        {
            question: `Gibt es Referenzprojekte in ${cityName}?`,
            answer: `Ja, wir haben bereits zahlreiche Projekte in ${cityName} und der Region ${region} erfolgreich umgesetzt. Gerne zeigen wir Ihnen bei der Beratung Fotos von Referenzprojekten in Ihrer Nähe.`,
        },
        {
            question: `Muss ich bei der Gartenarbeit in ${cityName} anwesend sein?`,
            answer: `Nein, nach der gemeinsamen Planung und Absprache können wir selbstständig in ${cityName} arbeiten. Wir halten Sie per Foto und Telefon über den Fortschritt auf dem Laufenden.`,
        },
        {
            question: `Berechnen Sie Anfahrtskosten nach ${cityName}?`,
            answer: `Nein, die Anfahrt nach ${cityName} ist in unseren Angeboten bereits enthalten. Es entstehen keine zusätzlichen Anfahrtskosten für Sie.`,
        },
        {
            question: `Kennen Sie die Bodenverhältnisse in ${cityName}?`,
            answer: `Ja, durch unsere langjährige Erfahrung in ${region} kennen wir die typischen Bodenverhältnisse in ${cityName}. Ob sandiger Heideboden, Marschboden oder Lehm – wir wählen die passenden Pflanzen und Techniken für optimale Ergebnisse.`,
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
