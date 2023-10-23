import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import logo from "../../assets/logos/WRAS_Logo.png";
import NavigationMenu from "./NavigationMenu";
import Buttons from "./Buttons";

function Navigation({ toggleDarkMode, isDarkMode }) {
    const [buttonsOnNavigation, setButtonsOnNavigation] = useState(true);
    const [showNavigation, setShowNavigation] = useState(false);
    
    const mobileMedia = window.matchMedia("(width <= 768px)");
    // const xlMedia = window.matchMedia("(width >= 1440px)");

    const toggle = e => setButtonsOnNavigation(!e.matches);
    const toggleNavigation = () => setShowNavigation(!showNavigation);

    useEffect(() => {
        toggle(mobileMedia);
        mobileMedia.addEventListener("change", toggle);
        return () => mobileMedia.removeEventListener("change", toggle);
    }, [mobileMedia]);

    return (
        <>
            <section className="branding" id="branding">
                <h1 className="logo" id="logo">
                    <a href="/" className="logo-link" id="logo-link">
                        <img src={logo} alt="WRAS 88.5 FM" className="logo-image" id="logo-image" />
                    </a>
                </h1>
                <h2 className="tagline" id="tagline">
                    <span className="tagline-top" id="tagline-top">Left on the Dial</span>
                    <span className="tagline-bottom" id="tagline-bottom">Right on the Music</span>
                </h2>
            </section>
            <nav className={`navigation${showNavigation ? " active" : ""}`} id="navigation">
                {buttonsOnNavigation && <Buttons />}
                <div className="dark-mode-toggle toggle" id="dark-mode-toggle">
                    <button className="dark-mode-button toggle-button" onClick={toggleDarkMode}>
                        {isDarkMode ? <FaMoon className="toggle-icon" /> : <FaSun className="toggle-icon" />}
                    </button>
                </div>
                <div className="navigation-inner" id="navigation-inner">
                    <div className="navigation-toggle toggle" id="navigation-toggle">
                        <button className="navigation-toggle__button toggle-button" id="navigation-toggle__button" onClick={toggleNavigation}>
                            {showNavigation ? <FaTimes className="toggle-icon" /> : <FaBars className="toggle-icon" />}
                        </button>
                    </div>
                    <NavigationMenu 
                        buttonsInNavigation={!buttonsOnNavigation}
                        items={[
                            {name: "Listen", link: "/listen"},
                            {name: "Programming", link: "/programming"},
                            {name: "About", link: "/about"},
                            {name: "History", link: "/history"},
                            {name: "Contact", link: "/contact"},
                            {name: "Public File", link: "https://publicfiles.fcc.gov/fm-profile/WRAS"}
                        ]}
                        className={showNavigation ? "show" : ""} />
                </div>
            </nav>
        </>
    );
}

export default Navigation;