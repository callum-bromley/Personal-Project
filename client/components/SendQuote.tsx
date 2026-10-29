import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body
    const { name, email, message } = body || {}

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Please fill in all fields.' })
    }

    await resend.emails.send({
      from: 'Quote Lead <onboarding@resend.dev>',
      to: ['callumbromleydev@gmail.com'], // Replace with your actual Resend account email
      subject: `New Quote Request from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nProject Details:\n${message}`,
    })

    return res.status(200).json({ success: true, message: 'Quote request sent successfully!' })
  } catch (error: unknown) {
    console.error('Vercel Function Error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Failed to send quote request.'
    return res.status(500).json({ success: false, message: errorMessage })
  }
}