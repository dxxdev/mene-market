import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Products from "./pages/Products";
import CategoryProducts from "./pages/CategoryProducts";
import Policy from "./pages/Policy";
import Contact from "./pages/Contact";
import Saved from "./pages/Saved";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:category" element={<CategoryProducts />} />
        <Route path="/products/:category/:id" element={<Detail />} />
        <Route path="/saved" element={<Saved />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
