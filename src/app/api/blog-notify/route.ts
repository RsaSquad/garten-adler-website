import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { blogArticles } from '@/data/blog';

export const dynamic = 'force-dynamic';

/**
 * Blog Publish Notification Endpoint
 * 
 * Called daily by Vercel Cron (or GitHub Actions) to check for newly
 * published articles and send an email notification via Resend.
 * 
 * Security: Requires CRON_SECRET header or Vercel's built-in cron auth.
 */
export async function GET(request: Request) {
    // ── Auth Check ──────────────────────────────────────────────────
    const authHeader = request.headers.get('authorization');
    const cronSecret = process.env.CRON_SECRET;

    // Vercel Cron sends its own auth header automatically
    // For manual/GH Actions calls, we check CRON_SECRET
    if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // ── Find articles published today or earlier that are "new" ─────
    const today = new Date().toISOString().split('T')[0];

    const publishedToday = blogArticles.filter((article) => {
        return article.publishDate === today;
    });

    const allPublished = blogArticles.filter((article) => {
        return article.publishDate <= today;
    });

    // If no articles are due today, just log and return
    if (publishedToday.length === 0) {
        return NextResponse.json({
            success: true,
            message: `Kein neuer Artikel für heute (${today}). ${allPublished.length} Artikel insgesamt veröffentlicht.`,
            publishedToday: 0,
            totalPublished: allPublished.length,
        });
    }

    // ── Send Email via Resend ───────────────────────────────────────
    const resend = new Resend(process.env.RESEND_API_KEY);

    const articleList = publishedToday
        .map((a) => `• ${a.title}\n  → https://garten-adler.de/blog/${a.slug}`)
        .join('\n\n');

    try {
        const { error } = await resend.emails.send({
            from: 'LüneGrün Blog <kontakt@garten-adler.de>',
            to: ['rsa.schule@gmail.com'],
            subject: `🌿 ${publishedToday.length} neue(r) Blog-Artikel online — ${today}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background: #166534; padding: 24px; border-radius: 12px 12px 0 0;">
                        <h1 style="color: white; margin: 0; font-size: 20px;">🌿 LüneGrün Blog Update</h1>
                        <p style="color: #bbf7d0; margin: 8px 0 0;">Automatische Veröffentlichung — ${today}</p>
                    </div>
                    
                    <div style="background: white; padding: 24px; border: 1px solid #e5e7eb;">
                        <h2 style="color: #166534; margin: 0 0 16px; font-size: 18px;">
                            ${publishedToday.length} neue(r) Artikel heute veröffentlicht:
                        </h2>
                        
                        ${publishedToday.map((a) => `
                            <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; margin: 12px 0;">
                                <p style="font-weight: bold; color: #111827; margin: 0 0 4px;">${a.title}</p>
                                <p style="color: #6b7280; font-size: 13px; margin: 0 0 8px;">${a.category} · ${a.readingTime} Min. Lesezeit</p>
                                <a href="https://garten-adler.de/blog/${a.slug}" style="color: #166534; font-size: 14px; font-weight: bold;">
                                    → Artikel ansehen
                                </a>
                            </div>
                        `).join('')}
                        
                        <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #e5e7eb;">
                            <p style="color: #6b7280; font-size: 13px; margin: 0;">
                                Insgesamt ${allPublished.length} von ${blogArticles.length} Artikeln veröffentlicht.
                            </p>
                            <a href="https://garten-adler.de/blog" style="color: #166534; font-size: 14px; font-weight: bold; display: inline-block; margin-top: 8px;">
                                🔗 Alle Artikel ansehen
                            </a>
                        </div>
                    </div>
                    
                    <div style="background: #f9fafb; padding: 16px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px; text-align: center;">
                        <p style="color: #9ca3af; font-size: 11px; margin: 0;">
                            Diese Nachricht wurde automatisch vom LüneGrün Blog-System gesendet.
                        </p>
                    </div>
                </div>
            `,
        });

        if (error) {
            console.error('Blog notify email error:', error);
            return NextResponse.json({
                success: false,
                message: 'E-Mail-Versand fehlgeschlagen',
                error: error.message,
            }, { status: 500 });
        }

        return NextResponse.json({
            success: true,
            message: `${publishedToday.length} Artikel veröffentlicht, E-Mail gesendet an rsa.schule@gmail.com`,
            publishedToday: publishedToday.length,
            articles: publishedToday.map((a) => a.title),
            totalPublished: allPublished.length,
        });
    } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : 'Unbekannter Fehler';
        console.error('Blog notify error:', errorMessage);
        return NextResponse.json({ success: false, message: errorMessage }, { status: 500 });
    }
}
