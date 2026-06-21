// src/components/forms/ContactForm.tsx
"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CONTACT_SECTIONS, FORM_LABELS, VALIDATION_ERRORS } from "../../constants/contactData";

// Define strict validation rules via Zod schema
const contactFormSchema = z.object({
  name: z.string().min(2, VALIDATION_ERRORS.nameMin).max(50, VALIDATION_ERRORS.nameMax),
  email: z.string().email(VALIDATION_ERRORS.emailInvalid),
  subject: z.string().min(5, VALIDATION_ERRORS.subjectMin),
  message: z.string().min(10, VALIDATION_ERRORS.messageMin),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

interface ContactFormProps {
  onSubmitSuccess?: (data: ContactFormValues) => void;
}

export default function ContactForm({ onSubmitSuccess }: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" }
  });

  const onFormSubmit = async (data: ContactFormValues) => {
    setServerError(null); // Clear any previous errors

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong on our servers.");
      }

      // If the server-side mail dispatch is successful:
      setIsSubmitted(true);
      if (onSubmitSuccess) onSubmitSuccess(data);
    } catch (error: any) {
      console.error("Form Submission Network Error:", error);
      setServerError(error.message || "Failed to send message. Please try again later.");
    }
  };

  const handleReset = () => {
    reset();
    setIsSubmitted(false);
    setServerError(null);
  };

  if (isSubmitted) {
    return (
      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6 text-center space-y-2">
        <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
          {CONTACT_SECTIONS.form.successTitle}
        </p>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          {CONTACT_SECTIONS.form.successMessage}
        </p>
        <button 
          onClick={handleReset}
          className="mt-4 text-xs font-semibold text-indigo-600 dark:text-indigo-400 underline underline-offset-4 hover:text-indigo-700"
        >
          {CONTACT_SECTIONS.form.successButton}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-5">
      
      {/* Global Server Error Alert */}
      {serverError && (
        <div className="text-sm font-semibold text-rose-500 bg-rose-500/10 border border-rose-500/20 p-3 rounded-xl transition-all">
          {serverError}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        {/* Name Field */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold tracking-wide text-slate-600 dark:text-slate-300 uppercase">
            {FORM_LABELS.name}
          </label>
          <input
            type="text"
            {...register("name")}
            className={`w-full bg-slate-50 dark:bg-slate-950 border rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none transition-colors ${
              errors.name ? "border-rose-500 focus:border-rose-500" : "border-slate-200 dark:border-slate-800 focus:border-indigo-500"
            }`}
            placeholder={FORM_LABELS.namePlaceholder}
          />
          {errors.name && <p className="text-xs font-medium text-rose-500 mt-1">{errors.name.message}</p>}
        </div>

        {/* Email Field */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold tracking-wide text-slate-600 dark:text-slate-300 uppercase">
            {FORM_LABELS.email}
          </label>
          <input
            type="email"
            {...register("email")}
            className={`w-full bg-slate-50 dark:bg-slate-950 border rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none transition-colors ${
              errors.email ? "border-rose-500 focus:border-rose-500" : "border-slate-200 dark:border-slate-800 focus:border-indigo-500"
            }`}
            placeholder={FORM_LABELS.emailPlaceholder}
          />
          {errors.email && <p className="text-xs font-medium text-rose-500 mt-1">{errors.email.message}</p>}
        </div>
      </div>

      {/* Subject Field */}
      <div className="space-y-1.5">
        <label className="text-xs font-semibold tracking-wide text-slate-600 dark:text-slate-300 uppercase">
          {FORM_LABELS.subject}
        </label>
        <input
          type="text"
          {...register("subject")}
          className={`w-full bg-slate-50 dark:bg-slate-950 border rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none transition-colors ${
            errors.subject ? "border-rose-500 focus:border-rose-500" : "border-slate-200 dark:border-slate-800 focus:border-indigo-500"
          }`}
          placeholder={FORM_LABELS.subjectPlaceholder}
        />
        {errors.subject && <p className="text-xs font-medium text-rose-500 mt-1">{errors.subject.message}</p>}
      </div>

      {/* Message Field */}
      <div className="space-y-1.5">
        <label className="text-xs font-semibold tracking-wide text-slate-600 dark:text-slate-300 uppercase">
          {FORM_LABELS.message}
        </label>
        <textarea
          rows={5}
          {...register("message")}
          className={`w-full bg-slate-50 dark:bg-slate-950 border rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none transition-colors resize-none ${
            errors.message ? "border-rose-500 focus:border-rose-500" : "border-slate-200 dark:border-slate-800 focus:border-indigo-500"
          }`}
          placeholder={FORM_LABELS.messagePlaceholder}
        />
        {errors.message && <p className="text-xs font-medium text-rose-500 mt-1">{errors.message.message}</p>}
      </div>

      {/* Submit Action Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-400 text-white text-sm font-bold uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-md transition-all transform active:scale-[0.99]"
      >
        {isSubmitting ? "Sending..." : FORM_LABELS.submitButton}
      </button>
    </form>
  );
}