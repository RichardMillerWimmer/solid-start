import { Routes, Route } from "@solidjs/router";
import Home from "./pages/Home";
import Saved from "./pages/Saved";

export default (
    <Routes>
        <Route path='/' component={Home} />
        <Route path='/saved' component={Saved} />
    </Routes>
)