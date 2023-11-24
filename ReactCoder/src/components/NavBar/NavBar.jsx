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
                    <NavLink to={`/category/Mangas`}>Mangas</NavLink>
                    <NavLink to={`/category/Comics`}>Comics</NavLink>
                    <NavLink to={`/category/Manhwas`}>Manhwas</NavLink>
                </ul>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;