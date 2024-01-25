import React, { useState } from "react";
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
  const [render, setRender] = useState(false);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout render={render} />}>
        <Route index element={<Home rendered={setRender} />} />
        <Route path="/products" element={<Products setRender={setRender} />} />
        <Route path="/policy" element={<Policy setRender={setRender} />} />
        <Route path="/contact" element={<Contact setRender={setRender} />} />
        <Route
          path="/products/:category"
          element={<CategoryProducts setRender={setRender} />}
        />
        <Route
          path="/products/:category/:id"
          element={<Detail setRender={setRender} />}
        />
        <Route path="/saved" element={<Saved setRender={setRender} />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
