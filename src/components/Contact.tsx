"use client";

import { useState } from "react";
import { Mail, Phone, MessageCircle, ArrowUpRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface FormState {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  serviceRequired: string;
  budgetRange: string;
  description: string;
  honeypot: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  description?: string;
}

const SERVICES_OPTIONS = [
  "Business Website Development",
  "E-Commerce Website Development",
  "Shopify Store Development",
  "Landing Page Development",
  "Portfolio Website Development",
  "Website Redesign & Maintenance",
];

const BUDGET_RANGES_INR = [
  "< ₹30,000",
  "₹30,000 – ₹75,000",
  "₹75,000 – ₹1,50,000",
  "₹1,50,000+",
];

export function Contact() {
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    serviceRequired: "Business Website Development",
    budgetRange: "₹30,000 – ₹75,000",
    description: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your name";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address (e.g. name@company.com)";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your mobile or WhatsApp number";
    } else if (!/^[0-9+ -]{10,14}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number (e.g. 9873111153)";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Please describe your project or requirements";
    } else if (formData.description.trim().length < 10) {
      newErrors.description = "Please provide at least 10 characters describing your project";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) return;
    if (!validate()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      businessName: "",
      email: "",
      phone: "",
      serviceRequired: "Business Website Development",
      budgetRange: "₹30,000 – ₹75,000",
      description: "",
      honeypot: "",
    });
    setErrors({});
    setSubmitted(false);
  };

  // WhatsApp quick link with pre-filled message
  const whatsappUrl = `https://wa.me/919873111153?text=${encodeURIComponent(
    `Hi DS Studios, I am interested in ${formData.serviceRequired}. My name is ${formData.fullName || "a prospective client"}.`
  )}`;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24 sm:py-32 lg:py-40 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full border-b border-[#E5E5E5]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-[#E5E5E5] mb-16">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#777777] block mb-3">
            07 &bull; Project Inquiries
          </span>
          <h2
            id="contact-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[#111111]"
          >
            Have a project in mind?
          </h2>
        </div>

        <p className="max-w-md text-sm sm:text-base text-[#666666] leading-relaxed">
          We invite Indian businesses, startups, and entrepreneurs to collaborate on modern web design and high-performance development. Reach us directly on WhatsApp, phone, or email.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Direct Official Contact Channels */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <h3 className="text-xl font-bold tracking-tight text-[#111111] mb-2">
              Instant Contact Channels
            </h3>
            <p className="text-sm text-[#666666] leading-relaxed">
              Connect directly via WhatsApp or phone for immediate consultation, project feasibility checks, or quotation discussions.
            </p>
          </div>

          <div className="space-y-4">
            {/* WhatsApp CTA (Prominent Indian Channel) */}
            <a
              href="https://wa.me/919873111153"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 border-2 border-emerald-700 bg-emerald-50/50 flex items-center justify-between hover:bg-emerald-100/50 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-emerald-700 text-white flex items-center justify-center rounded-none">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-emerald-900 font-bold">
                    WhatsApp Enquiry (Instant Response)
                  </p>
                  <p className="text-sm font-semibold text-[#111111] mt-0.5">
                    +91 9873111153
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-emerald-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Direct Phone Call */}
            <a
              href="tel:+919873111153"
              className="group p-5 border border-[#E5E5E5] bg-white flex items-center justify-between hover:border-[#111111] transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-[#E5E5E5] flex items-center justify-center text-[#111111] group-hover:border-[#111111]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[#777777]">
                    Click to Call (India)
                  </p>
                  <p className="text-sm font-semibold text-[#111111]">
                    +91 9873111153
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#777777] group-hover:text-[#111111] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Email Contact */}
            <a
              href="mailto:ds.studio.buissness@gmail.com"
              className="group p-5 border border-[#E5E5E5] bg-white flex items-center justify-between hover:border-[#111111] transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-[#E5E5E5] flex items-center justify-center text-[#111111] group-hover:border-[#111111]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[#777777]">
                    Official Business Email
                  </p>
                  <p className="text-sm font-semibold text-[#111111] break-all">
                    ds.studio.buissness@gmail.com
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#777777] group-hover:text-[#111111] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          <div className="p-4 border border-[#E5E5E5] bg-neutral-50 text-xs text-[#555555] space-y-1 font-mono">
            <p><span className="text-[#888888]">Operating Hours:</span> Mon – Sat, 10:00 AM – 8:00 PM IST</p>
            <p><span className="text-[#888888]">Response Window:</span> Within 2 to 4 hours on WhatsApp</p>
            <p><span className="text-[#888888]">Location:</span> Serving Pan-India &amp; International Clients</p>
          </div>
        </div>

        {/* Right Column: Functional Inquiry Form */}
        <div className="lg:col-span-7">
          {submitted ? (
            <div
              role="alert"
              aria-live="polite"
              className="p-8 sm:p-12 border border-[#111111] bg-white text-center space-y-6 animate-in fade-in duration-300"
            >
              <div className="w-12 h-12 mx-auto border border-[#111111] flex items-center justify-center text-[#111111]">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-serif font-bold text-[#111111]">
                  Project Brief Received
                </h3>
                <p className="text-sm text-[#555555] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Your enquiry for <strong>{formData.serviceRequired}</strong> has been validated.
                </p>
              </div>

              {/* Instant WhatsApp option for immediate chat */}
              <div className="p-5 border border-emerald-700 bg-emerald-50 max-w-md mx-auto space-y-3">
                <p className="text-xs text-emerald-950 font-medium">
                  Want an immediate reply? You can also forward this project brief directly to WhatsApp:
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-700 text-white text-xs font-mono uppercase tracking-wider hover:bg-emerald-800 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send to WhatsApp Now (+91 9873111153)</span>
                </a>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 border border-[#111111] text-xs font-mono uppercase tracking-widest text-[#111111] hover:bg-[#111111] hover:text-white transition-colors"
                >
                  Submit Another Project
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="border border-[#E5E5E5] p-6 sm:p-10 bg-white space-y-6"
              aria-label="Studio Project Inquiry Form"
            >
              {/* Anti-spam honeypot */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website-trap">Leave this blank</label>
                <input
                  type="text"
                  id="website-trap"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                />
              </div>

              {/* Row 1: Name & Business Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-mono uppercase tracking-widest text-[#111111]"
                  >
                    Your Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                    }}
                    placeholder="e.g. Rahul Sharma"
                    aria-invalid={!!errors.fullName}
                    className={`w-full px-4 py-3 border text-sm text-[#111111] placeholder:text-[#999999] bg-white focus:outline-none focus:border-[#111111] transition-colors ${
                      errors.fullName ? "border-red-500" : "border-[#E5E5E5]"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-600 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="businessName"
                    className="block text-xs font-mono uppercase tracking-widest text-[#111111]"
                  >
                    Business / Brand Name <span className="text-[#888888] font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="e.g. Saffron Ventures, Delhi"
                    className="w-full px-4 py-3 border border-[#E5E5E5] text-sm text-[#111111] placeholder:text-[#999999] bg-white focus:outline-none focus:border-[#111111] transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono uppercase tracking-widest text-[#111111]"
                  >
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="e.g. rahul@company.com"
                    aria-invalid={!!errors.email}
                    className={`w-full px-4 py-3 border text-sm text-[#111111] placeholder:text-[#999999] bg-white focus:outline-none focus:border-[#111111] transition-colors ${
                      errors.email ? "border-red-500" : "border-[#E5E5E5]"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-600 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="block text-xs font-mono uppercase tracking-widest text-[#111111]"
                  >
                    Phone / WhatsApp Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: undefined });
                    }}
                    placeholder="e.g. +91 9873111153"
                    aria-invalid={!!errors.phone}
                    className={`w-full px-4 py-3 border text-sm text-[#111111] placeholder:text-[#999999] bg-white focus:outline-none focus:border-[#111111] transition-colors ${
                      errors.phone ? "border-red-500" : "border-[#E5E5E5]"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-600 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 3: Service Required */}
              <div className="space-y-2">
                <label
                  htmlFor="serviceRequired"
                  className="block text-xs font-mono uppercase tracking-widest text-[#111111]"
                >
                  Service Required
                </label>
                <select
                  id="serviceRequired"
                  name="serviceRequired"
                  value={formData.serviceRequired}
                  onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                  className="w-full px-4 py-3 border border-[#E5E5E5] text-sm text-[#111111] bg-white focus:outline-none focus:border-[#111111]"
                >
                  {SERVICES_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Row 4: Budget Range in INR (Optional) */}
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-widest text-[#111111]">
                  Estimated Budget Range in INR <span className="text-[#888888] font-normal">(Optional)</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {BUDGET_RANGES_INR.map((range) => (
                    <button
                      key={range}
                      type="button"
                      onClick={() => setFormData({ ...formData, budgetRange: range })}
                      className={`px-3 py-2 text-xs font-mono transition-all ${
                        formData.budgetRange === range
                          ? "bg-[#111111] text-white font-semibold"
                          : "border border-[#E5E5E5] text-[#555555] hover:border-[#111111] bg-white"
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 5: Project Description */}
              <div className="space-y-2">
                <label
                  htmlFor="description"
                  className="block text-xs font-mono uppercase tracking-widest text-[#111111]"
                >
                  Project Summary &amp; Requirements <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  required
                  value={formData.description}
                  onChange={(e) => {
                    setFormData({ ...formData, description: e.target.value });
                    if (errors.description) setErrors({ ...errors, description: undefined });
                  }}
                  placeholder="Share details about your business, website goals, specific features, and target launch date..."
                  aria-invalid={!!errors.description}
                  className={`w-full px-4 py-3 border text-sm text-[#111111] placeholder:text-[#999999] bg-white focus:outline-none focus:border-[#111111] transition-colors resize-none ${
                    errors.description ? "border-red-500" : "border-[#E5E5E5]"
                  }`}
                />
                {errors.description && (
                  <p className="text-xs text-red-600 flex items-center gap-1 font-mono">
                    <AlertCircle className="w-3 h-3" />
                    {errors.description}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#111111] text-white text-xs font-mono uppercase tracking-widest hover:bg-[#333333] transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Verifying Brief...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Project Enquiry</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
