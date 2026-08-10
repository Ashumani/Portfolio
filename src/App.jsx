import { HashRouter, Routes, Route, Navigate, useParams, useLocation } from "react-router-dom";

import BlogsPage from "./pages/Blogs";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Blogs
} from "./components";

import ProfileVisitCounter from "./components/ProfileVisiter";
import StrictLocationGuard from "./components/StrictLocationGuard";

// Helper function to extract 'src' or 'source' from anywhere in the URL
const getReferralSource = (pathSource, locationSearch) => {
  // 1. Check standard URL query string (e.g. /Portfolio/?src=instagram)
  const windowQuery = new URLSearchParams(window.location.search);
  let src = windowQuery.get("src") || windowQuery.get("source");

  // 2. Check React Router location search (e.g. /Portfolio/#/?src=instagram)
  if (!src && locationSearch) {
    const routerQuery = new URLSearchParams(locationSearch);
    src = routerQuery.get("src") || routerQuery.get("source");
  }

  // 3. Check inside hash string directly as fallback
  if (!src && window.location.hash.includes("?")) {
    const hashQuery = new URLSearchParams(window.location.hash.split("?")[1]);
    src = hashQuery.get("src") || hashQuery.get("source");
  }

  // Priority: Query string parameter -> Route path param (/:source) -> 'direct'
  const finalSource = src || pathSource || "direct";
  
  return finalSource.toLowerCase().trim();
};

// Wrapper component to render the main portfolio content
const PortfolioPage = () => {
  const { source: pathSource } = useParams(); // Extracts 'linkedin' from /#/linkedin
  const location = useLocation();

  // Extract source correctly regardless of HashRouter parameter placement
  const finalSource = getReferralSource(pathSource, location.search);

  return (
    <StrictLocationGuard>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
          <StarsCanvas />
        </div>

        <About />
        <Experience />
        {/* <Tech /> */}
        <Works />
        <Feedbacks />
        <Blogs />

        {/* Pass normalized referral source down to visitor analytics */}
        <ProfileVisitCounter source={finalSource} />

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </StrictLocationGuard>
  );
};

const App = () => {
  return (
    <HashRouter>
      <Routes>
        {/* Main Homepage */}
        <Route path="/" element={<PortfolioPage />} />

        {/* Catch-all route for social referral sources (e.g. /#/linkedin, /#/instagram) */}
        <Route path="/:source" element={<PortfolioPage />} />

        {/* Blogs Page */}
        <Route path="/blogs" element={<BlogsPage />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;