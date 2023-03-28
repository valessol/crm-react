import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Index, { loader as clientsLoader } from "../pages/Index";
import NewClient, { action as newClientAction } from "../pages/NewClient";
// createBrowserRouter es una función que permite definir un router por medio de un objeto
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // con esta prop definimos que ésta es la config de la ruta principal, la que tiene los children ("/")
        element: <Index />,
        loader: clientsLoader, // manejo del get de datos de clientes
      },
      {
        path: "/clientes/nuevo",
        element: <NewClient />,
        action: newClientAction, // manejo del submit del formulario
      },
    ],
  },
]);