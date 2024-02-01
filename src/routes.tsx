import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Layout from "./Pages/Layout";
import Players from "./Pages/Players";
import Games from "./Pages/Games";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "Players", element: <Players /> },
            { path: "Games", element: <Games /> }
        ]
    }
])

export default router

