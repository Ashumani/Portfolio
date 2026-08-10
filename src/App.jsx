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

// Wrapper component to render the main portfolio content
const PortfolioPage = () => {
  const { source: pathSource } = useParams(); // Extracts 'linkedin' from /linkedin
  const location = useLocation();

  // Extract ?src=instagram or ?source=instagram if Instagram strips path hashes
  const queryParams = new URLSearchParams(location.search);
  const querySource = queryParams.get("src") || queryParams.get("source");

  // Priority: 1. Query param (?src=instagram) -> 2. Path param (/:source) -> 3. Fallback ('direct')
  const finalSource = querySource || pathSource || "direct";

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

        {/* Dynamic route for social referral sources (e.g. /#/linkedin, /#/instagram) */}
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