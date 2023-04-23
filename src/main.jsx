import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/contact';
import ErrorPage from './Components/ErrorPage';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import './index.css';
import Main from './Layout/Main';
import AuthProviders from './Providers/AuthProviders';
import PrivateRoutes from './routes/PrivateRoutes';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/about',
				element: (
					<PrivateRoutes>
						<About></About>
					</PrivateRoutes>
				),
			},
			{
				path: '/contact',
				element: (
					<PrivateRoutes>
						<Contact></Contact>
					</PrivateRoutes>
				),
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/register',
				element: <Register />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthProviders>
			<RouterProvider router={router} />
		</AuthProviders>
	</React.StrictMode>
);
