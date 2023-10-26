function Section({
    title = "Insert Title Here",
    children,
    className = "",
    ...props 
}) {
    return (
        <section className={`page-section${className ? ` ${className}`: ""}`} {...props}>
            <h2 className="page-section__title">{title}</h2>
            <div className="page-section__content">{children}</div>
        </section>
    );
}

export default Section;