import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Home from './components/Home';  // Import the Home component
import ContactForm from './components/ContactForm';  // Import the ContactForm component

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />} />  // Route for Home page
  )
);

export default router;