import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    try {
        const body = await request.json();
        const { name, email, phone, plz, ort, service, message } = body;

        const { error } = await resend.emails.send({
            from: 'Garten Adler Anfrage <kontakt@garten-adler.de>',
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
            console.error('Resend error:', JSON.stringify(error));
            return NextResponse.json({ success: false, message: error.message || 'Fehler beim Senden.', detail: error }, { status: 500 });
        }

        // Bestätigungs-E-Mail an den Kunden
        await resend.emails.send({
            from: 'Adler & Sohn Galabau <kontakt@garten-adler.de>',
            to: [email],
            subject: `Ihre Anfrage ist eingegangen – Adler & Sohn Galabau`,
            replyTo: 'galabau@sohn-adler.de',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background: #166534; padding: 32px; border-radius: 12px 12px 0 0; text-align: center;">
                        <h1 style="color: white; margin: 0; font-size: 22px;">🌿 Adler & Sohn Galabau</h1>
                        <p style="color: #bbf7d0; margin: 8px 0 0; font-size: 14px;">Garten- und Landschaftsbau in Lüneburg</p>
                    </div>
                    
                    <div style="background: white; padding: 32px; border: 1px solid #e5e7eb;">
                        <h2 style="color: #166534; margin: 0 0 16px; font-size: 18px;">Vielen Dank für Ihre Anfrage, ${name}!</h2>
                        
                        <p style="color: #4b5563; line-height: 1.7; margin: 0 0 16px;">
                            Wir haben Ihre Nachricht erhalten und werden uns <strong>schnellstmöglich</strong> bei Ihnen melden – 
                            in der Regel innerhalb von <strong>24 Stunden</strong>.
                        </p>

                        <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; margin: 20px 0;">
                            <p style="color: #166534; font-weight: bold; margin: 0 0 8px; font-size: 14px;">📋 Ihre Angaben:</p>
                            <table style="width: 100%; font-size: 14px;">
                                <tr><td style="padding: 4px 0; color: #6b7280;">Leistung:</td><td style="color: #111827;">${service || 'Allgemein'}</td></tr>
                                <tr><td style="padding: 4px 0; color: #6b7280;">Ort:</td><td style="color: #111827;">${plz} ${ort}</td></tr>
                            </table>
                        </div>

                        <p style="color: #4b5563; line-height: 1.7; margin: 16px 0;">
                            Sie können uns auch direkt erreichen:
                        </p>

                        <div style="margin: 16px 0;">
                            <p style="margin: 4px 0; color: #374151;">📞 <a href="tel:+4941313942971" style="color: #166534; text-decoration: none;">04131 - 394 2971</a></p>
                            <p style="margin: 4px 0; color: #374151;">✉️ <a href="mailto:galabau@sohn-adler.de" style="color: #166534; text-decoration: none;">galabau@sohn-adler.de</a></p>
                        </div>
                    </div>
                    
                    <div style="background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px; text-align: center;">
                        <p style="color: #6b7280; font-size: 13px; margin: 0;">
                            Mit freundlichen Grüßen<br>
                            <strong style="color: #374151;">Ihr Team von Adler & Sohn Galabau</strong>
                        </p>
                        <p style="color: #9ca3af; font-size: 11px; margin: 12px 0 0;">
                            Adler & Sohn · Garten- und Landschaftsbau · Lüneburg & Umgebung
                        </p>
                    </div>
                </div>
            `,
        });

        return NextResponse.json({ success: true, message: 'Anfrage erfolgreich gesendet!' });
    } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : 'Unbekannter Fehler';
        console.error('Server error:', errorMessage);
        return NextResponse.json({ success: false, message: errorMessage }, { status: 500 });
    }
}
