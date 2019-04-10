import React from "react";
import "./Search.css";

const Search = () => {
    return (
    <form className="form-inline center">
        <i className="fas fa-search" aria-hidden="true"></i>
        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search"/>
    </form>
    )
}
export default Search;