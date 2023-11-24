import { useState, useEffect} from "react";
import styles from './ItemListContainer.module.css';
import {getProducts, getProductsByCategory} from '../../asynmock'
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer ({greeting}) {
    const [productos , setProductos] = useState([]);
    
    const {categoryId} = useParams();
    
    useEffect(() => {
        const asynFunc = categoryId ? getProductsByCategory : getProducts

        asynFunc(categoryId)
        .then((response) => {
            setProductos(response);
        })
        .catch((error) => { console.error(error) })
    }, [categoryId])


    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{greeting}</h1>
            <ItemList productos = {productos} />
        </div>

    )
}

export default ItemListContainer;