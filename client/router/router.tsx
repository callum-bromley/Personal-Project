import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Home from '../components/Home'
import AboutPage from '../Pages/AboutPage';
import ContactPage from '../Pages/ContactPage';
import GalleryPage from '../Pages/GalleryPage';
import ServicesPage from '../Pages/ServicesPage';



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/services" element={<ServicesPage />} />

    </>
  )
);

export default router;