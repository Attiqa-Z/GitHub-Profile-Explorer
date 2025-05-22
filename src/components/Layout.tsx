
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"; // adjust path if needed
// import Search from "../components/Search"; // adjust path if needed

const Layout = () => {

  return (
    <>
      <Navbar onSearch={function (): void {
        throw new Error("Function not implemented.");
      } } />
      <Outlet />
    </>
  );
};

export default Layout;
