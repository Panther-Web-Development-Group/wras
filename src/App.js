import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

function App({ children }) {
	const location = useLocation();
	const showHero = location.pathname === "/";

	return (
		<>
			<Header showHero={showHero} />
			<Content>
				{ children ?? <Outlet /> }
			</Content>
			<Footer />
		</>
	);
}

export default App;