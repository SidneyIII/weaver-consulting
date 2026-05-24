"use client";

import { useState, type FormEvent } from "react";
import { PhoneIcon, EnvelopeIcon } from "@/components/icons";

type FormState = {
  name: string;
  email: string;
  phone: string;
  gradeLevel: string;
  message: string;
};

const gradeOptions = [
  { value: "", label: "Select grade level" },
  { value: "8th", label: "8th Grade" },
  { value: "9th", label: "9th Grade" },
  { value: "10th", label: "10th Grade" },
  { value: "11th", label: "11th Grade" },
  { value: "12th", label: "12th Grade" },
  { value: "college", label: "College Student" },
  { value: "other", label: "Other" },
];

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    gradeLevel: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: Wire to email service (Resend or Formspree recommended)
    // TODO: Add Calendly embed for booking once account is created
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-gray-200 bg-white font-body text-brand-navy text-base placeholder-brand-secondary/60 focus:outline-none focus:ring-2 focus:ring-brand-teal/40 focus:border-brand-teal transition-colors duration-200";
  const labelClass = "block font-body font-semibold text-brand-navy text-sm mb-1.5";

  return (
    <div className="bg-brand-sage py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-body font-semibold tracking-widest text-brand-teal uppercase mb-3">
            Let&apos;s Talk
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-navy mb-4">
            Ready to Take the First Step?
          </h2>
          <p className="font-body text-brand-secondary text-lg leading-relaxed max-w-xl mx-auto">
            The intro call is free. No pressure, no commitment.
          </p>
          <div className="mt-5 mx-auto w-16 h-0.5 bg-brand-teal" />
        </div>

        {/* Contact blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          <a
            href="tel:7125244029"
            className="flex items-center gap-4 bg-white rounded-xl border border-brand-teal/25 px-6 py-5 shadow-sm hover:border-brand-teal/50 hover:shadow-md transition-all duration-200 group"
          >
            <div className="w-12 h-12 rounded-lg bg-brand-sage flex items-center justify-center flex-shrink-0 group-hover:bg-brand-teal/10 transition-colors duration-200">
              <PhoneIcon size={22} />
            </div>
            <div>
              <p className="font-body text-xs font-semibold text-brand-secondary uppercase tracking-wide mb-0.5">
                Call or Text
              </p>
              <p className="font-body font-bold text-brand-navy text-lg">712-524-4029</p>
            </div>
          </a>

          <a
            href="mailto:sidney78910@gmail.com"
            className="flex items-center gap-4 bg-white rounded-xl border border-brand-teal/25 px-6 py-5 shadow-sm hover:border-brand-teal/50 hover:shadow-md transition-all duration-200 group"
          >
            <div className="w-12 h-12 rounded-lg bg-brand-sage flex items-center justify-center flex-shrink-0 group-hover:bg-brand-teal/10 transition-colors duration-200">
              <EnvelopeIcon size={22} />
            </div>
            <div>
              <p className="font-body text-xs font-semibold text-brand-secondary uppercase tracking-wide mb-0.5">
                Email
              </p>
              <p className="font-body font-bold text-brand-navy text-base break-all">
                sidney78910@gmail.com
              </p>
            </div>
          </a>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-brand-teal/20" />
          <p className="font-body text-sm text-brand-secondary">or send a message below</p>
          <div className="flex-1 h-px bg-brand-teal/20" />
        </div>

        {/* Form */}
        {submitted ? (
          <div className="bg-white rounded-2xl border border-brand-teal/30 p-10 text-center shadow-sm">
            <div className="w-16 h-16 rounded-full bg-brand-sage flex items-center justify-center mx-auto mb-5">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#1a6b4a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="16" cy="16" r="14" />
                <polyline points="10 16 14 20 22 12" />
              </svg>
            </div>
            <h3 className="font-display text-2xl font-bold text-brand-navy mb-3">Message Received</h3>
            <p className="font-body text-brand-secondary text-base leading-relaxed max-w-sm mx-auto">
              Thank you for reaching out. Sidney will be in touch within 24&ndash;48 hours to schedule your free intro call.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl border border-gray-100 p-8 md:p-10 shadow-sm"
            noValidate
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className={labelClass}>Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="phone" className={labelClass}>Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(555) 000-0000"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="gradeLevel" className={labelClass}>Grade Level</label>
                <select
                  id="gradeLevel"
                  name="gradeLevel"
                  required
                  value={form.gradeLevel}
                  onChange={handleChange}
                  className={`${inputClass} cursor-pointer`}
                >
                  {gradeOptions.map((opt) => (
                    <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className={labelClass}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me a bit about where you are in the process and what you&apos;re hoping to work on..."
                  className={`${inputClass} resize-none`}
                />
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-4 rounded bg-brand-green text-white font-body font-semibold text-base hover:bg-brand-navy transition-colors duration-200 shadow-sm cursor-pointer"
              >
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
