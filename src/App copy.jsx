import { HashRouter, Routes, Route } from "react-router-dom"; // Import Routes and Route
// Import all components (assuming Blogs is your BlogsPage component)
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Blogs } from "./components";
import ProfileVisitCounter from "./components/ProfileVisiter";
import BlogsPage from "./pages/Blogs";

// Define the content for the main home page (your current SPA content)
const HomeContent = () => (
    <>
        <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
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
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
     
    </>
);
const BlogContent = () => (
    <>
    <BlogsPage />
    </>
);


const App = () => {
  return (
    <HashRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar /> {/* Navbar stays outside Routes to be visible on all pages */}

        <Routes>
          {/* 1. Route for the Home Page (your portfolio/landing page) */}
          <Route path="/" element={<HomeContent />} />

          {/* 2. Route for the dedicated Blogs Page */}
          <Route path="/blogs" element={<BlogContent />} />

          {/* 3. (Optional) Route for a single Blog Post detail page */}
          {/* <Route path="/blog/:id" element={<BlogPostDetail />} /> */}

          {/* You could also add other routes if needed */}
          {/* <Route path="/contact-page" element={<Contact />} /> */}
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;