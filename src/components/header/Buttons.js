import { Link } from "react-router-dom";

function Buttons({ ...props }) {
    return (
        <ul className="navigation-buttons" id="navigation-buttons" {...props}>
            <li className="navigation-button">
                <Link to="/donate" className="navigation-button__link">Donate</Link>
            </li>
            <li className="navigation-button">
                <Link to="/underwriting" className="navigation-button__link">Underwriting</Link>
            </li>
        </ul>
    );
}

export default Buttons;