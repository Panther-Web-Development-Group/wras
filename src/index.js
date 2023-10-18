import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);