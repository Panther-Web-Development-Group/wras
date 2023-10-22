import React, { useState, useRef, useEffect } from 'react';
import Navigation from "./Navigation";
import Hero from "./Hero";
import "./Header.css";

function Header({ toggleDarkMode, isDarkMode, showHero = false }) {
    const [isOverlay, setIsOverlay] = useState(false);
    const navigationRef = useRef(null);

    const cb = ([entry]) => setIsOverlay(!entry.isIntersecting);

    useEffect(() => {
        const observer = new IntersectionObserver(cb, { threshold: 0.2 });
        const navigation = navigationRef.current;
        if (navigation) observer.observe(navigation);

        return () => {
            if (navigation) observer.unobserve(navigation);
        }
    }, [navigationRef]);

	return (
        <header className={`header${showHero ? "" : " no-hero"}`} id="header" ref={navigationRef}>
            <div className={`header-top${isOverlay ? " overlay" : ""}`} id="header-top">
                <Navigation toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
            </div>
            {showHero && <div className="header-bottom" id="header-bottom">
                <Hero />
            </div>}
        </header>
	)
}

export default Header