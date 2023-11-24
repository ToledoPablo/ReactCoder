import styles from './Item.module.css';
import { Link } from 'react-router-dom';

const Item = ({id, nombre, img, price, stock}) => {
    return(
        <article className={styles.cardContainer}>
            <picture>
                <img src={img} alt={nombre}/>
            </picture>
            <header>
                <h2 className={styles.title}>{nombre}</h2>
            </header>
            <section className={styles.section}>
                <p>Precio: ${price}</p>
                <p>Stock: {stock}</p>
            </section>
            <footer>
                <Link className={styles.btn} to={`/item/${id}`}>Ver Detalle</Link>
            </footer>
        </article>
    )
}

export default Item