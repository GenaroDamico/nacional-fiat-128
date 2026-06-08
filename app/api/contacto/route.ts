import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { nombre, email, mensaje } = await request.json();

  if (!nombre || !email || !mensaje) {
    return Response.json({ error: "Faltan campos" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Nacional Fiat 128 <onboarding@resend.dev>",
    to: ["gena.damico@gmail.com"],
    subject: `Mensaje de ${nombre}`,
    html: `
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensaje:</strong> ${mensaje}</p>
    `,
  });

  if (error) {
    return Response.json({ error }, { status: 500 });
  }

  return Response.json({ success: true });
}