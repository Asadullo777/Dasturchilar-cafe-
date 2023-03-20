import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CoursePage } from "./pages/CoursePage";
import { DiscussionsPage } from "./pages/DiscussionsPage";
import { HomePage } from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/discussions",
    element: <DiscussionsPage />,
  },
  {
    path: "/course",
    element: <CoursePage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
