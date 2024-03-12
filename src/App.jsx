import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import HomePage from "./Pages/HomePage";
import Error from "./Pages/Error";

export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark", isDarkTheme);
  return isDarkTheme;
};

checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <Error />,
    index: true,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
