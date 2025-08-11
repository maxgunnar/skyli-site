import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Music from "./pages/Music.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Shop from "./pages/Shop.tsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/music", element: <Music /> },
  { path: "/contact", element: <Contact /> },
  { path: "/shop", element: <Shop /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
