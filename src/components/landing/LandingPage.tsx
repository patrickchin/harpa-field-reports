import { useState } from "react";
import {
  HardHat,
  Mic,
  Camera,
  FileText,
  FolderKanban,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ClipboardList,
  Image as ImageIcon,
  AlertTriangle,
  Users,
  Package,
  ListChecks,
  Menu,
  X,
} from "lucide-react";

function Wordmark() {
  return (
    <a href="#top" className="flex items-center gap-2.5 group">
      <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground shadow-sm">
        <HardHat className="h-5 w-5" strokeWidth={2.25} />
      </span>
      <span className="flex items-baseline gap-1.5">
        <span className="text-[1.05rem] font-semibold tracking-tight text-ink">Harpa</span>
        <span className="rounded-sm border border-hairline bg-secondary px-1.5 py-px text-[0.65rem] font-medium uppercase tracking-wider text-ink-soft">
          Pro
        </span>
      </span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Wordmark />
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#how" className="text-sm text-ink-soft hover:text-ink transition-colors">
            How it works
          </a>
          <a href="#why" className="text-sm text-ink-soft hover:text-ink transition-colors">
            Why Harpa
          </a>
          <a
            href="#waitlist"
            className="inline-flex h-9 items-center rounded-md bg-accent px-4 text-sm font-medium text-accent-foreground shadow-sm hover:brightness-95 ring-focus"
          >
            Join waitlist
          </a>
        </nav>
        <button
          aria-label="Open menu"
          className="md:hidden grid h-9 w-9 place-items-center rounded-md border border-hairline text-ink"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-hairline bg-background">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 p-4">
            <a href="#how" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm text-ink hover:bg-secondary">
              How it works
            </a>
            <a href="#why" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm text-ink hover:bg-secondary">
              Why Harpa
            </a>
            <a
              href="#waitlist"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex h-10 items-center justify-center rounded-md bg-accent px-4 text-sm font-medium text-accent-foreground"
            >
              Join waitlist
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function ReportMockup() {
  return (
    <div className="relative">
      {/* Background paper card */}
      <div className="absolute -inset-4 rounded-2xl bg-secondary/60 -z-10" aria-hidden />
      <div className="rounded-xl border border-hairline bg-card shadow-[0_1px_0_rgba(45,58,90,0.04),0_24px_48px_-24px_rgba(45,58,90,0.18)] overflow-hidden">
        {/* Tab strip */}
        <div className="flex items-center justify-between border-b border-hairline bg-paper-2 px-4 py-2.5">
          <div className="flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-wider text-ink-soft">
            <FileText className="h-3.5 w-3.5" />
            Daily Report
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-border" />
            <span className="h-2 w-2 rounded-full bg-border" />
            <span className="h-2 w-2 rounded-full bg-accent" />
          </div>
        </div>

        <div className="p-5 space-y-4">
          {/* Project header */}
          <div className="flex items-start justify-between">
            <div>
              <div className="text-[0.7rem] uppercase tracking-wider text-ink-soft">Project</div>
              <div className="mt-0.5 text-base font-semibold text-ink">Cedar Heights — Bldg B</div>
              <div className="text-xs text-ink-soft">Tue, Mar 18 · Foreman: J. Alvarez</div>
            </div>
            <span className="rounded-md border border-hairline bg-paper-2 px-2 py-1 text-[0.65rem] font-medium uppercase tracking-wider text-ink-soft">
              Draft
            </span>
          </div>

          {/* Capture chips */}
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-paper-2 px-2.5 py-1 text-xs text-ink">
              <Mic className="h-3.5 w-3.5" /> 3 voice notes
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-paper-2 px-2.5 py-1 text-xs text-ink">
              <Camera className="h-3.5 w-3.5" /> 12 photos
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-paper-2 px-2.5 py-1 text-xs text-ink">
              <ClipboardList className="h-3.5 w-3.5" /> 7 notes
            </span>
          </div>

          {/* Report sections */}
          <ReportSection icon={<ListChecks className="h-3.5 w-3.5" />} title="Work Completed">
            Poured slab on grade for sections C3–C5. Stripped formwork at column line B.
          </ReportSection>
          <ReportSection icon={<Users className="h-3.5 w-3.5" />} title="Crew">
            8 carpenters · 3 laborers · 2 ironworkers · 1 operator
          </ReportSection>
          <ReportSection icon={<Package className="h-3.5 w-3.5" />} title="Materials">
            42 cy concrete delivered (Holcim, 4000 psi). Rebar tied per spec.
          </ReportSection>
          <ReportSection icon={<AlertTriangle className="h-3.5 w-3.5" />} title="Issues" accent>
            Water line conflict at column B6 — RFI #14 sent to GC.
          </ReportSection>

          {/* Generate row */}
          <div className="flex items-center justify-between rounded-md border border-hairline bg-paper-2 px-3 py-2.5">
            <div className="flex items-center gap-2 text-xs text-ink">
              <Sparkles className="h-4 w-4 text-accent" />
              Report assembled from today&apos;s captures
            </div>
            <button className="inline-flex items-center gap-1 rounded-md bg-primary px-2.5 py-1.5 text-xs font-medium text-primary-foreground">
              Review <ArrowRight className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating photo card */}
      <div className="hidden sm:flex absolute -bottom-6 -left-6 w-44 items-center gap-2 rounded-lg border border-hairline bg-card p-2 shadow-md rotate-[-3deg]">
        <div className="grid h-10 w-10 place-items-center rounded-md bg-secondary text-ink-soft">
          <ImageIcon className="h-5 w-5" />
        </div>
        <div className="text-xs">
          <div className="font-medium text-ink">Slab pour, C4</div>
          <div className="text-ink-soft">9:42 AM</div>
        </div>
      </div>

      {/* Floating voice chip */}
      <div className="hidden sm:flex absolute -top-5 -right-4 items-center gap-2 rounded-full border border-hairline bg-card px-3 py-1.5 shadow-md">
        <span className="grid h-6 w-6 place-items-center rounded-full bg-accent text-accent-foreground">
          <Mic className="h-3 w-3" />
        </span>
        <span className="text-xs text-ink">Voice note · 0:38</span>
      </div>
    </div>
  );
}

function ReportSection({
  icon,
  title,
  children,
  accent,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <div className="rounded-md border border-hairline bg-background/60 p-3">
      <div className="flex items-center gap-1.5 text-[0.7rem] font-semibold uppercase tracking-wider text-ink-soft">
        <span className={accent ? "text-accent" : ""}>{icon}</span>
        {title}
      </div>
      <p className="mt-1 text-[0.83rem] leading-snug text-ink">{children}</p>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-28">
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-hairline bg-card px-3 py-1 text-xs text-ink-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Early access · Built with field teams
          </span>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
            Don&apos;t write site reports, let Harpa Pro write for you
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            Harpa Pro helps foremen capture field notes, photos, and voice updates throughout the day,
            then turns them into organized construction reports.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#waitlist"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-accent px-5 text-sm font-medium text-accent-foreground shadow-sm hover:brightness-95 ring-focus"
            >
              Join the waitlist <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#how"
              className="inline-flex h-11 items-center rounded-md border border-hairline bg-card px-5 text-sm font-medium text-ink hover:bg-secondary"
            >
              See how it works
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-ink-soft">
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-ink" /> No end-of-day paperwork</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-ink" /> Works in gloves and noise</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-ink" /> Report-ready by 4pm</span>
          </div>
        </div>

        <div className="relative lg:pl-6">
          <ReportMockup />
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  const items = [
    {
      title: "Notes get scattered",
      body: "Texts, sticky notes, group chats, and memory. By 5pm, half of it is gone.",
    },
    {
      title: "Photos lose context",
      body: "A camera roll full of slabs and rebar with no idea what was where, or why.",
    },
    {
      title: "Reports happen too late",
      body: "Writing the day up at home, days behind, after the details have faded.",
    },
  ];
  return (
    <section id="why" className="border-y border-hairline bg-paper-2/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">The problem</span>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Reporting should not be another end-of-day job.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="rounded-xl border border-hairline bg-card p-6"
            >
              <div className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-wider text-ink-soft">
                <span className="grid h-5 w-5 place-items-center rounded-sm border border-hairline bg-paper-2 text-ink">
                  {String(i + 1).padStart(2, "0")}
                </span>
                Field reality
              </div>
              <h3 className="mt-3 text-lg font-semibold text-ink">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      title: "Capture the day",
      body: "Add text notes, photos, and voice updates from the field, in the moment, with one tap.",
      icon: <Mic className="h-4 w-4" />,
    },
    {
      title: "Organize by project",
      body: "Every update is tied to the right job, so nothing gets mixed up across sites.",
      icon: <FolderKanban className="h-4 w-4" />,
    },
    {
      title: "Generate the report",
      body: "Turn the day's captures into a clean report ready to review, edit, and share.",
      icon: <FileText className="h-4 w-4" />,
    },
  ];
  return (
    <section id="how" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">How it works</span>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Three steps from boots to report.
          </h2>
        </div>
      </div>

      <ol className="mt-10 grid gap-px overflow-hidden rounded-xl border border-hairline bg-border sm:grid-cols-3">
        {steps.map((s, i) => (
          <li key={s.title} className="bg-card p-6">
            <div className="flex items-center justify-between">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground">
                {s.icon}
              </span>
              <span className="font-mono text-xs text-ink-soft">0{i + 1}</span>
            </div>
            <h3 className="mt-5 text-lg font-semibold text-ink">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Features() {
  const feats = [
    { icon: <Mic className="h-4 w-4" />, title: "Voice notes for hands-busy updates", body: "Talk through what's happening while you walk the site. Harpa transcribes and files it." },
    { icon: <Camera className="h-4 w-4" />, title: "Photo-backed documentation", body: "Tag photos to a project and section. Context stays attached, not stuck in a camera roll." },
    { icon: <FolderKanban className="h-4 w-4" />, title: "Project-based report history", body: "Every report archived under the right job. Look back across days, weeks, or trades." },
    { icon: <FileText className="h-4 w-4" />, title: "Clean report exports", body: "Share PDFs that look like the report your office already expects — no formatting work." },
    { icon: <HardHat className="h-4 w-4" />, title: "Built for jobsite pace", body: "Big targets, offline-tolerant, glove-friendly. Designed for noise, dust, and gloves." },
    { icon: <Sparkles className="h-4 w-4" />, title: "Drafts you actually review", body: "You stay in control. Harpa drafts; you approve before anything is shared." },
  ];
  return (
    <section className="border-t border-hairline bg-paper-2/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">What you get</span>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Field-first features, not dashboard fluff.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {feats.map((f) => (
            <div key={f.title} className="rounded-xl border border-hairline bg-card p-5">
              <span className="grid h-9 w-9 place-items-center rounded-md border border-hairline bg-paper-2 text-ink">
                {f.icon}
              </span>
              <h3 className="mt-4 text-base font-semibold text-ink">{f.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="waitlist" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <div className="grid gap-10 rounded-2xl border border-hairline bg-card p-6 sm:p-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">Early access</span>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Get Harpa Pro before everyone else.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft sm:text-base">
            Built with field teams. Early users will help shape the reporting workflow — what gets
            captured, what gets generated, and what your office sees.
          </p>
          <ul className="mt-6 space-y-2.5 text-sm text-ink">
            <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-accent" /> First access when iOS pilots open</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-accent" /> Direct line to the team building it</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-accent" /> Free during the early-access program</li>
          </ul>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="rounded-xl border border-hairline bg-paper-2/70 p-5 sm:p-6"
        >
          {submitted ? (
            <div className="flex h-full min-h-[20rem] flex-col items-center justify-center text-center">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-accent-foreground">
                <CheckCircle2 className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink">You&apos;re on the list.</h3>
              <p className="mt-1.5 max-w-xs text-sm text-ink-soft">
                We&apos;ll be in touch as soon as your spot in the early-access program opens up.
              </p>
            </div>
          ) : (
            <div className="grid gap-3.5">
              <Field label="Name">
                <input required type="text" placeholder="Jamie Alvarez" className={inputCls} />
              </Field>
              <Field label="Work email">
                <input required type="email" placeholder="jamie@buildco.com" className={inputCls} />
              </Field>
              <Field label="Company">
                <input required type="text" placeholder="BuildCo Construction" className={inputCls} />
              </Field>
              <Field label="Role">
                <select required defaultValue="foreman" className={inputCls}>
                  <option value="foreman">Foreman / Site Supervisor</option>
                  <option value="superintendent">Superintendent</option>
                  <option value="pm">Project Manager</option>
                  <option value="owner">Owner / Operator</option>
                  <option value="other">Other</option>
                </select>
              </Field>
              <Field label="What kind of projects do you run?" optional>
                <textarea rows={3} placeholder="e.g. Multifamily wood-frame, light commercial, civil…" className={inputCls} />
              </Field>

              <button
                type="submit"
                className="mt-2 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-accent px-5 text-sm font-medium text-accent-foreground shadow-sm hover:brightness-95 ring-focus"
              >
                Request early access <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-xs text-ink-soft">
                We&apos;ll only use your info to coordinate early access. No spam, ever.
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

const inputCls =
  "w-full rounded-md border border-hairline bg-card px-3 py-2 text-sm text-ink placeholder:text-ink-soft/70 outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition";

function Field({
  label,
  optional,
  children,
}: {
  label: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-center gap-1.5 text-[0.7rem] font-semibold uppercase tracking-wider text-ink-soft">
        {label}
        {optional && <span className="rounded-sm bg-secondary px-1 py-px text-[0.6rem] normal-case text-ink-soft">Optional</span>}
      </span>
      {children}
    </label>
  );
}

function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center">
        <div className="flex flex-col gap-2">
          <Wordmark />
          <p className="text-xs text-ink-soft">Daily reports before you leave the jobsite.</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-ink-soft">
          <a href="#" className="hover:text-ink">Privacy</a>
          <a href="#" className="hover:text-ink">Terms</a>
          <a href="#" className="hover:text-ink">Contact</a>
          <span className="hidden sm:inline">© {new Date().getFullYear()} Harpa Pro</span>
        </div>
      </div>
    </footer>
  );
}

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-ink">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <Features />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
}