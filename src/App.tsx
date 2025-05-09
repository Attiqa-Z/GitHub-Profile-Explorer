import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import DetailsPage from "./components/DetailsPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import NotFoundPage from "./components/NotFoundPage";
import About from "./pages/About";
import Layout from "./components/Layout";

const queryClient = new QueryClient();
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // Navbar will be included here
      errorElement: <NotFoundPage />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "details/:username", element: <DetailsPage /> },
      ],
    },
  ]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
