import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Layout from "./Pages/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <HomePage /> }
        ]
    }
])

export default router

