import 'resend';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  const json = (msg, status = 200) => new Response(JSON.stringify({ ok: status < 400, error: status >= 400 ? msg : void 0 }), {
    status,
    headers: { "Content-Type": "application/json" }
  });
  let body;
  try {
    body = await request.json();
  } catch {
    return json("Formato inválido", 400);
  }
  const { nombre, email, asunto, mensaje } = body;
  if (!nombre?.trim() || !email?.trim() || !asunto?.trim() || !mensaje?.trim()) {
    return json("Todos los campos son obligatorios", 400);
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return json("Email inválido", 400);
  }
  {
    return json("Servicio no configurado", 500);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
