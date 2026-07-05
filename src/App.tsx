import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Configurator from "./pages/Configurator";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/config",
    element: <Configurator />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
