import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return res.status(500).json({ success: false, message: 'Server configuration error.' })
  }

  const resend = new Resend(apiKey)

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body
    const { personalDetails, medicalHistory, employer, injury } = body || {}

    // Verify all 4 sections exist and contain required data
    const hasPersonal = personalDetails?.fullName && personalDetails?.dob && personalDetails?.gender && personalDetails?.ethnicity && personalDetails?.address && personalDetails?.email && personalDetails?.mobile
    const hasMedical = medicalHistory?.allergies && medicalHistory?.healthConditions && medicalHistory?.medications && medicalHistory?.pharmacy
    const hasEmployer = employer?.occupation && employer?.jobTasks
    const hasInjury = injury?.reason && injury?.mechanism && injury?.injuryDate && injury?.bodyPart && injury?.locationType && injury?.nzLocation

    if (!hasPersonal || !hasMedical || !hasEmployer || !hasInjury) {
      return res.status(400).json({ success: false, message: 'Please complete all required fields on every step.' })
    }

    await resend.emails.send({
      from: 'Quote Lead <onboarding@resend.dev>',
      to: ['callumbromleydev@gmail.com'],
      subject: `New Injury / Illness Form from ${personalDetails.fullName}`,
      text: `--- 1. PERSONAL DETAILS ---
Full Name: ${personalDetails.fullName}
DOB: ${personalDetails.dob}
Gender: ${personalDetails.gender}
Ethnicity: ${personalDetails.ethnicity}
Address: ${personalDetails.address}
Email: ${personalDetails.email}
Mobile: ${personalDetails.mobile}

--- 2. MEDICAL HISTORY ---
Allergies: ${medicalHistory.allergies}
Health Conditions: ${medicalHistory.healthConditions}
Long-term Medications: ${medicalHistory.medications}
Preferred Pharmacy: ${medicalHistory.pharmacy}

--- 3. EMPLOYER ---
Occupation: ${employer.occupation}
Job Tasks: ${employer.jobTasks}

--- 4. INJURY DETAILS ---
Reason for Contact: ${injury.reason}
Mechanism of Injury: ${injury.mechanism}
Date Happened: ${injury.injuryDate}
Body Part: ${injury.bodyPart}
Location Type: ${injury.locationType}
NZ Location: ${injury.nzLocation}`,
    })

    return res.status(200).json({ success: true, message: 'Form submitted successfully!' })
  } catch (error: unknown) {
    console.error('Vercel Function Error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Failed to send submission.'
    return res.status(500).json({ success: false, message: errorMessage })
  }
}