// Layout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"; // adjust path if needed

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
