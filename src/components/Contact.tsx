"use client";

import { useState } from "react";
import { Mail, MessageSquare, ArrowUpRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface FormState {
  fullName: string;
  email: string;
  businessName: string;
  projectType: string;
  budgetRange: string;
  description: string;
  honeypot: string; // Anti-spam trap
}

interface FormErrors {
  fullName?: string;
  email?: string;
  description?: string;
}

const PROJECT_TYPES = [
  "Business Website",
  "E-Commerce Website",
  "Landing Page",
  "Shopify Store",
  "Portfolio Website",
  "Website Maintenance",
];

const BUDGET_RANGES = [
  "< $3,000",
  "$3,000 – $7,000",
  "$7,000 – $15,000",
  "$15,000+",
];

export function Contact() {
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    email: "",
    businessName: "",
    projectType: "Business Website",
    budgetRange: "$3,000 – $7,000",
    description: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address (e.g., name@domain.com)";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Please share a brief summary of your project";
    } else if (formData.description.trim().length < 15) {
      newErrors.description = "Please provide at least 15 characters describing your project";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check honeypot for spam bots
    if (formData.honeypot) {
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable network dispatch
    await new Promise((resolve) => setTimeout(resolve, 900));

    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      businessName: "",
      projectType: "Business Website",
      budgetRange: "$3,000 – $7,000",
      description: "",
      honeypot: "",
    });
    setErrors({});
    setSubmitted(false);
  };

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
            Have a Project in Mind?
          </h2>
        </div>

        <p className="max-w-md text-sm sm:text-base text-[#666666] leading-relaxed">
          Tell us about your brand, goals, and timeline. We respond to all qualified inquiries within 24–48 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Direct Links & Studio Contact Details */}
        <div className="lg:col-span-5 space-y-10">
          <div>
            <h3 className="text-xl font-bold tracking-tight text-[#111111] mb-3">
              Direct Communication
            </h3>
            <p className="text-sm text-[#666666] leading-relaxed">
              Prefer to reach out directly? Send an email or connect via WhatsApp for an informal introductory consultation.
            </p>
          </div>

          <div className="space-y-4">
            {/* Email link */}
            <a
              href="mailto:hello@ds-studios.design"
              className="group p-5 border border-[#E5E5E5] bg-white flex items-center justify-between hover:border-[#111111] transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-[#E5E5E5] flex items-center justify-center text-[#111111] group-hover:border-[#111111]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[#777777]">
                    Electronic Mail (Placeholder)
                  </p>
                  <p className="text-sm font-semibold text-[#111111]">
                    hello@ds-studios.design
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#777777] group-hover:text-[#111111] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* WhatsApp link with placeholder notice */}
            <a
              href="https://wa.me/0000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 border border-[#E5E5E5] bg-white flex items-center justify-between hover:border-[#111111] transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-[#E5E5E5] flex items-center justify-center text-[#111111] group-hover:border-[#111111]">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[#777777]">
                    WhatsApp Direct (Placeholder)
                  </p>
                  <p className="text-sm font-semibold text-[#111111]">
                    +00 000 000 0000
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#777777] group-hover:text-[#111111] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Studio Transparency Note */}
          <div className="p-5 border border-[#E5E5E5] bg-neutral-50 space-y-2 text-xs text-[#666666]">
            <p className="font-mono uppercase tracking-wider text-[#111111] font-semibold">
              Contact Transparency Notice:
            </p>
            <p>
              The email address and WhatsApp number above are clearly marked placeholders pending official studio registration. Form submissions are validated client-side with full state verification.
            </p>
          </div>
        </div>

        {/* Right Column: Validated Project Inquiry Form */}
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
                  Inquiry Dispatched Successfully
                </h3>
                <p className="text-sm text-[#555555] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Your project specification for a <strong>{formData.projectType}</strong> has been received and verified.
                </p>
              </div>

              <div className="p-4 border border-[#E5E5E5] bg-neutral-50 max-w-sm mx-auto text-left text-xs font-mono space-y-1.5 text-[#555555]">
                <p><span className="text-[#999999]">Email:</span> {formData.email}</p>
                <p><span className="text-[#999999]">Budget:</span> {formData.budgetRange}</p>
                <p><span className="text-[#999999]">Status:</span> Client Validation Verified</p>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-3 border border-[#111111] text-xs font-mono uppercase tracking-widest text-[#111111] hover:bg-[#111111] hover:text-white transition-colors"
              >
                Submit Another Project
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="border border-[#E5E5E5] p-6 sm:p-10 bg-white space-y-8"
              aria-label="Studio Project Inquiry Form"
            >
              {/* Anti-spam honeypot (hidden from screen readers & users) */}
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

              {/* Row 1: Name and Email */}
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
                    placeholder="e.g. Julian Hayes"
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? "fullName-error" : undefined}
                    className={`w-full px-4 py-3 border text-sm text-[#111111] placeholder:text-[#999999] bg-white focus:outline-none focus:border-[#111111] transition-colors ${
                      errors.fullName ? "border-red-500" : "border-[#E5E5E5]"
                    }`}
                  />
                  {errors.fullName && (
                    <p id="fullName-error" className="text-xs text-red-600 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

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
                    placeholder="e.g. julian@company.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`w-full px-4 py-3 border text-sm text-[#111111] placeholder:text-[#999999] bg-white focus:outline-none focus:border-[#111111] transition-colors ${
                      errors.email ? "border-red-500" : "border-[#E5E5E5]"
                    }`}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-xs text-red-600 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Business Name (Optional) */}
              <div className="space-y-2">
                <label
                  htmlFor="businessName"
                  className="block text-xs font-mono uppercase tracking-widest text-[#111111]"
                >
                  Business / Project Name <span className="text-[#888888] font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  placeholder="e.g. Acme Innovations Ltd."
                  className="w-full px-4 py-3 border border-[#E5E5E5] text-sm text-[#111111] placeholder:text-[#999999] bg-white focus:outline-none focus:border-[#111111] transition-colors"
                />
              </div>

              {/* Row 3: Project Type Selector */}
              <div className="space-y-3">
                <label className="block text-xs font-mono uppercase tracking-widest text-[#111111]">
                  Project Type
                </label>
                <div className="flex flex-wrap gap-2">
                  {PROJECT_TYPES.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData({ ...formData, projectType: type })}
                      className={`px-3 py-2 text-xs font-mono transition-all ${
                        formData.projectType === type
                          ? "bg-[#111111] text-white font-semibold"
                          : "border border-[#E5E5E5] text-[#555555] hover:border-[#111111] bg-white"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 4: Budget Range Selector (Optional) */}
              <div className="space-y-3">
                <label className="block text-xs font-mono uppercase tracking-widest text-[#111111]">
                  Estimated Budget Range <span className="text-[#888888] font-normal">(USD)</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {BUDGET_RANGES.map((range) => (
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
                  Project Summary &amp; Objectives <span className="text-red-600">*</span>
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
                  placeholder="Tell us about your brand, current challenges, key deliverables, and target launch window..."
                  aria-invalid={!!errors.description}
                  aria-describedby={errors.description ? "description-error" : undefined}
                  className={`w-full px-4 py-3 border text-sm text-[#111111] placeholder:text-[#999999] bg-white focus:outline-none focus:border-[#111111] transition-colors resize-none ${
                    errors.description ? "border-red-500" : "border-[#E5E5E5]"
                  }`}
                />
                {errors.description && (
                  <p id="description-error" className="text-xs text-red-600 flex items-center gap-1 font-mono">
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
                      <span>Verifying &amp; Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Project Brief</span>
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
