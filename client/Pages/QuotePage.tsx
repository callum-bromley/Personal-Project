import { useState, useEffect, FormEvent } from 'react'

interface StatusState {
  success?: boolean
  message?: string
}

const GENDER_OPTIONS = [
  'Male',
  'Female',
  'Another gender',
  'Prefer not to say',
]

const NZ_ETHNICITY_OPTIONS = [
  'Māori',
  'New Zealand European',
  'Samoan',
  'Cook Islands Māori',
  'Tongan',
  'Niuean',
  'Chinese',
  'Indian',
  'Other',
]

const BODY_PART_OPTIONS = [
  'Lower back / Lumbar spine',
  'Upper / Mid back',
  'Neck / Cervical spine',
  'Left shoulder',
  'Right shoulder',
  'Left arm / Elbow',
  'Right arm / Elbow',
  'Left wrist / Hand / Fingers',
  'Right wrist / Hand / Fingers',
  'Chest / Ribs',
  'Abdomen / Pelvis',
  'Hip / Groin',
  'Left knee',
  'Right knee',
  'Left leg / Thigh / Calf',
  'Right leg / Thigh / Calf',
  'Left ankle / Foot / Toes',
  'Right ankle / Foot / Toes',
  'Head / Face',
  'Multiple body parts',
  'Other',
]

const LOCATION_TYPE_OPTIONS = [
  'Home',
  'Commercial / Office / Retail',
  'Industrial / Manufacturing / Warehouse',
  'Construction / Building site',
  'Road / Street / Footpath',
  'Sport / Recreation facility',
  'Other',
]

function formatDateWithSlashes(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 8)
  if (digits.length <= 2) return digits
  if (digits.length <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`
  return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`
}

interface MaskedDateInputProps {
  value: string
  onChange: (formatted: string) => void
  required?: boolean
}

function MaskedDateInput({ value, onChange, required = false }: MaskedDateInputProps) {
  const template = 'DD/MM/YYYY'
  const remainingMask = template.slice(value.length)

  return (
    <div className="relative w-full rounded-xl bg-slate-50 border border-slate-200 focus-within:bg-white focus-within:border-slate-900 transition-colors">
      {/* Visual background mask layer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center px-4 py-2.5 text-xs sm:text-sm select-none overflow-hidden whitespace-pre"
      >
        <span className="invisible">{value}</span>
        <span className="text-slate-400">{remainingMask}</span>
      </div>

      {/* Actual interactive input */}
      <input
        type="text"
        inputMode="numeric"
        required={required}
        pattern="\d{2}/\d{2}/\d{4}"
        title="Please enter a full date in DD/MM/YYYY format"
        value={value}
        onChange={(e) => onChange(formatDateWithSlashes(e.target.value))}
        className="relative z-10 w-full px-4 py-2.5 bg-transparent text-xs sm:text-sm text-slate-900 focus:outline-none"
      />
    </div>
  )
}

interface PhotonFeature {
  properties: {
    countrycode?: string
    osm_value?: string
    housenumber?: string
    street?: string
    name?: string
    suburb?: string
    district?: string
    city?: string
    town?: string
    state?: string
    postcode?: string
  }
}

function formatNzPhotonAddress(props: PhotonFeature['properties']): string {
  const streetLine = [props.housenumber, props.street || props.name].filter(Boolean).join(' ')
  const suburb = props.suburb || props.district
  const city = props.city || props.town
  const cityPostcode = [city, props.postcode].filter(Boolean).join(' ')
  return [streetLine, suburb, cityPostcode].filter(Boolean).join(', ')
}

function formatNzPhotonPharmacy(props: PhotonFeature['properties']): string {
  const pharmacyName = props.name || 'Pharmacy'
  const streetLine = [props.housenumber, props.street].filter(Boolean).join(' ')
  const suburb = props.suburb || props.district
  const city = props.city || props.town
  const locationParts = [streetLine, suburb, city].filter(Boolean).join(', ')
  return locationParts ? `${pharmacyName} — ${locationParts}` : pharmacyName
}

function formatNzPhotonCityTown(props: PhotonFeature['properties']): string {
  const placeName = props.name || props.city || props.town || ''
  if (!placeName) return ''
  const region = props.state && props.state !== placeName ? props.state : ''
  return region ? `${placeName}, ${region}` : placeName
}

