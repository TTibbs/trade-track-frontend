import { ArrowLeft } from "lucide-react";

import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import MarketingFooter from "@/components/MarketingFooter";
import MarketingNavbar from "@/components/MarketingNavbar";

type PrivacySection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

const PRIVACY_POLICY = {
  effectiveDate: "19/3/2026",
  intro:
    "Trade Track (\"we\", \"our\", or \"the app\") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we handle the data you provide while using the Trade Track app.",
  sections: [
    {
      heading: "1. Information We Collect",
      paragraphs: [
        "Trade Track primarily stores the information you enter in the app, including:",
      ],
      bullets: [
        "Jobs: title, client name, address, description, price, status",
        "Notes: text notes attached to jobs",
        "Photos: images attached to jobs",
        "Signatures: client signatures captured on jobs",
        "Earnings and tax tracking: rough calculations based on your job data",
      ],
    },
    {
      heading: "2. Local Storage",
      paragraphs: [
        "All data is currently stored locally on your device using SQLite. This means:",
      ],
      bullets: [
        "Your job data, notes, photos, and signatures remain on your device.",
        "We do not have access to your data.",
      ],
    },
    {
      heading: "3. Cloud Backup (Future Feature)",
      paragraphs: [
        "Trade Track may offer a cloud backup option in the future to help you save and restore your jobs across devices.",
        "This feature is not currently implemented.",
        "If and when it is added, you will be informed, and the privacy policy will be updated accordingly.",
      ],
    },
    {
      heading: "4. Tax and Financial Disclaimer",
      paragraphs: [
        "Trade Track provides a rough estimate of tax owed based on the jobs you enter.",
      ],
      bullets: [
        "This is not financial advice.",
        "You are responsible for checking your local tax rules and reporting obligations.",
        "Always consult a qualified professional for financial or tax guidance.",
      ],
    },
    {
      heading: "5. Data Sharing",
      paragraphs: [
        "We do not share or sell your personal data to third parties. All data remains on your device unless you choose to export or share it manually (for example, sending an invoice to a client).",
      ],
    },
    {
      heading: "6. Updates to this Policy",
      paragraphs: [
        "We may update this Privacy Policy occasionally to reflect app updates or new features.",
      ],
      bullets: [
        "Any changes will be posted on this page.",
        "Continued use of the app constitutes acceptance of the updated policy.",
      ],
    },
    {
      heading: "7. Contact Us",
      paragraphs: [
        "If you have questions or concerns about this Privacy Policy, you can contact us at:",
      ],
      bullets: ["terry.ward@tibbstech.co.uk"],
    },
  ] as PrivacySection[],
};

function PrivacyPage() {
  const { effectiveDate, intro, sections } = PRIVACY_POLICY;

  return (
    <div className="min-h-screen bg-background">
      <MarketingNavbar />

      <main className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
        <div className="mb-6 flex items-center justify-between gap-3">
          <Button asChild variant="ghost" size="sm">
            <Link to="/">
              <span className="inline-flex items-center gap-2">
                <ArrowLeft className="size-4" />
                Back to home
              </span>
            </Link>
          </Button>
          <div className="text-right text-sm text-muted-foreground">
            Trade Track
          </div>
        </div>

        <article className="text-sm leading-7 text-foreground">
          <header className="space-y-2">
            <h1 className="text-balance text-3xl font-semibold tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Effective date: <span className="font-medium">{effectiveDate}</span>
            </p>
            <p className="mt-2 text-muted-foreground">
              Your job data stays on your device using SQLite.
            </p>
            <p className="mt-3">{intro}</p>
          </header>

          <div className="mt-8 space-y-10">
            {sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-semibold tracking-tight">
                  {section.heading}
                </h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mt-3">
                    {paragraph}
                  </p>
                ))}
                {section.bullets && section.bullets.length > 0 ? (
                  <ul className="mt-2 list-disc pl-5">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="mt-1">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </article>
      </main>

      <MarketingFooter />
    </div>
  );
}

export default PrivacyPage;

