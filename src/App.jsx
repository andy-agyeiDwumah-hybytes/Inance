// React router
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router"
// Components
import Layout from "./components/layout/Layout"
import Notfound from "./components/notfound/Notfound"
import About from "./components/about/About"
import Services from "./components/services/Services"
import Contact from "./components/contact/Contact"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Notfound />}>
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
)

export default function App() {
  return <RouterProvider router={router} />
}