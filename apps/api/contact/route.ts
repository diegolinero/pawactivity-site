import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body?.name ?? '').trim();
    const email = String(body?.email ?? '').trim();
    const company = String(body?.company ?? '').trim();
    const message = String(body?.message ?? '').trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Nombre, correo y mensaje son obligatorios.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: String(process.env.SMTP_SECURE ?? 'false') === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.CONTACT_FROM_EMAIL ?? process.env.SMTP_USER,
      to: 'info@pawactivity.com',
      replyTo: email,
      subject: `Nuevo contacto desde PawActivity - ${name}`,
      text: [
        `Nombre: ${name}`,
        `Correo: ${email}`,
        `Empresa: ${company || 'No informado'}`,
        '',
        'Mensaje:',
        message,
      ].join('\n'),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
          <h2>Nuevo contacto desde PawActivity</h2>
          <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
          <p><strong>Correo:</strong> ${escapeHtml(email)}</p>
          <p><strong>Empresa/Institución:</strong> ${escapeHtml(company || 'No informado')}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact form error', error);

    return NextResponse.json(
      { message: 'No se pudo enviar el formulario en este momento.' },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}