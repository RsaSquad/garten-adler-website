import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    try {
        const formData = await request.formData();

        const position = formData.get('position') as string;
        const firstName = formData.get('firstName') as string;
        const lastName = formData.get('lastName') as string;
        const phone = formData.get('phone') as string;
        const email = formData.get('email') as string;
        const experience = formData.get('experience') as string;
        const licensesRaw = formData.get('licenses') as string;
        const licenses: string[] = licensesRaw ? JSON.parse(licensesRaw) : [];
        const startDate = formData.get('startDate') as string;
        const message = formData.get('message') as string;

        // Dateien verarbeiten
        const files = formData.getAll('files') as File[];
        const attachments = await Promise.all(
            files.map(async (file) => {
                const arrayBuffer = await file.arrayBuffer();
                const buffer = Buffer.from(arrayBuffer);
                return {
                    filename: file.name,
                    content: buffer,
                };
            })
        );

        const licensesText = licenses.length > 0 ? licenses.join(', ') : 'Keine Angabe';
        const attachmentNote = attachments.length > 0
            ? `<tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151; width: 160px;">Anhänge</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${attachments.map(a => `📎 ${a.filename}`).join('<br>')}</td>
               </tr>`
            : '';

        // Benachrichtigungs-E-Mail an das Unternehmen
        const { error } = await resend.emails.send({
            from: 'Garten Adler Bewerbung <kontakt@garten-adler.de>',
            to: ['galabau@sohn-adler.de'],
            subject: `Neue Bewerbung: ${position} – ${firstName} ${lastName}`,
            replyTo: email,
            attachments: attachments.length > 0 ? attachments : undefined,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background: #166534; padding: 24px; border-radius: 12px 12px 0 0;">
                        <h1 style="color: white; margin: 0; font-size: 20px;">🌿 Neue Bewerbung eingegangen</h1>
                        <p style="color: #bbf7d0; margin: 8px 0 0;">über garten-adler.de</p>
                    </div>
                    
                    <div style="background: #f9fafb; padding: 24px; border: 1px solid #e5e7eb;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151; width: 160px;">Position</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${position}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Vorname</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${firstName}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Nachname</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${lastName}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">E-Mail</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;"><a href="mailto:${email}">${email}</a></td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Telefon</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${phone}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Berufserfahrung</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${experience}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Führerschein</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${licensesText}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Frühester Eintritt</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${startDate}</td>
                            </tr>
                            ${attachmentNote}
                        </table>
                    </div>
                    
                    ${message ? `
                    <div style="background: white; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
                        <h3 style="color: #374151; margin: 0 0 12px;">Nachricht:</h3>
                        <p style="color: #4b5563; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                    </div>
                    ` : `
                    <div style="border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px; height: 1px;"></div>
                    `}
                    
                    <p style="color: #9ca3af; font-size: 12px; text-align: center; margin-top: 16px;">
                        Diese Bewerbung wurde über das Bewerbungsformular auf garten-adler.de gesendet.
                    </p>
                </div>
            `,
        });

        if (error) {
            console.error('Resend error:', JSON.stringify(error));
            return NextResponse.json({ success: false, message: error.message || 'Fehler beim Senden.', detail: error }, { status: 500 });
        }

        // Bestätigungs-E-Mail an den Bewerber
        await resend.emails.send({
            from: 'Adler & Sohn Galabau <kontakt@garten-adler.de>',
            to: [email],
            subject: 'Deine Bewerbung ist eingegangen – Adler & Sohn Galabau',
            replyTo: 'galabau@sohn-adler.de',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background: #166534; padding: 32px; border-radius: 12px 12px 0 0; text-align: center;">
                        <h1 style="color: white; margin: 0; font-size: 22px;">🌿 Adler & Sohn Galabau</h1>
                        <p style="color: #bbf7d0; margin: 8px 0 0; font-size: 14px;">Garten- und Landschaftsbau in Lüneburg</p>
                    </div>
                    
                    <div style="background: white; padding: 32px; border: 1px solid #e5e7eb;">
                        <h2 style="color: #166534; margin: 0 0 16px; font-size: 18px;">Vielen Dank für deine Bewerbung, ${firstName}!</h2>
                        
                        <p style="color: #4b5563; line-height: 1.7; margin: 0 0 16px;">
                            Wir haben deine Bewerbung als <strong>${position}</strong> erhalten und freuen uns über dein Interesse an unserem Team.
                        </p>

                        <p style="color: #4b5563; line-height: 1.7; margin: 0 0 16px;">
                            Wir werden deine Unterlagen sorgfältig prüfen und melden uns <strong>innerhalb von 48 Stunden</strong> bei dir zurück.
                        </p>

                        <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; margin: 20px 0;">
                            <p style="color: #166534; font-weight: bold; margin: 0 0 8px; font-size: 14px;">📋 Deine Angaben:</p>
                            <table style="width: 100%; font-size: 14px;">
                                <tr><td style="padding: 4px 0; color: #6b7280;">Position:</td><td style="color: #111827;">${position}</td></tr>
                                <tr><td style="padding: 4px 0; color: #6b7280;">Berufserfahrung:</td><td style="color: #111827;">${experience}</td></tr>
                                <tr><td style="padding: 4px 0; color: #6b7280;">Führerschein:</td><td style="color: #111827;">${licensesText}</td></tr>
                                <tr><td style="padding: 4px 0; color: #6b7280;">Frühester Eintritt:</td><td style="color: #111827;">${startDate}</td></tr>
                                ${attachments.length > 0 ? `<tr><td style="padding: 4px 0; color: #6b7280;">Anhänge:</td><td style="color: #111827;">${attachments.length} Datei(en)</td></tr>` : ''}
                            </table>
                        </div>

                        <p style="color: #4b5563; line-height: 1.7; margin: 16px 0;">
                            Du kannst uns auch direkt erreichen:
                        </p>

                        <div style="margin: 16px 0;">
                            <p style="margin: 4px 0; color: #374151;">📞 <a href="tel:+4941313942971" style="color: #166534; text-decoration: none;">04131 - 394 2971</a></p>
                            <p style="margin: 4px 0; color: #374151;">✉️ <a href="mailto:galabau@sohn-adler.de" style="color: #166534; text-decoration: none;">galabau@sohn-adler.de</a></p>
                        </div>
                    </div>
                    
                    <div style="background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px; text-align: center;">
                        <p style="color: #6b7280; font-size: 13px; margin: 0;">
                            Mit freundlichen Grüßen<br>
                            <strong style="color: #374151;">Dein Team von Adler & Sohn Galabau</strong>
                        </p>
                        <p style="color: #9ca3af; font-size: 11px; margin: 12px 0 0;">
                            Adler & Sohn · Garten- und Landschaftsbau · Lüneburg & Umgebung
                        </p>
                    </div>
                </div>
            `,
        });

        return NextResponse.json({ success: true, message: 'Bewerbung erfolgreich gesendet!' });
    } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : 'Unbekannter Fehler';
        console.error('Server error:', errorMessage);
        return NextResponse.json({ success: false, message: errorMessage }, { status: 500 });
    }
}
