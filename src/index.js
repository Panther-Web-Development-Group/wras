import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from './App';
import Home from "./pages/Home";
import ErrorPage from "./pages/Error";

const root = ReactDOM.createRoot(document.getElementById('wras-root'));

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
			{ index: true, element: <Home /> }
		]
	}
]);

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);