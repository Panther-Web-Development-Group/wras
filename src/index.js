import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from './App';

import { Home, Programming, ErrorPage, About, Listen, History } from './pages';

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
			{ index: true, element: <Home /> },
			{ path: "/listen", element: <Listen /> },
			{ path: "/programming", element: <Programming /> },
			{ path: "/history", element: <History /> },
			{ path: "/about", element: <About /> }
		]
	}
], { basename: "/" });

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);