import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ContactForm from "./Contact"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </Router>
  );
}

export default App;