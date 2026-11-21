"use client";

import { useState } from "react";

export default function Contact() {
  const [state, setState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Capture the form now: React clears e.currentTarget once the handler yields (before the await below resumes).
    const form = e.currentTarget;
    setState("submitting");
    setError(null);
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setState("success");
      form.reset();
    } catch (err: unknown) {
      setState("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <section className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-semibold text-white">Contact WFT57</h1>
        <p className="text-zinc-300">
          Have a question about membership, events, or community programs? Send us a message and a brother will respond.
        </p>
        <p className="text-sm text-zinc-400">Note: This demo form stores messages temporarily. We can connect email later (e.g., SMTP or a service like Resend).</p>
      </section>

      <form onSubmit={onSubmit} className="card p-6 md:p-8 space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-zinc-300">Name</label>
          <input id="name" name="name" autoComplete="name" required className="field" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-zinc-300">Email</label>
          <input id="email" type="email" name="email" autoComplete="email" required className="field" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-zinc-300">Message</label>
          <textarea id="message" name="message" rows={5} required className="field" />
        </div>
        <div className="flex items-center gap-3">
          <button disabled={state === "submitting"} className="btn-primary" type="submit">
            {state === "submitting" ? "Sending…" : "Send Message"}
          </button>
          <span role="status" aria-live="polite" className="text-sm">
            {state === "success" && <span className="text-green-400">Message sent!</span>}
            {state === "error" && <span className="text-red-400">{error}</span>}
          </span>
        </div>
      </form>
    </div>
  );
}
