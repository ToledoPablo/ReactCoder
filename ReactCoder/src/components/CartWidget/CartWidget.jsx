import cart from './assets/cart.png'
import styles from './CartWidget.module.css'



function CartWidget() {
    return (
        <div>
            <img src={cart} alt="cart-widget" className={styles.cart} />
            0
        </div>
    )
}

export default CartWidget;