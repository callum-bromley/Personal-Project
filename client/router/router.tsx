import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Home from '../components/Home'
import AboutPage from '../Pages/AboutPage';
import ContactPage from '../Pages/ContactPage';
import GalleryPage from '../Pages/GalleryPage';
import ResidentialPage from '../Pages/Residental';
import MaintenancePage from '../Pages/Maintenance';
import CommercialPage from '../Pages/Commercial';
import LeakRepairs from '../Pages/LeakRepairs';
import Gutters from '../Pages/Gutters';
import WallCladdings from '../Pages/WallCladding';
import Flashings from '../Pages/Flashings';
import AdditionalServices from '../Pages/AdditionalServices';
import Services from '../Pages/Services';



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/residential" element={<ResidentialPage />} />
      <Route path="/services/maintenance" element={<MaintenancePage/>} />
      <Route path="/services/commercial" element={<CommercialPage/>} />
      <Route path="/services/additionalservices" element={<AdditionalServices/>} />
      <Route path="/services/leakrepairs" element={<LeakRepairs/>} />
      <Route path="/services/gutters" element={<Gutters/>} />
      <Route path="/services/wallcladding" element={<WallCladdings/>} />
      <Route path="/services/flashings" element={<Flashings/>} />


    </>
  )
);

export default router;