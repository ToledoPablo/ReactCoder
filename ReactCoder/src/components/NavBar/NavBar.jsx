import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import style from './navbar.module.css'


function NavBar () {
    return (
        <nav className={style.navbar}>
            <Link to="/">
                <h3>KameHouse</h3>
            </Link>
            <div>
                <ul>
                    <NavLink to={`/category/celular`}>Celulares</NavLink>
                    <NavLink to={`/category/tablet`}>Tablets</NavLink>
                    <NavLink to={`/category/notebook`}>Notebooks</NavLink>
                </ul>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;