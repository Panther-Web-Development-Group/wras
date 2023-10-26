import { FaSearch } from "react-icons/fa";

function Search() {
    return (
        <form className="search" id="search">
            <label htmlFor="search-input" className="search-label" id="search-label">Search</label>
            <div className="search-inner" id="search-inner">
                <input type="search" className="search-input" id="search-input" />
                <button type="submit" className="search-submit" id="search-submit">
                    <FaSearch />
                </button>
            </div>
        </form>
    );
}

export default Search;