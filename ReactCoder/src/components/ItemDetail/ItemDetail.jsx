import ItemCount from "../ItemCount/ItemCount";
import styles from './ItemDetail.module.css';




const ItemDetail = ({id, nombre, img, price, category, description, stock}) => {
    return(
        <article className={styles.container}>
            <picture>
                <img src={img} alt={nombre}/>
            </picture>
            <header>
                <h2 className={styles.title}>{nombre}</h2>
            </header>
            <section className={styles.section}>
                <p className={styles.p}>Categoria: <span>{category}</span></p>
                <p className={styles.p}>Descripcion: <span>{description}</span></p>
                <p className={styles.p}>Precio: <span>${price}</span></p>
            </section>
            <footer>
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada' + quantity)} />
            </footer>
        </article>
    )
}

export default ItemDetail;