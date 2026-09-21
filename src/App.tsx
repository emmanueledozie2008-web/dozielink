import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

// Import your pages
import Home from './Page/Home';
import InterLinkAppPage from "./Page/InterLinkAppPage";
import RecoveryPhrasePage from "./Page/RecoveryPhrasePage";
import ManageWalletsPage from "./Page/ManageWalletsPage";
import ChooseImportMethodPage from "./Page/ChooseImportMethodPage";
import LoadingPage from "./Page/LoadingPage"; // <-- 1. Import the Loading Page

function App() {
  // 2. Create state to track if the app is loading
  const [isLoading, setIsLoading] = useState(true);

  // 3. Use useEffect to simulate loading time (e.g., 2.5 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2500ms = 2.5 seconds

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  // 4. If loading, show the LoadingPage INSTEAD of the router
  if (isLoading) {
    return <LoadingPage />;
  }

  // 5. Once loading is done, show the normal app routes
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="InterLinkAppPage" element={<InterLinkAppPage />} />
          <Route path="Validate" element={<RecoveryPhrasePage />} />
          <Route path="Wallet" element={<ManageWalletsPage />} />
          <Route path="create-wallet" element={<ChooseImportMethodPage />} />
          
          {/* Optional: Add a dedicated loading route if you want to manually navigate to it */}
          <Route path="/loading" element={<LoadingPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;