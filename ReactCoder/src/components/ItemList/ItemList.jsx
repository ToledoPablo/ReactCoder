import styles from './ItemList.module.css';
import Item from '../Item/Item';

const ItemList = ({productos}) => {
    return(
        <div className={styles.container}>
            {productos.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList;