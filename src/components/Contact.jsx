import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { ChevronDown, Code2, Mail, Send } from 'lucide-react'

const reasonOptions = [
  'Project discussion',
  'Question about my work',
  'Project collaboration',
  'Networking',
  'Other',
]

const getEmailJsConfigStatus = () => {
  const status = {
    serviceId: Boolean(import.meta.env.VITE_EMAILJS_SERVICE_ID),
    templateId: Boolean(import.meta.env.VITE_EMAILJS_TEMPLATE_ID),
    publicKey: Boolean(import.meta.env.VITE_EMAILJS_PUBLIC_KEY),
  }

  return {
    ...status,
    configured: status.serviceId && status.templateId && status.publicKey,
    missing: [
      !status.serviceId && 'VITE_EMAILJS_SERVICE_ID',
      !status.templateId && 'VITE_EMAILJS_TEMPLATE_ID',
      !status.publicKey && 'VITE_EMAILJS_PUBLIC_KEY',
    ].filter(Boolean),
  }
}

const formatEmailJsConfigStatus = (status) =>
  [
    `configured=${status.configured ? 'yes' : 'no'}`,
    `serviceId=${status.serviceId ? 'present' : 'missing'}`,
    `templateId=${status.templateId ? 'present' : 'missing'}`,
    `publicKey=${status.publicKey ? 'present' : 'missing'}`,
    `missing=${status.missing.length ? status.missing.join(', ') : 'none'}`,
  ].join(' | ')

const formatEmailJsError = (error) =>
  [
    `status=${error?.status ?? 'unknown'}`,
    `text=${error?.text || 'none'}`,
    `message=${error?.message || 'none'}`,
    `name=${error?.name || 'none'}`,
  ].join(' | ')

const buildMailtoLink = ({ name, email, company, reason, message }) => {
  const subject = `Portfolio contact: ${reason}`
  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    company && `Company / Organization: ${company}`,
    `Reason: ${reason}`,
    '',
    message,
  ]
    .filter(Boolean)
    .join('\n')

  return `mailto:chiajunyang1610@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export default function Contact() {
  const formRef = useRef(null)
  const [formState, setFormState] = useState('idle')
  const [feedback, setFeedback] = useState('')
  const [reason, setReason] = useState('')
  const [reasonOpen, setReasonOpen] = useState(false)
  const emailJsConfigured = getEmailJsConfigStatus().configured

  useEffect(() => {
    if (import.meta.env.DEV) {
      const emailJsConfigStatus = getEmailJsConfigStatus()
      console.log(`EmailJS config status: ${formatEmailJsConfigStatus(emailJsConfigStatus)}`)
    }
  }, [])

  const submit = async (event) => {
    event.preventDefault()
    const formElement = event.currentTarget
    const form = new FormData(formElement)
    const name = form.get('from_name')?.toString().trim()
    const email = form.get('from_email')?.toString().trim()
    const company = form.get('company')?.toString().trim()
    const reason = form.get('reason')?.toString().trim()
    const message = form.get('message')?.toString().trim()
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!name) {
      setFormState('error')
      setFeedback('Please enter your name.')
      return
    }

    if (!email) {
      setFormState('error')
      setFeedback('Please enter your email address.')
      return
    }

    if (!emailPattern.test(email)) {
      setFormState('error')
      setFeedback('Please enter a valid email address.')
      return
    }

    if (!reason) {
      setFormState('error')
      setFeedback('Please choose a reason for contact.')
      return
    }

    if (!message) {
      setFormState('error')
      setFeedback('Please enter a message.')
      return
    }

    const emailJsConfigStatus = getEmailJsConfigStatus()

    if (!emailJsConfigStatus.configured) {
      if (import.meta.env.DEV) {
        console.info(
          `EmailJS is missing required Vite environment variables, using mailto fallback: ${formatEmailJsConfigStatus(emailJsConfigStatus)}`,
        )
      }
      window.location.href = buildMailtoLink({ name, email, company, reason, message })
      setFormState('mailto')
      setFeedback('No email has been sent yet. Your email app should open a draft, then you need to press Send there.')
      return
    }

    setFormState('loading')
    setFeedback('')

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formElement,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      )
      setFormState('success')
      setFeedback('Thanks! Your message has been sent successfully.')
      formElement.reset()
      setReason('')
    } catch (error) {
      console.error(`EmailJS sendForm failed: ${formatEmailJsError(error)}`)
      console.error('EmailJS raw error:', {
        message: error?.message,
        name: error?.name,
        status: error?.status,
        text: error?.text,
        error,
      })
      setFormState('error')
      setFeedback('Sorry, something went wrong. Please try again or email me directly.')
    }
  }

  const buttonText = {
    idle: emailJsConfigured ? 'Send Message' : 'Open Email Draft',
    loading: 'Sending...',
    success: 'Message Sent',
    mailto: 'Email Draft Opened',
    error: emailJsConfigured ? 'Send Message' : 'Open Email Draft',
  }[formState]

  return (
    <section id="contact" className="section-band bg-surface/35 py-28">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="font-mono text-sm font-bold text-green">Project contact</p>
          <h2 className="section-title mt-3">Let&rsquo;s connect.</h2>
          <div className="mt-6 space-y-5 leading-8 text-muted">
            <p>
              If you&rsquo;d like to discuss a project, ask about my work, or connect about data analytics and software
              development, feel free to reach out.
            </p>
          </div>
          <div className="mt-8 grid gap-3 text-muted">
            <a
              href="mailto:chiajunyang1610@gmail.com"
              className="focus-ring flex items-center gap-3 rounded-lg border border-border bg-bg/35 p-4 transition hover:border-accent/70 hover:text-text"
            >
              <Mail className="text-accent-glow" /> chiajunyang1610@gmail.com
            </a>
            <a
              href="https://github.com/graysonchia"
              target="_blank"
              rel="noreferrer"
              className="focus-ring flex items-center gap-3 rounded-lg border border-border bg-bg/35 p-4 transition hover:border-accent/70 hover:text-text"
            >
              <Code2 className="text-accent-glow" /> github.com/graysonchia
            </a>
          </div>
        </div>

        <form ref={formRef} onSubmit={submit} className="soft-card grid gap-4 p-5 sm:p-6">
          <p className="border-b border-border pb-4 text-xl font-bold leading-8 text-text">
            Have a project question, collaboration idea, or reason to connect?{' '}
            {emailJsConfigured
              ? "Send me a message below and I'll get back to you soon."
              : 'Use the form below to open a pre-filled email draft.'}
          </p>
          <label className="grid gap-2 font-semibold">
            Name *
            <input
              name="from_name"
              className="focus-ring rounded-lg border border-border bg-bg px-4 py-3 text-text outline-none placeholder:text-muted/70"
            />
          </label>
          <label className="grid gap-2 font-semibold">
            Email *
            <input
              type="email"
              name="from_email"
              className="focus-ring rounded-lg border border-border bg-bg px-4 py-3 text-text outline-none placeholder:text-muted/70"
            />
          </label>
          <label className="grid gap-2 font-semibold">
            Company / Organization
            <input
              name="company"
              className="focus-ring rounded-lg border border-border bg-bg px-4 py-3 text-text outline-none placeholder:text-muted/70"
            />
          </label>
          <div className="grid gap-2 font-semibold">
            <span>Reason for Contact *</span>
            <input type="hidden" name="reason" value={reason} />
            <div
              className="relative"
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setReasonOpen(false)
                }
              }}
            >
              <button
                type="button"
                aria-expanded={reasonOpen}
                aria-haspopup="listbox"
                className="focus-ring flex w-full items-center justify-between gap-3 rounded-lg border border-border bg-bg px-4 py-3 text-left text-text outline-none"
                onClick={() => setReasonOpen((isOpen) => !isOpen)}
              >
                <span>{reason || 'Select one'}</span>
                <ChevronDown size={18} className={`shrink-0 text-muted transition ${reasonOpen ? 'rotate-180' : ''}`} />
              </button>
              {reasonOpen && (
                <div
                  role="listbox"
                  className="mt-2 w-full overflow-hidden rounded-lg border border-border bg-bg shadow-2xl"
                >
                  {reasonOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      role="option"
                      aria-selected={reason === option}
                      className="focus-ring block w-full px-4 py-3 text-left font-semibold text-text hover:bg-surface-2"
                      onClick={() => {
                        setReason(option)
                        setReasonOpen(false)
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <label className="grid gap-2 font-semibold">
            Message *
            <textarea
              name="message"
              rows="6"
              placeholder="Tell me about the project, question, or reason you'd like to connect."
              className="focus-ring resize-none rounded-lg border border-border bg-bg px-4 py-3 text-text outline-none placeholder:text-muted/70"
            />
          </label>
          <button
            type="submit"
            disabled={formState === 'loading'}
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-bold text-white transition hover:bg-accent-glow disabled:cursor-not-allowed disabled:opacity-70"
          >
            <Send size={18} /> {buttonText}
          </button>
          {feedback && (
            <p
              className={`rounded-lg border px-4 py-3 text-sm font-semibold ${
                formState === 'success'
                  ? 'border-green/40 bg-green/10 text-green'
                  : 'border-accent/40 bg-accent/10 text-accent-glow'
              }`}
            >
              {feedback}
            </p>
          )}
          <p className="text-sm text-muted">
            Prefer email? Reach me directly at{' '}
            <a href="mailto:chiajunyang1610@gmail.com" className="focus-ring rounded-sm font-semibold text-accent-glow hover:text-text">
              chiajunyang1610@gmail.com
            </a>
          </p>
        </form>
      </div>
    </section>
  )
}
