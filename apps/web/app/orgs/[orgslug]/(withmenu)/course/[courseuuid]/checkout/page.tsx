'use client'

import React, { useState, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { getUriWithOrg } from '@services/config/config'
import HybreedHeader from '@components/Landings/Hybreed/HybreedHeader'
import HybreedPromoBanner from '@components/Landings/Hybreed/HybreedPromoBanner'

const tariffs = [
  {
    title: 'Internet Marketing: The Basics',
    description: 'A basic course to get acquainted with the profession and start working',
    oldPrice: '180,000 FCFA',
    monthlyPrice: '7,500 FCFA/month',
    duration: '24 months',
    onePayment: '108,000 FCFA',
    features: [
      '5 months',
      'Internet Marketing Basics',
      '13 instruments',
      '1 final project, 12 portfolio cases',
      'Certificate of advanced training',
    ],
  },
  {
    title: 'Internet marketer',
    description: 'All the base and focus on specialization in one direction',
    oldPrice: '320,000 FCFA',
    monthlyPrice: '8,900 FCFA/month',
    duration: '36 months',
    onePayment: '192,000 FCFA',
    features: [
      '9 months',
      'Internet Marketing Fundamentals + Selectable Specialization',
      '13 instruments',
      '2 final projects, 20 cases',
      'Help with finding a job',
      'Diploma of professional retraining',
    ],
  },
  {
    title: 'Internet Marketer: Advanced',
    description: 'Full base and 2 specializations for more flexible work',
    oldPrice: '400,000 FCFA',
    monthlyPrice: '11,100 FCFA/month',
    duration: '36 months',
    onePayment: '240,000 FCFA',
    features: [
      '14 months',
      'Internet Marketing Fundamentals + 2 Specializations',
      '13 instruments',
      '4 final projects, 30 cases',
      'Internship opportunities with partner companies',
      'Diploma of professional retraining',
    ],
  },
]

// Merchant numbers — change these to your actual MoMo merchant numbers
const MERCHANT_MTN = '652 00 76 84'
const MERCHANT_ORANGE = '690 00 00 00'

function CheckoutContent({ courseuuid, orgslug }: { courseuuid: string; orgslug: string }) {
  const searchParams = useSearchParams()
  const tariffIdx = parseInt(searchParams.get('tariff') || '0', 10)
  const tariff = tariffs[tariffIdx] || tariffs[0]

  const [paymentMethod, setPaymentMethod] = useState<'mtn' | 'orange'>('mtn')
  const [screenshot, setScreenshot] = useState<File | null>(null)
  const [screenshotPreview, setScreenshotPreview] = useState<string | null>(null)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle')
  const [error, setError] = useState('')

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError('File too large. Maximum 5MB.')
        return
      }
      setError('')
      setScreenshot(file)
      const reader = new FileReader()
      reader.onload = (ev) => setScreenshotPreview(ev.target?.result as string)
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!screenshot || !fullName || !email || !phone) return
    setSubmitStatus('submitting')
    // TODO: Send to backend API (will be built next)
    // For now, simulate submission
    setTimeout(() => {
      setSubmitStatus('submitted')
    }, 2000)
  }

  // --- Submitted state ---
  if (submitStatus === 'submitted') {
    return (
      <div className="min-h-[600px] flex items-center justify-center px-5 py-20">
        <div className="bg-white rounded-[32px] p-10 max-w-[500px] w-full text-center">
          <div className="w-20 h-20 rounded-full bg-[#e8f4fd] flex items-center justify-center mx-auto mb-6">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M12 8V12L15 15M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3Z" stroke="#0087CD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1 className="text-[28px] font-bold text-[#1B2126] m-0 mb-3">Payment Submitted!</h1>
          <p className="text-[16px] leading-[24px] text-[#1B2126]/70 m-0 mb-2">
            Thank you, <strong>{fullName}</strong>. We have received your payment screenshot.
          </p>
          <p className="text-[16px] leading-[24px] text-[#1B2126]/70 m-0 mb-8">
            Our team will verify your payment within <strong>24 hours</strong>. You will receive a confirmation email at <strong>{email}</strong> once your enrollment is approved.
          </p>
          <Link
            href={getUriWithOrg(orgslug, `/course/${courseuuid}/about`)}
            className="inline-flex items-center justify-center h-[56px] px-8 bg-[#0087CD] hover:bg-[#006ba3] text-white text-[16px] font-medium rounded-[14px] no-underline transition-colors"
          >
            Back to course page
          </Link>
        </div>
      </div>
    )
  }

  // --- Checkout form ---
  return (
    <div className="py-[60px] max-[767px]:py-[40px]">
      <div className="max-w-[900px] max-[767px]:max-w-full mx-auto w-full px-5">
        {/* Back link */}
        <Link
          href={getUriWithOrg(orgslug, `/course/${courseuuid}/about`)}
          className="inline-flex items-center gap-2 text-[16px] text-[#1B2126]/70 hover:text-[#1B2126] no-underline mb-8"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to course
        </Link>

        {/* Title */}
        <h1 className="text-[32px] max-[767px]:text-[24px] font-bold text-[#1B2126] leading-[1.2] m-0 mb-8">
          Checkout
        </h1>

        <div className="grid grid-cols-2 gap-6 max-[767px]:grid-cols-1">
          {/* LEFT - Tariff summary */}
          <div className="bg-white rounded-[24px] p-8 max-[767px]:p-5">
            <h2 className="text-[20px] font-semibold text-[#1B2126] m-0 mb-2">Your plan</h2>
            <h3 className="text-[24px] font-semibold text-[#1B2126] m-0 mb-2">{tariff.title}</h3>
            <p className="text-[16px] leading-[20px] text-[#1B2126]/70 m-0 mb-6">{tariff.description}</p>

            {/* Price */}
            <div className="border-t border-[#eee] pt-6 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[18px] text-[#636363] line-through">{tariff.oldPrice}</span>
                <span className="px-2 py-[2px] bg-[#c4fae7] text-[#038255] text-[14px] rounded-full">-40%</span>
              </div>
              <p className="text-[28px] font-semibold text-[#1B2126] m-0">{tariff.onePayment}</p>
              <p className="text-[14px] text-[#636363] m-0 mt-1">one payment</p>
              <p className="text-[14px] text-[#636363] m-0 mt-2">
                or {tariff.monthlyPrice} for {tariff.duration}
              </p>
            </div>

            {/* Features */}
            <ul className="flex flex-col gap-2 m-0 p-0 list-none">
              {tariff.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2 text-[14px] leading-[20px] text-[#1B2126]">
                  <svg className="shrink-0 mt-[2px]" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8L6.5 11.5L13 5" stroke="#4BD0A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT - Payment instructions + form */}
          <div className="bg-white rounded-[24px] p-8 max-[767px]:p-5">
            <h2 className="text-[20px] font-semibold text-[#1B2126] m-0 mb-6">Payment</h2>

            {/* Step 1: Choose method */}
            <p className="text-[14px] font-medium text-[#1B2126] m-0 mb-3">1. Choose payment method</p>
            <div className="flex gap-3 mb-6">
              {/* MTN MoMo */}
              <button
                onClick={() => setPaymentMethod('mtn')}
                className={`flex-1 flex flex-col items-center gap-2 p-4 rounded-[16px] border-2 cursor-pointer transition-all ${
                  paymentMethod === 'mtn'
                    ? 'border-[#FFCC00] bg-[#FFF9E6]'
                    : 'border-[#eee] bg-white hover:border-[#ddd]'
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-[#FFCC00] flex items-center justify-center">
                  <span className="text-[14px] font-bold text-black">MTN</span>
                </div>
                <span className="text-[14px] font-medium text-[#1B2126]">MTN MoMo</span>
              </button>

              {/* Orange Money */}
              <button
                onClick={() => setPaymentMethod('orange')}
                className={`flex-1 flex flex-col items-center gap-2 p-4 rounded-[16px] border-2 cursor-pointer transition-all ${
                  paymentMethod === 'orange'
                    ? 'border-[#FF7900] bg-[#FFF4E6]'
                    : 'border-[#eee] bg-white hover:border-[#ddd]'
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-[#FF7900] flex items-center justify-center">
                  <span className="text-[14px] font-bold text-white">OM</span>
                </div>
                <span className="text-[14px] font-medium text-[#1B2126]">Orange Money</span>
              </button>
            </div>

            {/* Step 2: Payment instructions */}
            <p className="text-[14px] font-medium text-[#1B2126] m-0 mb-3">2. Send payment</p>
            <div className={`rounded-[16px] p-5 mb-6 ${paymentMethod === 'mtn' ? 'bg-[#FFF9E6]' : 'bg-[#FFF4E6]'}`}>
              {paymentMethod === 'mtn' ? (
                <>
                  <p className="text-[15px] leading-[22px] text-[#1B2126] m-0 mb-2">
                    Dial <strong>*126#</strong> on your phone
                  </p>
                  <p className="text-[15px] leading-[22px] text-[#1B2126] m-0 mb-2">
                    Select <strong>Transfer Money</strong> → <strong>Send to MoMo User</strong>
                  </p>
                  <p className="text-[15px] leading-[22px] text-[#1B2126] m-0 mb-2">
                    Send to: <strong>{MERCHANT_MTN}</strong>
                  </p>
                  <p className="text-[15px] leading-[22px] text-[#1B2126] m-0 mb-2">
                    Amount: <strong>{tariff.onePayment}</strong>
                  </p>
                  <p className="text-[15px] leading-[22px] text-[#1B2126] m-0">
                    Enter your MoMo PIN to confirm
                  </p>
                </>
              ) : (
                <>
                  <p className="text-[15px] leading-[22px] text-[#1B2126] m-0 mb-2">
                    Dial <strong>#150#</strong> on your phone
                  </p>
                  <p className="text-[15px] leading-[22px] text-[#1B2126] m-0 mb-2">
                    Select <strong>Transfer</strong> → <strong>To Orange Money account</strong>
                  </p>
                  <p className="text-[15px] leading-[22px] text-[#1B2126] m-0 mb-2">
                    Send to: <strong>{MERCHANT_ORANGE}</strong>
                  </p>
                  <p className="text-[15px] leading-[22px] text-[#1B2126] m-0 mb-2">
                    Amount: <strong>{tariff.onePayment}</strong>
                  </p>
                  <p className="text-[15px] leading-[22px] text-[#1B2126] m-0">
                    Enter your Orange Money PIN to confirm
                  </p>
                </>
              )}
            </div>

            {/* Step 3: Upload screenshot + form */}
            <form onSubmit={handleSubmit}>
              <p className="text-[14px] font-medium text-[#1B2126] m-0 mb-3">3. Upload payment screenshot</p>

              {/* Screenshot upload */}
              <div className="mb-5">
                {screenshotPreview ? (
                  <div className="relative rounded-[12px] overflow-hidden border border-[#ddd] mb-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={screenshotPreview} alt="Payment screenshot" className="w-full max-h-[200px] object-contain bg-[#f8f9fa]" />
                    <button
                      type="button"
                      onClick={() => { setScreenshot(null); setScreenshotPreview(null) }}
                      className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/60 text-white border-0 cursor-pointer flex items-center justify-center"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M6 6L18 18M6 18L18 6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </button>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center w-full h-[120px] border-2 border-dashed border-[#ccc] rounded-[12px] cursor-pointer hover:border-[#0087CD] hover:bg-[#f8f9fa] transition-all">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="mb-2">
                      <path d="M12 16V8M8 12L12 8L16 12M4 20H20" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-[14px] text-[#636363]">Click to upload screenshot</span>
                    <span className="text-[12px] text-[#999] mt-1">PNG, JPG up to 5MB</span>
                    <input type="file" accept="image/png,image/jpeg" onChange={handleFileChange} className="hidden" />
                  </label>
                )}
                {error && <p className="text-[13px] text-red-500 m-0 mt-2">{error}</p>}
              </div>

              {/* Your info */}
              <div className="mb-4">
                <label className="block text-[14px] font-medium text-[#1B2126] mb-2">Full name</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 text-[16px] text-[#1B2126] border border-[#ddd] rounded-[12px] outline-none focus:border-[#0087CD]"
                  disabled={submitStatus === 'submitting'}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-[14px] font-medium text-[#1B2126] mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 text-[16px] text-[#1B2126] border border-[#ddd] rounded-[12px] outline-none focus:border-[#0087CD]"
                  disabled={submitStatus === 'submitting'}
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-[14px] font-medium text-[#1B2126] mb-2">Phone number</label>
                <div className="flex items-center border border-[#ddd] rounded-[12px] overflow-hidden">
                  <span className="px-4 py-3 text-[16px] text-[#636363] bg-[#f8f9fa] border-r border-[#ddd]">
                    +237
                  </span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 9))}
                    placeholder="6XX XXX XXX"
                    className="flex-1 px-4 py-3 text-[16px] text-[#1B2126] border-0 outline-none"
                    disabled={submitStatus === 'submitting'}
                    required
                  />
                </div>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={submitStatus === 'submitting' || !screenshot || !fullName || !email || !phone}
                className="w-full h-[56px] rounded-[14px] text-[16px] font-medium border-0 cursor-pointer transition-colors bg-[#0087CD] text-white hover:bg-[#006ba3] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {submitStatus === 'submitting' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit for verification'
                )}
              </button>

              <p className="text-[12px] text-[#636363] text-center m-0 mt-4">
                Your enrollment will be confirmed within 24 hours after verification.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CheckoutPage({ params }: { params: { courseuuid: string; orgslug: string } }) {
  return (
    <div className="min-h-screen bg-[#F3F4F7]">
      <HybreedPromoBanner orgslug={params.orgslug} />
      <HybreedHeader orgslug={params.orgslug} />
      <Suspense fallback={
        <div className="min-h-[400px] flex items-center justify-center">
          <div className="w-10 h-10 border-2 border-[#0087CD] border-t-transparent rounded-full animate-spin" />
        </div>
      }>
        <CheckoutContent courseuuid={params.courseuuid} orgslug={params.orgslug} />
      </Suspense>
    </div>
  )
}
