import React from "react";
import "./Search.css";

const Search = () => {
    return (
        <form className="form-inline active-cyan-4 center">
            <input className="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search" aria-label="Search"/>
                <i className="fas fa-search" aria-hidden="true"></i>
        </form>
    )
}
export default Search;
