import privacyText from "../../privacy-text.md?raw";
import { ArrowLeft } from "lucide-react";

import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import MarketingFooter from "@/components/MarketingFooter";
import MarketingNavbar from "@/components/MarketingNavbar";

type PrivacySection = {
  heading: string;
  lines: string[];
};

function parsePrivacyText(text: string) {
  const lines = text
    .split(/\r?\n/)
    .map((l) => l.trimEnd())
    .filter((l) => l.trim().length > 0);

  const effectiveLine = lines[0] ?? "";
  const effectiveMatch = effectiveLine.match(/^Effective date:\s*(.*)$/i);
  const effectiveDate = effectiveMatch?.[1]?.trim() ?? "—";

  const sections: PrivacySection[] = [];
  let current: PrivacySection | null = null;

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];

    if (i === 0) continue; // handled via effectiveDate

    const sectionMatch = line.match(/^(\d+)\.\s+(.*)$/);
    if (sectionMatch) {
      if (current) sections.push(current);
      current = { heading: sectionMatch[2], lines: [] };
      continue;
    }

    if (!current) {
      current = { heading: "Privacy Policy", lines: [] };
    }
    current.lines.push(line);
  }

  if (current) sections.push(current);

  return { effectiveDate, sections };
}

function isListLine(line: string) {
  const idx = line.indexOf(":");
  if (idx <= 0) return false;

  const key = line.slice(0, idx).trim();

  // Heuristic: short "key: value" lines are list items. Sentences like
  // "This means:" are intentionally excluded by the key-length check.
  return key.length <= 35;
}

function renderSectionLines(lines: string[]) {
  const nodes: React.ReactNode[] = [];
  let listItems: string[] = [];

  const flushList = () => {
    if (listItems.length === 0) return;
    nodes.push(
      <ul key={`list-${nodes.length}`} className="mt-2 list-disc pl-5">
        {listItems.map((item) => (
          <li key={item} className="mt-1">
            {item}
          </li>
        ))}
      </ul>,
    );
    listItems = [];
  };

  for (const line of lines) {
    if (isListLine(line)) {
      listItems.push(line);
    } else {
      flushList();
      nodes.push(
        <p key={`p-${nodes.length}`} className="mt-3">
          {line}
        </p>,
      );
    }
  }

  flushList();
  return nodes;
}

function PrivacyPage() {
  const { effectiveDate, sections } = parsePrivacyText(privacyText);

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
          </header>

          <div className="mt-8 space-y-10">
            {sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-semibold tracking-tight">
                  {section.heading}
                </h2>
                {renderSectionLines(section.lines)}
              </section>
            ))}
          </div>

          <p className="mt-10 text-xs text-muted-foreground">
            Note: This page includes placeholders like the effective date and
            contact email. Replace them before publishing.
          </p>
        </article>
      </main>

      <MarketingFooter />
    </div>
  );
}

export default PrivacyPage;

