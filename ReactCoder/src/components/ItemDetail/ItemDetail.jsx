import ItemCount from "../ItemCount/ItemCount"




const ItemDetail = ({id, nombre, img, price, stock}) => {
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
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada' + quantity)} />
            </footer>
        </article>
    )
}

export default ItemDetail;