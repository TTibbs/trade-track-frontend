import { Link } from "react-router-dom";
import {
  Camera,
  ClipboardList,
  Database,
  FileText,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MarketingFooter from "@/components/MarketingFooter";
import MarketingNavbar from "@/components/MarketingNavbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function StoreCta({ kind }: { kind: "appstore" | "googleplay" }) {
  const label =
    kind === "appstore" ? "iOS Beta (Coming Soon)" : "Android Beta Test";

  // Internal testing link (Play Console). App Store link not added yet.
  const href =
    kind === "googleplay"
      ? "https://play.google.com/apps/internaltest/4701670823641911935"
      : undefined;

  return (
    <Button
      asChild
      size="lg"
      variant={kind === "appstore" ? "default" : "outline"}
      className="w-full sm:w-auto"
    >
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${label}`}
        >
          {label}
        </a>
      ) : (
        <span>{label}</span>
      )}
    </Button>
  );
}

function LandingPage() {
  const mobileScreenshotUrls = [
    "https://s2pw3n9f1f.ufs.sh/f/GNMrlX3JRPgnxfcr4po92SnlIH3MLYJF64GajKpvDgcUZz1y",
    "https://s2pw3n9f1f.ufs.sh/f/GNMrlX3JRPgnPEaY1FxLacuZNeh2dVlbmkOg8GS67vT3xwis",
    "https://s2pw3n9f1f.ufs.sh/f/GNMrlX3JRPgnphSSvp56BTbkLxjWXns57f0mEUAMO1J4o8DV",
    "https://s2pw3n9f1f.ufs.sh/f/GNMrlX3JRPgnhoqKpRbjXdT90NKqtkWMFLUSx51Hc8vEzCBe",
  ];

  return (
    <div className="min-h-screen bg-background">
      <MarketingNavbar />

      <main>
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-primary/15 via-transparent to-transparent" />
          <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
            <div className="grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  Offline-first job/order tracking for people on the go.
                </h1>
                <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Create jobs/orders, capture notes and photos, update status
                  from Pending → In Progress → Completed, and generate job
                  summaries. Built for the field-first reality of offline work.
                </p>

                <div className="mt-6 rounded-xl border bg-background/60 px-4 py-3">
                  <p className="text-sm font-medium">
                    Offline-first, field-ready
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    No signal? Still capture jobs, photos, notes, status, and
                    summaries—everything is stored on your device.
                  </p>
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <StoreCta kind="appstore" />
                  <StoreCta kind="googleplay" />
                </div>

                <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <Database className="size-4 text-primary" />
                    SQLite local storage
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <ShieldCheck className="size-4 text-primary" />
                    Privacy-first: data stays on your device
                  </span>
                </div>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button asChild size="lg" variant="secondary">
                    <Link to="/privacy">Read privacy policy</Link>
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    No sign-up required for on-device use.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5">
                <Card className="relative overflow-hidden bg-card/70">
                  <div className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-primary/10 blur-2xl" />
                  <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-2">
                      <Sparkles className="size-5 text-primary" />
                      Everything you need, fast
                    </CardTitle>
                    <CardDescription>
                      Quick capture, clear status, and job records you can
                      review anytime.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="space-y-3">
                      <div className="rounded-lg border bg-background/50 p-4">
                        <p className="flex items-center gap-2 text-sm font-medium">
                          <ClipboardList className="size-4 text-primary" />
                          Jobs at a glance
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Track client info, address, and progress status.
                        </p>
                      </div>
                      <div className="rounded-lg border bg-background/50 p-4">
                        <p className="flex items-center gap-2 text-sm font-medium">
                          <Camera className="size-4 text-primary" />
                          Notes + photos
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Attach images from camera or gallery.
                        </p>
                      </div>
                      <div className="rounded-lg border bg-background/50 p-4">
                        <p className="flex items-center gap-2 text-sm font-medium">
                          <FileText className="size-4 text-primary" />
                          Job summaries
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Generate a clean summary from your work logs.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-6 sm:pb-10">
          <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            How you use it
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Create",
                caption: "Add client/order details and address.",
              },
              {
                title: "Notes/photos",
                caption: "Capture what matters in the field.",
              },
              {
                title: "Update status",
                caption: "Move Pending → In Progress → Completed.",
              },
              {
                title: "Summaries + earnings",
                caption: "View breakdowns, expenses, and estimated tax.",
              },
            ].map((step, idx) => (
              <div
                key={step.title}
                className="flex flex-col gap-3 rounded-2xl border bg-card/30 p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {idx + 1}
                  </div>
                  <p className="text-sm font-semibold">{step.title}</p>
                </div>
                <p className="text-sm text-muted-foreground">{step.caption}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-6 sm:pb-10">
          <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            Offline-first for clean, organized records.
          </h2>
          <p className="mt-2 max-w-2xl text-pretty text-muted-foreground">
            Trade Track helps you track jobs/orders with client info, notes and
            photos, status updates, summaries, and earnings—stored on your
            device with local SQLite.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Create jobs/orders fast",
                caption:
                  "Add client details and keep the basics ready for the field.",
              },
              {
                title: "Notes and photos",
                caption:
                  "Capture what matters and attach images to the job/order.",
              },
              {
                title: "Update status",
                caption: "Move Pending → In Progress → Completed in seconds.",
              },
              {
                title: "Earnings at a glance",
                caption:
                  "Paid vs unpaid totals, expenses, and estimated taxable profit + tax.",
              },
            ].map((item, idx) => (
              <div key={item.title} className="flex flex-col gap-3">
                <div className="aspect-9/16 w-full overflow-hidden rounded-2xl border bg-linear-to-b from-primary/10 via-background to-background">
                  <img
                    src={mobileScreenshotUrls[idx]}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-16 sm:pb-20">
          <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            Frequently asked questions
          </h2>

          <div className="mt-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="offline">
                <AccordionTrigger>Does it work offline?</AccordionTrigger>
                <AccordionContent>
                  Yes. You can create jobs/orders, add notes and photos, update
                  status, and generate summaries without signal. Sync is planned
                  for later; for now, your data stays on your device.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="sync">
                <AccordionTrigger>Is syncing available yet?</AccordionTrigger>
                <AccordionContent>
                  Not yet. Offline-first storage works now using local SQLite,
                  and syncing across devices is planned for a future release.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="tax">
                <AccordionTrigger>
                  How does estimated tax work?
                </AccordionTrigger>
                <AccordionContent>
                  The app estimates taxable profit and estimated tax from your
                  inputs (paid/unpaid totals plus expenses). “Tax paid” is a
                  manual input. Estimates are shown for planning purposes and
                  are not financial advice.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="ios">
                <AccordionTrigger>Is iOS available?</AccordionTrigger>
                <AccordionContent>
                  Android beta is available now (internal test). iOS beta is
                  coming soon, and an iOS link will be added when it’s ready.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}

export default LandingPage;
