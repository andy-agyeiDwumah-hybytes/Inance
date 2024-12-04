// React router
import { Outlet } from "react-router";
// Components
import Header from "../header/Header"
import Footer from "../footer/Footer"

export default function Layout() {
    return (
      <>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </>
    );
}