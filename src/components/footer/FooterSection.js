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
                            <a href={href} className="footer-link">{children}</a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default FooterSection;