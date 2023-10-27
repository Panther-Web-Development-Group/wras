import { Link } from "react-router-dom";

function FooterSection({ 
    title = "",
    links = [],
    className = "",
    ...props
}) {
    return (
        <nav 
            className={`footer-section${className ? ` ${className}` : ""}`}
            {...props}>
            {title && <h3 className="footer-section__title">{title}</h3>}
            <ul className="footer-links">
                {links.map(({ href = "#", children }) => {
                    return (
                        <li className="footer-item">
                            <Link to={href} className="footer-link">{children}</Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default FooterSection;