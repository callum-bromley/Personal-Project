import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Home from '../components/Home'
import ContactPage from '../Pages/ContactPage';
import Services from '../Pages/Services';



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Home />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/services" element={<Services />} />
     


    </>
  )
);

export default router;