import { NavLink } from "react-router-dom/";

const Navbar = () => {

    return(
    <nav className="Navbar">
        <NavLink to="/">Home</NavLink> |
        <NavLink to="/candy">Candy</NavLink> |
        <NavLink to="/chocolate">Chocolate</NavLink> | 
        <NavLink to="/chips">Chips</NavLink> |
    </nav>)
}

export default Navbar;