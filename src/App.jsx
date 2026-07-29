import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

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
import StrictLocationGuard from "./components/StrictLocationGuard"; // Import the Guard

const App = () => {
  return (
    <HashRouter>
      <Routes>

        {/* Homepage - Wrapped with Strict Location Guard */}
        <Route
          path="/"
          element={
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
                <ProfileVisitCounter />

                <div className="relative z-0">
                  <Contact />
                  <StarsCanvas />
                </div>
              </div>
            </StrictLocationGuard>
          }
        />

        {/* Blogs Page */}
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;