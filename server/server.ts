import * as Path from 'node:path'
import express from 'express'
import cors from 'cors'
import { Resend } from 'resend'
import 'dotenv/config'

const server = express()

// 1. Middleware MUST be at the top before any routes
server.use(express.json())
server.use(cors({ origin: '*' }))

// 2. Initialize Resend with your .env key
const resend = new Resend(process.env.RESEND_API_KEY)

// 3. Existing Greeting Route
server.get('/api/v1/greeting', (req, res) => {
  const greetings = ['hola', 'hi', 'hello', 'howdy']
  const index = Math.floor(Math.random() * greetings.length)
  console.log(index)
  res.json({ greeting: greetings[index] })
})

// 4. New Quote Request Route
server.post('/api/v1/quote', async (req, res) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Please fill in all fields.' })
  }

  try {
    await resend.emails.send({
      from: 'Quote Lead <onboarding@resend.dev>',
      to: ['your-email@gmail.com'], // Replace with your real email address!
      subject: `New Quote Request from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nProject Details:\n${message}`,
    })

    return res.json({ success: true, message: 'Quote request sent successfully!' })
  } catch (error) {
    console.error('Error sending email:', error)
    return res.status(500).json({ success: false, message: 'Failed to send quote request.' })
  }
})

// 5. Production Static Serving
if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
