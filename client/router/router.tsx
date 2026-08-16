import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Home from '../components/Home'
import ContactPage from '../Pages/ContactPage';
import Services from '../Pages/Services';
import OurTeam from '../Pages/OurTeam';



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Home />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/services" element={<Services />} />
      <Route path="/team" element={<OurTeam />} />
     


    </>
  )
);

export default router;