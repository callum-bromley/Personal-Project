import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Home from '../components/Home'
import AboutPage from '../Pages/AboutPage';
import ContactPage from '../Pages/ContactPage';
import Team from '../Pages/GalleryPage';
import Services from '../Pages/Services';



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/services" element={<Services />} />
     


    </>
  )
);

export default router;