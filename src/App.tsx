import DetailsPage from "./components/Detailspage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/details/:id",
      element: <DetailsPage/>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />

      {/* <div className="card">
  <Navbar/>
  
<MuiCard/>
<MuiCard/>
<MuiCard/>
  </div>     */}
    </>
  );
}

export default App;
