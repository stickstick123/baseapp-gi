import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    name,
    email,
    phone,
    company,
    jobTitle,
    town,
    features,
  } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    await resend.emails.send({
      from: "Website <onboarding@resend.dev>", // cambiar por dominio verificado
      to: "uk@baseapp.co.uk",
      subject: "New Contact Form Submission",
      reply_to: email,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company || "-"}</p>
        <p><strong>Job Title:</strong> ${jobTitle || "-"}</p>
        <p><strong>Town/City:</strong> ${town || "-"}</p>
        <p><strong>Features:</strong> ${features || "-"}</p>

      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: "Email failed" });
  }
}
