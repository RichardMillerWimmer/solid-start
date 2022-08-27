import { NavLink } from "@solidjs/router";
import { Component } from "solid-js";
import { savedRepos } from "../pages/Saved";

const Nav: Component = () => {
    return (
        <nav>
            <NavLink href="/" end activeClass="">Home</NavLink>
            <NavLink href="/saved" activeClass="">Saved - {savedRepos().length}</NavLink>
        </nav >
    )
}

export default Nav