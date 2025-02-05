import { BrowserRouter, HashRouter } from "react-router-dom";
import AllRoutes from "./AllRoutes"

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Blogs } from "./components";

const App = () => {
  return (
    <HashRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <Blogs />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
     
    </HashRouter>
    
  );
}

export default App;
