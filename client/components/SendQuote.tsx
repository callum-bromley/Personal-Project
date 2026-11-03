import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('RESEND_API_KEY environment variable is missing!')
    return res.status(500).json({ success: false, message: 'Server configuration error.' })
  }

  const resend = new Resend(apiKey)

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body
    const { name, email, phone, company, service, budget, message } = body || {}

    // Require essential fields
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Please fill in all required fields.' })
    }

    await resend.emails.send({
      from: 'Quote Lead <onboarding@resend.dev>',
      to: ['callumbromleydev@gmail.com'],
      subject: `New Quote Request from ${name}`,
      text: `Name: ${name}
      Email: ${email}
      Phone: ${phone || 'N/A'}
      Company: ${company || 'N/A'}
      Injury: ${service || 'N/A'}
      Service Needed: ${budget || 'N/A'}

Project Details:
${message}`,
    })

    return res.status(200).json({ success: true, message: 'Quote request sent successfully!' })
  } catch (error: unknown) {
    console.error('Vercel Function Error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Failed to send quote request.'
    return res.status(500).json({ success: false, message: errorMessage })
  }
}