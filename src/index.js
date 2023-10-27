import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import App from "./App";
import { 
    Home, 
    Programming, 
    ErrorPage, 
    About, 
    Listen, 
    History,
    ContactPage
} from './pages';
import "./index.css";

const root = ReactDOM.createRoot(document.querySelector("#wras-root"));
const router = createHashRouter([
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
			{ path: "/listen", element: <Listen /> },
			{ path: "/programming", element: <Programming /> },
			{ path: "/history", element: <History /> },
			{ path: "/about", element: <About /> },
            { path: "/contact", element: <ContactPage /> }
        ]
    }
], { basename: "/" });

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)