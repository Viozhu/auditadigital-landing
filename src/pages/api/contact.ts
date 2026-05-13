import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const json = (msg: string, status = 200) =>
    new Response(JSON.stringify({ ok: status < 400, error: status >= 400 ? msg : undefined }), {
      status,
      headers: { 'Content-Type': 'application/json' },
    });

  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return json('Formato inválido', 400);
  }

  const { nombre, email, asunto, mensaje } = body;

  if (!nombre?.trim() || !email?.trim() || !asunto?.trim() || !mensaje?.trim()) {
    return json('Todos los campos son obligatorios', 400);
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return json('Email inválido', 400);
  }

  const apiKey = import.meta.env.RESEND_API_KEY;
  const toEmail = import.meta.env.CONTACT_EMAIL;

  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY no configurada');
    return json('Servicio no configurado', 500);
  }

  if (!toEmail) {
    console.error('[contact] CONTACT_EMAIL no configurada');
    return json('Servicio no configurado', 500);
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: 'AuditaDigital <onboarding@resend.dev>',
    to: toEmail,
    replyTo: email,
    subject: `[Contacto] ${asunto}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <h2 style="color:#050505">Nuevo mensaje de contacto</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#666;width:100px">Nombre</td><td style="padding:8px 0;font-weight:500">${nombre}</td></tr>
          <tr><td style="padding:8px 0;color:#666">Email</td><td style="padding:8px 0"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px 0;color:#666">Asunto</td><td style="padding:8px 0">${asunto}</td></tr>
          <tr><td style="padding:8px 0;color:#666;vertical-align:top">Mensaje</td><td style="padding:8px 0;white-space:pre-wrap">${mensaje}</td></tr>
        </table>
      </div>
    `,
  });

  if (error) {
    console.error('[contact] Resend error:', JSON.stringify(error));
    return json(`Error Resend: ${error.message}`, 500);
  }

  return json('ok');
};
