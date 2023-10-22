import Buttons from "./Buttons";
import Search from "./Search";

function NavigationMenu({ 
    className = "",
    items = [], 
    buttonsInNavigation = false,
    ...props
}) {
    return (
        <div className={`navigation-dropdown${className ? ` ${className}` : ""}`} id="navigation-dropdown" {...props}>
            <Search />
            {buttonsInNavigation && <Buttons />}
            <ul className="navigation-menu" id="navigation-menu">
                { items.map(item => {
                    return (
                        <li className="navigation-item" key={item.name}>
                            <a href={item.link} className="navigation-link">{item.name}</a>
                            {item.children && item.children.length > 0 &&
                                <ul className="navigation-level-2">
                                    {this.children.map(child => {
                                        return (
                                            <li className="navigation-level-2-item">
                                                <a href={child.link} className="navigation-level-2-link">
                                                    {child.name}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>}
                        </li>
                    );
                }) }
            </ul>
        </div>
    );
}

export default NavigationMenu;