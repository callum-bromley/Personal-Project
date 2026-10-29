import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Please fill in all fields.' })
  }

  try {
    await resend.emails.send({
      from: 'Quote Lead <onboarding@resend.dev>',
      to: ['callumbromleydev@gmail.com'], // Your inbox email
      subject: `New Quote Request from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nProject Details:\n${message}`,
    })

    return res.status(200).json({ success: true, message: 'Quote request sent successfully!' })
  } catch (error) {
    console.error('Error sending email:', error)
    return res.status(500).json({ success: false, message: 'Failed to send quote request.' })
  }
}