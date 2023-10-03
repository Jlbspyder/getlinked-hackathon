import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import Confirmation from "./pages/Confirmation";
import Contact from "./pages/Contact";
import MobileMenu from "./components/MobileMenu";
import TimeLine from "./pages/TimeLine";
import Faqs from "./pages/Faqs";
import Overview from "./pages/Overview";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpen = () => {
    setOpenMenu(true);
  };
  const handleClose = () => {
    setOpenMenu(false);
  };

  return (
    <Router>
      <div className="container">
        <MobileMenu open={openMenu} close={handleClose} />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <Header
                  handleOpen={handleOpen}
                  open={openMenu}
                  close={handleClose}
                />
                <HomePage
                  handleClick={handleOpen}
                  open={openMenu}
                  close={handleClose}
                />
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <Header
                  handleOpen={handleOpen}
                  open={openMenu}
                  close={handleClose}
                />
                <Register />
              </>
            }
          />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route
            path="/overview"
            element={
              <>
                <Header
                  handleOpen={handleOpen}
                  open={openMenu}
                  close={handleClose}
                />
                <Overview />
              </>
            }
          />
          <Route
            path="/faq"
            element={
              <>
                <Header
                  handleOpen={handleOpen}
                  open={openMenu}
                  close={handleClose}
                />
                <Faqs />
              </>
            }
          />
          <Route
            path="/timeline"
            element={
              <>
                <Header
                  handleOpen={handleOpen}
                  open={openMenu}
                  close={handleClose}
                />
                <TimeLine />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Header
                  handleOpen={handleOpen}
                  open={openMenu}
                  close={handleClose}
                />
                <Contact />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
