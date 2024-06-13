import { NavLink } from "react-router-dom";

export const NoMatch = () => {
    return (
        <div id="nomatch" className={"container"}>
            <div>Sorry! Haven't implemented this page yet :P</div>
            <NavLink to={"/home"} style={{textDecoration: "none"}}>Go Home</NavLink>
        </div>
    );
}