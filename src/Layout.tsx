import { Outlet } from "react-router-dom";
import { Provider } from 'use-http';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { CachePolicies } from "use-http/dist/cjs/types";

import DecoyBackground from "./components/atoms/DecoyBackground";
import Menu from "./components/sections/Menu";

function Layout() {
  return <Provider url={import.meta.env.VITE_BASE_URL} options={{ cachePolicy: CachePolicies.NO_CACHE }}>
    <ToastContainer
      position="top-center"
      autoClose={5000}
      newestOnTop={false}
      closeOnClick
      theme="light"
    />
    <DecoyBackground animate/>
    <Menu />
    <Outlet />
  </Provider>
}

export default Layout
