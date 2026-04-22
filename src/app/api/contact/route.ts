import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, plz, ort, service, message } = body;

        // Send email via Web3Forms (free, no signup needed for basic)
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                access_key: process.env.WEB3FORMS_KEY,
                subject: `Neue Anfrage von ${name} - ${service || 'Allgemein'}`,
                from_name: 'Garten Adler Website',
                to: 'galabau@sohn-adler.de',
                name,
                email,
                phone: phone || 'Nicht angegeben',
                plz,
                ort,
                service: service || 'Nicht ausgewählt',
                message,
            }),
        });

        const data = await response.json();

        if (data.success) {
            return NextResponse.json({ success: true, message: 'Anfrage erfolgreich gesendet!' });
        } else {
            return NextResponse.json({ success: false, message: 'Fehler beim Senden.' }, { status: 500 });
        }
    } catch {
        return NextResponse.json({ success: false, message: 'Serverfehler.' }, { status: 500 });
    }
}
