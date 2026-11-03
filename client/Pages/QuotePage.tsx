import { useState, FormEvent } from 'react'

interface StatusState {
  success?: boolean
  message?: string
}

export default function QuoteForm() {
  const [step, setStep] = useState<number>(1)

  // Step 1: Personal Details (All Required)
  const [fullName, setFullName] = useState<string>('')
  const [dob, setDob] = useState<string>('')
  const [gender, setGender] = useState<string>('')
  const [ethnicity, setEthnicity] = useState<string>('')
  const [address, setAddress] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [mobile, setMobile] = useState<string>('')

  // Step 2: Medical History (All Required)
  const [allergies, setAllergies] = useState<string>('')
  const [healthConditions, setHealthConditions] = useState<string>('')
  const [medications, setMedications] = useState<string>('')
  const [pharmacy, setPharmacy] = useState<string>('')

  // Step 3: Employer (All Required)
  const [occupation, setOccupation] = useState<string>('')
  const [jobTasks, setJobTasks] = useState<string>('')

  // Step 4: Injury Details (All Required)
  const [reason, setReason] = useState<string>('')
  const [mechanism, setMechanism] = useState<string>('')
  const [injuryDate, setInjuryDate] = useState<string>('')
  const [bodyPart, setBodyPart] = useState<string>('')
  const [locationType, setLocationType] = useState<string>('')
  const [nzLocation, setNzLocation] = useState<string>('')

  const [loading, setLoading] = useState<boolean>(false)
  const [status, setStatus] = useState<StatusState>({})

  const handleNextStep = (e: FormEvent) => {
    e.preventDefault()
    setStep((prev) => Math.min(prev + 1, 4))
  }

  const handlePrevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1))
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setStatus({})

    const payload = {
      personalDetails: { fullName, dob, gender, ethnicity, address, email, mobile },
      medicalHistory: { allergies, healthConditions, medications, pharmacy },
      employer: { occupation, jobTasks },
      injury: { reason, mechanism, injuryDate, bodyPart, locationType, nzLocation },
    }

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data: StatusState = await response.json()
      setStatus(data)

      if (data.success) {
        setStep(1)
        setFullName(''); setDob(''); setGender(''); setEthnicity(''); setAddress(''); setEmail(''); setMobile('')
        setAllergies(''); setHealthConditions(''); setMedications(''); setPharmacy('')
        setOccupation(''); setJobTasks('')
        setReason(''); setMechanism(''); setInjuryDate(''); setBodyPart(''); setLocationType(''); setNzLocation('')
      }
    } catch (err) {
      console.error(err)
      setStatus({ success: false, message: 'Network error. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50/60 flex flex-col justify-between items-center py-6 px-4 sm:px-8 relative overflow-hidden font-sans">
      <div className="absolute -top-24 -left-20 w-96 h-96 bg-slate-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-20 w-96 h-96 bg-gray-200/40 rounded-full blur-3xl pointer-events-none" />

      <header className="mt-14 w-full max-w-4xl pt-2 pb-4 text-center relative z-10">
        <img src="https://res.cloudinary.com/dynrnpszg/image/upload/v1786686495/502f887f5c5d67d1ed0a90fefcb996d5_tenjrr.jpg" alt="MaiHealth Logo" className="h-14 mx-auto object-contain" />
      </header>

      <main className="w-full max-w-2xl my-auto relative z-10">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-light text-slate-900 tracking-tight sm:text-3xl">
            <span className="font-semibold text-slate-900"> Injury / Illness Form</span>
          </h1>
          <p className="mt-1.5 text-xs text-slate-500 font-normal">Step {step} of 4</p>

          <div className="w-full bg-slate-200 h-1.5 rounded-full mt-3 overflow-hidden">
            <div
              className="bg-slate-900 h-full transition-all duration-300 ease-out"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-3xl p-6 sm:p-10 transition-all duration-300">
          {status.message && (
            <div
              className={`p-3.5 mb-6 text-xs font-medium tracking-wide rounded-2xl border ${
                status.success
                  ? 'bg-emerald-50/80 text-emerald-900 border-emerald-200/60'
                  : 'bg-rose-50/80 text-rose-900 border-rose-200/60'
              }`}
            >
              {status.message}
            </div>
          )}

          {/* SLIDE 1: Personal Details */}
          {step === 1 && (
            <form onSubmit={handleNextStep} className="space-y-4">
              <h2 className="text-base font-semibold text-slate-800 border-b border-slate-100 pb-2">
                1. Personal Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Full Name *</label>
                  <input type="text" required value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-slate-900" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Date of Birth *</label>
                  <input type="date" required value={dob} onChange={(e) => setDob(e.target.value)} className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-slate-900" />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Gender *</label>
                  <input type="text" required value={gender} onChange={(e) => setGender(e.target.value)} className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-slate-900" placeholder="e.g. Male / Female / Other" />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Ethnicity *</label>
                  <input type="text" required value={ethnicity} onChange={(e) => setEthnicity(e.target.value)} className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-slate-900" placeholder="e.g. NZ European, Māori" />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Email Address *</label>
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-slate-900" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Mobile *</label>
                  <input type="tel" required value={mobile} onChange={(e) => setMobile(e.target.value)} className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-slate-900" placeholder="021 000 0000" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Address *</label>
                <input type="text" required value={address} onChange={(e) => setAddress(e.target.value)} className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-slate-900" placeholder="123 Street, Suburb, City" />
              </div>
              <div className="pt-2 flex justify-end">
                <button type="submit" className="py-3 px-6 bg-slate-900 hover:bg-black text-white font-medium text-xs sm:text-sm rounded-xl transition-all">Next: Medical History &rarr;</button>
              </div>
            </form>
          )}

          {/* SLIDE 2: Medical History */}
          {step === 2 && (
            <form onSubmit={handleNextStep} className="space-y-4">
              <h2 className="text-base font-semibold text-slate-800 border-b border-slate-100 pb-2">
                2. Medical History
              </h2>
              <div className="space-y-3">
                <div>
                  <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Any Allergies? *</label>
                  <input type="text" required value={allergies} onChange={(e) => setAllergies(e.target.value)} className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-slate-900" placeholder="List allergies or type 'None'" />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Any Health Conditions? *</label>
                  <input type="text" required value={healthConditions} onChange={(e) => setHealthConditions(e.target.value)} className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-slate-900" placeholder="List conditions or type 'None'" />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Long-term Medications? *</label>
                  <input type="text" required value={medications} onChange={(e) => setMedications(e.target.value)} className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-slate-900" placeholder="List medications or type 'None'" />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Preferred Pharmacy *</label>
                  <input type="text" required value={pharmacy} onChange={(e) => setPharmacy(e.target.value)} className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-slate-900" placeholder="Name or location of pharmacy" />
                </div>
              </div>
              <div className="pt-2 flex justify-between">
                <button type="button" onClick={handlePrevStep} className="py-3 px-5 border border-slate-300 text-slate-700 font-medium text-xs sm:text-sm rounded-xl hover:bg-slate-50">&larr; Back</button>
                <button type="submit" className="py-3 px-6 bg-slate-900 hover:bg-black text-white font-medium text-xs sm:text-sm rounded-xl transition-all">Next: Employer &rarr;</button>
              </div>
            </form>
          )}

          {/* SLIDE 3: Employer */}
          {step === 3 && (
            <form onSubmit={handleNextStep} className="space-y-4">
              <h2 className="text-base font-semibold text-slate-800 border-b border-slate-100 pb-2">
                3. Employer Details
              </h2>
              <div className="space-y-3">
                <div>
                  <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Occupation *</label>
                  <input type="text" required value={occupation} onChange={(e) => setOccupation(e.target.value)} className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-slate-900" placeholder="Job title" />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Job Tasks *</label>
                  <textarea rows={3} required value={jobTasks} onChange={(e) => setJobTasks(e.target.value)} className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-slate-900 resize-none" placeholder="Describe your daily duties" />
                </div>
              </div>
              <div className="pt-2 flex justify-between">
                <button type="button" onClick={handlePrevStep} className="py-3 px-5 border border-slate-300 text-slate-700 font-medium text-xs sm:text-sm rounded-xl hover:bg-slate-50">&larr; Back</button>
                <button type="submit" className="py-3 px-6 bg-slate-900 hover:bg-black text-white font-medium text-xs sm:text-sm rounded-xl transition-all">Next: Injury Info &rarr;</button>
              </div>
            </form>
          )}

          {/* SLIDE 4: Injury Details */}
          {step === 4 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-base font-semibold text-slate-800 border-b border-slate-100 pb-2">
                4. Personal or Work-Related Injury
              </h2>
              <div className="space-y-3">
                <div>
                  <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Reason for Contact *</label>
                  <textarea rows={2} required value={reason} onChange={(e) => setReason(e.target.value)} className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-slate-900 resize-none" placeholder="Brief description of reason for contact" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Mechanism of Injury *</label>
                    <input type="text" required value={mechanism} onChange={(e) => setMechanism(e.target.value)} className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-slate-900" placeholder="e.g. Slip, heavy lifting" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Date Happened *</label>
                    <input type="date" required value={injuryDate} onChange={(e) => setInjuryDate(e.target.value)} className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-slate-900" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Which Part of Body? *</label>
                    <input type="text" required value={bodyPart} onChange={(e) => setBodyPart(e.target.value)} className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-slate-900" placeholder="e.g. Lower back, right knee" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Location Type *</label>
                    <input type="text" required value={locationType} onChange={(e) => setLocationType(e.target.value)} className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-slate-900" placeholder="e.g. Commercial, Industrial" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Location in NZ *</label>
                  <input type="text" required value={nzLocation} onChange={(e) => setNzLocation(e.target.value)} className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-slate-900" placeholder="e.g. Auckland, Wellington" />
                </div>
              </div>
              <div className="pt-2 flex justify-between">
                <button type="button" onClick={handlePrevStep} className="py-3 px-5 border border-slate-300 text-slate-700 font-medium text-xs sm:text-sm rounded-xl hover:bg-slate-50">&larr; Back</button>
                <button type="submit" disabled={loading} className="py-3.5 px-6 bg-slate-900 hover:bg-black text-white font-medium text-xs sm:text-sm rounded-xl transition-all disabled:opacity-50">
                  {loading ? 'Submitting...' : 'Submit Complete Form'}
                </button>
              </div>
            </form>
          )}
        </div>
      </main>

      <footer className="w-full py-2 pointer-events-none" />
    </div>
  )
}