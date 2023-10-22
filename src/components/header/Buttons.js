function Buttons({ ...props }) {
    return (
        <ul className="navigation-buttons" id="navigation-buttons" {...props}>
            <li className="navigation-button">
                <a href="/donate" className="navigation-button__link">Donate</a>
            </li>
            <li className="navigation-button">
                <a href="/underwriting" className="navigation-button__link">Underwriting</a>
            </li>
        </ul>
    );
}

export default Buttons;