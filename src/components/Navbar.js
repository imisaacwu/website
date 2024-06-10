import '../css/styles.css'
import React from 'react'
import {NavLink} from "react-router-dom";

function Navbar() {

    const changeTheme = (event) => {
        document.activeElement.blur();
    }

    return (
        <nav id={"navbar"}>
            <div id={"links"}>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/projects"}>Projects</NavLink>
                {/*<Link to={"/"}>Resumé</Link>*/}
            </div>
            <div id={"themes"}>
                <select id={"theme"} onChange={changeTheme}>
                    <option>Light</option>
                    <option>Dark</option>
                    <option>Auto</option>
                    <option>Celestial</option>
                    <option>Ghibli</option>
                </select>
            </div>
        </nav>
    )
}

export default Navbar