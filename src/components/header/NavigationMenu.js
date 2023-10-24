import Buttons from "./Buttons";
import Search from "./Search";
import NavigationItem from "./NavigationItem";

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
                { items.map(item => <NavigationItem {...item} />) }
            </ul>
        </div>
    );
}

export default NavigationMenu;