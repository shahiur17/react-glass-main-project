import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./Components/NotFound";
import FirebaseProvider from "./FirebaseProvider/FirebaseProvider";
import "./index.css";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Products from "./Pages/Products/Products";
import Root from "./Root";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AddCard from "./Pages/ProductDetail/AddCard";
import { CartProvider } from "./Components/CartContext ";


const url =
  "https://my-json-server.typicode.com/faarhaan10/react-sunglasses/sunglasses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
        loader: async () => fetch(url),
      },
      {
        path: "products",
        element: <Products />,
        loader: async () => fetch(url),
      },
      {
        path: "product/:id",
        element: (
          <PrivateRoute>
            <ProductDetail />
          </PrivateRoute>
        ),
        loader: async ({ params }) => fetch(`${url}/${params.id}`),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "addcard",
        element: <AddCard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseProvider>
      <CartProvider> 
        <RouterProvider router={router} />
      </CartProvider>
    </FirebaseProvider>
  </React.StrictMode>
);
