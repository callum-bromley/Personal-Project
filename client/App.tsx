import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { ContactForm } from "./components/contact/Background"; 
import Team from "./Pages/GalleryPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App;