// Copia de la función «contacto» desplegada en Supabase (Edge Functions), con verify_jwt desactivado.
// Recibe el formulario de contacto: guarda el mensaje y, si hay RESEND_API_KEY, lo envía por correo.
// La dirección de destino está en la base de datos (private.config, clave contact_to), nunca en la web.
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "content-type, apikey, authorization, x-client-info",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });
const str = (v: unknown, max: number) => (typeof v === "string" ? v.slice(0, max) : "");

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
  if (req.method !== "POST") return json({ error: "method" }, 405);
  let data: Record<string, unknown>;
  try { data = await req.json(); } catch { return json({ error: "invalid_input" }, 400); }
  // Campo trampa: los robots lo rellenan; se responde como si todo hubiera ido bien.
  if (str(data.web, 200)) return json({ ok: true });

  const name = str(data.name, 200), email = str(data.email, 300), phone = str(data.phone, 100), body = str(data.body, 5000);
  const ip = (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim();
  const db = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  const { data: r, error } = await db.rpc("add_contact", { p_name: name, p_email: email, p_phone: phone, p_body: body, p_ip: ip });
  if (error) { console.error("add_contact", error.message); return json({ error: "server" }, 500); }
  if (r?.error) return json({ error: r.error }, r.error === "rate_limit" ? 429 : 400);

  const key = Deno.env.get("RESEND_API_KEY");
  if (key && r?.to) {
    try {
      const lines = [
        `Nombre: ${name.trim()}`,
        `Correo: ${email.trim() || "(no indicado)"}`,
        `Teléfono: ${phone.trim() || "(no indicado)"}`,
        "",
        body.trim(),
        "",
        "—",
        "Enviado desde el formulario de contacto de «España, un país que puede funcionar».",
      ];
      const mail: Record<string, unknown> = {
        from: Deno.env.get("CONTACT_FROM") ?? "España puede funcionar <onboarding@resend.dev>",
        to: [r.to],
        subject: `Nuevo mensaje de ${name.trim().replace(/[\r\n]+/g, " ").slice(0, 80)}`,
        text: lines.join("\n"),
      };
      if (/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim())) mail.reply_to = email.trim();
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
        body: JSON.stringify(mail),
      });
      if (res.ok) await db.rpc("contact_emailed", { p_id: r.id });
      else console.error("resend", res.status, await res.text());
    } catch (e) { console.error("resend", String(e)); }
  }
  return json({ ok: true });
});
