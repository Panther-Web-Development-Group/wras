import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function NavigationItem({ 
    name = "", 
    link = "#", 
    children = [],
    className = "",
    ...props
}) {
    const [isActive, setIsActive] = useState(false);
    const hasChildren = children && children.length > 0;

    const toggleActive = () => setIsActive(!isActive);

    return (
        <li className={`navigation-item${className ? ` ${className}` : ""}`} key={name} {...props}>
            <div className="navigation-item__inner">
                <Link to={link} className="navigation-link">{name}</Link>
                { hasChildren && 
                <button className="navigation-toggle" onClick={toggleActive}>
                    { isActive ? <FaChevronUp /> : <FaChevronDown /> }
                </button> }
            </div>
            { hasChildren &&
            <ul className={`navigation-level-2${isActive ? " active" : ""}`}>
                { children.map(child => {
                    return (
                        <li className="navigation-level-2__item">
                            <Link to={child.link} className="navigation-level-2__link">{child.name}</Link>
                        </li>
                    );
                }) }
            </ul> }
        </li>
    );
}

export default NavigationItem;