import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

const APP_NAME = "Trade Track";

function MarketingNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur supports-backdrop-filter:bg-background/40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link
          to="/"
          className="flex items-center gap-2 font-semibold tracking-tight"
          aria-label={`${APP_NAME} home`}
        >
          <img
            src="https://s2pw3n9f1f.ufs.sh/f/GNMrlX3JRPgno026a6EUkYyDAEhJln9Wj7TI6sdx4vHeLzb0"
            alt={APP_NAME}
            className="h-8"
          />
          <span>{APP_NAME}</span>
        </Link>

        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm">
            <Link to="/privacy">Privacy</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default MarketingNavbar;
