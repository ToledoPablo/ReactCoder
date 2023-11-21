import styles from './Item.module.css';
import { Link } from 'react-router-dom';

const Item = ({id, nombre, img, price, stock}) => {
    return(
        <article>
            <header>
                <h2>{nombre}</h2>
            </header>
            <picture>
                <img src={img} alt={nombre}/>
            </picture>
            <section>
                <p>Precio: ${price}</p>
                <p>Stock disponible: {stock}</p>
            </section>
            <footer>
                <Link to={`/item/${id}`} className='option'>Ver Detalle</Link>
            </footer>
        </article>
    )
}

export default Item