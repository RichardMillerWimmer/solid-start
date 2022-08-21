import { NavLink } from "@solidjs/router";
import { Component } from "solid-js";

const Nav: Component = () => {
    return (
        <nav>
            <NavLink href="/" end activeClass="">Home</NavLink>
            <NavLink href="/saved" activeClass="">Saved</NavLink>
        </nav >
    )
}

export default Nav