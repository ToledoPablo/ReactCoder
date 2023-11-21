import styles from './ItemDetailContainer';
import { useEffect, useState } from 'react';
import { getProductsById } from '../../asynmock';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    useEffect(() => {
        getProductsById('1')
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return(
        <div>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer;