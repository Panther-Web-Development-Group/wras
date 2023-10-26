import React, { useState, useRef, useEffect } from 'react';
import Navigation from "./Navigation";
import Hero from "./Hero";
import "./Header.css";

function Header({ 
    showHero = false 
}) {
    const [navIsOpen, setNavIsOpen] = useState(false);
    const [isOverlay, setIsOverlay] = useState(false);

    const navigationRef = useRef(null);
    const topHeaderRef = useRef(null);

    const cb = ([entry]) => setIsOverlay(!entry.isIntersecting);

    useEffect(() => {
        const observer = new IntersectionObserver(cb, { threshold: 0.4 });
        
        const outsideClick = event => {
            const inBoundaries = event.composedPath().includes(topHeaderRef.current);
            const isToggle = event.target.closest("#navigation-toggle");
            if (!isToggle && !inBoundaries) setNavIsOpen(inBoundaries);
        };

        const navigation = navigationRef.current;
        const topHeader = topHeaderRef.current;

        if (navigation) observer.observe(navigation);
        if (topHeader) window.addEventListener("click", outsideClick);

        return () => {
            if (topHeader) window.removeEventListener("click", outsideClick);
            if (navigation) observer.unobserve(navigation);
        }
    }, [navigationRef]);

    const classNames = Object.freeze([
        "header-top",
        ["overlay", isOverlay],
        ["nav-open", navIsOpen]
    ]);

	return (
        <header className={`header${showHero ? "" : " no-hero"}`} id="header" ref={navigationRef}>
            <div className={classNames.reduce((cls, currCls, index) => {
                if (classNames.length === 1) return currCls;
                
                if (Array.isArray(currCls)) {
                    const [clsn, condition] = currCls;
                    if (condition) cls = (index === 0) ? clsn : `${cls} ${clsn}`;
                } else cls = (index === 0) ? currCls : `${cls} ${currCls}`;

                return cls;
            }, "")} id="header-top" ref={topHeaderRef}>
                <Navigation
                    navIsOpen={navIsOpen}
                    setNavIsOpen={setNavIsOpen} />
            </div>
            {showHero && <div className="header-bottom" id="header-bottom">
                <Hero />
            </div>}
        </header>
	)
}

export default Header