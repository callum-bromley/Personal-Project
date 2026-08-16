import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Home from '../components/Home'
import ContactPage from '../Pages/ContactPage';
import Services from '../Pages/Services';
import OurTeam from '../Pages/OurTeam';
import Maiwegovy from '../Pages/Maiwegovy';
import TeKakano from '../Pages/TeKakano';
import VirtualHealthService from '../Pages/VirtualService';



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Home />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/services" element={<Services />} />
      <Route path="/team" element={<OurTeam />} />
      <Route path="/services/maiwegovy" element={<Maiwegovy />} />
      <Route path="/services/tekākano" element={<TeKakano />} />
      <Route path="/services/virtual-health-service" element={<VirtualHealthService />} />
     


    </>
  )
);

export default router;