import { NavLink } from "react-router"
import "./Navbar.css"

export const Navbar = () => {
    return (
        <nav id='navbar'>
            <div id='links'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/projects'>Projects</NavLink>
                {/* <NavLink to='/resume'>Resumé</NavLink> */}
            </div>
        </nav>
    )
}