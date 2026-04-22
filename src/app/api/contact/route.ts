import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    try {
        const body = await request.json();
        const { name, email, phone, plz, ort, service, message } = body;

        const { error } = await resend.emails.send({
            from: 'Garten Adler Website <onboarding@resend.dev>',
            to: ['galabau@sohn-adler.de'],
            subject: `Neue Anfrage von ${name} – ${service || 'Allgemein'}`,
            replyTo: email,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background: #166534; padding: 24px; border-radius: 12px 12px 0 0;">
                        <h1 style="color: white; margin: 0; font-size: 20px;">🌿 Neue Kontaktanfrage</h1>
                        <p style="color: #bbf7d0; margin: 8px 0 0;">über garten-adler.de</p>
                    </div>
                    
                    <div style="background: #f9fafb; padding: 24px; border: 1px solid #e5e7eb;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151; width: 140px;">Name</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${name}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">E-Mail</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;"><a href="mailto:${email}">${email}</a></td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Telefon</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${phone || 'Nicht angegeben'}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">PLZ / Ort</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${plz} ${ort}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Leistung</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${service || 'Nicht ausgewählt'}</td>
                            </tr>
                        </table>
                    </div>
                    
                    <div style="background: white; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
                        <h3 style="color: #374151; margin: 0 0 12px;">Nachricht:</h3>
                        <p style="color: #4b5563; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                    </div>
                    
                    <p style="color: #9ca3af; font-size: 12px; text-align: center; margin-top: 16px;">
                        Diese Nachricht wurde über das Kontaktformular auf garten-adler.de gesendet.
                    </p>
                </div>
            `,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json({ success: false, message: 'Fehler beim Senden.' }, { status: 500 });
        }

        return NextResponse.json({ success: true, message: 'Anfrage erfolgreich gesendet!' });
    } catch (err) {
        console.error('Server error:', err);
        return NextResponse.json({ success: false, message: 'Serverfehler.' }, { status: 500 });
    }
}
