import React from 'react'
import {NavLink} from "react-router-dom";

function Navbar() {

    // const changeTheme = (event) => {
    //     document.activeElement.blur();
    // }

    return (
        <nav id={"navbar"}>
            <div id={"links"}>
                <NavLink to={"/home"}>Home</NavLink>
                <NavLink to={"/projects"}>Projects</NavLink>
                <NavLink to={"/resume"}>Resumé</NavLink>
            </div>
            {/* <div id={"themes"}>
                <select id={"theme"} value={"dark"} onChange={changeTheme}>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="auto">Auto</option>
                    <option value="planets">C</option>
                    <option value="ghibli">G</option>
                </select>
            </div> */}
        </nav>
    )
}

export default Navbar