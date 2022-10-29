import { Outlet } from "react-router-dom";
import DecoyBackground from "./components/atoms/DecoyBackground";
import Menu from "./components/sections/Menu";

function Layout() {
  return <div>
    <DecoyBackground animate/>
    <Menu />
    <Outlet />
  </div>
}

export default Layout
