import CartWidget from "../CartWidget/CartWidget";
import style from './navbar.module.css'

function NavBar () {
    return (
        <nav className={style.navbar}>
            <h3>KameHouse</h3>
            <div>
                <ul>
                    <li><a href="">Mangas</a></li>
                    <li><a href="">Comics</a></li>
                    <li><a href="">Merchandising</a></li>
                </ul>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;