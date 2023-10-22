import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

function App({ children }) {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const location = useLocation();
	const showHero = location.pathname === "/";

	const darkModeMedia = window.matchMedia("(prefers-color-scheme: dark)");

	const setDarkModeFromMedia = e => setIsDarkMode(e.matches);
	const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

	useEffect(() => {
		darkModeMedia.addEventListener("change", setDarkModeFromMedia);
		return () => darkModeMedia.removeEventListener("change", setDarkModeFromMedia);
	}, [darkModeMedia]);

	return (
		<>
			<Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} showHero={showHero} />
			<Content>
				{ children ?? <Outlet /> }
			</Content>
			<Footer />
		</>
	);
}

export default App;