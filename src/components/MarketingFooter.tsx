import { Link } from "react-router-dom";

const APP_NAME = "Trade Track";

function MarketingFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          © {year} {APP_NAME}. All rights reserved.
        </p>

        <Link
          to="/privacy"
          className="text-sm text-muted-foreground underline-offset-4 hover:underline"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}

export default MarketingFooter;

