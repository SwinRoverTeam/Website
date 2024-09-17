import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './views/home/home';
import Projects from './views/projects/projects';
// import About from './views/about/about';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/about',
		element: <p>About</p>,
	},
	{
		path: '/projects',
		element: <Projects />,
	},
]);

function App() {
	return (
		<RouterProvider router={router} />
	  );
}

export default App;