function NzAddressInput({
  value,
  onChange,
}: {
  value: string
  onChange: (val: string) => void
}) {
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [open, setOpen] = useState(false)
  const [justSelected, setJustSelected] = useState(false)

  useEffect(() => {
    if (justSelected) {
      setJustSelected(false)
      return
    }

    if (value.trim().length < 3) {
      setSuggestions([])
      return
    }

    const controller = new AbortController()
    const timer = setTimeout(async () => {
      try {
        const url = `https://photon.komoot.io/api/?q=${encodeURIComponent(
          value
        )}&lat=-41.2865&lon=174.7762&bbox=166.0,-47.5,179.0,-34.0&limit=6`
        const res = await fetch(url, { signal: controller.signal })
        const data = await res.json()

        const formattedList: string[] = Array.from(
          new Set(
            (data.features || [])
              .filter((f: PhotonFeature) => f.properties?.countrycode === 'NZ')
              .map((f: PhotonFeature) => formatNzPhotonAddress(f.properties))
              .filter((addr: string) => addr.length > 0)
          )
        )

        setSuggestions(formattedList)
        setOpen(formattedList.length > 0)
      } catch {
        // Ignore aborted requests
      }
    }, 300)

    return () => {
      clearTimeout(timer)
      controller.abort()
    }
  }, [value])

  return (
    <div className="relative">
      <input
        type="text"
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => suggestions.length > 0 && setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-slate-900"
        placeholder="Start typing or enter address manually"
        autoComplete="off"
      />

      {open && suggestions.length > 0 && (
        <ul className="absolute z-20 mt-1.5 w-full max-h-48 overflow-y-auto rounded-xl bg-white border border-slate-200 shadow-lg divide-y divide-slate-100">
          {suggestions.map((addressOption) => (
            <li key={addressOption}>
              <button
                type="button"
                onMouseDown={() => {
                  setJustSelected(true)
                  onChange(addressOption)
                  setSuggestions([])
                  setOpen(false)
                }}
                className="w-full text-left px-4 py-2.5 text-xs sm:text-sm text-slate-700 hover:bg-slate-100 transition-colors"
              >
                {addressOption}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function NzPharmacyInput({
  value,
  onChange,
}: {
  value: string
  onChange: (val: string) => void
}) {
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [open, setOpen] = useState(false)
  const [justSelected, setJustSelected] = useState(false)

  useEffect(() => {
    if (justSelected) {
      setJustSelected(false)
      return
    }

    if (value.trim().length < 2) {
      setSuggestions([])
      return
    }

    const controller = new AbortController()
    const timer = setTimeout(async () => {
      try {
        const url = `https://photon.komoot.io/api/?q=${encodeURIComponent(
          value
        )}&osm_tag=amenity:pharmacy&lat=-41.2865&lon=174.7762&bbox=166.0,-47.5,179.0,-34.0&limit=8`
        const res = await fetch(url, { signal: controller.signal })
        const data = await res.json()

        const formattedList: string[] = Array.from(
          new Set(
            (data.features || [])
              .filter((f: PhotonFeature) => f.properties?.countrycode === 'NZ')
              .map((f: PhotonFeature) => formatNzPhotonPharmacy(f.properties))
              .filter((item: string) => item.length > 0)
          )
        )

        setSuggestions(formattedList)
        setOpen(formattedList.length > 0)
      } catch {
        // Ignore aborted requests
      }
    }, 300)

    return () => {
      clearTimeout(timer)
      controller.abort()
    }
  }, [value])

  return (
    <div className="relative">
      <input
        type="text"
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => suggestions.length > 0 && setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-slate-900"
        placeholder="Start typing pharmacy name or enter manually"
        autoComplete="off"
      />

      {open && suggestions.length > 0 && (
        <ul className="absolute z-20 mt-1.5 w-full max-h-48 overflow-y-auto rounded-xl bg-white border border-slate-200 shadow-lg divide-y divide-slate-100">
          {suggestions.map((pharmacyOption) => (
            <li key={pharmacyOption}>
              <button
                type="button"
                onMouseDown={() => {
                  setJustSelected(true)
                  onChange(pharmacyOption)
                  setSuggestions([])
                  setOpen(false)
                }}
                className="w-full text-left px-4 py-2.5 text-xs sm:text-sm text-slate-700 hover:bg-slate-100 transition-colors"
              >
                {pharmacyOption}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function NzCityInput({
  value,
  onChange,
}: {
  value: string
  onChange: (val: string) => void
}) {
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [open, setOpen] = useState(false)
  const [justSelected, setJustSelected] = useState(false)

  useEffect(() => {
    if (justSelected) {
      setJustSelected(false)
      return
    }

    if (value.trim().length < 2) {
      setSuggestions([])
      return
    }

    const controller = new AbortController()
    const timer = setTimeout(async () => {
      try {
        const url = `https://photon.komoot.io/api/?q=${encodeURIComponent(
          value
        )}&osm_tag=place:city&osm_tag=place:town&osm_tag=place:suburb&lat=-41.2865&lon=174.7762&bbox=166.0,-47.5,179.0,-34.0&limit=8`
        const res = await fetch(url, { signal: controller.signal })
        const data = await res.json()

        const allowedPlaces = new Set(['city', 'town', 'suburb'])

        const formattedList: string[] = Array.from(
          new Set(
            (data.features || [])
              .filter(
                (f: PhotonFeature) =>
                  f.properties?.countrycode === 'NZ' &&
                  allowedPlaces.has(f.properties?.osm_value || '')
              )
              .map((f: PhotonFeature) => formatNzPhotonCityTown(f.properties))
              .filter((item: string) => item.length > 0)
          )
        )

        setSuggestions(formattedList)
        setOpen(formattedList.length > 0)
      } catch {
        // Ignore aborted requests
      }
    }, 300)

    return () => {
      clearTimeout(timer)
      controller.abort()
    }
  }, [value])

  return (
    <div className="relative">
      <input
        type="text"
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => suggestions.length > 0 && setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-slate-900"
        placeholder="Start typing city, town, or suburb (e.g. Papakura, Hamilton)"
        autoComplete="off"
      />

      {open && suggestions.length > 0 && (
        <ul className="absolute z-20 mt-1.5 w-full max-h-48 overflow-y-auto rounded-xl bg-white border border-slate-200 shadow-lg divide-y divide-slate-100">
          {suggestions.map((cityOption) => (
            <li key={cityOption}>
              <button
                type="button"
                onMouseDown={() => {
                  setJustSelected(true)
                  onChange(cityOption)
                  setSuggestions([])
                  setOpen(false)
                }}
                className="w-full text-left px-4 py-2.5 text-xs sm:text-sm text-slate-700 hover:bg-slate-100 transition-colors"
              >
                {cityOption}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function QuoteForm() {
  const [step, setStep] = useState<number>(1)

  // Step 1: Personal Details (All Required)
  const [fullName, setFullName] = useState<string>('')
  const [dob, setDob] = useState<string>('')
  const [gender, setGender] = useState<string>('')
  const [otherGender, setOtherGender] = useState<string>('')
  const [ethnicity, setEthnicity] = useState<string>('')
  const [otherEthnicity, setOtherEthnicity] = useState<string>('')
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
  const [otherBodyPart, setOtherBodyPart] = useState<string>('')
  const [locationType, setLocationType] = useState<string>('')
  const [otherLocationType, setOtherLocationType] = useState<string>('')
  const [nzLocation, setNzLocation] = useState<string>('')

  const [loading, setLoading] = useState<boolean>(false)
  const [status, setStatus] = useState<StatusState>({})

  const isOtherGender = gender === 'Another gender'
  const isOtherEthnicity = ethnicity === 'Other'
  const isOtherBodyPart = bodyPart === 'Other'
  const isOtherLocationType = locationType === 'Other'

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

    const finalGender =
      isOtherGender && otherGender.trim()
        ? `Another gender (${otherGender.trim()})`
        : gender

    const finalEthnicity =
      isOtherEthnicity && otherEthnicity.trim()
        ? `Other (${otherEthnicity.trim()})`
        : ethnicity

    const finalBodyPart =
      isOtherBodyPart && otherBodyPart.trim()
        ? `Other (${otherBodyPart.trim()})`
        : bodyPart

    const finalLocationType =
      isOtherLocationType && otherLocationType.trim()
        ? `Other (${otherLocationType.trim()})`
        : locationType

    const payload = {
      personalDetails: { fullName, dob, gender: finalGender, ethnicity: finalEthnicity, address, email, mobile },
      medicalHistory: { allergies, healthConditions, medications, pharmacy },
      employer: { occupation, jobTasks },
      injury: {
        reason,
        mechanism,
        injuryDate,
        bodyPart: finalBodyPart,
        locationType: finalLocationType,
        nzLocation,
      },
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
        setFullName(''); setDob(''); setGender(''); setOtherGender(''); setEthnicity(''); setOtherEthnicity(''); setAddress(''); setEmail(''); setMobile('')
        setAllergies(''); setHealthConditions(''); setMedications(''); setPharmacy('')
        setOccupation(''); setJobTasks('')
        setReason(''); setMechanism(''); setInjuryDate(''); setBodyPart(''); setOtherBodyPart(''); setLocationType(''); setOtherLocationType(''); setNzLocation('')
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
                  <MaskedDateInput value={dob} onChange={setDob} required />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Gender *</label>
                  <select
                    required
                    value={gender}
                    onChange={(e) => {
                      setGender(e.target.value)
                      if (e.target.value !== 'Another gender') setOtherGender('')
                    }}
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-slate-900 ${
                      gender === '' ? 'text-slate-400' : 'text-slate-900'
                    }`}
                  >
                    <option value="" disabled>Select gender</option>
                    {GENDER_OPTIONS.map((option) => (
                      <option key={option} value={option} className="text-slate-900">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Ethnicity *</label>
                  <select
                    required
                    value={ethnicity}
                    onChange={(e) => {
                      setEthnicity(e.target.value)
                      if (e.target.value !== 'Other') setOtherEthnicity('')
                    }}
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-slate-900 ${
                      ethnicity === '' ? 'text-slate-400' : 'text-slate-900'
                    }`}
                  >
                    <option value="" disabled>Select ethnicity</option>
                    {NZ_ETHNICITY_OPTIONS.map((option) => (
                      <option key={option} value={option} className="text-slate-900">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {isOtherGender && (
                  <div className="sm:col-span-2">
                    <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Please Specify Gender *</label>
                    <input
                      type="text"
                      required
                      value={otherGender}
                      onChange={(e) => setOtherGender(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-slate-900"
                      placeholder="Enter your gender"
                    />
                  </div>
                )}

                {isOtherEthnicity && (
                  <div className="sm:col-span-2">
                    <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Please Specify Ethnicity *</label>
                    <input
                      type="text"
                      required
                      value={otherEthnicity}
                      onChange={(e) => setOtherEthnicity(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-slate-900"
                      placeholder="Enter your ethnicity"
                    />
                  </div>
                )}

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
                <NzAddressInput value={address} onChange={setAddress} />
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
                  <NzPharmacyInput value={pharmacy} onChange={setPharmacy} />
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
                    <MaskedDateInput value={injuryDate} onChange={setInjuryDate} required />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Which Part of Body? *</label>
                    <select
                      required
                      value={bodyPart}
                      onChange={(e) => {
                        setBodyPart(e.target.value)
                        if (e.target.value !== 'Other') setOtherBodyPart('')
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-slate-900 ${
                        bodyPart === '' ? 'text-slate-400' : 'text-slate-900'
                      }`}
                    >
                      <option value="" disabled>Select body part</option>
                      {BODY_PART_OPTIONS.map((option) => (
                        <option key={option} value={option} className="text-slate-900">
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Location Type *</label>
                    <select
                      required
                      value={locationType}
                      onChange={(e) => {
                        setLocationType(e.target.value)
                        if (e.target.value !== 'Other') setOtherLocationType('')
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-slate-900 ${
                        locationType === '' ? 'text-slate-400' : 'text-slate-900'
                      }`}
                    >
                      <option value="" disabled>Select location type</option>
                      {LOCATION_TYPE_OPTIONS.map((option) => (
                        <option key={option} value={option} className="text-slate-900">
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  {isOtherBodyPart && (
                    <div className="sm:col-span-2">
                      <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Please Specify Body Part *</label>
                      <input
                        type="text"
                        required
                        value={otherBodyPart}
                        onChange={(e) => setOtherBodyPart(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-slate-900"
                        placeholder="Enter affected body part"
                      />
                    </div>
                  )}

                  {isOtherLocationType && (
                    <div className="sm:col-span-2">
                      <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Please Specify Location Type *</label>
                      <input
                        type="text"
                        required
                        value={otherLocationType}
                        onChange={(e) => setOtherLocationType(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-slate-900"
                        placeholder="Enter location type"
                      />
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Location in NZ *</label>
                  <NzCityInput value={nzLocation} onChange={setNzLocation} />
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