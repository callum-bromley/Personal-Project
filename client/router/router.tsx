import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Home from '../components/Home';
import Layout from '../components/Layout';
// import ContactForm from '../components/contact/ContactForm';

const router = createBrowserRouter(
  createRoutesFromElements(
    // <Route path="/" element={<Layout />} >
      <Route index element={<Home />} />
    // </Route>
     
  )
);

export default router;