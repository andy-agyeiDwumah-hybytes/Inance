// React router
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router"
// Components
import Layout from "./components/layout/Layout"
import Notfound from "./components/notfound/Notfound"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Notfound />}></Route>
  )
)

export default function App() {
  return <RouterProvider router={router} />
}