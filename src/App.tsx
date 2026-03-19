import { Route, Routes } from "react-router-dom";

import LandingPage from "@/pages/LandingPage";
import PrivacyPage from "@/pages/PrivacyPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route
        path="*"
        element={
          <div className="mx-auto max-w-2xl px-4 py-16">
            <h1 className="text-balance text-2xl font-semibold">
              Page not found
            </h1>
            <p className="mt-2 text-pretty text-muted-foreground">
              The page you’re looking for doesn’t exist.
            </p>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
