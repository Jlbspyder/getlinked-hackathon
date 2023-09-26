import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import Confirmation from "./pages/Confirmation";
import Contact from "./pages/Contact";

function App() {
  const  [openMenu, setOpenMenu] = useState(false)

  const handleOpen = () => {
    setOpenMenu(true)
  }
  const handleClose = () => {
    setOpenMenu(false)
  }

  return (
    <Router>
      <div className="container">
        <Header handleOpen={handleOpen} open={openMenu} close={handleClose} />
        <Routes>
          <Route path="/" exact element={<HomePage handleClick={handleOpen} open={openMenu} close={handleClose}  />} />
          <Route path="/register" element={<Register />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
