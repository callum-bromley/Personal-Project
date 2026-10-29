'use server';

import { Resend } from 'resend';

// Pass the ENV variable NAME here, not the raw key text
const resend = new Resend(process.env.RESEND_API_KEY);

interface FormState {
  success: boolean;
  message?: string;
}

export async function sendQuoteAction(formData: FormData): Promise<FormState> {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const details = formData.get('message') as string;

  if (!name || !email || !details) {
    return { success: false, message: 'Please fill in all fields.' };
  }

  try {
    await resend.emails.send({
      from: 'Quote Lead <onboarding@resend.dev>',
      to: ['your-email@gmail.com'], // Replace with your real target inbox
      subject: `New Quote Request from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nProject Details:\n${details}`,
    });

    return { success: true, message: 'Quote request sent successfully!' };
  } catch (error) {
    console.error('Error sending quote request:', error);
    return { success: false, message: 'Failed to send quote request.' };
  }
}