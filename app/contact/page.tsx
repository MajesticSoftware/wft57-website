"use client";

import { useState } from "react";

export default function Contact() {
  const [state, setState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setError(null);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setState("success");
      e.currentTarget.reset();
    } catch (e: unknown) {
      setState("error");
      setError(e instanceof Error ? e.message : "Something went wrong");
    }
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <section className="space-y-2">
        <h1 className="text-3xl font-semibold text-white">Contact WFT57</h1>
        <p className="text-zinc-300">
          Have a question about membership, events, or community programs? Send us a message and a brother will respond.
        </p>
        <p className="text-sm text-zinc-400">Note: This demo form stores messages temporarily. We can connect email later (e.g., SMTP or a service like Resend).</p>
      </section>

      <form onSubmit={onSubmit} className="card p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-zinc-300">Name</label>
          <input name="name" required className="mt-1 w-full rounded-md border border-white/10 bg-white/5 text-white placeholder:text-zinc-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-300">Email</label>
          <input type="email" name="email" required className="mt-1 w-full rounded-md border border-white/10 bg-white/5 text-white placeholder:text-zinc-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-300">Message</label>
          <textarea name="message" rows={5} required className="mt-1 w-full rounded-md border border-white/10 bg-white/5 text-white placeholder:text-zinc-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
        </div>
        <div className="flex items-center gap-3">
          <button disabled={state === "submitting"} className="btn-primary" type="submit">
            {state === "submitting" ? "Sending…" : "Send Message"}
          </button>
          {state === "success" && <span className="text-green-400 text-sm">Message sent!</span>}
          {state === "error" && <span className="text-red-400 text-sm">{error}</span>}
        </div>
      </form>
    </div>
  );
}
