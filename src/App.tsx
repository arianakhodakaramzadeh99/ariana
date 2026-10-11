import { createBrowserRouter, RouterProvider } from "react-router";
import Signup from "./pages/Signup";
import Age from "./pages/Age"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/age",
    element: <Age/>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;