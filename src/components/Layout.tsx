// import { Outlet, useLocation } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Search from "../components/Search"; // adjust path if needed

// const Layout = () => {
//   const location = useLocation();

//   return (
//     <>
//       <Navbar />
//       {/* Only show Search on home page */}
//       {location.pathname === "/" && <Search />}
//       <Outlet />
//     </>
//   );
// };

// export default Layout;
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar"; // adjust path if needed
import Search from "../components/Search"; // adjust path if needed

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      {/* Only show SearchBar on the home page */}
      {location.pathname === "/" && <Search />}
      <Outlet />
    </>
  );
};

export default Layout;
