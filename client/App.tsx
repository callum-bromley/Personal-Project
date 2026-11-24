import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"; // 1. Add this import
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
      <Analytics /> {/* 2. Add this component */}
    </Router>
  );
}

export default App;