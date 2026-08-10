import { HashRouter, Routes, Route, Navigate, useParams } from "react-router-dom";

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
  const { source } = useParams(); // Extracts 'linkedin', 'instagram', etc.

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

        {/* Pass referral source down to visitor analytics component */}
        <ProfileVisitCounter source={source || 'direct'} />

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

        {/* Catch-all route for social referral sources (e.g. /linkedin, /instagram) */}
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