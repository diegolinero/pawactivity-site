import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

function getSmtpConfig() {
  const requiredEnvVars = [
    'SMTP_HOST',
    'SMTP_PORT',
    'SMTP_SECURE',
    'SMTP_USER',
    'SMTP_PASS',
    'CONTACT_FROM_EMAIL',
  ] as const;

  const missing = requiredEnvVars.filter((name) => !process.env[name]);

  if (missing.length > 0) {
    throw new Error(`Missing required SMTP configuration: ${missing.join(', ')}`);
  }

  return {
    host: process.env.SMTP_HOST!,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true',
    user: process.env.SMTP_USER!,
    pass: process.env.SMTP_PASS!,
    fromEmail: process.env.CONTACT_FROM_EMAIL!,
  };
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string;
      email?: string;
      company?: string;
      message?: string;
    };

    const name = body.name?.trim() ?? '';
    const email = body.email?.trim() ?? '';
    const company = body.company?.trim() ?? '';
    const message = body.message?.trim() ?? '';

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Los campos nombre, email y mensaje son obligatorios.' },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ message: 'El correo electrónico no es válido.' }, { status: 400 });
    }

    const smtp = getSmtpConfig();
    const transporter = nodemailer.createTransport({
      host: smtp.host,
      port: smtp.port,
      secure: smtp.secure,
      auth: {
        user: smtp.user,
        pass: smtp.pass,
      },
    });

    await transporter.sendMail({
      from: smtp.fromEmail,
      to: 'info@pawactivity.com',
      replyTo: email,
      subject: `Nuevo contacto desde PawActivity - ${name}`,
      text: [
        'Nuevo contacto desde la landing de PawActivity',
        '',
        `Nombre: ${name}`,
        `Email: ${email}`,
        `Empresa: ${company || 'No indicada'}`,
        '',
        'Mensaje:',
        message,
      ].join('\n'),
      html: `
        <p><strong>Nuevo contacto desde la landing de PawActivity</strong></p>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Empresa:</strong> ${company || 'No indicada'}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    return NextResponse.json({ message: 'Mensaje enviado correctamente.' }, { status: 200 });
  } catch (error) {
    console.error('Error sending contact email', error);
    return NextResponse.json(
      { message: 'No se pudo enviar el mensaje en este momento. Inténtalo nuevamente más tarde.' },
      { status: 500 },
    );
  }
}
