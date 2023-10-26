import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home, Programming, ErrorPage, About, Listen, History } from './pages';
import "./index.css";

const root = ReactDOM.createRoot(document.querySelector("#wras-root"));
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: (
            <App>
                <ErrorPage />
            </App>
        ),
        children: [
            { index: true, element: <Home /> },
			{ path: "/wras/listen", element: <Listen /> },
			{ path: "/wras/programming", element: <Programming /> },
			{ path: "/wras/history", element: <History /> },
			{ path: "/wras/about", element: <About /> }
        ]
    }
], { basename: "/wras" });

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)